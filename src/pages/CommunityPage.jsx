import { useState, useEffect } from 'react'
import { useAuth } from '@/contexts/AuthContext'
import { getAllCommentsWithReplies, createComment, deleteComment } from '@/lib/communityService'
import { getUserProfile } from '@/lib/profileService'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { MessageSquare, Send, Loader2, Trash2, Reply, LogIn } from 'lucide-react'
import { toast } from 'sonner'
import { Link } from 'react-router-dom'
import SEO from '@/components/SEO'
import { cn } from '@/lib/utils'

// Comment component for displaying individual comments
function CommentItem({ comment, currentUser, onReply, onDelete, level = 0 }) {
  const [profilePhotoUrl, setProfilePhotoUrl] = useState(null)
  const [showReplyForm, setShowReplyForm] = useState(false)
  const [replyText, setReplyText] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const loadProfilePhoto = async () => {
      if (comment.userId) {
        try {
          const profile = await getUserProfile(comment.userId)
          if (profile?.photoUrl) {
            setProfilePhotoUrl(profile.photoUrl)
          }
        } catch (error) {
          console.error('Error loading profile photo:', error)
        }
      }
    }
    loadProfilePhoto()
  }, [comment.userId])

  const handleReply = async () => {
    if (!replyText.trim()) {
      toast.error('Please enter a reply')
      return
    }

    setIsSubmitting(true)
    try {
      await onReply(comment.id, replyText.trim())
      setReplyText('')
      setShowReplyForm(false)
      toast.success('Reply posted successfully')
    } catch (error) {
      console.error('Error posting reply:', error)
      toast.error('Failed to post reply')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleDelete = async () => {
    if (!confirm('Are you sure you want to delete this comment?')) {
      return
    }

    setIsDeleting(true)
    try {
      await onDelete(comment.id)
      toast.success('Comment deleted successfully')
    } catch (error) {
      console.error('Error deleting comment:', error)
      toast.error('Failed to delete comment')
    } finally {
      setIsDeleting(false)
    }
  }

  const formatDate = (date) => {
    if (!date) return 'Just now'
    const now = new Date()
    const commentDate = date instanceof Date ? date : new Date(date)
    const diffInSeconds = Math.floor((now - commentDate) / 1000)

    if (diffInSeconds < 60) return 'Just now'
    if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)}m ago`
    if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)}h ago`
    if (diffInSeconds < 604800) return `${Math.floor(diffInSeconds / 86400)}d ago`
    return commentDate.toLocaleDateString()
  }

  const canDelete = currentUser && (currentUser.uid === comment.userId || currentUser.email === 'admin@example.com')

  return (
    <div className={cn("mb-4", level > 0 && "ml-8 border-l-2 border-border/30 pl-4")}>
      <div className="flex gap-3">
        <Avatar className="h-8 w-8 flex-shrink-0">
          <AvatarImage src={profilePhotoUrl || comment.userPhotoUrl} alt={comment.userName} />
          <AvatarFallback className="bg-primary/10 text-primary text-xs">
            {comment.userName?.charAt(0)?.toUpperCase() || 'U'}
          </AvatarFallback>
        </Avatar>
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2 mb-1">
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <span className="font-semibold text-sm">{comment.userName || 'Anonymous'}</span>
                <span className="text-xs text-muted-foreground">{formatDate(comment.createdAt)}</span>
              </div>
            </div>
            {canDelete && (
              <Button
                variant="ghost"
                size="sm"
                className="h-6 w-6 p-0 text-destructive hover:text-destructive"
                onClick={handleDelete}
                disabled={isDeleting}
              >
                {isDeleting ? (
                  <Loader2 className="h-3 w-3 animate-spin" />
                ) : (
                  <Trash2 className="h-3 w-3" />
                )}
              </Button>
            )}
          </div>
          <p className="text-sm text-foreground/90 whitespace-pre-wrap break-words mb-2">
            {comment.text}
          </p>
          {currentUser && level < 3 && (
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="sm"
                className="h-7 text-xs"
                onClick={() => setShowReplyForm(!showReplyForm)}
              >
                <Reply className="h-3 w-3 mr-1" />
                Reply
              </Button>
            </div>
          )}
          {showReplyForm && currentUser && (
            <div className="mt-3 space-y-2">
              <Textarea
                placeholder="Write your reply..."
                value={replyText}
                onChange={(e) => setReplyText(e.target.value)}
                className="min-h-[80px] text-sm"
                rows={3}
              />
              <div className="flex gap-2">
                <Button
                  size="sm"
                  onClick={handleReply}
                  disabled={isSubmitting || !replyText.trim()}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="h-3 w-3 mr-1 animate-spin" />
                      Posting...
                    </>
                  ) : (
                    <>
                      <Send className="h-3 w-3 mr-1" />
                      Post Reply
                    </>
                  )}
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => {
                    setShowReplyForm(false)
                    setReplyText('')
                  }}
                >
                  Cancel
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
      {/* Render nested replies */}
      {comment.replies && comment.replies.length > 0 && (
        <div className="mt-4">
          {comment.replies.map((reply) => (
            <CommentItem
              key={reply.id}
              comment={reply}
              currentUser={currentUser}
              onReply={onReply}
              onDelete={onDelete}
              level={level + 1}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default function CommunityPage() {
  const { currentUser } = useAuth()
  const [comments, setComments] = useState([])
  const [loading, setLoading] = useState(true)
  const [newCommentText, setNewCommentText] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [userProfile, setUserProfile] = useState(null)

  useEffect(() => {
    loadComments()
  }, [])

  useEffect(() => {
    const loadUserProfile = async () => {
      if (currentUser) {
        try {
          const profile = await getUserProfile(currentUser.uid)
          setUserProfile(profile)
        } catch (error) {
          console.error('Error loading user profile:', error)
        }
      }
    }
    loadUserProfile()
  }, [currentUser])

  const loadComments = async () => {
    try {
      setLoading(true)
      const data = await getAllCommentsWithReplies()
      setComments(data)
    } catch (error) {
      console.error('Error loading comments:', error)
      toast.error('Failed to load comments')
    } finally {
      setLoading(false)
    }
  }

  const handleSubmitComment = async () => {
    if (!newCommentText.trim()) {
      toast.error('Please enter a comment')
      return
    }

    if (!currentUser) {
      toast.error('Please login to post a comment')
      return
    }

    setIsSubmitting(true)
    try {
      const commentData = {
        text: newCommentText.trim(),
        userId: currentUser.uid,
        userName: currentUser.displayName || userProfile?.displayName || 'Anonymous',
        userEmail: currentUser.email,
        userPhotoUrl: currentUser.photoURL || userProfile?.photoUrl || null,
        parentId: null // Top-level comment
      }

      await createComment(commentData)
      setNewCommentText('')
      await loadComments() // Reload comments to show the new one
      toast.success('Comment posted successfully')
    } catch (error) {
      console.error('Error posting comment:', error)
      toast.error('Failed to post comment')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleReply = async (parentId, replyText) => {
    if (!currentUser) {
      toast.error('Please login to reply')
      return
    }

    try {
      const replyData = {
        text: replyText,
        userId: currentUser.uid,
        userName: currentUser.displayName || userProfile?.displayName || 'Anonymous',
        userEmail: currentUser.email,
        userPhotoUrl: currentUser.photoURL || userProfile?.photoUrl || null,
        parentId: parentId
      }

      await createComment(replyData)
      await loadComments() // Reload comments to show the new reply
    } catch (error) {
      console.error('Error posting reply:', error)
      throw error
    }
  }

  const handleDelete = async (commentId) => {
    try {
      await deleteComment(commentId)
      await loadComments() // Reload comments after deletion
    } catch (error) {
      console.error('Error deleting comment:', error)
      throw error
    }
  }

  return (
    <>
      <SEO
        title="Community - Moradabads"
        description="Join our community! Share your thoughts, ask questions, and connect with fellow developers."
        keywords="community, discussion, forum, developers, coding"
      />
      <div className="container mx-auto px-4 py-8 md:py-12 max-w-4xl">
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <MessageSquare className="h-8 w-8 text-primary" />
            <h1 className="text-3xl md:text-4xl font-bold">Community</h1>
          </div>
          <p className="text-muted-foreground">
            Share your thoughts, ask questions, and connect with fellow developers
          </p>
        </div>

        {/* Comment Form - Only visible to logged-in users */}
        {currentUser ? (
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-lg">Post a Comment</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <Textarea
                  placeholder="What's on your mind?"
                  value={newCommentText}
                  onChange={(e) => setNewCommentText(e.target.value)}
                  className="min-h-[120px]"
                  rows={5}
                />
                <div className="flex justify-end">
                  <Button
                    onClick={handleSubmitComment}
                    disabled={isSubmitting || !newCommentText.trim()}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                        Posting...
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4 mr-2" />
                        Post Comment
                      </>
                    )}
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ) : (
          <Card className="mb-8 border-primary/20 bg-primary/5">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <LogIn className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-semibold">Login Required</p>
                    <p className="text-sm text-muted-foreground">
                      Please login to post comments and join the discussion
                    </p>
                  </div>
                </div>
                <Button asChild>
                  <Link to="/login">Login</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Comments List */}
        <div className="space-y-6">
          {loading ? (
            <div className="flex items-center justify-center py-12">
              <Loader2 className="h-8 w-8 animate-spin text-primary" />
            </div>
          ) : comments.length === 0 ? (
            <Card>
              <CardContent className="pt-6">
                <div className="text-center py-12">
                  <MessageSquare className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                  <p className="text-muted-foreground">
                    No comments yet. Be the first to start the conversation!
                  </p>
                </div>
              </CardContent>
            </Card>
          ) : (
            comments.map((comment) => (
              <Card key={comment.id}>
                <CardContent className="pt-6">
                  <CommentItem
                    comment={comment}
                    currentUser={currentUser}
                    onReply={handleReply}
                    onDelete={handleDelete}
                  />
                </CardContent>
              </Card>
            ))
          )}
        </div>
      </div>
    </>
  )
}


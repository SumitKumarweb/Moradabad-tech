import { useState, useEffect } from 'react'
import { useAuth } from '@/contexts/AuthContext'
import { useNavigate } from 'react-router-dom'
import { 
  getUserProfile, 
  updateProfileWithFiles 
} from '@/lib/profileService'
import { User, Mail, Phone, Linkedin, Code, FileText, Upload, Save, Loader2, Camera } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { toast } from 'sonner'

export default function ProfilePage() {
  const { currentUser } = useAuth()
  const navigate = useNavigate()
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [photoPreview, setPhotoPreview] = useState(null)
  const [resumeFileName, setResumeFileName] = useState('')
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    gender: '',
    linkedinId: '',
    leetcodeId: '',
    photoUrl: '',
    resumeUrl: ''
  })

  const [files, setFiles] = useState({
    photo: null,
    resume: null
  })

  useEffect(() => {
    if (!currentUser) {
      navigate('/login')
      return
    }

    loadProfile()
  }, [currentUser, navigate])

  const loadProfile = async () => {
    try {
      setLoading(true)
      const profile = await getUserProfile(currentUser.uid)
      
      if (profile) {
        setFormData({
          name: profile.name || currentUser.displayName || '',
          email: profile.email || currentUser.email || '',
          phone: profile.phone || '',
          gender: profile.gender || '',
          linkedinId: profile.linkedinId || '',
          leetcodeId: profile.leetcodeId || '',
          photoUrl: profile.photoUrl || '',
          resumeUrl: profile.resumeUrl || ''
        })
        
        if (profile.photoUrl) {
          setPhotoPreview(profile.photoUrl)
        }
        
        if (profile.resumeUrl) {
          // Extract filename from URL
          const urlParts = profile.resumeUrl.split('/')
          const fileName = urlParts[urlParts.length - 1].split('?')[0]
          setResumeFileName(fileName.replace(/^resume_\d+_/, ''))
        }
      } else {
        // Initialize with auth user data
        setFormData({
          name: currentUser.displayName || '',
          email: currentUser.email || '',
          phone: '',
          gender: '',
          linkedinId: '',
          leetcodeId: '',
          photoUrl: '',
          resumeUrl: ''
        })
      }
    } catch (error) {
      console.error('Error loading profile:', error)
      toast.error('Failed to load profile')
    } finally {
      setLoading(false)
    }
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handlePhotoChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      // Validate file type
      if (!file.type.startsWith('image/')) {
        toast.error('Please select an image file')
        return
      }
      
      // Validate file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        toast.error('Image size should be less than 5MB')
        return
      }
      
      setFiles(prev => ({ ...prev, photo: file }))
      
      // Create preview
      const reader = new FileReader()
      reader.onloadend = () => {
        setPhotoPreview(reader.result)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleResumeChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      // Validate file type
      const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document']
      if (!allowedTypes.includes(file.type)) {
        toast.error('Please select a PDF or Word document')
        return
      }
      
      // Validate file size (max 10MB)
      if (file.size > 10 * 1024 * 1024) {
        toast.error('Resume size should be less than 10MB')
        return
      }
      
      setFiles(prev => ({ ...prev, resume: file }))
      setResumeFileName(file.name)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!currentUser) {
      toast.error('You must be logged in to save your profile')
      return
    }

    try {
      setSaving(true)
      
      await updateProfileWithFiles(
        currentUser.uid,
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          gender: formData.gender,
          linkedinId: formData.linkedinId,
          leetcodeId: formData.leetcodeId
        },
        files.photo,
        files.resume
      )
      
      toast.success('Profile saved successfully!')
      
      // Reload profile to get updated URLs
      await loadProfile()
      
      // Clear file inputs
      setFiles({ photo: null, resume: null })
    } catch (error) {
      console.error('Error saving profile:', error)
      toast.error('Failed to save profile. Please try again.')
    } finally {
      setSaving(false)
    }
  }

  if (loading) {
    return (
      <div className="container px-4 md:px-6 lg:px-8 py-12 flex items-center justify-center min-h-[60vh]">
        <div className="flex flex-col items-center gap-4">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
          <p className="text-muted-foreground">Loading profile...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-8 md:py-12 lg:py-16 max-w-7xl">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">Profile Settings</h1>
            <p className="text-muted-foreground">
              Manage your profile information and preferences
            </p>
          </div>

          <form onSubmit={handleSubmit}>
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="h-5 w-5" />
                  Personal Information
                </CardTitle>
                <CardDescription>
                  Update your personal details and contact information
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Photo Upload */}
                <div className="flex flex-col items-center gap-4 pb-6 border-b">
                  <div className="relative">
                    <div className="h-32 w-32 rounded-full overflow-hidden border-4 border-primary/20 bg-muted flex items-center justify-center">
                      {photoPreview ? (
                        <img 
                          src={photoPreview} 
                          alt="Profile" 
                          className="h-full w-full object-cover"
                        />
                      ) : (
                        <User className="h-16 w-16 text-muted-foreground" />
                      )}
                    </div>
                    <label
                      htmlFor="photo-upload"
                      className="absolute bottom-0 right-0 h-10 w-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center cursor-pointer hover:bg-primary/90 transition-colors shadow-lg"
                    >
                      <Camera className="h-5 w-5" />
                      <input
                        id="photo-upload"
                        type="file"
                        accept="image/*"
                        onChange={handlePhotoChange}
                        className="hidden"
                      />
                    </label>
                  </div>
                  <p className="text-sm text-muted-foreground text-center">
                    Click the camera icon to upload a profile photo (Max 5MB)
                  </p>
                </div>

                {/* Name */}
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name *</Label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="pl-10"
                      placeholder="Enter your full name"
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="pl-10"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                {/* Phone */}
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="pl-10"
                      placeholder="Enter your phone number"
                    />
                  </div>
                </div>

                {/* Gender */}
                <div className="space-y-2">
                  <Label htmlFor="gender">Gender</Label>
                  <Select
                    value={formData.gender}
                    onValueChange={(value) => setFormData(prev => ({ ...prev, gender: value }))}
                  >
                    <SelectTrigger id="gender">
                      <SelectValue placeholder="Select gender" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="male">Male</SelectItem>
                      <SelectItem value="female">Female</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                      <SelectItem value="prefer-not-to-say">Prefer not to say</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>

            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Code className="h-5 w-5" />
                  Professional Links
                </CardTitle>
                <CardDescription>
                  Add your professional profile links
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* LinkedIn */}
                <div className="space-y-2">
                  <Label htmlFor="linkedinId">LinkedIn Profile</Label>
                  <div className="relative">
                    <Linkedin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="linkedinId"
                      name="linkedinId"
                      type="text"
                      value={formData.linkedinId}
                      onChange={handleInputChange}
                      className="pl-10"
                      placeholder="LinkedIn username or profile URL"
                    />
                  </div>
                </div>

                {/* LeetCode */}
                <div className="space-y-2">
                  <Label htmlFor="leetcodeId">LeetCode Profile</Label>
                  <div className="relative">
                    <Code className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="leetcodeId"
                      name="leetcodeId"
                      type="text"
                      value={formData.leetcodeId}
                      onChange={handleInputChange}
                      className="pl-10"
                      placeholder="LeetCode username"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5" />
                  Resume
                </CardTitle>
                <CardDescription>
                  Upload your resume (PDF or Word document, Max 10MB)
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {formData.resumeUrl && (
                    <div className="p-4 bg-muted rounded-lg flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <FileText className="h-5 w-5 text-primary" />
                        <div>
                          <p className="font-medium">{resumeFileName || 'Resume.pdf'}</p>
                          <a 
                            href={formData.resumeUrl} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-sm text-primary hover:underline"
                          >
                            View current resume
                          </a>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  <label htmlFor="resume-upload" className="cursor-pointer">
                    <div className="flex items-center justify-center gap-2 p-6 border-2 border-dashed rounded-lg hover:border-primary/50 transition-colors">
                      <Upload className="h-5 w-5 text-muted-foreground" />
                      <span className="text-sm font-medium">
                        {files.resume ? files.resume.name : 'Click to upload or replace resume'}
                      </span>
                    </div>
                    <input
                      id="resume-upload"
                      type="file"
                      accept=".pdf,.doc,.docx"
                      onChange={handleResumeChange}
                      className="hidden"
                    />
                  </label>
                </div>
              </CardContent>
            </Card>

            <div className="flex justify-end gap-4">
              <Button
                type="button"
                variant="outline"
                onClick={() => navigate(-1)}
                disabled={saving}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                disabled={saving}
                className="min-w-[120px]"
              >
                {saving ? (
                  <>
                    <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                    Saving...
                  </>
                ) : (
                  <>
                    <Save className="h-4 w-4 mr-2" />
                    Save Profile
                  </>
                )}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}


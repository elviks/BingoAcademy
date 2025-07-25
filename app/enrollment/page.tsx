"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { Code, ArrowLeft, ArrowRight, CheckCircle, User, CreditCard, FileText } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/navigation"

const courses = [
  {
    id: 1,
    title: "Scratch Programming for Kids",
    description: "Visual programming language perfect for beginners aged 8-12",
    duration: "8 weeks",
    level: "Beginner",
    price: 199,
    originalPrice: 249,
    image: "/placeholder.svg?height=150&width=200",
    category: "Scratch",
    ageGroup: "8-12",
  },
  {
    id: 2,
    title: "Python Fundamentals",
    description: "Learn the basics of Python programming with hands-on projects",
    duration: "12 weeks",
    level: "Beginner",
    price: 299,
    originalPrice: 399,
    image: "/placeholder.svg?height=150&width=200",
    category: "Python",
    ageGroup: "12+",
  },
  {
    id: 3,
    title: "Web Development Bootcamp",
    description: "HTML, CSS, JavaScript, and React - build real websites",
    duration: "16 weeks",
    level: "Intermediate",
    price: 499,
    originalPrice: 649,
    image: "/placeholder.svg?height=150&width=200",
    category: "Web Development",
    ageGroup: "14+",
  },
  {
    id: 4,
    title: "Robotics & Arduino",
    description: "Build and program robots using Arduino microcontrollers",
    duration: "10 weeks",
    level: "Intermediate",
    price: 399,
    originalPrice: 499,
    image: "/placeholder.svg?height=150&width=200",
    category: "Robotics",
    ageGroup: "12+",
  },
]

export default function EnrollmentPage() {
  const router = useRouter()
  const [currentStep, setCurrentStep] = useState(1)
  const [selectedCourse, setSelectedCourse] = useState<number | null>(null)
  const [formData, setFormData] = useState({
    // Course Selection
    courseId: null as number | null,
    classType: "",
    startDate: "",

    // Student Information
    studentName: "",
    studentAge: "",
    studentGrade: "",
    programmingExperience: "",
    interests: [] as string[],

    // Parent Information
    parentName: "",
    parentEmail: "",
    parentPhone: "",
    relationship: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",

    // Additional Information
    specialRequests: "",
    medicalInfo: "",
    emergencyContact: "",
    emergencyPhone: "",

    // Payment
    paymentMethod: "",
    agreeToTerms: false,
    marketingConsent: false,
  })

  const steps = [
    { number: 1, title: "Course Selection", icon: FileText },
    { number: 2, title: "Student Info", icon: User },
    { number: 3, title: "Parent Info", icon: User },
    { number: 4, title: "Review & Payment", icon: CreditCard },
  ]

  const handleInputChange = (field: string, value: any) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const handleInterestToggle = (interest: string) => {
    setFormData((prev) => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter((i) => i !== interest)
        : [...prev.interests, interest],
    }))
  }

  const nextStep = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleSubmit = () => {
    console.log("Enrollment submitted:", formData)
    router.push("/enrollment/success")
  }

  const selectedCourseData = courses.find((c) => c.id === formData.courseId)

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50/30 via-white to-orange-50/30">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-orange-100/50">
        <div className="container mx-auto px-6 py-4">
          <nav className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="w-10 h-10 bg-gradient-to-r from-orange-600 to-orange-500 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-orange-200 transition-all duration-300 group-hover:scale-105">
                <Code className="w-5 h-5 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent">
                Bingo Academy
              </span>
            </Link>

            <Link href="/">
              <Button variant="outline" className="bg-transparent">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
            </Link>
          </nav>
        </div>
      </header>

      <div className="container mx-auto px-6 py-12">
        {/* Progress Steps */}
        <div className="mb-12">
          <div className="flex items-center justify-center space-x-8">
            {steps.map((step, index) => (
              <div key={step.number} className="flex items-center">
                <div className="flex flex-col items-center">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                      currentStep >= step.number
                        ? "bg-gradient-to-r from-orange-600 to-orange-500 text-white shadow-lg"
                        : "bg-gray-200 text-gray-500"
                    }`}
                  >
                    {currentStep > step.number ? (
                      <CheckCircle className="w-6 h-6" />
                    ) : (
                      <step.icon className="w-6 h-6" />
                    )}
                  </div>
                  <span
                    className={`mt-2 text-sm font-medium ${
                      currentStep >= step.number ? "text-orange-600" : "text-gray-500"
                    }`}
                  >
                    {step.title}
                  </span>
                </div>
                {index < steps.length - 1 && (
                  <div
                    className={`w-16 h-1 mx-4 transition-all duration-300 ${
                      currentStep > step.number ? "bg-orange-600" : "bg-gray-200"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Step 1: Course Selection */}
          {currentStep === 1 && (
            <Card className="shadow-xl border-0">
              <CardHeader className="text-center">
                <CardTitle className="text-3xl text-gray-900">Choose Your Course</CardTitle>
                <CardDescription className="text-lg">
                  Select the perfect course to start your coding journey
                </CardDescription>
              </CardHeader>
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  {courses.map((course) => (
                    <Card
                      key={course.id}
                      className={`cursor-pointer transition-all duration-300 hover:shadow-lg ${
                        formData.courseId === course.id ? "ring-2 ring-orange-600 shadow-lg" : "hover:shadow-md"
                      }`}
                      onClick={() => handleInputChange("courseId", course.id)}
                    >
                      <div className="relative">
                        <Image
                          src={course.image || "/placeholder.svg"}
                          alt={course.title}
                          width={200}
                          height={150}
                          className="w-full h-40 object-cover rounded-t-lg"
                        />
                        <Badge className="absolute top-4 left-4 bg-white/90 text-gray-800">{course.category}</Badge>
                        <Badge className="absolute top-4 right-4 bg-orange-600 text-white">
                          Ages {course.ageGroup}
                        </Badge>
                      </div>
                      <CardContent className="p-6">
                        <div className="flex justify-between items-start mb-3">
                          <Badge variant="secondary">{course.level}</Badge>
                          <div className="text-right">
                            <div className="text-2xl font-bold text-orange-600">${course.price}</div>
                            <div className="text-sm text-gray-500 line-through">${course.originalPrice}</div>
                          </div>
                        </div>
                        <h3 className="text-lg font-semibold mb-2">{course.title}</h3>
                        <p className="text-gray-600 text-sm mb-4">{course.description}</p>
                        <div className="text-sm text-gray-500">{course.duration}</div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {formData.courseId && (
                  <div className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="classType">Class Type</Label>
                        <Select
                          value={formData.classType}
                          onValueChange={(value) => handleInputChange("classType", value)}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select class type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="online">Online Classes</SelectItem>
                            <SelectItem value="physical">In-Person Classes</SelectItem>
                            <SelectItem value="hybrid">Hybrid (Online + In-Person)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="startDate">Preferred Start Date</Label>
                        <Input
                          id="startDate"
                          type="date"
                          value={formData.startDate}
                          onChange={(e) => handleInputChange("startDate", e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                )}

                <div className="flex justify-end mt-8">
                  <Button
                    onClick={nextStep}
                    disabled={!formData.courseId || !formData.classType || !formData.startDate}
                    className="bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 px-8 py-3"
                  >
                    Next Step
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Step 2: Student Information */}
          {currentStep === 2 && (
            <Card className="shadow-xl border-0">
              <CardHeader className="text-center">
                <CardTitle className="text-3xl text-gray-900">Student Information</CardTitle>
                <CardDescription className="text-lg">
                  Tell us about the student who will be taking the course
                </CardDescription>
              </CardHeader>
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="studentName">Student Name *</Label>
                      <Input
                        id="studentName"
                        value={formData.studentName}
                        onChange={(e) => handleInputChange("studentName", e.target.value)}
                        placeholder="Enter student's full name"
                      />
                    </div>
                    <div>
                      <Label htmlFor="studentAge">Age *</Label>
                      <Input
                        id="studentAge"
                        type="number"
                        value={formData.studentAge}
                        onChange={(e) => handleInputChange("studentAge", e.target.value)}
                        placeholder="Enter age"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="studentGrade">Current Grade</Label>
                      <Select
                        value={formData.studentGrade}
                        onValueChange={(value) => handleInputChange("studentGrade", value)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select grade" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="k">Kindergarten</SelectItem>
                          <SelectItem value="1">1st Grade</SelectItem>
                          <SelectItem value="2">2nd Grade</SelectItem>
                          <SelectItem value="3">3rd Grade</SelectItem>
                          <SelectItem value="4">4th Grade</SelectItem>
                          <SelectItem value="5">5th Grade</SelectItem>
                          <SelectItem value="6">6th Grade</SelectItem>
                          <SelectItem value="7">7th Grade</SelectItem>
                          <SelectItem value="8">8th Grade</SelectItem>
                          <SelectItem value="9">9th Grade</SelectItem>
                          <SelectItem value="10">10th Grade</SelectItem>
                          <SelectItem value="11">11th Grade</SelectItem>
                          <SelectItem value="12">12th Grade</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="programmingExperience">Programming Experience</Label>
                      <Select
                        value={formData.programmingExperience}
                        onValueChange={(value) => handleInputChange("programmingExperience", value)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select experience level" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="none">No Experience</SelectItem>
                          <SelectItem value="basic">Basic (Some exposure)</SelectItem>
                          <SelectItem value="intermediate">Intermediate</SelectItem>
                          <SelectItem value="advanced">Advanced</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <Label>Student's Interests (Select all that apply)</Label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-3">
                      {[
                        "Games",
                        "Art & Design",
                        "Music",
                        "Science",
                        "Math",
                        "Robotics",
                        "Web Design",
                        "Mobile Apps",
                        "AI & ML",
                      ].map((interest) => (
                        <div key={interest} className="flex items-center space-x-2">
                          <Checkbox
                            id={interest}
                            checked={formData.interests.includes(interest)}
                            onCheckedChange={() => handleInterestToggle(interest)}
                          />
                          <Label htmlFor={interest} className="text-sm">
                            {interest}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex justify-between mt-8">
                  <Button variant="outline" onClick={prevStep} className="bg-transparent">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Previous
                  </Button>
                  <Button
                    onClick={nextStep}
                    disabled={!formData.studentName || !formData.studentAge}
                    className="bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 px-8 py-3"
                  >
                    Next Step
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Step 3: Parent Information */}
          {currentStep === 3 && (
            <Card className="shadow-xl border-0">
              <CardHeader className="text-center">
                <CardTitle className="text-3xl text-gray-900">Parent/Guardian Information</CardTitle>
                <CardDescription className="text-lg">
                  We need your contact information for enrollment and updates
                </CardDescription>
              </CardHeader>
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="parentName">Parent/Guardian Name *</Label>
                      <Input
                        id="parentName"
                        value={formData.parentName}
                        onChange={(e) => handleInputChange("parentName", e.target.value)}
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
                      <Label htmlFor="relationship">Relationship to Student</Label>
                      <Select
                        value={formData.relationship}
                        onValueChange={(value) => handleInputChange("relationship", value)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select relationship" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="parent">Parent</SelectItem>
                          <SelectItem value="guardian">Guardian</SelectItem>
                          <SelectItem value="grandparent">Grandparent</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="parentEmail">Email Address *</Label>
                      <Input
                        id="parentEmail"
                        type="email"
                        value={formData.parentEmail}
                        onChange={(e) => handleInputChange("parentEmail", e.target.value)}
                        placeholder="Enter your email"
                      />
                    </div>
                    <div>
                      <Label htmlFor="parentPhone">Phone Number *</Label>
                      <Input
                        id="parentPhone"
                        type="tel"
                        value={formData.parentPhone}
                        onChange={(e) => handleInputChange("parentPhone", e.target.value)}
                        placeholder="Enter your phone number"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="address">Address *</Label>
                    <Input
                      id="address"
                      value={formData.address}
                      onChange={(e) => handleInputChange("address", e.target.value)}
                      placeholder="Enter street address"
                    />
                  </div>

                  <div className="grid md:grid-cols-3 gap-6">
                    <div>
                      <Label htmlFor="city">City *</Label>
                      <Input
                        id="city"
                        value={formData.city}
                        onChange={(e) => handleInputChange("city", e.target.value)}
                        placeholder="Enter city"
                      />
                    </div>
                    <div>
                      <Label htmlFor="state">State *</Label>
                      <Input
                        id="state"
                        value={formData.state}
                        onChange={(e) => handleInputChange("state", e.target.value)}
                        placeholder="Enter state"
                      />
                    </div>
                    <div>
                      <Label htmlFor="zipCode">ZIP Code *</Label>
                      <Input
                        id="zipCode"
                        value={formData.zipCode}
                        onChange={(e) => handleInputChange("zipCode", e.target.value)}
                        placeholder="Enter ZIP code"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="emergencyContact">Emergency Contact Name</Label>
                      <Input
                        id="emergencyContact"
                        value={formData.emergencyContact}
                        onChange={(e) => handleInputChange("emergencyContact", e.target.value)}
                        placeholder="Enter emergency contact name"
                      />
                    </div>
                    <div>
                      <Label htmlFor="emergencyPhone">Emergency Contact Phone</Label>
                      <Input
                        id="emergencyPhone"
                        type="tel"
                        value={formData.emergencyPhone}
                        onChange={(e) => handleInputChange("emergencyPhone", e.target.value)}
                        placeholder="Enter emergency contact phone"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="medicalInfo">Medical Information (Optional)</Label>
                    <Textarea
                      id="medicalInfo"
                      value={formData.medicalInfo}
                      onChange={(e) => handleInputChange("medicalInfo", e.target.value)}
                      placeholder="Any medical conditions, allergies, or special needs we should be aware of..."
                      rows={3}
                    />
                  </div>

                  <div>
                    <Label htmlFor="specialRequests">Special Requests (Optional)</Label>
                    <Textarea
                      id="specialRequests"
                      value={formData.specialRequests}
                      onChange={(e) => handleInputChange("specialRequests", e.target.value)}
                      placeholder="Any special accommodations or requests..."
                      rows={3}
                    />
                  </div>
                </div>

                <div className="flex justify-between mt-8">
                  <Button variant="outline" onClick={prevStep} className="bg-transparent">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Previous
                  </Button>
                  <Button
                    onClick={nextStep}
                    disabled={
                      !formData.parentName ||
                      !formData.parentEmail ||
                      !formData.parentPhone ||
                      !formData.address ||
                      !formData.city ||
                      !formData.state ||
                      !formData.zipCode
                    }
                    className="bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 px-8 py-3"
                  >
                    Next Step
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Step 4: Review & Payment */}
          {currentStep === 4 && (
            <Card className="shadow-xl border-0">
              <CardHeader className="text-center">
                <CardTitle className="text-3xl text-gray-900">Review & Payment</CardTitle>
                <CardDescription className="text-lg">
                  Please review your information and complete the enrollment
                </CardDescription>
              </CardHeader>
              <CardContent className="p-8">
                <div className="space-y-8">
                  {/* Course Summary */}
                  {selectedCourseData && (
                    <div className="bg-orange-50 rounded-lg p-6">
                      <h3 className="text-xl font-semibold mb-4">Course Summary</h3>
                      <div className="flex items-start space-x-4">
                        <Image
                          src={selectedCourseData.image || "/placeholder.svg"}
                          alt={selectedCourseData.title}
                          width={120}
                          height={80}
                          className="rounded-lg object-cover"
                        />
                        <div className="flex-1">
                          <h4 className="font-semibold text-lg">{selectedCourseData.title}</h4>
                          <p className="text-gray-600 mb-2">{selectedCourseData.description}</p>
                          <div className="flex items-center space-x-4 text-sm text-gray-500">
                            <span>{selectedCourseData.duration}</span>
                            <span>{selectedCourseData.level}</span>
                            <span>Ages {selectedCourseData.ageGroup}</span>
                          </div>
                          <div className="mt-2">
                            <span className="text-sm text-gray-500">Class Type: </span>
                            <span className="font-medium capitalize">{formData.classType}</span>
                          </div>
                          <div>
                            <span className="text-sm text-gray-500">Start Date: </span>
                            <span className="font-medium">{new Date(formData.startDate).toLocaleDateString()}</span>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-orange-600">${selectedCourseData.price}</div>
                          <div className="text-sm text-gray-500 line-through">${selectedCourseData.originalPrice}</div>
                          <Badge className="bg-green-100 text-green-800 mt-1">
                            Save ${selectedCourseData.originalPrice - selectedCourseData.price}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Student & Parent Info Summary */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-gray-50 rounded-lg p-6">
                      <h3 className="text-lg font-semibold mb-4">Student Information</h3>
                      <div className="space-y-2 text-sm">
                        <div>
                          <span className="font-medium">Name:</span> {formData.studentName}
                        </div>
                        <div>
                          <span className="font-medium">Age:</span> {formData.studentAge}
                        </div>
                        <div>
                          <span className="font-medium">Grade:</span> {formData.studentGrade}
                        </div>
                        <div>
                          <span className="font-medium">Experience:</span> {formData.programmingExperience}
                        </div>
                        {formData.interests.length > 0 && (
                          <div>
                            <span className="font-medium">Interests:</span> {formData.interests.join(", ")}
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="bg-gray-50 rounded-lg p-6">
                      <h3 className="text-lg font-semibold mb-4">Parent Information</h3>
                      <div className="space-y-2 text-sm">
                        <div>
                          <span className="font-medium">Name:</span> {formData.parentName}
                        </div>
                        <div>
                          <span className="font-medium">Email:</span> {formData.parentEmail}
                        </div>
                        <div>
                          <span className="font-medium">Phone:</span> {formData.parentPhone}
                        </div>
                        <div>
                          <span className="font-medium">Address:</span> {formData.address}, {formData.city},{" "}
                          {formData.state} {formData.zipCode}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Payment Method */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Payment Method</h3>
                    <RadioGroup
                      value={formData.paymentMethod}
                      onValueChange={(value) => handleInputChange("paymentMethod", value)}
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="full" id="full" />
                        <Label htmlFor="full">Pay in Full (${selectedCourseData?.price})</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="installment" id="installment" />
                        <Label htmlFor="installment">
                          Monthly Installments (3 payments of $
                          {selectedCourseData ? Math.ceil(selectedCourseData.price / 3) : 0})
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>

                  {/* Terms and Conditions */}
                  <div className="space-y-4">
                    <div className="flex items-start space-x-2">
                      <Checkbox
                        id="terms"
                        checked={formData.agreeToTerms}
                        onCheckedChange={(checked) => handleInputChange("agreeToTerms", checked)}
                      />
                      <Label htmlFor="terms" className="text-sm leading-relaxed">
                        I agree to the{" "}
                        <Link href="/terms" className="text-orange-600 hover:underline">
                          Terms and Conditions
                        </Link>{" "}
                        and{" "}
                        <Link href="/privacy" className="text-orange-600 hover:underline">
                          Privacy Policy
                        </Link>
                      </Label>
                    </div>
                    <div className="flex items-start space-x-2">
                      <Checkbox
                        id="marketing"
                        checked={formData.marketingConsent}
                        onCheckedChange={(checked) => handleInputChange("marketingConsent", checked)}
                      />
                      <Label htmlFor="marketing" className="text-sm leading-relaxed">
                        I would like to receive updates about new courses, events, and special offers from Bingo Academy
                      </Label>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between mt-8">
                  <Button variant="outline" onClick={prevStep} className="bg-transparent">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Previous
                  </Button>
                  <Button
                    onClick={handleSubmit}
                    disabled={!formData.paymentMethod || !formData.agreeToTerms}
                    className="bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 px-8 py-3"
                  >
                    Complete Enrollment
                    <CheckCircle className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  )
}

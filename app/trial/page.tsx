"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Code, ArrowLeft, Clock, Users, Star, Play, CheckCircle } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/navigation"

const trialClasses = [
  {
    id: 1,
    title: "Scratch Programming Basics",
    description: "Create your first animated story using visual programming blocks",
    duration: "45 minutes",
    ageGroup: "8-12",
    instructor: "Sarah Johnson",
    image: "/placeholder.svg?height=150&width=200",
    difficulty: "Beginner",
    maxStudents: 8,
    timeSlots: [
      { id: "sat-10", day: "Saturday", time: "10:00 AM", date: "2024-02-10", available: 3 },
      { id: "sat-2", day: "Saturday", time: "2:00 PM", date: "2024-02-10", available: 5 },
      { id: "sun-10", day: "Sunday", time: "10:00 AM", date: "2024-02-11", available: 2 },
      { id: "sun-2", day: "Sunday", time: "2:00 PM", date: "2024-02-11", available: 6 },
    ],
  },
  {
    id: 2,
    title: "Python for Beginners",
    description: "Write your first Python program and create a simple calculator",
    duration: "60 minutes",
    ageGroup: "12+",
    instructor: "Mike Chen",
    image: "/placeholder.svg?height=150&width=200",
    difficulty: "Beginner",
    maxStudents: 6,
    timeSlots: [
      { id: "sat-11", day: "Saturday", time: "11:00 AM", date: "2024-02-10", available: 4 },
      { id: "sat-3", day: "Saturday", time: "3:00 PM", date: "2024-02-10", available: 2 },
      { id: "sun-11", day: "Sunday", time: "11:00 AM", date: "2024-02-11", available: 5 },
      { id: "sun-3", day: "Sunday", time: "3:00 PM", date: "2024-02-11", available: 3 },
    ],
  },
  {
    id: 3,
    title: "Web Development Intro",
    description: "Build your first webpage with HTML and CSS",
    duration: "60 minutes",
    ageGroup: "14+",
    instructor: "Emma Davis",
    image: "/placeholder.svg?height=150&width=200",
    difficulty: "Beginner",
    maxStudents: 6,
    timeSlots: [
      { id: "sat-1", day: "Saturday", time: "1:00 PM", date: "2024-02-10", available: 4 },
      { id: "sat-4", day: "Saturday", time: "4:00 PM", date: "2024-02-10", available: 6 },
      { id: "sun-1", day: "Sunday", time: "1:00 PM", date: "2024-02-11", available: 3 },
      { id: "sun-4", day: "Sunday", time: "4:00 PM", date: "2024-02-11", available: 5 },
    ],
  },
  {
    id: 4,
    title: "Robotics Workshop",
    description: "Program a simple robot to move and respond to sensors",
    duration: "75 minutes",
    ageGroup: "12+",
    instructor: "Alex Thompson",
    image: "/placeholder.svg?height=150&width=200",
    difficulty: "Intermediate",
    maxStudents: 4,
    timeSlots: [
      { id: "sat-12", day: "Saturday", time: "12:00 PM", date: "2024-02-10", available: 2 },
      { id: "sun-12", day: "Sunday", time: "12:00 PM", date: "2024-02-11", available: 4 },
    ],
  },
]

export default function TrialPage() {
  const router = useRouter()
  const [selectedClass, setSelectedClass] = useState<number | null>(null)
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string>("")
  const [formData, setFormData] = useState({
    studentName: "",
    studentAge: "",
    parentName: "",
    parentEmail: "",
    parentPhone: "",
    programmingExperience: "",
    specialRequests: "",
    hearAboutUs: "",
  })

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Trial class booking:", { selectedClass, selectedTimeSlot, formData })
    alert("Your free trial class has been booked! We'll send you a confirmation email shortly.")
    router.push("/")
  }

  const selectedClassData = trialClasses.find((c) => c.id === selectedClass)
  const selectedSlotData = selectedClassData?.timeSlots.find((slot) => slot.id === selectedTimeSlot)

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

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-orange-600 to-orange-500 text-white">
        <div className="container mx-auto px-6 text-center">
          <div className="flex items-center justify-center mb-6">
            <Play className="w-12 h-12 mr-4" />
            <h1 className="text-5xl font-bold">Free Trial Class</h1>
          </div>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Experience our teaching style and see if coding is right for your child. No commitment required - just pure
            learning fun!
          </p>
          <div className="flex justify-center space-x-12 text-center">
            <div>
              <div className="text-3xl font-bold">100%</div>
              <div className="opacity-90">Free</div>
            </div>
            <div>
              <div className="text-3xl font-bold">45-75</div>
              <div className="opacity-90">Minutes</div>
            </div>
            <div>
              <div className="text-3xl font-bold">Small</div>
              <div className="opacity-90">Class Size</div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-6 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Class Selection */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Choose Your Trial Class</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {trialClasses.map((trialClass) => (
                <Card
                  key={trialClass.id}
                  className={`cursor-pointer transition-all duration-300 hover:shadow-lg ${
                    selectedClass === trialClass.id ? "ring-2 ring-orange-600 shadow-lg" : "hover:shadow-md"
                  }`}
                  onClick={() => setSelectedClass(trialClass.id)}
                >
                  <div className="relative">
                    <Image
                      src={trialClass.image || "/placeholder.svg"}
                      alt={trialClass.title}
                      width={200}
                      height={150}
                      className="w-full h-32 object-cover rounded-t-lg"
                    />
                    <Badge className="absolute top-3 left-3 bg-white/90 text-gray-800 text-xs">
                      {trialClass.difficulty}
                    </Badge>
                    <Badge className="absolute top-3 right-3 bg-orange-600 text-white text-xs">
                      Ages {trialClass.ageGroup}
                    </Badge>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-lg mb-2">{trialClass.title}</h3>
                    <p className="text-gray-600 text-sm mb-3 line-clamp-2">{trialClass.description}</p>
                    <div className="space-y-2 text-xs text-gray-500">
                      <div className="flex items-center">
                        <Clock className="w-3 h-3 mr-1" />
                        {trialClass.duration}
                      </div>
                      <div className="flex items-center">
                        <Users className="w-3 h-3 mr-1" />
                        Max {trialClass.maxStudents} students
                      </div>
                      <div className="flex items-center">
                        <Star className="w-3 h-3 mr-1" />
                        {trialClass.instructor}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Time Slot Selection */}
          {selectedClass && selectedClassData && (
            <Card className="shadow-xl border-0 mb-8">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900">Select Time Slot</CardTitle>
                <CardDescription>
                  Choose a convenient time for your {selectedClassData.title} trial class
                </CardDescription>
              </CardHeader>
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {selectedClassData.timeSlots.map((slot) => (
                    <Card
                      key={slot.id}
                      className={`cursor-pointer transition-all duration-300 ${
                        selectedTimeSlot === slot.id ? "ring-2 ring-orange-600 bg-orange-50" : "hover:shadow-md"
                      } ${slot.available === 0 ? "opacity-50 cursor-not-allowed" : ""}`}
                      onClick={() => slot.available > 0 && setSelectedTimeSlot(slot.id)}
                    >
                      <CardContent className="p-4 text-center">
                        <div className="font-semibold text-gray-900">{slot.day}</div>
                        <div className="text-lg font-bold text-orange-600">{slot.time}</div>
                        <div className="text-sm text-gray-500">{new Date(slot.date).toLocaleDateString()}</div>
                        <div className={`text-xs mt-2 ${slot.available > 0 ? "text-green-600" : "text-red-600"}`}>
                          {slot.available > 0 ? `${slot.available} spots left` : "Full"}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          {/* Registration Form */}
          {selectedClass && selectedTimeSlot && (
            <Card className="shadow-xl border-0">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900">Registration Details</CardTitle>
                <CardDescription>
                  Please provide the following information to complete your trial class booking
                </CardDescription>
              </CardHeader>
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Class Summary */}
                  <div className="bg-orange-50 rounded-lg p-6 mb-8">
                    <h3 className="text-lg font-semibold mb-4">Trial Class Summary</h3>
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="font-medium">Class:</span> {selectedClassData?.title}
                      </div>
                      <div>
                        <span className="font-medium">Duration:</span> {selectedClassData?.duration}
                      </div>
                      <div>
                        <span className="font-medium">Date & Time:</span> {selectedSlotData?.day},{" "}
                        {selectedSlotData?.time}
                      </div>
                      <div>
                        <span className="font-medium">Instructor:</span> {selectedClassData?.instructor}
                      </div>
                    </div>
                  </div>

                  {/* Student Information */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="studentName">Student Name *</Label>
                      <Input
                        id="studentName"
                        value={formData.studentName}
                        onChange={(e) => handleInputChange("studentName", e.target.value)}
                        placeholder="Enter student's full name"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="studentAge">Student Age *</Label>
                      <Input
                        id="studentAge"
                        type="number"
                        value={formData.studentAge}
                        onChange={(e) => handleInputChange("studentAge", e.target.value)}
                        placeholder="Enter age"
                        required
                      />
                    </div>
                  </div>

                  {/* Parent Information */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="parentName">Parent/Guardian Name *</Label>
                      <Input
                        id="parentName"
                        value={formData.parentName}
                        onChange={(e) => handleInputChange("parentName", e.target.value)}
                        placeholder="Enter your full name"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="parentEmail">Email Address *</Label>
                      <Input
                        id="parentEmail"
                        type="email"
                        value={formData.parentEmail}
                        onChange={(e) => handleInputChange("parentEmail", e.target.value)}
                        placeholder="Enter your email"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="parentPhone">Phone Number *</Label>
                      <Input
                        id="parentPhone"
                        type="tel"
                        value={formData.parentPhone}
                        onChange={(e) => handleInputChange("parentPhone", e.target.value)}
                        placeholder="Enter your phone number"
                        required
                      />
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
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="hearAboutUs">How did you hear about us?</Label>
                      <Select
                        value={formData.hearAboutUs}
                        onValueChange={(value) => handleInputChange("hearAboutUs", value)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select an option" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="google">Google Search</SelectItem>
                          <SelectItem value="social">Social Media</SelectItem>
                          <SelectItem value="friend">Friend/Family</SelectItem>
                          <SelectItem value="school">School</SelectItem>
                          <SelectItem value="ad">Advertisement</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="specialRequests">Special Requests or Questions (Optional)</Label>
                    <Textarea
                      id="specialRequests"
                      value={formData.specialRequests}
                      onChange={(e) => handleInputChange("specialRequests", e.target.value)}
                      placeholder="Any special accommodations, questions, or things we should know..."
                      rows={4}
                    />
                  </div>

                  <div className="bg-blue-50 rounded-lg p-6">
                    <h3 className="font-semibold text-blue-900 mb-2">What to Expect</h3>
                    <ul className="text-sm text-blue-800 space-y-1">
                      <li>• You'll receive a confirmation email with the class link</li>
                      <li>• No software installation required - we'll use web-based tools</li>
                      <li>• Have a computer/tablet with internet connection ready</li>
                      <li>• Our instructor will guide you through everything step by step</li>
                      <li>• Feel free to ask questions anytime during the class</li>
                    </ul>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 py-6 text-lg"
                  >
                    <CheckCircle className="w-5 h-5 mr-2" />
                    Book My Free Trial Class
                  </Button>
                </form>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  )
}

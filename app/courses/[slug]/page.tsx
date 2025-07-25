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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Code,
  Clock,
  Users,
  Star,
  Play,
  CheckCircle,
  DollarSign,
  User,
  ArrowLeft,
  Download,
  Share2,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

// Mock course data - in a real app, this would come from an API
const courseData = {
  id: 1,
  title: "Python Fundamentals",
  description:
    "Learn the basics of Python programming with hands-on projects. Perfect for beginners who want to start with text-based coding.",
  longDescription:
    "This comprehensive Python course is designed for beginners who want to learn programming from scratch. You'll start with the basics of Python syntax and gradually work your way up to building real projects. Our hands-on approach ensures you'll be writing code from day one, with plenty of exercises and projects to reinforce your learning.",
  duration: "12 weeks",
  level: "Beginner",
  price: "$299",
  originalPrice: "$399",
  rating: 4.8,
  students: 200,
  image: "/placeholder.svg?height=400&width=600",
  category: "Python",
  ageGroup: "12+",
  instructor: {
    name: "Dr. Sarah Johnson",
    bio: "Senior Software Engineer with 10+ years of experience in Python development and education.",
    image: "/placeholder.svg?height=80&width=80",
  },
  features: [
    "12 weeks of comprehensive content",
    "24/7 access to course materials",
    "Live coding sessions",
    "Personal project portfolio",
    "Certificate of completion",
    "Career guidance and support",
  ],
  curriculum: [
    {
      week: 1,
      title: "Introduction to Python",
      topics: ["Python installation", "IDE setup", "Basic syntax", "Variables and data types"],
    },
    {
      week: 2,
      title: "Control Structures",
      topics: ["If statements", "Loops", "Boolean logic", "Practice exercises"],
    },
    {
      week: 3,
      title: "Functions and Modules",
      topics: ["Defining functions", "Parameters and arguments", "Return values", "Importing modules"],
    },
    {
      week: 4,
      title: "Data Structures",
      topics: ["Lists", "Dictionaries", "Tuples", "Sets"],
    },
    {
      week: 5,
      title: "File Handling",
      topics: ["Reading files", "Writing files", "CSV processing", "Error handling"],
    },
    {
      week: 6,
      title: "Object-Oriented Programming",
      topics: ["Classes and objects", "Inheritance", "Encapsulation", "Polymorphism"],
    },
  ],
  prerequisites: ["Basic computer skills", "No prior programming experience required", "Enthusiasm to learn!"],
  outcomes: [
    "Write Python programs confidently",
    "Understand programming fundamentals",
    "Build real-world projects",
    "Prepare for advanced courses",
    "Develop problem-solving skills",
  ],
}

export default function CourseDetailPage() {
  const [enrollmentData, setEnrollmentData] = useState({
    studentName: "",
    parentName: "",
    email: "",
    phone: "",
    age: "",
    experience: "",
    classType: "",
    startDate: "",
    specialRequests: "",
  })

  const handleInputChange = (field: string, value: string) => {
    setEnrollmentData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const handleEnrollmentSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Enrollment data:", enrollmentData)
    alert("Enrollment submitted successfully! We will contact you soon.")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-orange-600 to-orange-500 rounded-lg flex items-center justify-center">
                <Code className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent">
                Bingo Academy
              </span>
            </Link>

            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-gray-700 hover:text-orange-600 transition-colors">
                Home
              </Link>
              <Link href="/courses" className="text-orange-600 font-semibold">
                Courses
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-orange-600 transition-colors">
                About
              </Link>
              <Link href="/blog" className="text-gray-700 hover:text-orange-600 transition-colors">
                Blog
              </Link>
              <Link href="/events" className="text-gray-700 hover:text-orange-600 transition-colors">
                Events
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-orange-600 transition-colors">
                Contact
              </Link>
            </div>

            <Button className="bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600">
              Enroll Now
            </Button>
          </nav>
        </div>
      </header>

      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center space-x-2 text-sm">
            <Link href="/" className="text-gray-500 hover:text-orange-600">
              Home
            </Link>
            <span className="text-gray-400">/</span>
            <Link href="/courses" className="text-gray-500 hover:text-orange-600">
              Courses
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-900">{courseData.title}</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Course Header */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-center mb-4">
                <Link href="/courses" className="flex items-center text-orange-600 hover:text-orange-600 mr-4">
                  <ArrowLeft className="w-4 h-4 mr-1" />
                  Back to Courses
                </Link>
                <Badge className="bg-orange-100 text-orange-800">{courseData.category}</Badge>
              </div>

              <h1 className="text-4xl font-bold text-gray-900 mb-4">{courseData.title}</h1>

              <p className="text-xl text-gray-600 mb-6">{courseData.description}</p>

              <div className="flex flex-wrap items-center gap-6 mb-6">
                <div className="flex items-center">
                  <div className="flex items-center mr-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${i < Math.floor(courseData.rating) ? "text-yellow-400 fill-current" : "text-gray-300"}`}
                      />
                    ))}
                  </div>
                  <span className="text-gray-600">
                    ({courseData.rating}) • {courseData.students} students
                  </span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Clock className="w-5 h-5 mr-2" />
                  {courseData.duration}
                </div>
                <div className="flex items-center text-gray-600">
                  <Users className="w-5 h-5 mr-2" />
                  {courseData.level}
                </div>
                <Badge variant="outline" className="text-orange-600 border-orange-600">
                  Ages {courseData.ageGroup}
                </Badge>
              </div>

              <div className="flex items-center space-x-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600"
                >
                  <Play className="w-5 h-5 mr-2" />
                  Enroll Now
                </Button>
                <Button size="lg" variant="outline">
                  <Share2 className="w-5 h-5 mr-2" />
                  Share Course
                </Button>
              </div>
            </div>

            {/* Course Image */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <Image
                src={courseData.image || "/placeholder.svg"}
                alt={courseData.title}
                width={600}
                height={400}
                className="w-full h-80 object-cover"
              />
            </div>

            {/* Course Tabs */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <Tabs defaultValue="overview" className="w-full">
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
                  <TabsTrigger value="instructor">Instructor</TabsTrigger>
                  <TabsTrigger value="reviews">Reviews</TabsTrigger>
                </TabsList>

                <TabsContent value="overview" className="mt-6 space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Course Overview</h3>
                    <p className="text-gray-600 leading-relaxed mb-6">{courseData.longDescription}</p>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-4">What You'll Learn</h4>
                    <div className="grid md:grid-cols-2 gap-3">
                      {courseData.outcomes.map((outcome, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{outcome}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-4">Prerequisites</h4>
                    <ul className="space-y-2">
                      {courseData.prerequisites.map((prereq, index) => (
                        <li key={index} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-700">{prereq}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </TabsContent>

                <TabsContent value="curriculum" className="mt-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Course Curriculum</h3>
                  <div className="space-y-4">
                    {courseData.curriculum.map((week, index) => (
                      <Card key={index} className="border-l-4 border-orange-600">
                        <CardHeader>
                          <CardTitle className="flex items-center">
                            <span className="bg-orange-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm mr-3">
                              {week.week}
                            </span>
                            {week.title}
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <ul className="grid md:grid-cols-2 gap-2">
                            {week.topics.map((topic, topicIndex) => (
                              <li key={topicIndex} className="flex items-center space-x-2">
                                <CheckCircle className="w-4 h-4 text-orange-600" />
                                <span className="text-gray-700">{topic}</span>
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="instructor" className="mt-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Meet Your Instructor</h3>
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-6">
                        <Image
                          src={courseData.instructor.image || "/placeholder.svg"}
                          alt={courseData.instructor.name}
                          width={80}
                          height={80}
                          className="rounded-full"
                        />
                        <div className="flex-1">
                          <h4 className="text-xl font-semibold text-gray-900 mb-2">{courseData.instructor.name}</h4>
                          <p className="text-gray-600 leading-relaxed">{courseData.instructor.bio}</p>
                          <div className="flex items-center mt-4 space-x-4">
                            <div className="flex items-center">
                              <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                              <span className="text-sm text-gray-600">4.9 Instructor Rating</span>
                            </div>
                            <div className="flex items-center">
                              <Users className="w-4 h-4 text-gray-400 mr-1" />
                              <span className="text-sm text-gray-600">500+ Students Taught</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="reviews" className="mt-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Student Reviews</h3>
                  <div className="space-y-6">
                    {[
                      {
                        name: "Alex Chen",
                        rating: 5,
                        comment:
                          "Excellent course! The instructor explains everything clearly and the projects are really engaging.",
                        date: "2 weeks ago",
                      },
                      {
                        name: "Maria Rodriguez",
                        rating: 5,
                        comment:
                          "My daughter loves this course. She's learned so much and is excited about programming now!",
                        date: "1 month ago",
                      },
                      {
                        name: "David Kim",
                        rating: 4,
                        comment: "Great content and well-structured. Would recommend to anyone starting with Python.",
                        date: "1 month ago",
                      },
                    ].map((review, index) => (
                      <Card key={index}>
                        <CardContent className="p-6">
                          <div className="flex items-start justify-between mb-4">
                            <div>
                              <h5 className="font-semibold text-gray-900">{review.name}</h5>
                              <div className="flex items-center mt-1">
                                {[...Array(5)].map((_, i) => (
                                  <Star
                                    key={i}
                                    className={`w-4 h-4 ${i < review.rating ? "text-yellow-400 fill-current" : "text-gray-300"}`}
                                  />
                                ))}
                              </div>
                            </div>
                            <span className="text-sm text-gray-500">{review.date}</span>
                          </div>
                          <p className="text-gray-700">{review.comment}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Pricing Card */}
            <Card className="sticky top-24">
              <CardHeader>
                <div className="text-center">
                  <div className="flex items-center justify-center space-x-2 mb-2">
                    <span className="text-3xl font-bold text-orange-600">{courseData.price}</span>
                    <span className="text-lg text-gray-500 line-through">{courseData.originalPrice}</span>
                  </div>
                  <Badge className="bg-orange-100 text-orange-800">25% Off Limited Time</Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  {courseData.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="space-y-3 pt-4 border-t">
                  <Button className="w-full bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 text-lg py-6">
                    <DollarSign className="w-5 h-5 mr-2" />
                    Enroll Now
                  </Button>
                  <Button variant="outline" className="w-full bg-transparent">
                    <Download className="w-4 h-4 mr-2" />
                    Download Syllabus
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Enrollment Form */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <User className="w-5 h-5 mr-2" />
                  Quick Enrollment
                </CardTitle>
                <CardDescription>Fill out this form to secure your spot in the course</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleEnrollmentSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="studentName">Student Name</Label>
                      <Input
                        id="studentName"
                        value={enrollmentData.studentName}
                        onChange={(e) => handleInputChange("studentName", e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="age">Age</Label>
                      <Input
                        id="age"
                        type="number"
                        value={enrollmentData.age}
                        onChange={(e) => handleInputChange("age", e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="parentName">Parent/Guardian Name</Label>
                    <Input
                      id="parentName"
                      value={enrollmentData.parentName}
                      onChange={(e) => handleInputChange("parentName", e.target.value)}
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={enrollmentData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone">Phone</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={enrollmentData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="classType">Class Type</Label>
                    <Select
                      value={enrollmentData.classType}
                      onValueChange={(value) => handleInputChange("classType", value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select class type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="online">Online Classes</SelectItem>
                        <SelectItem value="physical">Physical Classes</SelectItem>
                        <SelectItem value="hybrid">Hybrid (Online + Physical)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="experience">Programming Experience</Label>
                    <Select
                      value={enrollmentData.experience}
                      onValueChange={(value) => handleInputChange("experience", value)}
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

                  <div>
                    <Label htmlFor="startDate">Preferred Start Date</Label>
                    <Input
                      id="startDate"
                      type="date"
                      value={enrollmentData.startDate}
                      onChange={(e) => handleInputChange("startDate", e.target.value)}
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="specialRequests">Special Requests (Optional)</Label>
                    <Textarea
                      id="specialRequests"
                      value={enrollmentData.specialRequests}
                      onChange={(e) => handleInputChange("specialRequests", e.target.value)}
                      placeholder="Any special requirements or questions..."
                      rows={3}
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600"
                  >
                    Submit Enrollment
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16 mt-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <Link href="/" className="flex items-center space-x-2 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-orange-600 to-orange-500 rounded-lg flex items-center justify-center">
                  <Code className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold">Bingo Academy</span>
              </Link>
              <p className="text-gray-400 mb-6">
                Empowering the next generation of programmers and innovators through quality coding education.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/courses" className="text-gray-400 hover:text-white transition-colors">
                    All Courses
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-gray-400 hover:text-white transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/events" className="text-gray-400 hover:text-white transition-colors">
                    Events
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-6">Categories</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/courses?category=Scratch" className="text-gray-400 hover:text-white transition-colors">
                    Scratch Programming
                  </Link>
                </li>
                <li>
                  <Link href="/courses?category=Python" className="text-gray-400 hover:text-white transition-colors">
                    Python
                  </Link>
                </li>
                <li>
                  <Link
                    href="/courses?category=Web Development"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Web Development
                  </Link>
                </li>
                <li>
                  <Link href="/courses?category=Robotics" className="text-gray-400 hover:text-white transition-colors">
                    Robotics
                  </Link>
                </li>
                <li>
                  <Link href="/courses?category=AI" className="text-gray-400 hover:text-white transition-colors">
                    AI & Machine Learning
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-6">Contact Info</h3>
              <div className="space-y-3 text-gray-400">
                <p>
                  📍 123 Education Street
                  <br />
                  Tech City, TC 12345
                </p>
                <p>📞 (555) 123-4567</p>
                <p>✉️ info@bingoacademy.com</p>
                <p>
                  🕒 Mon-Fri: 9AM-6PM
                  <br />
                  Sat: 10AM-4PM
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Bingo Academy. All rights reserved. | Privacy Policy | Terms of Service</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
     Card,
     CardContent,
     CardDescription,
     CardHeader,
     CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
     Select,
     SelectContent,
     SelectItem,
     SelectTrigger,
     SelectValue,
} from "@/components/ui/select";
import {
     Code,
     ArrowLeft,
     Clock,
     Users,
     Star,
     Play,
     CheckCircle,
     Building,
     GraduationCap,
     Briefcase,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Header from "@/components/header";

const trainingDemos = [
     {
          id: 1,
          title: "Python & Data Science Demo",
          description:
               "Experience our data science training approach with hands-on Python programming and analytics",
          duration: "90 minutes",
          organizationType: "All Organizations",
          instructor: "Dr. Sarah Johnson",
          image: "/placeholder.svg?height=150&width=200",
          difficulty: "Beginner to Intermediate",
          maxParticipants: 15,
          timeSlots: [
               {
                    id: "mon-10",
                    day: "Monday",
                    time: "10:00 AM",
                    date: "2024-02-12",
                    available: 8,
               },
               {
                    id: "mon-2",
                    day: "Monday",
                    time: "2:00 PM",
                    date: "2024-02-12",
                    available: 12,
               },
               {
                    id: "tue-10",
                    day: "Tuesday",
                    time: "10:00 AM",
                    date: "2024-02-13",
                    available: 10,
               },
               {
                    id: "tue-2",
                    day: "Tuesday",
                    time: "2:00 PM",
                    date: "2024-02-13",
                    available: 15,
               },
          ],
     },
     {
          id: 2,
          title: "AI & Machine Learning Workshop",
          description:
               "Interactive session demonstrating AI/ML concepts and practical applications for business",
          duration: "120 minutes",
          organizationType: "Corporations",
          instructor: "Dr. Mike Chen",
          image: "/placeholder.svg?height=150&width=200",
          difficulty: "Intermediate to Advanced",
          maxParticipants: 12,
          timeSlots: [
               {
                    id: "wed-10",
                    day: "Wednesday",
                    time: "10:00 AM",
                    date: "2024-02-14",
                    available: 6,
               },
               {
                    id: "wed-2",
                    day: "Wednesday",
                    time: "2:00 PM",
                    date: "2024-02-14",
                    available: 8,
               },
               {
                    id: "thu-10",
                    day: "Thursday",
                    time: "10:00 AM",
                    date: "2024-02-15",
                    available: 10,
               },
               {
                    id: "thu-2",
                    day: "Thursday",
                    time: "2:00 PM",
                    date: "2024-02-15",
                    available: 12,
               },
          ],
     },
     {
          id: 3,
          title: "Web Development & Cloud Demo",
          description:
               "Showcase modern web development practices and cloud deployment strategies",
          duration: "90 minutes",
          organizationType: "All Organizations",
          instructor: "Emma Davis",
          image: "/placeholder.svg?height=150&width=200",
          difficulty: "Beginner to Intermediate",
          maxParticipants: 15,
          timeSlots: [
               {
                    id: "fri-10",
                    day: "Friday",
                    time: "10:00 AM",
                    date: "2024-02-16",
                    available: 12,
               },
               {
                    id: "fri-2",
                    day: "Friday",
                    time: "2:00 PM",
                    date: "2024-02-16",
                    available: 15,
               },
               {
                    id: "sat-10",
                    day: "Saturday",
                    time: "10:00 AM",
                    date: "2024-02-17",
                    available: 8,
               },
               {
                    id: "sat-2",
                    day: "Saturday",
                    time: "2:00 PM",
                    date: "2024-02-17",
                    available: 10,
               },
          ],
     },
     {
          id: 4,
          title: "Cybersecurity Training Demo",
          description:
               "Demonstrate cybersecurity best practices and threat assessment methodologies",
          duration: "120 minutes",
          organizationType: "Corporations & Government",
          instructor: "Alex Thompson",
          image: "/placeholder.svg?height=150&width=200",
          difficulty: "Intermediate",
          maxParticipants: 10,
          timeSlots: [
               {
                    id: "mon-11",
                    day: "Monday",
                    time: "11:00 AM",
                    date: "2024-02-12",
                    available: 5,
               },
               {
                    id: "wed-11",
                    day: "Wednesday",
                    time: "11:00 AM",
                    date: "2024-02-14",
                    available: 8,
               },
          ],
     },
];

export default function TrainingDemoPage() {
     const router = useRouter();
     const [selectedDemo, setSelectedDemo] = useState<number | null>(null);
     const [selectedTimeSlot, setSelectedTimeSlot] = useState<string>("");
     const [formData, setFormData] = useState({
          organizationName: "",
          organizationType: "",
          contactName: "",
          contactEmail: "",
          contactPhone: "",
          participantCount: "",
          currentTechStack: "",
          trainingGoals: "",
          specialRequirements: "",
          hearAboutUs: "",
     });

     const handleInputChange = (field: string, value: string) => {
          setFormData((prev) => ({
               ...prev,
               [field]: value,
          }));
     };

     const handleSubmit = (e: React.FormEvent) => {
          e.preventDefault();
          console.log("Training demo booking:", {
               selectedDemo,
               selectedTimeSlot,
               formData,
          });
          alert(
               "Your training demo has been scheduled! We'll send you a confirmation email with details shortly."
          );
          router.push("/");
     };

     const selectedDemoData = trainingDemos.find((d) => d.id === selectedDemo);
     const selectedSlotData = selectedDemoData?.timeSlots.find(
          (slot) => slot.id === selectedTimeSlot
     );

     return (
          <div className="min-h-screen bg-gradient-to-br from-orange-50/30 via-white to-orange-50/30">
               <Header />

               {/* Hero Section */}
               <section className="py-16 bg-gradient-to-r from-orange-600 to-orange-500 text-white">
                    <div className="container mx-auto px-6 text-center">
                         <div className="flex items-center justify-center mb-6">
                              <Play className="w-12 h-12 mr-4" />
                              <h1 className="text-5xl font-bold">
                                   Training Demo Session
                              </h1>
                         </div>
                         <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
                              Experience our training methodology and see how we
                              can transform your organization's technical
                              capabilities. No commitment required - just
                              professional development insights!
                         </p>
                         <div className="flex justify-center space-x-12 text-center">
                              <div>
                                   <div className="text-3xl font-bold">
                                        100%
                                   </div>
                                   <div className="opacity-90">Free</div>
                              </div>
                              <div>
                                   <div className="text-3xl font-bold">
                                        90-120
                                   </div>
                                   <div className="opacity-90">Minutes</div>
                              </div>
                              <div>
                                   <div className="text-3xl font-bold">
                                        Interactive
                                   </div>
                                   <div className="opacity-90">Session</div>
                              </div>
                         </div>
                    </div>
               </section>

               <div className="container mx-auto px-6 py-16">
                    <div className="max-w-6xl mx-auto">
                         {/* Demo Selection */}
                         <div className="mb-12">
                              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                                   Choose Your Training Demo
                              </h2>
                              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                                   {trainingDemos.map((demo) => (
                                        <Card
                                             key={demo.id}
                                             className={`cursor-pointer transition-all duration-300 hover:shadow-lg ${
                                                  selectedDemo === demo.id
                                                       ? "ring-2 ring-orange-600 shadow-lg"
                                                       : "hover:shadow-md"
                                             }`}
                                             onClick={() =>
                                                  setSelectedDemo(demo.id)
                                             }
                                        >
                                             <div className="relative">
                                                  <Image
                                                       src={
                                                            demo.image ||
                                                            "/placeholder.svg"
                                                       }
                                                       alt={demo.title}
                                                       width={200}
                                                       height={150}
                                                       className="w-full h-32 object-cover rounded-t-lg"
                                                  />
                                                  <Badge className="absolute top-3 left-3 bg-white/90 text-gray-800 text-xs">
                                                       {demo.difficulty}
                                                  </Badge>
                                                  <Badge className="absolute top-3 right-3 bg-orange-600 text-white text-xs">
                                                       {demo.organizationType}
                                                  </Badge>
                                             </div>
                                             <CardContent className="p-4">
                                                  <h3 className="font-semibold text-lg mb-2">
                                                       {demo.title}
                                                  </h3>
                                                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                                                       {demo.description}
                                                  </p>
                                                  <div className="space-y-2 text-xs text-gray-500">
                                                       <div className="flex items-center">
                                                            <Clock className="w-3 h-3 mr-1" />
                                                            {demo.duration}
                                                       </div>
                                                       <div className="flex items-center">
                                                            <Users className="w-3 h-3 mr-1" />
                                                            Max{" "}
                                                            {
                                                                 demo.maxParticipants
                                                            }{" "}
                                                            participants
                                                       </div>
                                                       <div className="flex items-center">
                                                            <Star className="w-3 h-3 mr-1" />
                                                            {demo.instructor}
                                                       </div>
                                                  </div>
                                             </CardContent>
                                        </Card>
                                   ))}
                              </div>
                         </div>

                         {/* Time Slot Selection */}
                         {selectedDemo && selectedDemoData && (
                              <Card className="shadow-xl border-0 mb-8">
                                   <CardHeader>
                                        <CardTitle className="text-2xl text-gray-900">
                                             Select Time Slot
                                        </CardTitle>
                                        <CardDescription>
                                             Choose a convenient time for your{" "}
                                             {selectedDemoData.title} demo
                                             session
                                        </CardDescription>
                                   </CardHeader>
                                   <CardContent className="p-8">
                                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                                             {selectedDemoData.timeSlots.map(
                                                  (slot) => (
                                                       <Card
                                                            key={slot.id}
                                                            className={`cursor-pointer transition-all duration-300 ${
                                                                 selectedTimeSlot ===
                                                                 slot.id
                                                                      ? "ring-2 ring-orange-600 bg-orange-50"
                                                                      : "hover:shadow-md"
                                                            } ${
                                                                 slot.available ===
                                                                 0
                                                                      ? "opacity-50 cursor-not-allowed"
                                                                      : ""
                                                            }`}
                                                            onClick={() =>
                                                                 slot.available >
                                                                      0 &&
                                                                 setSelectedTimeSlot(
                                                                      slot.id
                                                                 )
                                                            }
                                                       >
                                                            <CardContent className="p-4 text-center">
                                                                 <div className="font-semibold text-gray-900">
                                                                      {slot.day}
                                                                 </div>
                                                                 <div className="text-lg font-bold text-orange-600">
                                                                      {
                                                                           slot.time
                                                                      }
                                                                 </div>
                                                                 <div className="text-sm text-gray-500">
                                                                      {new Date(
                                                                           slot.date
                                                                      ).toLocaleDateString()}
                                                                 </div>
                                                                 <div
                                                                      className={`text-xs mt-2 ${
                                                                           slot.available >
                                                                           0
                                                                                ? "text-green-600"
                                                                                : "text-red-600"
                                                                      }`}
                                                                 >
                                                                      {slot.available >
                                                                      0
                                                                           ? `${slot.available} spots left`
                                                                           : "Full"}
                                                                 </div>
                                                            </CardContent>
                                                       </Card>
                                                  )
                                             )}
                                        </div>
                                   </CardContent>
                              </Card>
                         )}

                         {/* Registration Form */}
                         {selectedDemo && selectedTimeSlot && (
                              <Card className="shadow-xl border-0">
                                   <CardHeader>
                                        <CardTitle className="text-2xl text-gray-900">
                                             Organization Details
                                        </CardTitle>
                                        <CardDescription>
                                             Please provide the following
                                             information to complete your
                                             training demo booking
                                        </CardDescription>
                                   </CardHeader>
                                   <CardContent className="p-8">
                                        <form
                                             onSubmit={handleSubmit}
                                             className="space-y-6"
                                        >
                                             {/* Demo Summary */}
                                             <div className="bg-orange-50 rounded-lg p-6 mb-8">
                                                  <h3 className="text-lg font-semibold mb-4">
                                                       Training Demo Summary
                                                  </h3>
                                                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                                                       <div>
                                                            <span className="font-medium">
                                                                 Demo Session:
                                                            </span>{" "}
                                                            {
                                                                 selectedDemoData?.title
                                                            }
                                                       </div>
                                                       <div>
                                                            <span className="font-medium">
                                                                 Duration:
                                                            </span>{" "}
                                                            {
                                                                 selectedDemoData?.duration
                                                            }
                                                       </div>
                                                       <div>
                                                            <span className="font-medium">
                                                                 Date & Time:
                                                            </span>{" "}
                                                            {
                                                                 selectedSlotData?.day
                                                            }
                                                            ,{" "}
                                                            {
                                                                 selectedSlotData?.time
                                                            }
                                                       </div>
                                                       <div>
                                                            <span className="font-medium">
                                                                 Instructor:
                                                            </span>{" "}
                                                            {
                                                                 selectedDemoData?.instructor
                                                            }
                                                       </div>
                                                  </div>
                                             </div>

                                             {/* Organization Information */}
                                             <div className="grid md:grid-cols-2 gap-6">
                                                  <div>
                                                       <Label htmlFor="organizationName">
                                                            Organization Name *
                                                       </Label>
                                                       <Input
                                                            id="organizationName"
                                                            value={
                                                                 formData.organizationName
                                                            }
                                                            onChange={(e) =>
                                                                 handleInputChange(
                                                                      "organizationName",
                                                                      e.target
                                                                           .value
                                                                 )
                                                            }
                                                            placeholder="Enter your organization name"
                                                            required
                                                       />
                                                  </div>
                                                  <div>
                                                       <Label htmlFor="organizationType">
                                                            Organization Type *
                                                       </Label>
                                                       <Select
                                                            value={
                                                                 formData.organizationType
                                                            }
                                                            onValueChange={(
                                                                 value
                                                            ) =>
                                                                 handleInputChange(
                                                                      "organizationType",
                                                                      value
                                                                 )
                                                            }
                                                       >
                                                            <SelectTrigger>
                                                                 <SelectValue placeholder="Select organization type" />
                                                            </SelectTrigger>
                                                            <SelectContent>
                                                                 <SelectItem value="corporation">
                                                                      Corporation
                                                                 </SelectItem>
                                                                 <SelectItem value="university">
                                                                      University
                                                                 </SelectItem>
                                                                 <SelectItem value="school">
                                                                      School
                                                                 </SelectItem>
                                                                 <SelectItem value="government">
                                                                      Government
                                                                      Agency
                                                                 </SelectItem>
                                                                 <SelectItem value="nonprofit">
                                                                      Non-Profit
                                                                 </SelectItem>
                                                                 <SelectItem value="other">
                                                                      Other
                                                                 </SelectItem>
                                                            </SelectContent>
                                                       </Select>
                                                  </div>
                                             </div>

                                             {/* Contact Information */}
                                             <div className="grid md:grid-cols-2 gap-6">
                                                  <div>
                                                       <Label htmlFor="contactName">
                                                            Contact Person Name
                                                            *
                                                       </Label>
                                                       <Input
                                                            id="contactName"
                                                            value={
                                                                 formData.contactName
                                                            }
                                                            onChange={(e) =>
                                                                 handleInputChange(
                                                                      "contactName",
                                                                      e.target
                                                                           .value
                                                                 )
                                                            }
                                                            placeholder="Enter contact person's full name"
                                                            required
                                                       />
                                                  </div>
                                                  <div>
                                                       <Label htmlFor="contactEmail">
                                                            Email Address *
                                                       </Label>
                                                       <Input
                                                            id="contactEmail"
                                                            type="email"
                                                            value={
                                                                 formData.contactEmail
                                                            }
                                                            onChange={(e) =>
                                                                 handleInputChange(
                                                                      "contactEmail",
                                                                      e.target
                                                                           .value
                                                                 )
                                                            }
                                                            placeholder="Enter your email"
                                                            required
                                                       />
                                                  </div>
                                             </div>

                                             <div className="grid md:grid-cols-2 gap-6">
                                                  <div>
                                                       <Label htmlFor="contactPhone">
                                                            Phone Number *
                                                       </Label>
                                                       <Input
                                                            id="contactPhone"
                                                            type="tel"
                                                            value={
                                                                 formData.contactPhone
                                                            }
                                                            onChange={(e) =>
                                                                 handleInputChange(
                                                                      "contactPhone",
                                                                      e.target
                                                                           .value
                                                                 )
                                                            }
                                                            placeholder="Enter your phone number"
                                                            required
                                                       />
                                                  </div>
                                                  <div>
                                                       <Label htmlFor="participantCount">
                                                            Expected
                                                            Participants
                                                       </Label>
                                                       <Input
                                                            id="participantCount"
                                                            type="number"
                                                            value={
                                                                 formData.participantCount
                                                            }
                                                            onChange={(e) =>
                                                                 handleInputChange(
                                                                      "participantCount",
                                                                      e.target
                                                                           .value
                                                                 )
                                                            }
                                                            placeholder="Estimated number of participants"
                                                       />
                                                  </div>
                                             </div>

                                             <div className="grid md:grid-cols-2 gap-6">
                                                  <div>
                                                       <Label htmlFor="currentTechStack">
                                                            Current Technology
                                                            Stack
                                                       </Label>
                                                       <Input
                                                            id="currentTechStack"
                                                            value={
                                                                 formData.currentTechStack
                                                            }
                                                            onChange={(e) =>
                                                                 handleInputChange(
                                                                      "currentTechStack",
                                                                      e.target
                                                                           .value
                                                                 )
                                                            }
                                                            placeholder="e.g., Python, Java, Cloud platforms"
                                                       />
                                                  </div>
                                                  <div>
                                                       <Label htmlFor="hearAboutUs">
                                                            How did you hear
                                                            about us?
                                                       </Label>
                                                       <Select
                                                            value={
                                                                 formData.hearAboutUs
                                                            }
                                                            onValueChange={(
                                                                 value
                                                            ) =>
                                                                 handleInputChange(
                                                                      "hearAboutUs",
                                                                      value
                                                                 )
                                                            }
                                                       >
                                                            <SelectTrigger>
                                                                 <SelectValue placeholder="Select an option" />
                                                            </SelectTrigger>
                                                            <SelectContent>
                                                                 <SelectItem value="google">
                                                                      Google
                                                                      Search
                                                                 </SelectItem>
                                                                 <SelectItem value="linkedin">
                                                                      LinkedIn
                                                                 </SelectItem>
                                                                 <SelectItem value="referral">
                                                                      Referral
                                                                 </SelectItem>
                                                                 <SelectItem value="event">
                                                                      Industry
                                                                      Event
                                                                 </SelectItem>
                                                                 <SelectItem value="ad">
                                                                      Advertisement
                                                                 </SelectItem>
                                                                 <SelectItem value="other">
                                                                      Other
                                                                 </SelectItem>
                                                            </SelectContent>
                                                       </Select>
                                                  </div>
                                             </div>

                                             <div>
                                                  <Label htmlFor="trainingGoals">
                                                       Training Goals &
                                                       Objectives
                                                  </Label>
                                                  <Textarea
                                                       id="trainingGoals"
                                                       value={
                                                            formData.trainingGoals
                                                       }
                                                       onChange={(e) =>
                                                            handleInputChange(
                                                                 "trainingGoals",
                                                                 e.target.value
                                                            )
                                                       }
                                                       placeholder="What are your organization's training goals? What skills are you looking to develop?"
                                                       rows={3}
                                                  />
                                             </div>

                                             <div>
                                                  <Label htmlFor="specialRequirements">
                                                       Special Requirements
                                                       (Optional)
                                                  </Label>
                                                  <Textarea
                                                       id="specialRequirements"
                                                       value={
                                                            formData.specialRequirements
                                                       }
                                                       onChange={(e) =>
                                                            handleInputChange(
                                                                 "specialRequirements",
                                                                 e.target.value
                                                            )
                                                       }
                                                       placeholder="Any specific requirements, customization needs, or questions..."
                                                       rows={3}
                                                  />
                                             </div>

                                             <div className="bg-blue-50 rounded-lg p-6">
                                                  <h3 className="font-semibold text-blue-900 mb-2">
                                                       What to Expect
                                                  </h3>
                                                  <ul className="text-sm text-blue-800 space-y-1">
                                                       <li>
                                                            • Interactive
                                                            demonstration of our
                                                            training methodology
                                                       </li>
                                                       <li>
                                                            • Hands-on
                                                            experience with our
                                                            learning platform
                                                       </li>
                                                       <li>
                                                            • Discussion of your
                                                            organization's
                                                            specific needs
                                                       </li>
                                                       <li>
                                                            • Q&A session with
                                                            our training experts
                                                       </li>
                                                       <li>
                                                            • Customized
                                                            training proposal
                                                            follow-up
                                                       </li>
                                                  </ul>
                                             </div>

                                             <Button
                                                  type="submit"
                                                  className="w-full bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 py-6 text-lg"
                                             >
                                                  <CheckCircle className="w-5 h-5 mr-2" />
                                                  Schedule Training Demo
                                             </Button>
                                        </form>
                                   </CardContent>
                              </Card>
                         )}
                    </div>
               </div>
          </div>
     );
}

"use client";

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
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import {
     Code,
     ArrowLeft,
     ArrowRight,
     CheckCircle,
     User,
     CreditCard,
     FileText,
     Building,
     Users,
     Calendar,
     Target,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

const trainingPrograms = [
     {
          id: 1,
          title: "Web Development Bootcamp",
          description:
               "Comprehensive training program covering HTML, CSS, JavaScript, React, and modern web development practices",
          duration: "12 weeks",
          level: "Beginner to Intermediate",
          price: "Custom Pricing",
          image: "/placeholder.svg?height=150&width=200",
          category: "Web Development",
          participants: "10-50",
     },
     {
          id: 2,
          title: "Python Programming & Data Science",
          description:
               "Complete Python programming course with data analysis, machine learning, and automation skills",
          duration: "16 weeks",
          level: "All Levels",
          price: "Custom Pricing",
          image: "/placeholder.svg?height=150&width=200",
          category: "Python & Data Science",
          participants: "10-50",
     },
     {
          id: 3,
          title: "AI & Machine Learning Fundamentals",
          description:
               "Introduction to artificial intelligence and machine learning with practical applications",
          duration: "10 weeks",
          level: "Intermediate to Advanced",
          price: "Custom Pricing",
          image: "/placeholder.svg?height=150&width=200",
          category: "AI & Machine Learning",
          participants: "10-50",
     },
     {
          id: 4,
          title: "Mobile App Development",
          description:
               "Cross-platform mobile app development using React Native and modern mobile development techniques",
          duration: "14 weeks",
          level: "Intermediate",
          price: "Custom Pricing",
          image: "/placeholder.svg?height=150&width=200",
          category: "Mobile Development",
          participants: "10-50",
     },
];

export default function TrainingInquiryPage() {
     const router = useRouter();
     const [currentStep, setCurrentStep] = useState(1);
     const [selectedProgram, setSelectedProgram] = useState<number | null>(
          null
     );
     const [formData, setFormData] = useState({
          // Program Selection
          programId: null as number | null,
          deliveryFormat: "",
          startDate: "",

          // Organization Information
          organizationName: "",
          organizationType: "",
          industry: "",
          organizationSize: "",
          currentTechStack: "",

          // Contact Information
          contactName: "",
          contactEmail: "",
          contactPhone: "",
          jobTitle: "",
          address: "",
          city: "",
          state: "",
          zipCode: "",

          // Training Requirements
          participantCount: "",
          skillLevel: "",
          specificNeeds: "",
          timeline: "",

          // Additional Information
          budget: "",
          specialRequirements: "",
          agreeToTerms: false,
          marketingConsent: false,
     });

     const steps = [
          { number: 1, title: "Program Selection", icon: FileText },
          { number: 2, title: "Organization Info", icon: Building },
          { number: 3, title: "Contact Info", icon: User },
          { number: 4, title: "Requirements & Submit", icon: Target },
     ];

     const handleInputChange = (field: string, value: any) => {
          setFormData((prev) => ({
               ...prev,
               [field]: value,
          }));
     };

     const nextStep = () => {
          if (currentStep < 4) {
               setCurrentStep(currentStep + 1);
          }
     };

     const prevStep = () => {
          if (currentStep > 1) {
               setCurrentStep(currentStep - 1);
          }
     };

     const handleSubmit = () => {
          console.log("Training inquiry submitted:", formData);
          router.push("/enrollment/success");
     };

     const selectedProgramData = trainingPrograms.find(
          (p) => p.id === formData.programId
     );

     return (
          <div className="min-h-screen bg-gradient-to-br from-orange-50/30 via-white to-orange-50/30">
               {/* Header */}
               <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-orange-100/50">
                    <div className="container mx-auto px-6 py-4">
                         <nav className="flex items-center justify-between">
                              <Link
                                   href="/"
                                   className="flex items-center space-x-3 group"
                              >
                                   <div className="w-10 h-10 bg-gradient-to-r from-orange-600 to-orange-500 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-orange-200 transition-all duration-300 group-hover:scale-105">
                                        <Code className="w-5 h-5 text-white" />
                                   </div>
                                   <span className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent">
                                        Bingo Academy
                                   </span>
                              </Link>

                              <Link href="/">
                                   <Button
                                        variant="outline"
                                        className="bg-transparent"
                                   >
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
                                   <div
                                        key={step.number}
                                        className="flex items-center"
                                   >
                                        <div className="flex flex-col items-center">
                                             <div
                                                  className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                                                       currentStep >=
                                                       step.number
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
                                                       currentStep >=
                                                       step.number
                                                            ? "text-orange-600"
                                                            : "text-gray-500"
                                                  }`}
                                             >
                                                  {step.title}
                                             </span>
                                        </div>
                                        {index < steps.length - 1 && (
                                             <div
                                                  className={`w-16 h-1 mx-4 transition-all duration-300 ${
                                                       currentStep > step.number
                                                            ? "bg-orange-600"
                                                            : "bg-gray-200"
                                                  }`}
                                             />
                                        )}
                                   </div>
                              ))}
                         </div>
                    </div>

                    <div className="max-w-4xl mx-auto">
                         {/* Step 1: Program Selection */}
                         {currentStep === 1 && (
                              <Card className="shadow-xl border-0">
                                   <CardHeader className="text-center">
                                        <CardTitle className="text-3xl text-gray-900">
                                             Choose Your Training Program
                                        </CardTitle>
                                        <CardDescription className="text-lg">
                                             Select the training program that
                                             best fits your organization's needs
                                        </CardDescription>
                                   </CardHeader>
                                   <CardContent className="p-8">
                                        <div className="grid md:grid-cols-2 gap-6 mb-8">
                                             {trainingPrograms.map(
                                                  (program) => (
                                                       <Card
                                                            key={program.id}
                                                            className={`cursor-pointer transition-all duration-300 hover:shadow-lg ${
                                                                 formData.programId ===
                                                                 program.id
                                                                      ? "ring-2 ring-orange-600 shadow-lg"
                                                                      : "hover:shadow-md"
                                                            }`}
                                                            onClick={() =>
                                                                 handleInputChange(
                                                                      "programId",
                                                                      program.id
                                                                 )
                                                            }
                                                       >
                                                            <div className="relative">
                                                                 <Image
                                                                      src={
                                                                           program.image ||
                                                                           "/placeholder.svg"
                                                                      }
                                                                      alt={
                                                                           program.title
                                                                      }
                                                                      width={
                                                                           200
                                                                      }
                                                                      height={
                                                                           150
                                                                      }
                                                                      className="w-full h-40 object-cover rounded-t-lg"
                                                                 />
                                                                 <Badge className="absolute top-4 left-4 bg-white/90 text-gray-800">
                                                                      {
                                                                           program.category
                                                                      }
                                                                 </Badge>
                                                                 <Badge className="absolute top-4 right-4 bg-orange-600 text-white">
                                                                      {
                                                                           program.participants
                                                                      }{" "}
                                                                      participants
                                                                 </Badge>
                                                            </div>
                                                            <CardContent className="p-6">
                                                                 <div className="flex justify-between items-start mb-3">
                                                                      <Badge variant="secondary">
                                                                           {
                                                                                program.level
                                                                           }
                                                                      </Badge>
                                                                      <div className="text-right">
                                                                           <div className="text-lg font-bold text-orange-600">
                                                                                {
                                                                                     program.price
                                                                                }
                                                                           </div>
                                                                           <div className="text-sm text-gray-500">
                                                                                {
                                                                                     program.duration
                                                                                }
                                                                           </div>
                                                                      </div>
                                                                 </div>
                                                                 <h3 className="text-lg font-semibold mb-2">
                                                                      {
                                                                           program.title
                                                                      }
                                                                 </h3>
                                                                 <p className="text-gray-600 text-sm mb-4">
                                                                      {
                                                                           program.description
                                                                      }
                                                                 </p>
                                                            </CardContent>
                                                       </Card>
                                                  )
                                             )}
                                        </div>

                                        {formData.programId && (
                                             <div className="space-y-6">
                                                  <div className="grid md:grid-cols-2 gap-6">
                                                       <div>
                                                            <Label htmlFor="deliveryFormat">
                                                                 Delivery Format
                                                            </Label>
                                                            <Select
                                                                 value={
                                                                      formData.deliveryFormat
                                                                 }
                                                                 onValueChange={(
                                                                      value
                                                                 ) =>
                                                                      handleInputChange(
                                                                           "deliveryFormat",
                                                                           value
                                                                      )
                                                                 }
                                                            >
                                                                 <SelectTrigger>
                                                                      <SelectValue placeholder="Select delivery format" />
                                                                 </SelectTrigger>
                                                                 <SelectContent>
                                                                      <SelectItem value="in-person">
                                                                           In-Person
                                                                           Training
                                                                      </SelectItem>
                                                                      <SelectItem value="online">
                                                                           Online
                                                                           Training
                                                                      </SelectItem>
                                                                      <SelectItem value="hybrid">
                                                                           Hybrid
                                                                           (Online
                                                                           +
                                                                           In-Person)
                                                                      </SelectItem>
                                                                      <SelectItem value="custom">
                                                                           Custom
                                                                           Format
                                                                      </SelectItem>
                                                                 </SelectContent>
                                                            </Select>
                                                       </div>
                                                       <div>
                                                            <Label htmlFor="startDate">
                                                                 Preferred Start
                                                                 Date
                                                            </Label>
                                                            <Input
                                                                 id="startDate"
                                                                 type="date"
                                                                 value={
                                                                      formData.startDate
                                                                 }
                                                                 onChange={(
                                                                      e
                                                                 ) =>
                                                                      handleInputChange(
                                                                           "startDate",
                                                                           e
                                                                                .target
                                                                                .value
                                                                      )
                                                                 }
                                                            />
                                                       </div>
                                                  </div>
                                             </div>
                                        )}

                                        <div className="flex justify-end mt-8">
                                             <Button
                                                  onClick={nextStep}
                                                  disabled={
                                                       !formData.programId ||
                                                       !formData.deliveryFormat ||
                                                       !formData.startDate
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

                         {/* Step 2: Organization Information */}
                         {currentStep === 2 && (
                              <Card className="shadow-xl border-0">
                                   <CardHeader className="text-center">
                                        <CardTitle className="text-3xl text-gray-900">
                                             Organization Information
                                        </CardTitle>
                                        <CardDescription className="text-lg">
                                             Tell us about your organization and
                                             training needs
                                        </CardDescription>
                                   </CardHeader>
                                   <CardContent className="p-8">
                                        <div className="space-y-6">
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
                                                                 <SelectItem value="university">
                                                                      University/College
                                                                 </SelectItem>
                                                                 <SelectItem value="school">
                                                                      School/Academy
                                                                 </SelectItem>
                                                                 <SelectItem value="corporation">
                                                                      Corporation
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

                                             <div className="grid md:grid-cols-2 gap-6">
                                                  <div>
                                                       <Label htmlFor="industry">
                                                            Industry
                                                       </Label>
                                                       <Input
                                                            id="industry"
                                                            value={
                                                                 formData.industry
                                                            }
                                                            onChange={(e) =>
                                                                 handleInputChange(
                                                                      "industry",
                                                                      e.target
                                                                           .value
                                                                 )
                                                            }
                                                            placeholder="e.g., Technology, Education, Healthcare"
                                                       />
                                                  </div>
                                                  <div>
                                                       <Label htmlFor="organizationSize">
                                                            Organization Size
                                                       </Label>
                                                       <Select
                                                            value={
                                                                 formData.organizationSize
                                                            }
                                                            onValueChange={(
                                                                 value
                                                            ) =>
                                                                 handleInputChange(
                                                                      "organizationSize",
                                                                      value
                                                                 )
                                                            }
                                                       >
                                                            <SelectTrigger>
                                                                 <SelectValue placeholder="Select organization size" />
                                                            </SelectTrigger>
                                                            <SelectContent>
                                                                 <SelectItem value="1-50">
                                                                      1-50
                                                                      employees
                                                                 </SelectItem>
                                                                 <SelectItem value="51-200">
                                                                      51-200
                                                                      employees
                                                                 </SelectItem>
                                                                 <SelectItem value="201-500">
                                                                      201-500
                                                                      employees
                                                                 </SelectItem>
                                                                 <SelectItem value="501-1000">
                                                                      501-1000
                                                                      employees
                                                                 </SelectItem>
                                                                 <SelectItem value="1000+">
                                                                      1000+
                                                                      employees
                                                                 </SelectItem>
                                                            </SelectContent>
                                                       </Select>
                                                  </div>
                                             </div>

                                             <div>
                                                  <Label htmlFor="currentTechStack">
                                                       Current Technology Stack
                                                  </Label>
                                                  <Textarea
                                                       id="currentTechStack"
                                                       value={
                                                            formData.currentTechStack
                                                       }
                                                       onChange={(e) =>
                                                            handleInputChange(
                                                                 "currentTechStack",
                                                                 e.target.value
                                                            )
                                                       }
                                                       placeholder="Describe your current technology stack, tools, and platforms..."
                                                       rows={3}
                                                  />
                                             </div>
                                        </div>

                                        <div className="flex justify-between mt-8">
                                             <Button
                                                  variant="outline"
                                                  onClick={prevStep}
                                                  className="bg-transparent"
                                             >
                                                  <ArrowLeft className="w-4 h-4 mr-2" />
                                                  Previous
                                             </Button>
                                             <Button
                                                  onClick={nextStep}
                                                  disabled={
                                                       !formData.organizationName ||
                                                       !formData.organizationType
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

                         {/* Step 3: Contact Information */}
                         {currentStep === 3 && (
                              <Card className="shadow-xl border-0">
                                   <CardHeader className="text-center">
                                        <CardTitle className="text-3xl text-gray-900">
                                             Contact Information
                                        </CardTitle>
                                        <CardDescription className="text-lg">
                                             We need your contact information
                                             for the training proposal and
                                             updates
                                        </CardDescription>
                                   </CardHeader>
                                   <CardContent className="p-8">
                                        <div className="space-y-6">
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
                                                            placeholder="Enter your full name"
                                                       />
                                                  </div>
                                                  <div>
                                                       <Label htmlFor="jobTitle">
                                                            Job Title
                                                       </Label>
                                                       <Input
                                                            id="jobTitle"
                                                            value={
                                                                 formData.jobTitle
                                                            }
                                                            onChange={(e) =>
                                                                 handleInputChange(
                                                                      "jobTitle",
                                                                      e.target
                                                                           .value
                                                                 )
                                                            }
                                                            placeholder="e.g., HR Manager, Training Director"
                                                       />
                                                  </div>
                                             </div>

                                             <div className="grid md:grid-cols-2 gap-6">
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
                                                            placeholder="your.email@organization.com"
                                                       />
                                                  </div>
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
                                                       />
                                                  </div>
                                             </div>

                                             <div>
                                                  <Label htmlFor="address">
                                                       Organization Address *
                                                  </Label>
                                                  <Input
                                                       id="address"
                                                       value={formData.address}
                                                       onChange={(e) =>
                                                            handleInputChange(
                                                                 "address",
                                                                 e.target.value
                                                            )
                                                       }
                                                       placeholder="Enter organization address"
                                                  />
                                             </div>

                                             <div className="grid md:grid-cols-3 gap-6">
                                                  <div>
                                                       <Label htmlFor="city">
                                                            City *
                                                       </Label>
                                                       <Input
                                                            id="city"
                                                            value={
                                                                 formData.city
                                                            }
                                                            onChange={(e) =>
                                                                 handleInputChange(
                                                                      "city",
                                                                      e.target
                                                                           .value
                                                                 )
                                                            }
                                                            placeholder="Enter city"
                                                       />
                                                  </div>
                                                  <div>
                                                       <Label htmlFor="state">
                                                            State *
                                                       </Label>
                                                       <Input
                                                            id="state"
                                                            value={
                                                                 formData.state
                                                            }
                                                            onChange={(e) =>
                                                                 handleInputChange(
                                                                      "state",
                                                                      e.target
                                                                           .value
                                                                 )
                                                            }
                                                            placeholder="Enter state"
                                                       />
                                                  </div>
                                                  <div>
                                                       <Label htmlFor="zipCode">
                                                            ZIP Code *
                                                       </Label>
                                                       <Input
                                                            id="zipCode"
                                                            value={
                                                                 formData.zipCode
                                                            }
                                                            onChange={(e) =>
                                                                 handleInputChange(
                                                                      "zipCode",
                                                                      e.target
                                                                           .value
                                                                 )
                                                            }
                                                            placeholder="Enter ZIP code"
                                                       />
                                                  </div>
                                             </div>
                                        </div>

                                        <div className="flex justify-between mt-8">
                                             <Button
                                                  variant="outline"
                                                  onClick={prevStep}
                                                  className="bg-transparent"
                                             >
                                                  <ArrowLeft className="w-4 h-4 mr-2" />
                                                  Previous
                                             </Button>
                                             <Button
                                                  onClick={nextStep}
                                                  disabled={
                                                       !formData.contactName ||
                                                       !formData.contactEmail ||
                                                       !formData.contactPhone ||
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

                         {/* Step 4: Requirements & Submit */}
                         {currentStep === 4 && (
                              <Card className="shadow-xl border-0">
                                   <CardHeader className="text-center">
                                        <CardTitle className="text-3xl text-gray-900">
                                             Training Requirements & Submit
                                        </CardTitle>
                                        <CardDescription className="text-lg">
                                             Please provide training
                                             requirements and complete your
                                             inquiry
                                        </CardDescription>
                                   </CardHeader>
                                   <CardContent className="p-8">
                                        <div className="space-y-8">
                                             {/* Program Summary */}
                                             {selectedProgramData && (
                                                  <div className="bg-orange-50 rounded-lg p-6">
                                                       <h3 className="text-xl font-semibold mb-4">
                                                            Selected Training
                                                            Program
                                                       </h3>
                                                       <div className="flex items-start space-x-4">
                                                            <Image
                                                                 src={
                                                                      selectedProgramData.image ||
                                                                      "/placeholder.svg"
                                                                 }
                                                                 alt={
                                                                      selectedProgramData.title
                                                                 }
                                                                 width={120}
                                                                 height={80}
                                                                 className="rounded-lg object-cover"
                                                            />
                                                            <div className="flex-1">
                                                                 <h4 className="font-semibold text-lg">
                                                                      {
                                                                           selectedProgramData.title
                                                                      }
                                                                 </h4>
                                                                 <p className="text-gray-600 mb-2">
                                                                      {
                                                                           selectedProgramData.description
                                                                      }
                                                                 </p>
                                                                 <div className="flex items-center space-x-4 text-sm text-gray-500">
                                                                      <span>
                                                                           {
                                                                                selectedProgramData.duration
                                                                           }
                                                                      </span>
                                                                      <span>
                                                                           {
                                                                                selectedProgramData.level
                                                                           }
                                                                      </span>
                                                                      <span>
                                                                           {
                                                                                selectedProgramData.participants
                                                                           }{" "}
                                                                           participants
                                                                      </span>
                                                                 </div>
                                                                 <div className="mt-2">
                                                                      <span className="text-sm text-gray-500">
                                                                           Delivery
                                                                           Format:{" "}
                                                                      </span>
                                                                      <span className="font-medium capitalize">
                                                                           {
                                                                                formData.deliveryFormat
                                                                           }
                                                                      </span>
                                                                 </div>
                                                                 <div>
                                                                      <span className="text-sm text-gray-500">
                                                                           Start
                                                                           Date:{" "}
                                                                      </span>
                                                                      <span className="font-medium">
                                                                           {new Date(
                                                                                formData.startDate
                                                                           ).toLocaleDateString()}
                                                                      </span>
                                                                 </div>
                                                            </div>
                                                            <div className="text-right">
                                                                 <div className="text-lg font-bold text-orange-600">
                                                                      {
                                                                           selectedProgramData.price
                                                                      }
                                                                 </div>
                                                                 <Badge className="bg-green-100 text-green-800 mt-1">
                                                                      Custom
                                                                      Quote
                                                                 </Badge>
                                                            </div>
                                                       </div>
                                                  </div>
                                             )}

                                             {/* Training Requirements */}
                                             <div className="grid md:grid-cols-2 gap-6">
                                                  <div>
                                                       <Label htmlFor="participantCount">
                                                            Number of
                                                            Participants *
                                                       </Label>
                                                       <Select
                                                            value={
                                                                 formData.participantCount
                                                            }
                                                            onValueChange={(
                                                                 value
                                                            ) =>
                                                                 handleInputChange(
                                                                      "participantCount",
                                                                      value
                                                                 )
                                                            }
                                                       >
                                                            <SelectTrigger>
                                                                 <SelectValue placeholder="Select participant count" />
                                                            </SelectTrigger>
                                                            <SelectContent>
                                                                 <SelectItem value="1-10">
                                                                      1-10
                                                                      participants
                                                                 </SelectItem>
                                                                 <SelectItem value="11-25">
                                                                      11-25
                                                                      participants
                                                                 </SelectItem>
                                                                 <SelectItem value="26-50">
                                                                      26-50
                                                                      participants
                                                                 </SelectItem>
                                                                 <SelectItem value="51-100">
                                                                      51-100
                                                                      participants
                                                                 </SelectItem>
                                                                 <SelectItem value="100+">
                                                                      100+
                                                                      participants
                                                                 </SelectItem>
                                                            </SelectContent>
                                                       </Select>
                                                  </div>
                                                  <div>
                                                       <Label htmlFor="skillLevel">
                                                            Current Skill Level
                                                       </Label>
                                                       <Select
                                                            value={
                                                                 formData.skillLevel
                                                            }
                                                            onValueChange={(
                                                                 value
                                                            ) =>
                                                                 handleInputChange(
                                                                      "skillLevel",
                                                                      value
                                                                 )
                                                            }
                                                       >
                                                            <SelectTrigger>
                                                                 <SelectValue placeholder="Select skill level" />
                                                            </SelectTrigger>
                                                            <SelectContent>
                                                                 <SelectItem value="beginner">
                                                                      Beginner
                                                                 </SelectItem>
                                                                 <SelectItem value="intermediate">
                                                                      Intermediate
                                                                 </SelectItem>
                                                                 <SelectItem value="advanced">
                                                                      Advanced
                                                                 </SelectItem>
                                                                 <SelectItem value="mixed">
                                                                      Mixed
                                                                      Levels
                                                                 </SelectItem>
                                                            </SelectContent>
                                                       </Select>
                                                  </div>
                                             </div>

                                             <div>
                                                  <Label htmlFor="timeline">
                                                       Preferred Timeline
                                                  </Label>
                                                  <Select
                                                       value={formData.timeline}
                                                       onValueChange={(value) =>
                                                            handleInputChange(
                                                                 "timeline",
                                                                 value
                                                            )
                                                       }
                                                  >
                                                       <SelectTrigger>
                                                            <SelectValue placeholder="Select timeline" />
                                                       </SelectTrigger>
                                                       <SelectContent>
                                                            <SelectItem value="asap">
                                                                 As soon as
                                                                 possible
                                                            </SelectItem>
                                                            <SelectItem value="1-month">
                                                                 Within 1 month
                                                            </SelectItem>
                                                            <SelectItem value="3-months">
                                                                 Within 3 months
                                                            </SelectItem>
                                                            <SelectItem value="6-months">
                                                                 Within 6 months
                                                            </SelectItem>
                                                            <SelectItem value="flexible">
                                                                 Flexible
                                                            </SelectItem>
                                                       </SelectContent>
                                                  </Select>
                                             </div>

                                             <div>
                                                  <Label htmlFor="budget">
                                                       Budget Range
                                                  </Label>
                                                  <Select
                                                       value={formData.budget}
                                                       onValueChange={(value) =>
                                                            handleInputChange(
                                                                 "budget",
                                                                 value
                                                            )
                                                       }
                                                  >
                                                       <SelectTrigger>
                                                            <SelectValue placeholder="Select budget range" />
                                                       </SelectTrigger>
                                                       <SelectContent>
                                                            <SelectItem value="under-10k">
                                                                 Under $10,000
                                                            </SelectItem>
                                                            <SelectItem value="10k-25k">
                                                                 $10,000 -
                                                                 $25,000
                                                            </SelectItem>
                                                            <SelectItem value="25k-50k">
                                                                 $25,000 -
                                                                 $50,000
                                                            </SelectItem>
                                                            <SelectItem value="50k-100k">
                                                                 $50,000 -
                                                                 $100,000
                                                            </SelectItem>
                                                            <SelectItem value="100k+">
                                                                 $100,000+
                                                            </SelectItem>
                                                            <SelectItem value="discuss">
                                                                 To be discussed
                                                            </SelectItem>
                                                       </SelectContent>
                                                  </Select>
                                             </div>

                                             <div>
                                                  <Label htmlFor="specificNeeds">
                                                       Specific Training Needs
                                                  </Label>
                                                  <Textarea
                                                       id="specificNeeds"
                                                       value={
                                                            formData.specificNeeds
                                                       }
                                                       onChange={(e) =>
                                                            handleInputChange(
                                                                 "specificNeeds",
                                                                 e.target.value
                                                            )
                                                       }
                                                       placeholder="Describe your specific training needs, learning objectives, and any particular skills or technologies you want to focus on..."
                                                       rows={4}
                                                  />
                                             </div>

                                             <div>
                                                  <Label htmlFor="specialRequirements">
                                                       Special Requirements
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
                                                       placeholder="Any special requirements, accommodations, or additional information..."
                                                       rows={3}
                                                  />
                                             </div>

                                             {/* Terms and Conditions */}
                                             <div className="space-y-4">
                                                  <div className="flex items-start space-x-2">
                                                       <Checkbox
                                                            id="terms"
                                                            checked={
                                                                 formData.agreeToTerms
                                                            }
                                                            onCheckedChange={(
                                                                 checked
                                                            ) =>
                                                                 handleInputChange(
                                                                      "agreeToTerms",
                                                                      checked
                                                                 )
                                                            }
                                                       />
                                                       <Label
                                                            htmlFor="terms"
                                                            className="text-sm leading-relaxed"
                                                       >
                                                            I agree to the{" "}
                                                            <Link
                                                                 href="/terms"
                                                                 className="text-orange-600 hover:underline"
                                                            >
                                                                 Terms and
                                                                 Conditions
                                                            </Link>{" "}
                                                            and{" "}
                                                            <Link
                                                                 href="/privacy"
                                                                 className="text-orange-600 hover:underline"
                                                            >
                                                                 Privacy Policy
                                                            </Link>
                                                       </Label>
                                                  </div>
                                                  <div className="flex items-start space-x-2">
                                                       <Checkbox
                                                            id="marketing"
                                                            checked={
                                                                 formData.marketingConsent
                                                            }
                                                            onCheckedChange={(
                                                                 checked
                                                            ) =>
                                                                 handleInputChange(
                                                                      "marketingConsent",
                                                                      checked
                                                                 )
                                                            }
                                                       />
                                                       <Label
                                                            htmlFor="marketing"
                                                            className="text-sm leading-relaxed"
                                                       >
                                                            I would like to
                                                            receive updates
                                                            about new training
                                                            programs, industry
                                                            insights, and
                                                            special offers from
                                                            Bingo Academy
                                                       </Label>
                                                  </div>
                                             </div>
                                        </div>

                                        <div className="flex justify-between mt-8">
                                             <Button
                                                  variant="outline"
                                                  onClick={prevStep}
                                                  className="bg-transparent"
                                             >
                                                  <ArrowLeft className="w-4 h-4 mr-2" />
                                                  Previous
                                             </Button>
                                             <Button
                                                  onClick={handleSubmit}
                                                  disabled={
                                                       !formData.participantCount ||
                                                       !formData.agreeToTerms
                                                  }
                                                  className="bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 px-8 py-3"
                                             >
                                                  Submit Training Inquiry
                                                  <CheckCircle className="w-4 h-4 ml-2" />
                                             </Button>
                                        </div>
                                   </CardContent>
                              </Card>
                         )}
                    </div>
               </div>
          </div>
     );
}

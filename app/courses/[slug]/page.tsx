"use client";

import type React from "react";

import { useState, use } from "react";
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
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
     Building,
     GraduationCap,
     Briefcase,
     Target,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/header";
import { getTrainingProgramBySlug } from "@/lib/training-programs-data";

export default function TrainingProgramDetailPage({
     params,
}: {
     params: Promise<{ slug: string }>;
}) {
     const [inquiryData, setInquiryData] = useState({
          organizationName: "",
          organizationType: "",
          contactName: "",
          contactEmail: "",
          contactPhone: "",
          participantCount: "",
          timeline: "",
          budget: "",
          currentTechStack: "",
          trainingGoals: "",
          specialRequirements: "",
     });

     // Unwrap params using React.use() for Next.js 15 compatibility
     const { slug } = use(params);

     // Get the training program data based on the slug
     const trainingProgramData = getTrainingProgramBySlug(slug);

     // If the program doesn't exist, you could redirect or show an error
     if (!trainingProgramData) {
          return (
               <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 flex items-center justify-center">
                    <div className="text-center">
                         <h1 className="text-2xl font-bold text-gray-900 mb-4">
                              Training Program Not Found
                         </h1>
                         <p className="text-gray-600 mb-6">
                              The training program you're looking for doesn't
                              exist.
                         </p>
                         <Link href="/courses">
                              <Button className="bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600">
                                   Browse All Training Programs
                              </Button>
                         </Link>
                    </div>
               </div>
          );
     }

     const handleInputChange = (field: string, value: string) => {
          setInquiryData((prev) => ({
               ...prev,
               [field]: value,
          }));
     };

     const handleInquirySubmit = (e: React.FormEvent) => {
          e.preventDefault();
          console.log("Training inquiry data:", inquiryData);
          alert(
               "Training inquiry submitted successfully! We will contact you with a customized proposal within 2-3 business days."
          );
     };

     return (
          <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
               <Header />

               {/* Breadcrumb */}
               <div className="bg-white border-b">
                    <div className="container mx-auto px-4 py-4">
                         <div className="flex items-center space-x-2 text-sm">
                              <Link
                                   href="/"
                                   className="text-gray-500 hover:text-orange-600"
                              >
                                   Home
                              </Link>
                              <span className="text-gray-400">/</span>
                              <Link
                                   href="/courses"
                                   className="text-gray-500 hover:text-orange-600"
                              >
                                   Training Programs
                              </Link>
                              <span className="text-gray-400">/</span>
                              <span className="text-gray-900">
                                   {trainingProgramData.title}
                              </span>
                         </div>
                    </div>
               </div>

               <div className="container mx-auto px-4 py-8">
                    <div className="grid lg:grid-cols-3 gap-8">
                         {/* Main Content */}
                         <div className="lg:col-span-2 space-y-8">
                              {/* Program Header */}
                              <div className="bg-white rounded-2xl shadow-lg p-8">
                                   <div className="flex items-center mb-4">
                                        <Link
                                             href="/courses"
                                             className="flex items-center text-orange-600 hover:text-orange-600 mr-4"
                                        >
                                             <ArrowLeft className="w-4 h-4 mr-1" />
                                             Back to Training Programs
                                        </Link>
                                        <Badge className="bg-orange-100 text-orange-800">
                                             {trainingProgramData.category}
                                        </Badge>
                                   </div>

                                   <h1 className="text-4xl font-bold text-gray-900 mb-4">
                                        {trainingProgramData.title}
                                   </h1>

                                   <p className="text-xl text-gray-600 mb-6">
                                        {trainingProgramData.description}
                                   </p>

                                   <div className="flex flex-wrap items-center gap-6 mb-6">
                                        <div className="flex items-center">
                                             <div className="flex items-center mr-2">
                                                  {[...Array(5)].map((_, i) => (
                                                       <Star
                                                            key={i}
                                                            className={`w-5 h-5 ${
                                                                 i <
                                                                 Math.floor(
                                                                      trainingProgramData.rating
                                                                 )
                                                                      ? "text-yellow-400 fill-current"
                                                                      : "text-gray-300"
                                                            }`}
                                                       />
                                                  ))}
                                             </div>
                                             <span className="text-gray-600">
                                                  ({trainingProgramData.rating})
                                                  •{" "}
                                                  {
                                                       trainingProgramData.organizationsServed
                                                  }{" "}
                                                  organizations served
                                             </span>
                                        </div>
                                        <div className="flex items-center text-gray-600">
                                             <Clock className="w-5 h-5 mr-2" />
                                             {trainingProgramData.duration}
                                        </div>
                                        <div className="flex items-center text-gray-600">
                                             <Users className="w-5 h-5 mr-2" />
                                             {trainingProgramData.level}
                                        </div>
                                        <Badge
                                             variant="outline"
                                             className="text-orange-600 border-orange-600"
                                        >
                                             {
                                                  trainingProgramData.organizationType
                                             }
                                        </Badge>
                                   </div>

                                   <div className="flex items-center space-x-4">
                                        <Button
                                             size="lg"
                                             className="bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600"
                                        >
                                             <Play className="w-5 h-5 mr-2" />
                                             Request Custom Quote
                                        </Button>
                                        <Button size="lg" variant="outline">
                                             <Share2 className="w-5 h-5 mr-2" />
                                             Share Program
                                        </Button>
                                   </div>
                              </div>

                              {/* Program Image */}
                              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                                   <Image
                                        src={
                                             trainingProgramData.image ||
                                             "/placeholder.svg"
                                        }
                                        alt={trainingProgramData.title}
                                        width={600}
                                        height={400}
                                        className="w-full h-80 object-cover"
                                   />
                              </div>

                              {/* Program Tabs */}
                              <div className="bg-white rounded-2xl shadow-lg p-8">
                                   <Tabs
                                        defaultValue="overview"
                                        className="w-full"
                                   >
                                        <TabsList className="grid w-full grid-cols-4">
                                             <TabsTrigger value="overview">
                                                  Overview
                                             </TabsTrigger>
                                             <TabsTrigger value="curriculum">
                                                  Curriculum
                                             </TabsTrigger>
                                             <TabsTrigger value="instructor">
                                                  Instructor
                                             </TabsTrigger>
                                             <TabsTrigger value="reviews">
                                                  Reviews
                                             </TabsTrigger>
                                        </TabsList>

                                        <TabsContent
                                             value="overview"
                                             className="mt-6 space-y-6"
                                        >
                                             <div>
                                                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                                       Program Overview
                                                  </h3>
                                                  <p className="text-gray-600 leading-relaxed mb-6">
                                                       {
                                                            trainingProgramData.longDescription
                                                       }
                                                  </p>
                                             </div>

                                             <div>
                                                  <h4 className="text-xl font-semibold text-gray-900 mb-4">
                                                       What Your Organization
                                                       Will Achieve
                                                  </h4>
                                                  <div className="grid md:grid-cols-2 gap-3">
                                                       {trainingProgramData.outcomes.map(
                                                            (
                                                                 outcome,
                                                                 index
                                                            ) => (
                                                                 <div
                                                                      key={
                                                                           index
                                                                      }
                                                                      className="flex items-start space-x-3"
                                                                 >
                                                                      <CheckCircle className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                                                                      <span className="text-gray-700">
                                                                           {
                                                                                outcome
                                                                           }
                                                                      </span>
                                                                 </div>
                                                            )
                                                       )}
                                                  </div>
                                             </div>

                                             <div>
                                                  <h4 className="text-xl font-semibold text-gray-900 mb-4">
                                                       Prerequisites
                                                  </h4>
                                                  <ul className="space-y-2">
                                                       {trainingProgramData.prerequisites.map(
                                                            (prereq, index) => (
                                                                 <li
                                                                      key={
                                                                           index
                                                                      }
                                                                      className="flex items-start space-x-3"
                                                                 >
                                                                      <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 flex-shrink-0"></div>
                                                                      <span className="text-gray-700">
                                                                           {
                                                                                prereq
                                                                           }
                                                                      </span>
                                                                 </li>
                                                            )
                                                       )}
                                                  </ul>
                                             </div>

                                             <div>
                                                  <h4 className="text-xl font-semibold text-gray-900 mb-4">
                                                       Target Organizations
                                                  </h4>
                                                  <div className="flex flex-wrap gap-2">
                                                       {trainingProgramData.targetOrganizations.map(
                                                            (org, index) => (
                                                                 <Badge
                                                                      key={
                                                                           index
                                                                      }
                                                                      variant="outline"
                                                                      className="text-orange-600 border-orange-600"
                                                                 >
                                                                      {org}
                                                                 </Badge>
                                                            )
                                                       )}
                                                  </div>
                                             </div>

                                             <div>
                                                  <h4 className="text-xl font-semibold text-gray-900 mb-4">
                                                       Delivery Options
                                                  </h4>
                                                  <div className="grid md:grid-cols-2 gap-3">
                                                       {trainingProgramData.deliveryOptions.map(
                                                            (option, index) => (
                                                                 <div
                                                                      key={
                                                                           index
                                                                      }
                                                                      className="flex items-center space-x-3"
                                                                 >
                                                                      <Target className="w-5 h-5 text-orange-600 flex-shrink-0" />
                                                                      <span className="text-gray-700">
                                                                           {
                                                                                option
                                                                           }
                                                                      </span>
                                                                 </div>
                                                            )
                                                       )}
                                                  </div>
                                             </div>
                                        </TabsContent>

                                        <TabsContent
                                             value="curriculum"
                                             className="mt-6"
                                        >
                                             <h3 className="text-2xl font-bold text-gray-900 mb-6">
                                                  Training Curriculum
                                             </h3>
                                             <div className="space-y-4">
                                                  {trainingProgramData.curriculum.map(
                                                       (week, index) => (
                                                            <Card
                                                                 key={index}
                                                                 className="border-l-4 border-orange-600"
                                                            >
                                                                 <CardHeader>
                                                                      <CardTitle className="flex items-center">
                                                                           <span className="bg-orange-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm mr-3">
                                                                                {
                                                                                     week.week
                                                                                }
                                                                           </span>
                                                                           {
                                                                                week.title
                                                                           }
                                                                      </CardTitle>
                                                                 </CardHeader>
                                                                 <CardContent>
                                                                      <ul className="grid md:grid-cols-2 gap-2">
                                                                           {week.topics.map(
                                                                                (
                                                                                     topic,
                                                                                     topicIndex
                                                                                ) => (
                                                                                     <li
                                                                                          key={
                                                                                               topicIndex
                                                                                          }
                                                                                          className="flex items-center space-x-2"
                                                                                     >
                                                                                          <CheckCircle className="w-4 h-4 text-orange-600" />
                                                                                          <span className="text-gray-700">
                                                                                               {
                                                                                                    topic
                                                                                               }
                                                                                          </span>
                                                                                     </li>
                                                                                )
                                                                           )}
                                                                      </ul>
                                                                 </CardContent>
                                                            </Card>
                                                       )
                                                  )}
                                             </div>
                                        </TabsContent>

                                        <TabsContent
                                             value="instructor"
                                             className="mt-6"
                                        >
                                             <h3 className="text-2xl font-bold text-gray-900 mb-6">
                                                  Meet Your Training Expert
                                             </h3>
                                             <Card>
                                                  <CardContent className="p-6">
                                                       <div className="flex items-start space-x-6">
                                                            <Image
                                                                 src={
                                                                      trainingProgramData
                                                                           .instructor
                                                                           .image ||
                                                                      "/placeholder.svg"
                                                                 }
                                                                 alt={
                                                                      trainingProgramData
                                                                           .instructor
                                                                           .name
                                                                 }
                                                                 width={80}
                                                                 height={80}
                                                                 className="rounded-full"
                                                            />
                                                            <div className="flex-1">
                                                                 <h4 className="text-xl font-semibold text-gray-900 mb-2">
                                                                      {
                                                                           trainingProgramData
                                                                                .instructor
                                                                                .name
                                                                      }
                                                                 </h4>
                                                                 <p className="text-gray-600 leading-relaxed">
                                                                      {
                                                                           trainingProgramData
                                                                                .instructor
                                                                                .bio
                                                                      }
                                                                 </p>
                                                                 <div className="flex items-center mt-4 space-x-4">
                                                                      <div className="flex items-center">
                                                                           <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                                                                           <span className="text-sm text-gray-600">
                                                                                4.9
                                                                                Instructor
                                                                                Rating
                                                                           </span>
                                                                      </div>
                                                                      <div className="flex items-center">
                                                                           <Building className="w-4 h-4 text-gray-400 mr-1" />
                                                                           <span className="text-sm text-gray-600">
                                                                                200+
                                                                                Organizations
                                                                                Trained
                                                                           </span>
                                                                      </div>
                                                                 </div>
                                                            </div>
                                                       </div>
                                                  </CardContent>
                                             </Card>
                                        </TabsContent>

                                        <TabsContent
                                             value="reviews"
                                             className="mt-6"
                                        >
                                             <h3 className="text-2xl font-bold text-gray-900 mb-6">
                                                  Client Reviews
                                             </h3>
                                             <div className="space-y-6">
                                                  {[
                                                       {
                                                            name: "TechCorp Solutions",
                                                            contact: "Sarah Johnson, CTO",
                                                            rating: 5,
                                                            comment: "Excellent training program! Our team gained valuable Python and data science skills that we've immediately applied to our projects. The customized approach made all the difference.",
                                                            date: "2 weeks ago",
                                                       },
                                                       {
                                                            name: "State University",
                                                            contact: "Dr. Michael Chen, Dean of Computer Science",
                                                            rating: 5,
                                                            comment: "The training transformed our faculty's capabilities. We've integrated the curriculum into our courses and our students are benefiting immensely.",
                                                            date: "1 month ago",
                                                       },
                                                       {
                                                            name: "InnovateCorp",
                                                            contact: "David Kim, VP of Engineering",
                                                            rating: 4,
                                                            comment: "Great content and well-structured. Our development team is now much more confident with data science projects.",
                                                            date: "1 month ago",
                                                       },
                                                  ].map((review, index) => (
                                                       <Card key={index}>
                                                            <CardContent className="p-6">
                                                                 <div className="flex items-start justify-between mb-4">
                                                                      <div>
                                                                           <h5 className="font-semibold text-gray-900">
                                                                                {
                                                                                     review.name
                                                                                }
                                                                           </h5>
                                                                           <p className="text-sm text-gray-600">
                                                                                {
                                                                                     review.contact
                                                                                }
                                                                           </p>
                                                                           <div className="flex items-center mt-1">
                                                                                {[
                                                                                     ...Array(
                                                                                          5
                                                                                     ),
                                                                                ].map(
                                                                                     (
                                                                                          _,
                                                                                          i
                                                                                     ) => (
                                                                                          <Star
                                                                                               key={
                                                                                                    i
                                                                                               }
                                                                                               className={`w-4 h-4 ${
                                                                                                    i <
                                                                                                    review.rating
                                                                                                         ? "text-yellow-400 fill-current"
                                                                                                         : "text-gray-300"
                                                                                               }`}
                                                                                          />
                                                                                     )
                                                                                )}
                                                                           </div>
                                                                      </div>
                                                                      <span className="text-sm text-gray-500">
                                                                           {
                                                                                review.date
                                                                           }
                                                                      </span>
                                                                 </div>
                                                                 <p className="text-gray-700">
                                                                      {
                                                                           review.comment
                                                                      }
                                                                 </p>
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
                                                  <span className="text-3xl font-bold text-orange-600">
                                                       {
                                                            trainingProgramData.price
                                                       }
                                                  </span>
                                             </div>
                                             <Badge className="bg-orange-100 text-orange-800">
                                                  Customized for Your
                                                  Organization
                                             </Badge>
                                        </div>
                                   </CardHeader>
                                   <CardContent className="space-y-4">
                                        <div className="space-y-3">
                                             {trainingProgramData.features.map(
                                                  (feature, index) => (
                                                       <div
                                                            key={index}
                                                            className="flex items-center space-x-3"
                                                       >
                                                            <CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0" />
                                                            <span className="text-gray-700">
                                                                 {feature}
                                                            </span>
                                                       </div>
                                                  )
                                             )}
                                        </div>

                                        <div className="space-y-3 pt-4 border-t">
                                             <Button className="w-full bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 text-lg py-6">
                                                  <DollarSign className="w-5 h-5 mr-2" />
                                                  Request Custom Quote
                                             </Button>
                                             <Button
                                                  variant="outline"
                                                  className="w-full bg-transparent"
                                             >
                                                  <Download className="w-4 h-4 mr-2" />
                                                  Download Program Brochure
                                             </Button>
                                        </div>
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
                                   <Link
                                        href="/"
                                        className="flex items-center space-x-2 mb-6"
                                   >
                                        <div className="w-10 h-10 bg-gradient-to-r from-orange-600 to-orange-500 rounded-lg flex items-center justify-center">
                                             <Code className="w-6 h-6 text-white" />
                                        </div>
                                        <span className="text-2xl font-bold">
                                             Bingo Academy
                                        </span>
                                   </Link>
                                   <p className="text-gray-400 mb-6">
                                        Empowering organizations through expert
                                        training and professional development in
                                        cutting-edge technologies.
                                   </p>
                              </div>

                              <div>
                                   <h3 className="text-lg font-semibold mb-6">
                                        Quick Links
                                   </h3>
                                   <ul className="space-y-3">
                                        <li>
                                             <Link
                                                  href="/courses"
                                                  className="text-gray-400 hover:text-white transition-colors"
                                             >
                                                  All Training Programs
                                             </Link>
                                        </li>
                                        <li>
                                             <Link
                                                  href="/about"
                                                  className="text-gray-400 hover:text-white transition-colors"
                                             >
                                                  About Us
                                             </Link>
                                        </li>
                                        <li>
                                             <Link
                                                  href="/events"
                                                  className="text-gray-400 hover:text-white transition-colors"
                                             >
                                                  Events
                                             </Link>
                                        </li>
                                        <li>
                                             <Link
                                                  href="/contact"
                                                  className="text-gray-400 hover:text-white transition-colors"
                                             >
                                                  Contact
                                             </Link>
                                        </li>
                                   </ul>
                              </div>

                              <div>
                                   <h3 className="text-lg font-semibold mb-6">
                                        Training Programs
                                   </h3>
                                   <ul className="space-y-3">
                                        <li>
                                             <Link
                                                  href="/courses?category=Python"
                                                  className="text-gray-400 hover:text-white transition-colors"
                                             >
                                                  Python & Data Science
                                             </Link>
                                        </li>
                                        <li>
                                             <Link
                                                  href="/courses?category=AI"
                                                  className="text-gray-400 hover:text-white transition-colors"
                                             >
                                                  AI & Machine Learning
                                             </Link>
                                        </li>
                                        <li>
                                             <Link
                                                  href="/courses?category=Cloud"
                                                  className="text-gray-400 hover:text-white transition-colors"
                                             >
                                                  Cloud & DevOps
                                             </Link>
                                        </li>
                                        <li>
                                             <Link
                                                  href="/courses?category=Cybersecurity"
                                                  className="text-gray-400 hover:text-white transition-colors"
                                             >
                                                  Cybersecurity
                                             </Link>
                                        </li>
                                        <li>
                                             <Link
                                                  href="/courses?category=Web"
                                                  className="text-gray-400 hover:text-white transition-colors"
                                             >
                                                  Web Development
                                             </Link>
                                        </li>
                                   </ul>
                              </div>

                              <div>
                                   <h3 className="text-lg font-semibold mb-6">
                                        Contact Info
                                   </h3>
                                   <div className="space-y-3 text-gray-400">
                                        <p>
                                             📍 123 Education Street
                                             <br />
                                             Tech City, TC 12345
                                        </p>
                                        <p>📞 (555) 123-4567</p>
                                        <p>✉️ training@bingoacademy.com</p>
                                        <p>
                                             🕒 Mon-Fri: 9AM-6PM
                                             <br />
                                             Sat: 10AM-4PM
                                        </p>
                                   </div>
                              </div>
                         </div>

                         <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
                              <p>
                                   &copy; 2024 Bingo Academy. All rights
                                   reserved. | Privacy Policy | Terms of Service
                              </p>
                         </div>
                    </div>
               </footer>
          </div>
     );
}

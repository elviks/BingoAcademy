"use client";

import { Button } from "@/components/ui/button";
import {
     Card,
     CardContent,
     CardDescription,
     CardHeader,
     CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
     Code,
     CheckCircle,
     Calendar,
     Mail,
     Phone,
     Download,
     ArrowRight,
     Building,
     Users,
     Target,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function TrainingInquirySuccessPage() {
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
                                   <Button className="bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600">
                                        Back to Home
                                   </Button>
                              </Link>
                         </nav>
                    </div>
               </header>

               <div className="container mx-auto px-6 py-16">
                    <div className="max-w-4xl mx-auto">
                         {/* Success Message */}
                         <div className="text-center mb-12">
                              <div className="w-24 h-24 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                                   <CheckCircle className="w-12 h-12 text-white" />
                              </div>
                              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                                   Training Inquiry Submitted! 🎉
                              </h1>
                              <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                                   Thank you for your interest in our training
                                   programs! Your inquiry has been successfully
                                   submitted and our team will get back to you
                                   with a customized proposal.
                              </p>
                         </div>

                         {/* Confirmation Details */}
                         <Card className="shadow-xl border-0 mb-8">
                              <CardHeader className="bg-gradient-to-r from-orange-50 to-orange-100 rounded-t-lg">
                                   <CardTitle className="text-2xl text-gray-900">
                                        Training Inquiry Confirmation
                                   </CardTitle>
                                   <CardDescription>
                                        Inquiry ID:{" "}
                                        <span className="font-mono font-semibold">
                                             #BA-2024-001234
                                        </span>
                                   </CardDescription>
                              </CardHeader>
                              <CardContent className="p-8">
                                   <div className="grid md:grid-cols-2 gap-8">
                                        <div>
                                             <h3 className="text-lg font-semibold mb-4 text-gray-900">
                                                  Training Program Details
                                             </h3>
                                             <div className="space-y-3">
                                                  <div className="flex items-center space-x-3">
                                                       <Image
                                                            src="/placeholder.svg?height=60&width=80"
                                                            alt="Training Program"
                                                            width={80}
                                                            height={60}
                                                            className="rounded-lg object-cover"
                                                       />
                                                       <div>
                                                            <div className="font-semibold">
                                                                 Python & Data
                                                                 Science
                                                                 Bootcamp
                                                            </div>
                                                            <div className="text-sm text-gray-600">
                                                                 8 weeks •
                                                                 Intermediate
                                                                 Level
                                                            </div>
                                                            <Badge className="bg-orange-100 text-orange-800 text-xs">
                                                                 Custom Pricing
                                                            </Badge>
                                                       </div>
                                                  </div>
                                                  <div className="text-sm text-gray-600">
                                                       <div>
                                                            <span className="font-medium">
                                                                 Delivery
                                                                 Format:
                                                            </span>{" "}
                                                            Hybrid (Online +
                                                            In-Person)
                                                       </div>
                                                       <div>
                                                            <span className="font-medium">
                                                                 Timeline:
                                                            </span>{" "}
                                                            Flexible Scheduling
                                                       </div>
                                                       <div>
                                                            <span className="font-medium">
                                                                 Participants:
                                                            </span>{" "}
                                                            15-25 professionals
                                                       </div>
                                                  </div>
                                             </div>
                                        </div>

                                        <div>
                                             <h3 className="text-lg font-semibold mb-4 text-gray-900">
                                                  Organization Information
                                             </h3>
                                             <div className="space-y-2 text-sm">
                                                  <div>
                                                       <span className="font-medium">
                                                            Organization:
                                                       </span>{" "}
                                                       TechCorp Solutions
                                                  </div>
                                                  <div>
                                                       <span className="font-medium">
                                                            Type:
                                                       </span>{" "}
                                                       Corporation
                                                  </div>
                                                  <div>
                                                       <span className="font-medium">
                                                            Contact:
                                                       </span>{" "}
                                                       Sarah Johnson
                                                  </div>
                                                  <div>
                                                       <span className="font-medium">
                                                            Title:
                                                       </span>{" "}
                                                       Learning & Development
                                                       Manager
                                                  </div>
                                                  <div>
                                                       <span className="font-medium">
                                                            Email:
                                                       </span>{" "}
                                                       sarah.johnson@techcorp.com
                                                  </div>
                                                  <div>
                                                       <span className="font-medium">
                                                            Phone:
                                                       </span>{" "}
                                                       (555) 123-4567
                                                  </div>
                                             </div>
                                        </div>
                                   </div>

                                   <div className="mt-8 p-6 bg-blue-50 rounded-lg border border-blue-200">
                                        <div className="flex items-center justify-between">
                                             <div>
                                                  <div className="font-semibold text-blue-800">
                                                       Status: Under Review
                                                  </div>
                                                  <div className="text-sm text-blue-600">
                                                       Custom proposal will be
                                                       prepared within 2-3
                                                       business days
                                                  </div>
                                             </div>
                                             <Badge className="bg-blue-100 text-blue-800">
                                                  Processing
                                             </Badge>
                                        </div>
                                   </div>
                              </CardContent>
                         </Card>

                         {/* Next Steps */}
                         <Card className="shadow-xl border-0 mb-8">
                              <CardHeader>
                                   <CardTitle className="text-2xl text-gray-900">
                                        What Happens Next?
                                   </CardTitle>
                                   <CardDescription>
                                        Here's what you can expect in the coming
                                        days
                                   </CardDescription>
                              </CardHeader>
                              <CardContent className="p-8">
                                   <div className="space-y-6">
                                        <div className="flex items-start space-x-4">
                                             <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                                  <Mail className="w-4 h-4 text-orange-600" />
                                             </div>
                                             <div>
                                                  <h3 className="font-semibold text-gray-900 mb-1">
                                                       Confirmation Email
                                                       (Within 24 hours)
                                                  </h3>
                                                  <p className="text-gray-600 text-sm">
                                                       You'll receive a detailed
                                                       confirmation email with
                                                       your inquiry details and
                                                       next steps for the
                                                       proposal process.
                                                  </p>
                                             </div>
                                        </div>

                                        <div className="flex items-start space-x-4">
                                             <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                                  <Phone className="w-4 h-4 text-orange-600" />
                                             </div>
                                             <div>
                                                  <h3 className="font-semibold text-gray-900 mb-1">
                                                       Consultation Call (2-3
                                                       days)
                                                  </h3>
                                                  <p className="text-gray-600 text-sm">
                                                       Our training experts will
                                                       schedule a call to
                                                       discuss your specific
                                                       needs, answer questions,
                                                       and gather additional
                                                       requirements.
                                                  </p>
                                             </div>
                                        </div>

                                        <div className="flex items-start space-x-4">
                                             <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                                  <Target className="w-4 h-4 text-orange-600" />
                                             </div>
                                             <div>
                                                  <h3 className="font-semibold text-gray-900 mb-1">
                                                       Custom Proposal (3-5
                                                       days)
                                                  </h3>
                                                  <p className="text-gray-600 text-sm">
                                                       We'll prepare a detailed
                                                       training proposal
                                                       including curriculum,
                                                       timeline, pricing, and
                                                       implementation plan
                                                       tailored to your
                                                       organization.
                                                  </p>
                                             </div>
                                        </div>

                                        <div className="flex items-start space-x-4">
                                             <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                                  <CheckCircle className="w-4 h-4 text-green-600" />
                                             </div>
                                             <div>
                                                  <h3 className="font-semibold text-gray-900 mb-1">
                                                       Proposal Review &
                                                       Approval
                                                  </h3>
                                                  <p className="text-gray-600 text-sm">
                                                       Once you approve the
                                                       proposal, we'll finalize
                                                       the contract and begin
                                                       preparing for your
                                                       training program launch.
                                                  </p>
                                             </div>
                                        </div>
                                   </div>
                              </CardContent>
                         </Card>

                         {/* Resources */}
                         <Card className="shadow-xl border-0 mb-8">
                              <CardHeader>
                                   <CardTitle className="text-2xl text-gray-900">
                                        Helpful Resources
                                   </CardTitle>
                                   <CardDescription>
                                        Learn more about our training programs
                                        and capabilities
                                   </CardDescription>
                              </CardHeader>
                              <CardContent className="p-8">
                                   <div className="grid md:grid-cols-2 gap-6">
                                        <div className="space-y-4">
                                             <Button className="w-full justify-start bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600">
                                                  <Download className="w-4 h-4 mr-2" />
                                                  Download Training Brochure
                                             </Button>
                                             <Button
                                                  variant="outline"
                                                  className="w-full justify-start bg-transparent"
                                             >
                                                  <Building className="w-4 h-4 mr-2" />
                                                  View Case Studies
                                             </Button>
                                        </div>
                                        <div className="space-y-4">
                                             <Button
                                                  variant="outline"
                                                  className="w-full justify-start bg-transparent"
                                             >
                                                  <Users className="w-4 h-4 mr-2" />
                                                  Meet Our Trainers
                                             </Button>
                                             <Button
                                                  variant="outline"
                                                  className="w-full justify-start bg-transparent"
                                             >
                                                  <Phone className="w-4 h-4 mr-2" />
                                                  Schedule Demo
                                             </Button>
                                        </div>
                                   </div>
                              </CardContent>
                         </Card>

                         {/* Call to Action */}
                         <div className="text-center">
                              <div className="bg-gradient-to-r from-orange-600 to-orange-500 rounded-2xl p-8 text-white mb-8">
                                   <h2 className="text-3xl font-bold mb-4">
                                        Ready to Transform Your Organization! 🚀
                                   </h2>
                                   <p className="text-xl mb-6 opacity-90">
                                        We're excited to partner with you in
                                        developing your team's technical
                                        capabilities and driving innovation.
                                   </p>
                                   <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                        <Link href="/courses">
                                             <Button
                                                  size="lg"
                                                  className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-3"
                                             >
                                                  Browse Training Programs
                                                  <ArrowRight className="w-4 h-4 ml-2" />
                                             </Button>
                                        </Link>
                                        <Link href="/about">
                                             <Button
                                                  size="lg"
                                                  variant="outline"
                                                  className="border-2 border-white text-white hover:bg-white hover:text-orange-600 px-8 py-3 bg-transparent"
                                             >
                                                  Learn About Us
                                             </Button>
                                        </Link>
                                   </div>
                              </div>

                              <p className="text-gray-600">
                                   Questions? Contact us at{" "}
                                   <a
                                        href="mailto:training@bingoacademy.com"
                                        className="text-orange-600 hover:underline"
                                   >
                                        training@bingoacademy.com
                                   </a>{" "}
                                   or call{" "}
                                   <a
                                        href="tel:+15551234567"
                                        className="text-orange-600 hover:underline"
                                   >
                                        (555) 123-4567
                                   </a>
                              </p>
                         </div>
                    </div>
               </div>
          </div>
     );
}

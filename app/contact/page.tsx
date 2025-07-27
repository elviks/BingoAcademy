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
     MapPin,
     Phone,
     Mail,
     Clock,
     MessageCircle,
     Send,
     Calendar,
     Users,
     HelpCircle,
     Building,
     GraduationCap,
     Briefcase,
     Globe,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function ContactPage() {
     const [contactData, setContactData] = useState({
          organizationName: "",
          contactName: "",
          email: "",
          phone: "",
          organizationType: "",
          subject: "",
          message: "",
          inquiryType: "",
          preferredContact: "",
          participantCount: "",
          timeline: "",
     });

     const handleInputChange = (field: string, value: string) => {
          setContactData((prev) => ({
               ...prev,
               [field]: value,
          }));
     };

     const handleSubmit = (e: React.FormEvent) => {
          e.preventDefault();
          console.log("Contact form submitted:", contactData);
          alert(
               "Thank you for your inquiry! We will get back to you within 24 hours with a customized training proposal."
          );
          setContactData({
               organizationName: "",
               contactName: "",
               email: "",
               phone: "",
               organizationType: "",
               subject: "",
               message: "",
               inquiryType: "",
               preferredContact: "",
               participantCount: "",
               timeline: "",
          });
     };

     return (
          <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
               <Header />

               {/* Hero Section */}
               <section className="py-16 bg-gradient-to-r from-orange-600 to-orange-500 text-white">
                    <div className="container mx-auto px-4 text-center">
                         <div className="flex items-center justify-center mb-4">
                              <MessageCircle className="w-12 h-12 mr-4" />
                              <h1 className="text-5xl font-bold">
                                   Get in Touch
                              </h1>
                         </div>
                         <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                              Ready to transform your organization with expert
                              training? Have questions about our programs? We're
                              here to help! Reach out to us and we'll get back
                              to you with a customized solution.
                         </p>

                         <div className="flex justify-center space-x-8 text-center">
                              <div>
                                   <div className="text-3xl font-bold">
                                        24hrs
                                   </div>
                                   <div className="opacity-90">
                                        Response Time
                                   </div>
                              </div>
                              <div>
                                   <div className="text-3xl font-bold">
                                        5 Days
                                   </div>
                                   <div className="opacity-90">Per Week</div>
                              </div>
                              <div>
                                   <div className="text-3xl font-bold">98%</div>
                                   <div className="opacity-90">
                                        Client Satisfaction
                                   </div>
                              </div>
                         </div>
                    </div>
               </section>

               <div className="container mx-auto px-4 py-16">
                    <div className="grid lg:grid-cols-3 gap-12">
                         {/* Contact Form */}
                         <div className="lg:col-span-2">
                              <Card className="shadow-xl border-0">
                                   <CardHeader>
                                        <CardTitle className="text-3xl text-gray-900 flex items-center">
                                             <Send className="w-8 h-8 mr-3 text-orange-600" />
                                             Request Training Proposal
                                        </CardTitle>
                                        <CardDescription className="text-lg">
                                             Fill out the form below and we'll
                                             get back to you within 24 hours
                                             with a customized training
                                             proposal.
                                        </CardDescription>
                                   </CardHeader>
                                   <CardContent>
                                        <form
                                             onSubmit={handleSubmit}
                                             className="space-y-6"
                                        >
                                             <div className="grid md:grid-cols-2 gap-6">
                                                  <div>
                                                       <Label htmlFor="organizationName">
                                                            Organization Name *
                                                       </Label>
                                                       <Input
                                                            id="organizationName"
                                                            value={
                                                                 contactData.organizationName
                                                            }
                                                            onChange={(e) =>
                                                                 handleInputChange(
                                                                      "organizationName",
                                                                      e.target
                                                                           .value
                                                                 )
                                                            }
                                                            placeholder="Your organization name"
                                                            required
                                                       />
                                                  </div>
                                                  <div>
                                                       <Label htmlFor="contactName">
                                                            Contact Person *
                                                       </Label>
                                                       <Input
                                                            id="contactName"
                                                            value={
                                                                 contactData.contactName
                                                            }
                                                            onChange={(e) =>
                                                                 handleInputChange(
                                                                      "contactName",
                                                                      e.target
                                                                           .value
                                                                 )
                                                            }
                                                            placeholder="Your full name"
                                                            required
                                                       />
                                                  </div>
                                             </div>

                                             <div className="grid md:grid-cols-2 gap-6">
                                                  <div>
                                                       <Label htmlFor="email">
                                                            Email Address *
                                                       </Label>
                                                       <Input
                                                            id="email"
                                                            type="email"
                                                            value={
                                                                 contactData.email
                                                            }
                                                            onChange={(e) =>
                                                                 handleInputChange(
                                                                      "email",
                                                                      e.target
                                                                           .value
                                                                 )
                                                            }
                                                            placeholder="your.email@organization.com"
                                                            required
                                                       />
                                                  </div>
                                                  <div>
                                                       <Label htmlFor="phone">
                                                            Phone Number
                                                       </Label>
                                                       <Input
                                                            id="phone"
                                                            type="tel"
                                                            value={
                                                                 contactData.phone
                                                            }
                                                            onChange={(e) =>
                                                                 handleInputChange(
                                                                      "phone",
                                                                      e.target
                                                                           .value
                                                                 )
                                                            }
                                                            placeholder="(555) 123-4567"
                                                       />
                                                  </div>
                                             </div>

                                             <div className="grid md:grid-cols-2 gap-6">
                                                  <div>
                                                       <Label htmlFor="organizationType">
                                                            Organization Type *
                                                       </Label>
                                                       <Select
                                                            value={
                                                                 contactData.organizationType
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
                                                  <div>
                                                       <Label htmlFor="inquiryType">
                                                            Inquiry Type *
                                                       </Label>
                                                       <Select
                                                            value={
                                                                 contactData.inquiryType
                                                            }
                                                            onValueChange={(
                                                                 value
                                                            ) =>
                                                                 handleInputChange(
                                                                      "inquiryType",
                                                                      value
                                                                 )
                                                            }
                                                       >
                                                            <SelectTrigger>
                                                                 <SelectValue placeholder="Select inquiry type" />
                                                            </SelectTrigger>
                                                            <SelectContent>
                                                                 <SelectItem value="training-proposal">
                                                                      Training
                                                                      Proposal
                                                                 </SelectItem>
                                                                 <SelectItem value="custom-program">
                                                                      Custom
                                                                      Program
                                                                 </SelectItem>
                                                                 <SelectItem value="pricing">
                                                                      Pricing &
                                                                      Budget
                                                                 </SelectItem>
                                                                 <SelectItem value="schedule">
                                                                      Schedule &
                                                                      Availability
                                                                 </SelectItem>
                                                                 <SelectItem value="partnership">
                                                                      Partnership
                                                                 </SelectItem>
                                                                 <SelectItem value="consultation">
                                                                      Consultation
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
                                                       <Label htmlFor="participantCount">
                                                            Number of
                                                            Participants
                                                       </Label>
                                                       <Select
                                                            value={
                                                                 contactData.participantCount
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
                                                       <Label htmlFor="timeline">
                                                            Preferred Timeline
                                                       </Label>
                                                       <Select
                                                            value={
                                                                 contactData.timeline
                                                            }
                                                            onValueChange={(
                                                                 value
                                                            ) =>
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
                                                                      Within 1
                                                                      month
                                                                 </SelectItem>
                                                                 <SelectItem value="3-months">
                                                                      Within 3
                                                                      months
                                                                 </SelectItem>
                                                                 <SelectItem value="6-months">
                                                                      Within 6
                                                                      months
                                                                 </SelectItem>
                                                                 <SelectItem value="flexible">
                                                                      Flexible
                                                                 </SelectItem>
                                                            </SelectContent>
                                                       </Select>
                                                  </div>
                                             </div>

                                             <div>
                                                  <Label htmlFor="subject">
                                                       Subject *
                                                  </Label>
                                                  <Input
                                                       id="subject"
                                                       value={
                                                            contactData.subject
                                                       }
                                                       onChange={(e) =>
                                                            handleInputChange(
                                                                 "subject",
                                                                 e.target.value
                                                            )
                                                       }
                                                       placeholder="Brief subject of your inquiry"
                                                       required
                                                  />
                                             </div>

                                             <div>
                                                  <Label htmlFor="preferredContact">
                                                       Preferred Contact Method
                                                  </Label>
                                                  <Select
                                                       value={
                                                            contactData.preferredContact
                                                       }
                                                       onValueChange={(value) =>
                                                            handleInputChange(
                                                                 "preferredContact",
                                                                 value
                                                            )
                                                       }
                                                  >
                                                       <SelectTrigger>
                                                            <SelectValue placeholder="How would you like us to contact you?" />
                                                       </SelectTrigger>
                                                       <SelectContent>
                                                            <SelectItem value="email">
                                                                 Email
                                                            </SelectItem>
                                                            <SelectItem value="phone">
                                                                 Phone Call
                                                            </SelectItem>
                                                            <SelectItem value="video">
                                                                 Video Call
                                                            </SelectItem>
                                                            <SelectItem value="any">
                                                                 Any Method
                                                            </SelectItem>
                                                       </SelectContent>
                                                  </Select>
                                             </div>

                                             <div>
                                                  <Label htmlFor="message">
                                                       Message *
                                                  </Label>
                                                  <Textarea
                                                       id="message"
                                                       value={
                                                            contactData.message
                                                       }
                                                       onChange={(e) =>
                                                            handleInputChange(
                                                                 "message",
                                                                 e.target.value
                                                            )
                                                       }
                                                       placeholder="Please provide details about your training needs, including specific skills you want to develop, current technology stack, and any other requirements..."
                                                       rows={6}
                                                       required
                                                  />
                                             </div>

                                             <Button
                                                  type="submit"
                                                  size="lg"
                                                  className="w-full bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 text-lg py-6"
                                             >
                                                  <Send className="w-5 h-5 mr-2" />
                                                  Send Inquiry
                                             </Button>
                                        </form>
                                   </CardContent>
                              </Card>
                         </div>

                         {/* Contact Information */}
                         <div className="space-y-8">
                              {/* Contact Details */}
                              <Card className="shadow-xl border-0">
                                   <CardHeader>
                                        <CardTitle className="text-2xl text-gray-900">
                                             Contact Information
                                        </CardTitle>
                                        <CardDescription>
                                             Multiple ways to reach us
                                        </CardDescription>
                                   </CardHeader>
                                   <CardContent className="space-y-6">
                                        <div className="flex items-start space-x-4">
                                             <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                                  <MapPin className="w-6 h-6 text-orange-600" />
                                             </div>
                                             <div>
                                                  <h3 className="font-semibold text-gray-900 mb-1">
                                                       Address
                                                  </h3>
                                                  <p className="text-gray-600">
                                                       123 Education Street
                                                       <br />
                                                       Tech City, TC 12345
                                                       <br />
                                                       United States
                                                  </p>
                                             </div>
                                        </div>

                                        <div className="flex items-start space-x-4">
                                             <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                                  <Phone className="w-6 h-6 text-orange-600" />
                                             </div>
                                             <div>
                                                  <h3 className="font-semibold text-gray-900 mb-1">
                                                       Phone
                                                  </h3>
                                                  <p className="text-gray-600">
                                                       Main: (555) 123-4567
                                                       <br />
                                                       WhatsApp: (555) 123-4568
                                                  </p>
                                             </div>
                                        </div>

                                        <div className="flex items-start space-x-4">
                                             <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                                  <Mail className="w-6 h-6 text-orange-600" />
                                             </div>
                                             <div>
                                                  <h3 className="font-semibold text-gray-900 mb-1">
                                                       Email
                                                  </h3>
                                                  <p className="text-gray-600">
                                                       General:
                                                       info@bingoacademy.com
                                                       <br />
                                                       Training:
                                                       training@bingoacademy.com
                                                  </p>
                                             </div>
                                        </div>

                                        <div className="flex items-start space-x-4">
                                             <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                                  <Clock className="w-6 h-6 text-orange-600" />
                                             </div>
                                             <div>
                                                  <h3 className="font-semibold text-gray-900 mb-1">
                                                       Office Hours
                                                  </h3>
                                                  <p className="text-gray-600">
                                                       Monday - Friday: 9:00 AM
                                                       - 6:00 PM
                                                       <br />
                                                       Saturday: 10:00 AM - 4:00
                                                       PM
                                                       <br />
                                                       Sunday: Closed
                                                  </p>
                                             </div>
                                        </div>
                                   </CardContent>
                              </Card>

                              {/* Quick Actions */}
                              <Card className="shadow-xl border-0">
                                   <CardHeader>
                                        <CardTitle className="text-2xl text-gray-900">
                                             Quick Actions
                                        </CardTitle>
                                        <CardDescription>
                                             Common requests and quick links
                                        </CardDescription>
                                   </CardHeader>
                                   <CardContent className="space-y-4">
                                        <Button
                                             className="w-full justify-start bg-transparent"
                                             variant="outline"
                                        >
                                             <Calendar className="w-5 h-5 mr-3" />
                                             Schedule Consultation Call
                                        </Button>
                                        <Button
                                             className="w-full justify-start bg-transparent"
                                             variant="outline"
                                        >
                                             <Users className="w-5 h-5 mr-3" />
                                             Request Training Demo
                                        </Button>
                                        <Button
                                             className="w-full justify-start bg-transparent"
                                             variant="outline"
                                        >
                                             <HelpCircle className="w-5 h-5 mr-3" />
                                             View Case Studies
                                        </Button>
                                        <Link href="/courses">
                                             <Button className="w-full justify-start bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600">
                                                  <Code className="w-5 h-5 mr-3" />
                                                  Browse Training Programs
                                             </Button>
                                        </Link>
                                   </CardContent>
                              </Card>

                              {/* Organization Types */}
                              <Card className="shadow-xl border-0">
                                   <CardHeader>
                                        <CardTitle className="text-2xl text-gray-900">
                                             We Serve
                                        </CardTitle>
                                        <CardDescription>
                                             Training solutions for all types of
                                             organizations
                                        </CardDescription>
                                   </CardHeader>
                                   <CardContent className="space-y-4">
                                        <div className="flex items-center space-x-3">
                                             <GraduationCap className="w-5 h-5 text-orange-600" />
                                             <span className="text-sm">
                                                  Universities & Colleges
                                             </span>
                                        </div>
                                        <div className="flex items-center space-x-3">
                                             <Building className="w-5 h-5 text-orange-600" />
                                             <span className="text-sm">
                                                  Schools & Academies
                                             </span>
                                        </div>
                                        <div className="flex items-center space-x-3">
                                             <Briefcase className="w-5 h-5 text-orange-600" />
                                             <span className="text-sm">
                                                  Corporations
                                             </span>
                                        </div>
                                        <div className="flex items-center space-x-3">
                                             <Globe className="w-5 h-5 text-orange-600" />
                                             <span className="text-sm">
                                                  Government Agencies
                                             </span>
                                        </div>
                                   </CardContent>
                              </Card>

                              {/* Location Map Placeholder */}
                              <Card className="shadow-xl border-0">
                                   <CardHeader>
                                        <CardTitle className="text-2xl text-gray-900">
                                             Find Us
                                        </CardTitle>
                                        <CardDescription>
                                             Located in the heart of Tech City
                                        </CardDescription>
                                   </CardHeader>
                                   <CardContent>
                                        <div className="relative">
                                             <iframe
                                                  src="https://www.google.com/maps?q=123+Education+Street,+Tech+City,+TC+12345&output=embed"
                                                  width="100%"
                                                  height="200"
                                                  style={{
                                                       border: 0,
                                                       borderRadius: "0.5rem",
                                                  }}
                                                  allowFullScreen={true}
                                                  loading="lazy"
                                                  referrerPolicy="no-referrer-when-downgrade"
                                                  title="Bingo Academy Location"
                                                  className="w-full h-48 rounded-lg"
                                             ></iframe>
                                        </div>
                                        <Button
                                             className="w-full mt-4 bg-transparent"
                                             variant="outline"
                                        >
                                             <MapPin className="w-4 h-4 mr-2" />
                                             Get Directions
                                        </Button>
                                   </CardContent>
                              </Card>
                         </div>
                    </div>
               </div>

               {/* FAQ Section */}
               <section className="py-16 bg-white">
                    <div className="container mx-auto px-4">
                         <div className="text-center mb-12">
                              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                                   Frequently Asked Questions
                              </h2>
                              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                                   Quick answers to common questions about our
                                   training programs and services.
                              </p>
                         </div>

                         <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                              {[
                                   {
                                        question:
                                             "What types of organizations do you work with?",
                                        answer: "We work with universities, colleges, schools, corporations, government agencies, and non-profit organizations. Our training programs are customized for each organization's specific needs.",
                                   },
                                   {
                                        question:
                                             "Do you offer customized training programs?",
                                        answer: "Yes! We specialize in creating customized training programs tailored to your organization's specific requirements, technology stack, and learning objectives.",
                                   },
                                   {
                                        question:
                                             "What is your typical class size?",
                                        answer: "We offer flexible class sizes ranging from 10-50 participants, depending on your organization's needs and the training program requirements.",
                                   },
                                   {
                                        question:
                                             "Do you offer online training options?",
                                        answer: "Yes! We offer in-person, online, and hybrid training options to accommodate your organization's schedule and preferences.",
                                   },
                                   {
                                        question:
                                             "What technologies and skills do you train in?",
                                        answer: "We offer training in web development, Python programming, data science, AI/ML, mobile development, cloud computing, cybersecurity, and more.",
                                   },
                                   {
                                        question:
                                             "Do you provide post-training support?",
                                        answer: "Yes, we provide comprehensive post-training support including follow-up sessions, resource materials, and ongoing consultation to ensure successful implementation.",
                                   },
                              ].map((faq, index) => (
                                   <Card
                                        key={index}
                                        className="border-0 shadow-lg"
                                   >
                                        <CardHeader>
                                             <CardTitle className="text-lg text-orange-600">
                                                  {faq.question}
                                             </CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                             <p className="text-gray-600">
                                                  {faq.answer}
                                             </p>
                                        </CardContent>
                                   </Card>
                              ))}
                         </div>
                    </div>
               </section>

               {/* CTA Section */}
               <section className="py-16 bg-gradient-to-r from-orange-600 to-orange-500 text-white">
                    <div className="container mx-auto px-4 text-center">
                         <h2 className="text-4xl font-bold mb-4">
                              Ready to Transform Your Organization?
                         </h2>
                         <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                              Don't wait! Partner with Bingo Academy and empower
                              your team with cutting-edge technology training
                              that drives real results.
                         </p>
                         <div className="flex flex-col sm:flex-row gap-4 justify-center">
                              <Button
                                   size="lg"
                                   className="bg-white text-orange-600 hover:bg-gray-100 text-lg px-8 py-6"
                              >
                                   <Calendar className="w-5 h-5 mr-2" />
                                   Schedule Consultation
                              </Button>
                              <Button
                                   size="lg"
                                   variant="outline"
                                   className="border-2 border-white text-white hover:bg-white hover:text-orange-600 text-lg px-8 py-6 bg-transparent"
                              >
                                   <Phone className="w-5 h-5 mr-2" />
                                   Call Us Now
                              </Button>
                         </div>
                    </div>
               </section>

               <Footer />
          </div>
     );
}

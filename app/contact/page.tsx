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
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function ContactPage() {
     const [contactData, setContactData] = useState({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
          inquiryType: "",
          preferredContact: "",
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
               "Thank you for your message! We will get back to you within 24 hours."
          );
          setContactData({
               name: "",
               email: "",
               phone: "",
               subject: "",
               message: "",
               inquiryType: "",
               preferredContact: "",
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
                              Have questions about our courses? Want to schedule
                              a visit? We're here to help! Reach out to us and
                              we'll get back to you as soon as possible.
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
                                   <div className="text-3xl font-bold">
                                        100%
                                   </div>
                                   <div className="opacity-90">
                                        Satisfaction
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
                                             Send us a Message
                                        </CardTitle>
                                        <CardDescription className="text-lg">
                                             Fill out the form below and we'll
                                             get back to you within 24 hours.
                                        </CardDescription>
                                   </CardHeader>
                                   <CardContent>
                                        <form
                                             onSubmit={handleSubmit}
                                             className="space-y-6"
                                        >
                                             <div className="grid md:grid-cols-2 gap-6">
                                                  <div>
                                                       <Label htmlFor="name">
                                                            Full Name *
                                                       </Label>
                                                       <Input
                                                            id="name"
                                                            value={
                                                                 contactData.name
                                                            }
                                                            onChange={(e) =>
                                                                 handleInputChange(
                                                                      "name",
                                                                      e.target
                                                                           .value
                                                                 )
                                                            }
                                                            placeholder="Your full name"
                                                            required
                                                       />
                                                  </div>
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
                                                            placeholder="your.email@example.com"
                                                            required
                                                       />
                                                  </div>
                                             </div>

                                             <div className="grid md:grid-cols-2 gap-6">
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
                                                                 <SelectItem value="course-info">
                                                                      Course
                                                                      Information
                                                                 </SelectItem>
                                                                 <SelectItem value="enrollment">
                                                                      Enrollment
                                                                 </SelectItem>
                                                                 <SelectItem value="pricing">
                                                                      Pricing &
                                                                      Payment
                                                                 </SelectItem>
                                                                 <SelectItem value="schedule">
                                                                      Schedule &
                                                                      Availability
                                                                 </SelectItem>
                                                                 <SelectItem value="technical">
                                                                      Technical
                                                                      Support
                                                                 </SelectItem>
                                                                 <SelectItem value="partnership">
                                                                      Partnership
                                                                 </SelectItem>
                                                                 <SelectItem value="other">
                                                                      Other
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
                                                            <SelectItem value="text">
                                                                 Text Message
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
                                                       placeholder="Please provide details about your inquiry, including your child's age, programming experience, and any specific questions you have..."
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
                                                  Send Message
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
                                                       Enrollment:
                                                       enroll@bingoacademy.com
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
                                             Schedule a Campus Visit
                                        </Button>
                                        <Button
                                             className="w-full justify-start bg-transparent"
                                             variant="outline"
                                        >
                                             <Users className="w-5 h-5 mr-3" />
                                             Book a Free Trial Class
                                        </Button>
                                        <Button
                                             className="w-full justify-start bg-transparent"
                                             variant="outline"
                                        >
                                             <HelpCircle className="w-5 h-5 mr-3" />
                                             View FAQ
                                        </Button>
                                        <Link href="/courses">
                                             <Button className="w-full justify-start bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600">
                                                  <Code className="w-5 h-5 mr-3" />
                                                  Browse Courses
                                             </Button>
                                        </Link>
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
                                   programs and enrollment process.
                              </p>
                         </div>

                         <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                              {[
                                   {
                                        question:
                                             "What age groups do you teach?",
                                        answer: "We offer courses for students aged 6-18, with age-appropriate curricula designed for different developmental stages.",
                                   },
                                   {
                                        question:
                                             "Do students need prior programming experience?",
                                        answer: "No prior experience is required! We have beginner-friendly courses that start from the very basics.",
                                   },
                                   {
                                        question: "What is your class size?",
                                        answer: "We maintain small class sizes with a maximum of 8 students per instructor to ensure personalized attention.",
                                   },
                                   {
                                        question:
                                             "Do you offer online classes?",
                                        answer: "Yes! We offer both in-person and online classes, as well as hybrid options to suit different preferences.",
                                   },
                                   {
                                        question:
                                             "What programming languages do you teach?",
                                        answer: "We teach Scratch, Python, JavaScript, HTML/CSS, and introduce concepts in AI/ML and robotics programming.",
                                   },
                                   {
                                        question:
                                             "Do you provide certificates?",
                                        answer: "Yes, students receive certificates upon successful completion of each course, which can be added to their portfolio.",
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
                              Ready to Get Started?
                         </h2>
                         <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                              Don't wait! Join thousands of students who are
                              already learning to code with Bingo Academy. Your
                              coding journey starts with a simple message.
                         </p>
                         <div className="flex flex-col sm:flex-row gap-4 justify-center">
                              <Button
                                   size="lg"
                                   className="bg-white text-orange-600 hover:bg-gray-100 text-lg px-8 py-6"
                              >
                                   <Calendar className="w-5 h-5 mr-2" />
                                   Schedule Free Trial
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

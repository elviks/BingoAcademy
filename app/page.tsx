"use client";

import type React from "react";

import { useState, useEffect } from "react";
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
import {
     Code,
     Users,
     Award,
     BookOpen,
     Star,
     ChevronLeft,
     ChevronRight,
     Play,
     Clock,
     Trophy,
     Zap,
     Target,
     Heart,
     ArrowRight,
     CheckCircle,
     Sparkles,
     Rocket,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Header from "@/components/header";
import Footer from "@/components/footer";

const courses = [
     {
          id: 1,
          title: "Scratch Programming for Kids",
          description:
               "Visual programming language perfect for beginners aged 8-12. Create games, animations, and interactive stories.",
          duration: "8 weeks",
          level: "Beginner",
          price: "$199",
          originalPrice: "$249",
          image: "https://plus.unsplash.com/premium_photo-1663100142323-01690ffa273b?auto=format&fit=crop&w=600&q=80",
          category: "Scratch",
          students: 150,
          rating: 4.9,
     },
     {
          id: 2,
          title: "Python Fundamentals",
          description:
               "Learn the basics of Python programming with hands-on projects. Build real applications and games.",
          duration: "12 weeks",
          level: "Beginner",
          price: "$299",
          originalPrice: "$399",
          image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80",
          category: "Python",
          students: 200,
          rating: 4.8,
     },
     {
          id: 3,
          title: "Web Development Bootcamp",
          description:
               "HTML, CSS, JavaScript, and React - build real websites and web applications from scratch.",
          duration: "16 weeks",
          level: "Intermediate",
          price: "$499",
          originalPrice: "$649",
          image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80",
          category: "Web Development",
          students: 180,
          rating: 4.7,
     },
     {
          id: 4,
          title: "Robotics & Arduino",
          description:
               "Build and program robots using Arduino microcontrollers. Learn electronics and automation.",
          duration: "10 weeks",
          level: "Intermediate",
          price: "$399",
          originalPrice: "$499",
          image: "https://images.unsplash.com/photo-1631378297854-185cff6b0986?auto=format&fit=crop&w=600&q=80",
          category: "Robotics",
          students: 90,
          rating: 4.8,
     },
];

const testimonials = [
     {
          name: "Sarah Johnson",
          role: "Parent of Emma, Age 12",
          content: "My daughter absolutely loves the Python course! The instructors are incredibly patient and make complex concepts easy to understand. Emma has built her first game and can't stop talking about coding!",
          rating: 5,
          image: "https://randomuser.me/api/portraits/women/44.jpg",
          course: "Python Fundamentals",
     },
     {
          name: "Mike Chen",
          role: "Student, Age 14",
          content: "The web development bootcamp changed my life! I went from knowing nothing about coding to building my own websites. The teachers are amazing and the projects are so cool. I'm already planning my next app!",
          rating: 5,
          image: "https://randomuser.me/api/portraits/men/32.jpg",
          course: "Web Development",
     },
     {
          name: "Lisa Rodriguez",
          role: "Parent of Alex, Age 10",
          content: "Bingo Academy has the perfect balance of fun and learning. Alex started with Scratch and now he's creating his own animated stories. The progress in just 2 months has been incredible!",
          rating: 5,
          image: "https://randomuser.me/api/portraits/women/65.jpg",
          course: "Scratch Programming",
     },
];

const stats = [
     {
          icon: Users,
          label: "Happy Students",
          value: "500+",
          color: "text-blue-600",
     },
     {
          icon: Award,
          label: "Certificates Issued",
          value: "300+",
          color: "text-green-600",
     },
     {
          icon: BookOpen,
          label: "Courses Available",
          value: "12+",
          color: "text-purple-600",
     },
     {
          icon: Trophy,
          label: "Success Rate",
          value: "95%",
          color: "text-orange-600",
     },
];

const features = [
     {
          icon: Target,
          title: "Expert Instructors",
          description:
               "Industry professionals with years of teaching experience",
          color: "bg-blue-100 text-blue-600",
     },
     {
          icon: Zap,
          title: "Hands-on Learning",
          description: "Project-based curriculum with real-world applications",
          color: "bg-green-100 text-green-600",
     },
     {
          icon: Heart,
          title: "Supportive Community",
          description: "Encouraging environment where every student thrives",
          color: "bg-pink-100 text-pink-600",
     },
     {
          icon: Award,
          title: "Certified Programs",
          description: "Industry-recognized certificates upon completion",
          color: "bg-orange-100 text-orange-600",
     },
];

export default function HomePage() {
     const router = useRouter();
     const [currentTestimonial, setCurrentTestimonial] = useState(0);
     const [email, setEmail] = useState("");
     const [isVisible, setIsVisible] = useState(false);

     useEffect(() => {
          setIsVisible(true);
          const timer = setInterval(() => {
               setCurrentTestimonial(
                    (prev) => (prev + 1) % testimonials.length
               );
          }, 5000);
          return () => clearInterval(timer);
     }, []);

     const nextTestimonial = () => {
          setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
     };

     const prevTestimonial = () => {
          setCurrentTestimonial(
               (prev) => (prev - 1 + testimonials.length) % testimonials.length
          );
     };

     const handleNewsletterSubmit = (e: React.FormEvent) => {
          e.preventDefault();
          console.log("Newsletter signup:", email);
          setEmail("");
          alert("Thank you for subscribing! 🎉");
     };

     return (
          <div className="min-h-screen bg-gradient-to-br from-orange-50/30 via-white to-orange-50/30">
               <Header />

               {/* Enhanced Hero Section */}
               <section className="relative py-20 lg:py-32 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-600/5 to-orange-500/5"></div>
                    <div className="absolute top-20 left-10 w-20 h-20 bg-orange-200/30 rounded-full animate-float"></div>
                    <div
                         className="absolute bottom-20 right-10 w-32 h-32 bg-orange-300/20 rounded-full animate-float"
                         style={{ animationDelay: "1s" }}
                    ></div>

                    <div className="container mx-auto px-4 sm:px-6 relative z-10">
                         <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                              <div
                                   className={`space-y-8 ${
                                        isVisible
                                             ? "animate-slide-in-left"
                                             : "opacity-0"
                                   }`}
                              >
                                   <div className="space-y-6">
                                        <Badge className="bg-gradient-to-r from-orange-100 to-orange-200 text-orange-800 hover:from-orange-200 hover:to-orange-300 transition-all duration-300 px-4 py-2 animate-pulse-glow">
                                             🎉 New AI & Machine Learning Course
                                             Available!
                                        </Badge>

                                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                                             Learn to Code,{" "}
                                             <span className="gradient-text animate-gradient">
                                                  Shape the Future
                                             </span>
                                        </h1>

                                        <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
                                             Join thousands of students learning
                                             programming, web development,
                                             robotics, and AI at Bingo Academy.
                                             From Scratch to Python, we make
                                             coding fun and accessible for all
                                             ages.
                                        </p>
                                   </div>

                                   <div className="flex flex-col sm:flex-row gap-4">
                                        <Link href="/trial">
                                             <Button
                                                  size="lg"
                                                  className="bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 text-lg px-8 py-6 shadow-lg hover:shadow-orange-200 transition-all duration-300 hover:scale-105 hover-glow focus-ring"
                                             >
                                                  <Play className="w-5 h-5 mr-2" />
                                                  Start Learning Today
                                             </Button>
                                        </Link>
                                        <Link href="/courses">
                                             <Button
                                                  size="lg"
                                                  variant="outline"
                                                  className="border-2 border-orange-600 text-orange-600 hover:bg-orange-50 text-lg px-8 py-6 bg-transparent transition-all duration-300 hover:scale-105 focus-ring"
                                             >
                                                  Explore Courses
                                                  <ArrowRight className="w-5 h-5 ml-2" />
                                             </Button>
                                        </Link>
                                   </div>

                                   <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-8">
                                        {stats.map((stat, index) => (
                                             <div
                                                  key={index}
                                                  className={`text-center group animate-slide-in-up animate-delay-${
                                                       (index + 1) * 100
                                                  }`}
                                             >
                                                  <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-r from-orange-100 to-orange-200 rounded-xl flex items-center justify-center group-hover:from-orange-200 group-hover:to-orange-300 transition-all duration-300 hover-lift">
                                                       <stat.icon
                                                            className={`w-6 h-6 ${stat.color}`}
                                                       />
                                                  </div>
                                                  <div className="text-2xl font-bold text-gray-900">
                                                       {stat.value}
                                                  </div>
                                                  <div className="text-sm text-gray-600">
                                                       {stat.label}
                                                  </div>
                                             </div>
                                        ))}
                                   </div>
                              </div>

                              <div
                                   className={`relative ${
                                        isVisible
                                             ? "animate-slide-in-right"
                                             : "opacity-0"
                                   }`}
                              >
                                   <div className="relative z-10">
                                        <Image
                                             src="https://plus.unsplash.com/premium_photo-1685086785636-2a1a0e5b591f?auto=format&fit=crop&w=600&q=80"
                                             alt="Students learning to code at Bingo Academy"
                                             width={600}
                                             height={500}
                                             className="rounded-3xl shadow-2xl hover-lift"
                                             priority
                                        />
                                   </div>
                                   <div className="absolute -top-6 -right-6 w-full h-full bg-gradient-to-r from-orange-200/50 to-orange-300/50 rounded-3xl -z-10 animate-pulse"></div>
                                   <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-gradient-to-r from-orange-400 to-orange-500 rounded-full opacity-20 animate-float"></div>
                              </div>
                         </div>
                    </div>
               </section>

               {/* Enhanced Featured Courses */}
               <section className="py-20 lg:py-24 bg-white">
                    <div className="container mx-auto px-4 sm:px-6">
                         <div className="text-center mb-16 animate-fade-in">
                              <Badge className="bg-gradient-to-r from-orange-100 to-orange-200 text-orange-800 hover:from-orange-200 hover:to-orange-300 mb-6 px-4 py-2">
                                   Popular Courses
                              </Badge>
                              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                                   Start Your Coding Journey
                              </h2>
                              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                                   Choose from our carefully designed courses
                                   that make learning programming fun, engaging,
                                   and effective for students of all ages.
                              </p>
                         </div>

                         <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                              {courses.map((course, index) => (
                                   <Card
                                        key={course.id}
                                        className={`group hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-0 shadow-lg bg-white hover-lift animate-scale-in animate-delay-${
                                             (index + 1) * 100
                                        }`}
                                   >
                                        <div className="relative overflow-hidden rounded-t-xl">
                                             <Image
                                                  src={
                                                       course.image ||
                                                       "/placeholder.svg"
                                                  }
                                                  alt={course.title}
                                                  width={300}
                                                  height={200}
                                                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                                             />
                                             <Badge className="absolute top-4 left-4 bg-white/90 text-gray-800 shadow-sm">
                                                  {course.category}
                                             </Badge>
                                             <div className="absolute top-4 right-4 bg-gradient-to-r from-orange-600 to-orange-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                                                  {course.students}+ students
                                             </div>
                                        </div>

                                        <CardHeader className="pb-4">
                                             <div className="flex justify-between items-start mb-3">
                                                  <Badge
                                                       variant="secondary"
                                                       className="text-xs bg-gray-100"
                                                  >
                                                       {course.level}
                                                  </Badge>
                                                  <div className="text-right">
                                                       <div className="text-2xl font-bold text-orange-600">
                                                            {course.price}
                                                       </div>
                                                       <div className="text-sm text-gray-500 line-through">
                                                            {
                                                                 course.originalPrice
                                                            }
                                                       </div>
                                                  </div>
                                             </div>
                                             <CardTitle className="text-xl group-hover:text-orange-600 transition-colors duration-300 leading-tight">
                                                  {course.title}
                                             </CardTitle>
                                             <CardDescription className="text-gray-600 leading-relaxed">
                                                  {course.description}
                                             </CardDescription>
                                        </CardHeader>

                                        <CardContent>
                                             <div className="flex items-center justify-between mb-4">
                                                  <div className="flex items-center text-sm text-gray-500">
                                                       <Clock className="w-4 h-4 mr-2" />
                                                       {course.duration}
                                                  </div>
                                                  <div className="flex items-center">
                                                       <div className="flex items-center mr-2">
                                                            {[...Array(5)].map(
                                                                 (_, i) => (
                                                                      <Star
                                                                           key={
                                                                                i
                                                                           }
                                                                           className={`w-3 h-3 ${
                                                                                i <
                                                                                Math.floor(
                                                                                     course.rating
                                                                                )
                                                                                     ? "text-yellow-400 fill-current"
                                                                                     : "text-gray-300"
                                                                           }`}
                                                                      />
                                                                 )
                                                            )}
                                                       </div>
                                                       <span className="text-sm text-gray-600">
                                                            ({course.rating})
                                                       </span>
                                                  </div>
                                             </div>

                                             <Link
                                                  href={`/courses/${course.id}`}
                                             >
                                                  <Button className="w-full bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 transition-all duration-300 hover:scale-105 shadow-md focus-ring">
                                                       Learn More
                                                       <ArrowRight className="w-4 h-4 ml-2" />
                                                  </Button>
                                             </Link>
                                        </CardContent>
                                   </Card>
                              ))}
                         </div>

                         <div className="text-center mt-16">
                              <Link href="/courses">
                                   <Button
                                        size="lg"
                                        variant="outline"
                                        className="border-2 border-orange-600 text-orange-600 hover:bg-orange-50 bg-transparent px-8 py-6 transition-all duration-300 hover:scale-105 focus-ring"
                                   >
                                        View All Courses
                                        <ArrowRight className="w-5 h-5 ml-2" />
                                   </Button>
                              </Link>
                         </div>
                    </div>
               </section>

               {/* Enhanced About Section */}
               <section className="py-20 lg:py-24 bg-gradient-to-r from-orange-50/50 to-orange-100/30">
                    <div className="container mx-auto px-4 sm:px-6">
                         <div className="grid lg:grid-cols-2 gap-16 items-center">
                              <div className="animate-slide-in-left">
                                   <div className="relative">
                                        <Image
                                             src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600&q=80"
                                             alt="About Bingo Academy"
                                             width={600}
                                             height={500}
                                             className="rounded-3xl shadow-2xl hover-lift"
                                        />
                                        <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-orange-600 to-orange-500 rounded-2xl p-6 text-white shadow-xl">
                                             <div className="text-3xl font-bold">
                                                  95%
                                             </div>
                                             <div className="text-sm opacity-90">
                                                  Success Rate
                                             </div>
                                        </div>
                                   </div>
                              </div>

                              <div className="space-y-8 animate-slide-in-right">
                                   <Badge className="bg-gradient-to-r from-orange-100 to-orange-200 text-orange-800 px-4 py-2">
                                        About Bingo Academy
                                   </Badge>
                                   <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                                        Empowering the Next Generation of{" "}
                                        <span className="gradient-text">
                                             Innovators
                                        </span>
                                   </h2>
                                   <p className="text-lg text-gray-600 leading-relaxed">
                                        At Bingo Academy, we believe every child
                                        has the potential to become a creator,
                                        not just a consumer of technology. Our
                                        mission is to make coding education
                                        accessible, engaging, and fun for
                                        students of all ages and skill levels.
                                   </p>

                                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        {features.map((feature, index) => (
                                             <div
                                                  key={index}
                                                  className={`flex items-start space-x-4 group animate-slide-in-up animate-delay-${
                                                       (index + 1) * 100
                                                  }`}
                                             >
                                                  <div
                                                       className={`w-12 h-12 ${feature.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 flex-shrink-0`}
                                                  >
                                                       <feature.icon className="w-6 h-6" />
                                                  </div>
                                                  <div>
                                                       <h3 className="font-semibold text-gray-900 mb-2">
                                                            {feature.title}
                                                       </h3>
                                                       <p className="text-gray-600 text-sm leading-relaxed">
                                                            {
                                                                 feature.description
                                                            }
                                                       </p>
                                                  </div>
                                             </div>
                                        ))}
                                   </div>

                                   <Link href="/about">
                                        <Button
                                             size="lg"
                                             className="bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 px-8 py-6 transition-all duration-300 hover:scale-105 shadow-lg focus-ring"
                                        >
                                             Learn More About Us
                                             <ArrowRight className="w-5 h-5 ml-2" />
                                        </Button>
                                   </Link>
                              </div>
                         </div>
                    </div>
               </section>

               {/* Enhanced Testimonials */}
               <section className="py-20 lg:py-32 bg-white">
                    <div className="container mx-auto px-4 sm:px-6">
                         <div className="text-center mb-16 animate-fade-in">
                              <Badge className="bg-gradient-to-r from-yellow-100 to-yellow-200 text-yellow-800 hover:from-yellow-200 hover:to-yellow-300 mb-6 px-4 py-2">
                                   Student Success Stories
                              </Badge>
                              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                                   What Our Students Say
                              </h2>
                              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                                   Don't just take our word for it. Hear from
                                   our students and parents about their learning
                                   experience at Bingo Academy.
                              </p>
                         </div>

                         <div className="relative max-w-5xl mx-auto">
                              <Card className="p-8 lg:p-12 shadow-2xl border-0 bg-gradient-to-r from-white to-orange-50/30">
                                   <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
                                        <div className="flex-shrink-0">
                                             <div className="relative">
                                                  <Image
                                                       src={
                                                            testimonials[
                                                                 currentTestimonial
                                                            ].image ||
                                                            "/placeholder.svg"
                                                       }
                                                       alt={
                                                            testimonials[
                                                                 currentTestimonial
                                                            ].name
                                                       }
                                                       width={120}
                                                       height={120}
                                                       className="rounded-full shadow-lg"
                                                  />
                                                  <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-orange-600 to-orange-500 rounded-full p-2">
                                                       <CheckCircle className="w-4 h-4 text-white" />
                                                  </div>
                                             </div>
                                        </div>

                                        <div className="flex-1 text-center lg:text-left">
                                             <div className="flex justify-center lg:justify-start mb-4">
                                                  {[
                                                       ...Array(
                                                            testimonials[
                                                                 currentTestimonial
                                                            ].rating
                                                       ),
                                                  ].map((_, i) => (
                                                       <Star
                                                            key={i}
                                                            className="w-6 h-6 text-yellow-400 fill-current"
                                                       />
                                                  ))}
                                             </div>

                                             <blockquote className="text-xl lg:text-2xl text-gray-700 mb-6 italic leading-relaxed">
                                                  "
                                                  {
                                                       testimonials[
                                                            currentTestimonial
                                                       ].content
                                                  }
                                                  "
                                             </blockquote>

                                             <div>
                                                  <div className="font-semibold text-gray-900 text-lg">
                                                       {
                                                            testimonials[
                                                                 currentTestimonial
                                                            ].name
                                                       }
                                                  </div>
                                                  <div className="text-gray-600">
                                                       {
                                                            testimonials[
                                                                 currentTestimonial
                                                            ].role
                                                       }
                                                  </div>
                                                  <Badge className="mt-2 bg-orange-100 text-orange-800 text-xs">
                                                       {
                                                            testimonials[
                                                                 currentTestimonial
                                                            ].course
                                                       }
                                                  </Badge>
                                             </div>
                                        </div>
                                   </div>
                              </Card>

                              <Button
                                   variant="outline"
                                   size="icon"
                                   className="absolute left-4 top-1/2 transform -translate-y-1/2 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 focus-ring"
                                   onClick={prevTestimonial}
                              >
                                   <ChevronLeft className="w-5 h-5" />
                              </Button>
                              <Button
                                   variant="outline"
                                   size="icon"
                                   className="absolute right-4 top-1/2 transform -translate-y-1/2 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 focus-ring"
                                   onClick={nextTestimonial}
                              >
                                   <ChevronRight className="w-5 h-5" />
                              </Button>

                              <div className="flex justify-center mt-8 space-x-3">
                                   {testimonials.map((_, index) => (
                                        <button
                                             key={index}
                                             className={`w-3 h-3 rounded-full transition-all duration-300 focus-ring ${
                                                  index === currentTestimonial
                                                       ? "bg-gradient-to-r from-orange-600 to-orange-500 scale-125"
                                                       : "bg-gray-300 hover:bg-gray-400"
                                             }`}
                                             onClick={() =>
                                                  setCurrentTestimonial(index)
                                             }
                                        />
                                   ))}
                              </div>
                         </div>
                    </div>
               </section>

               {/* Enhanced Newsletter */}
               <section className="py-20 lg:py-32 bg-gradient-to-r from-orange-600 to-orange-500 relative overflow-hidden">
                    <div className="absolute inset-0 bg-black/5"></div>
                    <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full animate-float"></div>
                    <div
                         className="absolute bottom-10 right-10 w-24 h-24 bg-white/10 rounded-full animate-float"
                         style={{ animationDelay: "2s" }}
                    ></div>

                    <div className="container mx-auto px-4 sm:px-6 relative z-10">
                         <div className="max-w-4xl mx-auto text-center text-white">
                              <Rocket className="w-16 h-16 mx-auto mb-6 animate-float" />
                              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                                   Stay Updated with Bingo Academy
                              </h2>
                              <p className="text-xl mb-12 opacity-90 leading-relaxed">
                                   Get the latest updates on new courses, coding
                                   tips, and special offers delivered straight
                                   to your inbox.
                              </p>

                              <form
                                   onSubmit={handleNewsletterSubmit}
                                   className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto"
                              >
                                   <Input
                                        type="email"
                                        placeholder="Enter your email"
                                        value={email}
                                        onChange={(e) =>
                                             setEmail(e.target.value)
                                        }
                                        required
                                        className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-white/70 backdrop-blur-sm py-6 px-6 text-lg focus:bg-white/20 transition-all duration-300 focus-ring"
                                   />
                                   <Button
                                        type="submit"
                                        className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-6 text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg focus-ring"
                                   >
                                        Subscribe
                                        <ArrowRight className="w-4 h-4 ml-2" />
                                   </Button>
                              </form>
                         </div>
                    </div>
               </section>
               <Footer />
          </div>
     );
}

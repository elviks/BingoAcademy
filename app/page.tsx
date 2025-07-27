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
     Building,
     GraduationCap,
     Briefcase,
     Globe,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { getFeaturedTrainingPrograms } from "@/lib/training-programs-data";

const trainingPrograms = getFeaturedTrainingPrograms();

const testimonials = [
     {
          name: "Dr. Sarah Johnson",
          role: "Dean of Computer Science, Tech University",
          content: "Bingo Academy's training program transformed our curriculum. Our students are now industry-ready with practical skills that employers value. The instructors are exceptional and the program is perfectly tailored for academic institutions.",
          rating: 5,
          image: "https://randomuser.me/api/portraits/women/44.jpg",
          organization: "Tech University",
     },
     {
          name: "Michael Chen",
          role: "CTO, InnovateCorp",
          content: "We partnered with Bingo Academy to upskill our development team. The results exceeded our expectations. Our team's productivity increased by 40% and we're now implementing modern development practices across all projects.",
          rating: 5,
          image: "https://randomuser.me/api/portraits/men/32.jpg",
          organization: "InnovateCorp",
     },
     {
          name: "Lisa Rodriguez",
          role: "Principal, Future High School",
          content: "Bingo Academy's bootcamp program has been a game-changer for our students. The hands-on approach and industry-relevant curriculum have prepared our graduates for successful careers in technology.",
          rating: 5,
          image: "https://randomuser.me/api/portraits/women/65.jpg",
          organization: "Future High School",
     },
];

const stats = [
     {
          icon: Building,
          label: "Organizations Served",
          value: "200+",
          color: "text-blue-600",
     },
     {
          icon: Users,
          label: "Professionals Trained",
          value: "5,000+",
          color: "text-green-600",
     },
     {
          icon: Award,
          label: "Training Programs",
          value: "15+",
          color: "text-purple-600",
     },
     {
          icon: Trophy,
          label: "Success Rate",
          value: "98%",
          color: "text-orange-600",
     },
];

const features = [
     {
          icon: Target,
          title: "Customized Curriculum",
          description:
               "Tailored training programs designed specifically for your organization's needs and goals",
          color: "bg-blue-100 text-blue-600",
     },
     {
          icon: Zap,
          title: "Industry Experts",
          description:
               "Experienced professionals with real-world expertise in their fields",
          color: "bg-green-100 text-green-600",
     },
     {
          icon: Heart,
          title: "Flexible Delivery",
          description:
               "In-person, online, or hybrid training options to suit your schedule",
          color: "bg-pink-100 text-pink-600",
     },
     {
          icon: Award,
          title: "Certification Programs",
          description:
               "Industry-recognized certificates and continuing education credits",
          color: "bg-orange-100 text-orange-600",
     },
];

const organizationTypes = [
     {
          icon: GraduationCap,
          title: "Universities & Colleges",
          description:
               "Enhance your computer science curriculum with industry-relevant training programs",
     },
     {
          icon: Building,
          title: "Schools & Academies",
          description:
               "Prepare students for future careers with modern technology education",
     },
     {
          icon: Briefcase,
          title: "Corporations",
          description:
               "Upskill your workforce with cutting-edge technology training",
     },
     {
          icon: Globe,
          title: "Government Agencies",
          description:
               "Modernize your teams with specialized technology training programs",
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
          alert(
               "Thank you for subscribing! We'll keep you updated on our latest training programs. 🎉"
          );
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
                                             🚀 New AI & Machine Learning
                                             Training Program Available!
                                        </Badge>

                                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                                             Transform Your Organization with{" "}
                                             <span className="gradient-text animate-gradient">
                                                  Expert Training
                                             </span>
                                        </h1>

                                        <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
                                             Bingo Academy provides
                                             comprehensive training programs and
                                             bootcamps for schools, colleges,
                                             universities, and corporations.
                                             Empower your team with cutting-edge
                                             technology skills.
                                        </p>
                                   </div>

                                   <div className="flex flex-col sm:flex-row gap-4">
                                        <Link href="/contact">
                                             <Button
                                                  size="lg"
                                                  className="bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 text-lg px-8 py-6 shadow-lg hover:shadow-orange-200 transition-all duration-300 hover:scale-105 hover-glow focus-ring"
                                             >
                                                  <Play className="w-5 h-5 mr-2" />
                                                  Request Custom Quote
                                             </Button>
                                        </Link>
                                        <Link href="/courses">
                                             <Button
                                                  size="lg"
                                                  variant="outline"
                                                  className="border-2 border-orange-600 text-orange-600 hover:bg-orange-50 text-lg px-8 py-6 bg-transparent transition-all duration-300 hover:scale-105 focus-ring"
                                             >
                                                  View Training Programs
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
                                             src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=600&q=80"
                                             alt="Professional training session at Bingo Academy"
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

               {/* Organization Types Section */}
               <section className="py-20 lg:py-24 bg-white">
                    <div className="container mx-auto px-4 sm:px-6">
                         <div className="text-center mb-16 animate-fade-in">
                              <Badge className="bg-gradient-to-r from-orange-100 to-orange-200 text-orange-800 hover:from-orange-200 hover:to-orange-300 mb-6 px-4 py-2">
                                   Who We Serve
                              </Badge>
                              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                                   Training Solutions for Every Organization
                              </h2>
                              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                                   We provide customized training programs
                                   designed specifically for different types of
                                   organizations and their unique needs.
                              </p>
                         </div>

                         <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                              {organizationTypes.map((org, index) => (
                                   <Card
                                        key={index}
                                        className={`group hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-0 shadow-lg bg-white hover-lift animate-scale-in animate-delay-${
                                             (index + 1) * 100
                                        }`}
                                   >
                                        <CardHeader className="text-center pb-4">
                                             <div className="w-16 h-16 bg-gradient-to-r from-orange-600 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                                                  <org.icon className="w-8 h-8 text-white" />
                                             </div>
                                             <CardTitle className="text-xl group-hover:text-orange-600 transition-colors duration-300">
                                                  {org.title}
                                             </CardTitle>
                                        </CardHeader>
                                        <CardContent className="text-center">
                                             <CardDescription className="text-gray-600 leading-relaxed">
                                                  {org.description}
                                             </CardDescription>
                                        </CardContent>
                                   </Card>
                              ))}
                         </div>
                    </div>
               </section>

               {/* Enhanced Featured Training Programs */}
               <section className="py-20 lg:py-24 bg-gradient-to-r from-orange-50/50 to-orange-100/30">
                    <div className="container mx-auto px-4 sm:px-6">
                         <div className="text-center mb-16 animate-fade-in">
                              <Badge className="bg-gradient-to-r from-orange-100 to-orange-200 text-orange-800 hover:from-orange-200 hover:to-orange-300 mb-6 px-4 py-2">
                                   Popular Training Programs
                              </Badge>
                              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                                   Comprehensive Training Solutions
                              </h2>
                              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                                   Choose from our proven training programs or
                                   request a customized solution tailored to
                                   your organization's specific needs.
                              </p>
                         </div>

                         <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                              {trainingPrograms.map((program, index) => (
                                   <Card
                                        key={program.id}
                                        className={`group hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-0 shadow-lg bg-white hover-lift animate-scale-in animate-delay-${
                                             (index + 1) * 100
                                        }`}
                                   >
                                        <div className="relative overflow-hidden rounded-t-xl">
                                             <Image
                                                  src={
                                                       program.image ||
                                                       "/placeholder.svg"
                                                  }
                                                  alt={program.title}
                                                  width={300}
                                                  height={200}
                                                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                                             />
                                             <Badge className="absolute top-4 left-4 bg-white/90 text-gray-800 shadow-sm">
                                                  {program.category}
                                             </Badge>
                                        </div>

                                        <CardHeader className="pb-4">
                                             <div className="flex justify-between items-start mb-3">
                                                  <Badge
                                                       variant="secondary"
                                                       className="text-xs bg-gray-100"
                                                  >
                                                       {program.level}
                                                  </Badge>
                                                  <div className="text-right">
                                                       <div className="text-lg font-bold text-orange-600">
                                                            {program.price}
                                                       </div>
                                                       <div className="text-sm text-gray-500">
                                                            {program.format}
                                                       </div>
                                                  </div>
                                             </div>
                                             <CardTitle className="text-xl group-hover:text-orange-600 transition-colors duration-300 leading-tight">
                                                  {program.title}
                                             </CardTitle>
                                             <CardDescription className="text-gray-600 leading-relaxed">
                                                  {program.description}
                                             </CardDescription>
                                        </CardHeader>

                                        <CardContent>
                                             <div className="flex items-center justify-between mb-4">
                                                  <div className="flex items-center text-sm text-gray-500">
                                                       <Clock className="w-4 h-4 mr-2" />
                                                       {program.duration}
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
                                                                                4
                                                                                     ? "text-yellow-400 fill-current"
                                                                                     : "text-gray-300"
                                                                           }`}
                                                                      />
                                                                 )
                                                            )}
                                                       </div>
                                                       <span className="text-sm text-gray-600">
                                                            (4.9)
                                                       </span>
                                                  </div>
                                             </div>

                                             <div className="mb-4">
                                                  <div className="flex flex-wrap gap-2">
                                                       {program.features.map(
                                                            (
                                                                 feature,
                                                                 index
                                                            ) => (
                                                                 <Badge
                                                                      key={
                                                                           index
                                                                      }
                                                                      variant="outline"
                                                                      className="text-xs border-orange-200 text-orange-700"
                                                                 >
                                                                      {feature}
                                                                 </Badge>
                                                            )
                                                       )}
                                                  </div>
                                             </div>

                                             <Link href={`/courses`}>
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
                                        View All Programs
                                        <ArrowRight className="w-5 h-5 ml-2" />
                                   </Button>
                              </Link>
                         </div>
                    </div>
               </section>

               {/* Enhanced About Section */}
               <section className="py-20 lg:py-24 bg-white">
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
                                                  98%
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
                                        Empowering Organizations Through{" "}
                                        <span className="gradient-text">
                                             Expert Training
                                        </span>
                                   </h2>
                                   <p className="text-lg text-gray-600 leading-relaxed">
                                        At Bingo Academy, we specialize in
                                        providing comprehensive training
                                        solutions for organizations. Our
                                        industry experts deliver cutting-edge
                                        technology education that drives real
                                        results and empowers teams to succeed in
                                        the digital age.
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
               <section className="py-20 lg:py-32 bg-gradient-to-r from-orange-50/50 to-orange-100/30">
                    <div className="container mx-auto px-4 sm:px-6">
                         <div className="text-center mb-16 animate-fade-in">
                              <Badge className="bg-gradient-to-r from-yellow-100 to-yellow-200 text-yellow-800 hover:from-yellow-200 hover:to-yellow-300 mb-6 px-4 py-2">
                                   Client Success Stories
                              </Badge>
                              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                                   What Our Clients Say
                              </h2>
                              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                                   Don't just take our word for it. Hear from
                                   organizations that have transformed their
                                   teams with our training programs.
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
                                                            ].organization
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
                                   Get the latest updates on new training
                                   programs, industry insights, and special
                                   offers for organizations.
                              </p>

                              <form
                                   onSubmit={handleNewsletterSubmit}
                                   className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto"
                              >
                                   <Input
                                        type="email"
                                        placeholder="Enter your organization email"
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

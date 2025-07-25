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
     Users,
     Award,
     BookOpen,
     Target,
     Heart,
     Trophy,
     Star,
     CheckCircle,
     Lightbulb,
     Globe,
     Shield,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/header";
import Footer from "@/components/footer";

const teamMembers = [
     {
          name: "Roshan KC",
          role: "Founder & Lead Instructor",
          bio: "Software Engineer with 6+ years of experience in web, cloud and mobile app development.",
          image: "/images/roshan.jpeg",
          specialties: ["AWS", "AI/ML", "Web", "Mobile"],
     },
     {
          name: "Vaskar Parajuli",
          role: "Senior Instructor",
          bio: "Full-stack developer with 4+ years of experience in web development and mobile app development.",
          image: "/images/vashkar.jpeg",
          specialties: ["React", "Next.js", "Node.js", "React Native"],
     },
     {
          name: "Elvik Sharma",
          role: "Senior Instructor",
          bio: "Software Developer with 3+ years of experience in web development and mobile app development.",
          image: "/images/elvik.png",
          specialties: ["Next.js", "Express.js", "React Native"],
     },
];

const values = [
     {
          icon: Heart,
          title: "Passion for Learning",
          description:
               "We believe learning should be fun, engaging, and inspiring. Every student deserves to feel excited about their educational journey.",
     },
     {
          icon: Users,
          title: "Inclusive Community",
          description:
               "We welcome students of all backgrounds, abilities, and experience levels. Diversity makes us stronger and more creative.",
     },
     {
          icon: Target,
          title: "Excellence in Education",
          description:
               "We maintain the highest standards in our curriculum, instruction, and student support to ensure the best learning outcomes.",
     },
     {
          icon: Lightbulb,
          title: "Innovation & Creativity",
          description:
               "We encourage creative thinking, problem-solving, and innovation in everything we do, preparing students for the future.",
     },
     {
          icon: Shield,
          title: "Safe Learning Environment",
          description:
               "We provide a supportive, safe, and nurturing environment where students can take risks and learn from mistakes.",
     },
     {
          icon: Globe,
          title: "Global Perspective",
          description:
               "We prepare students to be global citizens and leaders in technology, understanding the worldwide impact of their work.",
     },
];

const achievements = [
     {
          icon: Users,
          number: "500+",
          label: "Students Taught",
          description: "Happy learners from ages 6 to 18",
     },
     {
          icon: Award,
          number: "300+",
          label: "Certificates Issued",
          description: "Recognized achievements in programming",
     },
     {
          icon: Trophy,
          number: "50+",
          label: "Competition Winners",
          description: "Students who won coding competitions",
     },
     {
          icon: Star,
          number: "4.9/5",
          label: "Average Rating",
          description: "From student and parent reviews",
     },
];

export default function AboutPage() {
     return (
          <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
               <Header />

               {/* Hero Section */}
               <section className="py-20 bg-gradient-to-r from-orange-600 to-orange-500 text-white">
                    <div className="container mx-auto px-4">
                         <div className="grid lg:grid-cols-2 gap-12 items-center">
                              <div>
                                   <Badge className="bg-white/20 text-white hover:bg-white/30 mb-4">
                                        About Bingo Academy
                                   </Badge>
                                   <h1 className="text-5xl font-bold mb-6">
                                        Empowering the Next Generation of{" "}
                                        <span className="text-yellow-300">
                                             Innovators
                                        </span>
                                   </h1>
                                   <p className="text-xl leading-relaxed mb-8 opacity-90">
                                        Founded in 2020, Bingo Academy has been
                                        at the forefront of coding education for
                                        young minds. We believe that every child
                                        has the potential to become a creator,
                                        innovator, and problem-solver through
                                        the power of programming.
                                   </p>
                                   <div className="flex flex-col sm:flex-row gap-4">
                                        <Button
                                             size="lg"
                                             className="bg-white text-orange-600 hover:bg-gray-100 text-lg px-8 py-6"
                                        >
                                             <BookOpen className="w-5 h-5 mr-2" />
                                             Our Story
                                        </Button>
                                        <Button
                                             size="lg"
                                             variant="outline"
                                             className="border-2 border-white text-white hover:bg-white hover:text-orange-600 text-lg px-8 py-6 bg-transparent"
                                        >
                                             Meet Our Team
                                        </Button>
                                   </div>
                              </div>

                              <div className="relative">
                                   <Image
                                        src="https://plus.unsplash.com/premium_photo-1661769644647-f645cc26910d?auto=format&fit=crop&w=600&q=80"
                                        alt="Students learning at Bingo Academy"
                                        width={600}
                                        height={500}
                                        className="rounded-2xl shadow-2xl"
                                   />
                                   <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-xl">
                                        <div className="text-3xl font-bold text-orange-600">
                                             500+
                                        </div>
                                        <div className="text-gray-600">
                                             Happy Students
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
               </section>

               {/* Mission & Vision */}
               <section className="py-20 bg-white">
                    <div className="container mx-auto px-4">
                         <div className="text-center mb-16">
                              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                                   Our Mission & Vision
                              </h2>
                              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                   We're driven by a clear purpose and guided by
                                   an ambitious vision for the future of
                                   education.
                              </p>
                         </div>

                         <div className="grid lg:grid-cols-2 gap-12">
                              <Card className="border-0 shadow-xl bg-gradient-to-br from-blue-50 to-blue-100">
                                   <CardHeader className="text-center pb-8">
                                        <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                             <Target className="w-8 h-8 text-white" />
                                        </div>
                                        <CardTitle className="text-3xl text-blue-900">
                                             Our Mission
                                        </CardTitle>
                                   </CardHeader>
                                   <CardContent className="text-center">
                                        <p className="text-lg text-blue-800 leading-relaxed">
                                             To make coding education
                                             accessible, engaging, and effective
                                             for students of all ages and
                                             backgrounds. We strive to nurture
                                             computational thinking, creativity,
                                             and problem-solving skills that
                                             will serve our students throughout
                                             their lives.
                                        </p>
                                   </CardContent>
                              </Card>

                              <Card className="border-0 shadow-xl bg-gradient-to-br from-green-50 to-green-100">
                                   <CardHeader className="text-center pb-8">
                                        <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                             <Lightbulb className="w-8 h-8 text-white" />
                                        </div>
                                        <CardTitle className="text-3xl text-green-900">
                                             Our Vision
                                        </CardTitle>
                                   </CardHeader>
                                   <CardContent className="text-center">
                                        <p className="text-lg text-green-800 leading-relaxed">
                                             To be the leading platform for
                                             youth coding education globally,
                                             creating a generation of confident,
                                             creative, and capable young
                                             programmers who will shape the
                                             future of technology and solve the
                                             world's most pressing challenges.
                                        </p>
                                   </CardContent>
                              </Card>
                         </div>
                    </div>
               </section>

               {/* Our Values */}
               <section className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
                    <div className="container mx-auto px-4">
                         <div className="text-center mb-16">
                              <Badge className="bg-orange-100 text-orange-800 hover:bg-orange-50 mb-4">
                                   Our Core Values
                              </Badge>
                              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                                   What Drives Us Every Day
                              </h2>
                              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                                   Our values guide everything we do, from
                                   curriculum design to student interaction.
                              </p>
                         </div>

                         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                              {values.map((value, index) => (
                                   <Card
                                        key={index}
                                        className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg"
                                   >
                                        <CardHeader className="text-center">
                                             <div className="w-16 h-16 bg-gradient-to-r from-orange-600 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                                                  <value.icon className="w-8 h-8 text-white" />
                                             </div>
                                             <CardTitle className="text-xl group-hover:text-orange-600 transition-colors">
                                                  {value.title}
                                             </CardTitle>
                                        </CardHeader>
                                        <CardContent className="text-center">
                                             <p className="text-gray-600 leading-relaxed">
                                                  {value.description}
                                             </p>
                                        </CardContent>
                                   </Card>
                              ))}
                         </div>
                    </div>
               </section>

               {/* Achievements */}
               <section className="py-20 bg-white">
                    <div className="container mx-auto px-4">
                         <div className="text-center mb-16">
                              <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-200 mb-4">
                                   Our Achievements
                              </Badge>
                              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                                   Proud of Our Impact
                              </h2>
                              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                                   Numbers that reflect our commitment to
                                   excellence and student success.
                              </p>
                         </div>

                         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                              {achievements.map((achievement, index) => (
                                   <Card
                                        key={index}
                                        className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow duration-300"
                                   >
                                        <CardContent className="p-8">
                                             <div className="w-16 h-16 bg-gradient-to-r from-orange-600 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                                  <achievement.icon className="w-8 h-8 text-white" />
                                             </div>
                                             <div className="text-4xl font-bold text-gray-900 mb-2">
                                                  {achievement.number}
                                             </div>
                                             <div className="text-xl font-semibold text-gray-700 mb-2">
                                                  {achievement.label}
                                             </div>
                                             <p className="text-gray-600">
                                                  {achievement.description}
                                             </p>
                                        </CardContent>
                                   </Card>
                              ))}
                         </div>
                    </div>
               </section>

               {/* Meet Our Team */}
               <section className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
                    <div className="container mx-auto px-4">
                         <div className="text-center mb-16">
                              <Badge className="bg-orange-100 text-orange-800 hover:bg-orange-50 mb-4">
                                   Our Expert Team
                              </Badge>
                              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                                   Meet the Educators Behind Bingo Academy
                              </h2>
                              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                                   Our passionate team of educators and industry
                                   experts are dedicated to providing the best
                                   learning experience for every student.
                              </p>
                         </div>

                         <div className="flex flex-wrap justify-center gap-8">
                              {teamMembers.map((member, index) => (
                                   <Card
                                        key={index}
                                        className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg flex flex-col items-center"
                                        style={{ maxWidth: 320 }}
                                   >
                                        <div className="relative overflow-hidden rounded-t-lg w-full flex justify-center">
                                             <Image
                                                  src={
                                                       member.image ||
                                                       "/placeholder.svg"
                                                  }
                                                  alt={member.name}
                                                  width={200}
                                                  height={200}
                                                  className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-300"
                                             />
                                        </div>

                                        <CardHeader className="text-center w-full">
                                             <CardTitle className="text-xl group-hover:text-orange-600 transition-colors">
                                                  {member.name}
                                             </CardTitle>
                                             <CardDescription className="text-orange-600 font-semibold">
                                                  {member.role}
                                             </CardDescription>
                                        </CardHeader>

                                        <CardContent className="w-full flex flex-col items-center">
                                             <p className="text-gray-600 text-sm leading-relaxed mb-4 text-center">
                                                  {member.bio}
                                             </p>

                                             <div className="space-y-2 w-full">
                                                  <div className="text-sm font-semibold text-gray-700 text-center">
                                                       Specialties:
                                                  </div>
                                                  <div className="flex flex-wrap gap-1 justify-center">
                                                       {member.specialties.map(
                                                            (
                                                                 specialty,
                                                                 specIndex
                                                            ) => (
                                                                 <Badge
                                                                      key={
                                                                           specIndex
                                                                      }
                                                                      variant="outline"
                                                                      className="text-xs"
                                                                 >
                                                                      {
                                                                           specialty
                                                                      }
                                                                 </Badge>
                                                            )
                                                       )}
                                                  </div>
                                             </div>
                                        </CardContent>
                                   </Card>
                              ))}
                         </div>
                    </div>
               </section>

               {/* Why Choose Us */}
               <section className="py-20 bg-white">
                    <div className="container mx-auto px-4">
                         <div className="grid lg:grid-cols-2 gap-12 items-center">
                              <div>
                                   <Badge className="bg-orange-100 text-orange-800 hover:bg-orange-50 mb-4">
                                        Why Choose Bingo Academy
                                   </Badge>
                                   <h2 className="text-4xl font-bold text-gray-900 mb-6">
                                        What Makes Us Different
                                   </h2>
                                   <p className="text-lg text-gray-600 leading-relaxed mb-8">
                                        We're not just another coding school.
                                        We're a community of learners,
                                        educators, and innovators committed to
                                        transforming how young people learn
                                        technology.
                                   </p>

                                   <div className="space-y-6">
                                        {[
                                             {
                                                  icon: CheckCircle,
                                                  title: "Personalized Learning Paths",
                                                  description:
                                                       "Every student gets a customized learning experience based on their interests, pace, and goals.",
                                             },
                                             {
                                                  icon: Users,
                                                  title: "Small Class Sizes",
                                                  description:
                                                       "Maximum 8 students per class ensures individual attention and meaningful interaction.",
                                             },
                                             {
                                                  icon: Trophy,
                                                  title: "Project-Based Learning",
                                                  description:
                                                       "Students build real projects they're proud of, not just complete exercises.",
                                             },
                                             {
                                                  icon: Heart,
                                                  title: "Supportive Community",
                                                  description:
                                                       "A welcoming environment where students support each other and celebrate successes together.",
                                             },
                                        ].map((feature, index) => (
                                             <div
                                                  key={index}
                                                  className="flex items-start space-x-4"
                                             >
                                                  <div className="w-8 h-8 bg-gradient-to-r from-orange-600 to-orange-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                                       <feature.icon className="w-5 h-5 text-white" />
                                                  </div>
                                                  <div>
                                                       <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                                            {feature.title}
                                                       </h3>
                                                       <p className="text-gray-600">
                                                            {
                                                                 feature.description
                                                            }
                                                       </p>
                                                  </div>
                                             </div>
                                        ))}
                                   </div>
                              </div>

                              <div className="relative">
                                   <Image
                                        src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600&q=80"
                                        alt="Students collaborating"
                                        width={500}
                                        height={500}
                                        className="rounded-2xl shadow-xl"
                                   />
                                   <div className="absolute -top-6 -right-6 bg-gradient-to-r from-orange-600 to-orange-500 rounded-2xl p-6 text-white shadow-xl">
                                        <div className="text-2xl font-bold">
                                             95%
                                        </div>
                                        <div className="text-sm opacity-90">
                                             Success Rate
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
               </section>

               {/* CTA Section */}
               <section className="py-20 bg-gradient-to-r from-orange-600 to-orange-500 text-white">
                    <div className="container mx-auto px-4 text-center">
                         <h2 className="text-4xl font-bold mb-4">
                              Ready to Join Our Community?
                         </h2>
                         <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                              Become part of the Bingo Academy family and start
                              your child's journey into the exciting world of
                              programming.
                         </p>
                         <div className="flex flex-col sm:flex-row gap-4 justify-center">
                              <Link href="/courses">
                                   <Button
                                        size="lg"
                                        className="bg-white text-orange-600 hover:bg-gray-100 text-lg px-8 py-6"
                                   >
                                        <BookOpen className="w-5 h-5 mr-2" />
                                        Explore Courses
                                   </Button>
                              </Link>
                              <Link href="/contact">
                                   <Button
                                        size="lg"
                                        variant="outline"
                                        className="border-2 border-white text-white hover:bg-white hover:text-orange-600 text-lg px-8 py-6 bg-transparent"
                                   >
                                        Schedule a Visit
                                   </Button>
                              </Link>
                         </div>
                    </div>
               </section>

               <Footer />
          </div>
     );
}

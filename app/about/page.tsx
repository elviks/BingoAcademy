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
     Building,
     GraduationCap,
     Briefcase,
     Zap,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/header";
import Footer from "@/components/footer";

const teamMembers = [
     {
          name: "Roshan KC",
          role: "Founder & Lead Training Director",
          bio: "Software Engineer with 6+ years of experience in web, cloud and mobile app development. Expert in designing corporate training programs.",
          image: "/images/roshan.jpeg",
          specialties: [
               "AWS",
               "AI/ML",
               "Web Development",
               "Mobile Development",
          ],
     },
     {
          name: "Vaskar Parajuli",
          role: "Senior Trainer",
          bio: "Full-stack developer with 4+ years of experience in web development and mobile app development. Specializes in organizational training delivery.",
          image: "/images/vashkar.jpeg",
          specialties: ["React", "Next.js", "Node.js", "React Native"],
     },
     {
          name: "Elvik Sharma",
          role: "Senior Trainer",
          bio: "Software Developer with 3+ years of experience in web development and mobile app development. Focuses on curriculum development and program management.",
          image: "/images/elvik.png",
          specialties: ["Next.js", "Express.js", "React Native", "Flutter"],
     },
];

const values = [
     {
          icon: Heart,
          title: "Client-Centric Approach",
          description:
               "We prioritize understanding your organization's unique needs and goals to deliver training solutions that drive real results.",
     },
     {
          icon: Users,
          title: "Expert-Led Training",
          description:
               "Our instructors are industry professionals with extensive experience in both technology and corporate training delivery.",
     },
     {
          icon: Target,
          title: "Measurable Outcomes",
          description:
               "We focus on delivering training programs that produce measurable improvements in skills, productivity, and organizational performance.",
     },
     {
          icon: Lightbulb,
          title: "Innovation & Best Practices",
          description:
               "We stay current with industry trends and incorporate cutting-edge technologies and methodologies into our training programs.",
     },
     {
          icon: Shield,
          title: "Quality Assurance",
          description:
               "We maintain rigorous quality standards in our curriculum, delivery methods, and post-training support to ensure optimal results.",
     },
     {
          icon: Globe,
          title: "Flexible Solutions",
          description:
               "We offer in-person, online, and hybrid training options to accommodate your organization's schedule and preferences.",
     },
];

const achievements = [
     {
          icon: Building,
          number: "200+",
          label: "Organizations Served",
          description: "Schools, colleges, universities, and corporations",
     },
     {
          icon: Users,
          number: "5,000+",
          label: "Professionals Trained",
          description: "Employees and students across various industries",
     },
     {
          icon: Award,
          number: "15+",
          label: "Training Programs",
          description: "Comprehensive curriculum offerings",
     },
     {
          icon: Star,
          number: "4.9/5",
          label: "Client Satisfaction",
          description: "Average rating from organizational clients",
     },
];

const services = [
     {
          icon: GraduationCap,
          title: "Academic Institutions",
          description:
               "Enhance computer science curricula with industry-relevant training programs",
          features: [
               "Curriculum Integration",
               "Faculty Development",
               "Student Certification",
          ],
     },
     {
          icon: Building,
          title: "Corporate Training",
          description:
               "Upskill your workforce with cutting-edge technology training",
          features: ["Custom Programs", "Team Building", "ROI Measurement"],
     },
     {
          icon: Briefcase,
          title: "Government Agencies",
          description:
               "Modernize teams with specialized technology training programs",
          features: [
               "Compliance Training",
               "Security Focus",
               "Modernization Support",
          ],
     },
     {
          icon: Zap,
          title: "Bootcamp Programs",
          description:
               "Intensive training programs for rapid skill development",
          features: [
               "Accelerated Learning",
               "Project-Based",
               "Career Transition",
          ],
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
                                        Empowering Organizations Through{" "}
                                        <span className="text-yellow-300">
                                             Expert Training
                                        </span>
                                   </h1>
                                   <p className="text-xl leading-relaxed mb-8 opacity-90">
                                        Founded in 2020, Bingo Academy has been
                                        at the forefront of organizational
                                        training and professional development.
                                        We believe that every organization
                                        deserves access to cutting-edge
                                        technology education that drives real
                                        results and empowers teams to succeed in
                                        the digital age.
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
                                        src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=600&q=80"
                                        alt="Professional training session at Bingo Academy"
                                        width={600}
                                        height={500}
                                        className="rounded-2xl shadow-2xl"
                                   />
                                   <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-xl">
                                        <div className="text-3xl font-bold text-orange-600">
                                             200+
                                        </div>
                                        <div className="text-gray-600">
                                             Organizations Served
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
               </section>

               {/* Meet Our Team */}
               <section className="py-16 bg-white">
                    <div className="container mx-auto px-4">
                         <div className="text-center mb-16">
                              <Badge className="bg-orange-100 text-orange-800 hover:bg-orange-50 mb-4">
                                   Our Expert Team
                              </Badge>
                              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                                   Meet the Training Experts Behind Bingo
                                   Academy
                              </h2>
                              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                                   Our passionate team of training professionals
                                   and industry experts are dedicated to
                                   delivering exceptional learning experiences
                                   for your organization.
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
               <section className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
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
                                        We're not just another training
                                        provider. We're a partner in your
                                        organization's success, committed to
                                        delivering measurable results and
                                        lasting impact.
                                   </p>

                                   <div className="space-y-6">
                                        {[
                                             {
                                                  icon: CheckCircle,
                                                  title: "Customized Solutions",
                                                  description:
                                                       "Every training program is tailored to your organization's specific needs, goals, and industry requirements.",
                                             },
                                             {
                                                  icon: Users,
                                                  title: "Expert Instructors",
                                                  description:
                                                       "Industry professionals with extensive experience in both technology and corporate training delivery.",
                                             },
                                             {
                                                  icon: Trophy,
                                                  title: "Measurable Results",
                                                  description:
                                                       "We focus on delivering training that produces measurable improvements in skills and organizational performance.",
                                             },
                                             {
                                                  icon: Heart,
                                                  title: "Ongoing Support",
                                                  description:
                                                       "Comprehensive post-training support and resources to ensure long-term success and implementation.",
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
                                        alt="Team collaboration and training"
                                        width={600}
                                        height={500}
                                        className="rounded-2xl shadow-xl"
                                   />

                              </div>
                         </div>
                    </div>
               </section>

               {/* CTA Section */}
               <section className="py-20 bg-gradient-to-r from-orange-600 to-orange-500 text-white">
                    <div className="container mx-auto px-4 text-center">
                         <h2 className="text-4xl font-bold mb-4">
                              Ready to Transform Your Organization?
                         </h2>
                         <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                              Partner with Bingo Academy and empower your team
                              with cutting-edge technology training that drives
                              real results.
                         </p>
                         <div className="flex flex-col sm:flex-row gap-4 justify-center">
                              <Link href="/courses">
                                   <Button
                                        size="lg"
                                        className="bg-white text-orange-600 hover:bg-gray-100 text-lg px-8 py-6"
                                   >
                                        <BookOpen className="w-5 h-5 mr-2" />
                                        View Training Programs
                                   </Button>
                              </Link>
                              <Link href="/contact">
                                   <Button
                                        size="lg"
                                        variant="outline"
                                        className="border-2 border-white text-white hover:bg-white hover:text-orange-600 text-lg px-8 py-6 bg-transparent"
                                   >
                                        Request Custom Quote
                                   </Button>
                              </Link>
                         </div>
                    </div>
               </section>

               <Footer />
          </div>
     );
}

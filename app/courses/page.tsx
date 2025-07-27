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
import {
     Select,
     SelectContent,
     SelectItem,
     SelectTrigger,
     SelectValue,
} from "@/components/ui/select";
import {
     Code,
     Clock,
     Users,
     Star,
     Search,
     BookOpen,
     Award,
     Play,
     Calendar,
     User,
     Sparkles,
     Building,
     GraduationCap,
     Briefcase,
     Globe,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { getAllTrainingPrograms } from "@/lib/training-programs-data";

const allTrainingPrograms = getAllTrainingPrograms();

const categories = [
     "All",
     "Web Development",
     "Python & Data Science",
     "Mobile Development",
     "AI & Machine Learning",
     "Game Development",
     "Cloud & DevOps",
     "Cybersecurity",
];

const levels = [
     "All",
     "All Levels",
     "Beginner to Intermediate",
     "Intermediate",
     "Intermediate to Advanced",
];

const organizationTypes = [
     "All Organizations",
     "Schools & Universities",
     "Corporations",
     "Government Agencies",
];

export default function CoursesPage() {
     const [searchTerm, setSearchTerm] = useState("");
     const [selectedCategory, setSelectedCategory] = useState("All");
     const [selectedLevel, setSelectedLevel] = useState("All");
     const [selectedOrganizationType, setSelectedOrganizationType] =
          useState("All Organizations");

     const filteredPrograms = allTrainingPrograms.filter((program) => {
          const matchesSearch =
               program.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
               program.description
                    .toLowerCase()
                    .includes(searchTerm.toLowerCase()) ||
               program.features.some((feature) =>
                    feature.toLowerCase().includes(searchTerm.toLowerCase())
               );
          const matchesCategory =
               selectedCategory === "All" ||
               program.category === selectedCategory;
          const matchesLevel =
               selectedLevel === "All" || program.level === selectedLevel;
          const matchesOrganizationType =
               selectedOrganizationType === "All Organizations" ||
               program.organizationType === selectedOrganizationType;

          return (
               matchesSearch &&
               matchesCategory &&
               matchesLevel &&
               matchesOrganizationType
          );
     });

     return (
          <div className="min-h-screen bg-gradient-to-br from-orange-50/30 via-white to-orange-50/30">
               <Header />

               {/* Enhanced Hero Section */}
               <section className="py-20 lg:py-32 bg-gradient-to-r from-orange-600 to-orange-500 text-white relative overflow-hidden">
                    <div className="absolute inset-0 bg-black/5"></div>
                    <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
                    <div
                         className="absolute bottom-20 right-10 w-32 h-32 bg-white/10 rounded-full animate-pulse"
                         style={{ animationDelay: "1s" }}
                    ></div>

                    <div className="container mx-auto px-4 sm:px-6 text-center relative z-10">
                         <BookOpen className="w-16 h-16 mx-auto mb-6 animate-bounce" />
                         <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
                              Training Programs for Organizations
                         </h1>
                         <p className="text-xl mb-12 opacity-90 max-w-4xl mx-auto leading-relaxed animate-fade-in-delay">
                              From web development to AI and machine learning,
                              find the perfect training program to transform
                              your organization. Expert instructors, customized
                              curriculum, and flexible delivery options await
                              you.
                         </p>
                         <div className="flex justify-center space-x-8 lg:space-x-16 text-center">
                              <div
                                   className="animate-fade-in-up"
                                   style={{ animationDelay: "0.1s" }}
                              >
                                   <div className="text-3xl font-bold">8+</div>
                                   <div className="opacity-90">
                                        Training Programs
                                   </div>
                              </div>
                              <div
                                   className="animate-fade-in-up"
                                   style={{ animationDelay: "0.2s" }}
                              >
                                   <div className="text-3xl font-bold">
                                        5,000+
                                   </div>
                                   <div className="opacity-90">
                                        Professionals Trained
                                   </div>
                              </div>
                              <div
                                   className="animate-fade-in-up"
                                   style={{ animationDelay: "0.3s" }}
                              >
                                   <div className="text-3xl font-bold">98%</div>
                                   <div className="opacity-90">
                                        Success Rate
                                   </div>
                              </div>
                         </div>
                    </div>
               </section>

               {/* Enhanced Filters */}
               <section className="py-8 bg-white/95 backdrop-blur-sm border-b border-orange-100/50 sticky top-[73px] z-40">
                    <div className="container mx-auto px-4 sm:px-6">
                         <div className="flex flex-col lg:flex-row gap-6 items-center">
                              <div className="flex-1 relative">
                                   <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                                   <Input
                                        placeholder="Search training programs, technologies, or skills..."
                                        value={searchTerm}
                                        onChange={(e) =>
                                             setSearchTerm(e.target.value)
                                        }
                                        className="pl-12 py-6 text-lg border-orange-200 focus:border-orange-400 transition-colors duration-200 rounded-xl"
                                   />
                              </div>

                              <div className="flex flex-wrap gap-4">
                                   <Select
                                        value={selectedCategory}
                                        onValueChange={setSelectedCategory}
                                   >
                                        <SelectTrigger className="w-48 py-6 rounded-xl border-orange-200">
                                             <SelectValue placeholder="Category" />
                                        </SelectTrigger>
                                        <SelectContent>
                                             {categories.map((category) => (
                                                  <SelectItem
                                                       key={category}
                                                       value={category}
                                                  >
                                                       {category}
                                                  </SelectItem>
                                             ))}
                                        </SelectContent>
                                   </Select>

                                   <Select
                                        value={selectedLevel}
                                        onValueChange={setSelectedLevel}
                                   >
                                        <SelectTrigger className="w-48 py-6 rounded-xl border-orange-200">
                                             <SelectValue placeholder="Level" />
                                        </SelectTrigger>
                                        <SelectContent>
                                             {levels.map((level) => (
                                                  <SelectItem
                                                       key={level}
                                                       value={level}
                                                  >
                                                       {level}
                                                  </SelectItem>
                                             ))}
                                        </SelectContent>
                                   </Select>

                                   <Select
                                        value={selectedOrganizationType}
                                        onValueChange={
                                             setSelectedOrganizationType
                                        }
                                   >
                                        <SelectTrigger className="w-56 py-6 rounded-xl border-orange-200">
                                             <SelectValue placeholder="Organization Type" />
                                        </SelectTrigger>
                                        <SelectContent>
                                             {organizationTypes.map((type) => (
                                                  <SelectItem
                                                       key={type}
                                                       value={type}
                                                  >
                                                       {type}
                                                  </SelectItem>
                                             ))}
                                        </SelectContent>
                                   </Select>
                              </div>
                         </div>
                    </div>
               </section>

               {/* Training Programs Grid */}
               <section className="py-20">
                    <div className="container mx-auto px-4 sm:px-6">
                         <div className="mb-12 text-center">
                              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                                   {filteredPrograms.length} Training Program
                                   {filteredPrograms.length !== 1
                                        ? "s"
                                        : ""}{" "}
                                   Found
                              </h2>
                              <p className="text-lg text-gray-600">
                                   Choose from our comprehensive selection of
                                   organizational training programs
                              </p>
                         </div>

                         <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                              {filteredPrograms.map((program, index) => (
                                   <Card
                                        key={program.id}
                                        className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-0 shadow-xl bg-white rounded-3xl overflow-hidden relative"
                                        style={{
                                             animationDelay: `${index * 100}ms`,
                                             animation:
                                                  "fadeInUp 0.6s ease-out forwards",
                                        }}
                                   >
                                        {/* Gradient overlay for better visual appeal */}
                                        <div className="absolute inset-0 bg-gradient-to-br from-orange-50/30 via-transparent to-blue-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                                        <div className="relative overflow-hidden">
                                             <Image
                                                  src={
                                                       program.image ||
                                                       "/placeholder.svg"
                                                  }
                                                  alt={program.title}
                                                  width={300}
                                                  height={200}
                                                  className="w-full h-52 object-cover group-hover:scale-110 transition-transform duration-700"
                                             />
                                             <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                             {/* Category badge with improved styling */}
                                             <Badge className="absolute top-4 left-4 bg-white/95 text-gray-800 shadow-lg backdrop-blur-sm border border-white/20 font-semibold px-3 py-1">
                                                  {program.category}
                                             </Badge>

                                             {/* Price badge overlay */}
                                             <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-sm rounded-xl px-3 py-2 shadow-lg border border-white/20">
                                                  <div className="text-right">
                                                       <span className="text-lg font-bold text-orange-600">
                                                            {program.price}
                                                       </span>
                                                       <div className="text-xs text-gray-600 font-medium">
                                                            {program.format}
                                                       </div>
                                                  </div>
                                             </div>
                                        </div>

                                        <CardHeader className="pb-4 relative">
                                             {/* Level badge with improved colors */}
                                             <div className="flex justify-between items-start mb-4">
                                                  <Badge
                                                       variant="secondary"
                                                       className={`text-xs font-semibold px-3 py-1 ${
                                                            program.level ===
                                                            "All Levels"
                                                                 ? "bg-emerald-100 text-emerald-800 border-emerald-200"
                                                                 : program.level ===
                                                                   "Beginner to Intermediate"
                                                                 ? "bg-amber-100 text-amber-800 border-amber-200"
                                                                 : "bg-rose-100 text-rose-800 border-rose-200"
                                                       }`}
                                                  >
                                                       {program.level}
                                                  </Badge>
                                             </div>

                                             <CardTitle className="text-xl group-hover:text-orange-600 transition-colors duration-300 line-clamp-2 leading-tight font-bold mb-3">
                                                  {program.title}
                                             </CardTitle>
                                             <CardDescription className="text-gray-600 line-clamp-3 leading-relaxed text-sm">
                                                  {program.description}
                                             </CardDescription>
                                        </CardHeader>

                                        <CardContent className="pt-0">
                                             {/* Duration and participants with icons */}
                                             <div className="flex items-center justify-between mb-4 text-sm text-gray-600 bg-gray-50/50 rounded-xl p-3">
                                                  <div className="flex items-center">
                                                       <Clock className="w-4 h-4 mr-2 text-orange-500" />
                                                       <span className="font-medium">
                                                            {program.duration}
                                                       </span>
                                                  </div>
                                                  <div className="flex items-center">
                                                       <Users className="w-4 h-4 mr-2 text-blue-500" />
                                                       <span className="font-medium">
                                                            {
                                                                 program.participants
                                                            }
                                                       </span>
                                                  </div>
                                             </div>

                                             {/* Rating with improved stars */}
                                             <div className="flex items-center mb-4">
                                                  <div className="flex items-center mr-3">
                                                       {[...Array(5)].map(
                                                            (_, i) => (
                                                                 <Star
                                                                      key={i}
                                                                      className={`w-4 h-4 ${
                                                                           i <
                                                                           Math.floor(
                                                                                program.rating
                                                                           )
                                                                                ? "text-yellow-400 fill-current drop-shadow-sm"
                                                                                : "text-gray-300"
                                                                      }`}
                                                                 />
                                                            )
                                                       )}
                                                  </div>
                                                  <span className="text-sm text-gray-700 font-semibold">
                                                       {program.rating}
                                                  </span>
                                             </div>

                                             {/* Instructor and organization info */}
                                             <div className="mb-4 space-y-2">
                                                  <div className="flex items-center text-sm text-gray-600 bg-white/50 rounded-lg p-2">
                                                       <User className="w-4 h-4 mr-2 text-purple-500" />
                                                       <span className="font-medium">
                                                            {typeof program.instructor ===
                                                            "string"
                                                                 ? program.instructor
                                                                 : program
                                                                        .instructor
                                                                        .name}
                                                       </span>
                                                  </div>
                                                  <div className="flex items-center text-sm text-gray-600 bg-white/50 rounded-lg p-2">
                                                       <Calendar className="w-4 h-4 mr-2 text-green-500" />
                                                       <span className="font-medium">
                                                            Flexible Scheduling
                                                       </span>
                                                  </div>
                                                  <div className="flex items-center text-sm text-gray-600 bg-white/50 rounded-lg p-2">
                                                       <Building className="w-4 h-4 mr-2 text-indigo-500" />
                                                       <span className="font-medium">
                                                            {
                                                                 program.organizationType
                                                            }
                                                       </span>
                                                  </div>
                                             </div>

                                             {/* Features with improved badges */}
                                             <div className="mb-6">
                                                  <div className="flex flex-wrap gap-2">
                                                       {program.features
                                                            .slice(0, 2)
                                                            .map(
                                                                 (
                                                                      feature,
                                                                      index
                                                                 ) => (
                                                                      <Badge
                                                                           key={
                                                                                index
                                                                           }
                                                                           variant="outline"
                                                                           className="text-xs border-orange-200 text-orange-700 bg-orange-50/50 font-medium px-2 py-1"
                                                                      >
                                                                           {
                                                                                feature
                                                                           }
                                                                      </Badge>
                                                                 )
                                                            )}
                                                       {program.features
                                                            .length > 2 && (
                                                            <Badge
                                                                 variant="outline"
                                                                 className="text-xs border-orange-200 text-orange-700 bg-orange-50/50 font-medium px-2 py-1"
                                                            >
                                                                 +
                                                                 {program
                                                                      .features
                                                                      .length -
                                                                      2}{" "}
                                                                 more
                                                            </Badge>
                                                       )}
                                                  </div>
                                             </div>

                                             {/* Action buttons with improved styling */}
                                             <div className="flex flex-col gap-2">
                                                  <Link
                                                       href={`/courses/${program.slug}`}
                                                  >
                                                       <Button className="w-full bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 transition-all duration-300 hover:scale-105 shadow-lg rounded-xl font-semibold py-3">
                                                            <BookOpen className="w-4 h-4 mr-2" />
                                                            View Details
                                                       </Button>
                                                  </Link>
                                                  <Link href="/contact">
                                                       <Button
                                                            variant="outline"
                                                            className="w-full bg-white/80 hover:bg-orange-50 transition-all duration-300 border-orange-200 text-orange-700 hover:text-orange-800 hover:border-orange-300 rounded-xl font-semibold py-3 shadow-sm"
                                                       >
                                                            <Play className="w-4 h-4 mr-2" />
                                                            Request Quote
                                                       </Button>
                                                  </Link>
                                             </div>
                                        </CardContent>
                                   </Card>
                              ))}
                         </div>

                         {filteredPrograms.length === 0 && (
                              <div className="text-center py-20">
                                   <div className="text-6xl mb-6">🔍</div>
                                   <h3 className="text-3xl font-bold text-gray-900 mb-4">
                                        No training programs found
                                   </h3>
                                   <p className="text-lg text-gray-600 mb-8">
                                        Try adjusting your search criteria or
                                        browse all training programs
                                   </p>
                                   <Button
                                        onClick={() => {
                                             setSearchTerm("");
                                             setSelectedCategory("All");
                                             setSelectedLevel("All");
                                             setSelectedOrganizationType(
                                                  "All Organizations"
                                             );
                                        }}
                                        className="bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 px-8 py-6 text-lg transition-all duration-300 hover:scale-105 rounded-xl"
                                   >
                                        Clear Filters
                                   </Button>
                              </div>
                         )}
                    </div>
               </section>

               {/* CTA Section */}
               <section className="py-20 bg-gradient-to-r from-orange-600 to-orange-500 text-white relative overflow-hidden">
                    <div className="absolute inset-0 bg-black/5"></div>
                    <div className="container mx-auto px-4 sm:px-6 text-center relative z-10">
                         <h2 className="text-4xl font-bold mb-6">
                              Ready to Transform Your Organization?
                         </h2>
                         <p className="text-xl mb-12 opacity-90 max-w-3xl mx-auto leading-relaxed">
                              Partner with Bingo Academy and empower your team
                              with cutting-edge technology training. Get
                              personalized guidance and customized solutions
                              with our expert training consultants.
                         </p>
                         <div className="flex flex-col sm:flex-row gap-6 justify-center">
                              <Link href="/contact">
                                   <Button
                                        size="lg"
                                        className="bg-white text-orange-600 hover:bg-gray-100 text-lg px-8 py-6 transition-all duration-300 hover:scale-105 shadow-lg rounded-xl"
                                   >
                                        <Award className="w-5 h-5 mr-2" />
                                        Request Custom Quote
                                   </Button>
                              </Link>
                              <Link href="/contact">
                                   <Button
                                        size="lg"
                                        variant="outline"
                                        className="border-2 border-white text-white hover:bg-white hover:text-orange-600 text-lg px-8 py-6 bg-transparent transition-all duration-300 hover:scale-105 rounded-xl"
                                   >
                                        Schedule Consultation
                                   </Button>
                              </Link>
                         </div>
                    </div>
               </section>

               <Footer />
          </div>
     );
}

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
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/header";
import Footer from "@/components/footer";

const allCourses = [
     {
          id: 1,
          title: "Scratch Programming for Kids",
          description:
               "Visual programming language perfect for beginners aged 8-12. Learn to create games, animations, and interactive stories with drag-and-drop coding blocks.",
          duration: "8 weeks",
          level: "Beginner",
          price: "$199",
          originalPrice: "$249",
          rating: 4.9,
          students: 150,
          image: "https://plus.unsplash.com/premium_photo-1663100142323-01690ffa273b?auto=format&fit=crop&w=600&q=80", // kids coding
          category: "Scratch",
          ageGroup: "8-12",
          features: [
               "Visual Programming",
               "Game Creation",
               "Animation",
               "Storytelling",
          ],
          instructor: "Sarah Johnson",
          nextStart: "March 15, 2024",
     },
     {
          id: 2,
          title: "Python Fundamentals",
          description:
               "Learn the basics of Python programming with hands-on projects. Perfect for beginners who want to start with text-based coding and build real applications.",
          duration: "12 weeks",
          level: "Beginner",
          price: "$299",
          originalPrice: "$399",
          rating: 4.8,
          students: 200,
          image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80", // python code
          category: "Python",
          ageGroup: "12+",
          features: [
               "Variables & Data Types",
               "Functions",
               "Loops",
               "Real Projects",
          ],
          instructor: "Mike Chen",
          nextStart: "March 20, 2024",
     },
     {
          id: 3,
          title: "Advanced Python Programming",
          description:
               "Take your Python skills to the next level with object-oriented programming, data structures, algorithms, and advanced project development.",
          duration: "14 weeks",
          level: "Intermediate",
          price: "$399",
          originalPrice: "$499",
          rating: 4.9,
          students: 120,
          image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=600&q=80", // advanced python
          category: "Python",
          ageGroup: "14+",
          features: [
               "OOP",
               "Data Structures",
               "Algorithms",
               "Advanced Projects",
          ],
          instructor: "Dr. Lisa Rodriguez",
          nextStart: "April 1, 2024",
     },
     {
          id: 4,
          title: "Web Development Bootcamp",
          description:
               "HTML, CSS, JavaScript, and React - build real websites and web applications from scratch. Create responsive, modern web experiences.",
          duration: "16 weeks",
          level: "Intermediate",
          price: "$499",
          originalPrice: "$649",
          rating: 4.7,
          students: 180,
          image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80", // web dev
          category: "Web Development",
          ageGroup: "14+",
          features: ["HTML/CSS", "JavaScript", "React", "Portfolio Projects"],
          instructor: "Emma Davis",
          nextStart: "March 25, 2024",
     },
     {
          id: 5,
          title: "Robotics & Arduino",
          description:
               "Build and program robots using Arduino microcontrollers. Learn electronics, sensors, and automation while creating amazing robotic projects.",
          duration: "10 weeks",
          level: "Intermediate",
          price: "$399",
          originalPrice: "$499",
          rating: 4.8,
          students: 90,
          image: "https://images.unsplash.com/photo-1631378297854-185cff6b0986?auto=format&fit=crop&w=600&q=80", // robotics
          category: "Robotics",
          ageGroup: "12+",
          features: [
               "Arduino Programming",
               "Sensors",
               "Motors",
               "Robot Building",
          ],
          instructor: "Alex Thompson",
          nextStart: "April 5, 2024",
     },
     {
          id: 6,
          title: "AI & Machine Learning for Teens",
          description:
               "Introduction to artificial intelligence and machine learning concepts with practical Python projects. Explore the future of technology.",
          duration: "12 weeks",
          level: "Advanced",
          price: "$599",
          originalPrice: "$749",
          rating: 4.9,
          students: 75,
          image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80", // AI/ML
          category: "AI",
          ageGroup: "16+",
          features: [
               "ML Algorithms",
               "Neural Networks",
               "Data Analysis",
               "AI Projects",
          ],
          instructor: "Dr. James Wilson",
          nextStart: "April 10, 2024",
     },
     {
          id: 7,
          title: "Game Development with Unity",
          description:
               "Create 2D and 3D games using Unity game engine and C# programming language. Bring your game ideas to life with professional tools.",
          duration: "14 weeks",
          level: "Intermediate",
          price: "$449",
          originalPrice: "$599",
          rating: 4.6,
          students: 110,
          image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=600&q=80", // game dev
          category: "Game Development",
          ageGroup: "14+",
          features: [
               "Unity Engine",
               "C# Programming",
               "2D/3D Games",
               "Game Physics",
          ],
          instructor: "Ryan Martinez",
          nextStart: "March 30, 2024",
     },
     {
          id: 8,
          title: "Mobile App Development",
          description:
               "Build mobile apps for iOS and Android using React Native. Learn to create cross-platform applications that work on all devices.",
          duration: "16 weeks",
          level: "Advanced",
          price: "$549",
          originalPrice: "$699",
          rating: 4.7,
          students: 85,
          image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=600&q=80", // mobile apps
          category: "Mobile Development",
          ageGroup: "16+",
          features: [
               "React Native",
               "Cross-platform",
               "App Store",
               "Mobile UI/UX",
          ],
          instructor: "Sofia Kim",
          nextStart: "April 15, 2024",
     },
];

const categories = [
     "All",
     "Scratch",
     "Python",
     "Web Development",
     "Robotics",
     "AI",
     "Game Development",
     "Mobile Development",
];
const levels = ["All", "Beginner", "Intermediate", "Advanced"];
const ageGroups = ["All", "8-12", "12+", "14+", "16+"];

export default function CoursesPage() {
     const [searchTerm, setSearchTerm] = useState("");
     const [selectedCategory, setSelectedCategory] = useState("All");
     const [selectedLevel, setSelectedLevel] = useState("All");
     const [selectedAgeGroup, setSelectedAgeGroup] = useState("All");

     const filteredCourses = allCourses.filter((course) => {
          const matchesSearch =
               course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
               course.description
                    .toLowerCase()
                    .includes(searchTerm.toLowerCase()) ||
               course.features.some((feature) =>
                    feature.toLowerCase().includes(searchTerm.toLowerCase())
               );
          const matchesCategory =
               selectedCategory === "All" ||
               course.category === selectedCategory;
          const matchesLevel =
               selectedLevel === "All" || course.level === selectedLevel;
          const matchesAgeGroup =
               selectedAgeGroup === "All" ||
               course.ageGroup === selectedAgeGroup;

          return (
               matchesSearch &&
               matchesCategory &&
               matchesLevel &&
               matchesAgeGroup
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
                              Explore Our Courses
                         </h1>
                         <p className="text-xl mb-12 opacity-90 max-w-4xl mx-auto leading-relaxed animate-fade-in-delay">
                              From visual programming with Scratch to advanced
                              AI and machine learning, find the perfect course
                              to start or advance your coding journey. Expert
                              instructors, hands-on projects, and a supportive
                              community await you.
                         </p>
                         <div className="flex justify-center space-x-8 lg:space-x-16 text-center">
                              <div
                                   className="animate-fade-in-up"
                                   style={{ animationDelay: "0.1s" }}
                              >
                                   <div className="text-3xl font-bold">8+</div>
                                   <div className="opacity-90">
                                        Courses Available
                                   </div>
                              </div>
                              <div
                                   className="animate-fade-in-up"
                                   style={{ animationDelay: "0.2s" }}
                              >
                                   <div className="text-3xl font-bold">
                                        500+
                                   </div>
                                   <div className="opacity-90">
                                        Students Enrolled
                                   </div>
                              </div>
                              <div
                                   className="animate-fade-in-up"
                                   style={{ animationDelay: "0.3s" }}
                              >
                                   <div className="text-3xl font-bold">95%</div>
                                   <div className="opacity-90">
                                        Completion Rate
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
                                        placeholder="Search courses, topics, or technologies..."
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
                                        <SelectTrigger className="w-40 py-6 rounded-xl border-orange-200">
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
                                        value={selectedAgeGroup}
                                        onValueChange={setSelectedAgeGroup}
                                   >
                                        <SelectTrigger className="w-32 py-6 rounded-xl border-orange-200">
                                             <SelectValue placeholder="Age" />
                                        </SelectTrigger>
                                        <SelectContent>
                                             {ageGroups.map((age) => (
                                                  <SelectItem
                                                       key={age}
                                                       value={age}
                                                  >
                                                       {age}
                                                  </SelectItem>
                                             ))}
                                        </SelectContent>
                                   </Select>
                              </div>
                         </div>
                    </div>
               </section>

               {/* Courses Grid */}
               <section className="py-20">
                    <div className="container mx-auto px-4 sm:px-6">
                         <div className="mb-12 text-center">
                              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                                   {filteredCourses.length} Course
                                   {filteredCourses.length !== 1
                                        ? "s"
                                        : ""}{" "}
                                   Found
                              </h2>
                              <p className="text-lg text-gray-600">
                                   Choose from our comprehensive selection of
                                   programming courses
                              </p>
                         </div>

                         <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                              {filteredCourses.map((course, index) => (
                                   <Card
                                        key={course.id}
                                        className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-0 shadow-lg bg-white rounded-2xl overflow-hidden"
                                        style={{
                                             animationDelay: `${index * 100}ms`,
                                             animation:
                                                  "fadeInUp 0.6s ease-out forwards",
                                        }}
                                   >
                                        <div className="relative overflow-hidden">
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
                                             <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                             <Badge className="absolute top-4 left-4 bg-white/90 text-gray-800 shadow-sm backdrop-blur-sm">
                                                  {course.category}
                                             </Badge>
                                             <Badge className="absolute top-4 right-4 bg-orange-600 text-white shadow-sm">
                                                  {course.ageGroup}
                                             </Badge>
                                             {course.originalPrice && (
                                                  <div className="absolute bottom-4 left-4 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                                                       Save $
                                                       {Number.parseInt(
                                                            course.originalPrice.slice(
                                                                 1
                                                            )
                                                       ) -
                                                            Number.parseInt(
                                                                 course.price.slice(
                                                                      1
                                                                 )
                                                            )}
                                                  </div>
                                             )}
                                        </div>

                                        <CardHeader className="pb-4">
                                             <div className="flex justify-between items-start mb-3">
                                                  <Badge
                                                       variant="secondary"
                                                       className={`text-xs ${
                                                            course.level ===
                                                            "Beginner"
                                                                 ? "bg-green-100 text-green-800"
                                                                 : course.level ===
                                                                   "Intermediate"
                                                                 ? "bg-yellow-100 text-yellow-800"
                                                                 : "bg-red-100 text-red-800"
                                                       }`}
                                                  >
                                                       {course.level}
                                                  </Badge>
                                                  <div className="text-right">
                                                       <span className="text-2xl font-bold text-orange-600">
                                                            {course.price}
                                                       </span>
                                                       {course.originalPrice && (
                                                            <div className="text-sm text-gray-500 line-through">
                                                                 {
                                                                      course.originalPrice
                                                                 }
                                                            </div>
                                                       )}
                                                  </div>
                                             </div>
                                             <CardTitle className="text-xl group-hover:text-orange-600 transition-colors duration-300 line-clamp-2 leading-tight">
                                                  {course.title}
                                             </CardTitle>
                                             <CardDescription className="text-gray-600 line-clamp-3 leading-relaxed">
                                                  {course.description}
                                             </CardDescription>
                                        </CardHeader>

                                        <CardContent className="pt-0">
                                             <div className="flex items-center justify-between mb-4 text-sm text-gray-500">
                                                  <div className="flex items-center">
                                                       <Clock className="w-4 h-4 mr-2" />
                                                       {course.duration}
                                                  </div>
                                                  <div className="flex items-center">
                                                       <Users className="w-4 h-4 mr-2" />
                                                       {course.students}
                                                  </div>
                                             </div>

                                             <div className="flex items-center mb-4">
                                                  <div className="flex items-center mr-3">
                                                       {[...Array(5)].map(
                                                            (_, i) => (
                                                                 <Star
                                                                      key={i}
                                                                      className={`w-4 h-4 ${
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
                                                  <span className="text-sm text-gray-600 font-medium">
                                                       ({course.rating})
                                                  </span>
                                             </div>

                                             <div className="mb-4">
                                                  <div className="flex items-center text-sm text-gray-600 mb-2">
                                                       <User className="w-4 h-4 mr-2" />
                                                       <span>
                                                            {course.instructor}
                                                       </span>
                                                  </div>
                                                  <div className="flex items-center text-sm text-gray-600">
                                                       <Calendar className="w-4 h-4 mr-2" />
                                                       <span>
                                                            Starts{" "}
                                                            {course.nextStart}
                                                       </span>
                                                  </div>
                                             </div>

                                             <div className="mb-6">
                                                  <div className="flex flex-wrap gap-2">
                                                       {course.features
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
                                                                           className="text-xs border-orange-200 text-orange-700"
                                                                      >
                                                                           {
                                                                                feature
                                                                           }
                                                                      </Badge>
                                                                 )
                                                            )}
                                                       {course.features.length >
                                                            2 && (
                                                            <Badge
                                                                 variant="outline"
                                                                 className="text-xs border-orange-200 text-orange-700"
                                                            >
                                                                 +
                                                                 {course
                                                                      .features
                                                                      .length -
                                                                      2}{" "}
                                                                 more
                                                            </Badge>
                                                       )}
                                                  </div>
                                             </div>

                                             <div className="space-y-3">
                                                  <Link
                                                       href={`/courses/${course.id}`}
                                                  >
                                                       <Button className="w-full bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 transition-all duration-300 hover:scale-105 shadow-md rounded-xl">
                                                            <BookOpen className="w-4 h-4 mr-2" />
                                                            View Details
                                                       </Button>
                                                  </Link>
                                                  <Link href="/trial">
                                                       <Button
                                                            variant="outline"
                                                            className="w-full bg-transparent hover:bg-orange-50 transition-all duration-300 border-orange-200 text-orange-700 hover:text-orange-800 rounded-xl"
                                                       >
                                                            <Play className="w-4 h-4 mr-2" />
                                                            Free Trial
                                                       </Button>
                                                  </Link>
                                             </div>
                                        </CardContent>
                                   </Card>
                              ))}
                         </div>

                         {filteredCourses.length === 0 && (
                              <div className="text-center py-20">
                                   <div className="text-6xl mb-6">🔍</div>
                                   <h3 className="text-3xl font-bold text-gray-900 mb-4">
                                        No courses found
                                   </h3>
                                   <p className="text-lg text-gray-600 mb-8">
                                        Try adjusting your search criteria or
                                        browse all courses
                                   </p>
                                   <Button
                                        onClick={() => {
                                             setSearchTerm("");
                                             setSelectedCategory("All");
                                             setSelectedLevel("All");
                                             setSelectedAgeGroup("All");
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
                              Ready to Start Your Coding Journey?
                         </h2>
                         <p className="text-xl mb-12 opacity-90 max-w-3xl mx-auto leading-relaxed">
                              Join thousands of students who have already
                              started learning to code with Bingo Academy. Get
                              personalized guidance and hands-on experience with
                              our expert instructors.
                         </p>
                         <div className="flex flex-col sm:flex-row gap-6 justify-center">
                              <Link href="/enrollment">
                                   <Button
                                        size="lg"
                                        className="bg-white text-orange-600 hover:bg-gray-100 text-lg px-8 py-6 transition-all duration-300 hover:scale-105 shadow-lg rounded-xl"
                                   >
                                        <Award className="w-5 h-5 mr-2" />
                                        Enroll Now
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

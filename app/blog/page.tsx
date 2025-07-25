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
     Code,
     Calendar,
     User,
     Search,
     Clock,
     ArrowRight,
     BookOpen,
     TrendingUp,
     Lightbulb,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/header";
import Footer from "@/components/footer";

const blogPosts = [
     {
          id: 1,
          title: "10 Fun Python Projects for Kids to Build This Summer",
          excerpt: "Discover exciting Python projects that will keep young programmers engaged and learning throughout the summer break.",
          content: "Summer is the perfect time for kids to dive deeper into programming...",
          author: "Sarah Johnson",
          date: "2024-01-15",
          readTime: "5 min read",
          category: "Python",
          image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80", // python kids
          featured: true,
          tags: ["Python", "Kids", "Projects", "Summer"],
     },
     {
          id: 2,
          title: "Why Scratch Programming is Perfect for Young Learners",
          excerpt: "Learn how visual programming with Scratch helps children develop logical thinking and creativity.",
          content: "Scratch programming has revolutionized how we teach coding to children...",
          author: "Mike Chen",
          date: "2024-01-12",
          readTime: "4 min read",
          category: "Scratch",
          image: "https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=600&q=80", // scratch kids
          featured: false,
          tags: ["Scratch", "Education", "Visual Programming"],
     },
     {
          id: 3,
          title: "The Future of AI Education for Students",
          excerpt: "Exploring how artificial intelligence is shaping the future of education and what students need to know.",
          content: "Artificial Intelligence is no longer a futuristic concept...",
          author: "Dr. Lisa Rodriguez",
          date: "2024-01-10",
          readTime: "7 min read",
          category: "AI",
          image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80", // ai education
          featured: true,
          tags: ["AI", "Education", "Future", "Technology"],
     },
     {
          id: 4,
          title: "Building Your First Robot: A Beginner's Guide",
          excerpt: "Step-by-step guide to creating your first robot using Arduino and basic electronic components.",
          content: "Robotics combines programming, electronics, and mechanical engineering...",
          author: "Alex Thompson",
          date: "2024-01-08",
          readTime: "6 min read",
          category: "Robotics",
          image: "https://images.unsplash.com/photo-1631378297854-185cff6b0986?auto=format&fit=crop&w=600&q=80", // robotics
          featured: false,
          tags: ["Robotics", "Arduino", "Electronics", "Beginner"],
     },
     {
          id: 5,
          title: "Web Development Trends Every Student Should Know",
          excerpt: "Stay updated with the latest web development trends and technologies that are shaping the industry.",
          content: "The web development landscape is constantly evolving...",
          author: "Emma Davis",
          date: "2024-01-05",
          readTime: "5 min read",
          category: "Web Development",
          image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80", // web dev
          featured: false,
          tags: ["Web Development", "Trends", "Technology", "Career"],
     },
     {
          id: 6,
          title: "How to Choose the Right Programming Language for Kids",
          excerpt: "A comprehensive guide to help parents and educators select the best programming language for young learners.",
          content: "Choosing the right programming language for children can be challenging...",
          author: "David Kim",
          date: "2024-01-03",
          readTime: "8 min read",
          category: "Education",
          image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80", // kids coding
          featured: false,
          tags: ["Education", "Programming Languages", "Kids", "Guide"],
     },
];

const categories = [
     "All",
     "Python",
     "Scratch",
     "AI",
     "Robotics",
     "Web Development",
     "Education",
];

export default function BlogPage() {
     const [searchTerm, setSearchTerm] = useState("");
     const [selectedCategory, setSelectedCategory] = useState("All");

     const filteredPosts = blogPosts.filter((post) => {
          const matchesSearch =
               post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
               post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
               post.tags.some((tag) =>
                    tag.toLowerCase().includes(searchTerm.toLowerCase())
               );
          const matchesCategory =
               selectedCategory === "All" || post.category === selectedCategory;

          return matchesSearch && matchesCategory;
     });

     const featuredPosts = filteredPosts.filter((post) => post.featured);
     const regularPosts = filteredPosts.filter((post) => !post.featured);

     return (
          <div className="min-h-screen bg-gradient-to-br from-orange-50/30 via-white to-orange-50/30">
               <Header />

               {/* Hero Section */}
               <section className="py-20 bg-gradient-to-r from-orange-600 to-orange-500 text-white relative overflow-hidden">
                    <div className="absolute inset-0 bg-black/5"></div>
                    <div className="container mx-auto px-6 text-center relative z-10">
                         <div className="flex items-center justify-center mb-6">
                              <BookOpen className="w-12 h-12 mr-4" />
                              <h1 className="text-5xl font-bold">
                                   Bingo Academy Blog
                              </h1>
                         </div>
                         <p className="text-xl mb-12 opacity-90 max-w-3xl mx-auto leading-relaxed">
                              Discover coding tips, educational insights,
                              success stories, and the latest trends in
                              programming education for students of all ages.
                         </p>

                         <div className="flex justify-center space-x-12 text-center">
                              <div
                                   className="animate-in fade-in duration-700"
                                   style={{ animationDelay: "100ms" }}
                              >
                                   <div className="text-3xl font-bold">50+</div>
                                   <div className="opacity-90">
                                        Articles Published
                                   </div>
                              </div>
                              <div
                                   className="animate-in fade-in duration-700"
                                   style={{ animationDelay: "200ms" }}
                              >
                                   <div className="text-3xl font-bold">
                                        10K+
                                   </div>
                                   <div className="opacity-90">
                                        Monthly Readers
                                   </div>
                              </div>
                              <div
                                   className="animate-in fade-in duration-700"
                                   style={{ animationDelay: "300ms" }}
                              >
                                   <div className="text-3xl font-bold">
                                        Weekly
                                   </div>
                                   <div className="opacity-90">New Content</div>
                              </div>
                         </div>
                    </div>
               </section>

               {/* Search and Filter */}
               <section className="py-8 bg-white/80 backdrop-blur-sm border-b border-orange-100/50">
                    <div className="container mx-auto px-6">
                         <div className="flex flex-col lg:flex-row gap-6 items-center">
                              <div className="flex-1 relative">
                                   <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                                   <Input
                                        placeholder="Search articles..."
                                        value={searchTerm}
                                        onChange={(e) =>
                                             setSearchTerm(e.target.value)
                                        }
                                        className="pl-12 py-6 text-lg border-orange-200 focus:border-orange-400 transition-colors duration-200"
                                   />
                              </div>

                              <div className="flex flex-wrap gap-3">
                                   {categories.map((category) => (
                                        <Button
                                             key={category}
                                             variant={
                                                  selectedCategory === category
                                                       ? "default"
                                                       : "outline"
                                             }
                                             size="sm"
                                             onClick={() =>
                                                  setSelectedCategory(category)
                                             }
                                             className={
                                                  selectedCategory === category
                                                       ? "bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 px-6 py-3"
                                                       : "hover:bg-orange-50 px-6 py-3 transition-all duration-200"
                                             }
                                        >
                                             {category}
                                        </Button>
                                   ))}
                              </div>
                         </div>
                    </div>
               </section>

               <div className="container mx-auto px-6 py-20">
                    {/* Featured Posts */}
                    {featuredPosts.length > 0 && (
                         <section className="mb-20">
                              <div className="flex items-center mb-12 animate-in fade-in duration-700">
                                   <TrendingUp className="w-6 h-6 text-orange-600 mr-3" />
                                   <h2 className="text-3xl font-bold text-gray-900">
                                        Featured Articles
                                   </h2>
                              </div>

                              <div className="grid lg:grid-cols-2 gap-10">
                                   {featuredPosts.map((post, index) => (
                                        <Card
                                             key={post.id}
                                             className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-0 shadow-lg overflow-hidden bg-white animate-in slide-in-from-bottom"
                                             style={{
                                                  animationDelay: `${
                                                       index * 200
                                                  }ms`,
                                             }}
                                        >
                                             <div className="relative">
                                                  <Image
                                                       src={
                                                            post.image ||
                                                            "/placeholder.svg"
                                                       }
                                                       alt={post.title}
                                                       width={400}
                                                       height={200}
                                                       className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                                                  />
                                                  <Badge className="absolute top-6 left-6 bg-gradient-to-r from-orange-600 to-orange-500 text-white shadow-lg">
                                                       Featured
                                                  </Badge>
                                                  <Badge className="absolute top-6 right-6 bg-white/90 text-gray-800 shadow-sm">
                                                       {post.category}
                                                  </Badge>
                                             </div>

                                             <CardHeader className="p-8">
                                                  <div className="flex items-center text-sm text-gray-500 mb-4 space-x-6">
                                                       <div className="flex items-center">
                                                            <User className="w-4 h-4 mr-2" />
                                                            <span>
                                                                 {post.author}
                                                            </span>
                                                       </div>
                                                       <div className="flex items-center">
                                                            <Calendar className="w-4 h-4 mr-2" />
                                                            <span>
                                                                 {new Date(
                                                                      post.date
                                                                 ).toLocaleDateString()}
                                                            </span>
                                                       </div>
                                                       <div className="flex items-center">
                                                            <Clock className="w-4 h-4 mr-2" />
                                                            <span>
                                                                 {post.readTime}
                                                            </span>
                                                       </div>
                                                  </div>
                                                  <CardTitle className="text-2xl group-hover:text-orange-600 transition-colors duration-300 line-clamp-2 leading-tight mb-4">
                                                       {post.title}
                                                  </CardTitle>
                                                  <CardDescription className="text-gray-600 line-clamp-3 leading-relaxed text-base">
                                                       {post.excerpt}
                                                  </CardDescription>
                                             </CardHeader>

                                             <CardContent className="px-8 pb-8">
                                                  <div className="flex flex-wrap gap-2 mb-6">
                                                       {post.tags
                                                            .slice(0, 3)
                                                            .map(
                                                                 (
                                                                      tag,
                                                                      index
                                                                 ) => (
                                                                      <Badge
                                                                           key={
                                                                                index
                                                                           }
                                                                           variant="outline"
                                                                           className="text-xs"
                                                                      >
                                                                           {tag}
                                                                      </Badge>
                                                                 )
                                                            )}
                                                  </div>

                                                  <Link
                                                       href={`/blog/${post.id}`}
                                                  >
                                                       <Button className="w-full bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 transition-all duration-300 hover:scale-105 shadow-md py-6">
                                                            Read More
                                                            <ArrowRight className="w-4 h-4 ml-2" />
                                                       </Button>
                                                  </Link>
                                             </CardContent>
                                        </Card>
                                   ))}
                              </div>
                         </section>
                    )}

                    {/* Regular Posts */}
                    <section>
                         <div className="flex items-center mb-12 animate-in fade-in duration-700">
                              <Lightbulb className="w-6 h-6 text-orange-600 mr-3" />
                              <h2 className="text-3xl font-bold text-gray-900">
                                   Latest Articles
                              </h2>
                         </div>

                         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                              {regularPosts.map((post, index) => (
                                   <Card
                                        key={post.id}
                                        className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-0 shadow-lg overflow-hidden bg-white animate-in slide-in-from-bottom"
                                        style={{
                                             animationDelay: `${index * 100}ms`,
                                        }}
                                   >
                                        <div className="relative">
                                             <Image
                                                  src={
                                                       post.image ||
                                                       "/placeholder.svg"
                                                  }
                                                  alt={post.title}
                                                  width={400}
                                                  height={200}
                                                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                                             />
                                             <Badge className="absolute top-4 left-4 bg-white/90 text-gray-800 shadow-sm">
                                                  {post.category}
                                             </Badge>
                                        </div>

                                        <CardHeader className="p-6">
                                             <div className="flex items-center text-sm text-gray-500 mb-3 space-x-4">
                                                  <div className="flex items-center">
                                                       <User className="w-4 h-4 mr-1" />
                                                       <span>
                                                            {post.author}
                                                       </span>
                                                  </div>
                                                  <div className="flex items-center">
                                                       <Clock className="w-4 h-4 mr-1" />
                                                       <span>
                                                            {post.readTime}
                                                       </span>
                                                  </div>
                                             </div>
                                             <CardTitle className="text-lg group-hover:text-orange-600 transition-colors duration-300 line-clamp-2 leading-tight mb-3">
                                                  {post.title}
                                             </CardTitle>
                                             <CardDescription className="text-gray-600 line-clamp-3 leading-relaxed">
                                                  {post.excerpt}
                                             </CardDescription>
                                        </CardHeader>

                                        <CardContent className="px-6 pb-6">
                                             <div className="flex items-center justify-between mb-4">
                                                  <div className="flex items-center text-sm text-gray-500">
                                                       <Calendar className="w-4 h-4 mr-1" />
                                                       {new Date(
                                                            post.date
                                                       ).toLocaleDateString()}
                                                  </div>
                                             </div>

                                             <div className="flex flex-wrap gap-2 mb-6">
                                                  {post.tags
                                                       .slice(0, 2)
                                                       .map((tag, index) => (
                                                            <Badge
                                                                 key={index}
                                                                 variant="outline"
                                                                 className="text-xs"
                                                            >
                                                                 {tag}
                                                            </Badge>
                                                       ))}
                                             </div>

                                             <Link href={`/blog/${post.id}`}>
                                                  <Button
                                                       variant="outline"
                                                       className="w-full hover:bg-orange-50 bg-transparent transition-all duration-300 hover:scale-105 py-6"
                                                  >
                                                       Read More
                                                       <ArrowRight className="w-4 h-4 ml-2" />
                                                  </Button>
                                             </Link>
                                        </CardContent>
                                   </Card>
                              ))}
                         </div>

                         {filteredPosts.length === 0 && (
                              <div className="text-center py-20 animate-in fade-in duration-700">
                                   <div className="text-6xl mb-6">📝</div>
                                   <h3 className="text-3xl font-bold text-gray-900 mb-4">
                                        No articles found
                                   </h3>
                                   <p className="text-lg text-gray-600 mb-8">
                                        Try adjusting your search criteria or
                                        browse all articles
                                   </p>
                                   <Button
                                        onClick={() => {
                                             setSearchTerm("");
                                             setSelectedCategory("All");
                                        }}
                                        className="bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 px-8 py-6 text-lg transition-all duration-300 hover:scale-105"
                                   >
                                        Clear Filters
                                   </Button>
                              </div>
                         )}
                    </section>
               </div>

               {/* Newsletter Signup */}
               <section className="py-20 bg-gradient-to-r from-orange-600 to-orange-500 text-white relative overflow-hidden">
                    <div className="absolute inset-0 bg-black/5"></div>
                    <div className="container mx-auto px-6 text-center relative z-10">
                         <h2 className="text-4xl font-bold mb-6">
                              Never Miss an Update
                         </h2>
                         <p className="text-xl mb-12 opacity-90 max-w-3xl mx-auto leading-relaxed">
                              Subscribe to our newsletter and get the latest
                              coding tips, educational insights, and course
                              updates delivered to your inbox.
                         </p>

                         <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                              <Input
                                   type="email"
                                   placeholder="Enter your email"
                                   className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-white/70 backdrop-blur-sm py-6 px-6 text-lg"
                              />
                              <Button className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-6 text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg">
                                   Subscribe
                              </Button>
                         </div>
                    </div>
               </section>

               <Footer />
          </div>
     );
}

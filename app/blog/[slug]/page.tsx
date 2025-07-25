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
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
     Code,
     Calendar,
     User,
     Clock,
     ArrowLeft,
     Share2,
     BookOpen,
     Heart,
     MessageCircle,
     Eye,
     ThumbsUp,
     Twitter,
     Facebook,
     Linkedin,
     Copy,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

// Mock blog post data - in a real app, this would come from an API
const blogPost = {
     id: 1,
     title: "10 Fun Python Projects for Kids to Build This Summer",
     excerpt: "Discover exciting Python projects that will keep young programmers engaged and learning throughout the summer break.",
     content: `
    <p>Summer is the perfect time for kids to dive deeper into programming and explore their creativity through code. Python, with its simple syntax and powerful capabilities, offers endless possibilities for young minds to create amazing projects.</p>
    
    <p>In this comprehensive guide, we'll explore 10 exciting Python projects that are perfect for kids during their summer break. These projects are designed to be fun, educational, and progressively challenging.</p>
    
    <h2>1. Create a Simple Calculator</h2>
    <p>Start with the basics! Building a calculator helps kids understand fundamental programming concepts like functions, user input, and mathematical operations. This project teaches:</p>
    <ul>
      <li>Basic arithmetic operations</li>
      <li>User input handling</li>
      <li>Function creation and calling</li>
      <li>Error handling basics</li>
    </ul>
    
    <h2>2. Build a Number Guessing Game</h2>
    <p>This classic programming project introduces kids to random number generation, loops, and conditional statements. The computer picks a random number, and the player has to guess it with hints like "too high" or "too low."</p>
    
    <h2>3. Design a Simple Drawing Program</h2>
    <p>Using Python's turtle graphics library, kids can create beautiful drawings and patterns. This project combines programming with art, making it especially engaging for creative minds.</p>
    
    <h2>4. Create a Password Generator</h2>
    <p>In today's digital world, understanding password security is crucial. Kids can build a program that generates strong, random passwords while learning about string manipulation and randomization.</p>
    
    <h2>5. Build a Simple Quiz Game</h2>
    <p>Create an interactive quiz game with multiple-choice questions. This project teaches file handling, data structures like lists and dictionaries, and score tracking.</p>
    
    <h2>6. Make a Weather App</h2>
    <p>Using APIs, kids can create a simple weather application that fetches real-time weather data. This introduces them to working with external data sources and JSON parsing.</p>
    
    <h2>7. Create a Simple Chatbot</h2>
    <p>Build a basic chatbot that can respond to user inputs. This project introduces natural language processing concepts and pattern matching.</p>
    
    <h2>8. Design a Digital Clock</h2>
    <p>Create a digital clock display using Python's datetime module and tkinter for the GUI. This project teaches time handling and basic GUI development.</p>
    
    <h2>9. Build a Simple Game with Pygame</h2>
    <p>Introduction to game development using the Pygame library. Kids can create simple games like Pong or Snake, learning about game loops, collision detection, and graphics.</p>
    
    <h2>10. Create a Personal Expense Tracker</h2>
    <p>Build a program to track daily expenses, teaching kids about file I/O, data persistence, and basic financial literacy through programming.</p>
    
    <h2>Getting Started Tips</h2>
    <p>Here are some tips to help kids succeed with these projects:</p>
    <ul>
      <li>Start with simpler projects and gradually work up to more complex ones</li>
      <li>Don't be afraid to make mistakes – they're part of learning!</li>
      <li>Use online resources and documentation when stuck</li>
      <li>Share your projects with friends and family</li>
      <li>Consider joining online coding communities for kids</li>
    </ul>
    
    <h2>Conclusion</h2>
    <p>These Python projects offer a perfect blend of fun and learning for kids during their summer break. Each project builds upon fundamental programming concepts while creating something tangible and exciting. Remember, the goal isn't just to complete the projects, but to understand the underlying concepts and develop problem-solving skills that will serve them well in their coding journey.</p>
    
    <p>At Bingo Academy, we encourage hands-on learning through projects like these. Our summer coding camps provide the perfect environment for kids to explore these projects with guidance from experienced instructors.</p>
  `,
     author: "Sarah Johnson",
     authorBio:
          "Senior Python instructor at Bingo Academy with 8+ years of experience teaching kids programming.",
     authorImage: "https://randomuser.me/api/portraits/women/44.jpg",
     date: "2024-01-15",
     readTime: "8 min read",
     category: "Python",
     image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80",
     featured: true,
     tags: ["Python", "Kids", "Projects", "Summer", "Programming", "Education"],
     views: 1250,
     likes: 89,
     comments: 23,
};

const relatedPosts = [
     {
          id: 2,
          title: "Why Scratch Programming is Perfect for Young Learners",
          excerpt: "Learn how visual programming with Scratch helps children develop logical thinking and creativity.",
          image: "https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=250&q=80",
          category: "Scratch",
          readTime: "4 min read",
     },
     {
          id: 3,
          title: "The Future of AI Education for Students",
          excerpt: "Exploring how artificial intelligence is shaping the future of education and what students need to know.",
          image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=250&q=80",
          category: "AI",
          readTime: "7 min read",
     },
     {
          id: 4,
          title: "Building Your First Robot: A Beginner's Guide",
          excerpt: "Step-by-step guide to creating your first robot using Arduino and basic electronic components.",
          image: "https://images.unsplash.com/photo-1631378297854-185cff6b0986?auto=format&fit=crop&w=250&q=80",
          category: "Robotics",
          readTime: "6 min read",
     },
];

export default function BlogPostPage() {
     const [comment, setComment] = useState("");
     const [email, setEmail] = useState("");
     const [name, setName] = useState("");
     const [liked, setLiked] = useState(false);
     const [showShareMenu, setShowShareMenu] = useState(false);

     const handleCommentSubmit = (e: React.FormEvent) => {
          e.preventDefault();
          console.log("Comment submitted:", { name, email, comment });
          alert(
               "Thank you for your comment! It will be reviewed before publishing."
          );
          setComment("");
          setEmail("");
          setName("");
     };

     const handleLike = () => {
          setLiked(!liked);
     };

     const handleShare = (platform: string) => {
          const url = window.location.href;
          const title = blogPost.title;

          switch (platform) {
               case "twitter":
                    window.open(
                         `https://twitter.com/intent/tweet?text=${encodeURIComponent(
                              title
                         )}&url=${encodeURIComponent(url)}`
                    );
                    break;
               case "facebook":
                    window.open(
                         `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                              url
                         )}`
                    );
                    break;
               case "linkedin":
                    window.open(
                         `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
                              url
                         )}`
                    );
                    break;
               case "copy":
                    navigator.clipboard.writeText(url);
                    alert("Link copied to clipboard!");
                    break;
          }
          setShowShareMenu(false);
     };

     return (
          <div className="min-h-screen bg-gradient-to-br from-orange-50 to-orange-50">
               {/* Header */}
               <header className="bg-white shadow-sm sticky top-0 z-50">
                    <div className="container mx-auto px-4 py-4">
                         <nav className="flex items-center justify-between">
                              <Link
                                   href="/"
                                   className="flex items-center space-x-2"
                              >
                                   <div className="w-10 h-10 bg-gradient-to-r from-orange-600 to-orange-500 rounded-lg flex items-center justify-center">
                                        <Code className="w-6 h-6 text-white" />
                                   </div>
                                   <span className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent">
                                        Bingo Academy
                                   </span>
                              </Link>

                              <div className="hidden md:flex items-center space-x-8">
                                   <Link
                                        href="/"
                                        className="text-gray-700 hover:text-orange-600 transition-colors"
                                   >
                                        Home
                                   </Link>
                                   <Link
                                        href="/courses"
                                        className="text-gray-700 hover:text-orange-600 transition-colors"
                                   >
                                        Courses
                                   </Link>
                                   <Link
                                        href="/about"
                                        className="text-gray-700 hover:text-orange-600 transition-colors"
                                   >
                                        About
                                   </Link>
                                   <Link
                                        href="/blog"
                                        className="text-orange-600 font-semibold"
                                   >
                                        Blog
                                   </Link>
                                   <Link
                                        href="/events"
                                        className="text-gray-700 hover:text-orange-600 transition-colors"
                                   >
                                        Events
                                   </Link>
                                   <Link
                                        href="/contact"
                                        className="text-gray-700 hover:text-orange-600 transition-colors"
                                   >
                                        Contact
                                   </Link>
                              </div>

                              <Button className="bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600">
                                   Enroll Now
                              </Button>
                         </nav>
                    </div>
               </header>

               {/* Breadcrumb */}
               <div className="bg-white border-b">
                    <div className="container mx-auto px-4 py-4">
                         <div className="flex items-center space-x-2 text-sm">
                              <Link
                                   href="/"
                                   className="text-gray-500 hover:text-orange-600"
                              >
                                   Home
                              </Link>
                              <span className="text-gray-400">/</span>
                              <Link
                                   href="/blog"
                                   className="text-gray-500 hover:text-orange-600"
                              >
                                   Blog
                              </Link>
                              <span className="text-gray-400">/</span>
                              <span className="text-gray-900">
                                   {blogPost.title}
                              </span>
                         </div>
                    </div>
               </div>

               <div className="container mx-auto px-4 py-8">
                    <div className="grid lg:grid-cols-4 gap-8">
                         {/* Main Content */}
                         <div className="lg:col-span-3">
                              {/* Article Header */}
                              <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
                                   <div className="flex items-center mb-4">
                                        <Link
                                             href="/blog"
                                             className="flex items-center text-orange-600 hover:text-orange-700 mr-4"
                                        >
                                             <ArrowLeft className="w-4 h-4 mr-1" />
                                             Back to Blog
                                        </Link>
                                        <Badge className="bg-orange-100 text-orange-800">
                                             {blogPost.category}
                                        </Badge>
                                        {blogPost.featured && (
                                             <Badge className="ml-2 bg-yellow-500 text-white">
                                                  Featured
                                             </Badge>
                                        )}
                                   </div>

                                   <h1 className="text-4xl font-bold text-gray-900 mb-4">
                                        {blogPost.title}
                                   </h1>

                                   <p className="text-xl text-gray-600 mb-6">
                                        {blogPost.excerpt}
                                   </p>

                                   <div className="flex flex-wrap items-center gap-6 mb-6">
                                        <div className="flex items-center">
                                             <Image
                                                  src={
                                                       blogPost.authorImage ||
                                                       "/placeholder.svg"
                                                  }
                                                  alt={blogPost.author}
                                                  width={40}
                                                  height={40}
                                                  className="rounded-full mr-3"
                                             />
                                             <div>
                                                  <div className="font-semibold text-gray-900">
                                                       {blogPost.author}
                                                  </div>
                                                  <div className="text-sm text-gray-500">
                                                       Author
                                                  </div>
                                             </div>
                                        </div>
                                        <div className="flex items-center text-gray-600">
                                             <Calendar className="w-4 h-4 mr-2" />
                                             {new Date(
                                                  blogPost.date
                                             ).toLocaleDateString()}
                                        </div>
                                        <div className="flex items-center text-gray-600">
                                             <Clock className="w-4 h-4 mr-2" />
                                             {blogPost.readTime}
                                        </div>
                                        <div className="flex items-center text-gray-600">
                                             <Eye className="w-4 h-4 mr-2" />
                                             {blogPost.views} views
                                        </div>
                                   </div>

                                   <div className="flex items-center justify-between">
                                        <div className="flex flex-wrap gap-2">
                                             {blogPost.tags.map(
                                                  (tag, index) => (
                                                       <Badge
                                                            key={index}
                                                            variant="outline"
                                                            className="text-xs"
                                                       >
                                                            {tag}
                                                       </Badge>
                                                  )
                                             )}
                                        </div>

                                        <div className="flex items-center space-x-4">
                                             <Button
                                                  variant="outline"
                                                  size="sm"
                                                  onClick={handleLike}
                                                  className={`${
                                                       liked
                                                            ? "bg-orange-50 text-orange-600 border-orange-600"
                                                            : ""
                                                  }`}
                                             >
                                                  <Heart
                                                       className={`w-4 h-4 mr-2 ${
                                                            liked
                                                                 ? "fill-current"
                                                                 : ""
                                                       }`}
                                                  />
                                                  {blogPost.likes +
                                                       (liked ? 1 : 0)}
                                             </Button>
                                             <div className="relative">
                                                  <Button
                                                       variant="outline"
                                                       size="sm"
                                                       onClick={() =>
                                                            setShowShareMenu(
                                                                 !showShareMenu
                                                            )
                                                       }
                                                  >
                                                       <Share2 className="w-4 h-4 mr-2" />
                                                       Share
                                                  </Button>
                                                  {showShareMenu && (
                                                       <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border z-10">
                                                            <div className="py-2">
                                                                 <button
                                                                      onClick={() =>
                                                                           handleShare(
                                                                                "twitter"
                                                                           )
                                                                      }
                                                                      className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                                                 >
                                                                      <Twitter className="w-4 h-4 mr-3" />
                                                                      Share on
                                                                      Twitter
                                                                 </button>
                                                                 <button
                                                                      onClick={() =>
                                                                           handleShare(
                                                                                "facebook"
                                                                           )
                                                                      }
                                                                      className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                                                 >
                                                                      <Facebook className="w-4 h-4 mr-3" />
                                                                      Share on
                                                                      Facebook
                                                                 </button>
                                                                 <button
                                                                      onClick={() =>
                                                                           handleShare(
                                                                                "linkedin"
                                                                           )
                                                                      }
                                                                      className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                                                 >
                                                                      <Linkedin className="w-4 h-4 mr-3" />
                                                                      Share on
                                                                      LinkedIn
                                                                 </button>
                                                                 <button
                                                                      onClick={() =>
                                                                           handleShare(
                                                                                "copy"
                                                                           )
                                                                      }
                                                                      className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                                                 >
                                                                      <Copy className="w-4 h-4 mr-3" />
                                                                      Copy Link
                                                                 </button>
                                                            </div>
                                                       </div>
                                                  )}
                                             </div>
                                        </div>
                                   </div>
                              </div>

                              {/* Featured Image */}
                              <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-8">
                                   <Image
                                        src={
                                             blogPost.image ||
                                             "/placeholder.svg"
                                        }
                                        alt={blogPost.title}
                                        width={800}
                                        height={400}
                                        className="w-full h-80 object-cover"
                                   />
                              </div>

                              {/* Article Content */}
                              <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
                                   <div
                                        className="prose prose-lg max-w-none"
                                        dangerouslySetInnerHTML={{
                                             __html: blogPost.content,
                                        }}
                                   />
                              </div>

                              {/* Author Bio */}
                              <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
                                   <h3 className="text-2xl font-bold text-gray-900 mb-6">
                                        About the Author
                                   </h3>
                                   <div className="flex items-start space-x-6">
                                        <Image
                                             src={
                                                  blogPost.authorImage ||
                                                  "/placeholder.svg"
                                             }
                                             alt={blogPost.author}
                                             width={80}
                                             height={80}
                                             className="rounded-full"
                                        />
                                        <div className="flex-1">
                                             <h4 className="text-xl font-semibold text-gray-900 mb-2">
                                                  {blogPost.author}
                                             </h4>
                                             <p className="text-gray-600 leading-relaxed">
                                                  {blogPost.authorBio}
                                             </p>
                                             <div className="flex items-center mt-4 space-x-4">
                                                  <Button
                                                       size="sm"
                                                       variant="outline"
                                                       className="bg-transparent"
                                                  >
                                                       <User className="w-4 h-4 mr-2" />
                                                       View Profile
                                                  </Button>
                                             </div>
                                        </div>
                                   </div>
                              </div>

                              {/* Comments Section */}
                              <div className="bg-white rounded-2xl shadow-lg p-8">
                                   <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                                        <MessageCircle className="w-6 h-6 mr-2" />
                                        Comments ({blogPost.comments})
                                   </h3>

                                   {/* Comment Form */}
                                   <Card className="mb-8">
                                        <CardHeader>
                                             <CardTitle>
                                                  Leave a Comment
                                             </CardTitle>
                                             <CardDescription>
                                                  Share your thoughts about this
                                                  article
                                             </CardDescription>
                                        </CardHeader>
                                        <CardContent>
                                             <form
                                                  onSubmit={handleCommentSubmit}
                                                  className="space-y-4"
                                             >
                                                  <div className="grid md:grid-cols-2 gap-4">
                                                       <div>
                                                            <Label htmlFor="name">
                                                                 Name *
                                                            </Label>
                                                            <Input
                                                                 id="name"
                                                                 value={name}
                                                                 onChange={(
                                                                      e
                                                                 ) =>
                                                                      setName(
                                                                           e
                                                                                .target
                                                                                .value
                                                                      )
                                                                 }
                                                                 required
                                                            />
                                                       </div>
                                                       <div>
                                                            <Label htmlFor="email">
                                                                 Email *
                                                            </Label>
                                                            <Input
                                                                 id="email"
                                                                 type="email"
                                                                 value={email}
                                                                 onChange={(
                                                                      e
                                                                 ) =>
                                                                      setEmail(
                                                                           e
                                                                                .target
                                                                                .value
                                                                      )
                                                                 }
                                                                 required
                                                            />
                                                       </div>
                                                  </div>

                                                  <div>
                                                       <Label htmlFor="comment">
                                                            Comment *
                                                       </Label>
                                                       <Textarea
                                                            id="comment"
                                                            value={comment}
                                                            onChange={(e) =>
                                                                 setComment(
                                                                      e.target
                                                                           .value
                                                                 )
                                                            }
                                                            placeholder="Share your thoughts..."
                                                            rows={4}
                                                            required
                                                       />
                                                  </div>

                                                  <Button
                                                       type="submit"
                                                       className="bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600"
                                                  >
                                                       Post Comment
                                                  </Button>
                                             </form>
                                        </CardContent>
                                   </Card>

                                   {/* Sample Comments */}
                                   <div className="space-y-6">
                                        {[
                                             {
                                                  name: "Alex Chen",
                                                  date: "2 days ago",
                                                  comment: "Great article! My daughter tried the calculator project and loved it. Looking forward to more projects like this.",
                                                  avatar: "https://randomuser.me/api/portraits/men/32.jpg",
                                             },
                                             {
                                                  name: "Maria Rodriguez",
                                                  date: "1 week ago",
                                                  comment: "These projects are perfect for summer learning. The step-by-step approach makes it easy for kids to follow along.",
                                                  avatar: "https://randomuser.me/api/portraits/women/65.jpg",
                                             },
                                             {
                                                  name: "David Kim",
                                                  date: "2 weeks ago",
                                                  comment: "As a parent, I appreciate how these projects combine fun with learning. My son is excited to try the game development project!",
                                                  avatar: "https://randomuser.me/api/portraits/men/45.jpg",
                                             },
                                        ].map((comment, index) => (
                                             <div
                                                  key={index}
                                                  className="border-b border-gray-200 pb-6 last:border-b-0"
                                             >
                                                  <div className="flex items-start space-x-4">
                                                       <Image
                                                            src={
                                                                 comment.avatar ||
                                                                 "/placeholder.svg"
                                                            }
                                                            alt={comment.name}
                                                            width={40}
                                                            height={40}
                                                            className="rounded-full"
                                                       />
                                                       <div className="flex-1">
                                                            <div className="flex items-center space-x-2 mb-2">
                                                                 <h5 className="font-semibold text-gray-900">
                                                                      {
                                                                           comment.name
                                                                      }
                                                                 </h5>
                                                                 <span className="text-sm text-gray-500">
                                                                      {
                                                                           comment.date
                                                                      }
                                                                 </span>
                                                            </div>
                                                            <p className="text-gray-700">
                                                                 {
                                                                      comment.comment
                                                                 }
                                                            </p>
                                                            <div className="flex items-center mt-3 space-x-4">
                                                                 <Button
                                                                      size="sm"
                                                                      variant="ghost"
                                                                      className="text-gray-500 hover:text-orange-600"
                                                                 >
                                                                      <ThumbsUp className="w-4 h-4 mr-1" />
                                                                      Like
                                                                 </Button>
                                                                 <Button
                                                                      size="sm"
                                                                      variant="ghost"
                                                                      className="text-gray-500 hover:text-orange-600"
                                                                 >
                                                                      Reply
                                                                 </Button>
                                                            </div>
                                                       </div>
                                                  </div>
                                             </div>
                                        ))}
                                   </div>
                              </div>
                         </div>

                         {/* Sidebar */}
                         <div className="space-y-8">
                              {/* Related Posts */}
                              <Card className="shadow-xl border-0">
                                   <CardHeader>
                                        <CardTitle className="flex items-center">
                                             <BookOpen className="w-5 h-5 mr-2" />
                                             Related Articles
                                        </CardTitle>
                                   </CardHeader>
                                   <CardContent className="space-y-4">
                                        {relatedPosts.map((post) => (
                                             <Link
                                                  key={post.id}
                                                  href={`/blog/${post.id}`}
                                             >
                                                  <div className="flex space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer">
                                                       <Image
                                                            src={
                                                                 post.image ||
                                                                 "/placeholder.svg"
                                                            }
                                                            alt={post.title}
                                                            width={80}
                                                            height={60}
                                                            className="rounded-lg object-cover flex-shrink-0"
                                                       />
                                                       <div className="flex-1 min-w-0">
                                                            <h4 className="font-semibold text-sm text-gray-900 line-clamp-2 mb-1">
                                                                 {post.title}
                                                            </h4>
                                                            <div className="flex items-center text-xs text-gray-500 space-x-2">
                                                                 <Badge
                                                                      variant="outline"
                                                                      className="text-xs"
                                                                 >
                                                                      {
                                                                           post.category
                                                                      }
                                                                 </Badge>
                                                                 <span>
                                                                      {
                                                                           post.readTime
                                                                      }
                                                                 </span>
                                                            </div>
                                                       </div>
                                                  </div>
                                             </Link>
                                        ))}
                                   </CardContent>
                              </Card>

                              {/* Newsletter Signup */}
                              <Card className="shadow-xl border-0 bg-gradient-to-br from-orange-50 to-orange-100">
                                   <CardHeader>
                                        <CardTitle className="text-orange-900">
                                             Stay Updated
                                        </CardTitle>
                                        <CardDescription className="text-orange-700">
                                             Get the latest coding tips and
                                             educational content delivered to
                                             your inbox.
                                        </CardDescription>
                                   </CardHeader>
                                   <CardContent>
                                        <div className="space-y-3">
                                             <Input
                                                  type="email"
                                                  placeholder="Enter your email"
                                                  className="bg-white border-orange-200"
                                             />
                                             <Button className="w-full bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600">
                                                  Subscribe
                                             </Button>
                                        </div>
                                   </CardContent>
                              </Card>

                              {/* Popular Tags */}
                              <Card className="shadow-xl border-0">
                                   <CardHeader>
                                        <CardTitle>Popular Tags</CardTitle>
                                   </CardHeader>
                                   <CardContent>
                                        <div className="flex flex-wrap gap-2">
                                             {[
                                                  "Python",
                                                  "Scratch",
                                                  "Web Development",
                                                  "AI",
                                                  "Robotics",
                                                  "Kids",
                                                  "Programming",
                                                  "Education",
                                                  "Projects",
                                                  "Summer",
                                             ].map((tag) => (
                                                  <Badge
                                                       key={tag}
                                                       variant="outline"
                                                       className="cursor-pointer hover:bg-orange-50 hover:border-orange-600"
                                                  >
                                                       {tag}
                                                  </Badge>
                                             ))}
                                        </div>
                                   </CardContent>
                              </Card>
                         </div>
                    </div>
               </div>

               {/* CTA Section */}
               <section className="py-16 bg-gradient-to-r from-orange-600 to-orange-500 text-white">
                    <div className="container mx-auto px-4 text-center">
                         <h2 className="text-4xl font-bold mb-4">
                              Ready to Start Your Coding Journey?
                         </h2>
                         <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                              Join thousands of students who are already
                              learning programming with hands-on projects like
                              the ones mentioned in this article.
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
                                        Get Started Today
                                   </Button>
                              </Link>
                         </div>
                    </div>
               </section>

               {/* Footer */}
               <footer className="bg-gray-900 text-white py-16">
                    <div className="container mx-auto px-4">
                         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                              <div>
                                   <Link
                                        href="/"
                                        className="flex items-center space-x-2 mb-6"
                                   >
                                        <div className="w-10 h-10 bg-gradient-to-r from-orange-600 to-orange-500 rounded-lg flex items-center justify-center">
                                             <Code className="w-6 h-6 text-white" />
                                        </div>
                                        <span className="text-2xl font-bold">
                                             Bingo Academy
                                        </span>
                                   </Link>
                                   <p className="text-gray-400 mb-6">
                                        Empowering the next generation of
                                        programmers and innovators through
                                        quality coding education.
                                   </p>
                              </div>

                              <div>
                                   <h3 className="text-lg font-semibold mb-6">
                                        Quick Links
                                   </h3>
                                   <ul className="space-y-3">
                                        <li>
                                             <Link
                                                  href="/courses"
                                                  className="text-gray-400 hover:text-white transition-colors"
                                             >
                                                  All Courses
                                             </Link>
                                        </li>
                                        <li>
                                             <Link
                                                  href="/about"
                                                  className="text-gray-400 hover:text-white transition-colors"
                                             >
                                                  About Us
                                             </Link>
                                        </li>
                                        <li>
                                             <Link
                                                  href="/blog"
                                                  className="text-gray-400 hover:text-white transition-colors"
                                             >
                                                  Blog
                                             </Link>
                                        </li>
                                        <li>
                                             <Link
                                                  href="/events"
                                                  className="text-gray-400 hover:text-white transition-colors"
                                             >
                                                  Events
                                             </Link>
                                        </li>
                                        <li>
                                             <Link
                                                  href="/contact"
                                                  className="text-gray-400 hover:text-white transition-colors"
                                             >
                                                  Contact
                                             </Link>
                                        </li>
                                   </ul>
                              </div>

                              <div>
                                   <h3 className="text-lg font-semibold mb-6">
                                        Categories
                                   </h3>
                                   <ul className="space-y-3">
                                        <li>
                                             <Link
                                                  href="/blog?category=Python"
                                                  className="text-gray-400 hover:text-white transition-colors"
                                             >
                                                  Python
                                             </Link>
                                        </li>
                                        <li>
                                             <Link
                                                  href="/blog?category=Scratch"
                                                  className="text-gray-400 hover:text-white transition-colors"
                                             >
                                                  Scratch
                                             </Link>
                                        </li>
                                        <li>
                                             <Link
                                                  href="/blog?category=AI"
                                                  className="text-gray-400 hover:text-white transition-colors"
                                             >
                                                  AI & Machine Learning
                                             </Link>
                                        </li>
                                        <li>
                                             <Link
                                                  href="/blog?category=Robotics"
                                                  className="text-gray-400 hover:text-white transition-colors"
                                             >
                                                  Robotics
                                             </Link>
                                        </li>
                                        <li>
                                             <Link
                                                  href="/blog?category=Web Development"
                                                  className="text-gray-400 hover:text-white transition-colors"
                                             >
                                                  Web Development
                                             </Link>
                                        </li>
                                   </ul>
                              </div>

                              <div>
                                   <h3 className="text-lg font-semibold mb-6">
                                        Contact Info
                                   </h3>
                                   <div className="space-y-3 text-gray-400">
                                        <p>
                                             📍 123 Education Street
                                             <br />
                                             Tech City, TC 12345
                                        </p>
                                        <p>📞 (555) 123-4567</p>
                                        <p>✉️ info@bingoacademy.com</p>
                                        <p>
                                             🕒 Mon-Fri: 9AM-6PM
                                             <br />
                                             Sat: 10AM-4PM
                                        </p>
                                   </div>
                              </div>
                         </div>

                         <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
                              <p>
                                   &copy; 2024 Bingo Academy. All rights
                                   reserved. | Privacy Policy | Terms of Service
                              </p>
                         </div>
                    </div>
               </footer>
          </div>
     );
}

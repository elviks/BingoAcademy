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
     Select,
     SelectContent,
     SelectItem,
     SelectTrigger,
     SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
     Code,
     Clock,
     Users,
     Star,
     Play,
     CheckCircle,
     DollarSign,
     User,
     ArrowLeft,
     Download,
     Share2,
     Building,
     GraduationCap,
     Briefcase,
     Target,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/header";

// Mock training program data - in a real app, this would come from an API
const trainingProgramsData = {
     "python-data-science": {
          id: 1,
          title: "Python & Data Science Bootcamp",
          description:
               "Comprehensive training program for organizations to develop Python programming and data science capabilities. Perfect for teams looking to build data-driven solutions.",
          longDescription:
               "This intensive training program is designed for organizations that want to equip their teams with Python programming and data science skills. The program covers everything from basic Python syntax to advanced data analysis, machine learning, and real-world project implementation. Our expert-led approach ensures practical, hands-on learning that can be immediately applied in your organization's projects.",
          duration: "8 weeks",
          level: "Beginner to Intermediate",
          price: "Custom Pricing",
          originalPrice: null,
          rating: 4.9,
          organizationsServed: 45,
          image: "/placeholder.svg?height=400&width=600",
          category: "Python & Data Science",
          organizationType: "All Organizations",
          participants: "15-25 professionals",
          format: "Hybrid (Online + In-Person)",
          instructor: {
               name: "Dr. Sarah Johnson",
               bio: "Senior Data Scientist and Training Director with 12+ years of experience in Python development, data science, and organizational training.",
               image: "/placeholder.svg?height=80&width=80",
          },
          features: [
               "8 weeks of comprehensive training",
               "Customized curriculum for your organization",
               "Hands-on project development",
               "Industry expert instructors",
               "Certificate of completion",
               "Post-training support and consultation",
               "Flexible scheduling options",
               "Real-world case studies",
          ],
          curriculum: [
               {
                    week: 1,
                    title: "Python Fundamentals for Business",
                    topics: [
                         "Python setup and environment",
                         "Basic syntax and data types",
                         "Control structures",
                         "Functions and modules",
                    ],
               },
               {
                    week: 2,
                    title: "Data Manipulation & Analysis",
                    topics: [
                         "Pandas for data analysis",
                         "NumPy for numerical computing",
                         "Data cleaning and preprocessing",
                         "Exploratory data analysis",
                    ],
               },
               {
                    week: 3,
                    title: "Data Visualization",
                    topics: [
                         "Matplotlib and Seaborn",
                         "Interactive visualizations",
                         "Dashboard creation",
                         "Storytelling with data",
                    ],
               },
               {
                    week: 4,
                    title: "Statistical Analysis",
                    topics: [
                         "Descriptive statistics",
                         "Hypothesis testing",
                         "Correlation analysis",
                         "Statistical modeling",
                    ],
               },
               {
                    week: 5,
                    title: "Machine Learning Basics",
                    topics: [
                         "Supervised learning",
                         "Classification algorithms",
                         "Regression models",
                         "Model evaluation",
                    ],
               },
               {
                    week: 6,
                    title: "Advanced ML & AI",
                    topics: [
                         "Unsupervised learning",
                         "Neural networks",
                         "Deep learning basics",
                         "AI applications",
                    ],
               },
               {
                    week: 7,
                    title: "Real-World Projects",
                    topics: [
                         "Project planning",
                         "Data pipeline development",
                         "Model deployment",
                         "Performance optimization",
                    ],
               },
               {
                    week: 8,
                    title: "Implementation & Strategy",
                    topics: [
                         "Organizational integration",
                         "Best practices",
                         "Team collaboration",
                         "Future roadmap planning",
                    ],
               },
          ],
          prerequisites: [
               "Basic computer literacy",
               "No prior programming experience required",
               "Team commitment to learning",
               "Organizational support for implementation",
          ],
          outcomes: [
               "Develop Python programming expertise across your team",
               "Build data-driven decision-making capabilities",
               "Implement machine learning solutions for business problems",
               "Create automated data processing pipelines",
               "Establish data science best practices in your organization",
               "Prepare for advanced AI and ML initiatives",
          ],
          targetOrganizations: [
               "Corporations",
               "Universities",
               "Government Agencies",
               "Non-Profit Organizations",
          ],
          deliveryOptions: [
               "In-Person Training",
               "Online Sessions",
               "Hybrid Approach",
               "Custom Schedule",
          ],
     },
     "ai-machine-learning": {
          id: 2,
          title: "AI & Machine Learning Masterclass",
          description:
               "Advanced training program for organizations to implement cutting-edge AI and machine learning solutions. Transform your business with intelligent automation and predictive analytics.",
          longDescription:
               "This comprehensive AI and machine learning training program is designed for organizations ready to embrace the future of technology. From neural networks to natural language processing, our expert-led program covers the most advanced AI technologies and their practical business applications.",
          duration: "10 weeks",
          level: "Intermediate to Advanced",
          price: "Custom Pricing",
          originalPrice: null,
          rating: 4.8,
          organizationsServed: 32,
          image: "/placeholder.svg?height=400&width=600",
          category: "AI & Machine Learning",
          organizationType: "Corporations & Universities",
          participants: "10-20 professionals",
          format: "Hybrid (Online + In-Person)",
          instructor: {
               name: "Dr. Michael Chen",
               bio: "AI Research Director and Machine Learning Expert with 15+ years of experience in artificial intelligence, deep learning, and enterprise AI solutions.",
               image: "/placeholder.svg?height=80&width=80",
          },
          features: [
               "10 weeks of intensive AI training",
               "Customized AI strategy development",
               "Hands-on deep learning projects",
               "Industry-leading AI experts",
               "Certificate of completion",
               "Post-training AI consultation",
               "Flexible scheduling options",
               "Real-world AI case studies",
          ],
          curriculum: [
               {
                    week: 1,
                    title: "AI Fundamentals & Strategy",
                    topics: [
                         "AI landscape and business applications",
                         "Machine learning vs deep learning",
                         "AI strategy development",
                         "Ethical AI considerations",
                    ],
               },
               {
                    week: 2,
                    title: "Advanced Machine Learning",
                    topics: [
                         "Supervised learning algorithms",
                         "Unsupervised learning techniques",
                         "Model optimization and tuning",
                         "Performance evaluation metrics",
                    ],
               },
               {
                    week: 3,
                    title: "Neural Networks & Deep Learning",
                    topics: [
                         "Neural network architectures",
                         "Backpropagation and optimization",
                         "Convolutional Neural Networks (CNN)",
                         "Recurrent Neural Networks (RNN)",
                    ],
               },
               {
                    week: 4,
                    title: "Natural Language Processing",
                    topics: [
                         "Text preprocessing and analysis",
                         "Sentiment analysis",
                         "Language models and transformers",
                         "Chatbot development",
                    ],
               },
               {
                    week: 5,
                    title: "Computer Vision",
                    topics: [
                         "Image processing fundamentals",
                         "Object detection and recognition",
                         "Image segmentation",
                         "Video analysis",
                    ],
               },
               {
                    week: 6,
                    title: "AI for Business Applications",
                    topics: [
                         "Predictive analytics",
                         "Recommendation systems",
                         "Anomaly detection",
                         "Process automation",
                    ],
               },
               {
                    week: 7,
                    title: "AI Deployment & MLOps",
                    topics: [
                         "Model deployment strategies",
                         "MLOps best practices",
                         "Model monitoring and maintenance",
                         "Scalability considerations",
                    ],
               },
               {
                    week: 8,
                    title: "Advanced AI Technologies",
                    topics: [
                         "Generative AI and GANs",
                         "Reinforcement learning",
                         "Edge AI and IoT",
                         "AI ethics and governance",
                    ],
               },
               {
                    week: 9,
                    title: "AI Project Implementation",
                    topics: [
                         "AI project planning and scoping",
                         "Team collaboration and workflows",
                         "Risk assessment and mitigation",
                         "Success metrics and KPIs",
                    ],
               },
               {
                    week: 10,
                    title: "Future of AI & Strategy",
                    topics: [
                         "Emerging AI technologies",
                         "AI roadmap development",
                         "Competitive advantage strategies",
                         "Long-term AI vision",
                    ],
               },
          ],
          prerequisites: [
               "Basic programming knowledge (Python preferred)",
               "Understanding of statistics and mathematics",
               "Organizational commitment to AI transformation",
               "Dedicated team for AI implementation",
          ],
          outcomes: [
               "Implement advanced AI and ML solutions in your organization",
               "Develop custom AI models for business problems",
               "Build scalable AI infrastructure and workflows",
               "Create AI-driven business strategies and roadmaps",
               "Establish AI governance and ethical frameworks",
               "Lead AI transformation initiatives",
          ],
          targetOrganizations: [
               "Corporations",
               "Universities",
               "Technology Companies",
               "Research Institutions",
          ],
          deliveryOptions: [
               "In-Person Training",
               "Online Sessions",
               "Hybrid Approach",
               "Custom Schedule",
          ],
     },
     "cloud-devops": {
          id: 3,
          title: "Cloud Computing & DevOps Bootcamp",
          description:
               "Comprehensive training program for organizations to master cloud platforms and DevOps practices. Build scalable, reliable, and efficient infrastructure.",
          longDescription:
               "This intensive cloud computing and DevOps training program equips organizations with the skills to build, deploy, and maintain modern cloud-native applications. From AWS and Azure to Kubernetes and CI/CD pipelines, our program covers everything needed for successful cloud transformation.",
          duration: "6 weeks",
          level: "Intermediate",
          price: "Custom Pricing",
          originalPrice: null,
          rating: 4.7,
          organizationsServed: 38,
          image: "/placeholder.svg?height=400&width=600",
          category: "Cloud & DevOps",
          organizationType: "All Organizations",
          participants: "12-20 professionals",
          format: "Hybrid (Online + In-Person)",
          instructor: {
               name: "Emma Davis",
               bio: "Cloud Architecture Expert and DevOps Engineer with 10+ years of experience in cloud platforms, containerization, and infrastructure automation.",
               image: "/placeholder.svg?height=80&width=80",
          },
          features: [
               "6 weeks of comprehensive cloud training",
               "Multi-cloud platform coverage",
               "Hands-on infrastructure projects",
               "Industry expert instructors",
               "Certificate of completion",
               "Post-training cloud consultation",
               "Flexible scheduling options",
               "Real-world cloud case studies",
          ],
          curriculum: [
               {
                    week: 1,
                    title: "Cloud Fundamentals & Strategy",
                    topics: [
                         "Cloud computing models (IaaS, PaaS, SaaS)",
                         "Cloud service providers overview",
                         "Cloud migration strategies",
                         "Cost optimization and governance",
                    ],
               },
               {
                    week: 2,
                    title: "AWS & Azure Deep Dive",
                    topics: [
                         "Core AWS services and architecture",
                         "Azure services and integration",
                         "Multi-cloud strategies",
                         "Security and compliance",
                    ],
               },
               {
                    week: 3,
                    title: "Containerization & Orchestration",
                    topics: [
                         "Docker containerization",
                         "Kubernetes orchestration",
                         "Container security",
                         "Microservices architecture",
                    ],
               },
               {
                    week: 4,
                    title: "DevOps Practices & Tools",
                    topics: [
                         "CI/CD pipeline development",
                         "Infrastructure as Code (IaC)",
                         "Configuration management",
                         "Monitoring and logging",
                    ],
               },
               {
                    week: 5,
                    title: "Advanced Cloud Services",
                    topics: [
                         "Serverless computing",
                         "Cloud-native databases",
                         "API management",
                         "Edge computing",
                    ],
               },
               {
                    week: 6,
                    title: "Cloud Security & Operations",
                    topics: [
                         "Cloud security best practices",
                         "Identity and access management",
                         "Disaster recovery planning",
                         "Performance optimization",
                    ],
               },
          ],
          prerequisites: [
               "Basic IT infrastructure knowledge",
               "Understanding of networking concepts",
               "Organizational cloud strategy alignment",
               "Technical team availability",
          ],
          outcomes: [
               "Design and implement cloud-native architectures",
               "Build automated CI/CD pipelines",
               "Manage containerized applications with Kubernetes",
               "Implement cloud security and compliance measures",
               "Optimize cloud costs and performance",
               "Establish DevOps culture and practices",
          ],
          targetOrganizations: [
               "Corporations",
               "Technology Companies",
               "Government Agencies",
               "Educational Institutions",
          ],
          deliveryOptions: [
               "In-Person Training",
               "Online Sessions",
               "Hybrid Approach",
               "Custom Schedule",
          ],
     },
     cybersecurity: {
          id: 4,
          title: "Cybersecurity & Information Security",
          description:
               "Comprehensive cybersecurity training program for organizations to protect against evolving threats and ensure data security compliance.",
          longDescription:
               "This intensive cybersecurity training program prepares organizations to defend against modern cyber threats while ensuring compliance with security regulations. From threat detection to incident response, our program covers all aspects of organizational cybersecurity.",
          duration: "8 weeks",
          level: "Intermediate",
          price: "Custom Pricing",
          originalPrice: null,
          rating: 4.9,
          organizationsServed: 28,
          image: "/placeholder.svg?height=400&width=600",
          category: "Cybersecurity",
          organizationType: "All Organizations",
          participants: "10-15 professionals",
          format: "Hybrid (Online + In-Person)",
          instructor: {
               name: "Alex Thompson",
               bio: "Cybersecurity Expert and Information Security Consultant with 12+ years of experience in threat intelligence, incident response, and security architecture.",
               image: "/placeholder.svg?height=80&width=80",
          },
          features: [
               "8 weeks of comprehensive security training",
               "Threat simulation and response",
               "Hands-on security projects",
               "Industry expert instructors",
               "Certificate of completion",
               "Post-training security consultation",
               "Flexible scheduling options",
               "Real-world security case studies",
          ],
          curriculum: [
               {
                    week: 1,
                    title: "Cybersecurity Fundamentals",
                    topics: [
                         "Security principles and frameworks",
                         "Threat landscape analysis",
                         "Risk assessment methodologies",
                         "Security governance",
                    ],
               },
               {
                    week: 2,
                    title: "Network Security",
                    topics: [
                         "Network architecture security",
                         "Firewall configuration",
                         "Intrusion detection systems",
                         "VPN and remote access security",
                    ],
               },
               {
                    week: 3,
                    title: "Application Security",
                    topics: [
                         "Secure coding practices",
                         "Web application security",
                         "API security",
                         "Mobile application security",
                    ],
               },
               {
                    week: 4,
                    title: "Cloud Security",
                    topics: [
                         "Cloud security models",
                         "Identity and access management",
                         "Data protection in the cloud",
                         "Cloud compliance requirements",
                    ],
               },
               {
                    week: 5,
                    title: "Threat Detection & Response",
                    topics: [
                         "Security monitoring tools",
                         "Incident detection and analysis",
                         "Threat hunting techniques",
                         "Incident response procedures",
                    ],
               },
               {
                    week: 6,
                    title: "Data Protection & Privacy",
                    topics: [
                         "Data classification and handling",
                         "Encryption technologies",
                         "Privacy regulations (GDPR, CCPA)",
                         "Data breach response",
                    ],
               },
               {
                    week: 7,
                    title: "Security Operations",
                    topics: [
                         "Security operations center (SOC)",
                         "Vulnerability management",
                         "Penetration testing",
                         "Security awareness training",
                    ],
               },
               {
                    week: 8,
                    title: "Compliance & Governance",
                    topics: [
                         "Security compliance frameworks",
                         "Audit preparation and response",
                         "Security policy development",
                         "Business continuity planning",
                    ],
               },
          ],
          prerequisites: [
               "Basic IT infrastructure knowledge",
               "Understanding of networking concepts",
               "Organizational security commitment",
               "Compliance requirements awareness",
          ],
          outcomes: [
               "Implement comprehensive cybersecurity frameworks",
               "Detect and respond to security threats",
               "Ensure compliance with security regulations",
               "Develop security policies and procedures",
               "Conduct security assessments and audits",
               "Build security-aware organizational culture",
          ],
          targetOrganizations: [
               "Corporations",
               "Government Agencies",
               "Healthcare Organizations",
               "Financial Institutions",
          ],
          deliveryOptions: [
               "In-Person Training",
               "Online Sessions",
               "Hybrid Approach",
               "Custom Schedule",
          ],
     },
     "web-development": {
          id: 5,
          title: "Modern Web Development & Full-Stack Engineering",
          description:
               "Comprehensive training program for organizations to build modern, scalable web applications using cutting-edge technologies and best practices.",
          longDescription:
               "This intensive web development training program covers the full spectrum of modern web technologies, from frontend frameworks to backend services and deployment strategies. Our program prepares teams to build robust, scalable web applications that meet today's business demands.",
          duration: "10 weeks",
          level: "Beginner to Advanced",
          price: "Custom Pricing",
          originalPrice: null,
          rating: 4.6,
          organizationsServed: 42,
          image: "/placeholder.svg?height=400&width=600",
          category: "Web Development",
          organizationType: "All Organizations",
          participants: "15-25 professionals",
          format: "Hybrid (Online + In-Person)",
          instructor: {
               name: "David Kim",
               bio: "Full-Stack Development Expert and Technical Lead with 10+ years of experience in modern web technologies, architecture design, and team leadership.",
               image: "/placeholder.svg?height=80&width=80",
          },
          features: [
               "10 weeks of comprehensive web development training",
               "Full-stack technology coverage",
               "Hands-on project development",
               "Industry expert instructors",
               "Certificate of completion",
               "Post-training development consultation",
               "Flexible scheduling options",
               "Real-world web development case studies",
          ],
          curriculum: [
               {
                    week: 1,
                    title: "Web Development Fundamentals",
                    topics: [
                         "HTML5 and CSS3 advanced features",
                         "JavaScript ES6+ and modern syntax",
                         "Responsive design principles",
                         "Web accessibility standards",
                    ],
               },
               {
                    week: 2,
                    title: "Frontend Frameworks",
                    topics: [
                         "React.js fundamentals and hooks",
                         "Vue.js and Angular basics",
                         "State management (Redux, Vuex)",
                         "Component architecture",
                    ],
               },
               {
                    week: 3,
                    title: "Backend Development",
                    topics: [
                         "Node.js and Express.js",
                         "Python with Django/Flask",
                         "Database design and modeling",
                         "RESTful API development",
                    ],
               },
               {
                    week: 4,
                    title: "Database & Data Management",
                    topics: [
                         "SQL and NoSQL databases",
                         "Database optimization",
                         "Data modeling and relationships",
                         "Caching strategies",
                    ],
               },
               {
                    week: 5,
                    title: "Modern Frontend Technologies",
                    topics: [
                         "TypeScript and type safety",
                         "CSS frameworks and preprocessors",
                         "Build tools and bundlers",
                         "Progressive Web Apps (PWA)",
                    ],
               },
               {
                    week: 6,
                    title: "API Development & Integration",
                    topics: [
                         "GraphQL API development",
                         "API authentication and security",
                         "Third-party API integration",
                         "API testing and documentation",
                    ],
               },
               {
                    week: 7,
                    title: "DevOps for Web Applications",
                    topics: [
                         "Docker containerization",
                         "CI/CD for web applications",
                         "Cloud deployment strategies",
                         "Performance monitoring",
                    ],
               },
               {
                    week: 8,
                    title: "Advanced Web Technologies",
                    topics: [
                         "Server-side rendering (SSR)",
                         "Static site generation (SSG)",
                         "WebAssembly (WASM)",
                         "Real-time applications",
                    ],
               },
               {
                    week: 9,
                    title: "Testing & Quality Assurance",
                    topics: [
                         "Unit testing and integration testing",
                         "End-to-end testing",
                         "Code quality and linting",
                         "Performance testing",
                    ],
               },
               {
                    week: 10,
                    title: "Deployment & Maintenance",
                    topics: [
                         "Production deployment strategies",
                         "Monitoring and logging",
                         "Security best practices",
                         "Maintenance and updates",
                    ],
               },
          ],
          prerequisites: [
               "Basic programming knowledge",
               "Understanding of web technologies",
               "Organizational commitment to web development",
               "Team collaboration skills",
          ],
          outcomes: [
               "Build modern, responsive web applications",
               "Develop full-stack web solutions",
               "Implement scalable web architectures",
               "Deploy and maintain web applications",
               "Follow web development best practices",
               "Lead web development projects",
          ],
          targetOrganizations: [
               "Corporations",
               "Technology Companies",
               "Digital Agencies",
               "Educational Institutions",
          ],
          deliveryOptions: [
               "In-Person Training",
               "Online Sessions",
               "Hybrid Approach",
               "Custom Schedule",
          ],
     },
};

export default function TrainingProgramDetailPage({
     params,
}: {
     params: { slug: string };
}) {
     const [inquiryData, setInquiryData] = useState({
          organizationName: "",
          organizationType: "",
          contactName: "",
          contactEmail: "",
          contactPhone: "",
          participantCount: "",
          timeline: "",
          budget: "",
          currentTechStack: "",
          trainingGoals: "",
          specialRequirements: "",
     });

     // Get the training program data based on the slug
     const trainingProgramData =
          trainingProgramsData[
               params.slug as keyof typeof trainingProgramsData
          ];

     // If the program doesn't exist, you could redirect or show an error
     if (!trainingProgramData) {
          return (
               <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 flex items-center justify-center">
                    <div className="text-center">
                         <h1 className="text-2xl font-bold text-gray-900 mb-4">
                              Training Program Not Found
                         </h1>
                         <p className="text-gray-600 mb-6">
                              The training program you're looking for doesn't
                              exist.
                         </p>
                         <Link href="/courses">
                              <Button className="bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600">
                                   Browse All Training Programs
                              </Button>
                         </Link>
                    </div>
               </div>
          );
     }

     const handleInputChange = (field: string, value: string) => {
          setInquiryData((prev) => ({
               ...prev,
               [field]: value,
          }));
     };

     const handleInquirySubmit = (e: React.FormEvent) => {
          e.preventDefault();
          console.log("Training inquiry data:", inquiryData);
          alert(
               "Training inquiry submitted successfully! We will contact you with a customized proposal within 2-3 business days."
          );
     };

     return (
          <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
               <Header />

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
                                   href="/courses"
                                   className="text-gray-500 hover:text-orange-600"
                              >
                                   Training Programs
                              </Link>
                              <span className="text-gray-400">/</span>
                              <span className="text-gray-900">
                                   {trainingProgramData.title}
                              </span>
                         </div>
                    </div>
               </div>

               <div className="container mx-auto px-4 py-8">
                    <div className="grid lg:grid-cols-3 gap-8">
                         {/* Main Content */}
                         <div className="lg:col-span-2 space-y-8">
                              {/* Program Header */}
                              <div className="bg-white rounded-2xl shadow-lg p-8">
                                   <div className="flex items-center mb-4">
                                        <Link
                                             href="/courses"
                                             className="flex items-center text-orange-600 hover:text-orange-600 mr-4"
                                        >
                                             <ArrowLeft className="w-4 h-4 mr-1" />
                                             Back to Training Programs
                                        </Link>
                                        <Badge className="bg-orange-100 text-orange-800">
                                             {trainingProgramData.category}
                                        </Badge>
                                   </div>

                                   <h1 className="text-4xl font-bold text-gray-900 mb-4">
                                        {trainingProgramData.title}
                                   </h1>

                                   <p className="text-xl text-gray-600 mb-6">
                                        {trainingProgramData.description}
                                   </p>

                                   <div className="flex flex-wrap items-center gap-6 mb-6">
                                        <div className="flex items-center">
                                             <div className="flex items-center mr-2">
                                                  {[...Array(5)].map((_, i) => (
                                                       <Star
                                                            key={i}
                                                            className={`w-5 h-5 ${
                                                                 i <
                                                                 Math.floor(
                                                                      trainingProgramData.rating
                                                                 )
                                                                      ? "text-yellow-400 fill-current"
                                                                      : "text-gray-300"
                                                            }`}
                                                       />
                                                  ))}
                                             </div>
                                             <span className="text-gray-600">
                                                  ({trainingProgramData.rating})
                                                  •{" "}
                                                  {
                                                       trainingProgramData.organizationsServed
                                                  }{" "}
                                                  organizations served
                                             </span>
                                        </div>
                                        <div className="flex items-center text-gray-600">
                                             <Clock className="w-5 h-5 mr-2" />
                                             {trainingProgramData.duration}
                                        </div>
                                        <div className="flex items-center text-gray-600">
                                             <Users className="w-5 h-5 mr-2" />
                                             {trainingProgramData.level}
                                        </div>
                                        <Badge
                                             variant="outline"
                                             className="text-orange-600 border-orange-600"
                                        >
                                             {
                                                  trainingProgramData.organizationType
                                             }
                                        </Badge>
                                   </div>

                                   <div className="flex items-center space-x-4">
                                        <Button
                                             size="lg"
                                             className="bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600"
                                        >
                                             <Play className="w-5 h-5 mr-2" />
                                             Request Custom Quote
                                        </Button>
                                        <Button size="lg" variant="outline">
                                             <Share2 className="w-5 h-5 mr-2" />
                                             Share Program
                                        </Button>
                                   </div>
                              </div>

                              {/* Program Image */}
                              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                                   <Image
                                        src={
                                             trainingProgramData.image ||
                                             "/placeholder.svg"
                                        }
                                        alt={trainingProgramData.title}
                                        width={600}
                                        height={400}
                                        className="w-full h-80 object-cover"
                                   />
                              </div>

                              {/* Program Tabs */}
                              <div className="bg-white rounded-2xl shadow-lg p-8">
                                   <Tabs
                                        defaultValue="overview"
                                        className="w-full"
                                   >
                                        <TabsList className="grid w-full grid-cols-4">
                                             <TabsTrigger value="overview">
                                                  Overview
                                             </TabsTrigger>
                                             <TabsTrigger value="curriculum">
                                                  Curriculum
                                             </TabsTrigger>
                                             <TabsTrigger value="instructor">
                                                  Instructor
                                             </TabsTrigger>
                                             <TabsTrigger value="reviews">
                                                  Reviews
                                             </TabsTrigger>
                                        </TabsList>

                                        <TabsContent
                                             value="overview"
                                             className="mt-6 space-y-6"
                                        >
                                             <div>
                                                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                                       Program Overview
                                                  </h3>
                                                  <p className="text-gray-600 leading-relaxed mb-6">
                                                       {
                                                            trainingProgramData.longDescription
                                                       }
                                                  </p>
                                             </div>

                                             <div>
                                                  <h4 className="text-xl font-semibold text-gray-900 mb-4">
                                                       What Your Organization
                                                       Will Achieve
                                                  </h4>
                                                  <div className="grid md:grid-cols-2 gap-3">
                                                       {trainingProgramData.outcomes.map(
                                                            (
                                                                 outcome,
                                                                 index
                                                            ) => (
                                                                 <div
                                                                      key={
                                                                           index
                                                                      }
                                                                      className="flex items-start space-x-3"
                                                                 >
                                                                      <CheckCircle className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                                                                      <span className="text-gray-700">
                                                                           {
                                                                                outcome
                                                                           }
                                                                      </span>
                                                                 </div>
                                                            )
                                                       )}
                                                  </div>
                                             </div>

                                             <div>
                                                  <h4 className="text-xl font-semibold text-gray-900 mb-4">
                                                       Prerequisites
                                                  </h4>
                                                  <ul className="space-y-2">
                                                       {trainingProgramData.prerequisites.map(
                                                            (prereq, index) => (
                                                                 <li
                                                                      key={
                                                                           index
                                                                      }
                                                                      className="flex items-start space-x-3"
                                                                 >
                                                                      <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 flex-shrink-0"></div>
                                                                      <span className="text-gray-700">
                                                                           {
                                                                                prereq
                                                                           }
                                                                      </span>
                                                                 </li>
                                                            )
                                                       )}
                                                  </ul>
                                             </div>

                                             <div>
                                                  <h4 className="text-xl font-semibold text-gray-900 mb-4">
                                                       Target Organizations
                                                  </h4>
                                                  <div className="flex flex-wrap gap-2">
                                                       {trainingProgramData.targetOrganizations.map(
                                                            (org, index) => (
                                                                 <Badge
                                                                      key={
                                                                           index
                                                                      }
                                                                      variant="outline"
                                                                      className="text-orange-600 border-orange-600"
                                                                 >
                                                                      {org}
                                                                 </Badge>
                                                            )
                                                       )}
                                                  </div>
                                             </div>

                                             <div>
                                                  <h4 className="text-xl font-semibold text-gray-900 mb-4">
                                                       Delivery Options
                                                  </h4>
                                                  <div className="grid md:grid-cols-2 gap-3">
                                                       {trainingProgramData.deliveryOptions.map(
                                                            (option, index) => (
                                                                 <div
                                                                      key={
                                                                           index
                                                                      }
                                                                      className="flex items-center space-x-3"
                                                                 >
                                                                      <Target className="w-5 h-5 text-orange-600 flex-shrink-0" />
                                                                      <span className="text-gray-700">
                                                                           {
                                                                                option
                                                                           }
                                                                      </span>
                                                                 </div>
                                                            )
                                                       )}
                                                  </div>
                                             </div>
                                        </TabsContent>

                                        <TabsContent
                                             value="curriculum"
                                             className="mt-6"
                                        >
                                             <h3 className="text-2xl font-bold text-gray-900 mb-6">
                                                  Training Curriculum
                                             </h3>
                                             <div className="space-y-4">
                                                  {trainingProgramData.curriculum.map(
                                                       (week, index) => (
                                                            <Card
                                                                 key={index}
                                                                 className="border-l-4 border-orange-600"
                                                            >
                                                                 <CardHeader>
                                                                      <CardTitle className="flex items-center">
                                                                           <span className="bg-orange-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm mr-3">
                                                                                {
                                                                                     week.week
                                                                                }
                                                                           </span>
                                                                           {
                                                                                week.title
                                                                           }
                                                                      </CardTitle>
                                                                 </CardHeader>
                                                                 <CardContent>
                                                                      <ul className="grid md:grid-cols-2 gap-2">
                                                                           {week.topics.map(
                                                                                (
                                                                                     topic,
                                                                                     topicIndex
                                                                                ) => (
                                                                                     <li
                                                                                          key={
                                                                                               topicIndex
                                                                                          }
                                                                                          className="flex items-center space-x-2"
                                                                                     >
                                                                                          <CheckCircle className="w-4 h-4 text-orange-600" />
                                                                                          <span className="text-gray-700">
                                                                                               {
                                                                                                    topic
                                                                                               }
                                                                                          </span>
                                                                                     </li>
                                                                                )
                                                                           )}
                                                                      </ul>
                                                                 </CardContent>
                                                            </Card>
                                                       )
                                                  )}
                                             </div>
                                        </TabsContent>

                                        <TabsContent
                                             value="instructor"
                                             className="mt-6"
                                        >
                                             <h3 className="text-2xl font-bold text-gray-900 mb-6">
                                                  Meet Your Training Expert
                                             </h3>
                                             <Card>
                                                  <CardContent className="p-6">
                                                       <div className="flex items-start space-x-6">
                                                            <Image
                                                                 src={
                                                                      trainingProgramData
                                                                           .instructor
                                                                           .image ||
                                                                      "/placeholder.svg"
                                                                 }
                                                                 alt={
                                                                      trainingProgramData
                                                                           .instructor
                                                                           .name
                                                                 }
                                                                 width={80}
                                                                 height={80}
                                                                 className="rounded-full"
                                                            />
                                                            <div className="flex-1">
                                                                 <h4 className="text-xl font-semibold text-gray-900 mb-2">
                                                                      {
                                                                           trainingProgramData
                                                                                .instructor
                                                                                .name
                                                                      }
                                                                 </h4>
                                                                 <p className="text-gray-600 leading-relaxed">
                                                                      {
                                                                           trainingProgramData
                                                                                .instructor
                                                                                .bio
                                                                      }
                                                                 </p>
                                                                 <div className="flex items-center mt-4 space-x-4">
                                                                      <div className="flex items-center">
                                                                           <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                                                                           <span className="text-sm text-gray-600">
                                                                                4.9
                                                                                Instructor
                                                                                Rating
                                                                           </span>
                                                                      </div>
                                                                      <div className="flex items-center">
                                                                           <Building className="w-4 h-4 text-gray-400 mr-1" />
                                                                           <span className="text-sm text-gray-600">
                                                                                200+
                                                                                Organizations
                                                                                Trained
                                                                           </span>
                                                                      </div>
                                                                 </div>
                                                            </div>
                                                       </div>
                                                  </CardContent>
                                             </Card>
                                        </TabsContent>

                                        <TabsContent
                                             value="reviews"
                                             className="mt-6"
                                        >
                                             <h3 className="text-2xl font-bold text-gray-900 mb-6">
                                                  Client Reviews
                                             </h3>
                                             <div className="space-y-6">
                                                  {[
                                                       {
                                                            name: "TechCorp Solutions",
                                                            contact: "Sarah Johnson, CTO",
                                                            rating: 5,
                                                            comment: "Excellent training program! Our team gained valuable Python and data science skills that we've immediately applied to our projects. The customized approach made all the difference.",
                                                            date: "2 weeks ago",
                                                       },
                                                       {
                                                            name: "State University",
                                                            contact: "Dr. Michael Chen, Dean of Computer Science",
                                                            rating: 5,
                                                            comment: "The training transformed our faculty's capabilities. We've integrated the curriculum into our courses and our students are benefiting immensely.",
                                                            date: "1 month ago",
                                                       },
                                                       {
                                                            name: "InnovateCorp",
                                                            contact: "David Kim, VP of Engineering",
                                                            rating: 4,
                                                            comment: "Great content and well-structured. Our development team is now much more confident with data science projects.",
                                                            date: "1 month ago",
                                                       },
                                                  ].map((review, index) => (
                                                       <Card key={index}>
                                                            <CardContent className="p-6">
                                                                 <div className="flex items-start justify-between mb-4">
                                                                      <div>
                                                                           <h5 className="font-semibold text-gray-900">
                                                                                {
                                                                                     review.name
                                                                                }
                                                                           </h5>
                                                                           <p className="text-sm text-gray-600">
                                                                                {
                                                                                     review.contact
                                                                                }
                                                                           </p>
                                                                           <div className="flex items-center mt-1">
                                                                                {[
                                                                                     ...Array(
                                                                                          5
                                                                                     ),
                                                                                ].map(
                                                                                     (
                                                                                          _,
                                                                                          i
                                                                                     ) => (
                                                                                          <Star
                                                                                               key={
                                                                                                    i
                                                                                               }
                                                                                               className={`w-4 h-4 ${
                                                                                                    i <
                                                                                                    review.rating
                                                                                                         ? "text-yellow-400 fill-current"
                                                                                                         : "text-gray-300"
                                                                                               }`}
                                                                                          />
                                                                                     )
                                                                                )}
                                                                           </div>
                                                                      </div>
                                                                      <span className="text-sm text-gray-500">
                                                                           {
                                                                                review.date
                                                                           }
                                                                      </span>
                                                                 </div>
                                                                 <p className="text-gray-700">
                                                                      {
                                                                           review.comment
                                                                      }
                                                                 </p>
                                                            </CardContent>
                                                       </Card>
                                                  ))}
                                             </div>
                                        </TabsContent>
                                   </Tabs>
                              </div>
                         </div>

                         {/* Sidebar */}
                         <div className="space-y-6">
                              {/* Pricing Card */}
                              <Card className="sticky top-24">
                                   <CardHeader>
                                        <div className="text-center">
                                             <div className="flex items-center justify-center space-x-2 mb-2">
                                                  <span className="text-3xl font-bold text-orange-600">
                                                       {
                                                            trainingProgramData.price
                                                       }
                                                  </span>
                                             </div>
                                             <Badge className="bg-orange-100 text-orange-800">
                                                  Customized for Your
                                                  Organization
                                             </Badge>
                                        </div>
                                   </CardHeader>
                                   <CardContent className="space-y-4">
                                        <div className="space-y-3">
                                             {trainingProgramData.features.map(
                                                  (feature, index) => (
                                                       <div
                                                            key={index}
                                                            className="flex items-center space-x-3"
                                                       >
                                                            <CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0" />
                                                            <span className="text-gray-700">
                                                                 {feature}
                                                            </span>
                                                       </div>
                                                  )
                                             )}
                                        </div>

                                        <div className="space-y-3 pt-4 border-t">
                                             <Button className="w-full bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 text-lg py-6">
                                                  <DollarSign className="w-5 h-5 mr-2" />
                                                  Request Custom Quote
                                             </Button>
                                             <Button
                                                  variant="outline"
                                                  className="w-full bg-transparent"
                                             >
                                                  <Download className="w-4 h-4 mr-2" />
                                                  Download Program Brochure
                                             </Button>
                                        </div>
                                   </CardContent>
                              </Card>
                         </div>
                    </div>
               </div>

               {/* Footer */}
               <footer className="bg-gray-900 text-white py-16 mt-16">
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
                                        Empowering organizations through expert
                                        training and professional development in
                                        cutting-edge technologies.
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
                                                  All Training Programs
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
                                        Training Programs
                                   </h3>
                                   <ul className="space-y-3">
                                        <li>
                                             <Link
                                                  href="/courses?category=Python"
                                                  className="text-gray-400 hover:text-white transition-colors"
                                             >
                                                  Python & Data Science
                                             </Link>
                                        </li>
                                        <li>
                                             <Link
                                                  href="/courses?category=AI"
                                                  className="text-gray-400 hover:text-white transition-colors"
                                             >
                                                  AI & Machine Learning
                                             </Link>
                                        </li>
                                        <li>
                                             <Link
                                                  href="/courses?category=Cloud"
                                                  className="text-gray-400 hover:text-white transition-colors"
                                             >
                                                  Cloud & DevOps
                                             </Link>
                                        </li>
                                        <li>
                                             <Link
                                                  href="/courses?category=Cybersecurity"
                                                  className="text-gray-400 hover:text-white transition-colors"
                                             >
                                                  Cybersecurity
                                             </Link>
                                        </li>
                                        <li>
                                             <Link
                                                  href="/courses?category=Web"
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
                                        <p>✉️ training@bingoacademy.com</p>
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

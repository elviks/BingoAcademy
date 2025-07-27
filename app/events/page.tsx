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
     Clock,
     MapPin,
     Users,
     Star,
     Ticket,
     Trophy,
     Zap,
     Rocket,
     Brain,
     Building,
     GraduationCap,
     Briefcase,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/header";
import Footer from "@/components/footer";

const events = [
     {
          id: 1,
          title: "AI & Machine Learning Corporate Bootcamp",
          description:
               "Intensive 2-week training program for organizations. Transform your team with cutting-edge AI and ML skills for real-world applications.",
          date: "2024-07-15",
          endDate: "2024-07-26",
          time: "9:00 AM - 5:00 PM",
          location: "Bingo Academy Training Center",
          type: "Corporate Bootcamp",
          price: "Custom Pricing",
          capacity: 25,
          registered: 12,
          image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80", // ai workshop
          featured: true,
          tags: ["AI", "Machine Learning", "Corporate", "Advanced"],
          organizationType: "Corporations",
          instructor: "Dr. Sarah Johnson & Team",
     },
     {
          id: 2,
          title: "Data Science for Business Leaders",
          description:
               "Executive workshop introducing business leaders to data science concepts and strategic decision-making with data-driven insights.",
          date: "2024-02-10",
          time: "10:00 AM - 4:00 PM",
          location: "Online & In-Person",
          type: "Executive Workshop",
          price: "Custom Pricing",
          capacity: 20,
          registered: 8,
          image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80", // business leaders
          featured: false,
          tags: ["Data Science", "Leadership", "Strategy", "Business"],
          organizationType: "Corporations",
          instructor: "Dr. Lisa Rodriguez",
     },
     {
          id: 3,
          title: "Cybersecurity Training Summit 2024",
          description:
               "Comprehensive cybersecurity training for IT teams and security professionals. Hands-on workshops and real-world scenarios.",
          date: "2024-03-22",
          time: "9:00 AM - 6:00 PM",
          location: "Tech Convention Center",
          type: "Training Summit",
          price: "Custom Pricing",
          capacity: 40,
          registered: 28,
          image: "https://images.unsplash.com/photo-1631378297854-185cff6b0986?auto=format&fit=crop&w=600&q=80", // cybersecurity
          featured: true,
          tags: ["Cybersecurity", "IT Training", "Security", "Professional"],
          organizationType: "All Organizations",
          instructor: "Alex Thompson",
     },
     {
          id: 4,
          title: "Cloud Computing & DevOps Workshop",
          description:
               "2-day intensive workshop covering cloud platforms, DevOps practices, and infrastructure automation for development teams.",
          date: "2024-04-05",
          endDate: "2024-04-06",
          time: "9:00 AM - 5:00 PM",
          location: "Bingo Academy Training Center",
          type: "Technical Workshop",
          price: "Custom Pricing",
          capacity: 30,
          registered: 18,
          image: "https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=600&q=80", // cloud computing
          featured: false,
          tags: ["Cloud Computing", "DevOps", "Infrastructure", "Automation"],
          organizationType: "Corporations",
          instructor: "Mike Chen & Team",
     },
     {
          id: 5,
          title: "Digital Transformation Masterclass",
          description:
               "Advanced session covering digital transformation strategies, modern technologies, and organizational change management.",
          date: "2024-02-28",
          time: "1:00 PM - 6:00 PM",
          location: "Online",
          type: "Masterclass",
          price: "Custom Pricing",
          capacity: 25,
          registered: 15,
          image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80", // digital transformation
          featured: false,
          tags: [
               "Digital Transformation",
               "Strategy",
               "Change Management",
               "Technology",
          ],
          organizationType: "All Organizations",
          instructor: "Emma Davis",
     },
     {
          id: 6,
          title: "University Faculty Development Program",
          description:
               "Specialized training for university faculty to integrate modern programming and technology concepts into their curriculum.",
          date: "2024-03-15",
          time: "10:00 AM - 4:00 PM",
          location: "Bingo Academy Training Center",
          type: "Faculty Training",
          price: "Custom Pricing",
          capacity: 20,
          registered: 12,
          image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80", // faculty training
          featured: false,
          tags: ["Education", "Faculty", "Curriculum", "Academic"],
          organizationType: "Universities",
          instructor: "David Kim",
     },
];

const eventTypes = [
     "All",
     "Corporate Bootcamp",
     "Executive Workshop",
     "Training Summit",
     "Technical Workshop",
     "Masterclass",
     "Faculty Training",
];

export default function EventsPage() {
     const [selectedType, setSelectedType] = useState("All");
     const [registrationData, setRegistrationData] = useState({
          organizationName: "",
          contactName: "",
          email: "",
          phone: "",
          organizationType: "",
          participantCount: "",
          specialRequests: "",
     });
     const [selectedEvent, setSelectedEvent] = useState<number | null>(null);

     const filteredEvents = events.filter((event) => {
          const matchesType =
               selectedType === "All" || event.type === selectedType;
          return matchesType;
     });

     const upcomingEvents = filteredEvents.filter(
          (event) => new Date(event.date) >= new Date()
     );
     const pastEvents = filteredEvents.filter(
          (event) => new Date(event.date) < new Date()
     );

     const handleInputChange = (field: string, value: string) => {
          setRegistrationData((prev) => ({
               ...prev,
               [field]: value,
          }));
     };

     const handleRegistrationSubmit = (e: React.FormEvent) => {
          e.preventDefault();
          console.log(
               "Event registration data:",
               registrationData,
               "Event ID:",
               selectedEvent
          );
          alert(
               "Registration submitted successfully! We will contact you with a customized proposal."
          );
          setSelectedEvent(null);
          setRegistrationData({
               organizationName: "",
               contactName: "",
               email: "",
               phone: "",
               organizationType: "",
               participantCount: "",
               specialRequests: "",
          });
     };

     const getEventIcon = (type: string) => {
          switch (type) {
               case "Corporate Bootcamp":
                    return Rocket;
               case "Executive Workshop":
                    return Brain;
               case "Training Summit":
                    return Trophy;
               case "Technical Workshop":
                    return Zap;
               case "Masterclass":
                    return Star;
               case "Faculty Training":
                    return GraduationCap;
               default:
                    return Calendar;
          }
     };

     return (
          <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
               <Header />

               {/* Hero Section */}
               <section className="py-16 bg-gradient-to-r from-orange-600 to-orange-500 text-white">
                    <div className="container mx-auto px-4 text-center">
                         <div className="flex items-center justify-center mb-4">
                              <Calendar className="w-12 h-12 mr-4" />
                              <h1 className="text-5xl font-bold">
                                   Training Events & Workshops
                              </h1>
                         </div>
                         <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                              Join our professional training events, workshops,
                              and bootcamps designed for organizations.
                              Transform your team's capabilities with expert-led
                              sessions.
                         </p>

                         <div className="flex justify-center space-x-8 text-center">
                              <div>
                                   <div className="text-3xl font-bold">20+</div>
                                   <div className="opacity-90">
                                        Events This Year
                                   </div>
                              </div>
                              <div>
                                   <div className="text-3xl font-bold">
                                        200+
                                   </div>
                                   <div className="opacity-90">
                                        Organizations Served
                                   </div>
                              </div>
                              <div>
                                   <div className="text-3xl font-bold">
                                        Monthly
                                   </div>
                                   <div className="opacity-90">New Events</div>
                              </div>
                         </div>
                    </div>
               </section>

               {/* Event Type Filter */}
               <section className="py-8 bg-white border-b">
                    <div className="container mx-auto px-4">
                         <div className="flex flex-wrap gap-2 justify-center">
                              {eventTypes.map((type) => (
                                   <Button
                                        key={type}
                                        variant={
                                             selectedType === type
                                                  ? "default"
                                                  : "outline"
                                        }
                                        size="sm"
                                        onClick={() => setSelectedType(type)}
                                        className={
                                             selectedType === type
                                                  ? "bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600"
                                                  : "hover:bg-orange-50"
                                        }
                                   >
                                        {type}
                                   </Button>
                              ))}
                         </div>
                    </div>
               </section>

               <div className="container mx-auto px-4 py-16">
                    {/* Upcoming Events */}
                    <section className="mb-16">
                         <div className="flex items-center mb-8">
                              <Rocket className="w-6 h-6 text-orange-600 mr-2" />
                              <h2 className="text-3xl font-bold text-gray-900">
                                   Upcoming Events
                              </h2>
                         </div>

                         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                              {upcomingEvents.map((event) => {
                                   const EventIcon = getEventIcon(event.type);
                                   const spotsLeft =
                                        event.capacity - event.registered;

                                   return (
                                        <Card
                                             key={event.id}
                                             className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg overflow-hidden"
                                        >
                                             <div className="relative">
                                                  <Image
                                                       src={
                                                            event.image ||
                                                            "/placeholder.svg"
                                                       }
                                                       alt={event.title}
                                                       width={400}
                                                       height={200}
                                                       className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                                                  />
                                                  <div className="absolute top-4 left-4 flex gap-2">
                                                       <Badge className="bg-gradient-to-r from-orange-600 to-orange-500 text-white">
                                                            {event.type}
                                                       </Badge>
                                                       {event.featured && (
                                                            <Badge className="bg-yellow-500 text-white">
                                                                 Featured
                                                            </Badge>
                                                       )}
                                                  </div>
                                                  <Badge className="absolute top-4 right-4 bg-white/90 text-gray-800">
                                                       {event.organizationType}
                                                  </Badge>
                                             </div>

                                             <CardHeader>
                                                  <div className="flex items-center justify-between mb-2">
                                                       <EventIcon className="w-5 h-5 text-orange-600" />
                                                       <span className="text-2xl font-bold text-orange-600">
                                                            {event.price}
                                                       </span>
                                                  </div>
                                                  <CardTitle className="text-xl group-hover:text-orange-600 transition-colors line-clamp-2">
                                                       {event.title}
                                                  </CardTitle>
                                                  <CardDescription className="text-gray-600 line-clamp-3">
                                                       {event.description}
                                                  </CardDescription>
                                             </CardHeader>

                                             <CardContent>
                                                  <div className="space-y-3 mb-4">
                                                       <div className="flex items-center text-sm text-gray-600">
                                                            <Calendar className="w-4 h-4 mr-2" />
                                                            {new Date(
                                                                 event.date
                                                            ).toLocaleDateString()}
                                                            {event.endDate &&
                                                                 ` - ${new Date(
                                                                      event.endDate
                                                                 ).toLocaleDateString()}`}
                                                       </div>
                                                       <div className="flex items-center text-sm text-gray-600">
                                                            <Clock className="w-4 h-4 mr-2" />
                                                            {event.time}
                                                       </div>
                                                       <div className="flex items-center text-sm text-gray-600">
                                                            <MapPin className="w-4 h-4 mr-2" />
                                                            {event.location}
                                                       </div>
                                                       <div className="flex items-center text-sm text-gray-600">
                                                            <Users className="w-4 h-4 mr-2" />
                                                            {event.registered}/
                                                            {event.capacity}{" "}
                                                            registered
                                                       </div>
                                                  </div>

                                                  <div className="mb-4">
                                                       <div className="flex justify-between text-sm mb-1">
                                                            <span>
                                                                 Spots Available
                                                            </span>
                                                            <span
                                                                 className={
                                                                      spotsLeft <=
                                                                      5
                                                                           ? "text-red-600 font-semibold"
                                                                           : "text-gray-600"
                                                                 }
                                                            >
                                                                 {spotsLeft}{" "}
                                                                 left
                                                            </span>
                                                       </div>
                                                       <div className="w-full bg-gray-200 rounded-full h-2">
                                                            <div
                                                                 className="bg-gradient-to-r from-orange-600 to-orange-500 h-2 rounded-full transition-all duration-300"
                                                                 style={{
                                                                      width: `${
                                                                           (event.registered /
                                                                                event.capacity) *
                                                                           100
                                                                      }%`,
                                                                 }}
                                                            ></div>
                                                       </div>
                                                  </div>

                                                  <div className="flex flex-wrap gap-1 mb-4">
                                                       {event.tags
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

                                                  <Button
                                                       className="w-full bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600"
                                                       onClick={() =>
                                                            setSelectedEvent(
                                                                 event.id
                                                            )
                                                       }
                                                       disabled={
                                                            spotsLeft === 0
                                                       }
                                                  >
                                                       <Ticket className="w-4 h-4 mr-2" />
                                                       {spotsLeft === 0
                                                            ? "Fully Booked"
                                                            : "Request Registration"}
                                                  </Button>
                                             </CardContent>
                                        </Card>
                                   );
                              })}
                         </div>

                         {upcomingEvents.length === 0 && (
                              <div className="text-center py-16">
                                   <div className="text-6xl mb-4">📅</div>
                                   <h3 className="text-2xl font-bold text-gray-900 mb-2">
                                        No upcoming events
                                   </h3>
                                   <p className="text-gray-600 mb-6">
                                        Check back soon for new professional
                                        training events and workshops!
                                   </p>
                              </div>
                         )}
                    </section>

                    {/* Past Events */}
                    {pastEvents.length > 0 && (
                         <section>
                              <div className="flex items-center mb-8">
                                   <Trophy className="w-6 h-6 text-orange-600 mr-2" />
                                   <h2 className="text-3xl font-bold text-gray-900">
                                        Past Events
                                   </h2>
                              </div>

                              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                                   {pastEvents.slice(0, 4).map((event) => {
                                        const EventIcon = getEventIcon(
                                             event.type
                                        );

                                        return (
                                             <Card
                                                  key={event.id}
                                                  className="opacity-75 hover:opacity-100 transition-opacity"
                                             >
                                                  <div className="relative">
                                                       <Image
                                                            src={
                                                                 event.image ||
                                                                 "/placeholder.svg"
                                                            }
                                                            alt={event.title}
                                                            width={300}
                                                            height={150}
                                                            className="w-full h-32 object-cover"
                                                       />
                                                       <Badge className="absolute top-2 left-2 bg-gray-600 text-white text-xs">
                                                            Completed
                                                       </Badge>
                                                  </div>

                                                  <CardHeader className="pb-2">
                                                       <div className="flex items-center justify-between mb-1">
                                                            <EventIcon className="w-4 h-4 text-gray-600" />
                                                            <Badge
                                                                 variant="outline"
                                                                 className="text-xs"
                                                            >
                                                                 {event.type}
                                                            </Badge>
                                                       </div>
                                                       <CardTitle className="text-sm line-clamp-2">
                                                            {event.title}
                                                       </CardTitle>
                                                  </CardHeader>

                                                  <CardContent className="pt-0">
                                                       <div className="text-xs text-gray-500 mb-2">
                                                            {new Date(
                                                                 event.date
                                                            ).toLocaleDateString()}
                                                       </div>
                                                       <div className="text-xs text-gray-600">
                                                            {event.registered}{" "}
                                                            organizations
                                                       </div>
                                                  </CardContent>
                                             </Card>
                                        );
                                   })}
                              </div>
                         </section>
                    )}
               </div>

               {/* Registration Modal */}
               {selectedEvent && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
                         <Card className="w-full max-w-md max-h-[90vh] overflow-y-auto">
                              <CardHeader>
                                   <CardTitle>Event Registration</CardTitle>
                                   <CardDescription>
                                        Register for:{" "}
                                        {
                                             events.find(
                                                  (e) => e.id === selectedEvent
                                             )?.title
                                        }
                                   </CardDescription>
                              </CardHeader>
                              <CardContent>
                                   <form
                                        onSubmit={handleRegistrationSubmit}
                                        className="space-y-4"
                                   >
                                        <div>
                                             <Label htmlFor="organizationName">
                                                  Organization Name
                                             </Label>
                                             <Input
                                                  id="organizationName"
                                                  value={
                                                       registrationData.organizationName
                                                  }
                                                  onChange={(e) =>
                                                       handleInputChange(
                                                            "organizationName",
                                                            e.target.value
                                                       )
                                                  }
                                                  required
                                             />
                                        </div>

                                        <div>
                                             <Label htmlFor="contactName">
                                                  Contact Person Name
                                             </Label>
                                             <Input
                                                  id="contactName"
                                                  value={
                                                       registrationData.contactName
                                                  }
                                                  onChange={(e) =>
                                                       handleInputChange(
                                                            "contactName",
                                                            e.target.value
                                                       )
                                                  }
                                                  required
                                             />
                                        </div>

                                        <div>
                                             <Label htmlFor="email">
                                                  Email
                                             </Label>
                                             <Input
                                                  id="email"
                                                  type="email"
                                                  value={registrationData.email}
                                                  onChange={(e) =>
                                                       handleInputChange(
                                                            "email",
                                                            e.target.value
                                                       )
                                                  }
                                                  required
                                             />
                                        </div>

                                        <div>
                                             <Label htmlFor="phone">
                                                  Phone
                                             </Label>
                                             <Input
                                                  id="phone"
                                                  type="tel"
                                                  value={registrationData.phone}
                                                  onChange={(e) =>
                                                       handleInputChange(
                                                            "phone",
                                                            e.target.value
                                                       )
                                                  }
                                                  required
                                             />
                                        </div>

                                        <div>
                                             <Label htmlFor="organizationType">
                                                  Organization Type
                                             </Label>
                                             <Input
                                                  id="organizationType"
                                                  value={
                                                       registrationData.organizationType
                                                  }
                                                  onChange={(e) =>
                                                       handleInputChange(
                                                            "organizationType",
                                                            e.target.value
                                                       )
                                                  }
                                                  placeholder="e.g., Corporation, University, School"
                                                  required
                                             />
                                        </div>

                                        <div>
                                             <Label htmlFor="participantCount">
                                                  Number of Participants
                                             </Label>
                                             <Input
                                                  id="participantCount"
                                                  type="number"
                                                  value={
                                                       registrationData.participantCount
                                                  }
                                                  onChange={(e) =>
                                                       handleInputChange(
                                                            "participantCount",
                                                            e.target.value
                                                       )
                                                  }
                                                  placeholder="Estimated number of participants"
                                                  required
                                             />
                                        </div>

                                        <div>
                                             <Label htmlFor="specialRequests">
                                                  Special Requirements
                                                  (Optional)
                                             </Label>
                                             <Textarea
                                                  id="specialRequests"
                                                  value={
                                                       registrationData.specialRequests
                                                  }
                                                  onChange={(e) =>
                                                       handleInputChange(
                                                            "specialRequests",
                                                            e.target.value
                                                       )
                                                  }
                                                  placeholder="Any specific requirements, customization needs, or questions..."
                                                  rows={3}
                                             />
                                        </div>

                                        <div className="flex gap-2">
                                             <Button
                                                  type="button"
                                                  variant="outline"
                                                  className="flex-1 bg-transparent"
                                                  onClick={() =>
                                                       setSelectedEvent(null)
                                                  }
                                             >
                                                  Cancel
                                             </Button>
                                             <Button
                                                  type="submit"
                                                  className="flex-1 bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600"
                                             >
                                                  Request Registration
                                             </Button>
                                        </div>
                                   </form>
                              </CardContent>
                         </Card>
                    </div>
               )}

               {/* CTA Section */}
               <section className="py-16 bg-gradient-to-r from-orange-600 to-orange-500 text-white">
                    <div className="container mx-auto px-4 text-center">
                         <h2 className="text-4xl font-bold mb-4">
                              Transform Your Organization with Expert Training!
                         </h2>
                         <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                              Join our community of organizations and
                              participate in professional training events,
                              workshops, and bootcamps designed to elevate your
                              team's capabilities.
                         </p>
                         <div className="flex flex-col sm:flex-row gap-4 justify-center">
                              <Button
                                   size="lg"
                                   className="bg-white text-orange-600 hover:bg-gray-100 text-lg px-8 py-6"
                              >
                                   <Calendar className="w-5 h-5 mr-2" />
                                   View All Events
                              </Button>
                              <Button
                                   size="lg"
                                   variant="outline"
                                   className="border-2 border-white text-white hover:bg-white hover:text-orange-600 text-lg px-8 py-6 bg-transparent"
                              >
                                   Subscribe to Updates
                              </Button>
                         </div>
                    </div>
               </section>

               <Footer />
          </div>
     );
}

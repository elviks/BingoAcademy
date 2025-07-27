import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Footer() {
     return (
          <footer className="bg-gray-900 text-white py-20">
               <div className="container mx-auto px-4 sm:px-6">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
                         <div className="animate-slide-in-up">
                              <div className="flex items-center p-2 mb-8 bg-white max-w-fit rounded-lg">
                                   <Image
                                        src="/logo/bingoacademy.png"
                                        alt="Bingo Academy Logo"
                                        width={120}
                                        height={120}
                                   />
                              </div>
                              <p className="text-gray-400 mb-8 leading-relaxed">
                                   Empowering organizations with comprehensive
                                   training solutions and cutting-edge
                                   technology education. Transform your team
                                   with expert-led programs.
                              </p>
                              <div className="flex space-x-4">
                                   {[
                                        {
                                             icon: "twitter",
                                             path: "M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z",
                                        },

                                        {
                                             icon: "linkedin",
                                             path: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
                                        },
                                   ].map((social, index) => (
                                        <Button
                                             key={index}
                                             size="icon"
                                             variant="ghost"
                                             className="text-gray-400 hover:text-white hover:bg-gray-800 transition-all duration-300 hover:scale-110 focus-ring"
                                        >
                                             <svg
                                                  className="w-5 h-5"
                                                  fill="currentColor"
                                                  viewBox="0 0 24 24"
                                             >
                                                  <path d={social.path} />
                                             </svg>
                                        </Button>
                                   ))}
                              </div>
                         </div>

                         {[
                              {
                                   title: "Quick Links",
                                   links: [
                                        {
                                             name: "All Training Programs",
                                             href: "/courses",
                                        },
                                        { name: "About Us", href: "/about" },
                                        { name: "Blog", href: "/blog" },
                                        { name: "Events", href: "/events" },
                                        { name: "Contact", href: "/contact" },
                                   ],
                              },
                              {
                                   title: "Training Programs",
                                   links: [
                                        {
                                             name: "Web Development",
                                             href: "/courses?category=Web Development",
                                        },
                                        {
                                             name: "Python & Data Science",
                                             href: "/courses?category=Python & Data Science",
                                        },
                                        {
                                             name: "AI & Machine Learning",
                                             href: "/courses?category=AI & Machine Learning",
                                        },
                                        {
                                             name: "Mobile Development",
                                             href: "/courses?category=Mobile Development",
                                        },
                                        {
                                             name: "Cloud & DevOps",
                                             href: "/courses?category=Cloud & DevOps",
                                        },
                                   ],
                              },
                         ].map((section, index) => (
                              <div
                                   key={index}
                                   className={`animate-slide-in-up animate-delay-${
                                        (index + 1) * 100
                                   }`}
                              >
                                   <h3 className="text-lg font-semibold mb-6">
                                        {section.title}
                                   </h3>
                                   <ul className="space-y-4">
                                        {section.links.map(
                                             (link, linkIndex) => (
                                                  <li key={linkIndex}>
                                                       <Link
                                                            href={link.href}
                                                            className="text-gray-400 hover:text-white transition-colors duration-200 hover:translate-x-1 inline-block"
                                                       >
                                                            {link.name}
                                                       </Link>
                                                  </li>
                                             )
                                        )}
                                   </ul>
                              </div>
                         ))}

                         <div className="animate-slide-in-up animate-delay-400">
                              <h3 className="text-lg font-semibold mb-6">
                                   Contact Info
                              </h3>
                              <div className="space-y-4 text-gray-400">
                                   <p className="leading-relaxed">
                                        📍 123 Education Street
                                        <br />
                                        Tech City, TC 12345
                                   </p>
                                   <p>📞 (555) 123-4567</p>
                                   <p>✉️ info@bingoacademy.com</p>
                                   <p>✉️ training@bingoacademy.com</p>
                                   <p className="leading-relaxed">
                                        🕒 Mon-Fri: 9AM-6PM
                                        <br />
                                        Sat: 10AM-4PM
                                   </p>
                              </div>
                         </div>
                    </div>

                    <div className="border-t border-gray-800 mt-16 pt-8 text-center text-gray-400">
                         <p>
                              &copy; 2024 Bingo Academy. All rights reserved. |
                              Privacy Policy | Terms of Service
                         </p>
                    </div>
               </div>
          </footer>
     );
}

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";

export default function Header() {
     const pathname = usePathname();
     return (
          <header className="bg-white/95 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-orange-100/50">
               <div className="container mx-auto px-4 sm:px-6 py-4">
                    <nav className="flex items-center justify-between">
                         <Link
                              href="/"
                              className="flex items-center space-x-3 group"
                         >
                              <Image
                                   src="/logo/bingoacademy.png"
                                   alt="Bingo Academy Logo"
                                   width={120}
                                   height={120}
                                   className=""
                              />
                         </Link>

                         <div className="hidden lg:flex items-center space-x-8">
                              {[
                                   { name: "Home", href: "/" },
                                   {
                                        name: "Training Programs",
                                        href: "/courses",
                                   },
                                   { name: "About", href: "/about" },
                                   { name: "Blog", href: "/blog" },
                                   { name: "Events", href: "/events" },
                                   { name: "Contact", href: "/contact" },
                              ].map((item) => {
                                   const isActive =
                                        item.href === "/"
                                             ? pathname === "/"
                                             : pathname.startsWith(item.href);
                                   return (
                                        <Link
                                             key={item.name}
                                             href={item.href}
                                             className={`font-medium transition-all duration-300 hover:text-orange-600 relative group ${
                                                  isActive
                                                       ? "text-orange-600"
                                                       : "text-gray-700"
                                             }`}
                                        >
                                             {item.name}
                                             <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-600 to-orange-500 transition-all duration-300 group-hover:w-full"></span>
                                        </Link>
                                   );
                              })}
                         </div>

                         <Link href="/contact">
                              <Button className="bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 shadow-lg hover:shadow-orange-200 transition-all duration-300 hover:scale-105 px-6 py-2 focus-ring">
                                   Request Quote
                              </Button>
                         </Link>
                    </nav>
               </div>
          </header>
     );
}

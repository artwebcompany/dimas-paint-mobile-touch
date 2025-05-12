
import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { NavLink, useLocation } from 'react-router-dom';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { motion } from "framer-motion";

// Updated navigation items with pages
const NAV_ITEMS = [
  { label: 'Home', href: '/' },
  { 
    label: 'Layanan', 
    href: '/services',
    submenu: [
      { label: 'Body Repair', href: '/services/body-repair' },
      { label: 'Pengecatan', href: '/services/painting' },
      { label: 'Layanan Khusus', href: '/services/special' },
    ]
  },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Testimonial', href: '/testimonials' },
  { label: 'Kontak', href: '/contact' },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Close mobile menu when route changes
    setIsMenuOpen(false);
  }, [location.pathname]);

  return (
    <header className={cn(
      "fixed top-0 left-0 w-full z-40 transition-all duration-300",
      isScrolled ? "bg-white/95 shadow-sm backdrop-blur-sm" : "bg-transparent"
    )}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-3 md:py-4">
          {/* Logo */}
          <NavLink to="/" className="flex items-center">
            <img 
              src="/dimas-paint-logo.png" 
              alt="Dimas Paint Jogja" 
              className="h-10 md:h-12"
              onError={(e) => {
                e.currentTarget.src = "https://via.placeholder.com/150x60?text=Dimas+Paint+Jogja";
              }} 
            />
          </NavLink>

          {/* Desktop Navigation - Using NavigationMenu for desktop */}
          <div className="hidden md:block">
            <NavigationMenu>
              <NavigationMenuList>
                {NAV_ITEMS.map((item) => (
                  <NavigationMenuItem key={item.label}>
                    {item.submenu ? (
                      <>
                        <NavigationMenuTrigger className="text-foreground hover:text-dpblue-500">
                          {item.label}
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                          <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                            {item.submenu.map((subItem) => (
                              <li key={subItem.label}>
                                <NavigationMenuLink asChild>
                                  <NavLink
                                    to={subItem.href}
                                    className={({ isActive }) => 
                                      cn(
                                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                                        isActive ? "bg-accent text-accent-foreground" : "transparent"
                                      )
                                    }
                                  >
                                    <div className="text-sm font-medium leading-none">{subItem.label}</div>
                                  </NavLink>
                                </NavigationMenuLink>
                              </li>
                            ))}
                          </ul>
                        </NavigationMenuContent>
                      </>
                    ) : (
                      <NavLink 
                        to={item.href}
                        className={({ isActive }) => 
                          cn(
                            navigationMenuTriggerStyle(),
                            "bg-transparent text-foreground font-medium text-sm transition-colors",
                            isActive ? "text-dpblue-500 font-semibold" : "hover:text-dpblue-500"
                          )
                        }
                      >
                        {item.label}
                      </NavLink>
                    )}
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Call to Action Button */}
          <div className="hidden md:block">
            <Button variant="default" className="bg-dpblue-500 hover:bg-dpblue-600">
              <a href="tel:+6281573635143">Hubungi Sekarang</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation - Enhanced with animations */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-white/95 backdrop-blur-sm shadow-lg"
        >
          <nav className="container flex flex-col py-4">
            {NAV_ITEMS.map((item) => (
              <div key={item.label} className="border-b border-gray-100 last:border-0">
                {item.submenu ? (
                  <div className="py-3 px-4">
                    <div className="flex justify-between items-center">
                      <NavLink
                        to={item.href}
                        className={({ isActive }) => 
                          cn(
                            "text-foreground font-medium",
                            isActive ? "text-dpblue-500" : ""
                          )
                        }
                      >
                        {item.label}
                      </NavLink>
                      <ChevronDown size={16} />
                    </div>
                    <div className="pl-4 mt-2">
                      {item.submenu.map((subItem) => (
                        <NavLink
                          key={subItem.label}
                          to={subItem.href}
                          className={({ isActive }) => 
                            cn(
                              "block py-2 text-sm",
                              isActive ? "text-dpblue-500" : "text-gray-600 hover:text-dpblue-500"
                            )
                          }
                        >
                          {subItem.label}
                        </NavLink>
                      ))}
                    </div>
                  </div>
                ) : (
                  <NavLink
                    to={item.href}
                    className={({ isActive }) => 
                      cn(
                        "block py-3 px-4 text-foreground",
                        isActive ? "text-dpblue-500 font-medium" : "hover:bg-dpblue-50 hover:text-dpblue-500"
                      )
                    }
                  >
                    {item.label}
                  </NavLink>
                )}
              </div>
            ))}
            <Button className="mt-4 mx-4 bg-dpblue-500 hover:bg-dpblue-600">
              <a href="tel:+6281573635143" className="w-full text-center">Hubungi Sekarang</a>
            </Button>
          </nav>
        </motion.div>
      )}
    </header>
  );
}

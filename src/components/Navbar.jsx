import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import { Menu, X, Phone, Shield, Globe, Check, LogIn, LogOut, UserCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/SupabaseAuthContext";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { user, signOut } = useAuth();

  const navigation = [
    { name: "Home", href: "/en/" },
    { name: "About", href: "/en/about" },
    { name: "Services", href: "/en/services" },
    { name: "Prices", href: "/en/prices" },
    { name: "Service Areas", href: "/en/service-areas" },
    { name: "Blog", href: "/en/blog" },
    { name: "FAQs", href: "/en/faqs" },
    { name: "Contact", href: "/en/contact" },
    { name: "Referral", href: "/en/referral" },
  ];

  const isActive = (path) => location.pathname === path || location.pathname === `/en${path}`;

  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.2,
      },
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  return (
    <nav className="bg-slate-50/80 backdrop-blur-lg sticky top-0 z-50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 lg:flex-col lg:items-center lg:h-auto lg:py-4">
          <div className="flex justify-between items-center w-full lg:justify-center">
            <Link
              to="/"
              className="flex items-center space-x-3 group flex-shrink-0"
            >
              <Shield className="h-8 w-8 text-blue-600 group-hover:animate-pulse lg:h-10 lg:w-10" />
              <span className="lg:inline text-xl font-extrabold text-slate-900 tracking-tight lg:text-2xl">
                Patriot Pest Control
              </span>
            </Link>

            <div className="lg:hidden flex items-center gap-2">
              <Button
                asChild
                className="bg-red-600 hover:bg-red-700 shadow-xl shadow-red-500/60 hover:shadow-red-500/80 transition-all duration-300"
              >
                <a href="tel:509-471-5767" className="flex items-center space-x-2 text-white">
                  <Phone className="h-4 w-4" />
                </a>
              </Button>

              {/* Account Button for mobile */}
              <Button
                asChild
                className="bg-green-600 hover:bg-green-700 shadow-xl shadow-green-500/60 hover:shadow-green-500/80 transition-all duration-300"
              >
                <a href="/customer/auth" className="flex items-center space-x-2 text-white">
                  <UserCircle className="h-4 w-4" />
                </a>
              </Button>

              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-slate-700 hover:text-blue-600 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          <div className="hidden lg:flex items-center space-x-4 mt-4">
            {!user && (
              <Button
                asChild
                className="bg-green-600 hover:bg-green-700 shadow-xl shadow-green-500/60 hover:shadow-green-500/80 transition-all duration-300"
              >
                <a href="/customer/auth" className="flex items-center space-x-2 text-white">
                  <LogIn className="h-4 w-4" />
                  <span className="font-bold text-sm whitespace-nowrap">Login / Register</span>
                </a>
              </Button>
            )}
            <div className="flex items-center space-x-1 bg-slate-200/50 p-1 rounded-full">
              <LayoutGroup>
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`relative px-3 py-2 text-sm font-semibold transition-colors duration-300 rounded-full whitespace-nowrap ${
                      isActive(item.href) ? "text-blue-700" : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    {item.name}
                    {isActive(item.href) && (
                      <motion.span
                        layoutId="active-pill"
                        className="absolute inset-0 bg-white rounded-full shadow-md -z-10"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                  </Link>
                ))}
                {user ? (
                  <>
                    <Link
                      to="/en/customer/dashboard"
                      className={`relative px-3 py-2 text-sm font-semibold transition-colors duration-300 rounded-full whitespace-nowrap ${
                        isActive("/en/customer/dashboard")
                          ? "text-blue-700"
                          : "text-slate-600 hover:text-slate-900"
                      }`}
                    >
                      Dashboard
                      {isActive("/en/customer/dashboard") && (
                        <motion.span
                          layoutId="active-pill"
                          className="absolute inset-0 bg-white rounded-full shadow-md -z-10"
                          transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        />
                      )}
                    </Link>
                    <Button
                      onClick={signOut}
                      variant="ghost"
                      size="sm"
                      className="relative px-3 py-2 text-sm font-semibold transition-colors duration-300 rounded-full whitespace-nowrap text-slate-600 hover:text-slate-900"
                    >
                      Sign Out
                    </Button>
                  </>
                ) : null}
              </LayoutGroup>
            </div>

            <Button
              asChild
              className="bg-red-600 hover:bg-red-700 shadow-xl shadow-red-500/60 hover:shadow-red-500/80 transition-all duration-300"
            >
              <a href="tel:509-471-5767" className="flex items-center space-x-2 text-white">
                <Phone className="h-4 w-4" />
                <span className="font-bold text-sm whitespace-nowrap">(509) 471-5767</span>
              </a>
            </Button>
          </div>
        </div>
        <div className="hidden lg:block lg:absolute lg:right-4 lg:top-20">
          
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={mobileMenuVariants}
            className="lg:hidden absolute top-full left-0 w-full bg-slate-50/95 backdrop-blur-lg shadow-lg max-h-[calc(100vh-5rem)] overflow-y-auto"
          >
            <div className="flex flex-col space-y-2 p-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`px-4 py-3 text-base font-medium rounded-lg transition-colors duration-200 ${
                    isActive(item.href)
                      ? "text-white bg-blue-600"
                      : "text-slate-700 hover:bg-slate-200"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              {user ? (
                <>
                  <Link
                    to="/en/customer/dashboard"
                    onClick={() => setIsOpen(false)}
                    className={`px-4 py-3 text-base font-medium rounded-lg transition-colors duration-200 ${
                      isActive("/en/customer/dashboard")
                        ? "text-white bg-blue-600"
                        : "text-slate-700 hover:bg-slate-200"
                    }`}
                  >
                    Dashboard
                  </Link>
                  <Button
                    onClick={() => {
                      signOut();
                      setIsOpen(false);
                    }}
                    variant="ghost"
                    className="w-full justify-start px-4 py-3 text-base font-medium rounded-lg transition-colors duration-200 text-slate-700 hover:bg-slate-200"
                  >
                    Sign Out
                  </Button>
                </>
              ) : (
                <Button
                  asChild
                  className="w-full bg-green-600 hover:bg-green-700 shadow-xl shadow-green-500/60 hover:shadow-green-500/80 mt-2"
                >
                  <a
                    href="/customer/auth"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-center space-x-2 text-white"
                  >
                    <LogIn className="h-5 w-5" />
                    <span className="font-bold">Login / Register</span>
                  </a>
                </Button>
              )}
              <div className="border-t border-slate-200 mt-4 pt-4">
                <Button
                  asChild
                  className="w-full bg-red-600 hover:bg-red-700 shadow-xl shadow-red-500/60 hover:shadow-red-500/80 mt-2"
                >
                  <a
                    href="tel:509-471-5767"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-center space-x-2 text-white"
                  >
                    <Phone className="h-5 w-5" />
                    <span className="font-bold">(509) 471-5767</span>
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

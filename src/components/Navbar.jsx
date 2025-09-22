import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import { Menu, X, Phone, Shield, Globe, Check, LogIn, LogOut, UserCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
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
  const { language, setLanguage } = useLanguage();
  const { user, signOut } = useAuth();

  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to the language-specific URL if not already there
    const currentPath = location.pathname;
    const pathSegments = currentPath.split("/").filter(Boolean);

    if (pathSegments[0] !== language && !["admin", "customer"].includes(pathSegments[0])) {
      // Only redirect if the first segment is not the current language
      // and not an admin or customer path (which are not language-specific)
      const newPath = `/${language}${currentPath}`;
      navigate(newPath, { replace: true });
    }
  }, [language, location.pathname, navigate]);

  const handleLanguageChange = (langCode) => {
    setLanguage(langCode);
    const currentPath = location.pathname;
    const pathSegments = currentPath.split("/").filter(Boolean);

    let newPath;
    if (pathSegments[0] === language) {
      // If current path already has a language prefix, replace it
      pathSegments[0] = langCode;
      newPath = `/${pathSegments.join("/")}`;
    } else {
      // If no language prefix, add it
      newPath = `/${langCode}${currentPath}`;
    }
    navigate(newPath);
  };

  const getLocalizedHref = (href) => {
    const pathSegments = href.split("/").filter(Boolean);
    if (pathSegments[0] === language) {
      return href;
    } else {
      return `/${language}${href}`;
    }
  };

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Prices", href: "/prices" },
    { name: "Service Areas", href: "/service-areas" },
    { name: "Blog", href: "/blog" },
    { name: "FAQs", href: "/faqs" },
    { name: "Contact", href: "/contact" },
    { name: "Referral", href: "/referral" },
  ];

  const languages = [
    { code: "en", name: "English" },
    { code: "es", name: "Español" },
    { code: "ru", name: "Русский" },
    { code: "uk", name: "Українська" },
    { code: "vi", name: "Tiếng Việt" },
    { code: "zh", name: "中文 (简体)" },
    { code: "fr", name: "Français" },
  ];

  const isActive = (path) => location.pathname === path;

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
              to={getLocalizedHref("/")}
              className="flex items-center space-x-3 group flex-shrink-0"
            >
              <Shield className="h-8 w-8 text-blue-600 group-hover:animate-pulse lg:h-10 lg:w-10" />
              <span className="lg:inline text-xl font-extrabold text-slate-900 tracking-tight lg:text-2xl">
                Patriot Pest Control
              </span>
            </Link>

            <div className="lg:hidden flex items-center gap-2">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full w-10 h-10 bg-slate-200/50 border-none hover:bg-slate-200"
                  >
                    <Globe className="h-5 w-5 text-slate-600" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  {languages.map((lang) => (
                    <DropdownMenuItem
                      key={lang.code}
                      onSelect={() => handleLanguageChange(lang.code)}
                    >
                      <span className="flex items-center">
                        {lang.name}{" "}
                        {language === lang.code && <Check className="h-4 w-4 ml-2 text-blue-600" />}
                      </span>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

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
                    to={getLocalizedHref(item.href)}
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
                      to="/customer/dashboard"
                      className={`relative px-3 py-2 text-sm font-semibold transition-colors duration-300 rounded-full whitespace-nowrap ${
                        isActive("/customer/dashboard")
                          ? "text-blue-700"
                          : "text-slate-600 hover:text-slate-900"
                      }`}
                    >
                      Dashboard
                      {isActive("/customer/dashboard") && (
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
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="rounded-full w-10 h-10 bg-slate-200/50 border-none hover:bg-slate-200"
              >
                <Globe className="h-5 w-5 text-slate-600" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {languages.map((lang) => (
                <DropdownMenuItem key={lang.code} onSelect={() => handleLanguageChange(lang.code)}>
                  <span className="flex items-center">
                    {lang.name}{" "}
                    {language === lang.code && <Check className="h-4 w-4 ml-2 text-blue-600" />}
                  </span>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
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
                  to={getLocalizedHref(item.href)}
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
                    to="/customer/dashboard"
                    onClick={() => setIsOpen(false)}
                    className={`px-4 py-3 text-base font-medium rounded-lg transition-colors duration-200 ${
                      isActive("/customer/dashboard")
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
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="ghost"
                      className="w-full justify-start px-4 py-3 text-base font-medium rounded-lg transition-colors duration-200 text-slate-700 hover:bg-slate-200"
                    >
                      <Globe className="h-5 w-5 mr-2" />
                      <span>{languages.find((lang) => lang.code === language)?.name}</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    {languages.map((lang) => (
                      <DropdownMenuItem
                        key={lang.code}
                        onSelect={() => {
                          handleLanguageChange(lang.code);
                          setIsOpen(false);
                        }}
                      >
                        <span className="flex items-center">
                          {lang.name}{" "}
                          {language === lang.code && (
                            <Check className="h-4 w-4 ml-2 text-blue-600" />
                          )}
                        </span>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
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

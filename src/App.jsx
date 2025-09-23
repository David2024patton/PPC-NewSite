import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import ServiceDetail from "./pages/ServiceDetail";
import ServiceAreas from "./pages/ServiceAreas";
import Contact from "./pages/Contact";
import Prices from "./pages/Prices";
import FAQs from "./pages/FAQs";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import CustomerAuth from "./pages/CustomerAuth";
import CustomerDashboard from "./pages/CustomerDashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import Referral from "./pages/Referral";
import Sitemap from "./pages/Sitemap";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfUse from "./pages/TermsOfUse";
import BronzeCheckout from "./pages/BronzeCheckout";
import SilverCheckout from "./pages/SilverCheckout";
import GoldCheckout from "./pages/GoldCheckout";
import PlatinumCheckout from "./pages/PlatinumCheckout";
import JsonLd from "./components/JsonLd";
import { Toaster } from "./components/ui/toaster";
import { LanguageProvider } from "./contexts/LanguageContext";

// Define website schema for JSON-LD
const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "PPC Pilot",
  url: "https://www.ppcpilot.com",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://www.ppcpilot.com/search?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

// Define LocalBusiness schema for JSON-LD
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "PPC Pilot",
  image: "https://www.ppcpilot.com/logo.png",
  address: {
    "@type": "PostalAddress",
    streetAddress: "123 Example St",
    addressLocality: "Example City",
    addressRegion: "EX",
    postalCode: "12345",
    addressCountry: "US",
  },
  telephone: "+1-555-555-5555",
  priceRange: "$$",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
      ],
      opens: "09:00",
      closes: "17:00",
    },
  ],
  url: "https://www.ppcpilot.com",
};

// Define AboutPage schema for JSON-LD
const aboutPageSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "About Us - PPC Pilot",
  url: "https://www.ppcpilot.com/about",
  description: "Learn more about PPC Pilot and our mission.",
};

function App() {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;

  useEffect(() => {
    // Set HTML lang attribute
    document.documentElement.lang = currentLang;
    i18n.changeLanguage(currentLang);

    // Update title and description from translations
    document.title = t("document.title");
    document
      .querySelector("meta[name='description']")
      .setAttribute("content", t("document.description"));

    // Generate and inject alternate language links
    const alternateLinks = [
      "en",
      "es",
      "fr",
      "de",
      "zh",
      "ru",
      "uk",
      "vi",
    ]
      .map((lang) => {
        const link = document.createElement("link");
        link.setAttribute("rel", "alternate");
        link.setAttribute("hreflang", lang);
        link.setAttribute("href", `/${lang}${window.location.pathname.substring(3)}`); // Adjust path for current language
        return link.outerHTML;
      })
      .join("");

    const head = document.head;
    const existingAlternateLinks = head.querySelectorAll("link[rel='alternate']");
    existingAlternateLinks.forEach((link) => link.remove());
    head.insertAdjacentHTML("beforeend", alternateLinks);
  }, [currentLang, t, i18n]);

  // Determine which schemas to include based on the current route
  const schemasToInclude = [websiteSchema, localBusinessSchema];
  if (window.location.pathname.includes("/about")) {
    schemasToInclude.push(aboutPageSchema);
  }

  return (
    <>
      <Helmet>
        <title>{t("document.title")}</title>
        <meta name="description" content={t("document.description")} />
        <html lang={currentLang} />
      </Helmet>
      <JsonLd schemas={schemasToInclude} />
      <Navbar />
      <main>
        <Routes>
          <Route path="/:lang/" element={<Home />} />
          <Route path="/:lang/about" element={<About />} />
          <Route path="/:lang/services" element={<Services />} />
          <Route path="/:lang/services/:serviceId" element={<ServiceDetail />} />
          <Route path="/:lang/service-areas" element={<ServiceAreas />} />
          <Route path="/:lang/contact" element={<Contact />} />
          <Route path="/:lang/prices" element={<Prices />} />
          <Route path="/:lang/faqs" element={<FAQs />} />
          <Route path="/:lang/blog" element={<Blog />} />
          <Route path="/:lang/blog/:blogPostId" element={<BlogPost />} />
          <Route path="/:lang/admin/login" element={<AdminLogin />} />
          <Route
            path="/:lang/admin/dashboard"
            element={
              <ProtectedRoute>
                <AdminDashboard />
              </ProtectedRoute>
            }
          />
          <Route path="/:lang/customer/auth" element={<CustomerAuth />} />
          <Route
            path="/:lang/customer/dashboard"
            element={
              <ProtectedRoute>
                <CustomerDashboard />
              </ProtectedRoute>
            }
          />
          <Route path="/:lang/referral" element={<Referral />} />
          <Route path="/:lang/sitemap" element={<Sitemap />} />
          <Route path="/:lang/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/:lang/terms-of-use" element={<TermsOfUse />} />
          <Route path="/:lang/checkout/bronze" element={<BronzeCheckout />} />
          <Route path="/:lang/checkout/silver" element={<SilverCheckout />} />
          <Route path="/:lang/checkout/gold" element={<GoldCheckout />} />
          <Route path="/:lang/checkout/platinum" element={<PlatinumCheckout />} />
          {/* Default redirect to English home if no language is specified */}
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
      <Toaster />
    </>
  );
}

export default App;

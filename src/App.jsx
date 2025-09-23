import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Helmet } from "react-helmet-async";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import ServiceAreas from "./pages/ServiceAreas";
import ServiceArea from "./pages/ServiceArea";
import Contact from "./pages/Contact";
import Prices from "./pages/Prices";
import FAQs from "./pages/FAQs";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfUse from "./pages/TermsOfUse";
import Sitemap from "./pages/Sitemap";
import Referral from "./pages/Referral";
import CustomerAuth from "./pages/CustomerAuth";
import CustomerDashboard from "./pages/CustomerDashboard";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import BronzeCheckout from "./pages/BronzeCheckout";
import SilverCheckout from "./pages/SilverCheckout";
import GoldCheckout from "./pages/GoldCheckout";
import PlatinumCheckout from "./pages/PlatinumCheckout";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <HelmetProvider>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:lang" element={<Home />} />
        <Route path="/:lang/about" element={<About />} />
        <Route path="/:lang/services" element={<Services />} />
        <Route path="/:lang/service-areas" element={<ServiceAreas />} />
        <Route path="/:lang/service-area/:id" element={<ServiceArea />} />
        <Route path="/:lang/contact" element={<Contact />} />
        <Route path="/:lang/prices" element={<Prices />} />
        <Route path="/:lang/faqs" element={<FAQs />} />
        <Route path="/:lang/blog" element={<Blog />} />
        <Route path="/:lang/blog/:id" element={<BlogPost />} />
        <Route path="/:lang/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/:lang/terms-of-use" element={<TermsOfUse />} />
        <Route path="/:lang/sitemap" element={<Sitemap />} />
        <Route path="/:lang/referral" element={<Referral />} />
        <Route path="/:lang/customer-auth" element={<CustomerAuth />} />
        <Route
          path="/:lang/customer-dashboard"
          element={
            <ProtectedRoute>
              <CustomerDashboard />
            </ProtectedRoute>
          }
        />
        <Route path="/:lang/admin-login" element={<AdminLogin />} />
        <Route
          path="/:lang/admin-dashboard"
          element={
            <ProtectedRoute adminOnly>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />
        <Route path="/:lang/bronze-checkout" element={<BronzeCheckout />} />
        <Route path="/:lang/silver-checkout" element={<SilverCheckout />} />
        <Route path="/:lang/gold-checkout" element={<GoldCheckout />} />
        <Route path="/:lang/platinum-checkout" element={<PlatinumCheckout />} />
      </Routes>
      <Footer />
    </HelmetProvider>
  );
}

export default App;

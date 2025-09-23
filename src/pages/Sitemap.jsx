import React from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { serviceAreas } from "@/data/serviceAreasData";

const Sitemap = () => {
  const mainLinks = [
    { path: "/", name: "Home" },
    { path: "/about", name: "About Us" },
    { path: "/services", name: "Services" },
    { path: "/prices", name: "Prices" },
    { path: "/service-areas", name: "Service Areas" },
    { path: "/blog", name: "Blog" },
    { path: "/faqs", name: "FAQs" },
    { path: "/contact", name: "Contact Us" },
    { path: "/referral", name: "Referral Program" },
  ];

  const serviceLinks = [
    { path: "/services/residential-pest-control", name: "Residential Pest Control" },
    { path: "/services/commercial-pest-control", name: "Commercial Pest Control" },
    { path: "/services/termite-control", name: "Termite Control" },
    { path: "/services/rodent-control", name: "Rodent Control" },
    { path: "/services/bed-bug-control", name: "Bed Bug Control" },
    { path: "/services/mosquito-control", name: "Mosquito Control" },
  ];

  const legalLinks = [
    { path: "/privacy-policy", name: "Privacy Policy" },
    { path: "/terms-of-use", name: "Terms of Use" },
  ];

  const areaLinks = serviceAreas.map((area) => ({
    path: `/service-areas/${area.slug}`,
    name: `${area.name}, ${area.state}`,
  }));

  const renderLinks = (links) => (
    <ul className="space-y-2">
      {links.map((link) => (
        <li key={link.path}>
          <Link
            to={link.path}
            className="text-blue-600 hover:underline hover:text-blue-800 transition-colors"
          >
            {link.name}
          </Link>
        </li>
      ))}
    </ul>
  );

  return (
    <>
      <Helmet>
        <title>Sitemap - Patriot Pest Control Co</title>
        <meta
          name="description"
          content="Sitemap for Patriot Pest Control Co. Find all pages on our website."
        />
        <meta name="robots" content="noindex, follow" />
      </Helmet>

      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">Sitemap</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b pb-2">Main Pages</h2>
                {renderLinks(mainLinks)}

                <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4 border-b pb-2">
                  Our Services
                </h2>
                {renderLinks(serviceLinks)}

                <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4 border-b pb-2">Legal</h2>
                {renderLinks(legalLinks)}
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b pb-2">
                  Service Areas
                </h2>
                {renderLinks(areaLinks)}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Sitemap;

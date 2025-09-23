import React from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, ArrowRight } from "lucide-react";
import { serviceAreas } from "@/data/serviceAreasData";

const ServiceAreas = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="service-areas-page"
    >
      <Helmet>
        <title>Our Service Areas - PPC Professional Pest Control | WA & ID</title>
        <meta name="description" content="We proudly serve Spokane, Coeur d'Alene, Tri-Cities, and many other communities across Washington and Idaho. Find your local pest control expert." />
        <meta name="keywords" content="pest control service areas, Spokane pest control, Coeur d'Alene pest control, Washington pest control, Idaho pest control" />
      </Helmet>

      {/* Hero Section */}
      <section className="hero-gradient text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Service Areas</h1>
            <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Proudly serving communities across Washington and Idaho. Find your local PPC Professional Pest Control team.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Service Areas Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceAreas.map((area, index) => (
              <motion.div
                key={area.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-lg p-6 flex flex-col"
              >
                <h3 className="text-2xl font-bold mb-2 text-gray-900">
                  {area.name}, {area.state}
                </h3>
                <p className="text-sm text-gray-600 mb-4 flex-grow">{area.description}</p>
                <Link to={`/service-areas/${area.slug}`} className="mt-auto">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    View Details <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">Don't See Your Area?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Our service area is always expanding. Contact us to see if we can provide service to your location.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                <a href="tel:509-471-5767" className="flex items-center justify-center space-x-2">
                  <Phone className="h-5 w-5" />
                  <span>Contact Us</span>
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                className="bg-red-600 hover:bg-red-700 shadow-xl shadow-red-500/60 hover:shadow-red-500/80 transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <a
                  href="tel:509-471-5767"
                  className="flex items-center justify-center space-x-2 text-white"
                >
                  <Phone className="h-5 w-5" />
                  <span className="font-bold">Call (509) 471-5767</span>
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default ServiceAreas;

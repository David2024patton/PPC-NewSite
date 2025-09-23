import React from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight, Phone } from "lucide-react";

const Services = () => {
  const servicesData = [
    {
      slug: "residential-pest-control",
      title: "Residential Pest Control",
      shortDescription: "Protect your home and family from unwanted pests with our effective and safe residential pest control services.",
      imageSrc: "/images/residential-pest-control.webp",
      imageAlt: "Residential Pest Control",
    },
    {
      slug: "commercial-pest-control",
      title: "Commercial Pest Control",
      shortDescription: "Tailored pest management solutions to ensure your business remains pest-free and compliant with health standards.",
      imageSrc: "/images/commercial-pest-control.webp",
      imageAlt: "Commercial Pest Control",
    },
    {
      slug: "ant-control",
      title: "Ant Control",
      shortDescription: "Effective treatments to eliminate ant colonies and prevent future infestations, protecting your home and property.",
      imageSrc: "/images/ant-control.webp",
      imageAlt: "Ant Control",
    },
    {
      slug: "spider-control",
      title: "Spider Control",
      shortDescription: "Specialized services to remove spiders and their webs, creating a safer and more comfortable environment.",
      imageSrc: "/images/spider-control.webp",
      imageAlt: "Spider Control",
    },
    {
      slug: "rodent-control",
      title: "Rodent Control",
      shortDescription: "Comprehensive rodent extermination and exclusion services to protect your property from damage and disease.",
      imageSrc: "/images/rodent-control.webp",
      imageAlt: "Rodent Control",
    },
    {
      slug: "wasp-hornet-removal",
      title: "Wasp & Hornet Removal",
      shortDescription: "Safe and efficient removal of dangerous wasp and hornet nests from your property.",
      imageSrc: "/images/wasp-removal.webp",
      imageAlt: "Wasp and Hornet Removal",
    },
    {
      slug: "termite-control",
      title: "Termite Control",
      shortDescription: "Advanced termite detection and treatment to protect your home from structural damage.",
      imageSrc: "/images/termite-control.webp",
      imageAlt: "Termite Control",
    },
    {
      slug: "bed-bug-treatment",
      title: "Bed Bug Treatment",
      shortDescription: "Thorough and effective bed bug extermination services to ensure a peaceful night's sleep.",
      imageSrc: "/images/bed-bug-treatment.webp",
      imageAlt: "Bed Bug Treatment",
    },
    {
      slug: "mosquito-control",
      title: "Mosquito Control",
      shortDescription: "Reduce mosquito populations around your home, allowing you to enjoy your outdoor spaces again.",
      imageSrc: "/images/mosquito-control.webp",
      imageAlt: "Mosquito Control",
    },
  ];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="services-page"
    >
      <Helmet>
        <title>Our Pest Control Services - PPC Professional Pest Control</title>
        <meta name="description" content="Comprehensive pest control services for homes and businesses. We handle ants, spiders, rodents, wasps, and more. Get a free quote today!" />
        <meta name="keywords" content="pest control services, residential pest control, commercial pest control, ant control, spider control, rodent control, wasp removal, pest management" />
      </Helmet>

      {/* Hero Section */}
      <section className="hero-gradient text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Services</h1>
            <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Comprehensive and effective pest control solutions for your home and business.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((service, index) => (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-lg p-6 flex flex-col"
              >
                <img
                  src={service.imageSrc}
                  alt={service.imageAlt}
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <h3 className="text-2xl font-bold mb-2 text-gray-900">{service.title}</h3>
                <p className="text-sm text-gray-600 mb-4 flex-grow">{service.shortDescription}</p>
                <Link to={`/services/${service.slug}`} className="mt-auto">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    Learn More <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose PPC Professional Pest Control?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We are committed to providing the best pest control experience with a focus on safety, effectiveness, and customer satisfaction.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-lg text-center"
            >
              <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Experienced Professionals</h3>
              <p className="text-gray-600">Our team consists of highly trained and certified pest control experts.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-lg text-center"
            >
              <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Eco-Friendly Solutions</h3>
              <p className="text-gray-600">We use safe and environmentally responsible pest control methods.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-lg text-center"
            >
              <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Guaranteed Satisfaction</h3>
              <p className="text-gray-600">Your satisfaction is our priority. We stand by our work.</p>
            </motion.div>
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
            <h2 className="text-3xl font-bold mb-4">Ready for a Pest-Free Home or Business?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Contact us today for a free estimate and let us take care of your pest problems.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                <Link to="/contact" className="flex items-center justify-center space-x-2">
                  <Phone className="h-5 w-5" />
                  <span>Get a Free Estimate</span>
                </Link>
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

export default Services;

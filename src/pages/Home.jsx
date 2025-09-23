import React from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Shield, CheckCircle, Phone, Star, Users, Clock, Award } from "lucide-react";
import JsonLd from "@/components/JsonLd";

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="home-page"
    >
      <Helmet>
        <title>PPC - Professional Pest Control</title>
        <meta name="description" content="Professional Pest Control services for residential and commercial properties. We offer effective and eco-friendly pest management solutions." />
        <meta name="keywords" content="pest control, exterminator, residential pest control, commercial pest control, termite control, rodent control, bed bug control, mosquito control, professional pest control, eco-friendly pest control" />
      </Helmet>

      <JsonLd
        schema={[
          {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "PPC - Professional Pest Control",
            image: "https://www.example.com/logo.png",
            "@id": "https://www.example.com",
            url: "https://www.example.com",
            telephone: "+15094715767",
            address: {
              "@type": "PostalAddress",
              streetAddress: "123 Pest Control Rd",
              addressLocality: "Spokane",
              addressRegion: "WA",
              postalCode: "99201",
              addressCountry: "US",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: "47.658780",
              longitude: "-117.426048",
            },
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
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Saturday", "Sunday"],
                opens: "10:00",
                closes: "16:00",
              },
            ],
            sameAs: [
              "https://www.facebook.com/PPCpestcontrol",
              "https://twitter.com/PPCpestcontrol",
              "https://www.instagram.com/PPCpestcontrol",
            ],
          },
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "PPC - Professional Pest Control",
            url: "https://www.example.com",
            potentialAction: {
              "@type": "SearchAction",
              target: {
                "@type": "EntryPoint",
                urlTemplate: "https://www.example.com/search?q={search_term_string}",
              },
              "query-input": "required name=search_term_string",
            },
          },
        ]}
      />
    <section className="hero-gradient text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Your Trusted Partner in Pest Control</h1>
            <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Effective, eco-friendly, and reliable pest management solutions for a healthier home and business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                <Link to="/prices">Get a Free Quote</Link>
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
                  <span className="font-bold">Call Us Today</span>
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>

    {/* About Section */}
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              About Professional Pest Control
            </h2>
            <h3 className="text-xl text-blue-600 mb-4">Your Local Experts in Pest Management</h3>
            <p className="text-gray-600 mb-6 max-w-3xl mx-auto">
              PPC is dedicated to providing top-tier pest control services. With years of experience, our certified technicians use the latest methods to ensure your property is pest-free and safe.
            </p>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-4 mb-6 max-w-4xl mx-auto">
              {[ // Features array for About section
                { icon: Award, title: "Certified Experts" },
                { icon: Users, title: "Professional Team" },
                { icon: CheckCircle, title: "Cost-Effective Solutions" },
                { icon: Clock, title: "Save Time & Money" },
                { icon: Phone, title: "Premium Support" },
              ].map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <feature.icon className="h-5 w-5 text-blue-600" />
                  <span className="text-sm font-medium text-gray-700">{feature.title}</span>
                </div>
              ))}
            </div>
            <Link to="/about">
              <Button className="bg-blue-600 hover:bg-blue-700">
                Explore About Us
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>

    {/* Services Section */}
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Our Comprehensive Pest Control Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer a wide range of pest control services tailored to meet your specific needs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[ // Services array
            {
              title: "Residential Pest Control",
              description: "Protect your home and family from unwanted pests with our effective residential solutions.",
              icon: "🏠",
              slug: "residential-pest-control",
            },
            {
              title: "Commercial Pest Control",
              description: "Maintain a pest-free environment for your business with our discreet and efficient commercial services.",
              icon: "🏢",
              slug: "commercial-pest-control",
            },
            {
              title: "Termite Control",
              description: "Comprehensive termite inspection, treatment, and prevention to safeguard your property.",
              icon: "🐛",
              slug: "termite-control",
            },
            {
              title: "Rodent Control",
              description: "Effective rodent extermination and exclusion services to keep your property free from rats and mice.",
              icon: "🐭",
              slug: "rodent-control",
            },
            {
              title: "Bed Bug Control",
              description: "Specialized treatments to eliminate bed bugs and ensure a peaceful night's sleep.",
              icon: "🛏️",
              slug: "bed-bug-control",
            },
            {
              title: "Mosquito Control",
              description: "Reduce mosquito populations around your property for a more enjoyable outdoor experience.",
              icon: "🦟",
              slug: "mosquito-control",
            },
          ].map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="service-card bg-white p-6 rounded-lg shadow-lg"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <Link to={`/services/${service.slug}`}>
                <Button variant="outline" className="w-full">
                  Learn More
                </Button>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Proactive Control Section */}
    <section className="py-16 bg-blue-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6">Proactive Pest Control for Lasting Peace of Mind</h2>
            <p className="text-blue-100 mb-6 max-w-3xl mx-auto">
              Don't wait for pests to become a problem. Our proactive approach identifies and addresses potential infestations before they escalate, saving you time, money, and stress.
            </p>
            <p className="text-blue-100 mb-8 max-w-3xl mx-auto">
              With regular inspections and preventative treatments, we create a protective barrier around your property, ensuring long-term pest freedom. Enjoy a healthier, safer environment year-round.
            </p>
            <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              <Link to="/contact">Contact Us Immediately</Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>

    {/* Why Choose Us Section */}
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Why Choose Professional Pest Control?
          </h2>
          <p className="text-xl text-gray-600">Experience the difference with our dedicated team and superior service.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Award className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Unmatched Expertise
            </h3>
            <p className="text-gray-600">Our team consists of highly trained and certified pest control specialists with extensive knowledge of local pest behaviors and effective treatment strategies.</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Shield className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Comprehensive Services
            </h3>
            <p className="text-gray-600">From common household pests to complex commercial infestations, we offer a full spectrum of services, including inspection, treatment, and preventative measures.</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Star className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Guaranteed Customer Satisfaction
            </h3>
            <p className="text-gray-600">Your peace of mind is our priority. We stand behind our work with a satisfaction guarantee, ensuring effective results and exceptional service every time.</p>
          </motion.div>
        </div>
      </div>
    </section>

    {/* CTA Section */}
    <section className="py-16 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-4">Ready for a Pest-Free Environment?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Contact us today for a free consultation and let our experts provide you with the best pest control solutions.
          </p>
          <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
            <Link to="/contact">Get a Free Quote</Link>
          </Button>
        </motion.div>
      </div>
    </section>
    </motion.div>
  );
};

export default Home;

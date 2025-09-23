import React from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { Shield, Award, Users, Clock, CheckCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import JsonLd from "@/components/JsonLd";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="about-page"
    >
      <Helmet>
        <title>About Us - PPC Professional Pest Control</title>
        <meta name="description" content="Learn more about PPC Professional Pest Control, our mission, values, and commitment to providing effective and eco-friendly pest management solutions." />
        <meta name="keywords" content="about us, pest control company, mission, values, eco-friendly, professional, certified technicians" />
      </Helmet>

      <JsonLd
        schema={[
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "PPC Professional Pest Control",
            url: "https://www.example.com/about",
            logo: "https://www.example.com/logo.png",
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+15094715767",
              contactType: "customer service",
            },
            sameAs: [
              "https://www.facebook.com/PPCpestcontrol",
              "https://twitter.com/PPCpestcontrol",
              "https://www.instagram.com/PPCpestcontrol",
            ],
          },
        ]}
      />

      {/* Hero Section */}
      <section className="hero-gradient text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">About Professional Pest Control</h1>
            <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Your Trusted Partner in Effective and Eco-Friendly Pest Management
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story & Mission</h2>
              <p className="text-gray-700 mb-4">
                Founded on the principles of integrity, effectiveness, and customer satisfaction, PPC Professional Pest Control has grown to become a leading pest management provider. Our journey began with a simple goal: to offer superior pest control solutions that are safe for families, pets, and the environment.
              </p>
              <p className="text-gray-700 mb-4">
                Our mission is to protect homes and businesses from the nuisance and dangers of pests through innovative, sustainable, and highly effective methods. We believe in creating healthier living and working environments for our community.
              </p>
              <p className="text-gray-700">
                We are committed to continuous improvement, staying abreast of the latest advancements in pest control technology and eco-friendly practices to deliver the best possible service.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <img
                src="https://via.placeholder.com/600x400"
                alt="Our Story"
                className="rounded-lg shadow-xl w-full"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Core Values</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="value-card p-6 bg-white rounded-lg shadow-lg"
            >
              <Award className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Integrity</h3>
              <p className="text-gray-600">
                We operate with honesty and transparency, building trust with our clients through reliable service and ethical practices.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="value-card p-6 bg-white rounded-lg shadow-lg"
            >
              <CheckCircle className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Effectiveness</h3>
              <p className="text-gray-600">
                Our solutions are proven to be highly effective, ensuring long-lasting pest control and peace of mind for our customers.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="value-card p-6 bg-white rounded-lg shadow-lg"
            >
              <Shield className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Safety</h3>
              <p className="text-gray-600">
                We prioritize the safety of your family, pets, and the environment by using eco-friendly and responsible pest management techniques.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-8">Meet Our Expert Team</h2>
            <p className="text-blue-100 mb-12 max-w-3xl mx-auto">
              Our team of certified and experienced pest control specialists is dedicated to providing you with the highest quality service. We are passionate about what we do and committed to solving your pest problems efficiently and effectively.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="team-member-card bg-white text-gray-900 p-6 rounded-lg shadow-lg"
            >
              <img
                src="https://via.placeholder.com/150"
                alt="Team Member 1"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold mb-2">John Doe</h3>
              <p className="text-blue-600 font-medium">Lead Exterminator</p>
              <p className="text-gray-600 mt-3">
                With over 15 years of experience, John is an expert in identifying and eradicating even the most stubborn pest infestations.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="team-member-card bg-white text-gray-900 p-6 rounded-lg shadow-lg"
            >
              <img
                src="https://via.placeholder.com/150"
                alt="Team Member 2"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold mb-2">Jane Smith</h3>
              <p className="text-blue-600 font-medium">Pest Control Technician</p>
              <p className="text-gray-600 mt-3">
                Jane specializes in eco-friendly pest solutions and ensures every treatment is safe and effective for your property.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="team-member-card bg-white text-gray-900 p-6 rounded-lg shadow-lg"
            >
              <img
                src="https://via.placeholder.com/150"
                alt="Team Member 3"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold mb-2">David Lee</h3>
              <p className="text-blue-600 font-medium">Customer Relations Manager</p>
              <p className="text-gray-600 mt-3">
                David is dedicated to ensuring a seamless customer experience, from initial inquiry to post-service follow-up.
              </p>
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
            <h2 className="text-3xl font-bold mb-4">Ready to Experience the PPC Difference?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Contact us today to schedule a consultation and discover how our expert team can provide you with a pest-free environment.
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

export default About;


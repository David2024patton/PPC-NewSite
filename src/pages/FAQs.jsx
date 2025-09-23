import React, { useState, useMemo } from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import JsonLd from "@/components/JsonLd";

const FAQs = () => {
  const pageData = {
    title: "Frequently Asked Questions",
    description: "Find answers to common questions about our pest control services.",
    breadcrumbs: [
      { name: "Home", href: "/" },
      { name: "FAQs", href: "/faqs" },
    ],
    faqs: [
      {
        question: "What types of pests do you handle?",
        answer:
          "We handle a wide range of pests including ants, spiders, rodents, cockroaches, bed bugs, termites, mosquitoes, and more. Our services are tailored to address your specific pest control needs.",
      },
      {
        question: "Are your pest control methods safe for pets and children?",
        answer:
          "Yes, the safety of your family and pets is our top priority. We use environmentally responsible and pet-friendly products and methods. Our technicians are trained to apply treatments safely and effectively.",
      },
      {
        question: "How often should I have pest control services?",
        answer:
          "The frequency of pest control services depends on several factors, including the type of pest, the severity of the infestation, and your property's location. We offer one-time services, as well as monthly, quarterly, and annual plans. Our experts can recommend the best schedule for you.",
      },
      {
        question: "What can I expect during a pest control visit?",
        answer:
          "During a typical visit, our certified technician will inspect your property to identify pest activity and potential entry points. They will then apply targeted treatments, both inside and outside your home, and provide recommendations for preventing future infestations. The duration varies based on the service.",
      },
      {
        question: "Do you offer a guarantee on your services?",
        answer:
          "Yes, we stand behind our work. Many of our services come with a satisfaction guarantee. If pests return between scheduled visits, we'll re-treat your property at no additional cost. Please discuss specific guarantees with our team.",
      },
      {
        question: "How quickly can you respond to a pest emergency?",
        answer:
          "We understand that some pest problems require immediate attention. We strive to offer prompt service and can often schedule emergency visits within 24-48 hours. Contact us directly to discuss your urgent needs.",
      },
      {
        question: "What areas do you serve?",
        answer:
          "We proudly serve Spokane, Spokane Valley, Coeur d'Alene, Post Falls, and surrounding areas. Please contact us to confirm service availability in your specific location.",
      },
    ],
  };

  return (
    <div className="faqs-page">
      <Helmet>
        <title>{pageData.title} - Patriot Pest Control Co</title>
        <meta name="description" content={pageData.description} />
      </Helmet>

      {/* Breadcrumbs */}
      <section className="py-4 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center space-x-2 text-sm font-medium">
            {pageData.breadcrumbs.map((item, index) => (
              <div key={index} className="flex items-center">
                {index > 0 && <ChevronRight className="h-4 w-4 text-gray-400 mr-2" />}
                {item.href ? (
                  <Link
                    to={item.href}
                    className="text-gray-600 hover:text-gray-900 flex items-center"
                  >
                    {item.name === "Home" && <Home className="h-4 w-4 mr-1" />}
                    {item.name}
                  </Link>
                ) : (
                  <span className="text-gray-900">{item.name}</span>
                )}
              </div>
            ))}
          </nav>
        </div>
      </section>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-extrabold mb-4"
          >
            {pageData.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl opacity-90 max-w-2xl mx-auto"
          >
            {pageData.description}
          </motion.p>
        </div>
      </section>

      {/* FAQs Content */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {pageData.faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-md"
              >
                <AccordionItem value={`item-${index}`}>
                  <AccordionTrigger className="px-6 py-4 text-lg font-semibold text-gray-800 hover:bg-gray-100 transition-colors duration-200">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-base text-gray-600 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>
      </section>
    </div>
  );
};

export default FAQs;

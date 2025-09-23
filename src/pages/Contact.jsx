import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import JsonLd from "@/components/JsonLd";
import { useLanguage } from "@/contexts/LanguageContext";

const contactPageData = {
  en: {
    meta: {
      title: "Contact Patriot Pest Control Co - Get Your Free Quote | Spokane, WA",
      description:
        "Contact Patriot Pest Control Co for professional pest control services in Spokane, WA. Call (509) 471-5767 for a free quote and fast response.",
      keywords:
        "contact pest control Spokane, pest control quote, emergency pest control, Spokane exterminator contact",
    },
    hero: {
      title: "Contact Us",
      description:
        "Ready to protect your property? Get in touch with our pest control experts for a free consultation and customized solution.",
    },
    contactInfo: [
      {
        icon: Phone,
        title: "Phone",
        details: "(509) 471-5767",
        description: "Call us for immediate assistance",
      },
      {
        icon: Mail,
        title: "Email",
        details: "Admin@PatriotPest.Pro",
        description: "Send us a detailed message",
      },
      {
        icon: MapPin,
        title: "Service Areas",
        details: "Spokane & Surrounding Areas",
        description: "We serve the greater Spokane region",
      },
      {
        icon: Clock,
        title: "Business Hours",
        details: "Mon-Fri: 8AM-6PM",
        description: "Emergency services available 24/7",
      },
    ],
    form: {
      labels: {
        name: "Full Name *",
        phone: "Phone Number *",
        email: "Email Address *",
        service: "Service Needed",
        message: "Message",
        preferredContact: "Preferred Contact Method",
      },
      placeholders: {
        name: "Your full name",
        phone: "(509) 123-4567",
        email: "your.email@example.com",
        message: "Tell us about your pest control needs...",
      },
      submitButton: "Send Message",
    },
    benefits: {
      title: "Why Choose Patriot Pest Control?",
      items: [
        "Free comprehensive inspections",
        "Licensed and certified technicians",
        "Safe, family-friendly treatments",
        "24/7 emergency service available",
        "Satisfaction guarantee",
        "Competitive pricing",
      ],
    },
    serviceAreas: {
      title: "Service Areas",
      description: "We proudly serve the greater Spokane area and surrounding communities:",
      areas: [
        "Spokane",
        "Walla Walla",
        "Yakima",
        "Kennewick",
        "Pasco",
        "Richland",
        "Post Falls",
        "Coeur d'Alene",
      ],
    },
    emergency: {
      title: "Emergency Service",
      description:
        "Dealing with a pest emergency? We offer 24/7 emergency services for urgent situations.",
      button: "Emergency: (509) 471-5767",
    },
    cta: {
      title: "Ready to Get Started?",
      description:
        "Don't let pests take over your property. Contact us today for fast, professional pest control solutions.",
      button: "Call Now: (509) 471-5767",
    },
  },
  es: {
    // Spanish translations here
  },
  fr: {
    // French translations here
  },
};

const contactPageSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact Patriot Pest Control Co",
  description:
    "Contact Patriot Pest Control Co for professional pest control services in Spokane, WA. Get a free quote and fast response.",
  url: "https://www.patriotpest.pro/contact",
  potentialAction: {
    "@type": "CommunicateAction",
    name: "Contact Us",
    target: {
      "@type": "EntryPoint",
      actionPlatform: [
        "http://schema.org/DesktopWebPlatform",
        "http://schema.org/MobileWebPlatform",
      ],
    },
    handler: {
      "@type": "WebAPI",
      url: "https://www.patriotpest.pro/api/contact",
    },
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+1-509-471-5767",
      contactType: "customer service",
      areaServed: "Spokane",
      availableLanguage: ["en", "es", "fr"],
    },
    {
      "@type": "ContactPoint",
      telephone: "+1-509-471-5767",
      contactType: "emergency service",
      areaServed: "Spokane",
      availableLanguage: ["en", "es", "fr"],
    },
  ],
};

const Contact = () => {
  const { language } = useLanguage();
  const currentLangData = contactPageData[language] || contactPageData["en"];
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
    preferredContact: "phone",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you within 24 hours.",
    });

    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
      preferredContact: "phone",
    });
  };

  const services = [
    "Residential Pest Control",
    "Commercial Pest Control",
    "Termite Control",
    "Rodent Control",
    "Bed Bug Control",
    "Mosquito Control",
    "Emergency Service",
    "Free Inspection",
  ];

  return (
    <>
      <Helmet>
        <title>{contactPageData[language].meta.title}</title>
        <meta name="description" content={contactPageData[language].meta.description} />
        <meta name="keywords" content={contactPageData[language].meta.keywords} />
      </Helmet>
      <JsonLd schema={contactPageSchema} />

      {/* Hero Section */}
      <section className="hero-gradient text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {contactPageData[language].hero.title}
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              {contactPageData[language].hero.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactPageData[language].contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-lg text-center"
              >
                <info.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{info.title}</h3>
                <p className="text-lg font-medium text-blue-600 mb-2">{info.details}</p>
                <p className="text-sm text-gray-600">{info.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Get Your Free Quote</h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below and we&apos;ll contact you within 24 hours to schedule your
                free inspection.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      {contactPageData[language].form.labels.name}
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder={contactPageData[language].form.placeholders.name}
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      {contactPageData[language].form.labels.phone}
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder={contactPageData[language].form.placeholders.phone}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    {contactPageData[language].form.labels.email}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder={contactPageData[language].form.placeholders.email}
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                    {contactPageData[language].form.labels.service}
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select a service</option>
                    {services.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    {contactPageData[language].form.labels.message}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder={contactPageData[language].form.placeholders.message}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    {contactPageData[language].form.labels.preferredContact}
                  </label>
                  <div className="flex space-x-6">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="preferredContact"
                        value="phone"
                        checked={formData.preferredContact === "phone"}
                        onChange={handleInputChange}
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                      />
                      <span className="ml-2 text-sm text-gray-700">Phone</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="preferredContact"
                        value="email"
                        checked={formData.preferredContact === "email"}
                        onChange={handleInputChange}
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                      />
                      <span className="ml-2 text-sm text-gray-700">Email</span>
                    </label>
                  </div>
                </div>

                <Button type="submit" size="lg" className="w-full bg-blue-600 hover:bg-blue-700">
                  <Send className="h-4 w-4 mr-2" />
                  {contactPageData[language].form.submitButton}
                </Button>
              </form>
            </motion.div>

            {/* Service Areas & Benefits */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  {contactPageData[language].benefits.title}
                </h3>
                <div className="space-y-4">
                  {contactPageData[language].benefits.items.map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-1" />
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  {contactPageData[language].serviceAreas.title}
                </h3>
                <div className="bg-blue-50 p-6 rounded-lg">
                  <p className="text-gray-700 mb-4">
                    {contactPageData[language].serviceAreas.description}
                  </p>
                  <div className="grid grid-cols-2 gap-2 text-sm text-gray-600">
                    {contactPageData[language].serviceAreas.areas.map((area, index) => (
                      <div key={index}>• {area}</div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">
                  {contactPageData[language].emergency.title}
                </h4>
                <p className="text-gray-600 mb-4">
                  {contactPageData[language].emergency.description}
                </p>
                <Button className="bg-red-600 hover:bg-red-700">
                  <Phone className="h-4 w-4 mr-2" />
                  {contactPageData[language].emergency.button}
                </Button>
              </div>
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
            <h2 className="text-3xl font-bold mb-4">{contactPageData[language].cta.title}</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              {contactPageData[language].cta.description}
            </p>
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              <Phone className="h-4 w-4 mr-2" />
              {contactPageData[language].cta.button}
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Contact;

import React from "react";
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, CheckCircle, Clock, Shield } from "lucide-react";
import { serviceAreaData } from "@/data/serviceAreasData";
import JsonLd from "@/components/JsonLd";

const ServiceArea = () => {
  const { areaSlug } = useParams();

  // Fallback to English if the specific area or language data is not found
  const area = serviceAreaData[areaSlug] ? serviceAreaData[areaSlug]["en"] : null;

  if (!area) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Service Area Not Found</h1>
          <p className="text-gray-600">The requested service area could not be found.</p>
          <Link to="/service-areas">
            <Button className="mt-4">View All Service Areas</Button>
          </Link>
        </div>
      </div>
    );
  }

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "PestControl",
    name: `Patriot Pest Control Co - ${area.name}`,
    image: "https://images.unsplash.com/photo-1576224413179-b30f3cc03dfc",
    url: `https://www.patriotpest.pro/service-areas/${areaSlug}`,
    telephone: "(509) 471-5767",
    email: "Admin@PatriotPest.Pro",
    address: {
      "@type": "PostalAddress",
      addressLocality: area.name,
      addressRegion: area.state,
      addressCountry: "US",
    },
    description: area.metaDescription,
    areaServed: {
      "@type": "City",
      name: area.name,
    },
  };

  return (
    <>
      <Helmet>
        <title>{area.metaTitle}</title>
        <meta name="description" content={area.metaDescription} />
        <meta name="keywords" content={area.metaKeywords} />
      </Helmet>
      <JsonLd schema={localBusinessSchema} />

      {/* Hero Section */}
      <section className="service-area-hero py-20 relative">
        <div className="absolute inset-0 bg-black bg-opacity-50">
          <img
            alt={area.imageAlt}
            className="w-full h-full object-cover opacity-50"
            src={area.imageSrc}
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex items-center justify-center space-x-2 mb-4">
              <MapPin className="h-6 w-6" />
              <span className="text-lg">
                {area.name}, {area.state}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{area.heroTitle}</h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">{area.heroDescription}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                <Link to="/prices">{area.quoteButton}</Link>
              </Button>
              <Button
                size="lg"
                className="bg-red-600 hover:bg-red-700 shadow-xl shadow-red-500/60 hover:shadow-red-500/80 text-white"
              >
                <Phone className="h-4 w-4 mr-2" />
                {area.callButton}
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Service Stats */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center bg-white p-6 rounded-lg shadow-lg"
            >
              <MapPin className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {area.serviceCoverageTitle}
              </h3>
              <p className="text-gray-600">{area.coverage}</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center bg-white p-6 rounded-lg shadow-lg"
            >
              <Clock className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{area.responseTimeTitle}</h3>
              <p className="text-gray-600">{area.responseTime}</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center bg-white p-6 rounded-lg shadow-lg"
            >
              <Shield className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {area.populationServedTitle}
              </h3>
              <p className="text-gray-600">{area.population}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Neighborhoods Served */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{area.neighborhoodsTitle}</h2>
            <p className="text-xl text-gray-600">{area.neighborhoodsSubtitle}</p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-4">
            {area.neighborhoods.map((neighborhood, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-blue-50 px-4 py-2 rounded-lg text-center"
              >
                <span className="text-sm font-medium text-gray-700">{neighborhood}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Common Pests */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">{area.commonPestsTitle}</h2>
              <p className="text-gray-600 mb-6">{area.climate}</p>
              <div className="grid grid-cols-2 gap-4">
                {area.commonPests.map((pest, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-gray-700">{pest}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <img
                alt={area.commonPestsImageAlt}
                className="rounded-lg shadow-lg"
                src={area.commonPestsImageSrc}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Local Expertise */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{area.localExpertiseTitle}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">{area.localExpertiseSubtitle}</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: area.benefit1Title,
                description: area.benefit1Description,
                icon: MapPin,
              },
              {
                title: area.benefit2Title,
                description: area.benefit2Description,
                icon: Clock,
              },
              {
                title: area.benefit3Title,
                description: area.benefit3Description,
                icon: Shield,
              },
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <benefit.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
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
            <h2 className="text-3xl font-bold mb-4">{area.ctaTitle}</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">{area.ctaDescription}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                <Link to="/prices">{area.ctaButton1}</Link>
              </Button>
              <Button
                size="lg"
                className="bg-red-600 hover:bg-red-700 shadow-xl shadow-red-500/60 hover:shadow-red-500/80 text-white"
              >
                <Phone className="h-4 w-4 mr-2" />
                {area.ctaButton2}
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default ServiceArea;

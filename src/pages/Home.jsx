import React from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Shield, CheckCircle, Phone, Star, Users, Clock, Award } from "lucide-react";
import JsonLd from "@/components/JsonLd";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="home-page"
    >
      <Helmet>
        <title>{t("home.helmetTitle")}</title>
        <meta name="description" content={t("home.metaDescription")} />
        <meta name="keywords" content={t("home.metaKeywords")} />
      </Helmet>

      <JsonLd
        schema={[
          {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: t("jsonLd.localBusiness.name"),
            image: t("jsonLd.localBusiness.image"),
            "@id": t("jsonLd.localBusiness.id"),
            url: t("jsonLd.localBusiness.url"),
            telephone: t("jsonLd.localBusiness.telephone"),
            address: {
              "@type": "PostalAddress",
              streetAddress: t("jsonLd.localBusiness.address.streetAddress"),
              addressLocality: t("jsonLd.localBusiness.address.addressLocality"),
              addressRegion: t("jsonLd.localBusiness.address.addressRegion"),
              postalCode: t("jsonLd.localBusiness.address.postalCode"),
              addressCountry: t("jsonLd.localBusiness.address.addressCountry"),
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: t("jsonLd.localBusiness.geo.latitude"),
              longitude: t("jsonLd.localBusiness.geo.longitude"),
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
              t("jsonLd.localBusiness.sameAs.0"),
              t("jsonLd.localBusiness.sameAs.1"),
              t("jsonLd.localBusiness.sameAs.2"),
            ],
          },
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: t("jsonLd.website.name"),
            url: t("jsonLd.website.url"),
            potentialAction: {
              "@type": "SearchAction",
              target: {
                "@type": "EntryPoint",
                urlTemplate: t("jsonLd.website.potentialAction.target.urlTemplate"),
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
            <h1 className="text-4xl md:text-6xl font-bold mb-6">{t("home.heroTitle")}</h1>
            <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
              {t("home.heroSubtitle")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                <Link to="/prices">{t("home.quoteButton")}</Link>
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
                  <span className="font-bold">{t("home.callButton")}</span>
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
              {t("home.aboutTitle")}
            </h2>
            <h3 className="text-xl text-blue-600 mb-4">{t("home.aboutSubtitle")}</h3>
            <p className="text-gray-600 mb-6 max-w-3xl mx-auto">
              {t("home.aboutDescription")}
            </p>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-4 mb-6 max-w-4xl mx-auto">
              {[ // Features array for About section
                { icon: Award, title: t("home.features.certifiedExpert.title") },
                { icon: Users, title: t("home.features.professionalTeam.title") },
                { icon: CheckCircle, title: t("home.features.costEffective.title") },
                { icon: Clock, title: t("home.features.saveTimeMoney.title") },
                { icon: Phone, title: t("home.features.premiumSupport.title") },
              ].map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <feature.icon className="h-5 w-5 text-blue-600" />
                  <span className="text-sm font-medium text-gray-700">{feature.title}</span>
                </div>
              ))}
            </div>
            <Link to="/about">
              <Button className="bg-blue-600 hover:bg-blue-700">
                {t("home.exploreAboutUs")}
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
            {t("home.servicesTitle")}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t("home.servicesSubtitle")}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[ // Services array
            {
              title: t("home.services.residential.title"),
              description: t("home.services.residential.description"),
              icon: "🏠",
              slug: "residential-pest-control",
            },
            {
              title: t("home.services.commercial.title"),
              description: t("home.services.commercial.description"),
              icon: "🏢",
              slug: "commercial-pest-control",
            },
            {
              title: t("home.services.termite.title"),
              description: t("home.services.termite.description"),
              icon: "🐛",
              slug: "termite-control",
            },
            {
              title: t("home.services.rodent.title"),
              description: t("home.services.rodent.description"),
              icon: "🐭",
              slug: "rodent-control",
            },
            {
              title: t("home.services.bedBug.title"),
              description: t("home.services.bedBug.description"),
              icon: "🛏️",
              slug: "bed-bug-control",
            },
            {
              title: t("home.services.mosquito.title"),
              description: t("home.services.mosquito.description"),
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
                  {t("home.exploreAboutUs")}
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
            <h2 className="text-3xl font-bold mb-6">{t("home.proactiveControlTitle")}</h2>
            <p className="text-blue-100 mb-6 max-w-3xl mx-auto">
              {t("home.proactiveControlParagraph1")}
            </p>
            <p className="text-blue-100 mb-8 max-w-3xl mx-auto">
              {t("home.proactiveControlParagraph2")}
            </p>
            <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              <Link to="/contact">{t("home.contactUsImmediately")}</Link>
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
            {t("home.whyChooseUsTitle")}
          </h2>
          <p className="text-xl text-gray-600">{t("home.whyChooseUsSubtitle")}</p>
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
              {t("home.expertiseTitle")}
            </h3>
            <p className="text-gray-600">{t("home.expertiseDescription")}</p>
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
              {t("home.comprehensiveServicesTitle")}
            </h3>
            <p className="text-gray-600">{t("home.comprehensiveServicesDescription")}</p>
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
              {t("home.customerSatisfactionTitle")}
            </h3>
            <p className="text-gray-600">{t("home.customerSatisfactionDescription")}</p>
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
          <h2 className="text-3xl font-bold mb-4">{t("home.bestServiceTitle")}</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            {t("home.bestServiceDescription")}
          </p>
          <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
            <Link to="/contact">{t("home.quoteButton")}</Link>
          </Button>
        </motion.div>
      </div>
    </section>
    </motion.div>
  );
};

export default Home;

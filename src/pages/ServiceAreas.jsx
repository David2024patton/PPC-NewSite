import React from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, ArrowRight } from "lucide-react";
import { serviceAreas } from "@/data/serviceAreasData";
import { useLanguage } from "../contexts/LanguageContext"; // Import useLanguage hook

const serviceAreasPageData = {
  en: {
    helmetTitle: "Our Service Areas - Patriot Pest Control Co | WA & ID",
    helmetDescription:
      "We proudly serve Spokane, Coeur d'Alene, Tri-Cities, and many other communities across Washington and Idaho. Find your local pest control expert.",
    helmetKeywords:
      "pest control service areas, Spokane pest control, Coeur d'Alene pest control, Washington pest control, Idaho pest control",
    heroTitle: "Our Service Areas",
    heroSubtitle:
      "Proudly serving communities across Washington and Idaho. Find your local Patriot Pest Control team.",
    ctaTitle: "Don't See Your Area?",
    ctaSubtitle:
      "Our service area is always expanding. Contact us to see if we can provide service to your location.",
    contactUs: "Contact Us",
    callUs: "Call (509) 471-5767",
    viewDetails: "View Details",
  },
  es: {
    helmetTitle: "Nuestras Áreas de Servicio - Patriot Pest Control Co | WA & ID",
    helmetDescription:
      "Orgullosamente servimos a Spokane, Coeur d'Alene, Tri-Cities y muchas otras comunidades en Washington e Idaho. Encuentre a su experto local en control de plagas.",
    helmetKeywords:
      "áreas de servicio de control de plagas, control de plagas Spokane, control de plagas Coeur d'Alene, control de plagas Washington, control de plagas Idaho",
    heroTitle: "Nuestras Áreas de Servicio",
    heroSubtitle:
      "Sirviendo con orgullo a comunidades en Washington e Idaho. Encuentre a su equipo local de Patriot Pest Control.",
    ctaTitle: "¿No ve su área?",
    ctaSubtitle:
      "Nuestra área de servicio está en constante expansión. Contáctenos para ver si podemos brindarle servicio en su ubicación.",
    contactUs: "Contáctenos",
    callUs: "Llamar (509) 471-5767",
    viewDetails: "Ver Detalles",
  },
  fr: {
    helmetTitle: "Nos Zones de Service - Patriot Pest Control Co | WA & ID",
    helmetDescription:
      "Nous servons fièrement Spokane, Coeur d'Alene, Tri-Cities et de nombreuses autres communautés à travers Washington et l'Idaho. Trouvez votre expert local en lutte antiparasitaire.",
    helmetKeywords:
      "zones de service de lutte antiparasitaire, lutte antiparasitaire Spokane, lutte antiparasitaire Coeur d'Alene, lutte antiparasitaire Washington, lutte antiparasitaire Idaho",
    heroTitle: "Nos Zones de Service",
    heroSubtitle:
      "Desservant fièrement les communautés de Washington et de l'Idaho. Trouvez votre équipe locale de Patriot Pest Control.",
    ctaTitle: "Vous ne voyez pas votre région ?",
    ctaSubtitle:
      "Notre zone de service est en constante expansion. Contactez-nous pour savoir si nous pouvons vous fournir un service à votre emplacement.",
    contactUs: "Contactez-nous",
    callUs: "Appeler (509) 471-5767",
    viewDetails: "Voir les détails",
  },
  de: {
    helmetTitle: "Unsere Servicegebiete - Patriot Pest Control Co | WA & ID",
    helmetDescription:
      "Wir bedienen stolz Spokane, Coeur d'Alene, Tri-Cities und viele andere Gemeinden in Washington und Idaho. Finden Sie Ihren lokalen Schädlingsbekämpfungsexperten.",
    helmetKeywords:
      "Schädlingsbekämpfungsgebiete, Schädlingsbekämpfung Spokane, Schädlingsbekämpfung Coeur d'Alene, Schädlingsbekämpfung Washington, Schädlingsbekämpfung Idaho",
    heroTitle: "Unsere Servicegebiete",
    heroSubtitle:
      "Wir bedienen stolz Gemeinden in Washington und Idaho. Finden Sie Ihr lokales Patriot Pest Control Team.",
    ctaTitle: "Sehen Sie Ihr Gebiet nicht?",
    ctaSubtitle:
      "Unser Servicegebiet wird ständig erweitert. Kontaktieren Sie uns, um zu erfahren, ob wir Ihnen an Ihrem Standort Dienstleistungen anbieten können.",
    contactUs: "Kontaktieren Sie uns",
    callUs: "Anrufen (509) 471-5767",
    viewDetails: "Details anzeigen",
  },
  zh: {
    helmetTitle: "我们的服务区域 - Patriot Pest Control Co | WA & ID",
    helmetDescription:
      "我们自豪地服务于斯波坎、科达伦、三城市以及华盛顿和爱达荷州的其他许多社区。找到您当地的害虫防治专家。",
    helmetKeywords:
      "害虫防治服务区域, 斯波坎害虫防治, 科达伦害虫防治, 华盛顿害虫防治, 爱达荷州害虫防治",
    heroTitle: "我们的服务区域",
    heroSubtitle: "自豪地服务于华盛顿和爱达荷州的社区。找到您当地的Patriot Pest Control团队。",
    ctaTitle: "没有看到您的区域？",
    ctaSubtitle: "我们的服务区域正在不断扩大。联系我们，看看我们是否可以在您所在的位置提供服务。",
    contactUs: "联系我们",
    callUs: "致电 (509) 471-5767",
    viewDetails: "查看详情",
  },
};

const ServiceAreas = () => {
  const { currentLanguage } = useLanguage();
  const currentLangData = serviceAreasPageData[currentLanguage];

  return (
    <>
      <Helmet>
        <title>{currentLangData.helmetTitle}</title>
        <meta name="description" content={currentLangData.helmetDescription} />
        <meta name="keywords" content={currentLangData.helmetKeywords} />
      </Helmet>

      {/* Hero Section */}
      <section className="hero-gradient text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{currentLangData.heroTitle}</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              {currentLangData.heroSubtitle}
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
                    {currentLangData.viewDetails} <ArrowRight className="h-4 w-4 ml-2" />
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
            <h2 className="text-3xl font-bold mb-4">{currentLangData.ctaTitle}</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              {currentLangData.ctaSubtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                <a href="tel:509-471-5767" className="flex items-center justify-center space-x-2">
                  <Phone className="h-5 w-5" />
                  <span>{currentLangData.contactUs}</span>
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
                  <span className="font-bold">{currentLangData.callUs}</span>
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default ServiceAreas;

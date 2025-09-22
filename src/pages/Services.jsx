import React from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Phone } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Services = () => {
  const { language } = useLanguage();

  const servicesData = {
    en: [
      {
        title: "Residential Pest Control",
        description:
          "Keep your home pest-free with safe, effective treatments for ants, roaches, spiders, and more. Our experts provide customized solutions to protect your family and property.",
        slug: "residential-pest-control",
        features: [
          "Monthly/Quarterly treatments",
          "Safe for children and pets",
          "Interior and exterior protection",
          "Customized treatment plans",
        ],
      },
      {
        title: "Commercial Pest Control",
        description:
          "Safeguard your business with tailored pest control solutions. We help prevent infestations and ensure compliance, keeping your workplace clean and pest-free.",
        slug: "commercial-pest-control",
        features: [
          "Industry-specific solutions",
          "Compliance assistance",
          "Flexible scheduling",
          "Detailed reporting",
        ],
      },
      {
        title: "Termite Control",
        description:
          "Prevent costly damage with our termite inspections and treatments. We eliminate termites and provide long-term protection for your home or business.",
        slug: "termite-control",
        features: [
          "Comprehensive inspections",
          "Advanced treatment methods",
          "Damage prevention",
          "Long-term warranties",
        ],
      },
      {
        title: "Rodent Control (Rats & Mice)",
        description:
          "Eliminate mice and rats with our proven rodent control solutions. We locate entry points, remove infestations, and prevent future problems.",
        slug: "rodent-control",
        features: [
          "Entry point sealing",
          "Humane removal methods",
          "Sanitation services",
          "Prevention strategies",
        ],
      },
      {
        title: "Bed Bug Control",
        description:
          "Get rid of bed bugs fast with our specialized treatments. We eliminate infestations at all stages, ensuring your home or business is bed bug-free.",
        slug: "bed-bug-control",
        features: [
          "Heat treatments available",
          "Multiple treatment options",
          "Follow-up inspections",
          "Preparation assistance",
        ],
      },
      {
        title: "Mosquito Control",
        description:
          "Enjoy your outdoor spaces with our mosquito control services. We target breeding areas and use treatments to reduce mosquito populations effectively.",
        slug: "mosquito-control",
        features: [
          "Breeding site elimination",
          "Seasonal treatments",
          "Outdoor event protection",
          "Eco-friendly options",
        ],
      },
      {
        title: "Ants",
        description:
          "Effective ant control for all common species. We eliminate colonies and prevent future invasions.",
        slug: "ant-control",
        features: [
          "Colony elimination",
          "Baiting systems",
          "Perimeter defense",
          "Species identification",
        ],
      },
      {
        title: "Flies & Flying Pests",
        description:
          "Control and eliminate flies and other flying insects from your property with targeted solutions.",
        slug: "fly-control",
        features: ["Fly lights", "Baiting and traps", "Source reduction", "Exclusion methods"],
      },
      {
        title: "Cockroach Control",
        description:
          "Fast and thorough cockroach extermination for a clean and healthy environment.",
        slug: "cockroach-control",
        features: [
          "German & American roaches",
          "Growth regulators",
          "Baiting and flushing",
          "Sanitation consulting",
        ],
      },
      {
        title: "Flea Control",
        description: "Eliminate flea infestations from your home and protect your pets and family.",
        slug: "flea-control",
        features: [
          "Adulticide treatments",
          "Insect growth regulators",
          "Pet-safe options",
          "Follow-up inspections",
        ],
      },
      {
        title: "Bees & Wasps",
        description: "Safe removal of bees, wasps, and hornets nests from your property.",
        slug: "bee-control",
        features: [
          "Nest removal",
          "Wasp and hornet control",
          "Carpenter bee treatment",
          "Preventative measures",
        ],
      },
      {
        title: "Tick Control",
        description:
          "Reduce tick populations in your yard to protect your family and pets from tick-borne diseases.",
        slug: "tick-control",
        features: [
          "Yard treatments",
          "Habitat modification",
          "Seasonal applications",
          "Disease prevention",
        ],
      },
    ],
    es: [
      {
        title: "Control de Plagas Residencial",
        description:
          "Mantenga su hogar libre de plagas con tratamientos seguros y efectivos para hormigas, cucarachas, arañas y más. Nuestros expertos brindan soluciones personalizadas para proteger a su familia y su propiedad.",
        slug: "residential-pest-control",
        features: [
          "Tratamientos mensuales/trimestrales",
          "Seguro para niños y mascotas",
          "Protección interior y exterior",
          "Planes de tratamiento personalizados",
        ],
      },
      {
        title: "Control de Plagas Comercial",
        description:
          "Proteja su negocio con soluciones personalizadas de control de plagas. Ayudamos a prevenir infestaciones y garantizar el cumplimiento, manteniendo su lugar de trabajo limpio y libre de plagas.",
        slug: "commercial-pest-control",
        features: [
          "Soluciones específicas de la industria",
          "Asistencia de cumplimiento",
          "Programación flexible",
          "Informes detallados",
        ],
      },
      {
        title: "Control de Termitas",
        description:
          "Prevenga daños costosos con nuestras inspecciones y tratamientos de termitas. Eliminamos las termitas y brindamos protección a largo plazo para su hogar o negocio.",
        slug: "termite-control",
        features: [
          "Inspecciones completas",
          "Métodos de tratamiento avanzados",
          "Prevención de daños",
          "Garantías a largo plazo",
        ],
      },
      {
        title: "Control de Roedores (Ratones)",
        description:
          "Elimine ratones y ratas con nuestras soluciones probadas de control de roedores. Localizamos puntos de entrada, eliminamos infestaciones y prevenimos problemas futuros.",
        slug: "rodent-control",
        features: [
          "Sellado de puntos de entrada",
          "Métodos de eliminación humanitarios",
          "Servicios de saneamiento",
          "Estrategias de prevención",
        ],
      },
      {
        title: "Control de Chinches",
        description:
          "Deshágase de las chinches rápidamente con nuestros tratamientos especializados. Eliminamos las infestaciones en todas las etapas, asegurando que su hogar o negocio esté libre de chinches.",
        slug: "bed-bug-control",
        features: [
          "Tratamientos térmicos disponibles",
          "Múltiples opciones de tratamiento",
          "Inspecciones de seguimiento",
          "Asistencia en la preparación",
        ],
      },
      {
        title: "Control de Mosquitos",
        description:
          "Disfrute de sus espacios al aire libre con nuestros servicios de control de mosquitos. Nos enfocamos en las áreas de reproducción y usamos tratamientos para reducir las poblaciones de mosquitos de manera efectiva.",
        slug: "mosquito-control",
        features: [
          "Eliminación de criaderos",
          "Tratamientos estacionales",
          "Protección de eventos al aire libre",
          "Opciones ecológicas",
        ],
      },
      {
        title: "Hormigas",
        description:
          "Control efectivo de hormigas para todas las especies comunes. Eliminamos colonias y prevenimos futuras invasiones.",
        slug: "ant-control",
        features: [
          "Eliminación de colonias",
          "Sistemas de cebo",
          "Defensa perimetral",
          "Identificación de especies",
        ],
      },
      {
        title: "Moscas y Plagas Voladoras",
        description:
          "Controle y elimine moscas y otros insectos voladores de su propiedad con soluciones específicas.",
        slug: "fly-control",
        features: [
          "Luces para moscas",
          "Cebos y trampas",
          "Reducción de fuentes",
          "Métodos de exclusión",
        ],
      },
      {
        title: "Control de Cucarachas",
        description:
          "Exterminio rápido y completo de cucarachas para un ambiente limpio y saludable.",
        slug: "cockroach-control",
        features: [
          "Cucarachas alemanas y americanas",
          "Reguladores de crecimiento",
          "Cebo y expulsión",
          "Consultoría de saneamiento",
        ],
      },
      {
        title: "Control de Pulgas",
        description:
          "Elimine las infestaciones de pulgas de su hogar y proteja a sus mascotas y familiares.",
        slug: "flea-control",
        features: [
          "Tratamientos adulticidas",
          "Reguladores de crecimiento de insectos",
          "Opciones seguras para mascotas",
          "Inspecciones de seguimiento",
        ],
      },
      {
        title: "Abejas y Avispas",
        description: "Eliminación segura de nidos de abejas, avispas y avispones de su propiedad.",
        slug: "bee-control",
        features: [
          "Eliminación de nidos",
          "Control de avispas y avispones",
          "Tratamiento de abejas carpinteras",
          "Medidas preventivas",
        ],
      },
      {
        title: "Control de Garrapatas",
        description:
          "Reduzca las poblaciones de garrapatas en su jardín para proteger a su familia y mascotas de las enfermedades transmitidas por garrapatas.",
        slug: "tick-control",
        features: [
          "Tratamientos de jardín",
          "Modificación del hábitat",
          "Aplicaciones estacionales",
          "Prevención de enfermedades",
        ],
      },
    ],
  };

  const pageContentData = {
    en: {
      title: "Pest Control Services",
      metaDescription:
        "Comprehensive pest control services in Spokane, WA. Residential, commercial, termite, rodent, bed bug, and mosquito control. Professional, safe, effective treatments.",
      metaKeywords:
        "pest control services, residential pest control, commercial pest control, termite control, rodent control, bed bug treatment, mosquito control, Spokane WA",
      heroTitle: "Our Pest Control Services",
      heroSubtitle:
        "Comprehensive pest control solutions for homes and businesses. Professional, safe, and effective treatments for all your pest control needs.",
      gridTitle: "Complete Pest Control Solutions",
      gridSubtitle:
        "From residential homes to commercial properties, we provide tailored pest control services to meet your specific needs.",
      processTitle: "Our Service Process",
      processSubtitle: "Simple, effective, and professional",
      ctaTitle: "Ready to Get Started?",
      ctaSubtitle:
        "Contact us today for a free inspection and customized pest control solution for your property.",
      scheduleButton: "Schedule Free Inspection",
      callButton: "Call (509) 471-5767",
      learnMore: "Learn More",
    },
    es: {
      title: "Servicios de Control de Plagas",
      metaDescription:
        "Servicios integrales de control de plagas en Spokane, WA. Control residencial, comercial, de termitas, roedores, chinches y mosquitos. Tratamientos profesionales, seguros y eficaces.",
      metaKeywords:
        "servicios de control de plagas, control de plagas residencial, control de plagas comercial, control de termitas, control de roedores, tratamiento de chinches, control de mosquitos, Spokane WA",
      heroTitle: "Nuestros Servicios de Control de Plagas",
      heroSubtitle:
        "Soluciones integrales de control de plagas para hogares y empresas. Tratamientos profesionales, seguros y eficaces para todas sus necesidades de control de plagas.",
      gridTitle: "Soluciones Completas de Control de Plagas",
      gridSubtitle:
        "Desde hogares residenciales hasta propiedades comerciales, brindamos servicios de control de plagas personalizados para satisfacer sus necesidades específicas.",
      processTitle: "Nuestro Proceso de Servicio",
      processSubtitle: "Simple, efectivo y profesional",
      ctaTitle: "¿Listo para Empezar?",
      ctaSubtitle:
        "Contáctenos hoy para una inspección gratuita y una solución de control de plagas personalizada para su propiedad.",
      scheduleButton: "Programar Inspección Gratuita",
      callButton: "Llamar (509) 471-5767",
      learnMore: "Aprende Más",
    },
    ru: {
      title: "Услуги по борьбе с вредителями",
      heroTitle: "Наши услуги по борьбе с вредителями",
      heroSubtitle:
        "Комплексные решения по борьбе с вредителями для домов и предприятий. Профессиональные, безопасные и эффективные методы лечения для всех ваших потребностей в борьбе с вредителями.",
      gridTitle: "Комплексные решения по борьбе с вредителями",
      gridSubtitle:
        "От жилых домов до коммерческой недвижимости мы предоставляем индивидуальные услуги по борьбе с вредителями для удовлетворения ваших конкретных потребностей.",
      processTitle: "Наш процесс обслуживания",
      processSubtitle: "Просто, эффективно и профессионально",
      ctaTitle: "Готовы начать?",
      ctaSubtitle:
        "Свяжитесь с нами сегодня для бесплатного осмотра и индивидуального решения по борьбе с вредителями для вашей собственности.",
      scheduleButton: "Запланировать бесплатный осмотр",
      callButton: "Звоните (509) 471-5767",
      learnMore: "Узнать больше",
    },
    uk: {
      title: "Послуги з боротьби зі шкідниками",
      heroTitle: "Наші послуги з боротьби зі шкідниками",
      heroSubtitle:
        "Комплексні рішення для боротьби зі шкідниками для будинків та підприємств. Професійні, безпечні та ефективні методи лікування для всіх ваших потреб у боротьбі зі шкідниками.",
      gridTitle: "Комплексні рішення для боротьби зі шкідниками",
      gridSubtitle:
        "Від житлових будинків до комерційної нерухомості, ми надаємо індивідуальні послуги з боротьби зі шкідниками для задоволення ваших конкретних потреб.",
      processTitle: "Наш процес обслуговування",
      processSubtitle: "Просто, ефективно та професійно",
      ctaTitle: "Готові почати?",
      ctaSubtitle:
        "Зв'яжіться з нами сьогодні для безкоштовного огляду та індивідуального рішення для боротьби зі шкідниками для вашої власності.",
      scheduleButton: "Запланувати безкоштовний огляд",
      callButton: "Телефонуйте (509) 471-5767",
      learnMore: "Дізнатися більше",
    },
    vi: {
      title: "Dịch vụ kiểm soát côn trùng",
      heroTitle: "Dịch vụ kiểm soát côn trùng của chúng tôi",
      heroSubtitle:
        "Giải pháp kiểm soát côn trùng toàn diện cho nhà ở và doanh nghiệp. Các phương pháp điều trị chuyên nghiệp, an toàn và hiệu quả cho mọi nhu cầu kiểm soát côn trùng của bạn.",
      gridTitle: "Giải pháp kiểm soát côn trùng toàn diện",
      gridSubtitle:
        "Từ nhà ở dân dụng đến các cơ sở thương mại, chúng tôi cung cấp các dịch vụ kiểm soát côn trùng phù hợp để đáp ứng nhu cầu cụ thể của bạn.",
      processTitle: "Quy trình dịch vụ của chúng tôi",
      processSubtitle: "Đơn giản, hiệu quả và chuyên nghiệp",
      ctaTitle: "Sẵn sàng để bắt đầu?",
      ctaSubtitle:
        "Hãy liên hệ với chúng tôi ngay hôm nay để được kiểm tra miễn phí và giải pháp kiểm soát côn trùng tùy chỉnh cho tài sản của bạn.",
      scheduleButton: "Lên lịch kiểm tra miễn phí",
      callButton: "Gọi (509) 471-5767",
      learnMore: "Tìm hiểu thêm",
    },
    zh: {
      title: "害虫防治服务",
      heroTitle: "我们的害虫防治服务",
      heroSubtitle:
        "为家庭和企业提供全面的害虫防治解决方案。为您的所有害虫防治需求提供专业、安全、有效的处理。",
      gridTitle: "完整的害虫防治解决方案",
      gridSubtitle: "从住宅到商业物业，我们提供量身定制的害虫防治服务，以满足您的特定需求。",
      processTitle: "我们的服务流程",
      processSubtitle: "简单、有效、专业",
      ctaTitle: "准备好开始了吗？",
      ctaSubtitle: "立即联系我们，为您的财产进行免费检查和定制的害虫防治解决方案。",
      scheduleButton: "安排免费检查",
      callButton: "致电 (509) 471-5767",
      learnMore: "了解更多",
    },
    fr: {
      title: "Services de lutte antiparasitaire",
      heroTitle: "Nos services de lutte antiparasitaire",
      heroSubtitle:
        "Solutions complètes de lutte antiparasitaire pour les foyers et les entreprises. Traitements professionnels, sûrs et efficaces pour tous vos besoins en matière de lutte antiparasitaire.",
      gridTitle: "Solutions complètes de lutte antiparasitaire",
      gridSubtitle:
        "Des maisons résidentielles aux propriétés commerciales, nous fournissons des services de lutte antiparasitaire sur mesure pour répondre à vos besoins spécifiques.",
      processTitle: "Notre processus de service",
      processSubtitle: "Simple, efficace et professionnel",
      ctaTitle: "Prêt à commencer?",
      ctaSubtitle:
        "Contactez-nous dès aujourd'hui pour une inspection gratuite et une solution de lutte antiparasitaire personnalisée pour votre propriété.",
      scheduleButton: "Planifier une inspection gratuite",
      callButton: "Appelez le (509) 471-5767",
      learnMore: "En savoir plus",
    },
  };

  servicesData.ru = servicesData.es.map((s) => ({
    ...s,
    title: s.title
      .replace("Control de", "Борьба с")
      .replace("Residencial", "в жилых помещениях")
      .replace("Comercial", "в коммерческих помещениях"),
  }));
  servicesData.uk = servicesData.es.map((s) => ({
    ...s,
    title: s.title
      .replace("Control de", "Боротьба з")
      .replace("Residencial", "у житлових приміщеннях")
      .replace("Comercial", "у комерційних приміщеннях"),
  }));
  servicesData.vi = servicesData.es.map((s) => ({
    ...s,
    title: s.title
      .replace("Control de", "Kiểm soát")
      .replace("Residencial", "dân dụng")
      .replace("Comercial", "thương mại"),
  }));
  servicesData.zh = servicesData.es.map((s) => ({
    ...s,
    title: s.title
      .replace("Control de", "控制")
      .replace("Residencial", "住宅")
      .replace("Comercial", "商业"),
  }));
  servicesData.fr = servicesData.es.map((s) => ({
    ...s,
    title: s.title
      .replace("Control de", "Lutte contre les")
      .replace("Residencial", "résidentielle")
      .replace("Comercial", "commerciale"),
  }));

  const services = servicesData[language] || servicesData.en;
  const content = pageContentData[language] || pageContentData.en;

  return (
    <>
      <Helmet>
        <title>{content.title} - Patriot Pest Control Co | Spokane, WA</title>
        <meta name="description" content={content.metaDescription} />
        <meta name="keywords" content={content.metaKeywords} />
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{content.heroTitle}</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">{content.heroSubtitle}</p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{content.gridTitle}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">{content.gridSubtitle}</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col"
              >
                <div className="p-6 flex-grow flex flex-col">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-6 flex-grow">{service.description}</p>

                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Link to={`/services/${service.slug}`} className="mt-auto">
                    <Button className="w-full bg-blue-600 hover:bg-blue-700">
                      {content.learnMore}
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{content.processTitle}</h2>
            <p className="text-xl text-gray-600">{content.processSubtitle}</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Inspection",
                description:
                  "Thorough property assessment to identify pest issues and entry points",
              },
              {
                step: "2",
                title: "Treatment Plan",
                description:
                  "Customized solution designed specifically for your pest control needs",
              },
              {
                step: "3",
                title: "Implementation",
                description: "Safe, effective treatment application by certified professionals",
              },
              {
                step: "4",
                title: "Follow-up",
                description: "Ongoing monitoring and maintenance to ensure long-term protection",
              },
            ].map((process, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {process.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{process.title}</h3>
                <p className="text-gray-600">{process.description}</p>
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
            <h2 className="text-3xl font-bold mb-4">{content.ctaTitle}</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">{content.ctaSubtitle}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                <Link to="/prices">{content.scheduleButton}</Link>
              </Button>
              <Button
                asChild
                size="lg"
                className="bg-red-600 hover:bg-red-700 shadow-xl shadow-red-500/60 hover:shadow-red-500/80 text-white"
              >
                <a href="tel:509-471-5767" className="flex items-center justify-center space-x-2">
                  <Phone className="h-4 w-4 mr-2" />
                  <span>{content.callButton}</span>
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Services;

import React from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { Shield, Award, Users, Clock, CheckCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import JsonLd from "@/components/JsonLd";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const About = () => {
  const { currentLang } = useLanguage();

  const aboutData = {
    en: {
      helmet: {
        title: "About Patriot Pest Control Co - Professional Pest Control Experts",
        metaDescription:
          "Learn about Patriot Pest Control Co, Spokane's trusted pest control experts. Over 10 years of experience providing safe, effective pest control solutions.",
      },
      schema: {
        description:
          "Learn about Patriot Pest Control Co, Spokane's trusted pest control experts. Over 10 years of experience providing safe, effective pest control solutions.",
      },
      hero: {
        title: "About Patriot Pest Control Co",
        subtitle:
          "Your trusted partner in comprehensive pest control solutions across Spokane, WA and surrounding areas.",
      },
      story: {
        title: "Our Story",
        paragraph1:
          "Founded with a mission to protect homes and businesses from unwanted pests, Patriot Pest Control Co has grown to become the most trusted pest control company in the Pacific Northwest. Our journey began with a simple belief: every property owner deserves a safe, pest-free environment.",
        paragraph2:
          "Over the years, we've built our reputation on delivering exceptional results, using the latest technology and eco-friendly methods. Our team of certified professionals brings decades of combined experience to every job, ensuring your pest problems are solved quickly and effectively.",
        paragraph3:
          "Today, we're proud to serve thousands of satisfied customers across Spokane, Walla Walla, Yakima, and surrounding areas, maintaining our commitment to excellence and customer satisfaction.",
      },
      stats: {
        title: "Our Track Record",
        subtitle: "Numbers that speak for themselves",
        items: [
          { number: "10+", label: "Years Experience" },
          { number: "5000+", label: "Happy Customers" },
          { number: "24/7", label: "Support Available" },
          { number: "100%", label: "Satisfaction Rate" },
        ],
      },
      values: {
        title: "Our Values",
        subtitle: "What drives us every day",
        items: [
          {
            icon: Shield,
            title: "Safety First",
            description:
              "We prioritize the safety of your family, pets, and property with eco-friendly treatments.",
          },
          {
            icon: Award,
            title: "Quality Service",
            description:
              "Our certified technicians deliver exceptional results using industry-leading methods.",
          },
          {
            icon: Users,
            title: "Customer Focus",
            description:
              "Your satisfaction is our top priority. We listen, understand, and deliver solutions.",
          },
          {
            icon: Clock,
            title: "Reliable Response",
            description:
              "Quick response times and flexible scheduling to meet your pest control needs.",
          },
        ],
      },
      mission: {
        title: "Our Mission",
        paragraph1:
          "To provide comprehensive, safe, and effective pest control solutions that protect our customers' health, property, and peace of mind. We are committed to using environmentally responsible methods while delivering exceptional service that exceeds expectations.",
        bullet1: "Safe, eco-friendly pest control methods",
        bullet2: "Comprehensive solutions for all pest types",
        bullet3: "Long-term prevention strategies",
        bullet4: "Exceptional customer service",
      },
      cta: {
        title: "Ready to Experience the Patriot Difference?",
        subtitle:
          "Join thousands of satisfied customers who trust Patriot Pest Control Co for their pest control needs.",
        quoteButton: "Get Free Quote",
        callButton: "Call (509) 471-5767",
      },
    },
    es: {
      helmet: {
        title: "Acerca de Patriot Pest Control Co - Expertos Profesionales en Control de Plagas",
        metaDescription:
          "Conozca a Patriot Pest Control Co, los expertos de confianza en control de plagas de Spokane. Más de 10 años de experiencia ofreciendo soluciones seguras y efectivas.",
      },
      schema: {
        description:
          "Conozca a Patriot Pest Control Co, los expertos de confianza en control de plagas de Spokane. Más de 10 años de experiencia ofreciendo soluciones seguras y efectivas.",
      },
      hero: {
        title: "Acerca de Patriot Pest Control Co",
        subtitle:
          "Su socio de confianza en soluciones integrales de control de plagas en Spokane, WA y áreas circundantes.",
      },
      story: {
        title: "Nuestra Historia",
        paragraph1:
          "Fundada con la misión de proteger hogares y negocios de plagas no deseadas, Patriot Pest Control Co ha crecido hasta convertirse en la empresa de control de plagas más confiable del noroeste del Pacífico. Nuestro viaje comenzó con una simple creencia: cada propietario merece un entorno seguro y libre de plagas.",
        paragraph2:
          "A lo largo de los años, hemos construido nuestra reputación ofreciendo resultados excepcionales, utilizando la última tecnología y métodos ecológicos. Nuestro equipo de profesionales certificados aporta décadas de experiencia combinada a cada trabajo, asegurando que sus problemas de plagas se resuelvan de forma rápida y eficaz.",
        paragraph3:
          "Hoy, estamos orgullosos de servir a miles de clientes satisfechos en Spokane, Walla Walla, Yakima y sus alrededores, manteniendo nuestro compromiso con la excelencia y la satisfacción del cliente.",
      },
      stats: {
        title: "Nuestra Trayectoria",
        subtitle: "Números que hablan por sí solos",
        items: [
          { number: "10+", label: "Años de Experiencia" },
          { number: "5000+", label: "Clientes Satisfechos" },
          { number: "24/7", label: "Soporte Disponible" },
          { number: "100%", label: "Tasa de Satisfacción" },
        ],
      },
      values: {
        title: "Nuestros Valores",
        subtitle: "Lo que nos impulsa cada día",
        items: [
          {
            icon: Shield,
            title: "Seguridad Primero",
            description:
              "Priorizamos la seguridad de su familia, mascotas y propiedad con tratamientos ecológicos.",
          },
          {
            icon: Award,
            title: "Servicio de Calidad",
            description:
              "Nuestros técnicos certificados ofrecen resultados excepcionales utilizando métodos líderes en la industria.",
          },
          {
            icon: Users,
            title: "Enfoque en el Cliente",
            description:
              "Su satisfacción es nuestra máxima prioridad. Escuchamos, entendemos y ofrecemos soluciones.",
          },
          {
            icon: Clock,
            title: "Respuesta Confiable",
            description:
              "Tiempos de respuesta rápidos y programación flexible para satisfacer sus necesidades de control de plagas.",
          },
        ],
      },
      mission: {
        title: "Nuestra Misión",
        paragraph1:
          "Proporcionar soluciones de control de plagas integrales, seguras y efectivas que protejan la salud, la propiedad y la tranquilidad de nuestros clientes. Estamos comprometidos a utilizar métodos ambientalmente responsables mientras brindamos un servicio excepcional que supera las expectativas.",
        bullet1: "Métodos de control de plagas seguros y ecológicos",
        bullet2: "Soluciones integrales para todo tipo de plagas",
        bullet3: "Estrategias de prevención a largo plazo",
        bullet4: "Servicio al cliente excepcional",
      },
      cta: {
        title: "¿Listo para Experimentar la Diferencia Patriot?",
        subtitle:
          "Únase a miles de clientes satisfechos que confían en Patriot Pest Control Co para sus necesidades de control de plagas.",
        quoteButton: "Obtener Presupuesto Gratuito",
        callButton: "Llamar (509) 471-5767",
      },
    },
    fr: {
      helmet: {
        title:
          "À propos de Patriot Pest Control Co - Experts Professionnels en Lutte Antiparasitaire",
        metaDescription:
          "Découvrez Patriot Pest Control Co, les experts de confiance en lutte antiparasitaire de Spokane. Plus de 10 ans d'expérience offrant des solutions sûres et efficaces.",
      },
      schema: {
        description:
          "Découvrez Patriot Pest Control Co, les experts de confiance en lutte antiparasitaire de Spokane. Plus de 10 ans d'expérience offrant des solutions sûres et efficaces.",
      },
      hero: {
        title: "À propos de Patriot Pest Control Co",
        subtitle:
          "Votre partenaire de confiance pour des solutions complètes de lutte antiparasitaire à Spokane, WA et ses environs.",
      },
      story: {
        title: "Notre Histoire",
        paragraph1:
          "Fondée avec la mission de protéger les maisons et les entreprises des parasites indésirables, Patriot Pest Control Co est devenue l'entreprise de lutte antiparasitaire la plus fiable du nord-ouest du Pacifique. Notre parcours a commencé avec une simple conviction : chaque propriétaire mérite un environnement sûr et sans parasites.",
        paragraph2:
          "Au fil des ans, nous avons bâti notre réputation en offrant des résultats exceptionnels, en utilisant les dernières technologies et des méthodes respectueuses de l'environnement. Notre équipe de professionnels certifiés apporte des décennies d'expérience combinée à chaque travail, garantissant que vos problèmes de parasites sont résolus rapidement et efficacement.",
        paragraph3:
          "Aujourd'hui, nous sommes fiers de servir des milliers de clients satisfaits à Spokane, Walla Walla, Yakima et ses environs, en maintenant notre engagement envers l'excellence et la satisfaction du client.",
      },
      stats: {
        title: "Notre Bilan",
        subtitle: "Des chiffres qui parlent d'eux-mêmes",
        items: [
          { number: "10+", label: "Ans d'Expérience" },
          { number: "5000+", label: "Clients Satisfaits" },
          { number: "24/7", label: "Support Disponible" },
          { number: "100%", label: "Taux de Satisfaction" },
        ],
      },
      values: {
        title: "Nos Valeurs",
        subtitle: "Ce qui nous motive chaque jour",
        items: [
          {
            icon: Shield,
            title: "Sécurité Avant Tout",
            description:
              "Nous priorisons la sécurité de votre famille, de vos animaux de compagnie et de votre propriété avec des traitements écologiques.",
          },
          {
            icon: Award,
            title: "Service de Qualité",
            description:
              "Nos techniciens certifiés offrent des résultats exceptionnels en utilisant des méthodes de pointe.",
          },
          {
            icon: Users,
            title: "Orientation Client",
            description:
              "Votre satisfaction est notre priorité absolue. Nous écoutons, comprenons et proposons des solutions.",
          },
          {
            icon: Clock,
            title: "Réponse Fiable",
            description:
              "Des temps de réponse rapides et une planification flexible pour répondre à vos besoins en matière de lutte antiparasitaire.",
          },
        ],
      },
      mission: {
        title: "Notre Mission",
        paragraph1:
          "Fournir des solutions complètes, sûres et efficaces de lutte antiparasitaire qui protègent la santé, la propriété et la tranquillité d'esprit de nos clients. Nous nous engageons à utiliser des méthodes respectueuses de l'environnement tout en offrant un service exceptionnel qui dépasse les attentes.",
        bullet1: "Méthodes de lutte antiparasitaire sûres et écologiques",
        bullet2: "Solutions complètes pour tous les types de parasites",
        bullet3: "Stratégies de prévention à long terme",
        bullet4: "Service client exceptionnel",
      },
      cta: {
        title: "Prêt à Découvrir la Différence Patriot ?",
        subtitle:
          "Rejoignez des milliers de clients satisfaits qui font confiance à Patriot Pest Control Co pour leurs besoins en lutte antiparasitaire.",
        quoteButton: "Obtenir un Devis Gratuit",
        callButton: "Appeler (509) 471-5767",
      },
    },
    de: {
      helmet: {
        title: "Über Patriot Pest Control Co - Professionelle Schädlingsbekämpfungsexperten",
        metaDescription:
          "Erfahren Sie mehr über Patriot Pest Control Co, Spokanes vertrauenswürdige Schädlingsbekämpfungsexperten. Über 10 Jahre Erfahrung in der Bereitstellung sicherer, effektiver Schädlingsbekämpfungslösungen.",
      },
      schema: {
        description:
          "Erfahren Sie mehr über Patriot Pest Control Co, Spokanes vertrauenswürdige Schädlingsbekämpfungsexperten. Über 10 Jahre Erfahrung in der Bereitstellung sicherer, effektiver Schädlingsbekämpfungslösungen.",
      },
      hero: {
        title: "Über Patriot Pest Control Co",
        subtitle:
          "Ihr vertrauenswürdiger Partner für umfassende Schädlingsbekämpfungslösungen in Spokane, WA und Umgebung.",
      },
      story: {
        title: "Unsere Geschichte",
        paragraph1:
          "Gegründet mit der Mission, Häuser und Unternehmen vor unerwünschten Schädlingen zu schützen, hat sich Patriot Pest Control Co zum vertrauenswürdigsten Schädlingsbekämpfungsunternehmen im pazifischen Nordwesten entwickelt. Unsere Reise begann mit einer einfachen Überzeugung: Jeder Immobilieneigentümer verdient eine sichere, schädlingsfreie Umgebung.",
        paragraph2:
          "Im Laufe der Jahre haben wir unseren Ruf durch die Bereitstellung außergewöhnlicher Ergebnisse, den Einsatz modernster Technologie und umweltfreundlicher Methoden aufgebaut. Unser Team zertifizierter Fachleute bringt jahrzehntelange Erfahrung in jede Arbeit ein und stellt sicher, dass Ihre Schädlingsprobleme schnell und effektiv gelöst werden.",
        paragraph3:
          "Heute sind wir stolz darauf, Tausende zufriedener Kunden in Spokane, Walla Walla, Yakima und Umgebung zu bedienen und unser Engagement für Exzellenz und Kundenzufriedenheit aufrechtzuerhalten.",
      },
      stats: {
        title: "Unsere Erfolgsbilanz",
        subtitle: "Zahlen, die für sich sprechen",
        items: [
          { number: "10+", label: "Jahre Erfahrung" },
          { number: "5000+", label: "Zufriedene Kunden" },
          { number: "24/7", label: "Support Verfügbar" },
          { number: "100%", label: "Zufriedenheitsrate" },
        ],
      },
      values: {
        title: "Unsere Werte",
        subtitle: "Was uns jeden Tag antreibt",
        items: [
          {
            icon: Shield,
            title: "Sicherheit Zuerst",
            description:
              "Wir priorisieren die Sicherheit Ihrer Familie, Haustiere und Ihres Eigentums mit umweltfreundlichen Behandlungen.",
          },
          {
            icon: Award,
            title: "Qualitätsservice",
            description:
              "Unsere zertifizierten Techniker liefern außergewöhnliche Ergebnisse mit branchenführenden Methoden.",
          },
          {
            icon: Users,
            title: "Kundenorientierung",
            description:
              "Ihre Zufriedenheit ist unsere oberste Priorität. Wir hören zu, verstehen und liefern Lösungen.",
          },
          {
            icon: Clock,
            title: "Zuverlässige Reaktion",
            description:
              "Schnelle Reaktionszeiten und flexible Terminplanung, um Ihre Schädlingsbekämpfungsbedürfnisse zu erfüllen.",
          },
        ],
      },
      mission: {
        title: "Unsere Mission",
        paragraph1:
          "Umfassende, sichere und effektive Schädlingsbekämpfungslösungen anzubieten, die die Gesundheit, das Eigentum und die Seelenruhe unserer Kunden schützen. Wir verpflichten uns, umweltfreundliche Methoden anzuwenden und gleichzeitig einen außergewöhnlichen Service zu bieten, der die Erwartungen übertrifft.",
        bullet1: "Sichere, umweltfreundliche Schädlingsbekämpfungsmethoden",
        bullet2: "Umfassende Lösungen für alle Schädlingsarten",
        bullet3: "Langfristige Präventionsstrategien",
        bullet4: "Außergewöhnlicher Kundenservice",
      },
      cta: {
        title: "Bereit, den Patriot-Unterschied zu erleben?",
        subtitle:
          "Schließen Sie sich Tausenden zufriedener Kunden an, die Patriot Pest Control Co für ihre Schädlingsbekämpfungsbedürfnisse vertrauen.",
        quoteButton: "Kostenloses Angebot erhalten",
        callButton: "Anrufen (509) 471-5767",
      },
    },
    zh: {
      helmet: {
        title: "关于Patriot Pest Control Co - 专业害虫防治专家",
        metaDescription:
          "了解Patriot Pest Control Co，斯波坎值得信赖的害虫防治专家。超过10年的经验，提供安全、有效的害虫防治解决方案。",
      },
      schema: {
        description:
          "了解Patriot Pest Control Co，斯波坎值得信赖的害虫防治专家。超过10年的经验，提供安全、有效的害虫防治解决方案。",
      },
      hero: {
        title: "关于Patriot Pest Control Co",
        subtitle: "您在斯波坎、华盛顿州及周边地区全面害虫防治解决方案的值得信赖的合作伙伴。",
      },
      story: {
        title: "我们的故事",
        paragraph1:
          "Patriot Pest Control Co 成立于旨在保护家庭和企业免受有害害虫侵害的使命，现已发展成为太平洋西北地区最值得信赖的害虫防治公司。我们的旅程始于一个简单的信念：每个业主都应该拥有一个安全、无害虫的环境。",
        paragraph2:
          "多年来，我们通过提供卓越的成果，采用最新技术和环保方法，建立了我们的声誉。我们认证的专业团队为每项工作带来了数十年的综合经验，确保您的害虫问题得到快速有效的解决。",
        paragraph3:
          "今天，我们很自豪能为斯波坎、瓦拉瓦拉、亚基马及周边地区的数千名满意客户提供服务，并始终坚持我们对卓越和客户满意度的承诺。",
      },
      stats: {
        title: "我们的业绩记录",
        subtitle: "数字说明一切",
        items: [
          { number: "10+", label: "多年经验" },
          { number: "5000+", label: "满意客户" },
          { number: "24/7", label: "提供支持" },
          { number: "100%", label: "满意度" },
        ],
      },
      values: {
        title: "我们的价值观",
        subtitle: "每天激励我们的动力",
        items: [
          {
            icon: Shield,
            title: "安全第一",
            description: "我们优先考虑您家人、宠物和财产的安全，采用环保处理方法。",
          },
          {
            icon: Award,
            title: "优质服务",
            description: "我们的认证技术人员采用行业领先的方法提供卓越的成果。",
          },
          {
            icon: Users,
            title: "以客户为中心",
            description: "您的满意是我们的首要任务。我们倾听、理解并提供解决方案。",
          },
          {
            icon: Clock,
            title: "可靠响应",
            description: "快速响应时间和灵活的日程安排，以满足您的害虫防治需求。",
          },
        ],
      },
      mission: {
        title: "我们的使命",
        paragraph1:
          "提供全面、安全、有效的害虫防治解决方案，保护客户的健康、财产和安心。我们致力于采用环保方法，同时提供超越期望的卓越服务。",
        bullet1: "安全、环保的害虫防治方法",
        bullet2: "针对所有害虫类型的全面解决方案",
        bullet3: "长期预防策略",
        bullet4: "卓越的客户服务",
      },
      cta: {
        title: "准备好体验Patriot的与众不同了吗？",
        subtitle:
          "加入成千上万的满意客户，他们信任Patriot Pest Control Co 来满足他们的害虫防治需求。",
        quoteButton: "获取免费报价",
        callButton: "致电 (509) 471-5767",
      },
    },
  };

  const currentLangData = aboutData[currentLang] || aboutData.en;

  const stats = currentLangData.stats.items;

  const values = currentLangData.values.items;

  const aboutPageSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    mainEntity: {
      "@type": "PestControl",
      name: "Patriot Pest Control Co",
      url: "https://www.patriotpest.pro/about",
      telephone: "(509) 471-5767",
      email: "Admin@PatriotPest.Pro",
      description: currentLangData.schema.description,
    },
  };

  return (
    <>
      <Helmet>
        <title>{currentLangData.helmet.title}</title>
        <meta name="description" content={currentLangData.helmet.metaDescription} />
      </Helmet>
      <JsonLd schema={aboutPageSchema} />

      {/* Hero Section */}
      <section className="hero-gradient text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{currentLangData.hero.title}</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              {currentLangData.hero.subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                {currentLangData.story.title}
              </h2>
              <p className="text-gray-600 mb-6">{currentLangData.story.paragraph1}</p>
              <p className="text-gray-600 mb-6">{currentLangData.story.paragraph2}</p>
              <p className="text-gray-600">{currentLangData.story.paragraph3}</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              {/* Removed image as requested */}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">{currentLangData.stats.title}</h2>
            <p className="text-xl text-blue-100">{currentLangData.stats.subtitle}</p>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-blue-100">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
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
              {currentLangData.values.title}
            </h2>
            <p className="text-xl text-gray-600">{currentLangData.values.subtitle}</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <value.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <img
                alt="Pest control treatment in progress"
                className="rounded-lg shadow-lg"
                src="https://images.unsplash.com/photo-1594005541321-3fb4f2a7d1b3"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                {currentLangData.mission.title}
              </h2>
              <p className="text-gray-600 mb-6">{currentLangData.mission.paragraph1}</p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1" />
                  <span className="text-gray-600">{currentLangData.mission.bullet1}</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1" />
                  <span className="text-gray-600">{currentLangData.mission.bullet2}</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1" />
                  <span className="text-gray-600">{currentLangData.mission.bullet3}</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1" />
                  <span className="text-gray-600">{currentLangData.mission.bullet4}</span>
                </div>
              </div>
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
            <h2 className="text-3xl font-bold mb-4">{currentLangData.cta.title}</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              {currentLangData.cta.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
                <Link to="/prices">{currentLangData.cta.quoteButton}</Link>
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
                  <span className="font-bold">{currentLangData.cta.callButton}</span>
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default About;

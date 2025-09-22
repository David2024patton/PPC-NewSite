import React, { useState, useMemo } from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import {
  ChevronDown,
  ChevronUp,
  Search,
  Bug,
  Home,
  Shield,
  Clock,
  DollarSign,
  Leaf,
  Phone,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import JsonLd from "@/components/JsonLd";
import { useLanguage } from "../contexts/LanguageContext";
// import { toggleFAQ } from "../components/FAQs";

const FAQs = () => {
  const { language } = useLanguage();
  const [openFAQ, setOpenFAQ] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const faqsPageData = {
    en: {
      helmet: {
        title: "Frequently Asked Questions - Patriot Pest Control Co | Spokane, WA",
        description:
          "Get answers to common pest control questions. Learn about our treatments, safety measures, pricing, and what to expect from Patriot Pest Control Co services.",
        keywords:
          "pest control FAQ, pest control questions, treatment safety, pest control pricing, Spokane pest control",
      },
      hero: {
        title: "Frequently Asked Questions",
        description:
          "Everything you need to know about our pest control services, treatments, and what to expect.",
      },
      categories: [
        { id: "all", name: "All Questions", icon: Bug },
        { id: "general", name: "General Information", icon: Home },
        { id: "treatment", name: "Treatment Results", icon: Shield },
        { id: "preparation", name: "Preparation & Maintenance", icon: Clock },
        { id: "pricing", name: "Pricing & Service", icon: DollarSign },
        { id: "safety", name: "Safety & Environment", icon: Leaf },
      ],
      faqs: [
        {
          id: 1,
          category: "general",
          question: "What should I expect during my first service visit?",
          answer:
            "During your first visit, our certified technician will conduct a thorough inspection of your property, identify pest issues and entry points, explain our treatment plan, and begin the initial treatment. The visit typically takes 45-90 minutes depending on property size.",
        },
        {
          id: 2,
          category: "general",
          question: "How long does a typical treatment take?",
          answer:
            "Most residential treatments take 30-60 minutes, while commercial properties may require 1-3 hours depending on size and complexity. We'll provide an estimated timeframe when scheduling your service.",
        },
        {
          id: 3,
          category: "general",
          question: "Do I need to be home during the service?",
          answer:
            "While it's not always necessary, we recommend being present for the first visit to discuss any concerns and receive important information about the treatment. For follow-up visits, we can often service your property while you're away.",
        },
        {
          id: 4,
          category: "general",
          question: "Are your treatments safe for children and pets?",
          answer:
            "Yes, we use EPA-approved products and follow strict safety protocols. We'll provide specific instructions for any precautions needed, such as keeping pets away from treated areas until dry (typically 2-4 hours).",
        },

        // Treatment Results
        {
          id: 5,
          category: "treatment",
          question: "When will I see results from the treatment?",
          answer:
            "Most customers see a significant reduction in pest activity within 24-48 hours. Complete elimination may take 1-2 weeks as pests come into contact with treated areas. Some pests like termites may take longer to show results.",
        },
        {
          id: 6,
          category: "treatment",
          question: "Why might I see more bugs after the first treatment?",
          answer:
            'This is normal and called the "flushing effect." Treatments disturb pests from their hiding places, making them more visible as they seek new shelter. This activity typically decreases within a few days.',
        },
        {
          id: 7,
          category: "treatment",
          question: "What happens if pests return between services?",
          answer:
            "We offer a service guarantee. If pests return between scheduled treatments, contact us immediately and we'll return to re-treat the affected areas at no additional charge.",
        },

        // Preparation & Maintenance
        {
          id: 8,
          category: "preparation",
          question: "How should I prepare my home before treatment?",
          answer:
            "Remove items from areas to be treated, cover or remove pet food and water bowls, ensure access to treatment areas, and inform us of any specific concerns. We'll provide a detailed preparation checklist when scheduling.",
        },
        {
          id: 9,
          category: "preparation",
          question: "Can I clean my house after treatment?",
          answer:
            "Wait 24-48 hours before cleaning treated surfaces. Use mild soap and water when cleaning, and avoid harsh chemicals that might reduce treatment effectiveness. We'll provide specific cleaning guidelines.",
        },
        {
          id: 10,
          category: "preparation",
          question: "What can I do to prevent pests between services?",
          answer:
            "Keep your home clean, seal food in containers, fix moisture issues, seal cracks and gaps, maintain landscaping away from your home, and follow our prevention recommendations.",
        },

        // Pricing & Service
        {
          id: 11,
          category: "pricing",
          question: "How much does pest control service cost?",
          answer:
            "Pricing varies based on property size, pest type, and treatment frequency. We offer free inspections and customized quotes. Most residential services range from $100-300 per treatment, with discounts for ongoing service plans.",
        },
        {
          id: 12,
          category: "pricing",
          question: "Do you offer service guarantees?",
          answer:
            "Yes, we guarantee our work. If pests return between scheduled services, we'll re-treat at no charge. Specific guarantee terms vary by service type and are detailed in your service agreement.",
        },
        {
          id: 13,
          category: "pricing",
          question: "Can I reschedule my appointment if needed?",
          answer:
            "Absolutely! We understand schedules change. Please give us at least 24 hours notice to reschedule without any fees. You can call us at (509) 471-5767 or contact us online.",
        },

        // Safety & Environment
        {
          id: 14,
          category: "safety",
          question: "Vos traitements sont-ils respectueux de l'environnement ?",
          answer:
            "Nous privilégions les solutions écologiques chaque fois que possible, en utilisant des applications ciblées, une gestion intégrée des parasites et des produits ayant un impact environnemental minimal. Nous pouvons discuter des options de traitement écologique lors de votre consultation.",
        },
        {
          id: 15,
          category: "safety",
          question: "Quelles précautions dois-je prendre après le traitement ?",
          answer:
            "Gardez les enfants et les animaux domestiques éloignés des zones traitées jusqu'à ce qu'elles soient sèches, évitez de nettoyer les surfaces traitées pendant 24 à 48 heures, ventilez les zones intérieures traitées et suivez toutes les instructions spécifiques fournies par votre technicien.",
        },
        {
          id: 16,
          category: "safety",
          question:
            "Utilisez-vous des méthodes de lutte antiparasitaire biologiques ou naturelles ?",
          answer:
            "Oui, nous proposons des options de traitement biologiques et naturelles, notamment des insecticides botaniques, de la terre de diatomées, des produits à base d'huiles essentielles et des contrôles biologiques. Ceux-ci peuvent nécessiter des applications plus fréquentes, mais sont excellents pour les environnements sensibles.",
        },
      ],
      contact: {
        title: "¿No encontró su pregunta?",
        description:
          "Nuestro equipo está listo para ayudar. Contáctenos directamente para obtener respuestas personalizadas.",
        button: "Contactar Ahora",
        phone: "(509) 123-4567",
      },
    },
    es: {
      helmet: {
        title: "Preguntas Frecuentes - Patriot Pest Control Co | Spokane, WA",
        description:
          "Obtenga respuestas a preguntas comunes sobre control de plagas. Conozca nuestros tratamientos, medidas de seguridad, precios y qué esperar de los servicios de Patriot Pest Control Co.",
        keywords:
          "preguntas frecuentes control de plagas, preguntas sobre control de plagas, seguridad del tratamiento, precios de control de plagas, control de plagas Spokane",
      },
      hero: {
        title: "Preguntas Frecuentes",
        description:
          "Todo lo que necesita saber sobre nuestros servicios de control de plagas, tratamientos y qué esperar.",
      },
      categories: [
        { id: "all", name: "Todas las Preguntas", icon: Bug },
        { id: "general", name: "Información General", icon: Home },
        { id: "treatment", name: "Resultados del Tratamiento", icon: Shield },
        { id: "preparation", name: "Preparación y Mantenimiento", icon: Clock },
        { id: "pricing", name: "Precios y Servicio", icon: DollarSign },
        { id: "safety", name: "Seguridad y Medio Ambiente", icon: Leaf },
      ],
      faqs: [
        {
          id: 1,
          category: "general",
          question: "¿Qué debo esperar durante mi primera visita de servicio?",
          answer:
            "Durante su primera visita, nuestro técnico certificado realizará una inspección exhaustiva de su propiedad, identificará problemas de plagas y puntos de entrada, explicará nuestro plan de tratamiento y comenzará el tratamiento inicial. La visita suele durar entre 45 y 90 minutos, dependiendo del tamaño de la propiedad.",
        },
        {
          id: 2,
          category: "general",
          question: "¿Cuánto tiempo dura un tratamiento típico?",
          answer:
            "La mayoría de los tratamientos residenciales duran entre 30 y 60 minutos, mientras que las propiedades comerciales pueden requerir de 1 a 3 horas, dependiendo del tamaño y la complejidad. Le proporcionaremos un tiempo estimado al programar su servicio.",
        },
        {
          id: 3,
          category: "general",
          question: "¿Necesito estar en casa durante el servicio?",
          answer:
            "Aunque no siempre es necesario, recomendamos estar presente en la primera visita para discutir cualquier inquietud y recibir información importante sobre el tratamiento. Para las visitas de seguimiento, a menudo podemos atender su propiedad mientras usted está fuera.",
        },
        {
          id: 4,
          category: "general",
          question: "¿Son seguros sus tratamientos para niños y mascotas?",
          answer:
            "Sí, utilizamos productos aprobados por la EPA y seguimos estrictos protocolos de seguridad. Le proporcionaremos instrucciones específicas sobre cualquier precaución necesaria, como mantener a las mascotas alejadas de las áreas tratadas hasta que estén secas (generalmente de 2 a 4 horas).",
        },

        // Treatment Results
        {
          id: 5,
          category: "treatment",
          question: "¿Cuándo veré resultados del tratamiento?",
          answer:
            "La mayoría de los clientes ven una reducción significativa en la actividad de las plagas dentro de las 24-48 horas. La eliminación completa puede tardar de 1 a 2 semanas a medida que las plagas entran en contacto con las áreas tratadas. Algunas plagas como las termitas pueden tardar más en mostrar resultados.",
        },
        {
          id: 6,
          category: "treatment",
          question: "¿Por qué podría ver más insectos después del primer tratamiento?",
          answer:
            'Esto es normal y se llama "efecto de expulsión". Los tratamientos perturban a las plagas de sus escondites, haciéndolas más visibles a medida que buscan un nuevo refugio. Esta actividad suele disminuir en unos pocos días.',
        },
        {
          id: 7,
          category: "treatment",
          question: "¿Qué sucede si las plagas regresan entre servicios?",
          answer:
            "Ofrecemos una garantía de servicio. Si las plagas regresan entre tratamientos programados, contáctenos de inmediato y regresaremos para volver a tratar las áreas afectadas sin cargo adicional.",
        },

        // Preparation & Maintenance
        {
          id: 8,
          category: "preparation",
          question: "¿Cómo debo preparar mi casa antes del tratamiento?",
          answer:
            "Retire los artículos de las áreas a tratar, cubra o retire los recipientes de comida y agua de las mascotas, asegure el acceso a las áreas de tratamiento e infórmenos de cualquier inquietud específica. Le proporcionaremos una lista de verificación de preparación detallada al programar.",
        },
        {
          id: 9,
          category: "preparation",
          question: "¿Puedo limpiar mi casa después del tratamiento?",
          answer:
            "Espere de 24 a 48 horas antes de limpiar las superficies tratadas. Use jabón suave y agua al limpiar, y evite los productos químicos fuertes que puedan reducir la eficacia del tratamiento. Le proporcionaremos pautas de limpieza específicas.",
        },
        {
          id: 10,
          category: "preparation",
          question: "¿Qué puedo hacer para prevenir plagas entre servicios?",
          answer:
            "Mantenga su hogar limpio, selle los alimentos en recipientes, solucione problemas de humedad, selle grietas y huecos, mantenga el paisajismo alejado de su hogar y siga nuestras recomendaciones de prevención.",
        },

        // Pricing & Service
        {
          id: 11,
          category: "pricing",
          question: "¿Cuáles son sus opciones de precios y planes de servicio?",
          answer:
            "Ofrecemos una variedad de planes de servicio para satisfacer sus necesidades, desde tratamientos únicos hasta planes de protección anuales. Contáctenos para una cotización personalizada y para discutir la mejor opción para usted.",
        },
        {
          id: 12,
          category: "pricing",
          question: "¿Ofrecen garantías en sus servicios?",
          answer:
            "Sí, respaldamos la calidad de nuestro trabajo con una garantía de satisfacción. Si las plagas regresan entre servicios, volveremos a tratar sin costo adicional. Consulte los detalles específicos de la garantía con su técnico.",
        },
        {
          id: 13,
          category: "pricing",
          question: "¿A qué áreas de servicio atienden?",
          answer:
            "Patriot Pest Control Co atiende a Spokane, WA y las áreas circundantes. Visite nuestra página de Áreas de Servicio o contáctenos para confirmar si atendemos su ubicación.",
        },

        // Safety & Environment
        {
          id: 14,
          category: "safety",
          question: "¿Son sus productos de control de plagas seguros para el medio ambiente?",
          answer:
            "Priorizamos el uso de productos y métodos de control de plagas respetuosos con el medio ambiente siempre que sea posible. Nuestros técnicos están capacitados en las últimas técnicas de Manejo Integrado de Plagas (MIP) para minimizar el impacto ambiental.",
        },
        {
          id: 15,
          category: "safety",
          question: "¿Qué precauciones toman para proteger a mi familia y mascotas?",
          answer:
            "Nuestros técnicos están capacitados para aplicar tratamientos de manera segura y efectiva. Le informaremos sobre cualquier precaución necesaria, como la ventilación o la restricción de acceso a ciertas áreas durante un corto período después del tratamiento.",
        },
        {
          id: 16,
          category: "safety",
          question: "¿Utilizan métodos de control de plagas orgánicos o naturales?",
          answer:
            "Sí, ofrecemos opciones de tratamiento orgánico y natural, que incluyen insecticidas botánicos, tierra de diatomeas, productos a base de aceites esenciales y controles biológicos. Estos pueden requerir aplicaciones más frecuentes, pero son excelentes para entornos sensibles.",
        },
      ],
      contact: {
        title: "¿Preguntas Adicionales? ¡Estamos Aquí para Ayudar!",
        description:
          "Si no encontró la respuesta que buscaba, no dude en ponerse en contacto con nuestro amable equipo. Estaremos encantados de ayudarle.",
        buttonText: "Contáctenos",
        phoneText: "¡Llámenos Hoy!",
      },
    },
  };

  const helmetData = faqsPageData[language]?.helmet || faqsPageData.en.helmet;
  const heroData = faqsPageData[language]?.hero || faqsPageData.en.hero;
  const categoriesData = faqsPageData[language]?.categories || faqsPageData.en.categories;
  const faqsData = faqsPageData[language]?.faqs || faqsPageData.en.faqs;
  const contactData = faqsPageData[language]?.contact || faqsPageData.en.contact;

  const allCategories = useMemo(() => {
    const categories = [
      { id: "all", name: categoriesData[0].name, icon: Bug },
      ...categoriesData.slice(1),
    ];
    return categories;
  }, [categoriesData]);

  const filteredFaqs = useMemo(() => {
    let filtered = faqsData;

    if (selectedCategory !== "all") {
      filtered = filtered.filter((faq) => faq.category === selectedCategory);
    }

    if (searchTerm) {
      filtered = filtered.filter(
        (faq) =>
          faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
          faq.answer.toLowerCase().includes(searchTerm.toLowerCase()),
      );
    }
    return filtered;
  }, [faqsData, selectedCategory, searchTerm]);

  const toggleFAQ = (id) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  const faqPageSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: filteredFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="faqs-page bg-gray-50 min-h-screen"
    >
      <Helmet>
        <title>{helmetData.title}</title>
        <meta name="description" content={helmetData.description} />
        <meta name="keywords" content={helmetData.keywords} />
      </Helmet>

      <JsonLd data={faqPageSchema} />

      <section className="hero bg-gradient-to-r from-green-600 to-green-800 text-white py-20 text-center">
        <div className="container mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl font-bold mb-4"
          >
            {heroData.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl opacity-90 max-w-3xl mx-auto"
          >
            {heroData.description}
          </motion.p>
        </div>
      </section>

      <section className="py-12 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row gap-8">
            <aside className="md:w-1/4">
              <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Categories</h3>
                <ul className="space-y-2">
                  {allCategories.map((category) => (
                    <li key={category.id}>
                      <Button
                        variant={selectedCategory === category.id ? "default" : "ghost"}
                        className="w-full justify-start"
                        onClick={() => setSelectedCategory(category.id)}
                      >
                        <category.icon className="mr-2 h-5 w-5" />
                        {category.name}
                      </Button>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Search FAQs</h3>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search questions..."
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </div>
            </aside>

            <main className="md:w-3/4">
              <div className="bg-white p-8 rounded-lg shadow-md">
                {filteredFaqs.length === 0 ? (
                  <p className="text-center text-gray-600 text-lg">
                    No FAQs found matching your criteria.
                  </p>
                ) : (
                  <div className="space-y-4">
                    {filteredFaqs.map((faq) => (
                      <div key={faq.id} className="border-b border-gray-200 pb-4 last:border-b-0">
                        <button
                          className="flex justify-between items-center w-full text-left font-semibold text-lg text-gray-900 py-2"
                          onClick={() => setOpenFAQ(openFAQ === faq.id ? null : faq.id)}
                        >
                          {faq.question}
                          {openFAQ === faq.id ? (
                            <ChevronUp className="h-5 w-5 text-green-600" />
                          ) : (
                            <ChevronDown className="h-5 w-5 text-green-600" />
                          )}
                        </button>
                        {openFAQ === faq.id && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="mt-2 text-gray-700"
                          >
                            <p>{faq.answer}</p>
                          </motion.div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </main>
          </div>
        </div>
      </section>

      <section className="contact-section bg-green-700 text-white py-16 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-4">{contactData.title}</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">{contactData.description}</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              asChild
              variant="secondary"
              size="lg"
              className="text-green-800 hover:text-green-900"
            >
              <a href="/contact">
                <Phone className="mr-2 h-5 w-5" />
                {contactData.buttonText}
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="text-white border-white hover:bg-white hover:text-green-700"
            >
              <a href="tel:509-471-5767">{contactData.phoneText} (509) 471-5767</a>
            </Button>
          </div>
        </div>
      </section>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} Patriot Pest Control Co. All rights reserved.</p>
        </div>
      </footer>
    </motion.div>
  );
};

export default FAQs;

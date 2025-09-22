import React from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { useLanguage } from "../contexts/LanguageContext";

const PrivacyPolicy = () => {
  const { language } = useLanguage();

  const privacyPolicyPageData = {
    en: {
      metaTitle: "Privacy Policy - Patriot Pest Control Co",
      metaDescription:
        "Read the privacy policy for Patriot Pest Control Co. We are committed to protecting your personal information.",
      lastUpdated: "Last updated: September 21, 2025",
      title: "Privacy Policy",
      paragraph1:
        'Patriot Pest Control Co ("us", "we", or "our") operates the https://www.patriotpest.pro website (the "Service"). This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data.',
      infoCollectionTitle: "Information Collection and Use",
      infoCollectionParagraph:
        "We collect several different types of information for various purposes to provide and improve our Service to you.",
      typesOfDataTitle: "Types of Data Collected",
      personalDataTitle: "Personal Data",
      personalDataParagraph:
        'While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you ("Personal Data"). Personally identifiable information may include, but is not limited to:',
      personalDataList: [
        "Email address",
        "First name and last name",
        "Phone number",
        "Address, State, Province, ZIP/Postal code, City",
        "Cookies and Usage Data",
      ],
      useOfDataTitle: "Use of Data",
      useOfDataParagraph: "Patriot Pest Control Co uses the collected data for various purposes:",
      useOfDataList: [
        "To provide and maintain our Service",
        "To notify you about changes to our Service",
        "To provide customer support",
        "To gather analysis or valuable information so that we can improve our Service",
        "To monitor the usage of our Service",
        "To detect, prevent and address technical issues",
      ],
      securityOfDataTitle: "Security of Data",
      securityOfDataParagraph:
        "The security of your data is important to us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.",
      contactUsTitle: "Contact Us",
      contactUsParagraph: "If you have any questions about this Privacy Policy, please contact us:",
      contactUsEmail: "By email: Admin@PatriotPest.Pro",
      contactUsPhone: "By phone number: (509) 471-5767",
    },
    es: {
      metaTitle: "Política de Privacidad - Patriot Pest Control Co",
      metaDescription:
        "Lea la política de privacidad de Patriot Pest Control Co. Estamos comprometidos a proteger su información personal.",
      lastUpdated: "Última actualización: 21 de septiembre de 2025",
      title: "Política de Privacidad",
      paragraph1:
        'Patriot Pest Control Co ("nosotros", "nuestro") opera el sitio web https://www.patriotpest.pro (el "Servicio"). Esta página le informa de nuestras políticas con respecto a la recopilación, uso y divulgación de datos personales cuando utiliza nuestro Servicio y las opciones que tiene asociadas con esos datos.',
      infoCollectionTitle: "Recopilación y Uso de Información",
      infoCollectionParagraph:
        "Recopilamos varios tipos diferentes de información para diversos propósitos para proporcionarle y mejorar nuestro Servicio.",
      typesOfDataTitle: "Tipos de Datos Recopilados",
      personalDataTitle: "Datos Personales",
      personalDataParagraph:
        'Al utilizar nuestro Servicio, podemos pedirle que nos proporcione cierta información de identificación personal que puede utilizarse para contactarlo o identificarlo ("Datos Personales"). La información de identificación personal puede incluir, entre otros:',
      personalDataList: [
        "Dirección de correo electrónico",
        "Nombre y apellido",
        "Número de teléfono",
        "Dirección, Estado, Provincia, Código Postal, Ciudad",
        "Cookies y Datos de Uso",
      ],
      useOfDataTitle: "Uso de Datos",
      useOfDataParagraph:
        "Patriot Pest Control Co utiliza los datos recopilados para diversos fines:",
      useOfDataList: [
        "Para proporcionar y mantener nuestro Servicio",
        "Para notificarle sobre cambios en nuestro Servicio",
        "Para proporcionar soporte al cliente",
        "Para recopilar análisis o información valiosa para que podamos mejorar nuestro Servicio",
        "Para monitorear el uso de nuestro Servicio",
        "Para detectar, prevenir y abordar problemas técnicos",
      ],
      securityOfDataTitle: "Seguridad de Datos",
      securityOfDataParagraph:
        "La seguridad de sus datos es importante para nosotros, pero recuerde que ningún método de transmisión por Internet o método de almacenamiento electrónico es 100% seguro. Si bien nos esforzamos por utilizar medios comercialmente aceptables para proteger sus Datos Personales, no podemos garantizar su seguridad absoluta.",
      contactUsTitle: "Contáctenos",
      contactUsParagraph:
        "Si tiene alguna pregunta sobre esta Política de Privacidad, contáctenos:",
      contactUsEmail: "Por correo electrónico: Admin@PatriotPest.Pro",
      contactUsPhone: "Por número de teléfono: (509) 471-5767",
    },
    fr: {
      metaTitle: "Politique de Confidentialité - Patriot Pest Control Co",
      metaDescription:
        "Lisez la politique de confidentialité de Patriot Pest Control Co. Nous nous engageons à protéger vos informations personnelles.",
      lastUpdated: "Dernière mise à jour : 21 septembre 2025",
      title: "Politique de Confidentialité",
      paragraph1:
        'Patriot Pest Control Co ("nous", "notre") exploite le site web https://www.patriotpest.pro (le "Service"). Cette page vous informe de nos politiques concernant la collecte, l\'utilisation et la divulgation des données personnelles lorsque vous utilisez notre Service et les choix que vous avez associés à ces données.',
      infoCollectionTitle: "Collecte et Utilisation des Informations",
      infoCollectionParagraph:
        "Nous recueillons plusieurs types d'informations à diverses fins pour vous fournir et améliorer notre Service.",
      typesOfDataTitle: "Types de Données Collectées",
      personalDataTitle: "Données Personnelles",
      personalDataParagraph:
        "Lors de l'utilisation de notre Service, nous pouvons vous demander de nous fournir certaines informations personnellement identifiables qui peuvent être utilisées pour vous contacter ou vous identifier (\"Données Personnelles\"). Les informations personnellement identifiables peuvent inclure, sans s'y limiter :",
      personalDataList: [
        "Adresse e-mail",
        "Nom et prénom",
        "Numéro de téléphone",
        "Adresse, État, Province, Code Postal, Ville",
        "Cookies et Données d'Utilisation",
      ],
      useOfDataTitle: "Utilisation des Données",
      useOfDataParagraph:
        "Patriot Pest Control Co utilise les données collectées à diverses fins :",
      useOfDataList: [
        "Pour fournir et maintenir notre Service",
        "Pour vous informer des changements apportés à notre Service",
        "Pour fournir un support client",
        "Pour recueillir des analyses ou des informations précieuses afin que nous puissions améliorer notre Service",
        "Pour surveiller l'utilisation de notre Service",
        "Pour détecter, prévenir et résoudre les problèmes techniques",
      ],
      securityOfDataTitle: "Sécurité des Données",
      securityOfDataParagraph:
        "La sécurité de vos données est importante pour nous, mais rappelez-vous qu'aucune méthode de transmission sur Internet, ni aucune méthode de stockage électronique n'est sûre à 100 %. Bien que nous nous efforcions d'utiliser des moyens commercialement acceptables pour protéger vos Données Personnelles, nous ne pouvons garantir leur sécurité absolue.",
      contactUsTitle: "Contactez-nous",
      contactUsParagraph:
        "Si vous avez des questions concernant cette politique de confidentialité, veuillez nous contacter :",
      contactUsEmail: "Par e-mail : Admin@PatriotPest.Pro",
      contactUsPhone: "Par numéro de téléphone : (509) 471-5767",
    },
  };

  const currentLangData = privacyPolicyPageData[language];

  return (
    <>
      <Helmet>
        <title>{currentLangData.metaTitle}</title>
        <meta name="description" content={currentLangData.metaDescription} />
        <meta name="robots" content="noindex, follow" />
      </Helmet>

      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {currentLangData.title}
            </h1>
            <p className="text-lg text-gray-600 mb-8">{currentLangData.lastUpdated}</p>

            <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
              <p>{currentLangData.paragraph1}</p>

              <h2 className="text-2xl font-bold text-gray-900 pt-6">
                {currentLangData.infoCollectionTitle}
              </h2>
              <p>{currentLangData.infoCollectionParagraph}</p>
              <h3 className="text-xl font-semibold text-gray-800">
                {currentLangData.typesOfDataTitle}
              </h3>
              <h4>{currentLangData.personalDataTitle}</h4>
              <p>{currentLangData.personalDataParagraph}</p>
              <ul>
                {currentLangData.personalDataList.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 pt-6">
                {currentLangData.useOfDataTitle}
              </h2>
              <p>{currentLangData.useOfDataParagraph}</p>
              <ul>
                {currentLangData.useOfDataList.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 pt-6">
                {currentLangData.securityOfDataTitle}
              </h2>
              <p>{currentLangData.securityOfDataParagraph}</p>

              <h2 className="text-2xl font-bold text-gray-900 pt-6">
                {currentLangData.contactUsTitle}
              </h2>
              <p>{currentLangData.contactUsParagraph}</p>
              <ul>
                <li>{currentLangData.contactUsEmail}</li>
                <li>{currentLangData.contactUsPhone}</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default PrivacyPolicy;

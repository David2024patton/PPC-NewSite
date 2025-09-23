import React from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";

const PrivacyPolicy = () => {
  const privacyPolicyPageData = {
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
  };

  const currentLangData = privacyPolicyPageData;

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

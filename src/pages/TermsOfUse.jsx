import React from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";

const TermsOfUse = () => {
  return (
    <>
      <Helmet>
        <title>Terms of Use - Patriot Pest Control Co</title>
        <meta
          name="description"
          content="Read the Terms of Use for the Patriot Pest Control Co website. Your use of our service is subject to these terms."
        />
        <meta name="robots" content="noindex, follow" />
      </Helmet>

      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Terms of Use</h1>
            <p className="text-lg text-gray-600 mb-8">Last updated: September 21, 2025</p>

            <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
              <p>
                Welcome to Patriot Pest Control Co. These terms and conditions outline the rules and
                regulations for the use of Patriot Pest Control Co&apos;s Website, located at
                https://www.patriotpest.pro.
              </p>
              <p>
                By accessing this website we assume you accept these terms and conditions. Do not
                continue to use Patriot Pest Control Co if you do not agree to take all of the terms
                and conditions stated on this page.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 pt-6">License</h2>
              <p>
                Unless otherwise stated, Patriot Pest Control Co and/or its licensors own the
                intellectual property rights for all material on Patriot Pest Control Co. All
                intellectual property rights are reserved. You may access this from Patriot Pest
                Control Co for your own personal use subjected to restrictions set in these terms
                and conditions.
              </p>
              <p>You must not:</p>
              <ul>
                <li>Republish material from Patriot Pest Control Co</li>
                <li>Sell, rent or sub-license material from Patriot Pest Control Co</li>
                <li>Reproduce, duplicate or copy material from Patriot Pest Control Co</li>
                <li>Redistribute content from Patriot Pest Control Co</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 pt-6">Disclaimer</h2>
              <p>
                To the maximum extent permitted by applicable law, we exclude all representations,
                warranties and conditions relating to our website and the use of this website.
                Nothing in this disclaimer will:
              </p>
              <ul>
                <li>limit or exclude our or your liability for death or personal injury;</li>
                <li>
                  limit or exclude our or your liability for fraud or fraudulent misrepresentation;
                </li>
                <li>
                  limit any of our or your liabilities in any way that is not permitted under
                  applicable law; or
                </li>
                <li>
                  exclude any of our or your liabilities that may not be excluded under applicable
                  law.
                </li>
              </ul>
              <p>
                The limitations and prohibitions of liability set in this Section and elsewhere in
                this disclaimer: (a) are subject to the preceding paragraph; and (b) govern all
                liabilities arising under the disclaimer, including liabilities arising in contract,
                in tort and for breach of statutory duty.
              </p>
              <p>
                As long as the website and the information and services on the website are provided
                free of charge, we will not be liable for any loss or damage of any nature.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default TermsOfUse;

import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Lock } from "lucide-react";
import GoldUpsellModal from "@/components/GoldUpsellModal";
import GoldFTUpsellModal from "@/components/GoldFTUpsellModal";

const GoldCheckout = () => {
  const [selectedOption, setSelectedOption] = useState("gold");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const pageData = {
    title: "Gold Plan Checkout - Patriot Pest Control Co",
    description: "Finalize your Gold pest control plan selection.",
    header: "You’ve picked the Gold Plan",
    subheader: "Select your option below:",
    goldOnly: "Gold Only",
    goldOnlyDescription: "Priority Interior + Exterior",
    goldFleaTick: "Gold & Flea & Tick",
    goldFleaTickDescription: "Includes Flea & Tick",
    total: "Total:",
    redirectMessage:
      "You will be redirected to a secure payment page, then to our booking calendar to schedule your service.",
    continueToCheckout: "Continue to Checkout",
  };

  const options = {
    gold: {
      price: "79.99",
    },
    "gold-ft": {
      price: "95.94",
    },
  };

  const handleCheckout = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Helmet>
        <title>{pageData.title}</title>
        <meta name="description" content={pageData.description} />
      </Helmet>
      <div className="min-h-screen bg-[#1e3a8a] flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          className="bg-white rounded-lg shadow-2xl p-8 max-w-md w-full"
        >
          <h1 className="text-2xl font-bold text-center text-gray-800 mb-2">
            {pageData.header}
          </h1>
          <p className="text-center text-gray-600 mb-6">{pageData.subheader}</p>

          <div className="grid grid-cols-2 gap-4 mb-6">
            <motion.div
              whileTap={{ scale: 0.98 }}
              onClick={() => setSelectedOption("gold")}
              className={`cursor-pointer rounded-lg p-4 text-center border-2 transition-all ${
                selectedOption === "gold"
                  ? "bg-[#fff176] border-[#fbc02d]"
                  : "bg-white border-gray-300 hover:border-gray-400"
              }`}
            >
              <p className="font-bold text-gray-800">{pageData.goldOnly}</p>
              <p className="text-lg font-semibold text-gray-900">$79.99/mo</p>
              <p className="text-sm text-gray-600">{pageData.goldOnlyDescription}</p>
            </motion.div>
            <motion.div
              whileTap={{ scale: 0.98 }}
              onClick={() => setSelectedOption("gold-ft")}
              className={`cursor-pointer rounded-lg p-4 text-center border-2 transition-all ${
                selectedOption === "gold-ft"
                  ? "bg-[#fff176] border-[#fbc02d]"
                  : "bg-white border-gray-300 hover:border-gray-400"
              }`}
            >
              <p className="font-bold text-gray-800">{pageData.goldFleaTick}</p>
              <p className="text-lg font-semibold text-gray-900">$95.94/mo</p>
              <p className="text-sm text-gray-600">{pageData.goldFleaTickDescription}</p>
            </motion.div>
          </div>

          <div className="text-center mb-6">
            <p className="text-xl font-bold text-gray-800">
              {pageData.total} ${options[selectedOption].price}/mo
            </p>
          </div>

          <div className="flex items-start justify-center text-center text-xs text-gray-500 mb-6">
            <Lock className="h-4 w-4 mr-2 mt-0.5 text-yellow-600 flex-shrink-0" />
            <span>{pageData.redirectMessage}</span>
          </div>

          <Button
            onClick={handleCheckout}
            className="w-full bg-[#fbc02d] hover:bg-[#f9a825] text-black font-bold text-lg py-6"
          >
            {pageData.continueToCheckout}
          </Button>
        </motion.div>
      </div>

      <AnimatePresence>
        {isModalOpen &&
          (selectedOption === "gold" ? (
            <GoldUpsellModal onClose={closeModal} />
          ) : (
            <GoldFTUpsellModal onClose={closeModal} />
          ))}
      </AnimatePresence>
    </>
  );
};

export default GoldCheckout;

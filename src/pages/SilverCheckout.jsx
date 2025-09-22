import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Lock } from "lucide-react";
import SilverUpsellModal from "@/components/SilverUpsellModal";
import SilverFTUpsellModal from "@/components/SilverFTUpsellModal";

const SilverCheckout = () => {
  const [selectedOption, setSelectedOption] = useState("silver");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const options = {
    silver: {
      price: "59.99",
    },
    "silver-ft": {
      price: "75.94",
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
        <title>Silver Plan Checkout - Patriot Pest Control Co</title>
        <meta name="description" content="Finalize your Silver pest control plan selection." />
      </Helmet>
      <div className="min-h-screen bg-[#1e3a8a] flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          className="bg-white rounded-lg shadow-2xl p-8 max-w-md w-full"
        >
          <h1 className="text-2xl font-bold text-center text-gray-800 mb-2">
            You’ve picked the Silver Plan
          </h1>
          <p className="text-center text-gray-600 mb-6">Select your option below:</p>

          <div className="grid grid-cols-2 gap-4 mb-6">
            <motion.div
              whileTap={{ scale: 0.98 }}
              onClick={() => setSelectedOption("silver")}
              className={`cursor-pointer rounded-lg p-4 text-center border-2 transition-all ${
                selectedOption === "silver"
                  ? "bg-[#b0bec5] border-[#78909c]"
                  : "bg-white border-gray-300 hover:border-gray-400"
              }`}
            >
              <p className="font-bold text-gray-800">Silver Only</p>
              <p className="text-lg font-semibold text-gray-900">$59.99/mo</p>
              <p className="text-sm text-gray-600">Interior + Exterior Protection</p>
            </motion.div>
            <motion.div
              whileTap={{ scale: 0.98 }}
              onClick={() => setSelectedOption("silver-ft")}
              className={`cursor-pointer rounded-lg p-4 text-center border-2 transition-all ${
                selectedOption === "silver-ft"
                  ? "bg-[#b0bec5] border-[#78909c]"
                  : "bg-white border-gray-300 hover:border-gray-400"
              }`}
            >
              <p className="font-bold text-gray-800">Silver + Flea & Tick</p>
              <p className="text-lg font-semibold text-gray-900">$75.94/mo</p>
              <p className="text-sm text-gray-600">Includes Flea & Tick</p>
            </motion.div>
          </div>

          <div className="text-center mb-6">
            <p className="text-xl font-bold text-gray-800">
              Total: ${options[selectedOption].price}/mo
            </p>
          </div>

          <div className="flex items-start justify-center text-center text-xs text-gray-500 mb-6">
            <Lock className="h-4 w-4 mr-2 mt-0.5 text-yellow-600 flex-shrink-0" />
            <span>
              You will be redirected to a secure payment page, then to our booking calendar to
              schedule your service.
            </span>
          </div>

          <Button
            onClick={handleCheckout}
            className="w-full bg-[#90a4ae] hover:bg-[#78909c] text-white font-bold text-lg py-6"
          >
            Continue to Checkout
          </Button>
        </motion.div>
      </div>

      <AnimatePresence>
        {isModalOpen &&
          (selectedOption === "silver" ? (
            <SilverUpsellModal onClose={closeModal} />
          ) : (
            <SilverFTUpsellModal onClose={closeModal} />
          ))}
      </AnimatePresence>
    </>
  );
};

export default SilverCheckout;

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { X, Trophy, Rocket } from "lucide-react";

const BronzeFTUpsellModal = ({ onClose }) => {
  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 300, damping: 30 } },
    exit: { opacity: 0, scale: 0.9 },
  };

  const handleRedirect = (url) => {
    window.location.href = url;
  };

  return (
    <motion.div
      variants={backdropVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
      className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        variants={modalVariants}
        className="bg-white rounded-lg shadow-2xl max-w-md w-full p-6 text-center relative"
        onClick={(e) => e.stopPropagation()}
      >
        <Button variant="ghost" size="icon" className="absolute top-2 right-2" onClick={onClose}>
          <X className="h-5 w-5" />
        </Button>

        <Trophy className="h-8 w-8 mx-auto text-gray-400 mb-2" />
        <h2 className="text-2xl font-bold text-gray-800 mb-2">🥈 SILVER UPGRADE AVAILABLE!</h2>
        <p className="text-lg font-semibold text-gray-700">Just $10 more per month!</p>
        <p className="text-sm text-gray-500 mb-4">You're paying $55.94/mo...</p>

        <p className="text-gray-700 mb-2">
          Get SILVER with interior + exterior + flea & tick for just $75.94/mo
        </p>
        <p className="text-lg font-bold text-red-500 mb-4">
          Special: <span className="text-gray-400 line-through mr-2">$75.94/mo</span>
          $65.94/mo for first 2 months!
        </p>

        <div className="flex gap-4 mb-6">
          <Button
            onClick={() =>
              handleRedirect(
                "https://link.fastpaydirect.com/payment-link/687f87f2d6ab8060b9e6c2fd?couponCode=SILVERFT",
              )
            }
            className="flex-1 bg-blue-500 hover:bg-blue-600 text-white font-bold text-base py-4 whitespace-normal"
          >
            Yes! Upgrade to Silver + Flea & Tick
          </Button>
          <Button
            onClick={() =>
              handleRedirect("https://link.fastpaydirect.com/payment-link/687f842bddc6a6279ac56fc4")
            }
            variant="outline"
            className="flex-1 text-base py-4 whitespace-normal"
          >
            No Thanks
          </Button>
        </div>

        <div className="border-t pt-4">
          <Trophy className="h-8 w-8 mx-auto text-yellow-500 mb-2" />
          <h3 className="font-bold text-gray-800">BEST VALUE: PLATINUM!</h3>
          <p className="text-sm text-gray-600 mb-2">Maximum coverage with priority service!</p>
          <p className="text-lg font-bold text-red-500 mb-2">
            <span className="text-gray-400 line-through mr-2">$95.94/mo</span>
            $85.94/mo for 2 months
          </p>
          <Button
            onClick={() =>
              handleRedirect(
                "https://link.fastpaydirect.com/payment-link/687f88c0eba11042c68dc7c2?couponCode=PLATINUM",
              )
            }
            className="w-full bg-blue-600 hover:bg-blue-700 text-white"
          >
            <Rocket className="h-4 w-4 mr-2" />
            Upgrade to PLATINUM
            <Rocket className="h-4 w-4 ml-2" />
          </Button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default BronzeFTUpsellModal;

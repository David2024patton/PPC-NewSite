import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Lock } from "lucide-react";
import GoldUpsellModal from "@/components/GoldUpsellModal";
import GoldFTUpsellModal from "@/components/GoldFTUpsellModal";
import { useLanguage } from "../LanguageContext"; // Import the useLanguage hook

const GoldCheckout = () => {
  const [selectedOption, setSelectedOption] = useState("gold");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { language } = useLanguage(); // Get the current language

  const goldCheckoutPageData = {
    en: {
      title: "Gold Plan Checkout - Patriot Pest Control Co",
      description: "Finalize your Gold pest control plan selection.",
      header: "You’ve picked the Gold Plan",
      subheader: "Select your option below:",
      goldOnly: "Gold Only",
      goldOnlyDescription: "Priority Interior + Exterior",
      goldFleaTick: "Gold + Flea & Tick",
      goldFleaTickDescription: "Includes Flea & Tick",
      total: "Total:",
      redirectMessage:
        "You will be redirected to a secure payment page, then to our booking calendar to schedule your service.",
      continueToCheckout: "Continue to Checkout",
    },
    es: {
      title: "Pago del Plan Oro - Patriot Pest Control Co",
      description: "Finalice la selección de su plan de control de plagas Oro.",
      header: "Ha elegido el Plan Oro",
      subheader: "Seleccione su opción a continuación:",
      goldOnly: "Solo Oro",
      goldOnlyDescription: "Interior + Exterior Prioritario",
      goldFleaTick: "Oro + Pulgas y Garrapatas",
      goldFleaTickDescription: "Incluye Pulgas y Garrapatas",
      total: "Total:",
      redirectMessage:
        "Será redirigido a una página de pago segura, luego a nuestro calendario de reservas para programar su servicio.",
      continueToCheckout: "Continuar al Pago",
    },
    fr: {
      title: "Paiement du Plan Or - Patriot Pest Control Co",
      description: "Finalisez votre sélection de plan de lutte antiparasitaire Or.",
      header: "Vous avez choisi le Plan Or",
      subheader: "Sélectionnez votre option ci-dessous:",
      goldOnly: "Or Seulement",
      goldOnlyDescription: "Intérieur + Extérieur Prioritaire",
      goldFleaTick: "Or + Puces et Tiques",
      goldFleaTickDescription: "Comprend Puces et Tiques",
      total: "Total:",
      redirectMessage:
        "Vous serez redirigé vers une page de paiement sécurisée, puis vers notre calendrier de réservation pour planifier votre service.",
      continueToCheckout: "Continuer vers le Paiement",
    },
    de: {
      title: "Gold-Plan-Kasse - Patriot Pest Control Co",
      description: "Schließen Sie Ihre Auswahl des Gold-Schädlingsbekämpfungsplans ab.",
      header: "Sie haben den Gold-Plan gewählt",
      subheader: "Wählen Sie Ihre Option unten:",
      goldOnly: "Nur Gold",
      goldOnlyDescription: "Priorität Innen + Außen",
      goldFleaTick: "Gold + Floh & Zecke",
      goldFleaTickDescription: "Inklusive Floh & Zecke",
      total: "Gesamt:",
      redirectMessage:
        "Sie werden auf eine sichere Zahlungsseite weitergeleitet, dann zu unserem Buchungskalender, um Ihren Service zu planen.",
      continueToCheckout: "Weiter zur Kasse",
    },
    zh: {
      title: "黄金计划结账 - Patriot Pest Control Co",
      description: "完成您的黄金害虫防治计划选择。",
      header: "您已选择黄金计划",
      subheader: "请选择以下选项:",
      goldOnly: "仅黄金",
      goldOnlyDescription: "优先内部 + 外部",
      goldFleaTick: "黄金 + 跳蚤和蜱虫",
      goldFleaTickDescription: "包括跳蚤和蜱虫",
      total: "总计:",
      redirectMessage: "您将被重定向到一个安全的支付页面，然后到我们的预订日历安排您的服务。",
      continueToCheckout: "继续结账",
    },
  };

  const currentContent = goldCheckoutPageData[language] || goldCheckoutPageData.en;

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
        <title>{currentContent.title}</title>
        <meta name="description" content={currentContent.description} />
      </Helmet>
      <div className="min-h-screen bg-[#1e3a8a] flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          className="bg-white rounded-lg shadow-2xl p-8 max-w-md w-full"
        >
          <h1 className="text-2xl font-bold text-center text-gray-800 mb-2">
            {currentContent.header}
          </h1>
          <p className="text-center text-gray-600 mb-6">{currentContent.subheader}</p>

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
              <p className="font-bold text-gray-800">{currentContent.goldOnly}</p>
              <p className="text-lg font-semibold text-gray-900">$79.99/mo</p>
              <p className="text-sm text-gray-600">{currentContent.goldOnlyDescription}</p>
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
              <p className="font-bold text-gray-800">{currentContent.goldFleaTick}</p>
              <p className="text-lg font-semibold text-gray-900">$95.94/mo</p>
              <p className="text-sm text-gray-600">{currentContent.goldFleaTickDescription}</p>
            </motion.div>
          </div>

          <div className="text-center mb-6">
            <p className="text-xl font-bold text-gray-800">
              {currentContent.total} ${options[selectedOption].price}/mo
            </p>
          </div>

          <div className="flex items-start justify-center text-center text-xs text-gray-500 mb-6">
            <Lock className="h-4 w-4 mr-2 mt-0.5 text-yellow-600 flex-shrink-0" />
            <span>{currentContent.redirectMessage}</span>
          </div>

          <Button
            onClick={handleCheckout}
            className="w-full bg-[#fbc02d] hover:bg-[#f9a825] text-black font-bold text-lg py-6"
          >
            {currentContent.continueToCheckout}
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

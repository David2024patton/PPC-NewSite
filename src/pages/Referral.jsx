import React from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { Gift, Users, Award, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "../contexts/LanguageContext";

const Referral = () => {
  const { language } = useLanguage();

  const referralPageData = {
    en: {
      helmet: {
        title: "Referral Program - Patriot Pest Control Co",
        description:
          "Refer friends to Patriot Pest Control Co and earn free services! Get a free service call for every referral and a whole year free for four referrals.",
      },
      hero: {
        icon: "Gift",
        heading: "Get FREE Service with Referrals!",
        subheading: "Love our service? Share it with friends and get rewarded!",
      },
      rewards: {
        title1: "Referral Rewards",
        description1:
          "Get a FREE service call when your referral signs up for the same plan as yours or one level below. If they choose a plan two or more levels below (e.g., Platinum referring Bronze), enjoy 50% off your next service!",
        title2: "A YEAR of Service FREE!",
        description2:
          "Refer 4 friends who sign up, and your next full year of pest control is completely free!",
        note2: "(That's 4 quarterly services on us!)",
      },
      howItWorks: {
        heading: "How It Works",
        step1: "Tell your friends about us.",
        step2: "Make sure they mention your name when they sign up.",
        step3: "We'll credit your account with a free service!",
      },
      cta: {
        button: "Start Referring & Saving Today!",
        terms:
          "Terms and conditions apply. Referred customer must complete their first paid service.",
      },
    },
    es: {
      helmet: {
        title: "Programa de Referidos - Patriot Pest Control Co",
        description:
          "¡Recomienda amigos a Patriot Pest Control Co y gana servicios gratis! Obtén una llamada de servicio gratuita por cada referido y un año entero gratis por cuatro referidos.",
      },
      hero: {
        icon: "Gift",
        heading: "¡Obtén Servicio GRATIS con Referidos!",
        subheading: "¿Te encanta nuestro servicio? ¡Compártelo con amigos y sé recompensado!",
      },
      rewards: {
        title1: "Recompensas por Referidos",
        description1:
          "Obtén una llamada de servicio GRATUITA cuando tu referido se inscriba en el mismo plan que el tuyo o uno de un nivel inferior. Si eligen un plan dos o más niveles por debajo (por ejemplo, Platino refiriendo Bronce), ¡disfruta de un 50% de descuento en tu próximo servicio!",
        title2: "¡UN AÑO de Servicio GRATIS!",
        description2:
          "¡Refiere a 4 amigos que se inscriban, y tu próximo año completo de control de plagas será completamente gratis!",
        note2: "(¡Eso es 4 servicios trimestrales por nuestra cuenta!)",
      },
      howItWorks: {
        heading: "Cómo Funciona",
        step1: "Háblales a tus amigos sobre nosotros.",
        step2: "Asegúrate de que mencionen tu nombre cuando se inscriban.",
        step3: "¡Acreditaremos tu cuenta con un servicio gratis!",
      },
      cta: {
        button: "¡Empieza a Referir y Ahorrar Hoy!",
        terms:
          "Aplican términos y condiciones. El cliente referido debe completar su primer servicio pagado.",
      },
    },
    fr: {
      helmet: {
        title: "Programme de Parrainage - Patriot Pest Control Co",
        description:
          "Parrainez des amis à Patriot Pest Control Co et gagnez des services gratuits ! Obtenez un appel de service gratuit pour chaque parrainage et une année entière gratuite pour quatre parrainages.",
      },
      hero: {
        icon: "Gift",
        heading: "Obtenez un Service GRATUIT avec des Parrainages !",
        subheading: "Vous aimez notre service ? Partagez-le avec vos amis et soyez récompensé !",
      },
      rewards: {
        title1: "Récompenses de Parrainage",
        description1:
          "Obtenez un appel de service GRATUIT lorsque votre parrainage s'inscrit au même plan que le vôtre ou un niveau inférieur. S'ils choisissent un plan deux niveaux ou plus en dessous (par exemple, Platine parrainant Bronze), profitez de 50 % de réduction sur votre prochain service !",
        title2: "UNE ANNÉE de Service GRATUITE !",
        description2:
          "Parrainez 4 amis qui s'inscrivent, et votre prochaine année complète de lutte antiparasitaire est entièrement gratuite !",
        note2: "(C'est 4 services trimestriels à nos frais !)",
      },
      howItWorks: {
        heading: "Comment ça Marche",
        step1: "Parlez de nous à vos amis.",
        step2: "Assurez-vous qu'ils mentionnent votre nom lors de leur inscription.",
        step3: "Nous créditerons votre compte avec un service gratuit !",
      },
      cta: {
        button: "Commencez à Parrainer et Économiser Aujourd'hui !",
        terms:
          "Conditions générales applicables. Le client parrainé doit effectuer son premier service payant.",
      },
    },
    de: {
      helmet: {
        title: "Empfehlungsprogramm - Patriot Pest Control Co",
        description:
          "Empfehlen Sie Freunde an Patriot Pest Control Co und verdienen Sie kostenlose Dienstleistungen! Erhalten Sie einen kostenlosen Serviceanruf für jede Empfehlung und ein ganzes Jahr kostenlos für vier Empfehlungen.",
      },
      hero: {
        icon: "Gift",
        heading: "Erhalten Sie KOSTENLOSEN Service mit Empfehlungen!",
        subheading:
          "Lieben Sie unseren Service? Teilen Sie ihn mit Freunden und werden Sie belohnt!",
      },
      rewards: {
        title1: "Empfehlungsprämien",
        description1:
          "Erhalten Sie einen KOSTENLOSEN Serviceanruf, wenn Ihre Empfehlung sich für denselben Plan wie Sie oder einen Level darunter anmeldet. Wenn sie einen Plan zwei oder mehr Level darunter wählen (z.B. Platin empfiehlt Bronze), erhalten Sie 50% Rabatt auf Ihren nächsten Service!",
        title2: "EIN JAHR Service KOSTENLOS!",
        description2:
          "Empfehlen Sie 4 Freunde, die sich anmelden, und Ihr nächstes ganzes Jahr Schädlingsbekämpfung ist komplett kostenlos!",
        note2: "(Das sind 4 vierteljährliche Services auf uns!)",
      },
      howItWorks: {
        heading: "So funktioniert's",
        step1: "Erzählen Sie Ihren Freunden von uns.",
        step2: "Stellen Sie sicher, dass sie Ihren Namen bei der Anmeldung erwähnen.",
        step3: "Wir schreiben Ihrem Konto einen kostenlosen Service gut!",
      },
      cta: {
        button: "Jetzt Empfehlen & Sparen!",
        terms:
          "Es gelten die Allgemeinen Geschäftsbedingungen. Der geworbene Kunde muss seinen ersten bezahlten Service abschließen.",
      },
    },
    zh: {
      helmet: {
        title: "推荐计划 - Patriot Pest Control Co",
        description:
          "推荐朋友给 Patriot Pest Control Co，赚取免费服务！每次推荐可获得一次免费服务，推荐四位朋友可获得一整年免费服务。",
      },
      hero: {
        icon: "Gift",
        heading: "推荐朋友，获得免费服务！",
        subheading: "喜欢我们的服务？分享给朋友，获得奖励！",
      },
      rewards: {
        title1: "推荐奖励",
        description1:
          "当您的推荐人注册与您相同或低一个级别的计划时，您将获得一次免费服务。如果他们选择的计划比您的低两个或更多级别（例如，白金推荐青铜），您的下一次服务将享受50%的折扣！",
        title2: "一年免费服务！",
        description2: "推荐4位朋友注册，您下一整年的害虫防治服务将完全免费！",
        note2: "（即我们为您提供4次季度服务！）",
      },
      howItWorks: {
        heading: "工作原理",
        step1: "告诉您的朋友关于我们。",
        step2: "确保他们在注册时提及您的名字。",
        step3: "我们将为您的账户提供免费服务！",
      },
      cta: {
        button: "立即开始推荐并节省！",
        terms: "条款和条件适用。被推荐客户必须完成首次付费服务。",
      },
    },
  };

  const currentContent = referralPageData[language] || referralPageData.en;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <>
      <Helmet>
        <title>{currentContent.helmet.title}</title>
        <meta name="description" content={currentContent.helmet.description} />
      </Helmet>
      <div className="bg-gray-50 py-12 sm:py-20">
        <motion.div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants}>
            {currentContent.hero.icon === "Gift" && (
              <Gift className="mx-auto h-16 w-16 text-blue-600" />
            )}
            <h1 className="mt-4 text-4xl font-extrabold text-gray-900 sm:text-5xl">
              {currentContent.hero.heading}
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              {currentContent.hero.subheading}
            </p>
          </motion.div>

          <motion.div className="mt-12 grid gap-8 md:grid-cols-2" variants={containerVariants}>
            <motion.div
              className="bg-white rounded-2xl shadow-xl p-8 flex flex-col items-center"
              variants={itemVariants}
            >
              <Users className="h-12 w-12 text-green-500" />
              <h2 className="mt-4 text-2xl font-bold text-gray-900">
                {currentContent.rewards.title1}
              </h2>
              <p className="mt-2 text-lg text-gray-600">{currentContent.rewards.description1}</p>
            </motion.div>

            <motion.div
              className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-2xl shadow-xl p-8 flex flex-col items-center"
              variants={itemVariants}
            >
              <Award className="h-12 w-12 text-yellow-300" />
              <h2 className="mt-4 text-2xl font-bold">{currentContent.rewards.title2}</h2>
              <p className="mt-2 text-lg opacity-90">{currentContent.rewards.description2}</p>
              <p className="mt-2 font-semibold text-yellow-300">{currentContent.rewards.note2}</p>
            </motion.div>
          </motion.div>

          <motion.div className="mt-12" variants={itemVariants}>
            <h2 className="text-3xl font-bold text-gray-900">
              {currentContent.howItWorks.heading}
            </h2>
            <div className="mt-8 max-w-4xl mx-auto grid gap-8 sm:grid-cols-3">
              <div className="flex flex-col items-center">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 text-blue-600 font-bold text-xl">
                  1
                </div>
                <p className="mt-4 text-lg font-medium text-gray-700">
                  {currentContent.howItWorks.step1}
                </p>
              </div>
              <div className="flex flex-col items-center">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 text-blue-600 font-bold text-xl">
                  2
                </div>
                <p className="mt-4 text-lg font-medium text-gray-700">
                  {currentContent.howItWorks.step2}
                </p>
              </div>
              <div className="flex flex-col items-center">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 text-blue-600 font-bold text-xl">
                  3
                </div>
                <p className="mt-4 text-lg font-medium text-gray-700">
                  {currentContent.howItWorks.step3}
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div className="mt-16" variants={itemVariants}>
            <Button size="lg" className="bg-green-600 hover:bg-green-700 text-lg">
              <Star className="mr-2 h-5 w-5" />
              {currentContent.cta.button}
            </Button>
            <p className="mt-4 text-sm text-gray-500">{currentContent.cta.terms}</p>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};

export default Referral;

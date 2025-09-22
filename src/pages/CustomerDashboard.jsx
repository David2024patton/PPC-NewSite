import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/SupabaseAuthContext";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/lib/customSupabaseClient";
import { useLanguage } from "../LanguageContext"; // Import the useLanguage hook
import { CreditCard, Gift, LogOut, Shield, User, Calendar, DollarSign, Users } from "lucide-react";

const CustomerDashboard = () => {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState("overview");
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  const { language } = useLanguage(); // Get the current language

  const customerDashboardPageData = {
    en: {
      title: "Customer Dashboard - Patriot Pest Control Co",
      description: "Manage your pest control services, payments, and referrals.",
      welcome: "Welcome,",
      signOut: "Sign Out",
      planOverview: "Plan Overview",
      referrals: "Referrals",
      payments: "Payments",
      currentPlan: "Current Plan",
      nextService: "Next Service",
      monthlyRate: "Monthly Rate",
      planType: "Plan Type",
      yourReferrals: "Your Referrals",
      activeReferrals: "Active Referrals",
      outOfNeeded: "Out of 4 needed for free year",
      rewardsEarned: "Rewards Earned",
      inServiceCredits: "In service credits",
      inviteFriends: "Invite Friends",
      paymentInformation: "Payment Information",
      nextPayment: "Next Payment",
      due: "Due",
      payNow: "Pay Now",
      paymentHistory: "Payment History",
      paid: "Paid",
      errorFetchingProfile: "Error fetching profile",
      comingSoon: "Coming Soon",
      onlinePaymentSoon: "Online payment feature will be available soon!",
    },
    es: {
      title: "Panel de Cliente - Patriot Pest Control Co",
      description: "Administre sus servicios de control de plagas, pagos y referencias.",
      welcome: "Bienvenido,",
      signOut: "Cerrar Sesión",
      planOverview: "Resumen del Plan",
      referrals: "Referencias",
      payments: "Pagos",
      currentPlan: "Plan Actual",
      nextService: "Próximo Servicio",
      monthlyRate: "Tarifa Mensual",
      planType: "Tipo de Plan",
      yourReferrals: "Sus Referencias",
      activeReferrals: "Referencias Activas",
      outOfNeeded: "De 4 necesarias para un año gratis",
      rewardsEarned: "Recompensas Ganadas",
      inServiceCredits: "En créditos de servicio",
      inviteFriends: "Invitar Amigos",
      paymentInformation: "Información de Pago",
      nextPayment: "Próximo Pago",
      due: "Vence",
      payNow: "Pagar Ahora",
      paymentHistory: "Historial de Pagos",
      paid: "Pagado",
      errorFetchingProfile: "Error al obtener el perfil",
      comingSoon: "Próximamente",
      onlinePaymentSoon: "¡La función de pago en línea estará disponible pronto!",
    },
    fr: {
      title: "Tableau de Bord Client - Patriot Pest Control Co",
      description: "Gérez vos services de lutte antiparasitaire, paiements et parrainages.",
      welcome: "Bienvenue,",
      signOut: "Se Déconnecter",
      planOverview: "Aperçu du Plan",
      referrals: "Parrainages",
      payments: "Paiements",
      currentPlan: "Plan Actuel",
      nextService: "Prochain Service",
      monthlyRate: "Tarif Mensuel",
      planType: "Type de Plan",
      yourReferrals: "Vos Parrainages",
      activeReferrals: "Parrainages Actifs",
      outOfNeeded: "Sur 4 nécessaires pour une année gratuite",
      rewardsEarned: "Récompenses Gagnées",
      inServiceCredits: "En crédits de service",
      inviteFriends: "Inviter des Amis",
      paymentInformation: "Informations de Paiement",
      nextPayment: "Prochain Paiement",
      due: "Dû le",
      payNow: "Payer Maintenant",
      paymentHistory: "Historique des Paiements",
      paid: "Payé",
      errorFetchingProfile: "Erreur lors de la récupération du profil",
      comingSoon: "Bientôt disponible",
      onlinePaymentSoon: "La fonction de paiement en ligne sera bientôt disponible !",
    },
    de: {
      title: "Kunden-Dashboard - Patriot Pest Control Co",
      description: "Verwalten Sie Ihre Schädlingsbekämpfungsdienste, Zahlungen und Empfehlungen.",
      welcome: "Willkommen,",
      signOut: "Abmelden",
      planOverview: "Planübersicht",
      referrals: "Empfehlungen",
      payments: "Zahlungen",
      currentPlan: "Aktueller Plan",
      nextService: "Nächster Service",
      monthlyRate: "Monatlicher Preis",
      planType: "Plantyp",
      yourReferrals: "Ihre Empfehlungen",
      activeReferrals: "Aktive Empfehlungen",
      outOfNeeded: "Von 4 für ein kostenloses Jahr benötigt",
      rewardsEarned: "Verdiente Prämien",
      inServiceCredits: "In Service-Guthaben",
      inviteFriends: "Freunde einladen",
      paymentInformation: "Zahlungsinformationen",
      nextPayment: "Nächste Zahlung",
      due: "Fällig am",
      payNow: "Jetzt bezahlen",
      paymentHistory: "Zahlungsverlauf",
      paid: "Bezahlt",
      errorFetchingProfile: "Fehler beim Abrufen des Profils",
      comingSoon: "Demnächst",
      onlinePaymentSoon: "Die Online-Zahlungsfunktion wird in Kürze verfügbar sein!",
    },
    zh: {
      title: "客户仪表板 - Patriot Pest Control Co",
      description: "管理您的害虫防治服务、付款和推荐。",
      welcome: "欢迎，",
      signOut: "退出",
      planOverview: "计划概览",
      referrals: "推荐",
      payments: "付款",
      currentPlan: "当前计划",
      nextService: "下次服务",
      monthlyRate: "月费",
      planType: "计划类型",
      yourReferrals: "您的推荐",
      activeReferrals: "活跃推荐",
      outOfNeeded: "免费一年需要4个",
      rewardsEarned: "赚取奖励",
      inServiceCredits: "服务积分",
      inviteFriends: "邀请朋友",
      paymentInformation: "付款信息",
      nextPayment: "下次付款",
      due: "到期",
      payNow: "立即支付",
      paymentHistory: "付款历史",
      paid: "已支付",
      errorFetchingProfile: "获取个人资料出错",
      comingSoon: "即将推出",
      onlinePaymentSoon: "在线支付功能即将推出！",
    },
  };

  const currentContent = customerDashboardPageData[language] || customerDashboardPageData.en;

  useEffect(() => {
    const getProfile = async () => {
      try {
        const { data, error } = await supabase
          .from("profiles")
          .select("*")
          .eq("id", user.id)
          .single();

        if (error) throw error;
        setProfile(data);
      } catch (error) {
        toast({
          variant: "destructive",
          title: currentContent.errorFetchingProfile,
          description: error.message,
        });
      } finally {
        setLoading(false);
      }
    };

    if (user) getProfile();
  }, [user, toast, currentContent.errorFetchingProfile]);

  const handleSignOut = async () => {
    const { error } = await signOut();
    if (!error) {
      navigate("/customer/login");
    }
  };

  const handlePayment = () => {
    // TODO: Implement payment processing
    toast({
      title: currentContent.comingSoon,
      description: currentContent.onlinePaymentSoon,
    });
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{currentContent.title}</title>
        <meta name="description" content={currentContent.description} />
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="bg-white shadow rounded-lg mb-6">
            <div className="px-4 py-5 sm:p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <User className="h-12 w-12 text-blue-600" />
                  <div className="ml-4">
                    <h1 className="text-2xl font-bold text-gray-900">
                      {currentContent.welcome} {profile?.full_name}
                    </h1>
                    <p className="text-gray-500">{user?.email}</p>
                  </div>
                </div>
                <Button onClick={handleSignOut} variant="outline" className="flex items-center">
                  <LogOut className="h-4 w-4 mr-2" />
                  {currentContent.signOut}
                </Button>
              </div>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="bg-white shadow rounded-lg mb-6">
            <nav className="flex divide-x divide-gray-200">
              <button
                onClick={() => setActiveTab("overview")}
                className={`flex-1 px-4 py-4 text-center ${activeTab === "overview" ? "text-blue-600 bg-blue-50" : "text-gray-500 hover:text-gray-700"}`}
              >
                <Shield className="h-5 w-5 mx-auto mb-2" />
                {currentContent.planOverview}
              </button>
              <button
                onClick={() => setActiveTab("referrals")}
                className={`flex-1 px-4 py-4 text-center ${activeTab === "referrals" ? "text-blue-600 bg-blue-50" : "text-gray-500 hover:text-gray-700"}`}
              >
                <Gift className="h-5 w-5 mx-auto mb-2" />
                {currentContent.referrals}
              </button>
              <button
                onClick={() => setActiveTab("payments")}
                className={`flex-1 px-4 py-4 text-center ${activeTab === "payments" ? "text-blue-600 bg-blue-50" : "text-gray-500 hover:text-gray-700"}`}
              >
                <CreditCard className="h-5 w-5 mx-auto mb-2" />
                {currentContent.payments}
              </button>
            </nav>
          </div>

          {/* Content Sections */}
          <div className="bg-white shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              {/* Overview Tab */}
              {activeTab === "overview" && (
                <div className="space-y-6">
                  <div className="bg-blue-50 rounded-lg p-6">
                    <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                      <Shield className="h-6 w-6 text-blue-600 mr-2" />
                      {currentContent.currentPlan}
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="bg-white p-4 rounded-lg shadow">
                        <Calendar className="h-8 w-8 text-blue-600 mb-2" />
                        <h3 className="font-medium">{currentContent.nextService}</h3>
                        <p className="text-gray-500">March 15, 2024</p>
                      </div>
                      <div className="bg-white p-4 rounded-lg shadow">
                        <DollarSign className="h-8 w-8 text-green-600 mb-2" />
                        <h3 className="font-medium">{currentContent.monthlyRate}</h3>
                        <p className="text-gray-500">$49.99</p>
                      </div>
                      <div className="bg-white p-4 rounded-lg shadow">
                        <Shield className="h-8 w-8 text-purple-600 mb-2" />
                        <h3 className="font-medium">{currentContent.planType}</h3>
                        <p className="text-gray-500">Gold Package</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Referrals Tab */}
              {activeTab === "referrals" && (
                <div className="space-y-6">
                  <div className="bg-green-50 rounded-lg p-6">
                    <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                      <Users className="h-6 w-6 text-green-600 mr-2" />
                      {currentContent.yourReferrals}
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-white p-4 rounded-lg shadow">
                        <h3 className="font-medium mb-2">{currentContent.activeReferrals}</h3>
                        <p className="text-3xl font-bold text-green-600">2</p>
                        <p className="text-sm text-gray-500 mt-2">{currentContent.outOfNeeded}</p>
                      </div>
                      <div className="bg-white p-4 rounded-lg shadow">
                        <h3 className="font-medium mb-2">{currentContent.rewardsEarned}</h3>
                        <p className="text-3xl font-bold text-green-600">$100</p>
                        <p className="text-sm text-gray-500 mt-2">
                          {currentContent.inServiceCredits}
                        </p>
                      </div>
                    </div>
                    <Button className="mt-6 w-full bg-green-600 hover:bg-green-700">
                      <Gift className="h-5 w-5 mr-2" />
                      {currentContent.inviteFriends}
                    </Button>
                  </div>
                </div>
              )}

              {/* Payments Tab */}
              {activeTab === "payments" && (
                <div className="space-y-6">
                  <div className="bg-purple-50 rounded-lg p-6">
                    <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                      <CreditCard className="h-6 w-6 text-purple-600 mr-2" />
                      {currentContent.paymentInformation}
                    </h2>
                    <div className="bg-white p-4 rounded-lg shadow mb-6">
                      <h3 className="font-medium mb-4">{currentContent.nextPayment}</h3>
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="text-2xl font-bold text-gray-900">$49.99</p>
                          <p className="text-sm text-gray-500">
                            {currentContent.due} March 1, 2024
                          </p>
                        </div>
                        <Button
                          onClick={handlePayment}
                          className="bg-purple-600 hover:bg-purple-700"
                        >
                          {currentContent.payNow}
                        </Button>
                      </div>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow">
                      <h3 className="font-medium mb-4">{currentContent.paymentHistory}</h3>
                      <div className="space-y-4">
                        <div className="flex justify-between items-center text-sm">
                          <span className="text-gray-500">Feb 1, 2024</span>
                          <span className="font-medium">$49.99</span>
                          <span className="text-green-600">{currentContent.paid}</span>
                        </div>
                        <div className="flex justify-between items-center text-sm">
                          <span className="text-gray-500">Jan 1, 2024</span>
                          <span className="font-medium">$49.99</span>
                          <span className="text-green-600">{currentContent.paid}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomerDashboard;

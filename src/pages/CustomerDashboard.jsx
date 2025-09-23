import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/SupabaseAuthContext";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/lib/customSupabaseClient";
import { CreditCard, Gift, LogOut, Shield, User, Calendar, DollarSign, Users } from "lucide-react";

const CustomerDashboard = () => {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState("overview");
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  // Hardcoded English strings for page content
  const pageData = {
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
  };

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
          title: pageData.errorFetchingProfile,
          description: error.message,
        });
      } finally {
        setLoading(false);
      }
    };

    if (user) getProfile();
  }, [user, toast, pageData.errorFetchingProfile]);

  const handleSignOut = async () => {
    const { error } = await signOut();
    if (!error) {
      navigate("/customer/login");
    }
  };

  const handlePayment = () => {
    // TODO: Implement payment processing
    toast({
      title: pageData.comingSoon,
      description: pageData.onlinePaymentSoon,
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
        <title>{pageData.title}</title>
        <meta name="description" content={pageData.description} />
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
                      {pageData.welcome} {profile?.full_name}
                    </h1>
                    <p className="text-gray-500">{user?.email}</p>
                  </div>
                </div>
                <Button onClick={handleSignOut} variant="outline" className="flex items-center">
                  <LogOut className="h-4 w-4 mr-2" />
                  {pageData.signOut}
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
                {pageData.planOverview}
              </button>
              <button
                onClick={() => setActiveTab("referrals")}
                className={`flex-1 px-4 py-4 text-center ${activeTab === "referrals" ? "text-blue-600 bg-blue-50" : "text-gray-500 hover:text-gray-700"}`}
              >
                <Gift className="h-5 w-5 mx-auto mb-2" />
                {pageData.referrals}
              </button>
              <button
                onClick={() => setActiveTab("payments")}
                className={`flex-1 px-4 py-4 text-center ${activeTab === "payments" ? "text-blue-600 bg-blue-50" : "text-gray-500 hover:text-gray-700"}`}
              >
                <CreditCard className="h-5 w-5 mx-auto mb-2" />
                {pageData.payments}
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
                      {pageData.currentPlan}
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="bg-white p-4 rounded-lg shadow">
                        <Calendar className="h-8 w-8 text-blue-600 mb-2" />
                        <h3 className="font-medium">{pageData.nextService}</h3>
                        <p className="text-gray-500">March 15, 2024</p>
                      </div>
                      <div className="bg-white p-4 rounded-lg shadow">
                        <DollarSign className="h-8 w-8 text-green-600 mb-2" />
                        <h3 className="font-medium">{pageData.monthlyRate}</h3>
                        <p className="text-gray-500">$49.99</p>
                      </div>
                      <div className="bg-white p-4 rounded-lg shadow">
                        <Shield className="h-8 w-8 text-purple-600 mb-2" />
                        <h3 className="font-medium">{pageData.planType}</h3>
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
                      {pageData.yourReferrals}
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-white p-4 rounded-lg shadow">
                        <h3 className="font-medium mb-2">{pageData.activeReferrals}</h3>
                        <p className="text-3xl font-bold text-green-600">2</p>
                        <p className="text-sm text-gray-500 mt-2">{pageData.outOfNeeded}</p>
                      </div>
                      <div className="bg-white p-4 rounded-lg shadow">
                        <h3 className="font-medium mb-2">{pageData.rewardsEarned}</h3>
                        <p className="text-3xl font-bold text-green-600">$100</p>
                        <p className="text-sm text-gray-500 mt-2">
                          {pageData.inServiceCredits}
                        </p>
                      </div>
                    </div>
                    <Button className="mt-6 w-full bg-green-600 hover:bg-green-700">
                      <Gift className="h-5 w-5 mr-2" />
                      {pageData.inviteFriends}
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
                      {pageData.paymentInformation}
                    </h2>
                    <div className="bg-white p-4 rounded-lg shadow mb-6">
                      <h3 className="font-medium mb-4">{pageData.nextPayment}</h3>
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="text-2xl font-bold text-gray-900">$49.99</p>
                          <p className="text-sm text-gray-500">
                            {pageData.due} March 1, 2024
                          </p>
                        </div>
                        <Button
                          onClick={handlePayment}
                          className="bg-purple-600 hover:bg-purple-700"
                        >
                          {pageData.payNow}
                        </Button>
                      </div>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow">
                      <h3 className="font-medium mb-4">{pageData.paymentHistory}</h3>
                      <div className="space-y-4">
                        <div className="flex justify-between items-center text-sm">
                          <span className="text-gray-500">Feb 1, 2024</span>
                          <span className="font-medium">$49.99</span>
                          <span className="text-green-600">{pageData.paid}</span>
                        </div>
                        <div className="flex justify-between items-center text-sm">
                          <span className="text-gray-500">Jan 1, 2024</span>
                          <span className="font-medium">$49.99</span>
                          <span className="text-green-600">{pageData.paid}</span>
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
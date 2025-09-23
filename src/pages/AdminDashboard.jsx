import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { Settings, FileText, BarChart3, LogOut, Plus, Edit, Trash2, Save, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/SupabaseAuthContext";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/lib/customSupabaseClient";

const AdminDashboard = () => {
  const { session, signOut } = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);
  const [services, setServices] = useState([]);
  const [blogPosts, setBlogPosts] = useState([]);
  const [faqs, setFaqs] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [contactMessages, setContactMessages] = useState([]);
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);
  const { language } = useLanguage();

  const pageData = {
    dashboardTitle: "Admin Dashboard",
    welcomeMessage: "Welcome, Admin!",
    overviewSection: {
      title: "Overview",
      totalCustomers: "Total Customers",
      activeServices: "Active Services",
      pendingAppointments: "Pending Appointments",
      completedJobs: "Completed Jobs",
    },
    quickActionsSection: {
      title: "Quick Actions",
      addCustomer: "Add New Customer",
      scheduleAppointment: "Schedule New Appointment",
      viewReports: "View Reports",
      manageServices: "Manage Services",
    },
    recentActivitySection: {
      title: "Recent Activity",
      noRecentActivity: "No recent activity.",
      viewAll: "View All Activity",
    },
    customerManagementSection: {
      title: "Customer Management",
      searchPlaceholder: "Search customers...",
      name: "Name",
      email: "Email",
      phone: "Phone",
      status: "Status",
      actions: "Actions",
      viewDetails: "View Details",
      edit: "Edit",
      delete: "Delete",
      noCustomersFound: "No customers found.",
    },
    serviceManagementSection: {
      title: "Service Management",
      addService: "Add New Service",
      serviceName: "Service Name",
      description: "Description",
      price: "Price",
      duration: "Duration",
      noServicesFound: "No services found.",
    },
    appointmentManagementSection: {
      title: "Appointment Management",
      addAppointment: "Schedule New Appointment",
      customer: "Customer",
      service: "Service",
      date: "Date",
      time: "Time",
      noAppointmentsFound: "No appointments found.",
    },
    settingsSection: {
      title: "Settings",
      profile: "Profile Settings",
      notifications: "Notification Preferences",
      security: "Security Settings",
    },
    logout: "Logout",
    confirmLogout: "Are you sure you want to log out?",
    cancel: "Cancel",
    confirm: "Confirm",
    toast: {
      logoutSuccess: "Logged out successfully!",
      logoutError: "Error logging out:",
    },
  };

  useEffect(() => {
    if (!session) {
      navigate("/admin/login");
    }
  }, [session, navigate]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const [usersRes, servicesRes, blogPostsRes, faqsRes, testimonialsRes, contactMessagesRes] = await Promise.all([
          supabase.from("users").select("*"),
          supabase.from("services").select("*"),
          supabase.from("blog_posts").select("*"),
          supabase.from("faqs").select("*"),
          supabase.from("testimonials").select("*"),
          supabase.from("contact_messages").select("*"),
        ]);

        setUsers(usersRes.data || []);
        setServices(servicesRes.data || []);
        setBlogPosts(blogPostsRes.data || []);
        setFaqs(faqsRes.data || []);
        setTestimonials(testimonialsRes.data || []);
        setContactMessages(contactMessagesRes.data || []);
      } catch (error) {
        toast({ title: "Error", description: pageData.errorFetchingData, variant: "destructive" });
        console.error("Error fetching dashboard data:", error);
      } finally {
        setLoading(false);
      }
    };

    if (session) {
      fetchData();
    }
  }, [session, pageData.errorFetchingData]);

  const handleLogout = async () => {
    try {
      const { error } = await signOut();
      if (error) {
        toast({ title: "Error", description: `${pageData.errorLoggingOut} ${error.message}`, variant: "destructive" });
      } else {
        navigate("/admin/login");
      }
    } catch (error) {
      toast({ title: "Error", description: `${pageData.errorLoggingOut} ${error.message}`, variant: "destructive" });
      console.error("Error logging out:", error);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>{pageData.loadingMessage}</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <Helmet>
        <title>{pageData.dashboardTitle} - Patriot Pest Control Co</title>
      </Helmet>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">{pageData.dashboardTitle}</h1>
        <div className="flex items-center space-x-4">
          {session && session.user && (
            <span className="text-gray-700 text-lg">
              {pageData.welcomeMessage(session.user.email)}
            </span>
          )}
          <Button onClick={() => setShowLogoutConfirm(true)} variant="destructive">
            {pageData.logoutButton}
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Users Card */}
        <Card className="shadow-lg">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{pageData.usersCardTitle}</CardTitle>
            <Users className="h-4 w-4 text-gray-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{users.length}</div>
            <p className="text-xs text-gray-500">Total registered users</p>
            <Button variant="link" className="p-0 mt-2">
              <Link to="/admin/users">{pageData.viewAll}</Link>
            </Button>
          </CardContent>
        </Card>

        {/* Services Card */}
        <Card className="shadow-lg">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{pageData.servicesCardTitle}</CardTitle>
            <Wrench className="h-4 w-4 text-gray-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{services.length}</div>
            <p className="text-xs text-gray-500">Total services offered</p>
            <div className="flex justify-between items-center mt-2">
              <Button variant="link" className="p-0">
                <Link to="/admin/services">{pageData.viewAll}</Link>
              </Button>
              <Button size="sm" className="ml-auto">
                <Link to="/admin/services/new">{pageData.addService}</Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Blog Posts Card */}
        <Card className="shadow-lg">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{pageData.blogPostsCardTitle}</CardTitle>
            <Newspaper className="h-4 w-4 text-gray-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{blogPosts.length}</div>
            <p className="text-xs text-gray-500">Total blog posts</p>
            <div className="flex justify-between items-center mt-2">
              <Button variant="link" className="p-0">
                <Link to="/admin/blog-posts">{pageData.viewAll}</Link>
              </Button>
              <Button size="sm" className="ml-auto">
                <Link to="/admin/blog-posts/new">{pageData.addBlogPost}</Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* FAQs Card */}
        <Card className="shadow-lg">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{pageData.faqsCardTitle}</CardTitle>
            <HelpCircle className="h-4 w-4 text-gray-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{faqs.length}</div>
            <p className="text-xs text-gray-500">Total FAQs</p>
            <div className="flex justify-between items-center mt-2">
              <Button variant="link" className="p-0">
                <Link to="/admin/faqs">{pageData.viewAll}</Link>
              </Button>
              <Button size="sm" className="ml-auto">
                <Link to="/admin/faqs/new">{pageData.addFaq}</Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Testimonials Card */}
        <Card className="shadow-lg">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{pageData.testimonialsCardTitle}</CardTitle>
            <MessageSquare className="h-4 w-4 text-gray-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{testimonials.length}</div>
            <p className="text-xs text-gray-500">Total testimonials</p>
            <div className="flex justify-between items-center mt-2">
              <Button variant="link" className="p-0">
                <Link to="/admin/testimonials">{pageData.viewAll}</Link>
              </Button>
              <Button size="sm" className="ml-auto">
                <Link to="/admin/testimonials/new">{pageData.addTestimonial}</Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Contact Messages Card */}
        <Card className="shadow-lg">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{pageData.contactMessagesCardTitle}</CardTitle>
            <Mail className="h-4 w-4 text-gray-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{contactMessages.length}</div>
            <p className="text-xs text-gray-500">Total contact messages</p>
            <Button variant="link" className="p-0 mt-2">
              <Link to="/admin/contact-messages">{pageData.viewAll}</Link>
            </Button>
          </CardContent>
        </Card>
      </div>

      <AlertDialog open={showLogoutConfirm} onOpenChange={setShowLogoutConfirm}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>{pageData.logoutConfirmTitle}</AlertDialogTitle>
            <AlertDialogDescription>{pageData.logoutConfirmDescription}</AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>{pageData.cancelButton}</AlertDialogCancel>
            <AlertDialogAction onClick={handleLogout}>{pageData.confirmButton}</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default AdminDashboard;

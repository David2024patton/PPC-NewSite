import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { Lock, User, Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/SupabaseAuthContext";
import { useToast } from "@/components/ui/use-toast";
import { useLanguage } from "@/contexts/LanguageContext";

const AdminLogin = () => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const { signIn } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  const { language } = useLanguage();

  const adminLoginPageData = {
    en: {
      helmet: {
        title: "Admin Login - Patriot Pest Control Co",
        description: "Admin login portal for Patriot Pest Control Co website management.",
        robots: "noindex, nofollow",
      },
      heading: "Admin Login",
      subheading: "Sign in to access the admin dashboard",
      emailLabel: "Email",
      emailPlaceholder: "Enter your email",
      passwordLabel: "Password",
      passwordPlaceholder: "Enter your password",
      signInButton: "Sign In",
      signingInButton: "Signing in...",
      loginSuccessTitle: "Login Successful",
      loginSuccessDescription: "Welcome to the admin dashboard!",
    },
    es: {
      helmet: {
        title: "Inicio de Sesión de Administrador - Patriot Pest Control Co",
        description:
          "Portal de inicio de sesión de administrador para la gestión del sitio web de Patriot Pest Control Co.",
        robots: "noindex, nofollow",
      },
      heading: "Inicio de Sesión de Administrador",
      subheading: "Inicia sesión para acceder al panel de administración",
      emailLabel: "Correo Electrónico",
      emailPlaceholder: "Introduce tu correo electrónico",
      passwordLabel: "Contraseña",
      passwordPlaceholder: "Introduce tu contraseña",
      signInButton: "Iniciar Sesión",
      signingInButton: "Iniciando sesión...",
      loginSuccessTitle: "Inicio de Sesión Exitoso",
      loginSuccessDescription: "¡Bienvenido al panel de administración!",
    },
    fr: {
      helmet: {
        title: "Connexion Admin - Patriot Pest Control Co",
        description:
          "Portail de connexion administrateur pour la gestion du site web de Patriot Pest Control Co.",
        robots: "noindex, nofollow",
      },
      heading: "Connexion Admin",
      subheading: "Connectez-vous pour accéder au tableau de bord admin",
      emailLabel: "Email",
      emailPlaceholder: "Entrez votre email",
      passwordLabel: "Mot de passe",
      passwordPlaceholder: "Entrez votre mot de passe",
      signInButton: "Se Connecter",
      signingInButton: "Connexion en cours...",
      loginSuccessTitle: "Connexion Réussie",
      loginSuccessDescription: "Bienvenue sur le tableau de bord admin !",
    },
    de: {
      helmet: {
        title: "Admin-Login - Patriot Pest Control Co",
        description: "Admin-Login-Portal für die Website-Verwaltung von Patriot Pest Control Co.",
        robots: "noindex, nofollow",
      },
      heading: "Admin-Login",
      subheading: "Melden Sie sich an, um auf das Admin-Dashboard zuzugreifen",
      emailLabel: "E-Mail",
      emailPlaceholder: "Geben Sie Ihre E-Mail-Adresse ein",
      passwordLabel: "Passwort",
      passwordPlaceholder: "Geben Sie Ihr Passwort ein",
      signInButton: "Anmelden",
      signingInButton: "Meldet sich an...",
      loginSuccessTitle: "Anmeldung Erfolgreich",
      loginSuccessDescription: "Willkommen im Admin-Dashboard!",
    },
    zh: {
      helmet: {
        title: "管理员登录 - Patriot Pest Control Co",
        description: "Patriot Pest Control Co 网站管理的管理员登录门户。",
        robots: "noindex, nofollow",
      },
      heading: "管理员登录",
      subheading: "登录以访问管理员仪表板",
      emailLabel: "电子邮件",
      emailPlaceholder: "输入您的电子邮件",
      passwordLabel: "密码",
      passwordPlaceholder: "输入您的密码",
      signInButton: "登录",
      signingInButton: "正在登录...",
      loginSuccessTitle: "登录成功",
      loginSuccessDescription: "欢迎来到管理员仪表板！",
    },
  };

  const pageData = adminLoginPageData[language] || adminLoginPageData.en;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const { error } = await signIn(credentials.email, credentials.password);

    if (!error) {
      toast({
        title: pageData.loginSuccessTitle,
        description: pageData.loginSuccessDescription,
      });
      navigate("/admin/dashboard");
    }

    setIsLoading(false);
  };

  return (
    <>
      <Helmet>
        <title>{pageData.helmet.title}</title>
        <meta name="description" content={pageData.helmet.description} />
        <meta name="robots" content={pageData.helmet.robots} />
      </Helmet>

      <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-md w-full space-y-8"
        >
          <div className="text-center">
            <Lock className="mx-auto h-12 w-12 text-blue-600" />
            <h2 className="mt-6 text-3xl font-bold text-gray-900">{pageData.heading}</h2>
            <p className="mt-2 text-sm text-gray-600">{pageData.subheading}</p>
          </div>

          <div className="bg-white py-8 px-6 shadow-lg rounded-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  {pageData.emailLabel}
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={credentials.email}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder={pageData.emailPlaceholder}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                  {pageData.passwordLabel}
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    required
                    value={credentials.password}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder={pageData.passwordPlaceholder}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>
              </div>

              <Button
                type="submit"
                disabled={isLoading}
                className="w-full bg-blue-600 hover:bg-blue-700 disabled:opacity-50"
              >
                {isLoading ? pageData.signingInButton : pageData.signInButton}
              </Button>
            </form>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default AdminLogin;

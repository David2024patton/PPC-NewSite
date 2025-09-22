import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { Eye, EyeOff, Lock, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/SupabaseAuthContext";
import { useToast } from "@/components/ui/use-toast";
import { useLanguage } from "../contexts/LanguageContext";

const CustomerAuth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [loginCredentials, setLoginCredentials] = useState({
    email: "",
    password: "",
  });
  const [registerFormData, setRegisterFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    fullName: "",
    phone: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const { signIn, signUp } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  const { language } = useLanguage();

  // Handle changes in login form input fields
  const handleLoginInputChange = (e) => {
    const { name, value } = e.target;
    setLoginCredentials((prevCredentials) => ({
      ...prevCredentials,
      [name]: value,
    }));
  };

  // Handle changes in registration form input fields
  const handleRegisterInputChange = (e) => {
    const { name, value } = e.target;
    setRegisterFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const customerAuthPageData = {
    en: {
      helmet: {
        loginTitle: "Customer Login - Patriot Pest Control Co",
        loginDescription: "Log in to your Patriot Pest Control customer account.",
        registerTitle: "Customer Register - Patriot Pest Control Co",
        registerDescription: "Create your Patriot Pest Control customer account.",
      },
      main: {
        loginHeading: "Customer Login",
        registerHeading: "Create your account",
        noAccount: "Don't have an account?",
        haveAccount: "Already have an account?",
        signUpHere: "Sign up here",
        signInHere: "Sign in here",
      },
      loginForm: {
        heading: "Login",
        emailLabel: "Email address",
        passwordLabel: "Password",
        signInButton: "Sign in",
        signingInButton: "Signing in...",
        loginSuccessTitle: "Login Successful",
        loginSuccessDescription: "Welcome back!",
        loginFailedTitle: "Login Failed",
      },
      registerForm: {
        heading: "Register",
        fullNameLabel: "Full Name",
        emailLabel: "Email address",
        phoneLabel: "Phone Number",
        passwordLabel: "Password",
        confirmPasswordLabel: "Confirm Password",
        createAccountButton: "Create account",
        creatingAccountButton: "Creating account...",
        passwordsMismatchTitle: "Passwords don't match",
        passwordsMismatchDescription: "Please make sure your passwords match.",
        registrationSuccessTitle: "Registration Successful",
        registrationSuccessDescription: "Please check your email to verify your account.",
        registrationFailedTitle: "Registration Failed",
      },
    },
    es: {
      helmet: {
        loginTitle: "Inicio de Sesión de Cliente - Patriot Pest Control Co",
        loginDescription: "Inicia sesión en tu cuenta de cliente de Patriot Pest Control.",
        registerTitle: "Registro de Cliente - Patriot Pest Control Co",
        registerDescription: "Crea tu cuenta de cliente de Patriot Pest Control.",
      },
      main: {
        loginHeading: "Inicio de Sesión de Cliente",
        registerHeading: "Crea tu cuenta",
        noAccount: "¿No tienes una cuenta?",
        haveAccount: "¿Ya tienes una cuenta?",
        signUpHere: "Regístrate aquí",
        signInHere: "Inicia sesión aquí",
      },
      loginForm: {
        heading: "Iniciar Sesión",
        emailLabel: "Correo electrónico",
        passwordLabel: "Contraseña",
        signInButton: "Iniciar sesión",
        signingInButton: "Iniciando sesión...",
        loginSuccessTitle: "Inicio de Sesión Exitoso",
        loginSuccessDescription: "¡Bienvenido de nuevo!",
        loginFailedTitle: "Inicio de Sesión Fallido",
      },
      registerForm: {
        heading: "Registrarse",
        fullNameLabel: "Nombre Completo",
        emailLabel: "Correo electrónico",
        phoneLabel: "Número de Teléfono",
        passwordLabel: "Contraseña",
        confirmPasswordLabel: "Confirmar Contraseña",
        createAccountButton: "Crear cuenta",
        creatingAccountButton: "Creando cuenta...",
        passwordsMismatchTitle: "Las contraseñas no coinciden",
        passwordsMismatchDescription: "Por favor, asegúrate de que tus contraseñas coincidan.",
        registrationSuccessTitle: "Registro Exitoso",
        registrationSuccessDescription:
          "Por favor, revisa tu correo electrónico para verificar tu cuenta.",
        registrationFailedTitle: "Registro Fallido",
      },
    },
    fr: {
      helmet: {
        loginTitle: "Connexion Client - Patriot Pest Control Co",
        loginDescription: "Connectez-vous à votre compte client Patriot Pest Control.",
        registerTitle: "Inscription Client - Patriot Pest Control Co",
        registerDescription: "Créez votre compte client Patriot Pest Control.",
      },
      main: {
        loginHeading: "Connexion Client",
        registerHeading: "Créez votre compte",
        noAccount: "Vous n'avez pas de compte ?",
        haveAccount: "Vous avez déjà un compte ?",
        signUpHere: "Inscrivez-vous ici",
        signInHere: "Connectez-vous ici",
      },
      loginForm: {
        heading: "Connexion",
        emailLabel: "Adresse e-mail",
        passwordLabel: "Mot de passe",
        signInButton: "Se connecter",
        signingInButton: "Connexion en cours...",
        loginSuccessTitle: "Connexion Réussie",
        loginSuccessDescription: "Bienvenue de nouveau !",
        loginFailedTitle: "Échec de la Connexion",
      },
      registerForm: {
        heading: "S'inscrire",
        fullNameLabel: "Nom Complet",
        emailLabel: "Adresse e-mail",
        phoneLabel: "Numéro de Téléphone",
        passwordLabel: "Mot de passe",
        confirmPasswordLabel: "Confirmer le Mot de passe",
        createAccountButton: "Créer un compte",
        creatingAccountButton: "Création du compte...",
        passwordsMismatchTitle: "Les mots de passe ne correspondent pas",
        passwordsMismatchDescription: "Veuillez vous assurer que vos mots de passe correspondent.",
        registrationSuccessTitle: "Inscription Réussie",
        registrationSuccessDescription:
          "Veuillez vérifier votre e-mail pour vérifier votre compte.",
        registrationFailedTitle: "Échec de l'Inscription",
      },
    },
    de: {
      helmet: {
        loginTitle: "Kunden-Login - Patriot Pest Control Co",
        loginDescription: "Melden Sie sich bei Ihrem Patriot Pest Control Kundenkonto an.",
        registerTitle: "Kundenregistrierung - Patriot Pest Control Co",
        registerDescription: "Erstellen Sie Ihr Patriot Pest Control Kundenkonto.",
      },
      main: {
        loginHeading: "Kunden-Login",
        registerHeading: "Erstellen Sie Ihr Konto",
        noAccount: "Sie haben noch kein Konto?",
        haveAccount: "Sie haben bereits ein Konto?",
        signUpHere: "Hier registrieren",
        signInHere: "Hier anmelden",
      },
      loginForm: {
        heading: "Login",
        emailLabel: "E-Mail-Adresse",
        passwordLabel: "Passwort",
        signInButton: "Anmelden",
        signingInButton: "Melde mich an...",
        loginSuccessTitle: "Login erfolgreich",
        loginSuccessDescription: "Willkommen zurück!",
        loginFailedTitle: "Login fehlgeschlagen",
      },
      registerForm: {
        heading: "Registrieren",
        fullNameLabel: "Vollständiger Name",
        emailLabel: "E-Mail-Adresse",
        phoneLabel: "Telefonnummer",
        passwordLabel: "Passwort",
        confirmPasswordLabel: "Passwort bestätigen",
        createAccountButton: "Konto erstellen",
        creatingAccountButton: "Konto wird erstellt...",
        passwordsMismatchTitle: "Passwörter stimmen nicht überein",
        passwordsMismatchDescription:
          "Bitte stellen Sie sicher, dass Ihre Passwörter übereinstimmen.",
        registrationSuccessTitle: "Registrierung erfolgreich",
        registrationSuccessDescription:
          "Bitte überprüfen Sie Ihre E-Mails, um Ihr Konto zu verifizieren.",
        registrationFailedTitle: "Registrierung fehlgeschlagen",
      },
    },
    zh: {
      helmet: {
        loginTitle: "客户登录 - Patriot Pest Control Co",
        loginDescription: "登录您的Patriot Pest Control客户账户。",
        registerTitle: "客户注册 - Patriot Pest Control Co",
        registerDescription: "创建您的Patriot Pest Control客户账户。",
      },
      main: {
        loginHeading: "客户登录",
        registerHeading: "创建您的账户",
        noAccount: "还没有账户？",
        haveAccount: "已有账户？",
        signUpHere: "在此注册",
        signInHere: "在此登录",
      },
      loginForm: {
        heading: "登录",
        emailLabel: "电子邮件地址",
        passwordLabel: "密码",
        signInButton: "登录",
        signingInButton: "正在登录...",
        loginSuccessTitle: "登录成功",
        loginSuccessDescription: "欢迎回来！",
        loginFailedTitle: "登录失败",
      },
      registerForm: {
        heading: "注册",
        fullNameLabel: "全名",
        emailLabel: "电子邮件地址",
        phoneLabel: "电话号码",
        passwordLabel: "密码",
        confirmPasswordLabel: "确认密码",
        createAccountButton: "创建账户",
        creatingAccountButton: "正在创建账户...",
        passwordsMismatchTitle: "密码不匹配",
        passwordsMismatchDescription: "请确保您的密码匹配。",
        registrationSuccessTitle: "注册成功",
        registrationSuccessDescription: "请检查您的电子邮件以验证您的账户。",
        registrationFailedTitle: "注册失败",
      },
    },
  };

  const currentContent = customerAuthPageData[language] || customerAuthPageData.en;

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const { error } = await signIn(loginCredentials.email, loginCredentials.password);

    if (!error) {
      toast({
        title: currentContent.loginForm.loginSuccessTitle,
        description: currentContent.loginForm.loginSuccessDescription,
      });
      navigate("/customer/dashboard");
    } else {
      toast({
        variant: "destructive",
        title: currentContent.loginForm.loginFailedTitle,
        description: error.message,
      });
    }

    setIsLoading(false);
  };

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    if (registerFormData.password !== registerFormData.confirmPassword) {
      toast({
        variant: "destructive",
        title: currentContent.registerForm.passwordsMismatchTitle,
        description: currentContent.registerForm.passwordsMismatchDescription,
      });
      setIsLoading(false);
      return;
    }

    const { error } = await signUp(registerFormData.email, registerFormData.password, {
      data: {
        full_name: registerFormData.fullName,
        phone: registerFormData.phone,
        role: "customer",
      },
    });

    if (!error) {
      toast({
        title: currentContent.registerForm.registrationSuccessTitle,
        description: currentContent.registerForm.registrationSuccessDescription,
      });
      navigate("/customer/login"); // Redirect to login after successful registration
    } else {
      toast({
        variant: "destructive",
        title: currentContent.registerForm.registrationFailedTitle,
        description: error.message,
      });
    }

    setIsLoading(false);
  };

  return (
    <>
      <Helmet>
        <title>
          {isLogin ? currentContent.helmet.loginTitle : currentContent.helmet.registerTitle}
        </title>
        <meta
          name="description"
          content={
            isLogin
              ? currentContent.helmet.loginDescription
              : currentContent.helmet.registerDescription
          }
        />
      </Helmet>

      <div className="min-h-screen flex flex-col justify-center py-12 sm:px-6 lg:px-8 bg-gray-100">
        <div className="sm:mx-auto sm:w-full sm:max-w-2xl">
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            {isLogin ? currentContent.main.loginHeading : currentContent.main.registerHeading}
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            {isLogin ? currentContent.main.noAccount : currentContent.main.haveAccount}{" "}
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="font-medium text-blue-600 hover:text-blue-500 focus:outline-none"
            >
              {isLogin ? currentContent.main.signUpHere : currentContent.main.signInHere}
            </button>
          </p>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-2xl flex flex-col lg:flex-row shadow-lg rounded-lg overflow-hidden gap-8">
          {/* Login Section */}
          <div
            className={`flex-1 p-8 ${isLogin ? "bg-white" : "bg-gray-50"} transition-colors duration-300`}
          >
            <motion.div
              initial={{ opacity: 0, x: isLogin ? -20 : 0 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="w-full"
            >
              <h3 className="text-2xl font-bold text-center text-gray-900 mb-6">
                {currentContent.loginForm.heading}
              </h3>
              <form onSubmit={handleLoginSubmit} className="space-y-6">
                <div>
                  <label htmlFor="login-email" className="block text-sm font-medium text-gray-700">
                    {currentContent.loginForm.emailLabel}
                  </label>
                  <div className="mt-1 relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <User className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      id="login-email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      value={loginCredentials.email}
                      onChange={handleLoginInputChange}
                      className="appearance-none block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="login-password"
                    className="block text-sm font-medium text-gray-700"
                  >
                    {currentContent.loginForm.passwordLabel}
                  </label>
                  <div className="mt-1 relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Lock className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      id="login-password"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      autoComplete="current-password"
                      required
                      value={loginCredentials.password}
                      onChange={handleLoginInputChange}
                      className="appearance-none block w-full pl-10 pr-10 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute inset-y-0 right-0 pr-3 flex items-center"
                    >
                      {showPassword ? (
                        <EyeOff className="h-5 w-5 text-gray-400" />
                      ) : (
                        <Eye className="h-5 w-5 text-gray-400" />
                      )}
                    </button>
                  </div>
                </div>

                <div>
                  <Button
                    type="submit"
                    disabled={isLoading}
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                  >
                    {isLoading
                      ? currentContent.loginForm.signingInButton
                      : currentContent.loginForm.signInButton}
                  </Button>
                </div>
              </form>
            </motion.div>
          </div>

          {/* Register Section */}
          <div
            className={`flex-1 p-8 ${!isLogin ? "bg-white" : "bg-gray-50"} transition-colors duration-300`}
          >
            <motion.div
              initial={{ opacity: 0, x: !isLogin ? 20 : 0 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="w-full"
            >
              <h3 className="text-2xl font-bold text-center text-gray-900 mb-6">
                {currentContent.registerForm.heading}
              </h3>
              <form onSubmit={handleRegisterSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="register-fullName"
                    className="block text-sm font-medium text-gray-700"
                  >
                    {currentContent.registerForm.fullNameLabel}
                  </label>
                  <div className="mt-1">
                    <input
                      id="register-fullName"
                      name="fullName"
                      type="text"
                      required
                      value={registerFormData.fullName}
                      onChange={handleRegisterInputChange}
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="register-email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    {currentContent.registerForm.emailLabel}
                  </label>
                  <div className="mt-1 relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <User className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      id="register-email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      value={registerFormData.email}
                      onChange={handleRegisterInputChange}
                      className="appearance-none block w-full pl-10 px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="register-phone"
                    className="block text-sm font-medium text-gray-700"
                  >
                    {currentContent.registerForm.phoneLabel}
                  </label>
                  <div className="mt-1">
                    <input
                      id="register-phone"
                      name="phone"
                      type="tel"
                      required
                      value={registerFormData.phone}
                      onChange={handleRegisterInputChange}
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="register-password"
                    className="block text-sm font-medium text-gray-700"
                  >
                    {currentContent.registerForm.passwordLabel}
                  </label>
                  <div className="mt-1 relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Lock className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      id="register-password"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      required
                      value={registerFormData.password}
                      onChange={handleRegisterInputChange}
                      className="appearance-none block w-full pl-10 pr-10 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute inset-y-0 right-0 pr-3 flex items-center"
                    >
                      {showPassword ? (
                        <EyeOff className="h-5 w-5 text-gray-400" />
                      ) : (
                        <Eye className="h-5 w-5 text-gray-400" />
                      )}
                    </button>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="register-confirmPassword"
                    className="block text-sm font-medium text-gray-700"
                  >
                    {currentContent.registerForm.confirmPasswordLabel}
                  </label>
                  <div className="mt-1 relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Lock className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      id="register-confirmPassword"
                      name="confirmPassword"
                      type={showPassword ? "text" : "password"}
                      required
                      value={registerFormData.confirmPassword}
                      onChange={handleRegisterInputChange}
                      className="appearance-none block w-full pl-10 pr-10 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
                  </div>
                </div>

                <div>
                  <Button
                    type="submit"
                    disabled={isLoading}
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                  >
                    {isLoading
                      ? currentContent.registerForm.creatingAccountButton
                      : currentContent.registerForm.createAccountButton}
                  </Button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomerAuth;

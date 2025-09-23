import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { Eye, EyeOff, Lock, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/SupabaseAuthContext";
import { useToast } from "@/components/ui/use-toast";

const CustomerAuth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const { signIn, signUp } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  const pageData = {
    helmetLogin: {
      title: "Customer Login - Patriot Pest Control Co",
      description: "Login to your Patriot Pest Control Co customer account.",
      robots: "index, follow",
    },
    helmetRegister: {
      title: "Customer Registration - Patriot Pest Control Co",
      description: "Register for a new Patriot Pest Control Co customer account.",
      robots: "index, follow",
    },
    loginHeading: "Customer Login",
    loginSubheading: "Sign in to your account",
    registerHeading: "Customer Registration",
    registerSubheading: "Create a new account",
    emailLabel: "Email",
    emailPlaceholder: "Enter your email",
    passwordLabel: "Password",
    passwordPlaceholder: "Enter your password",
    signInButton: "Sign In",
    signingInButton: "Signing in...",
    registerButton: "Register",
    registeringButton: "Registering...",
    toggleToRegister: "Don't have an account? Register",
    toggleToLogin: "Already have an account? Login",
    loginSuccessTitle: "Login Successful",
    loginSuccessDescription: "Welcome back!",
    registerSuccessTitle: "Registration Successful",
    registerSuccessDescription: "Please check your email to verify your account.",
  };

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

    if (isLogin) {
      const { error } = await signIn(credentials.email, credentials.password);
      if (!error) {
        toast({
          title: pageData.loginSuccessTitle,
          description: pageData.loginSuccessDescription,
        });
        navigate("/customer/dashboard");
      }
    } else {
      const { error } = await signUp(credentials.email, credentials.password);
      if (!error) {
        toast({
          title: pageData.registerSuccessTitle,
          description: pageData.registerSuccessDescription,
        });
        setIsLogin(true); // Switch to login after successful registration
      }
    }

    setIsLoading(false);
  };

  return (
    <>
      <Helmet>
        <title>{isLogin ? pageData.helmetLogin.title : pageData.helmetRegister.title}</title>
        <meta
          name="description"
          content={isLogin ? pageData.helmetLogin.description : pageData.helmetRegister.description}
        />
        <meta
          name="robots"
          content={isLogin ? pageData.helmetLogin.robots : pageData.helmetRegister.robots}
        />
      </Helmet>

      <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-md w-full space-y-8"
        >
          <div className="text-center">
            <User className="mx-auto h-12 w-12 text-blue-600" />
            <h2 className="mt-6 text-3xl font-bold text-gray-900">
              {isLogin ? pageData.loginHeading : pageData.registerHeading}
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              {isLogin ? pageData.loginSubheading : pageData.registerSubheading}
            </p>
          </div>

          <div className="bg-white py-8 px-6 shadow-lg rounded-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  {pageData.emailLabel}
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
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
                {isLoading
                  ? isLogin
                    ? pageData.signingInButton
                    : pageData.registeringButton
                  : isLogin
                  ? pageData.signInButton
                  : pageData.registerButton}
              </Button>
            </form>

            <div className="mt-6 text-center">
              <button
                onClick={() => setIsLogin(!isLogin)}
                className="text-sm text-blue-600 hover:text-blue-800"
              >
                {isLogin ? pageData.toggleToRegister : pageData.toggleToLogin}
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default CustomerAuth;

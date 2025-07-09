import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Phone, Mail, BookOpen, Users, Star, ChevronRight } from "lucide-react";

export default function Index() {
  const [showLogin, setShowLogin] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const navigate = useNavigate();

  const handleGetStarted = () => {
    setShowLogin(true);
  };

  const handleLoginWithPhone = () => {
    // In a real app, this would handle OTP verification
    navigate("/onboarding");
  };

  const handleLoginWithGoogle = () => {
    // In a real app, this would handle Google OAuth
    navigate("/onboarding");
  };

  if (showLogin) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-skyblue-100 to-cream-200 flex flex-col">
        {/* Header */}
        <div className="flex-1 flex flex-col justify-center px-6">
          {/* Logo and Brand */}
          <div className="text-center mb-8">
            <div className="bg-primary rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
              <BookOpen className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-primary mb-2">Sahayak</h1>
            <p className="text-teal-600 text-lg">Your AI Teaching Companion</p>
          </div>

          {/* Welcome Message */}
          <Card className="mb-6 border-0 shadow-xl bg-white/90 backdrop-blur">
            <CardHeader className="text-center pb-3">
              <CardTitle className="text-xl text-charcoal-500">
                Welcome Back!
              </CardTitle>
              <CardDescription className="text-charcoal-400">
                Join thousands of teachers transforming education
              </CardDescription>
            </CardHeader>
          </Card>

          {/* Login Options */}
          <div className="space-y-4">
            {/* Phone Login */}
            <Card className="border-0 shadow-lg bg-white/90 backdrop-blur">
              <CardContent className="p-4">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="bg-primary/10 p-2 rounded-full">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <Input
                        type="tel"
                        placeholder="Enter your mobile number"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        className="border-primary/20 focus:border-primary"
                      />
                    </div>
                  </div>
                  <Button
                    onClick={handleLoginWithPhone}
                    className="w-full bg-primary hover:bg-primary/90 text-white"
                    size="lg"
                  >
                    Continue with Phone
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Divider */}
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-charcoal-200"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="bg-skyblue-100 px-4 text-charcoal-400">
                  or
                </span>
              </div>
            </div>

            {/* Google Login */}
            <Button
              onClick={handleLoginWithGoogle}
              variant="outline"
              className="w-full bg-white hover:bg-cream-100 border-charcoal-200 text-charcoal-500"
              size="lg"
            >
              <Mail className="mr-2 h-4 w-4" />
              Continue with Google
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-8 grid grid-cols-3 gap-4">
            <div className="text-center">
              <div className="bg-sage/10 rounded-full w-12 h-12 mx-auto mb-2 flex items-center justify-center">
                <Users className="h-6 w-6 text-sage" />
              </div>
              <p className="text-sm font-semibold text-charcoal-500">50K+</p>
              <p className="text-xs text-charcoal-400">Teachers</p>
            </div>
            <div className="text-center">
              <div className="bg-orange/10 rounded-full w-12 h-12 mx-auto mb-2 flex items-center justify-center">
                <BookOpen className="h-6 w-6 text-orange" />
              </div>
              <p className="text-sm font-semibold text-charcoal-500">1M+</p>
              <p className="text-xs text-charcoal-400">Content Created</p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 rounded-full w-12 h-12 mx-auto mb-2 flex items-center justify-center">
                <Star className="h-6 w-6 text-primary" />
              </div>
              <p className="text-sm font-semibold text-charcoal-500">4.8</p>
              <p className="text-xs text-charcoal-400">Rating</p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 text-center">
          <p className="text-xs text-charcoal-400">
            By continuing, you agree to our Terms of Service and Privacy Policy
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-skyblue-50 to-cream-100 flex flex-col">
      {/* Splash Screen */}
      <div className="flex-1 flex flex-col justify-center items-center px-6">
        {/* Logo Animation */}
        <div className="relative mb-8">
          <div className="bg-primary rounded-full w-24 h-24 flex items-center justify-center shadow-2xl animate-pulse">
            <BookOpen className="h-12 w-12 text-white" />
          </div>
          <div className="absolute -top-2 -right-2 bg-orange rounded-full w-8 h-8 flex items-center justify-center animate-bounce">
            <Star className="h-4 w-4 text-white" />
          </div>
        </div>

        {/* Brand */}
        <h1 className="text-4xl font-bold text-primary mb-3">Sahayak</h1>
        <p className="text-xl text-teal-600 mb-2">AI Teaching Assistant</p>
        <p className="text-charcoal-400 text-center mb-12 max-w-sm">
          Empowering educators with intelligent tools for personalized learning
          experiences
        </p>

        {/* Features Preview */}
        <div className="space-y-4 mb-12 w-full max-w-sm">
          <div className="bg-white/80 backdrop-blur rounded-xl p-4 flex items-center space-x-3 shadow-lg">
            <div className="bg-sage/10 p-2 rounded-full">
              <BookOpen className="h-5 w-5 text-sage" />
            </div>
            <div>
              <p className="font-semibold text-charcoal-500">
                Smart Content Generation
              </p>
              <p className="text-sm text-charcoal-400">
                Create worksheets instantly
              </p>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur rounded-xl p-4 flex items-center space-x-3 shadow-lg">
            <div className="bg-orange/10 p-2 rounded-full">
              <Users className="h-5 w-5 text-orange" />
            </div>
            <div>
              <p className="font-semibold text-charcoal-500">
                Answer Sheet Evaluation
              </p>
              <p className="text-sm text-charcoal-400">AI-powered assessment</p>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur rounded-xl p-4 flex items-center space-x-3 shadow-lg">
            <div className="bg-primary/10 p-2 rounded-full">
              <Star className="h-5 w-5 text-primary" />
            </div>
            <div>
              <p className="font-semibold text-charcoal-500">
                Personalized Insights
              </p>
              <p className="text-sm text-charcoal-400">
                Track student progress
              </p>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <Button
          onClick={handleGetStarted}
          className="w-full max-w-sm bg-primary hover:bg-primary/90 text-white shadow-xl"
          size="lg"
        >
          Get Started
          <ChevronRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}

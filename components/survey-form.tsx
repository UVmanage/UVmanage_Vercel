"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, ArrowLeft, Check, Calendar } from "lucide-react";
import { cn } from "@/lib/utils";

type Step = 1 | 2 | 3 | 4 | 5;

interface FormData {
  name: string;
  email: string;
  platforms: string[];
  followers: string;
  services: string[];
  goals: string;
}

const platformOptions = [
  "Instagram",
  "TikTok",
  "YouTube",
  "Twitter/X",
  "Reddit",
  "Twitch",
];

const followerRanges = [
  "Under 10K",
  "10K - 50K",
  "50K - 100K",
  "100K - 500K",
  "500K - 1M",
  "1M+",
];

const serviceOptions = [
  "Social Media Strategy",
  "Account Optimization",
  "Account Management",
  "Chatting Services",
  "DMCA Protection",
];

export function SurveyForm() {
  const [step, setStep] = useState<Step>(1);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    platforms: [],
    followers: "",
    services: [],
    goals: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const totalSteps = 5;
  const progress = (step / totalSteps) * 100;

  const handleNext = () => {
    if (step < 5) {
      setStep((prev) => (prev + 1) as Step);
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep((prev) => (prev - 1) as Step);
    }
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('/api/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          platforms: formData.platforms,
          followers: formData.followers,
          services: formData.services,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        console.error('Form submission error:', result);
        alert(result.error || 'There was an error submitting the form. Please try again.');
        setIsLoading(false);
        return;
      }

      setIsSubmitted(true);
    } catch (err) {
      console.error('Unexpected error:', err);
      alert('Unexpected error submitting the form.');
    } finally {
      setIsLoading(false);
    }
  };

  const togglePlatform = (platform: string) => {
    setFormData((prev) => ({
      ...prev,
      platforms: prev.platforms.includes(platform)
        ? prev.platforms.filter((p) => p !== platform)
        : [...prev.platforms, platform],
    }));
  };

  const toggleService = (service: string) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service],
    }));
  };

  const isStepValid = () => {
    switch (step) {
      case 1:
        return formData.name.trim() !== "";
      case 2:
        return (
          formData.email.trim() !== "" && formData.email.includes("@")
        );
      case 3:
        return formData.platforms.length > 0;
      case 4:
        return formData.followers !== "";
      case 5:
        return formData.services.length > 0;
      default:
        return false;
    }
  };

  if (isSubmitted) {
    return (
      <section id="survey" className="py-24 px-6 bg-card">
        <div className="max-w-2xl mx-auto text-center">
          <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <Check className="w-10 h-10 text-primary" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {"You're In!"}
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            {`Thanks, ${formData.name}! We've received your information and will be in touch within 24 hours.`}
          </p>
          <div className="p-6 bg-background border border-border rounded-lg">
            <h3 className="text-xl font-semibold text-foreground mb-4">
              Want faster results?
            </h3>
            <p className="text-muted-foreground mb-6">
              Skip the wait and book a strategy call directly with our team.
            </p>
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90"
              onClick={() =>
                window.open("https://calendly.com", "_blank")
              }
            >
              <Calendar className="mr-2 h-4 w-4" />
              Book Your Call Now
            </Button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="survey" className="py-24 px-6 bg-card">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-4">
            {"Book Your Free Call"}
          </h2>
          <p className="text-muted-foreground text-lg">
            Tell us about yourself and your goals
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-12">
          <div className="flex justify-between text-sm text-muted-foreground mb-2">
            <span>Step {step} of {totalSteps}</span>
            <span>{Math.round(progress)}% complete</span>
          </div>
          <div className="h-2 bg-secondary rounded-full overflow-hidden">
            <div
              className="h-full bg-primary transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Form Steps */}
        <div className="bg-background border border-border rounded-lg p-8 md:p-12">
          {step === 1 && (
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  {"What's your name?"}
                </label>
                <Input
                  type="text"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, name: e.target.value }))
                  }
                  className="h-14 text-lg bg-secondary border-border focus:border-primary"
                />
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  {"What's your email address?"}
                </label>
                <Input
                  type="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, email: e.target.value }))
                  }
                  className="h-14 text-lg bg-secondary border-border focus:border-primary"
                />
                <p className="text-sm text-muted-foreground mt-2">
                  {"We'll send your personalized growth plan here"}
                </p>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-foreground mb-4">
                  Which platforms are you active on?
                </label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {platformOptions.map((platform) => (
                    <button
                      key={platform}
                      type="button"
                      onClick={() => togglePlatform(platform)}
                      className={cn(
                        "p-4 text-sm font-medium rounded-lg border transition-all",
                        formData.platforms.includes(platform)
                          ? "bg-primary text-primary-foreground border-primary"
                          : "bg-secondary text-foreground border-border hover:border-primary/50"
                      )}
                    >
                      {platform}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {step === 4 && (
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-foreground mb-4">
                  {"What's your total follower count?"}
                </label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {followerRanges.map((range) => (
                    <button
                      key={range}
                      type="button"
                      onClick={() =>
                        setFormData((prev) => ({ ...prev, followers: range }))
                      }
                      className={cn(
                        "p-4 text-sm font-medium rounded-lg border transition-all",
                        formData.followers === range
                          ? "bg-primary text-primary-foreground border-primary"
                          : "bg-secondary text-foreground border-border hover:border-primary/50"
                      )}
                    >
                      {range}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {step === 5 && (
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-foreground mb-4">
                  Which services interest you?
                </label>
                <div className="space-y-3">
                  {serviceOptions.map((service) => (
                    <button
                      key={service}
                      type="button"
                      onClick={() => toggleService(service)}
                      className={cn(
                        "w-full p-4 text-left text-sm font-medium rounded-lg border transition-all flex items-center justify-between",
                        formData.services.includes(service)
                          ? "bg-primary text-primary-foreground border-primary"
                          : "bg-secondary text-foreground border-border hover:border-primary/50"
                      )}
                    >
                      {service}
                      {formData.services.includes(service) && (
                        <Check className="w-5 h-5" />
                      )}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Navigation */}
          <div className="flex justify-between mt-10">
            <Button
              variant="ghost"
              onClick={handleBack}
              disabled={step === 1}
              className="text-muted-foreground hover:text-foreground"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back
            </Button>
            {step < 5 ? (
              <Button
                onClick={handleNext}
                disabled={!isStepValid()}
                className="bg-primary text-primary-foreground hover:bg-primary/90"
              >
                Continue
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            ) : (
              <Button
                onClick={handleSubmit}
                disabled={!isStepValid() || isLoading}
                className="bg-primary text-primary-foreground hover:bg-primary/90"
              >
                {isLoading ? "Submitting..." : "Submit"}
                <Check className="ml-2 h-4 w-4" />
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

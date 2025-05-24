import React from 'react';
import { Button } from "@/components/ui/button";

const UpgradePage = () => {
const plans = [
    {
      name: "Free",
      price: "₹0",
      features: [
        "Up to 5 courses",
        "Basic AI-generated content",
        "No customization options",
      ],
      current: true,
    },
    {
      name: "Pro",
      price: "₹499/month",
      features: [
        "Up to 10 courses",
        "Advanced AI content generation",
        "Editable modules and quizzes",
        "Priority support",
      ],
    },
    {
      name: "Premium",
      price: "₹999/month",
      features: [
        "Up to 20 courses",
        "All Pro features",
        "Full course customization",
        "Downloadable content",
        "Access to premium templates",
        "AI assistant for course marketing",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Upgrade Your Subscription</h2>
        <p className="text-gray-600 mb-10">
          Unlock the full potential of AI-powered course creation.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-3 max-w-6xl mx-auto">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`rounded-2xl shadow-lg border ${
              plan.current ? "border-blue-600" : "border-gray-200"
            } bg-white p-6 flex flex-col justify-between`}
          >
            <div>
              <h3 className="text-xl font-semibold text-gray-800">{plan.name}</h3>
              <p className="text-3xl font-bold text-gray-900 my-2">{plan.price}</p>
              <ul className="mt-4 space-y-2 text-gray-600 text-sm">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-blue-500 mr-2">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-6">
              {plan.current ? (
                <span className="inline-block px-4 py-2 rounded bg-blue-100 text-blue-600 font-medium">
                  Your Current Plan
                </span>
              ) : (
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-xl font-semibold transition">
                  Upgrade to {plan.name}
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpgradePage;
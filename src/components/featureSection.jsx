import React from "react";

export default function FeatureSection() {
  const features = [
    { title: "Wide Variety of Gadgets", icon: "📱" },
    { title: "Affordable Pricing", icon: "💰" },
    { title: "Quick Delivery", icon: "🚀" },
    { title: "Customer Support", icon: "📞" },
    { title: "Flexible Plans", icon: "🔄" },
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Why Choose QuickRent?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="p-6 bg-white rounded-lg shadow-lg">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p>
                Discover how QuickRent can make renting easier and more
                convenient.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

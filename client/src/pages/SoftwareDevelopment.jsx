import React from 'react';
import VideoBannerServices from '../components/VideoBannerServices.jsx';
import ServiceDescription from '../components/ServiceDescription.jsx';
import ServiceFeatureSection from '../components/ServiceFeatureSection.jsx';
import softwareDevVideo from '../assets/videos/BannerSoftDev.webm';
import PricingSection from '../components/PricingSection.jsx';


const SoftwareDevelopmentPage = () => {

    const services = [
    { title: "Custom Software", icon: "bi-code-slash", description: "Tailor-made software to fit your needs." },
    { title: "API Development", icon: "bi-plug", description: "Robust and scalable API integrations." },
    { title: "Cloud Applications", icon: "bi-cloud-upload", description: "Modern apps that scale with your business." },
    { title: "Desktop Applications", icon: "bi-laptop", description: "Reliable and efficient desktop solutions." },
    { title: "Maintenance & Support", icon: "bi-tools", description: "Bug fixes, updates, and ongoing assistance." },
    { title: "Agile Development", icon: "bi-arrow-repeat", description: "Flexible development with iterative delivery." },
  ];

    const plans = [
    {
      title: "Startup",
      price: "£799",
      features: [
        "1 Custom Module",
        "Basic UI/UX",
        "Database Setup",
        "2 Revisions",
        "Email Support",
      ],
      buttonText: "Get Started",
      highlight: false,
    },
    {
      title: "Growth",
      price: "£1499",
      features: [
        "Up to 3 Modules",
        "Advanced UI/UX",
        "API Integration",
        "5 Revisions",
        "Priority Support",
      ],
      buttonText: "Get Started",
      highlight: true,
    },
    {
      title: "Enterprise",
      price: "£2999+",
      features: [
        "Full-stack App",
        "Custom Architecture",
        "DevOps Deployment",
        "Unlimited Revisions",
        "Dedicated Team",
      ],
      buttonText: "Contact Us",
      highlight: false,
    },
  ];

  return (
    <>
      <VideoBannerServices
        videoSrc={softwareDevVideo}
        title="Software Development Services"
        subtitle="Tailored Software Solutions to Power Innovation and Growth"
      />
      <ServiceDescription
          title="Innovative Software Solutions for Modern Challenges"
          description="From SaaS platforms to enterprise applications, we design and build scalable software that aligns with your unique business needs and user experience goals."
          features={[
            "Custom Application Development",
            "API Integrations",
            "Agile & Scalable Architecture",
            "Cross-Platform Compatibility"
          ]}
          image="https://images.unsplash.com/photo-1518770660439-4636190af475"
        />
      <ServiceFeatureSection sectionTitle="What We Offer in Software Development" services={services} />

      <PricingSection
      sectionTitle="Software Development Pricing"
      description="From startups to enterprises, we build solutions that scale."
      plans={plans}
    />
    </>
  );
};

export default SoftwareDevelopmentPage;

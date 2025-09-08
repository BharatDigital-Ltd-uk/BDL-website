import React from 'react'
import websiteDevVideo from '../assets/videos/BannerWebDev.webm';
import VideoBannerServices from '../components/VideoBannerServices';
import ServiceDescription from '../components/ServiceDescription.jsx';
import ServiceFeatureSection from '../components/ServiceFeatureSection.jsx';
import PricingSection from '../components/PricingSection.jsx';


const WebsiteDevelopment = () => {

    const services = [
    { title: "Responsive Design", icon: "bi-laptop", description: "Mobile-first, cross-device compatibility." },
    { title: "E-Commerce Integration", icon: "bi-cart-check", description: "Secure payment-ready online stores." },
    { title: "Custom UI/UX", icon: "bi-palette", description: "Modern designs tailored to your brand." },
    { title: "SEO Optimization", icon: "bi-graph-up-arrow", description: "Search engine-friendly architecture." },
    { title: "CMS Integration", icon: "bi-file-earmark-code", description: "Easy content updates using CMS." },
    { title: "Speed & Performance", icon: "bi-lightning-charge", description: "Optimized loading and responsiveness." },
  ];

    const plans = [
    {
      title: "Basic",
      price: "£299",
      features: ["1 Page Website", "Responsive Design", "Basic SEO", "Free Hosting (1 Year)", "Email Support"],
      buttonText: "Get Started",
      highlight: false,
    },
    {
      title: "Standard",
      price: "£599",
      features: ["Up to 5 Pages", "Custom Design", "SEO Optimization", "Free Hosting (1 Year)", "Priority Support"],
      buttonText: "Get Started",
      highlight: true,
    },
    {
      title: "Premium",
      price: "£999",
      features: ["Unlimited Pages", "Custom UI/UX", "Advanced SEO", "Free Hosting (2 Years)", "24/7 Support"],
      buttonText: "Get Started",
      highlight: false,
    },
  ];

  return (
    <div>
        <VideoBannerServices
        videoSrc={websiteDevVideo}
        title="Website Development Services"
        subtitle="Custom, Responsive, and High-Performance Websites"
      />
        <ServiceDescription
            title="Crafting Modern, Responsive Websites"
            description="At Bharat Digital Limited, we specialize in creating visually stunning, fast, and user-friendly websites tailored to your business goals. Whether you're launching a portfolio, startup, or enterprise solution, we bring your digital presence to life with modern tools and scalable solutions."
            features={[
              "Custom Design & Branding",
              "Mobile-First Responsive Layouts",
              "SEO-Friendly Development",
              "CMS & E-Commerce Solutions"
            ]}
            image="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=600&q=80"
          />
        <ServiceFeatureSection sectionTitle="What We Offer in Website Development" services={services} />
        <PricingSection
      sectionTitle="Website Development Pricing"
      description="Choose the plan that fits your business needs."
      plans={plans}
    />
    </div>
  )
}

export default WebsiteDevelopment
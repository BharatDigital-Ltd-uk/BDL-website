import React from 'react';
import VideoBannerServices from '../components/VideoBannerServices.jsx';
import ServiceDescription from '../components/ServiceDescription.jsx';
import ServiceFeatureSection from '../components/ServiceFeatureSection.jsx';
import PricingSection from '../components/PricingSection.jsx';
import itSupportVideo from '../assets/videos/BannerITSupport.webm';


const ITSupportPage = () => {
    const services = [
    { title: "24/7 Help Desk", icon: "bi-headset", description: "Always-on support for all your IT issues." },
    { title: "System Monitoring", icon: "bi-display", description: "Proactive monitoring to prevent downtime." },
    { title: "Network Setup", icon: "bi-wifi", description: "Reliable and secure networking infrastructure." },
    { title: "Hardware Support", icon: "bi-cpu", description: "Assistance for desktops, laptops, printers, etc." },
    { title: "Data Backup", icon: "bi-hdd", description: "Regular backups to keep your data safe." },
    { title: "Security Solutions", icon: "bi-shield-lock", description: "Protection from viruses, malware & threats." },
  ];

    const plans = [
    {
      title: "Starter",
      price: "£149/month",
      features: ["Remote Support", "System Monitoring", "Email Support", "Monthly Reports", "Basic Security"],
      buttonText: "Get Started",
      highlight: false,
    },
    {
      title: "Professional",
      price: "£299/month",
      features: ["On-site Support", "Proactive Maintenance", "24/7 Monitoring", "Priority Support", "Advanced Security"],
      buttonText: "Get Started",
      highlight: true,
    },
    {
      title: "Enterprise",
      price: "£499/month",
      features: ["Dedicated Technician", "Custom SLAs", "Advanced Reporting", "Disaster Recovery", "Unlimited Support"],
      buttonText: "Get Started",
      highlight: false,
    },
  ];

  return (
    <>
      <VideoBannerServices
        videoSrc={itSupportVideo}
        title="IT Support Services"
        subtitle="Reliable, Scalable, and Secure IT Solutions for Your Business"
      />
      <ServiceDescription
          title="Reliable IT Support for Seamless Operations"
          description="We provide 24/7 technical assistance and infrastructure support to ensure your business runs smoothly. From troubleshooting to proactive monitoring, our team is your tech backbone."
          features={[
            "24/7 Helpdesk Support",
            "Network Monitoring",
            "Hardware & Software Maintenance",
            "Cybersecurity Solutions"
          ]}
          image="https://images.pexels.com/photos/1181317/pexels-photo-1181317.jpeg"
        />
        <ServiceFeatureSection sectionTitle="What We Offer in IT Support" services={services} />

        <PricingSection
      sectionTitle="IT Support Pricing"
      description="Affordable plans tailored for your IT infrastructure."
      plans={plans}
    />
    </>
  );
};

export default ITSupportPage;

import React from 'react';
import VideoBannerServices from '../components/VideoBannerServices.jsx';
import ServiceDescription from '../components/ServiceDescription.jsx';
import ServiceFeatureSection from '../components/ServiceFeatureSection.jsx';
import PricingSection from '../components/PricingSection.jsx';
import socialMediaVideo from '../assets/videos/BannerSocialmedia.webm';

const SocialMediaManagementPage = () => {

    const services = [
    { title: "Content Creation", icon: "bi-pencil-square", description: "Engaging graphics and videos for your brand." },
    { title: "Post Scheduling", icon: "bi-calendar-week", description: "Automated and timely social media updates." },
    { title: "Audience Engagement", icon: "bi-chat-dots", description: "Real-time response to followers and messages." },
    { title: "Analytics Reports", icon: "bi-bar-chart", description: "Performance tracking and growth insights." },
    { title: "Ad Campaigns", icon: "bi-megaphone", description: "Targeted ads to boost reach and ROI." },
    { title: "Platform Optimization", icon: "bi-sliders", description: "Optimized profiles for every major platform." },
  ];

    const plans = [
    {
      title: "Starter",
      price: "£199/month",
      features: [
        "2 Platforms",
        "8 Posts/Month",
        "Basic Graphics",
        "Monthly Report",
        "Email Support",
      ],
      buttonText: "Get Started",
      highlight: false,
    },
    {
      title: "Growth",
      price: "£349/month",
      features: [
        "4 Platforms",
        "15 Posts/Month",
        "Custom Graphics",
        "Ad Campaign Setup",
        "Priority Support",
      ],
      buttonText: "Get Started",
      highlight: true,
    },
    {
      title: "Pro",
      price: "£599/month",
      features: [
        "All Platforms",
        "Unlimited Posts",
        "Video Editing",
        "Ad Management",
        "24/7 Support",
      ],
      buttonText: "Get Started",
      highlight: false,
    },
  ];

  return (
    <>
      <VideoBannerServices
        videoSrc={socialMediaVideo}
        title="Social Media Management"
        subtitle="Engage, Grow, and Influence Your Audience Across Platforms"
      />
      <ServiceDescription
          title="Grow & Engage Your Community with Social Media"
          description="We manage your social media presence across platforms to maintain brand consistency, improve engagement, and attract new customers."
          features={[
            "Account Setup & Optimization",
            "Post Planning & Scheduling",
            "Audience Engagement",
            "Performance Reporting"
          ]}
          image="https://images.pexels.com/photos/5082579/pexels-photo-5082579.jpeg"
        />
        <ServiceFeatureSection sectionTitle="What We Offer in Social Media Management" services={services} />

        <PricingSection
      sectionTitle="Social Media Management Pricing"
      description="Flexible plans to boost your brand visibility online."
      plans={plans}
    />
    </>
  );
};

export default SocialMediaManagementPage;

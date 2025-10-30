import React from 'react';
import CADVideo from '../assets/videos/BannerCad.webm';
import cad from '../assets/cad.webp';
import VideoBannerServices from '../components/VideoBannerServices';
import ServiceDescription from '../components/ServiceDescription.jsx';
import ServiceFeatureSection from '../components/ServiceFeatureSection.jsx';
import PricingSection from '../components/PricingSection.jsx';

const CADServices = () => {
const services = [
{ title: '2D Drafting', icon: 'bi-rulers', description: 'Plans, sections & detailed fabrication drawings (DWG/DXF).' },
{ title: '3D Parametric Modeling', icon: 'bi-box', description: 'Solid, surface & sheet-metal models for parts & assemblies.' },
{ title: 'Assembly & BOM', icon: 'bi-diagram-3', description: 'Exploded views, part numbering, and bill of materials.' },
{ title: 'GD&T & Tolerances', icon: 'bi-bullseye', description: 'Standards-compliant dimensioning & tolerance stack-up.' },
{ title: 'Simulation (FEA/CFD)', icon: 'bi-activity', description: 'Static/thermal analysis and basic flow checks for validation.' },
{ title: 'Rendering & Animation', icon: 'bi-film', description: 'Photo-real renders and motion studies for presentations.' },
];

  const plans = [
    {
      title: 'Basic',
      price: '£149',
      features: [
        'Up to 5 2D drawings (A3/A4)',
        'Single-part 3D model',
        'Export: DWG/DXF + STEP/IGES',
        '3 revisions',
        'Email support',
      ],
      buttonText: 'Get Started',
      highlight: false,
    },
    {
      title: 'Standard',
      price: '£399',
      features: [
        'Up to 5 parts or 1 small assembly',
        '2D manufacturing drawings + 3D models',
        'GD&T annotations',
        'Basic FEA (static/thermal)',
        'Priority support',
      ],
      buttonText: 'Get Started',
      highlight: true,
    },
    {
      title: 'Premium',
      price: '£799',
      features: [
        'Complex assemblies (up to 25 parts)',
        'Full manufacturing pack (BOM, exploded views)',
        'Advanced FEA/CFD overview',
        'Photo-real renders/short animation',
        '24/7 support & NDA on request',
      ],
      buttonText: 'Get Started',
      highlight: false,
    },
  ];

  return (
    <div>
      <VideoBannerServices
        videoSrc={CADVideo}
        title="CAD Services"
        subtitle="2D Drafting, 3D Modeling & Engineering for Civil, Mechanical & Aerospace"
      />

      <ServiceDescription
        title="Precision 2D & 3D CAD for Every Industry"
        description="At Bharat Digital Limited, we deliver accurate, production-ready CAD across civil, mechanical, and aerospace sectors. From shop-floor 2D drawings to parametric 3D assemblies with GD&T and simulations, our team builds models and documentation you can manufacture from with confidence."
        features={[
          '2D Drafting (DWG/DXF)',
          '3D Parametric Models (STEP/IGES)',
          'Assembly & Manufacturing Drawings',
          'GD&T, FEA/CFD & Compliance',
        ]}
        image={cad}
      />

      <ServiceFeatureSection
        sectionTitle="What We Offer in CAD Services"
        services={services}
      />

      <PricingSection
        sectionTitle="CAD Services Pricing"
        description="Transparent packages from quick drafting to complex assemblies."
        plans={plans}
      />
    </div>
  );
};

export default CADServices;
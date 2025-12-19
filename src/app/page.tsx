"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import MediaAbout from '@/components/sections/about/MediaAbout';
import FeatureCardTwenty from '@/components/sections/feature/FeatureCardTwenty';
import MetricCardSeven from '@/components/sections/metrics/MetricCardSeven';
import SocialProofThree from '@/components/sections/socialProof/SocialProofThree';
import TestimonialCardTen from '@/components/sections/testimonial/TestimonialCardTen';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FooterSplit from '@/components/sections/footer/FooterSplit';
import { Shield, Target, Zap, TrendingUp, Briefcase, Users, HelpCircle, Mail, Phone, MapPin } from "lucide-react";

export default function DefenseVenturesPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="reveal-blur"
      borderRadius="soft"
      contentWidth="small"
      sizing="largeSizeExtraLargeSpacing"
      background="animatedAurora"
      cardStyle="solid"
      primaryButtonStyle="neon-glow-border"
      secondaryButtonStyle="layered"
      headingFontWeight="light"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleCentered
          brandName="DefenseVentures"
          navItems={[
            { name: "About", id: "about" },
            { name: "Focus", id: "focus" },
            { name: "Portfolio", id: "portfolio" },
            { name: "Impact", id: "metrics" },
            { name: "Contact", id: "contact" }
          ]}
          button={{
            text: "Get in Touch",
            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroSplit
          title="Defense-Focused Venture Capital"
          description="Strategic investments in transformative defense technologies. We back founders building the future of national security."
          tag="Defense Sector Focus"
          tagIcon={Shield}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766140097263-p4m0u04d.jpg"
          imageAlt="Advanced defense technology visualization"
          imagePosition="right"
          buttons={[
            { text: "Explore Portfolio", href: "portfolio" },
            { text: "Investment Inquiry", href: "contact" }
          ]}
          ariaLabel="Hero section for defense venture capital fund"
        />
      </div>

      <div id="about" data-section="about">
        <MediaAbout
          title="Investment Thesis"
          description="We invest in companies addressing critical national security challenges through cutting-edge technology. Our focus spans advanced materials, autonomous systems, AI-driven intelligence, and next-generation defense capabilities."
          tag="Our Approach"
          tagIcon={Target}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766140098536-9jc7ywck.jpg"
          imageAlt="DefenseVentures team collaborating on investment strategy"
          useInvertedBackground="noInvert"
          buttons={[
            { text: "View Thesis", href: "#" }
          ]}
          ariaLabel="About section describing investment focus"
        />
      </div>

      <div id="focus" data-section="focus">
        <FeatureCardTwenty
          images={[
            {
              id: 1,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766140099604-32oyqj9b.jpg",
              imageAlt: "Portfolio company growth trajectory"
            },
            {
              id: 2,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766140099604-32oyqj9b.jpg",
              imageAlt: "Defense technology innovation"
            },
            {
              id: 3,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766140099604-32oyqj9b.jpg",
              imageAlt: "Strategic partnerships and ecosystem"
            },
            {
              id: 4,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766140099604-32oyqj9b.jpg",
              imageAlt: "Market expansion success"
            }
          ]}
          title="Areas of Focus"
          description="We focus on transformative technologies that strengthen national security and create lasting value for our investors."
          tag="Investment Categories"
          tagIcon={Zap}
          textboxLayout="default"
          useInvertedBackground="noInvert"
          ariaLabel="Feature section highlighting investment focus areas"
        />
      </div>

      <div id="metrics" data-section="metrics">
        <MetricCardSeven
          title="Track Record"
          description="Delivering measurable impact and returns through strategic defense sector investments."
          tag="Performance"
          tagIcon={TrendingUp}
          metrics={[
            {
              id: "1",
              value: "$500M+",
              title: "Assets Under Management",
              items: [
                "15+ active portfolio companies",
                "Across defense and security sectors",
                "Consistent returns to LPs"
              ]
            },
            {
              id: "2",
              value: "85%",
              title: "Portfolio Success Rate",
              items: [
                "Companies achieving scale",
                "Government contracts secured",
                "Strategic exits completed"
              ]
            },
            {
              id: "3",
              value: "3.2x",
              title: "Average MOIC",
              items: [
                "Multiple on invested capital",
                "Above industry benchmarks",
                "Consistent fund performance"
              ]
            },
            {
              id: "4",
              value: "12 years",
              title: "Track Record",
              items: [
                "Proven sector expertise",
                "Defense market knowledge",
                "Relationship advantage"
              ]
            }
          ]}
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          containerStyle="default"
          textboxLayout="default"
          useInvertedBackground="noInvert"
          ariaLabel="Metrics section showing fund performance"
        />
      </div>

      <div id="portfolio" data-section="portfolio">
        <SocialProofThree
          title="Portfolio Companies"
          description="We partner with exceptional founders transforming the defense industry."
          tag="Our Companies"
          tagIcon={Briefcase}
          logos={[
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766140105432-6wcp77a1.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766140106374-le5uxrj5.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766140107205-4bafhl5z.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766140108208-9jx2n5py.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766140109000-ndb7534s.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766140109921-m508s0az.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766140110880-q16dspxs.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766140111672-sfjpgvql.jpg"
          ]}
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground="noInvert"
          speed={35}
          topMarqueeDirection="left"
          ariaLabel="Portfolio companies showcase"
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardTen
          title="LP Testimonials"
          description="Hear from our limited partners about their investment experience."
          tag="Investor Stories"
          tagIcon={Users}
          variant="card"
          textboxLayout="default"
          useInvertedBackground="noInvert"
          testimonials={[
            {
              id: "1",
              title: "Strategic Vision and Execution Excellence",
              quote: "DefenseVentures has consistently identified breakthrough technologies before market recognition. Their deep sector expertise and founder networks created substantial returns for our institution.",
              name: "James Mitchell",
              role: "Chief Investment Officer",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766140101670-ttp7xdlv.jpg",
              imageAlt: "James Mitchell"
            },
            {
              id: "2",
              title: "Exceptional Portfolio Performance",
              quote: "The fund's ability to navigate complex regulatory landscapes while supporting company growth is remarkable. We saw consistent value creation across multiple exit cycles.",
              name: "Sarah Chen",
              role: "Managing Director",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766140102492-vbld5jll.jpg",
              imageAlt: "Sarah Chen"
            },
            {
              id: "3",
              title: "Best-in-Class Returns",
              quote: "Their focus on defense sector fundamentals combined with rigorous due diligence resulted in portfolios that significantly outperformed benchmarks.",
              name: "David Rothstein",
              role: "Senior Partner",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766140103339-f3be0gdh.jpg",
              imageAlt: "David Rothstein"
            },
            {
              id: "4",
              title: "Trusted Sector Partner",
              quote: "Beyond financial returns, DefenseVentures demonstrates genuine commitment to national security. Their portfolio companies are making real impact in critical areas.",
              name: "Katherine Hayes",
              role: "Head of Strategic Investments",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766140104217-wfflli6f.jpg",
              imageAlt: "Katherine Hayes"
            }
          ]}
          ariaLabel="Limited partner testimonials section"
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqSplitMedia
          title="Frequently Asked Questions"
          description="Clear answers to common questions about our fund, investment process, and portfolio strategy."
          tag="Support"
          tagIcon={HelpCircle}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766140099604-32oyqj9b.jpg"
          imageAlt="DefenseVentures investment process"
          mediaPosition="left"
          textboxLayout="default"
          useInvertedBackground="noInvert"
          faqs={[
            {
              id: "1",
              title: "What is the fund's investment focus?",
              content: "We invest in companies developing critical defense technologies including advanced materials, autonomous systems, AI-driven intelligence, and next-generation defense capabilities. Our sweet spot is early to growth-stage companies with defensible technology and significant market potential."
            },
            {
              id: "2",
              title: "What is the typical fund size and check size?",
              content: "Our current fund is $500M+. We typically lead Series A and B rounds with check sizes ranging from $5M to $25M, depending on company stage and capital requirements."
            },
            {
              id: "3",
              title: "What is your investment thesis?",
              content: "We believe the defense sector is undergoing technological transformation. We back founders solving critical national security challenges with innovation that creates defensible competitive advantages and sustainable value."
            },
            {
              id: "4",
              title: "How do you support portfolio companies?",
              content: "Beyond capital, we provide sector expertise, government relationships, and operational support. Our team includes former defense leaders and technologists who guide companies through regulatory requirements and scaling strategies."
            },
            {
              id: "5",
              title: "What is the minimum LP commitment?",
              content: "We welcome committed partners with minimum investments starting at $10M. We work with institutional investors, family offices, and strategic partners aligned with our vision for defense sector innovation."
            },
            {
              id: "6",
              title: "How can I connect with the team?",
              content: "Please reach out through our contact form or email us at partnerships@defenseventures.com. We schedule regular investor meetings and welcome discussions about our current focus areas and available opportunities."
            }
          ]}
          animationType="smooth"
          showCard={true}
          ariaLabel="Frequently asked questions about the fund"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplitForm
          title="Let's Talk"
          description="Interested in learning more about investment opportunities? Contact our team to discuss your interest in the fund."
          inputs={[
            {
              name: "name",
              type: "text",
              placeholder: "Full Name",
              required: true
            },
            {
              name: "email",
              type: "email",
              placeholder: "Email Address",
              required: true
            },
            {
              name: "organization",
              type: "text",
              placeholder: "Organization",
              required: true
            },
            {
              name: "investmentSize",
              type: "text",
              placeholder: "Potential Investment Size",
              required: false
            }
          ]}
          textarea={{
            name: "message",
            placeholder: "Tell us about your investment interests and goals",
            rows: 5,
            required: true
          }}
          useInvertedBackground="noInvert"
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1766140100504-j8qc2eoq.jpg"
          imageAlt="DefenseVentures team collaboration"
          mediaPosition="right"
          buttonText="Send Inquiry"
          ariaLabel="Contact form for investment inquiries"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterSplit
          logoText="DefenseVentures"
          title="Strategic investments in defense sector transformation"
          columns={[
            {
              title: "Fund",
              items: [
                { label: "Portfolio", href: "#portfolio" },
                { label: "Investment Thesis", href: "#about" },
                { label: "Track Record", href: "#metrics" }
              ]
            },
            {
              title: "Company",
              items: [
                { label: "About Us", href: "#about" },
                { label: "Team", href: "#" },
                { label: "Contact", href: "#contact" }
              ]
            },
            {
              title: "Legal",
              items: [
                { label: "Privacy Policy", href: "#" },
                { label: "Terms of Service", href: "#" },
                { label: "Disclosures", href: "#" }
              ]
            }
          ]}
          contactItems={[
            { icon: Mail, text: "partnerships@defenseventures.com" },
            { icon: Phone, text: "+1 (202) 555-0147" },
            { icon: MapPin, text: "Washington, DC / Silicon Valley, CA" }
          ]}
          ariaLabel="Site footer with company information"
        />
      </div>
    </ThemeProvider>
  );
}
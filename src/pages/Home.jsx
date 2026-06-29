import Hero from "../components/home/Hero";
import Partners from "../components/Home/Partners";
import ProblemSection from "../components/Home/ProblemSection";
import WhyChooseUs from "../components/Home/WhyChooseUs";
import Features from "../components/Home/Features";
import HowItWorks from "../components/Home/HowItWorks";
import AIRiskScoring from "../components/Home/AIRiskScoring";
import SystemArchitecture from "../components/Home/SystemArchitecture";
import SecurityLayers from "../components/Home/SecurityLayers";



export default function Home() {
  return (
    <>
      <Hero />
      <Partners/>
      <ProblemSection/>
      <WhyChooseUs/>
      <Features/>
      <HowItWorks/>
      <AIRiskScoring/>
      <SystemArchitecture/>
      <SecurityLayers/>
      
    </>
  );
}
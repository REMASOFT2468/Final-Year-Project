import DocumentationHero from "../components/documentation/DocumentationHero";
import  ProjectOverview from "../components/Documentation/ProjectOverview";
import  FrameworkArchitecture from "../components/Documentation/FrameworkArchitecture";
import TechnologiesUsed from "../components/Documentation/TechnologiesUsed";
import SystemWorkflow from "../components/Documentation/SystemWorkflow";
import RiskScoringAlgorithm from "../components/Documentation/RiskScoringAlgorithm";
import SecurityFeatures from "../components/Documentation/SecurityFeatures";
import FutureEnhancements from "../components/Documentation/FutureEnhancements";
import FAQ from "../components/Documentation/FAQ";


export default function Documentation() {
  return (
    <>
      <DocumentationHero />
      <ProjectOverview/>
      <FrameworkArchitecture/>
      <TechnologiesUsed/>
      <SystemWorkflow/>
      <RiskScoringAlgorithm/>
      <SecurityFeatures/>
      <FutureEnhancements/>
      <FAQ/>
    </>
  );
}
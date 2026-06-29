import DemoHero from "../components/demo/DemoHero";
import FrameworkOverview from "../components/Demo/FrameworkOverview";
import FraudSimulator from "../components/Demo/FraudSimulator";
import AdaptiveVerificationModal from "../components/Demo/AdaptiveVerificationModal";
import RiskFactorsTable from "../components/Demo/RiskFactorsTable";
import WorkflowDiagram from "../components/Demo/WorkflowDiagram";
import SecurityLayers from "../components/Demo/SecurityLayers";
import ComparisonTable from "../components/Demo/ComparisonTable";

export default function Demo() {
  return (
    <>
      <DemoHero />
      <FrameworkOverview/>
      <FraudSimulator/>
      <AdaptiveVerificationModal/>
      <RiskFactorsTable/>
      <WorkflowDiagram/>
      <SecurityLayers/>
      <ComparisonTable/>
    </>
  );
}
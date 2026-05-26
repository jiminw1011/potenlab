import type { Metadata } from "next";
import EduHeader from "@/components/edueducator/EduHeader";
import EduHero from "@/components/edueducator/EduHero";
import EduMission from "@/components/edueducator/EduMission";
import EduProblem from "@/components/edueducator/EduProblem";
import EduSolutions from "@/components/edueducator/EduSolutions";
import EduImpact from "@/components/edueducator/EduImpact";
import EduIntegration from "@/components/edueducator/EduIntegration";
import EduSecurity from "@/components/edueducator/EduSecurity";
import EduSupport from "@/components/edueducator/EduSupport";
import EduCTA from "@/components/edueducator/EduCTA";
import EduFooter from "@/components/edueducator/EduFooter";
import EduRevealWrapper from "@/components/edueducator/EduRevealWrapper";

export const metadata: Metadata = {
  title: "EduEducator | AI-Powered Grading & Feedback Platform",
  description:
    "AI-powered grading and feedback that saves teachers up to 10 hours a week — so they can focus on what matters most: students.",
};

export default function EduEducatorPage() {
  return (
    <EduRevealWrapper>
      <EduHeader />
      <main>
        <EduHero />
        <EduMission />
        <EduProblem />
        <EduSolutions />
        <EduImpact />
        <EduIntegration />
        <EduSecurity />
        <EduSupport />
        <EduCTA />
      </main>
      <EduFooter />
    </EduRevealWrapper>
  );
}

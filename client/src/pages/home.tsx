import NavigationHeader from "@/components/navigation-header";
import HeroSection from "@/components/hero-section";
import IntroductionSection from "@/components/introduction-section";
import OriginsSection from "@/components/origins-section";
import GuiRevolutionSection from "@/components/gui-revolution-section";
import ToolsMethodologySection from "@/components/tools-methodology-section";
import ProfessionalFormalizationSection from "@/components/professional-formalization-section";
import SalaryHeatmap from "@/components/salary-heatmap";
import JobMarketChart from "@/components/job-market-chart";
import ThesesSection from "@/components/theses-section";
import IndustryEconomicsSection from "@/components/industry-economics-section";
import Footer from "@/components/footer";
import StickyNavigation from "@/components/sticky-navigation";
import ScrollProgress from "@/components/scroll-progress";
import SectionDivider from "@/components/section-divider";

export default function Home() {
  return (
    <div className="font-sans antialiased">
      <ScrollProgress />
      <NavigationHeader />
      <HeroSection />
      <StickyNavigation />
      
      {/* Section 01: Origins */}
      <SectionDivider number="01" label="Origins" />
      
      <div id="origins">
        <IntroductionSection />
        <OriginsSection />
      </div>
      
      {/* Section 02: Revolution */}
      <SectionDivider number="02" label="Revolution" />
      
      <div id="revolution">
        <GuiRevolutionSection />
      </div>
      
      {/* Section 03: Formalization */}
      <SectionDivider number="03" label="Formalization" />
      
      <div id="formalization">
        <ProfessionalFormalizationSection />
      </div>
      
      {/* Section 04: Tools & Methods */}
      <SectionDivider number="04" label="Tools & Methods" />
      
      <div id="tools">
        <ToolsMethodologySection />
      </div>
      
      {/* Section 05: Industry & Economics */}
      <SectionDivider number="05" label="Industry & Economics" />
      
      <div id="economics">
        <IndustryEconomicsSection />
        <SalaryHeatmap />
        <JobMarketChart />
      </div>
      
      {/* Section 06: Professional Claims */}
      <SectionDivider number="06" label="Professional Claims" />
      
      <div id="claims">
        <ThesesSection />
      </div>
      
      <Footer />
    </div>
  );
}

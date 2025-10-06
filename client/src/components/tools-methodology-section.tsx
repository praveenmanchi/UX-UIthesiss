import FadeInSection from "@/components/fade-in-section";
import ToolsEvolutionScatter from "@/components/tools-evolution-scatter";

export default function ToolsMethodologySection() {
  const insights = [
    {
      number: 1,
      title: "The root of what ails us.",
      content: "The evolution of UX/UI design tools mirrors the profession's journey from print adaptation to digital-native thinking. What began as designers using Photoshop to slice images for web pages has transformed into a sophisticated ecosystem of collaborative, cloud-based platforms that enable real-time design systems at scale."
    },
    {
      number: 2,
      title: "This transformation wasn't just technological.",
      content: "This transformation wasn't just technological—it fundamentally changed how teams work together. The shift from waterfall to agile methodologies, the rise of design thinking, and the emergence of DesignOps reflect the profession's maturation from service provider to strategic partner."
    },
    {
      number: 3,
      title: "A budget is a plan, and no plan survives first contact.",
      content: "Military doctrine states plans are valuable, even if planning is invaluable. 'I support the President's budget' is an evasion. No company could survive if it took years for POR budget for projects (similarly JCIDS Program Objective Memorandum, or POM). The model must be subverted. And for a hybrid you must invest in existing technology, fund new tools, and many rapid pivot points. Most tools require money upfront, not 4 months, not 4 years. Messy and imperfect execution is required. We require DevSecOps for architects."
    },
    {
      number: 4,
      title: "The person is the program: the primacy of people.",
      content: "The Defense Officer Personnel Management Act (the law that says how military officer careers and promotions are governed) must be reformed. There is a reason that Director of Naval Reactors was the first Navy three-star and four-star billet ever given an exemption to this law. Consider the Director of Cyber. Thirty years ago that the F.A. Bernhardt and the J. Pierpont. Talent is not fungible. Talent: Problem fit is rare and hard to retain. The military culture today is not designed to keep the highly talented individuals who have both the experience to fill out a things go. Additionally, Congressional oversight can't work with Program Element numbers. Which identical individuals are Congress protecting and holding the DoD accountable?"
    },
    {
      number: 5,
      title: "The only requirement is winning.",
      content: "The most important projects don't come from requirements. America's culture strengths are fundamentally creative and entrepreneurial. The requirements process ensures we play by our weaknesses. In a fight 'no one cares about the requirements process'. Most enterprise capabilities require changing the requirements-making requires engaging in the messy, overlapping, seemingly wasteful but actually efficient process of being agile. Materiel solutions often require writing requires deep insights. But they aren't built. We have national plans to counter without execution."
    }
  ];

  return (
    <section className="relative" data-testid="section-tools-methodology">
      {/* Header Section */}
      <div className="bg-[#6b7a5d] py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <p className="text-xs uppercase tracking-[0.2em] text-white/70">Section 3</p>
            <div className="flex gap-2">
              <div className="w-2 h-2 rounded-full bg-white/30" />
              <div className="w-2 h-2 rounded-full bg-white" />
              <div className="w-2 h-2 rounded-full bg-white/30" />
            </div>
          </div>
          <h2 className="text-4xl md:text-6xl font-display font-light leading-tight text-white mb-6">
            Tools & Methodology Evolution
          </h2>
          <p className="text-lg text-white/90 max-w-3xl leading-relaxed">
            The evolution of UX/UI design tools mirrors the profession's journey from print adaptation to digital-native thinking. What began as designers using Photoshop to slice images for web pages has transformed into a sophisticated ecosystem of collaborative, cloud-based platforms that enable real-time design systems at scale.
          </p>
        </div>
      </div>

      {/* Content Section - Light Cream Background */}
      <div className="bg-[#f5f2ed] py-20 px-4">
        <div className="max-w-4xl mx-auto space-y-16">
          {/* Insights */}
          {insights.slice(0, 2).map((insight) => (
            <FadeInSection key={insight.number}>
              <div className="flex gap-6 items-start" data-testid={`insight-${insight.number}`}>
                {/* Circled Number */}
                <div 
                  className="flex-shrink-0 w-12 h-12 rounded-full border-2 border-black flex items-center justify-center"
                  data-testid={`number-insight-${insight.number}`}
                >
                  <span className="text-black font-mono text-sm font-bold">
                    {String(insight.number).padStart(2, '0')}
                  </span>
                </div>

                {/* Content */}
                <div className="flex-1 space-y-3">
                  <h4 
                    className="text-xl md:text-2xl font-display font-bold leading-tight text-black"
                    data-testid={`title-insight-${insight.number}`}
                  >
                    {insight.title}
                  </h4>
                  <p 
                    className="text-[15px] leading-[1.8] text-justify text-black/90"
                    data-testid={`description-insight-${insight.number}`}
                  >
                    {insight.content}
                  </p>
                </div>
              </div>
            </FadeInSection>
          ))}

          {/* Graph Section - Insight 3 */}
          <FadeInSection>
            <div className="space-y-8" data-testid="insight-3">
              <ToolsEvolutionScatter />
            </div>
          </FadeInSection>

          {/* Remaining Insights */}
          {insights.slice(2).map((insight) => (
            <FadeInSection key={insight.number}>
              <div className="flex gap-6 items-start" data-testid={`insight-${insight.number}`}>
                {/* Circled Number */}
                <div 
                  className="flex-shrink-0 w-12 h-12 rounded-full border-2 border-black flex items-center justify-center"
                  data-testid={`number-insight-${insight.number}`}
                >
                  <span className="text-black font-mono text-sm font-bold">
                    {String(insight.number).padStart(2, '0')}
                  </span>
                </div>

                {/* Content */}
                <div className="flex-1 space-y-3">
                  <h4 
                    className="text-xl md:text-2xl font-display font-bold leading-tight text-black"
                    data-testid={`title-insight-${insight.number}`}
                  >
                    {insight.title}
                  </h4>
                  <p 
                    className="text-[15px] leading-[1.8] text-justify text-black/90"
                    data-testid={`description-insight-${insight.number}`}
                  >
                    {insight.content}
                  </p>
                </div>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
}

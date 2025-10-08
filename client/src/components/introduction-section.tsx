export default function IntroductionSection() {
  return (
    <section 
      id="introduction" 
      className="py-12 px-6 sm:py-16 sm:px-8 lg:py-20 lg:px-12 bg-[#f5f2ed]" 
      data-testid="section-introduction"
    >
      <div className="max-w-5xl mx-auto">
        <div className="space-y-12">
          {/* Section Label */}
          <div>
            <span 
              className="text-[#6b6b6b] uppercase tracking-[0.2em] text-xs sm:text-sm font-sans font-medium" 
              data-testid="label-introduction"
            >
              Introduction
            </span>
          </div>
          
          {/* Headline */}
          <div className="space-y-6">
            <h2 
              className="font-display text-3xl sm:text-4xl lg:text-5xl font-normal leading-[1.1] text-black" 
              data-testid="text-intro-heading"
            >
              As professionals, we are in an undeclared state of confusion.
            </h2>
            
            {/* Horizontal separator line */}
            <div className="w-full h-[1px] bg-black/20" />
          </div>

          {/* Body Text */}
          <div className="space-y-6 text-black/90">
            <p className="text-sm sm:text-base leading-[1.8] text-justify">
              Around 2025, Indian managers claim 20-25 years of UX/UI experience while staying in India itself. Hiring managers validate impossible professional histories, and senior leaders inflate their backgrounds by citing roles that didn't exist. We have interns with more authentic experience than self-proclaimed "experts," 1,000+ false LinkedIn profiles claiming timelines that predate UX team formations in their own companies, and an unprecedented proliferation of fabricated credentials.
            </p>

            <p className="text-sm sm:text-base leading-[1.8] text-justify">
              This is a hot war against professional integrity. The industry has empirically lost credibility. We must prove with mathematical precision why these claims are impossible—particularly for managers who stayed in India, working at companies like TCS, Wipro, Infosys, Tech Mahindra, Google India, Apple India, and Microsoft India.
            </p>

            <p className="text-sm sm:text-base leading-[1.8] text-justify">
              We have a peer problem: Geographic and timeline impossibility. UX/UI in India began experimentally in the late 1990s during the Y2K boom, with formal roles emerging around 2000. Maximum possible experience for someone starting in India: 25 years (2000-2025), but only for pioneers in experimental roles—statistically rare. For managers claiming 20-25 years at Infosys, Wipro, or Google India, where UX teams formed in 2014, 2014, and 2008 respectively, the mathematics proves impossibility. In 1993, Don Norman was the only person globally with "User Experience" in his job title. Today, thousands of Indian professionals claim experience predating not just the field's global existence, but India's regional adoption.
            </p>

            <p className="text-sm sm:text-base leading-[1.8] text-justify">
              Given these claims about 20-25 years of UX experience in Indian service-based companies and tech giants operating in India, it would be reasonable to wonder: what does the data actually prove?
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

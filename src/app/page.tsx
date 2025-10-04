import BenefitsSection from "./(sections)/benefits-section";
import HeroSection from "./(sections)/hero-section";
import OrganicSystemSection from "./(sections)/organic-system-section";
import WhatYouLearnSection from "./(sections)/what-you-learn-section";

export default function Home() {
  return (
    <div>
      <HeroSection/>
      <OrganicSystemSection/>
      <WhatYouLearnSection/>
      <BenefitsSection/>
    </div>
  )
}

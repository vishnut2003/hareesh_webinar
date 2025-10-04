import BenefitsSection from "./(sections)/benefits-section";
import BonusSection from "./(sections)/bonus-section";
import HeroSection from "./(sections)/hero-section";
import MeetCoachSection from "./(sections)/meet-coach";
import OrganicSystemSection from "./(sections)/organic-system-section";
import StillNoClints from "./(sections)/still-no-clients";
import TBMCommunitySection from "./(sections)/tbm-community";
import WhatYouLearnSection from "./(sections)/what-you-learn-section";

export default function Home() {
  return (
    <div>
      <HeroSection/>
      <OrganicSystemSection/>
      <WhatYouLearnSection/>
      <BenefitsSection/>
      <StillNoClints/>
      <BonusSection/>
      <MeetCoachSection/>
      <TBMCommunitySection/>
    </div>
  )
}

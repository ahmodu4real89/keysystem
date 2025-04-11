import React from 'react'
import BrandSection from './pages/HeroSection'
import TrustedConsultantSection from './pages/TrustedConsultantSection'
import HeroSection from './pages/BrandSection'
import VisionMissionSection from './pages/VisionMissionSection'
import CertificateSection from './pages/CertificateSection'
import TrustSection from './pages/TrustSection'
import OurProcess from './pages/OurProcess'
import OurPartners from './pages/OurPartner'
import GetStartedSection from './pages/GetStartedSection'
function Page() {
  return (
    <>
      <BrandSection/>
      <TrustedConsultantSection />
      <HeroSection />
      <VisionMissionSection />
      <CertificateSection />
      <TrustSection />
      <OurProcess />
      <OurPartners />
      <GetStartedSection />
    </>
  )
}

export default Page
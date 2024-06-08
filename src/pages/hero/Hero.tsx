
import Nav from '../../components/Hero/header/Nav'
import HeroDescription from '../../components/Hero/hero-description/HeroDescription'
import HeroImage from '../../components/Hero/heroImage/HeroImage'
import AboutPage from '../about/AboutPage'
import BrandingPage from '../branding/BrandingPage'
import GrowOnlinePage from '../growonline/GrowOnlinePage'
import PromotePage from '../promote/PromotePage'
import ServicePage from '../service/ServicePage'

export default function Hero() {
  return (
    <div className=' w-full font-poppins min-h-dvh '>
       <Nav />
       <HeroDescription />
       <HeroImage />
       <AboutPage />
       <ServicePage />
       <PromotePage />
       <BrandingPage />
       <GrowOnlinePage />

    </div>
  )
}

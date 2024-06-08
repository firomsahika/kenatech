
import Nav from '../../components/Hero/header/Nav'
import HeroDescription from '../../components/Hero/hero-description/HeroDescription'
import HeroImage from '../../components/Hero/heroImage/HeroImage'

export default function Hero() {
  return (
    <div className='bg-primary w-full font-poppins min-h-dvh '>
      <Nav />
      <HeroDescription />
       <HeroImage />
    </div>
  )
}

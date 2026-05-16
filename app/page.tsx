import Nav from '@/components/Nav'
import Cover from '@/components/sections/Cover'
import About from '@/components/sections/About'
import Services from '@/components/sections/Services'
import Work from '@/components/sections/Work'
import Canva from '@/components/sections/Canva'
import Reels from '@/components/sections/Reels'
import AITools from '@/components/sections/AITools'
import Process from '@/components/sections/Process'
import Reviews from '@/components/sections/Reviews'
import Contact from '@/components/sections/Contact'

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Cover />
        <About />
        <Services />
        <Work />
        <Canva />
        <Reels />
        <AITools />
        <Process />
        <Reviews />
        <Contact />
      </main>
    </>
  )
}

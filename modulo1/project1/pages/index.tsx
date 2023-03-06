import Contact from "@/components/Contact"
import Featured from "@/components/Featured"
import Finisher from "@/components/Finisher"
import Hero from "@/components/Hero"
import Services from "@/components/Services"
import Team from "@/components/Team"
import Layout from '../components/Layout'


const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">

    <Hero />
    <Services/>
    <Featured/>
    <Team/>
    <Finisher/>
    <Contact/>
   
  </Layout>
)

export default IndexPage













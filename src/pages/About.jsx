import BotonAbajo from "@/components/BotonAbajo";
import Parallax from "@/components/Parallax/Parallax";
import AboutComponent from '../components/About/AboutComponent'


function About() {
  return (
    <div className="relative overflow-hidden bg-[#031527]">
    <Parallax/>
    <BotonAbajo/>
    <AboutComponent/>
    </div>
  )
}

export default About
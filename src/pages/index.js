import BotonAbajo from "@/components/BotonAbajo";
import Carrousel from "@/components/Carrousel/Carrousel";
import CarrouselSlide from "@/components/Carrousel/CarrouselSlide";
import Parallax from "@/components/Parallax/Parallax";


export default function Home() {

  
  return (
  <div className="relative overflow-hidden bg-[#031527]">
    <Parallax/>
    <BotonAbajo/>
    <Carrousel/>
    </div>
  )
}

import React, { useEffect, useState } from "react";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

export const preguntasFrecuentes = [
  {
    pregunta:
      "¿Cuáles son los requisitos para participar en una aventura extrema?",
    respuesta:
      "Los requisitos pueden variar según la actividad, pero generalmente incluyen buena condición física y cumplir con ciertas restricciones de edad y salud.",
  },
  {
    pregunta: "¿Cómo puedo reservar una aventura?",
    respuesta:
      "Puedes reservar tu aventura en nuestra página web o visitando nuestra tienda física. También puedes llamar a nuestro equipo de reservas para obtener ayuda.",
  },
  {
    pregunta: "¿Qué equipo necesito llevar para una aventura de escalada?",
    respuesta:
      "Para la escalada, se recomienda llevar casco, arnés, cuerdas y calzado adecuado. Nuestros guías te brindarán más detalles antes de la actividad.",
  },
  {
    pregunta: "¿Qué tipo de aventuras acuáticas ofrecen?",
    respuesta:
      "Ofrecemos rafting, kayak, buceo y otras emocionantes aventuras acuáticas. Te proporcionaremos todo el equipo necesario para disfrutar de forma segura.",
  },
  {
    pregunta: "¿Cuáles son los destinos más populares para aventuras extremas?",
    respuesta:
      "Algunos de nuestros destinos más populares incluyen montañas, cañones, ríos y bosques. Nuestros guías te ayudarán a elegir la mejor aventura según tus preferencias.",
  },
];

function Faqs() {
  const [preguntaActivaHover, setPreguntaActivaHover] = useState(null);
  const [preguntaActiva, setPreguntaActiva] = useState(null);


  

  return (
    <div
      className="flex flex-col w-full  justify-center items-center
    gap-y-2
    "
    >
      <h3 className="font-MelbergHeavy text-xl">FAQS</h3>
      <div
        className="w-[90%] flex flex-col items-center gap-y-2
    bg-black/20 rounded-[25px] p-4
    "
      >
        {preguntasFrecuentes.map((item, index) => (
          <div key={index}
          className="w-full rounded-xl border-white border-[1px]
          flex flex-col 
          "
          >

          <div 
            className="
       flex flex-row justify-between items-center 
       group cursor-pointer 
       "
            onMouseOver={() => setPreguntaActivaHover(item)}
            onMouseLeave={() => setPreguntaActivaHover(null)}
            onClick={()=>{setPreguntaActiva(item)}}
          >
            <span className="font-MelbergRegular uppercase py-2 ml-2">
              {item.pregunta}
            </span>
            <BsFillArrowRightCircleFill
              className={`${preguntaActivaHover == item || preguntaActiva == item ? "rotate-90": "rotate-0"} transition-all duration-300 text-[30px] mr-1`}
            />
          </div>
          
           
            <div className={ `${preguntaActiva == item? "font-MelbergRegular uppercase py-2 ml-2":"hidden"} transition-all duration-300`}>
              {item.respuesta}
              </div>
          
          </div>
        ))}
      </div>
    </div>
  );
}

export default Faqs;

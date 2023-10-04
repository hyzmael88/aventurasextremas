import React, { useEffect, useState } from "react";
import { urlForImage } from "../../../sanity/lib/image";

function Product({ item }) {
  console.log(item);
  const [productoActivoHover, setProductoActivoHover] = useState(null);
  const [productoActivo, setProductoActivo] = useState(null);
  const [currentImage, setCurrentImage] = useState(
    urlForImage(item.image[0].asset._ref)
  );

  useEffect(() => {
    let intervalIds = [];

    if (productoActivoHover === item && productoActivoHover.image.length > 0) {
      item.image.forEach((image, i) => {
        const imageRef = image.asset._ref;
        const intervalId = setInterval(() => {
          setCurrentImage(urlForImage(imageRef));
        }, (i + 1) * 750); // Cambiado a 2000 ms para que cambie cada 2 segundos
        intervalIds.push(intervalId);
      });
    }

    return () => {
      // Limpiar los intervalos cuando el componente se desmonte o cuando el mouse se va
      intervalIds.forEach((id) => clearInterval(id));
      setCurrentImage(urlForImage(item.image[0].asset._ref));
    };
  }, [productoActivoHover, item]);

  return (
    <div
      className="w-full h-full flex flex-col
     justify-center items-center cursor-pointer"
      onMouseOver={() => setProductoActivoHover(item)}
      onMouseLeave={() => setProductoActivoHover(null)}
      onClick={() => {
        setProductoActivo(item);
      }}
    >
      <div
        className="bg-white/70 rounded-[35px] w-[90%] h-[500px] 
         flex flex-col justify-center items-center"
      >
        <img
          src={currentImage}
          alt=""
          className={`${
            productoActivoHover == item
              ? "w-[250px] h-[350px]"
              : "w-[200px] h-[300px] "
          }  transition-all duration-300 object-contain `}
        />
        <div
          className="w-[90%] h-[30px] flex flex-col justify-between items-center
                text-center mt-4
                 text-black uppercase"
        >
          <h2
            className={`${
              productoActivoHover == item || productoActivo == item
                ? "text-3xl"
                : "text-2xl"
            } font-MelbergHeavy transition-all duration-300 `}
          >
            {item.name}
          </h2>
          <span
            className={`${
              productoActivoHover == item || productoActivo == item
                ? "text-2xl"
                : "text-xl"
            }  transition-all duration-300 `}
          >
            ${item.sizes[0].price}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Product;

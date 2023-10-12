import React, { useEffect, useState } from "react";
import { urlForImage } from "../../../sanity/lib/image";
import { BsArrowRight } from "react-icons/bs";
import { FaShoppingCart } from "react-icons/fa";
import { LuShare } from "react-icons/lu";
import { AppContext } from "@/context/StateContext";
import { RxCross1 } from "react-icons/rx";

function Product({ item, productoActivo, setProductoActivo }) {
  const [productoActivoHover, setProductoActivoHover] = useState(null);
  const [currentImage, setCurrentImage] = useState(
    urlForImage(item.image[0].asset._ref)
  );

  const {setCarrito, carrito} = AppContext()
  console.log(carrito)

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

  const [newAr, setNewAr] = useState("");

  useEffect(() => {
    if (productoActivo && item.file) {
      const ar = item.file.asset._ref;
      setNewAr(
        ar
          .replace("file-", "https://cdn.sanity.io/files/7r6tj0y7/production/")
          .replace("-glb", ".glb")
      );
    }
  }, [productoActivo, item.file]);

  return (
    <div
      className="w-full h-full flex flex-col
     justify-center items-center  "
    >
      
      <div
        className={`bg-white/70 rounded-[35px] w-[90%] h-[90%] xl:h-[500px] relative  
        ${
          productoActivo
            ? item.file
              ? " flex flex-col-reverse h-full justify-center items-center first-letter  xl:grid xl:grid-cols-3 place-items-center"
              : "flex flex-col-reverse h-full justify-center items-center first-letter xl:grid xl:grid-cols-2 place-items-center"
            : "flex flex-col"
        } 
        
        justify-center items-center mt-4 relative z-20`}
      >
        {
          productoActivo &&

        <div
        onClick={()=>console.log("toque")}
        className="absolute bg-black/70 p-4 -right-2 -top-4 rounded-full z-50 cursor-pointer ">
          <RxCross1 className="text-sm "
          
          />

        </div>
        }
        <div
          className=" flex flex-col justify-center items-center cursor-pointer "
          onMouseOver={() => setProductoActivoHover(item)}
          onMouseLeave={() => setProductoActivoHover(null)}
        >
          <img
            src={currentImage}
            alt=""
            className={`
          ${
            productoActivo
              ? "w-[70%] h-[250px] xl:w-[70%] xl:h-[450px]"
              : "w-full h-[250px] xl:w-[200px] xl:h-[300px]   "
          }
            ${productoActivoHover == item && productoActivo && "w-[70%]"}  
            
          ${
            productoActivoHover == item &&
            !productoActivo &&
            "w-full h-[250px] xl:w-[250px] xl:h-[350px] "
          }  
         
          
          

          transition-all duration-300 object-contain `}
          />
        </div>
        <div
          className={`w-[90%] h-[300px] flex flex-col  items-center
                text-center mt-4
                 text-black uppercase 
                 {
                  ${
                    productoActivo
                      ? "justify-center order-first"
                      : "justify-between order-last"
                  }
                }
                
                 `}
        >
          <h2
            className={`${
              productoActivoHover == item || productoActivo == item
                ? "text-2xl xl:text-3xl"
                : "text-lg xl:text-2xl"
            } 
            font-MelbergHeavy transition-all duration-300 text-center `}
          >
            {item.name}
          </h2>
          {productoActivo && (
            <div className="font-MelbergRegular ">
              <p className="text-xl">{item.details}</p>
              <p className="text-xl ">{item.description}</p>
              <div className="w-full flex flex-col items-center gap-y-2">
                <button
                  className=" border border-white/50
             rounded-[25px] w-[200px]  py-1 mt-4 transition-all duration-300 flex items-center justify-center 
            bg-black text-white
            overflow-hidden hover:border-accent group
            "
                >
                  <span
                    className="group-hover:-translate-y-[120%] group-hover:opacity-0
              transition-all duration-500 uppercase
              "
                  >
                    Share
                  </span>
                  <LuShare
                    className="-translate-y-[120%] opacity-0 group-hover:flex 
              group-hover:-translate-y-0 group-hover:opacity-100 transition-all
              duration-300 absolute text-[22px]

              "
                  />
                </button>
                <button
                  className=" border border-white/50
             rounded-[25px] w-[200px] mb-4 py-1 transition-all duration-300 flex items-center justify-center 
            bg-black text-white
            overflow-hidden hover:border-accent group
            "
            onClick={()=>setCarrito([...carrito, item])}
                >
                  <span
                    className="group-hover:-translate-y-[120%] group-hover:opacity-0
              transition-all duration-500 uppercase
              "
                  >
                    add to cart
                  </span>
                  <FaShoppingCart
                    className="-translate-y-[120%] opacity-0 group-hover:flex 
              group-hover:-translate-y-0 group-hover:opacity-100 transition-all
              duration-300 absolute text-[22px]

              "
                  />
                </button>
              </div>
            </div>
          )}
          <span
            className={`${
              productoActivoHover == item || productoActivo == item
                ? "text-xl xl:text-2xl"
                : "text-lg xl:text-xl"
            }  transition-all duration-300
            font-semibold
            `}
          >
            ${item.sizes[0].price}
          </span>
        </div>
        {productoActivo && item.file && (
          <div
            className={`
        ${
          productoActivo
            ? "flex flex-col items-center w-[350px] h-[300px] xl:w-[350px] xl:h-[500px] relative"
            : "hidden"
        }
        `}
          >
            <model-viewer
              className="center-block"
              style={{ width: "100%", height: "100%" }}
              bounds="tight"
              enable-pan
              src={newAr}
              ar
              ar-modes="scene-viewer webxr quick-look"
              camera-controls
              poster="poster.jpeg"
              shadow-intensity="2"
              exposure="1.19"
              auto-rotate
            ></model-viewer>
          </div>
        )}
      </div>
    </div>
  );
}

export default Product;

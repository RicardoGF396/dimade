import Logo from "../assets/LogoDimade.png"
import Menu from "../assets/menu.svg";
import Close from "../assets/close.svg";
import BotonContacto from "../assets/BotonContacto.svg";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const isScreenBig = useMediaQuery({ minWidth: 1024 });

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full relative z-50">
      <nav className="w-full p-6 flex items-center justify-between">
        <img className="w-[220px]" src={Logo} alt="logo dimade" />
        {!isScreenBig && (
          <img
          onClick={toggleMenu}
          className="cursor-pointer"
          src={Menu}
          alt="menu"
        />
        )}

        {isScreenBig && (
          <>
            <ul className="flex gap-x-9 flex-row">
              <a href="#">
                <li className="text-base font-medium">Inicio</li>
              </a>
              <a href="#nosotros">
                <li className="text-base font-medium">Nosotros</li>
              </a>
              <a href="#servicios">
                <li className="text-base font-medium">Servicios</li>
              </a>
              <a href="#proyectos">
                <li className="text-base font-medium">Proyectos</li>
              </a>
              <a href="#contacto">
                <li className="text-base font-medium">Contacto</li>
              </a>
            </ul>
            <a href="mailto:info@dimade.com">
              <img src={BotonContacto} alt="Contacto" />
            </a>
          </>
        )}
      </nav>

      <div
        className={`w-full h-screen bg-white flex absolute top-0 transition-all duration-500 ease-in-out ${
          isOpen ? "left-0" : "left-[-100%]"
        } `}
      >
        <img
          onClick={toggleMenu}
          className="absolute top-8 right-8"
          src={Close}
          alt="close"
        />
        <ul className="flex gap-y-9 flex-col pl-8 mt-24">
          <a href="#">
            <li className="text-5xl">Inicio</li>
          </a>
          <a href="#nosotros">
            <li className="text-5xl">Nosotros</li>
          </a>
          <a href="#servicios">
            <li className="text-5xl">Servicios</li>
          </a>
          <a href="#proyectos">
            <li className="text-5xl">Proyectos</li>
          </a>
          <a href="#contacto">
            <li className="text-5xl">Contacto</li>
          </a>
          <p className="">
            <span className="font-medium">Contacto</span> <br />
            Hernando de Martel #63-A Col. La Luz C.P. 47425 Lagos de Moreno,
            Jal.
          </p>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;

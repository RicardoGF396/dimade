import Logo from "/assets/LogoDimade_PNG.png";
import Menu from "/assets/menu.svg";
import Chevron from "/assets/chevron.svg";
import Close from "/assets/close.svg";
import BotonContacto from "/assets/BotonContacto.svg";
import Intranet from "/assets/intranet.svg";
import { useEffect, useRef, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { services } from "../mocks/services";
import useServicesStore from "../hooks/store.js";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const isScreenBig = useMediaQuery({ minWidth: 1024 });
  const [isSticky, setIsSticky] = useState(false);
  const [showServices, setShowServices] = useState(false);
  const servicesRef = useRef(null);

  const { setService } = useServicesStore();

  const toggleMenu = () => {
    if (isOpen) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const isSticky = scrollPosition > 0;
      setIsSticky(isSticky);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.documentElement.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "";
    }
  }, [isOpen]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        servicesRef.current &&
        !servicesRef.current.contains(e.target) &&
        e.target.getAttribute("data-service-button") !== "true" &&
        !e.target.closest(".service-dropdown")
      ) {
        setShowServices(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className={`w-full relative z-50 ${isSticky ? "sticky top-0" : ""}`}>
      <nav
        className={`w-full p-6 flex items-center justify-between ${
          isSticky ? "bg-white shadow-lg" : ""
        }`}
      >
        <img
          className={`duration-100 ${isSticky ? "w-[100px]" : "w-[180px]"}`}
          src={Logo}
          alt="logo dimade"
        />
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
              <div className="relative service-dropdown">
                <button
                  ref={servicesRef}
                  onClick={() => setShowServices(!showServices)}
                  className="flex items-center gap-x-2 cursor"
                  type="button"
                  data-service-button="true"
                >
                  <li className="text-base font-medium">Servicios</li>
                  <img className="w-5" src={Chevron} alt="chevron" />
                </button>

                {showServices && (
                  <div className="absolute border translate-x-[-20%] top-8 bg-white w-[300px] h-[300px] shadow-md px-2 rounded-md py-2 overflow-y-auto flex flex-col">
                    {services.map((service) => (
                      <a
                        href="#servicios"
                        key={service.id}
                        onClick={() => {
                          setShowServices(false);
                          setService(service.name);
                        }}
                        className="text-base text-slate-800 px-2 py-1 rounded-md hover:bg-slate-100 text-left"
                      >
                        {service.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>

              <a href="#proyectos">
                <li className="text-base font-medium blend">Proyectos</li>
              </a>
              <a href="#contacto">
                <li className="text-base font-medium blend">Contacto</li>
              </a>
            </ul>
            <div className="flex gap-x-2 items-center">
              <a href="mailto:hola@dimade.com.mx">
                <img src={BotonContacto} alt="Contacto" />
              </a>
              <a
                href="https://mail.hostinger.com/"
                target="_blank"
                className="p-3 bg-white rounded-full hover:bg-slate-100"
                rel="noreferrer"
              >
                <img className="w-6 h-6" src={Intranet} alt="intranet" />
              </a>
            </div>
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
          className="absolute top-8 right-8 cursor-pointer"
          src={Close}
          alt="close"
        />
        <ul className="flex gap-y-9 flex-col pl-8 mt-24">
          <a onClick={toggleMenu} href="#">
            <li className="text-5xl">Inicio</li>
          </a>
          <a onClick={toggleMenu} href="#nosotros">
            <li className="text-5xl">Nosotros</li>
          </a>
          <a onClick={toggleMenu} href="#servicios">
            <li className="text-5xl">Servicios</li>
          </a>
          <a onClick={toggleMenu} href="#proyectos">
            <li className="text-5xl">Proyectos</li>
          </a>
          <a onClick={toggleMenu} href="#contacto">
            <li className="text-5xl">Contacto</li>
          </a>
          <p className="">
            <span className="font-medium">Contacto</span> <br />
            Hernando de Martel #63-A Col. La Luz C.P. 47420 Lagos de Moreno,
            Jal.
          </p>
          <a
            href="https://mail.hostinger.com/"
            target="_blank"
            className="p-3 bg-white rounded-full hover:bg-slate-100 flex gap-x-2"
            rel="noreferrer"
          >
            <img className="w-6 h-6" src={Intranet} alt="intranet" />
            Intranet
          </a>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;

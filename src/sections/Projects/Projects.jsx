import Project from "./Project";
import Drenaje from "../../../public/assets/imgDrenaje.svg";
import Valvula from "../../../public/assets/imgValvula.svg";
import Filtracion from "../../../public/assets/imgFiltraciones.svg";
import Acero from "../../../public/assets/imgAcero.svg";
import Rancho from "../../../public/assets/imgRancho.svg";
import Cisterna from "../../../public/assets/imgCisterna.svg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useMediaQuery } from "react-responsive";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Projects() {
  const isScreenBig = useMediaQuery({ minWidth: 425 });

  return (
    <div
      id="proyectos"
      className="mt-[96px] px-5 xl:px-10 w-full flex justify-center items-center overflow-hidden"
    >
      <div className="max-w-[1440px]">
        <p className="mx-5 text-gray-400 font-medium">Proyectos</p>
        <h2 className="mx-5 font-semibold text-[#1E1E1E] text-3xl lg:text-4xl mb-8">
          Construyendo un Futuro Sólido
        </h2>

        {isScreenBig ? (
          <div className="flex items-center">
            <div className="w-full">
              <Carousel
                showThumbs={true}
                showArrows={true}
                infiniteLoop={true}
                centerMode={true}
                draggable={true}
                showStatus={false}
                centerSlidePercentage={33.33}
                swipeable={true} // Habilitar desplazamiento con el mouse
              >
                <Project img={Drenaje} />
                <Project img={Filtracion} />
                <Project img={Acero} />
                <Project img={Rancho} />
                <Project img={Valvula} />
                <Project img={Cisterna} />
              </Carousel>
            </div>
          </div>
        ) : (
          <div className="w-screen overflow-hidden">
            <Slider
              dots={true}
              arrows={true}
              infinite={true}
              slidesToShow={1}
              centerMode={true}
              draggable={true}
            >
              <Project img={Drenaje} />
              <Project img={Filtracion} />
              <Project img={Acero} />
              <Project img={Rancho} />
              <Project img={Valvula} />
              <Project img={Cisterna} />
            </Slider>
          </div>
        )}
      </div>
    </div>
  );
}

export default Projects;

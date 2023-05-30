import { useMediaQuery } from "react-responsive";
import bannerMobile from "../assets/dimade mobile.jpg";
import bannerDesktop from "../assets/dimade-desktop.jpg";
import banner2 from "../assets/banner2.webp";
import banner3 from "../assets/banner3.webp";
import Tepatitlan from "../assets/morelos.png";
import Lagos from "../assets/Lagos.png";
import Gto from "../assets/Gto.png";
import Zapotanejo from "../assets/zapotanejo.png";
import Bachoco from "../assets/bachoco.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Hero() {
  const isScreenBig = useMediaQuery({ minWidth: 1024 });

  const slides = [
    <img className="p-4" src={Tepatitlan} key={1} />,
    <img className="p-4" src={Lagos} key={2} />,
    <img className="p-4" src={Gto} key={3} />,
    <img className="p-4" src={Zapotanejo} key={4} />,
    <img className="p-4" src={Bachoco} key={5} />,
  ];

  return (
    <div id="#">
      <div className="w-full flex justify-center items-center flex-col lg:flex-row-reverse lg:justify-between  ">
        <div>
          {isScreenBig ? (
            <div className=" w-[50vw] h-[110vh] lg:-mt-[98px] overflow-hidden">
              <Slider
                infinite={true}
                slidesToScroll={1}
                slidesToShow={1}
                autoplay={true}
                autoplaySpeed={2000}
              >
                <img src={bannerDesktop} alt="image"/>
                <img className="w-full h-[110vh] object-cover " src={banner2} alt="image"/>
                <img src={banner3} alt="image"/>
              </Slider>
            </div>
          ): (
            <img
            className="w-[342px] "
            src={isScreenBig ? bannerDesktop : bannerMobile}
            alt="banner-mobile-dimade"
          />
          )}
        </div>

        <div className="mt-8 px-6  lg:flex lg:justify-center lg:w-[50vw] lg:h-[90vh]  lg:items-center">
          <div className="lg:w-[524px] lg:-mt-12">
            <h1 className="font-semibold text-4xl lg:text-6xl">
              Construyendo juntos, forjando un futuro sólido.
            </h1>
            <p className="my-6">
              DIMADE es una empresa 100% Mexicana, dedicada a la Industria de la
              Construcción en obra privada y publica.
            </p>
            <a href="mailto:info@dimade.com" className="font-medium text-white bg-[#1e1e1e] px-8 py-4 mt-4">
              Contáctanos
            </a>
          </div>
        </div>
      </div>
      {/* Empresas */}
      {isScreenBig ? (
        <div className="flex flex-row justify-center mt-12">
          <div className="w-[80%] flex items-center justify-between">
            <img src={Tepatitlan} alt="tepatitlan morelos" />
            <img src={Lagos} alt="Lagos" />
            <img src={Gto} alt="Guanajuato" />
            <img src={Zapotanejo} alt="Zapotanejo" />
            <img src={Bachoco} alt="Bachoco" />
          </div>
        </div>
      ) : (
        <div className="mt-12 w-full overflow-x-hidden">
          <Slider
            dots={true}
            infinite={true}
            slidesToShow={2}
            slidesToScroll={1}
            autoplay={true}
            speed={2000}
            autoplaySpeed={2000}
            cssEase="linear"
            className="gap-x-4"
          >
            {slides.map((slide) => slide)}
          </Slider>
        </div>
      )}
    </div>
  );
}

export default Hero;

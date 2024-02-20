import Construyendo from "../../assets/construyendo.png";
import ListItem from "./ListItem";
import { services } from "../../mocks/services";
import useServicesStore from "../../hooks/store";

function Services() {
  const { service, setService} = useServicesStore();
  // const [service, setService] = useState(serviceStore);

  return (
    <div className="w-full flex justify-center">
      <div
        id="servicios"
        className="px-5 mt-[96px] flex justify-center items-center w-[1360px]"
      >
        <div className="max-w-[1440px]">
          <p className="text-gray-400 font-medium">Servicios</p>
          <h2 className="font-semibold text-[#1E1E1E] text-3xl lg:text-4xl">
            {service}
          </h2>
          <p className="text-slate-700 py-1">
            {services.map((serviceItem) => {
              if (serviceItem.name == service) {
                return serviceItem.descripcion;
              }
            })}
          </p>
          <div className="my-4">
            {services.map((serviceItem) => (
              <button
                className={`px-3 py-1 border text-sm rounded-full mr-2 mb-2 hover:bg-slate-100 hover:text-black ${
                  service == serviceItem.name
                    ? "bg-slate-900 text-white font-medium"
                    : ""
                }`}
                key={serviceItem.id}
                onClick={() => setService(serviceItem.name)}
              >
                {serviceItem.name}
              </button>
            ))}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 w-full my-4">
              {services.map((serviceItem) => {
                if (serviceItem.name == service) {
                  return serviceItem.images.map((image, index) => (
                    <img
                      className="object-cover h-[300px] lg:h-[500px] w-full rounded-md"
                      key={index}
                      src={image}
                    />
                  ));
                }
              })}
            </div>
          </div>

          {/* Otros servicios */}
          <div className="mt-12 lg:grid lg:grid-cols-2 lg:mt-16 gap-x-4">
            <div className="flex w-full justify-center ">
              <img
                className="lg:w-[600px] object-cover "
                src={Construyendo}
                alt="construyendo"
              />
            </div>
            <div>
              <h2 className="font-semibold text-[#1E1E1E] text-3xl lg:text-4xl mt-6 lg:w-[475px] ">
                Además contamos con otros servicios
              </h2>
              <p className="text-gray-700 mt-2 lg:w-[550px] ">
                {" "}
                La calidad, el compromiso y la innovación se unen para crear
                obras excepcionales.{" "}
              </p>

              <div className="lg:flex lg:justify-between">
                <div className="mt-8">
                  <p className="font-medium text-2xl text-[#1e1e1e] mb-3">
                    Obra cívica y mecánica
                  </p>
                  <div className="flex flex-col gap-y-2">
                    <ListItem title="Construcción de Gasoducto" />
                    <ListItem title="Construcción de City Gate" />
                    <ListItem title="Cimentaciones" />
                    <ListItem title="Estructuras de Concreto y Acero" />
                    <ListItem title="Acabados" />
                    <ListItem title="Edificaciones Residenciales" />
                    <ListItem title="Herrería" />
                    <ListItem title="Impermeabilizaciones" />
                    <ListItem title="Infraestructura urbana" />
                    <ListItem title="Señalización" />
                    <ListItem title="Cunetas" />
                    <ListItem title="Deshierbe" />
                  </div>
                </div>

                <div className="mt-8">
                  <p className="font-medium text-2xl text-[#1e1e1e] mb-3">
                    Obra pública
                  </p>
                  <div className="flex flex-col gap-y-2">
                    <ListItem title="Líneas de agua" />
                    <ListItem title="Colectores sanitarios" />
                    <ListItem title="Empedrado Ahogado en concreto" />
                    <ListItem title="Supervisión de Obra" />
                    <ListItem title="Asfaltado" />
                    <ListItem title="Concreto hidráulico" />
                    <ListItem title="Canchas de usos múltiples" />
                    <ListItem title="Mantenimiento" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;

import { useEffect } from "react";
import InfoDelDataset from "./InfoDataset";
import InfoGraficasMetricas from "./InfoGraficasMetricas";
import InfoMetricas from "./InfoMetricas";
import ModeloSeleccionado from "./ModeloSeleccionado";
import useFetchDataTabla from "../../hooks/datos/useFetchDataTabla";
import Loader from "../Loader";

export default function Home() {

    const {data, loading, error, fetchDataTabla } = useFetchDataTabla();

    // agregar titulo a la pagina
    useEffect(() => {
        document.title = "Calidad de Vida - Hogar";
    }, []);

    useEffect( () => {
      if(!data){
        fetchDataTabla();
      }
    },[])

    if (loading) return <Loader />;
    if (error) return <div>Error al cargar los datos: {error.message}</div>;

  return (
    <div className="container mt-5">
      <h2 className="mb-4 text-center">Predictor Ingreso del Hogar Calidad de vida</h2>
      <p>Aqui podras obtener toda la informacion del aplicativo </p>
      <InfoDelDataset/>
      <hr className="my-5" />
      <InfoMetricas data={data} /> 
      <hr className="my-5" />
      <InfoGraficasMetricas datos={data}/> 
      <hr className="my-5" />
      <ModeloSeleccionado/>
    </div>
  );
}

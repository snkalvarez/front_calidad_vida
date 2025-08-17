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
        document.title = "Predictor Calidad de Vida - Hogar";
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
      <h2 className="mb-4 text-center">Predictor para estimar el ingreso del Hogar</h2>
      {/** negrita con bootstrap */}
      <span className="fw-bold">Definición calidad de vida</span>
      {/** cursiva con bootstrap */}
      <p>
        La OMS define la calidad de vida como la percepción que tiene una persona de su posición en la vida en el contexto de la cultura y los sistemas de valores en los que vive y en relación con sus objetivos, expectativas, normas y preocupaciones.
        <br/>
        <small>— Fuente: Organización Mundial de la Salud (OMS), <a href="https://www.who.int/tools/whoqol" target="_blank">WHOQOL: Herramientas de evaluación de la calidad de vida</a></small>
      </p>
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


import InfoDelDataset from "./InfoDataset";
import InfoGraficasMetricas from "./InfoGraficasMetricas";
import InfoMetricas from "./InfoMetricas";
import ModeloSeleccionado from "./ModeloSeleccionado";
export default function Home() {
  return (
    <div className="container mt-5">
      <h2 className="mb-4 text-center">Predictor Ingreso del Hogar Calidad de vida</h2>
      <p>Aqui podras obtener toda la informacion del aplicativo </p>
      <InfoDelDataset/>

      <hr className="my-5" />

     { <InfoMetricas/> }

      <hr className="my-5" />

      {<InfoGraficasMetricas/> }
      <hr className="my-5" />
      {<ModeloSeleccionado/>}
    </div>
  );
}

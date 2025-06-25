import { useState } from "react";
import GrafSatisfaccionEdadGrupo from "./GrafSatisfaccionEdadGrupo";
import GrafSatisfaccionEdadProm from "./GrafSatisfaccionEdadProm";
import GrafSatisfaccionGenero from "./GrafSatisfaccionGenero";


const GrafSatisfaccionIngreso = () => {
  const [opcion, setOpcion] = useState("edadGrupo");

  const renderGrafica = () => {
    switch (opcion) {
      case "edadGrupo":
        return <GrafSatisfaccionEdadGrupo />;
      case "edadPromedio":
        return <GrafSatisfaccionEdadProm />;
      case "genero":
        return <GrafSatisfaccionGenero />;
      default:
        return null;
    }
  };

  return (
    <div className="card shadow mb-4">
      <div className="card-header bg-success text-white">
        Ingreso y Satisfacción Laboral
      </div>
      <div className="card-body">
        <div className="mb-3">
          <label htmlFor="selectorGrafica" className="form-label">Selecciona una visualización:</label>
          <select id="selectorGrafica" className="form-select" value={opcion} onChange={(e) => setOpcion(e.target.value)}>
            <option value="edadGrupo">Ingreso y Edad por Grupo según Satisfacción con el trabajo</option>
            <option value="edadPromedio">Ingreso y Edad Promedio según Satisfacción</option>
            <option value="genero">Ingreso según Género y Satisfacción</option>
          </select>
        </div>
        {renderGrafica()}
      </div>
    </div>
  );
};

export default GrafSatisfaccionIngreso;

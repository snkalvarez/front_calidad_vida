// Padres.jsx
import { useState } from 'react';
import GrafEducacionPadres from './GrafEducacionPadres';
import GrafInteraccionPadres from './GrafInteraccionPadres';
import GrafPresenciaPadres from './GrafPresenciaPadres';


const GrafFactoresParentales = () => {
  const [opcion, setOpcion] = useState('presencia');

  const renderGrafico = () => {
    switch (opcion) {
      case 'presencia':
        return <GrafPresenciaPadres />;
      case 'educacion':
        return <GrafEducacionPadres />;
      case 'interaccion':
        return <GrafInteraccionPadres/>;
      default:
        return null;
    }
  };

  return (
    <div>
      <h2>Factores parentales e ingreso del hogar</h2>
      <select onChange={e => setOpcion(e.target.value)} value={opcion}>
        <option value="presencia">Presencia del padre/madre</option>
        <option value="educacion">Educación del padre/madre</option>
        <option value="interaccion">Interacción educación y presencia</option>
      </select>
      <div className="grafico">{renderGrafico()}</div>
    </div>
  );
};

export default GrafFactoresParentales;

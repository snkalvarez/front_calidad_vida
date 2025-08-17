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
        return <GrafInteraccionPadres />;
      default:
        return null;
    }
  };

  return (
    <div className='card shadow mb-4'>
      <div className='card-header text-white' style={{ backgroundColor: '#000051' }}>
        Factores parentales e ingreso del hogar
      </div>
      <div className='card-body'>
        <div className='mb-4'>
          <label htmlFor='selectorGrafica' className='form-label'>Selecciona una visualización:</label>
          <select onChange={e => setOpcion(e.target.value)} value={opcion} className="border rounded px-2 py-1">
            <option value="presencia">Presencia del padre/madre</option>
            <option value="educacion">Educación del padre/madre</option>
            <option value="interaccion">Interacción educación y presencia</option>
          </select>
        </div>
        <div>{renderGrafico()}</div>
      </div>
    </div>
  );
};

export default GrafFactoresParentales;

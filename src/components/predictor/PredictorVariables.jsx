import { useState } from 'react';
const datasetInfo = [
  {
    atributo: "Madre_vive_hogar",
    tipo: "Categorica Nominal",
    descripcion: "¿La madre vive en este hogar?",
    opciones: ["Sí", "No", "Fallecida"]
  },
  {
    atributo: "Padre_vive_hogar",
    tipo: "Categorica Nominal",
    descripcion: "¿El padre vive en este hogar?",
    opciones: ["Sí", "No", "Fallecido"]
  },
  {
    atributo: "Afiliado_seguridad_Social",
    tipo: "Categorica Nominal",
    descripcion: "¿Está afiliado a alguna entidad de seguridad social en salud?",
    opciones: ["Sí", "No", "No sabe / No informa"]
  },
  {
    atributo: "Sexo",
    tipo: "Categorica Nominal Binaria",
    descripcion: "Sexo de la persona",
    opciones: ["Masculino", "Femenino"]
  },
  {
    atributo: "Tuvo_problema_salud",
    tipo: "Categorica Nominal",
    descripcion: "¿Tuvo algún problema de salud en los últimos 30 días?",
    opciones: ["Sí", "No"]
  },
  {
    atributo: "Tiene_enf_cronica",
    tipo: "Categorica Nominal",
    descripcion: "¿Tiene alguna enfermedad crónica diagnosticada?",
    opciones: ["Sí", "No"]
  },
  {
    atributo: "Seguro_med_estudiantil",
    tipo: "Categorica Nominal",
    descripcion: "¿Tiene seguro médico estudiantil?",
    opciones: ["Sí", "No"]
  },
  {
    atributo: "Plan_complementario_EPS",
    tipo: "Categorica Nominal",
    descripcion: "¿Tiene plan complementario de salud con una EPS?",
    opciones: ["Sí", "No"]
  },
  {
    atributo: "Otro_serv_medico",
    tipo: "Categorica Nominal",
    descripcion: "¿Cuenta con otros servicios médicos como ambulancia o asistencia domiciliaria?",
    opciones: ["Sí", "No"]
  },
  {
    atributo: "Medici_prepagada",
    tipo: "Categorica Nominal",
    descripcion: "¿Cuenta con medicina prepagada?",
    opciones: ["Sí", "No"]
  },
  {
    atributo: "Tiene_poliza_hosp_cirugia",
    tipo: "Categorica Nominal",
    descripcion: "¿Tiene póliza de hospitalización o cirugía?",
    opciones: ["Sí", "No"]
  },
  {
    atributo: "Nivel_edu_alto_madre",
    tipo: "Categorica Ordinal",
    descripcion: "Nivel educativo más alto alcanzado por la madre",
    opciones: [
      "Algunos años de primaria",
      "Toda la primaria",
      "Algunos años de secundaria",
      "Toda la secundaria",
      "Uno o más años de técnica o tecnológica",
      "Técnica o tecnológica completa",
      "Uno o más años de universidad",
      "Universitaria completa",
      "Ninguno",
      "No sabe"
    ]
  },
  {
    atributo: "Nivel_edu_alto_padre",
    tipo: "Categorica Ordinal",
    descripcion: "Nivel educativo más alto alcanzado por el padre",
    opciones: [
      "Algunos años de primaria",
      "Toda la primaria",
      "Algunos años de secundaria",
      "Toda la secundaria",
      "Uno o más años de técnica o tecnológica",
      "Técnica o tecnológica completa",
      "Uno o más años de universidad",
      "Universitaria completa",
      "Ninguno",
      "No sabe"
    ]
  },
  {
    atributo: "Estado_salud_es",
    tipo: "Categorica Ordinal",
    descripcion: "Estado general de salud",
    opciones: ["Muy bueno", "Bueno", "Regular", "Malo"]
  },
  {
    atributo: "Puede_ver_cerca_lejos",
    tipo: "Categorica Ordinal",
    descripcion: "¿Puede ver de cerca, lejos o alrededor sin ayuda?",
    opciones: ["No puede hacerlo", "Sí, con mucha dificultad", "Sí, con alguna dificultad", "Sin dificultad"]
  },
  {
    atributo: "Puede_oir",
    tipo: "Categorica Ordinal",
    descripcion: "¿Puede oír la voz o sonidos sin ayuda?",
    opciones: ["No puede hacerlo", "Sí, con mucha dificultad", "Sí, con alguna dificultad", "Sin dificultad"]
  },
  {
    atributo: "Puede_cuidarse_solo",
    tipo: "Categorica Ordinal",
    descripcion: "¿Puede comer, vestirse o bañarse solo sin ayuda?",
    opciones: ["No puede hacerlo", "Sí, con mucha dificultad", "Sí, con alguna dificultad", "Sin dificultad"]
  },
  {
    atributo: "Puede_agarrarmover_obj",
    tipo: "Categorica Ordinal",
    descripcion: "¿Puede agarrar o mover objetos con las manos sin ayuda?",
    opciones: ["No puede hacerlo", "Sí, con mucha dificultad", "Sí, con alguna dificultad", "Sin dificultad"]
  },
  {
    atributo: "Entiende_aprende_tom_deci_mismo",
    tipo: "Categorica Ordinal",
    descripcion: "¿Puede entender, aprender o tomar decisiones solo sin ayuda?",
    opciones: ["No puede hacerlo", "Sí, con mucha dificultad", "Sí, con alguna dificultad", "Sin dificultad"]
  },
  {
    atributo: "Puede_hablar",
    tipo: "Categorica Ordinal",
    descripcion: "¿Puede hablar o conversar sin ayuda?",
    opciones: ["No puede hacerlo", "Sí, con mucha dificultad", "Sí, con alguna dificultad", "Sin dificultad"]
  },
  {
    atributo: "Puede_moverse_caminar",
    tipo: "Categorica Ordinal",
    descripcion: "¿Puede moverse, caminar o subir/bajar escaleras sin ayuda?",
    opciones: ["No puede hacerlo", "Sí, con mucha dificultad", "Sí, con alguna dificultad", "Sin dificultad"]
  },
  {
    atributo: "Satisfaccion_vida",
    tipo: "Numerica Discreta",
    descripcion: "Satisfacción con la vida (0 a 10)",
    opciones: Array.from({ length: 11 }, (_, i) => i.toString())
  },
  {
    atributo: "Nivel_satisfa_trabajo",
    tipo: "Numerica Discreta",
    descripcion: "Satisfacción con el trabajo/actividad (0 a 10)",
    opciones: Array.from({ length: 11 }, (_, i) => i.toString())
  },
  {
    atributo: "Satis_ingreso",
    tipo: "Numerica Discreta",
    descripcion: "Satisfacción con el ingreso actual (0 a 10)",
    opciones: Array.from({ length: 11 }, (_, i) => i.toString())
  },
  {
    atributo: "Percepcion_valor_vida",
    tipo: "Numerica Discreta",
    descripcion: "Percepción de que las cosas en la vida valen la pena (0 a 10)",
    opciones: Array.from({ length: 11 }, (_, i) => i.toString())
  }
];
const modelos = ["XGBoost", "MLPRegressor", "Random Forest"];

const PredictorVariables = ({ onSubmit }) => {
   const [formData, setFormData] = useState({});
  const [modeloSeleccionado, setModeloSeleccionado] = useState(modelos[0]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    onSubmit({ ...formData, modelo: modeloSeleccionado });
  };

  return (
    <div className="card" style={{ height: '650px' }}>
      <div className="card-header bg-primary text-white">
        Predictor
      </div>
      <div className="card-body overflow-auto">
        <p className="text-muted">Ingresa todos los campos para realizar la predicción sobre Ingreso Del Hogar</p>

        {datasetInfo.map((item, index) => (
          <div className="mb-3" key={index}>
            <label className="form-label">{item.descripcion}</label>
            <select className="form-select" name={item.atributo} onChange={handleChange}>
              <option value="">Seleccione una opción</option>
              {item.opciones?.map((opcion, i) => (
                <option key={i} value={opcion}>{opcion}</option>
              ))}
            </select>
          </div>
        ))}

        <div className="d-flex align-items-center gap-2">
          <select className="form-select" value={modeloSeleccionado} onChange={(e) => setModeloSeleccionado(e.target.value)}>
            {modelos.map((modelo, idx) => (
              <option key={idx} value={modelo}>{modelo}</option>
            ))}
          </select>
          <button className="btn btn-success" onClick={handleSubmit}>Enviar</button>
        </div>
      </div>
    </div>
  );
};

export default PredictorVariables;

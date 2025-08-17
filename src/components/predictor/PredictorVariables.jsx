import { useEffect, useState } from "react";
import { Tooltip } from 'bootstrap';

const datasetInfo = [
  {
    atributo: "mother_lives_household",
    tipo: "Categorica Nominal",
    descripcion: "¿La madre vive en este hogar?",
    opciones: { Sí: "Si", No: "No", Fallecida: "Fallecida" },
    ayuda: "Indica si la madre de la persona vive en el hogar actualmente.",
  },
  {
    atributo: "father_lives_household",
    tipo: "Categorica Nominal",
    descripcion: "¿El padre vive en este hogar?",
    opciones: { Sí: "Si", No: "No", Fallecido: "Fallecido" },
    ayuda: "Indica si el padre de la persona vive en el hogar actual.",
  },
  {
    atributo: "health_insurance_affiliation",
    tipo: "Categorica Nominal",
    descripcion:
      "¿Está afiliado a alguna entidad de seguridad social en salud?",
    opciones: { Sí: "Si", No: "No", "No sabe / No informa": "NSNC" },
    ayuda: "Indica si la persona está afiliada a alguna entidad de seguridad social en salud.",
  },
  {
    atributo: "gender",
    tipo: "Categorica Nominal Binaria",
    descripcion: "Sexo de la persona",
    opciones: { Masculino: "Masc", Femenino: "Fem" },
    ayuda: "Indica el sexo de la persona encuestada.",
  },
  {
    atributo: "health_issue_last_30_days",
    tipo: "Categorica Nominal",
    descripcion: "¿Tuvo algún problema de salud en los últimos 30 días?",
    opciones: { Sí: "Si", No: "No" },
    ayuda: "Indica si la persona ha tenido algún problema de salud en los últimos 30 días.",
  },
  {
    atributo: "has_chronic_disease",
    tipo: "Categorica Nominal",
    descripcion: "¿Tiene alguna enfermedad crónica diagnosticada?",
    opciones: { Sí: "Si", No: "No" },
    ayuda: "Indica si la persona tiene alguna enfermedad crónica diagnosticada por un médico.",
  },
  {
    atributo: "student_health_insurance",
    tipo: "Categorica Nominal",
    descripcion: "¿Tiene seguro médico estudiantil?",
    opciones: { Sí: "Si", No: "No" },
    ayuda: "Indica si la persona cuenta con un seguro médico estudiantil.",
  },
  {
    atributo: "eps_complementary_health_plan",
    tipo: "Categorica Nominal",
    descripcion: "¿Tiene plan complementario de salud con una EPS?",
    opciones: { Sí: "Si", No: "No" },
    ayuda: "Indica si la persona tiene un plan complementario de salud con una EPS.",
  },
  // en opciones perminta in input numerico
  {
    atributo: "expenditure_unit_monthly_income",
    tipo: "Numerica Continua",
    descripcion: "Ingreso mensual del hogar (en unidades de gasto)",
    opciones: { min: 0, max: 150000000 },
    ayuda: "Calcula el ingreso mensual por unidad de gasto del hogar. Se obtiene dividiendo el ingreso mensual total entre las unidades de gasto, que ajustan según el número de adultos y niños en la casa.",
  },
  {
    atributo: "current_age",
    tipo: "Numerica Continua",
    descripcion: "Edad actual de la persona (en años)",
    opciones: { min: 13, max: 77 },
    ayuda: "Indica la edad actual de la persona encuestada en años.",
  },
  {
    atributo: "per_capita_income",
    tipo: "Numerica Continua",
    descripcion: "Ingreso per cápita del hogar (en pesos)",
    opciones: { min: 0, max: 150000000 },
    ayuda: "Este valor representa el ingreso promedio mensual disponible para cada persona en el hogar. Se calcula dividiendo el ingreso total mensual del hogar entre el número de personas que lo conforman.",
  },
  {
    atributo: "household_size",
    tipo: "Numerica Continua",
    descripcion: "Tamaño del hogar (número de personas)",
    opciones: { min: 1, max: 18 },
    ayuda: "Indica el número total de personas que viven en el hogar.",
  },
  {
    atributo: "other_health_services",
    tipo: "Categorica Nominal",
    descripcion: "¿Cuenta con otros servicios médicos como ambulancia o asistencia domiciliaria?",
    opciones: { Sí: "Si", No: "No" },
    ayuda: "Indica si la persona cuenta con otros servicios médicos adicionales como ambulancia o asistencia domiciliaria.",
  },
  {
    atributo: "private_health_insurance",
    tipo: "Categorica Nominal",
    descripcion: "¿Cuenta con medicina prepagada?",
    opciones: { Sí: "Si", No: "No" },
    ayuda: "Indica si la persona tiene un seguro de salud privado o medicina prepagada.",
  },
  {
    atributo: "hospitalization_surgery_policy",
    tipo: "Categorica Nominal",
    descripcion: "¿Tiene póliza de hospitalización o cirugía?",
    opciones: { Sí: "Si", No: "No" },
    ayuda: "Indica si la persona cuenta con una póliza de hospitalización o cirugía.",
  },
  {
    atributo: "mother_education_level",
    tipo: "Categorica Ordinal",
    descripcion: "Nivel educativo más alto alcanzado por la madre",
    opciones: {
      "Algunos años de primaria": "PrimIncomp",
      "Toda la primaria": "PrimComp",
      "Algunos años de secundaria": "SecIncomp",
      "Toda la secundaria": "SecComp",
      "Uno o más años de técnica o tecnológica": "TecIncomp",
      "Técnica o tecnológica completa": "TecComp",
      "Uno o más años de universidad": "UnivIncomp",
      "Universitaria completa": "UnivComp",
      Ninguno: "Ninguno",
      "No sabe": "NSNC",
    },
    ayuda: "Indica el nivel educativo más alto alcanzado por la madre de la persona.",
  },
  {
    atributo: "father_education_level",
    tipo: "Categorica Ordinal",
    descripcion: "Nivel educativo más alto alcanzado por el padre",
    opciones: {
      "Algunos años de primaria": "PrimIncomp",
      "Toda la primaria": "PrimComp",
      "Algunos años de secundaria": "SecIncomp",
      "Toda la secundaria": "SecComp",
      "Uno o más años de técnica o tecnológica": "TecIncomp",
      "Técnica o tecnológica completa": "TecComp",
      "Uno o más años de universidad": "UnivIncomp",
      "Universitaria completa": "UnivComp",
      "Ninguno": "Ninguno",
      "No sabe": "NSNC",
    },
    ayuda: "Indica el nivel educativo más alto alcanzado por el padre de la persona.",
  },
  {
    atributo: "general_health_status",
    tipo: "Categorica Ordinal",
    descripcion: "Estado general de salud",
    opciones: {
      "Muy bueno": "MuyBuen",
      "Bueno": "Bueno",
      "Regular": "Regular",
      "Malo": "Malo",
    },
    ayuda: "Indica la percepción general de salud de la persona encuestada.",
  },
  {
    atributo: "vision_ability",
    tipo: "Categorica Ordinal",
    descripcion: "¿Puede ver de cerca, lejos o alrededor sin ayuda?",
    opciones: {
      "No puede hacerlo": "NoPuede",
      "Sí, con mucha dificultad": "MuchaDif",
      "Sí, con alguna dificultad": "AlgoDif",
      "Sin dificultad": "SinDif",
    },
    ayuda: "Indica la capacidad visual de la persona, si puede ver sin ayuda o con dificultad.",
  },
  {
    atributo: "hearing_ability",
    tipo: "Categorica Ordinal",
    descripcion: "¿Puede oír la voz o sonidos sin ayuda?",
    opciones: {
      "No puede hacerlo": "NoPuede",
      "Sí, con mucha dificultad": "MuchaDif",
      "Sí, con alguna dificultad": "AlgoDif",
      "Sin dificultad": "SinDif",
    },
    ayuda: "Indica la capacidad auditiva de la persona, si puede oír sin ayuda o con dificultad.",
  },
  {
    atributo: "self_care_ability",
    tipo: "Categorica Ordinal",
    descripcion: "¿Puede comer, vestirse o bañarse solo sin ayuda?",
    opciones: {
      "No puede hacerlo": "NoPuede",
      "Sí, con mucha dificultad": "MuchaDif",
      "Sí, con alguna dificultad": "AlgoDif",
      "Sin dificultad": "SinDif",
    },
    ayuda: "Indica la capacidad de autocuidado de la persona, si puede realizar actividades básicas de cuidado personal sin ayuda o con dificultad.",
  },
  {
    atributo: "hand_grip_ability",
    tipo: "Categorica Ordinal",
    descripcion: "¿Puede agarrar o mover objetos con las manos sin ayuda?",
    opciones: {
      "No puede hacerlo": "NoPuede",
      "Sí, con mucha dificultad": "MuchaDif",
      "Sí, con alguna dificultad": "AlgoDif",
      "Sin dificultad": "SinDif",
    },
    ayuda: "Indica la capacidad de agarre y movimiento de objetos con las manos, si puede hacerlo sin ayuda o con dificultad.",
  },
  {
    atributo: "cognitive_ability",
    tipo: "Categorica Ordinal",
    descripcion: "¿Puede entender, aprender o tomar decisiones solo sin ayuda?",
    opciones: {
      "No puede hacerlo": "NoPuede",
      "Sí, con mucha dificultad": "MuchaDif",
      "Sí, con alguna dificultad": "AlgoDif",
      "Sin dificultad": "SinDif",
    },
    ayuda: "Indica la capacidad cognitiva de la persona, si puede entender, aprender o tomar decisiones sin ayuda o con dificultad.",
  },
  {
    atributo: "speech_ability",
    tipo: "Categorica Ordinal",
    descripcion: "¿Puede hablar o conversar sin ayuda?",
    opciones: {
      "No puede hacerlo": "NoPuede",
      "Sí, con mucha dificultad": "MuchaDif",
      "Sí, con alguna dificultad": "AlgoDif",
      "Sin dificultad": "SinDif",
    },
    ayuda: "Indica la capacidad de habla de la persona, si puede comunicarse verbalmente sin ayuda o con dificultad.",
  },
  {
    atributo: "mobility_ability",
    tipo: "Categorica Ordinal",
    descripcion: "¿Puede moverse, caminar o subir/bajar escaleras sin ayuda?",
    opciones: {
      "No puede hacerlo": "NoPuede",
      "Sí, con mucha dificultad": "MuchaDif",
      "Sí, con alguna dificultad": "AlgoDif",
      "Sin dificultad": "SinDif",
    },
    ayuda: "Indica la capacidad de movilidad de la persona, si puede moverse sin ayuda o con dificultad.",
  },
  {
    atributo: "life_satisfaction_level",
    tipo: "Numerica Discreta",
    descripcion: "Satisfacción con la vida (0 a 10)",
    opciones: Array.from({ length: 11 }, (_, i) => i.toString()),
    ayuda: "Indica el nivel de satisfacción general con la vida de la persona.",
  },
  {
    atributo: "job_satisfaction_level",
    tipo: "Numerica Discreta",
    descripcion: "Satisfacción con el trabajo/actividad (0 a 10)",
    opciones: Array.from({ length: 11 }, (_, i) => i.toString()),
    ayuda: "Indica el nivel de satisfacción con el trabajo o actividad actual de la persona.",
  },
  {
    atributo: "income_satisfaction_level",
    tipo: "Numerica Discreta",
    descripcion: "Satisfacción con el ingreso actual (0 a 10)",
    opciones: Array.from({ length: 11 }, (_, i) => i.toString()),
    ayuda: "Indica el nivel de satisfacción con el ingreso actual de la persona.",
  },
  {
    atributo: "life_worthwhileness",
    tipo: "Numerica Discreta",
    descripcion: "Percepción de que las cosas en la vida valen la pena (0 a 10)",
    opciones: Array.from({ length: 11 }, (_, i) => i.toString()),
    ayuda: "Indica la percepción de que las cosas en la vida valen la pena.",
  },
];

const modelos = ["XGBRegressor", "MlpRegressor", "LightGBM", "GradientBoosting"];

const PredictorVariables = ({ onSubmit, loading , setResultado}) => {
  const [formData, setFormData] = useState({});
  const [modeloSeleccionado, setModeloSeleccionado] = useState(modelos[0]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    // Buscar el campo correspondiente en datasetInfo
    const field = datasetInfo.find((item) => item.atributo === name);
    let parsedValue = value;
    // Si el tipo del campo es numérico, convertir el valor
    if (field?.tipo.includes("Numerica")) {
      parsedValue = value === "" ? "" : Number(value);
    }
    setFormData((prev) => ({
      ...prev,
      [name]: parsedValue,
    }));
  };

  useEffect(() => {
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    tooltipTriggerList.forEach((tooltipTriggerEl) => {
      new Tooltip(tooltipTriggerEl);
    });
  }, []);

  const handleChangeSelectModelo = (e) => {
    setModeloSeleccionado(e.target.value);
    setResultado(null); // aqui hacemos que se oculte el resultado
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ ...formData }, modeloSeleccionado);
  };

  return (
    <div className="card" style={{ height: "650px" }}>
      <div className="card-header text-white" style={{ backgroundColor: '#000051' }}>Predictor</div>
      <form onSubmit={handleSubmit} className="card-body overflow-auto">
      <div className="card-body overflow-auto">
        <p className="text-muted">Ingresa todos los campos para realizar la predicción sobre Ingreso Del Hogar </p>
        {datasetInfo.map((item, index) => (
          <div className="mb-3" key={index}>
            <label className="form-label">{item.descripcion}</label>
            {item.opciones?.min !== undefined &&
              item.opciones?.max !== undefined ? (
              <div className="d-flex align-items-center">
                <input type="number" className="form-control" name={item.atributo} onChange={handleChange} min={item.opciones.min} max={item.opciones.max}
                  placeholder={`Ingrese un valor entre ${item.opciones.min} y ${item.opciones.max}`} required />
                <span className="ms-2 text-primary" style={{ cursor: "pointer", fontWeight: "bold" }} data-bs-toggle="tooltip" data-bs-placement="top"
                  title={item.ayuda} >
                  &#x3f;
                </span>
              </div>
            ) : (
              <div className="d-flex align-items-center">
                <select className="form-select" name={item.atributo} onChange={handleChange} required>
                  <option value="">Seleccione una opción</option>
                  {item.opciones &&
                    Object.entries(item.opciones).map(([label, value], i) => (
                      <option key={i} value={value}>
                        {label}
                      </option>
                    ))}
                </select>
                <span className="ms-2 text-primary"style={{ cursor: "pointer", fontWeight: "bold" }} data-bs-toggle="tooltip"data-bs-placement="top" title={item.ayuda}>
                  &#x3f;
                </span>
              </div>
            )}
          </div>
        ))}

        <div className="d-flex align-items-center gap-2">
          <select className="form-select" value={modeloSeleccionado} onChange={handleChangeSelectModelo} >
            {modelos.map((modelo, idx) => (
              <option key={idx} value={modelo}>
                {modelo}
              </option>
            ))}
          </select>
          <button className="btn btn-success" type="submit" disabled={loading}>Enviar</button>
        </div>
      </div>
      </form>
    </div>
  );
};

export default PredictorVariables;

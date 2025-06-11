import { useState } from "react";

const datasetInfo = [
  {
    atributo: "mother_lives_household",
    tipo: "Categorica Nominal",
    descripcion: "¿La madre vive en este hogar?",
    opciones: { Sí: "Si", No: "No", Fallecida: "Fallecida" },
  },
  {
    atributo: "father_lives_household",
    tipo: "Categorica Nominal",
    descripcion: "¿El padre vive en este hogar?",
    opciones: { Sí: "Si", No: "No", Fallecido: "Fallecido" },
  },
  {
    atributo: "health_insurance_affiliation",
    tipo: "Categorica Nominal",
    descripcion:
      "¿Está afiliado a alguna entidad de seguridad social en salud?",
    opciones: { Sí: "Si", No: "No", "No sabe / No informa": "NSNC" },
  },
  {
    atributo: "gender",
    tipo: "Categorica Nominal Binaria",
    descripcion: "Sexo de la persona",
    opciones: { Masculino: "Masc", Femenino: "Fem" },
  },
  {
    atributo: "health_issue_last_30_days",
    tipo: "Categorica Nominal",
    descripcion: "¿Tuvo algún problema de salud en los últimos 30 días?",
    opciones: { Sí: "Si", No: "No" },
  },
  {
    atributo: "has_chronic_disease",
    tipo: "Categorica Nominal",
    descripcion: "¿Tiene alguna enfermedad crónica diagnosticada?",
    opciones: { Sí: "Si", No: "No" },
  },
  {
    atributo: "student_health_insurance",
    tipo: "Categorica Nominal",
    descripcion: "¿Tiene seguro médico estudiantil?",
    opciones: { Sí: "Si", No: "No" },
  },
  {
    atributo: "eps_complementary_health_plan",
    tipo: "Categorica Nominal",
    descripcion: "¿Tiene plan complementario de salud con una EPS?",
    opciones: { Sí: "Si", No: "No" },
  },
  // en opciones perminta in input numerico
  {
    atributo: "expenditure_unit_monthly_income",
    tipo: "Numerica Continua",
    descripcion: "Ingreso mensual del hogar (en unidades de gasto)",
    opciones: { min: 0, max: 150000000 },
  },
  {
    atributo: "current_age",
    tipo: "Numerica Continua",
    descripcion: "Edad actual de la persona (en años)",
    opciones: { min: 13, max: 77 },
  },
  {
    atributo: "household_monthly_income",
    tipo: "Numerica Continua",
    descripcion: "Ingreso mensual del hogar (en pesos)",
    opciones: { min: 0, max: 150000000 },
  },
  {
    atributo: "per_capita_income",
    tipo: "Numerica Continua",
    descripcion: "Ingreso per cápita del hogar (en pesos)",
    opciones: { min: 0, max: 150000000 },
  },
  {
    atributo: "household_size",
    tipo: "Numerica Continua",
    descripcion: "Tamaño del hogar (número de personas)",
    opciones: { min: 1, max: 18 },
  },
  {
    atributo: "other_health_services",
    tipo: "Categorica Nominal",
    descripcion:
      "¿Cuenta con otros servicios médicos como ambulancia o asistencia domiciliaria?",
    opciones: { Sí: "Si", No: "No" },
  },
  {
    atributo: "private_health_insurance",
    tipo: "Categorica Nominal",
    descripcion: "¿Cuenta con medicina prepagada?",
    opciones: { Sí: "Si", No: "No" },
  },
  {
    atributo: "hospitalization_surgery_policy",
    tipo: "Categorica Nominal",
    descripcion: "¿Tiene póliza de hospitalización o cirugía?",
    opciones: { Sí: "Si", No: "No" },
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
      Ninguno: "Ninguno",
      "No sabe": "NSNC",
    },
  },
  {
    atributo: "general_health_status",
    tipo: "Categorica Ordinal",
    descripcion: "Estado general de salud",
    opciones: {
      "Muy bueno": "MuyBuen",
      Bueno: "Bueno",
      Regular: "Regular",
      Malo: "Malo",
    },
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
  },
  {
    atributo: "life_satisfaction_level",
    tipo: "Numerica Discreta",
    descripcion: "Satisfacción con la vida (0 a 10)",
    opciones: Array.from({ length: 11 }, (_, i) => i.toString()),
  },
  {
    atributo: "job_satisfaction_level",
    tipo: "Numerica Discreta",
    descripcion: "Satisfacción con el trabajo/actividad (0 a 10)",
    opciones: Array.from({ length: 11 }, (_, i) => i.toString()),
  },
  {
    atributo: "income_satisfaction_level",
    tipo: "Numerica Discreta",
    descripcion: "Satisfacción con el ingreso actual (0 a 10)",
    opciones: Array.from({ length: 11 }, (_, i) => i.toString()),
  },
  {
    atributo: "life_worthwhileness",
    tipo: "Numerica Discreta",
    descripcion:
      "Percepción de que las cosas en la vida valen la pena (0 a 10)",
    opciones: Array.from({ length: 11 }, (_, i) => i.toString()),
  },
];

const modelos = ["XGBoostX3", "MlpRegressorX3", "RandomForestX3", "GradientBoostingX3"];

const PredictorVariables = ({ onSubmit }) => {
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

  const valor = {
  "cognitive_ability": "SinDif",
  "current_age": 25,
  "eps_complementary_health_plan": "No",
  "expenditure_unit_monthly_income": 2424166.667,
  "father_education_level": "SecIncomp",
  "father_lives_household": "Si",
  "gender": "Fem",
  "general_health_status": "MuyBuen",
  "hand_grip_ability": "SinDif",
  "has_chronic_disease": "No",
  "health_insurance_affiliation": "Si",
  "health_issue_last_30_days": "No",
  "hearing_ability": "SinDif",
  "hospitalization_surgery_policy": "No",
  "household_monthly_income": 2424166.667,
  "household_size": 4,
  "income_satisfaction_level": 7,
  "job_satisfaction_level": 4,
  "life_satisfaction_level": 3,
  "life_worthwhileness": 10,
  "mobility_ability": "SinDif",
  "mother_education_level": "PrimIncomp",
  "mother_lives_household": "No",
  "other_health_services": "No",
  "per_capita_income": 142083.333,
  "private_health_insurance": "No",
  "self_care_ability": "SinDif",
  "speech_ability": "SinDif",
  "student_health_insurance": "No",
  "vision_ability": "SinDif"
};

  const handleSubmit = () => {
    onSubmit({ ...valor }, modeloSeleccionado);  
  };

  return (
    <div className="card" style={{ height: "650px" }}>
      <div className="card-header bg-primary text-white">Predictor</div>
      <div className="card-body overflow-auto">
        <p className="text-muted">Ingresa todos los campos para realizar la predicción sobre Ingreso Del Hogar </p>
        {datasetInfo.map((item, index) => (
          <div className="mb-3" key={index}>
            <label className="form-label">{item.descripcion}</label>
            {item.opciones?.min !== undefined &&
            item.opciones?.max !== undefined ? (
              <input type="number" className="form-control" name={item.atributo} onChange={handleChange} min={item.opciones.min} max={item.opciones.max}
                placeholder={`Ingrese un valor entre ${item.opciones.min} y ${item.opciones.max}`}
              />
            ) : (
              <select className="form-select" name={item.atributo} onChange={handleChange} >
                <option value="">Seleccione una opción</option>
                {item.opciones &&
                  Object.entries(item.opciones).map(([label, value], i) => (
                    <option key={i} value={value}>
                      {label}
                    </option>
                  ))}
              </select>
            )}
          </div>
        ))}

        <div className="d-flex align-items-center gap-2">
          <select className="form-select" value={modeloSeleccionado} onChange={(e) => setModeloSeleccionado(e.target.value)} >
            {modelos.map((modelo, idx) => (
              <option key={idx} value={modelo}>
                {modelo}
              </option>
            ))}
          </select>
          <button className="btn btn-success" onClick={handleSubmit}>
            Enviar
          </button>
        </div>
      </div>
    </div>
  );
};

export default PredictorVariables;

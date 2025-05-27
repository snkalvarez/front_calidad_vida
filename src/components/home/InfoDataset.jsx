

const datasetInfo = [
  { atributo: "Madre_vive_hogar", tipo: "Categorica Nominal", descripcion: "La Madre vive en este Hogar (1: Sí, 2: No)" },
  { atributo: "Padre_vive_hogar", tipo: "Categorica Nominal", descripcion: "El Padre vive en este Hogar (1: Sí, 2: No)" },
  { atributo: "Afiliado_seguridad_Social", tipo: "Categorica Nominal", descripcion: "Está afiliado, es cotizante o es beneficiario de alguna entidad de seguridad social en salud  (1: Sí, 2: No 9 No sabe)" },
  { atributo: "Sexo", tipo: "Categorica Nominal Binaria", descripcion: "Masculino o Femenino" },
  { atributo: "tuvo_problema_salud", tipo: "Categorica Nominal Binaria", descripcion: "Tuvo alguna enfermedad, accidente o problema de salud no hospitalizado en los últimos 30 días (1: Sí, 2: No)" },
  { atributo: "tiene_enf_cronica", tipo: "Categorica Nominal Binaria", descripcion: "Diagnóstico de enfermedad crónica (1: Sí, 2: No)" },
  { atributo: "seguro_med_estudiantil", tipo: "Categorica Nominal Binaria", descripcion: "Tiene seguro médico estudiantil (1: Sí, 2: No)" },
  { atributo: "plan_complementario_eps", tipo: "Categorica Nominal Binaria", descripcion: "Tiene plan complementario de salud con una EPS (1: Sí, 2: No)" },
  { atributo: "otro_serv_medico", tipo: "Categorica Nominal Binaria", descripcion: "Tiene otros servicios médicos (ambulancia, asistencia médica domiciliaria, etc.) (1: Sí, 2: No)" },
  { atributo: "medici_prepagada", tipo: "Categorica Nominal Binaria", descripcion: "Tiene medicina prepagada (1: Sí, 2: No)" },
  { atributo: "tiene_poliza_hosp_cirugia", tipo: "Categorica Nominal Binaria", descripcion: "Tiene póliza de hospitalización o cirugía (1: Sí, 2: No)" },
  { atributo: "nivel_edu_alto_madre", tipo: "Categorica Ordinal", descripcion: "Nivel educativo más alto alcanzado por la madre (1 a 10)" },
  { atributo: "nivel_edu_alto_padre", tipo: "Categorica Ordinal", descripcion: "Nivel educativo más alto alcanzado por el padre (1 a 10)" },
  { atributo: "estado_salud_es", tipo: "Categorica Ordinal", descripcion: "Estado general de salud (1: Muy bueno a 4: Malo)" },
  { atributo: "puede_ver_cerca_lejos", tipo: "Categorica Ordinal", descripcion: "Capacidad de ver sin ayuda (1: No puede hacerlo a 4: Sin dificultad)" },
  { atributo: "puede_oir", tipo: "Categorica Ordinal", descripcion: "Capacidad de oír sin ayuda (1: No puede hacerlo a 4: Sin dificultad)" },
  { atributo: "puede_cuidarse_solo", tipo: "Categorica Ordinal", descripcion: "Capacidad de cuidarse solo sin ayuda (1: No puede hacerlo a 4: Sin dificultad)" },
  { atributo: "puede_agarrarmover_obj", tipo: "Categorica Ordinal", descripcion: "Capacidad de agarrar/mover objetos sin ayuda (1: No puede hacerlo a 4: Sin dificultad)" },
  { atributo: "entiende_aprende_tom_deci_mismo", tipo: "Categorica Ordinal", descripcion: "Capacidad cognitiva sin ayuda (1: No puede hacerlo a 4: Sin dificultad)" },
  { atributo: "puede_hablar", tipo: "Categorica Ordinal", descripcion: "Capacidad de hablar/conversar sin ayuda (1: No puede hacerlo a 4: Sin dificultad)" },
  { atributo: "puede_moverse_caminar", tipo: "Categorica Ordinal", descripcion: "Capacidad de moverse/caminar sin ayuda (1: No puede hacerlo a 4: Sin dificultad)" },
  { atributo: "edad_actual", tipo: "Numérica Continua", descripcion: "Edad actual en años cumplidos" },
  { atributo: "cant_pers_hogar", tipo: "Numérica Discreta", descripcion: "Cantidad de personas en el hogar" },
  { atributo: "ingreso_percapita", tipo: "Numérica Continua", descripcion: "Ingreso per cápita" },
  { atributo: "ingreso_mens_tot_hogar", tipo: "Numérica Continua", descripcion: "Ingreso mensual total del hogar" },
  { atributo: "ingreso_mens_tot_unid_gasto", tipo: "Numérica Continua", descripcion: "Ingreso mensual total de la unidad de gasto" },
  { atributo: "ingreso_total_otro_unidad", tipo: "Numérica Continua", descripcion: "Ingreso mensual total de la otra unidad de gasto" },
  { atributo: "satisfaccion_vida", tipo: "Numérica Ordinal", descripcion: "Nivel de satisfacción con la vida (0: Totalmente insatisfecho a 10: Totalmente satisfecho)" },
  { atributo: "nivel_satisfa_trabajo", tipo: "Numérica Ordinal", descripcion: "Nivel de satisfacción con el trabajo/actividad (0 a 10)" },
  { atributo: "satis_ingreso", tipo: "Numérica Ordinal", descripcion: "Nivel de satisfacción con su ingreso (0 a 10)" },
  { atributo: "percepcion_valor_vida", tipo: "Numérica Ordinal", descripcion: "Percepción del valor de la vida (0: No vale la pena a 10: Vale totalmente la pena)" }
];

const InfoDelDataset = () => {
  return (
    <div className="container mt-4">
      <div className="card shadow mb-3">
        <div className="card-body bg-primary text-white">
          <h3 className="card-title mb-1">Informacion de Las Variables</h3>
          <p className="card-text mb-0">
  Esta tabla muestra las variables seleccionadas de la Encuesta Nacional de Calidad de Vida, relacionadas con educación, salud, servicios del hogar, y características y composición del hogar, que son pertinentes para predecir el ingreso mensual del hogar.
</p>

        </div>
      </div>
        <div className="table-responsive" style={{ maxHeight: "300px", overflowY: "auto" }}>
          <table className="table table-hover mb-0">
            <thead className="table-light text-center">
              <tr>
                <th>Atributo</th>
                <th>Tipo</th>
                <th>Descripción</th>
              </tr>
            </thead>
            <tbody className="text-center">
              {datasetInfo.map((item, index) => (
                <tr key={index}>
                  <td className="fw-semibold">{item.atributo}</td>
                  <td>{item.tipo}</td>
                  <td>{item.descripcion}</td>
                </tr>
              ))}
            </tbody>
          </table>
      </div>
    </div>
  );
};

export default InfoDelDataset;

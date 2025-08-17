import React from 'react';

function Soporte() {
  return (
    <div className="container my-5" >
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <h2 className="mb-4 text-center">Soporte y Ayuda</h2>
          <p className="lead text-center text-muted mb-5">
            Estamos aquí para ayudarte. Revisa nuestras preguntas frecuentes o contáctanos directamente.
          </p>

          {/* --- Sección de Contacto --- */}
          <div className="card mb-5 shadow-sm">
            <div className="card-header text-white" style={{ backgroundColor: '#000051' }}>
              <h5 className="mb-0">Contacto Directo</h5>
            </div>
            <div className="card-body">
              <p>Puedes comunicarte con nuestro equipo de soporte a través de los siguientes medios:</p>
              <ul className="list-group list-group-flush">
                <li className="list-group-item d-flex align-items-center">
                  <i className="bi bi-envelope-fill me-3 text-primary"></i>
                  <span>Email: <a href="mailto:lcalvarez@unicauca.edu.co">lcalvarez@unicauca.edu.co</a></span>
                </li>
                <li className="list-group-item d-flex align-items-center">
                  <i className="bi bi-envelope-fill me-3 text-primary"></i>
                  <span>Email: <a href="mailto:juancarcaicedo@unicauca.edu.co">juancarcaicedo@unicauca.edu.co</a></span>
                </li>
              </ul>
            </div>
          </div>

          {/* --- Sección de Preguntas Frecuentes (FAQ) --- */}
          <div className="card mb-5 shadow-sm">
            <div className="card-header text-white" style={{ backgroundColor: '#000051' }}>
              <h5 className="mb-0">Preguntas Frecuentes</h5>
            </div>
            <div className="card-body">
              <div className="accordion" id="faqAccordion">
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                      ¿Cómo funciona el modelo predictivo?
                    </button>
                  </h2>
                  <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
                      Nuestro modelo utiliza diferentes modelos de predicción preentrenados para estimar el ingreso del hogar basado en factores como la educación de los padres, la presencia de los mismos y otros indicadores socioeconómicos. Puedes ver las gráficas y métricas en la sección de "Gráficas y Métricas".
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                      ¿Qué tipo de datos debo ingresar?
                    </button>
                  </h2>
                  <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
                      Debes ingresar los datos en el formato solicitado, asegurándote de que los valores sean numéricos cuando corresponda. Por favor, revisa el formulario este contiene un simbolo (?) para más información.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                      ¿Cómo puedo reportar un error o problema?
                    </button>
                  </h2>
                  <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div className="accordion-body">
                        Si encuentras un error o tienes un problema, por favor contáctanos a través de los correos electrónicos proporcionados anteriormente. Asegúrate de incluir una descripción detallada del problema y, si es posible, capturas de pantalla.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* --- Formulario de Contacto (opcional) --- */}
          <div className="card shadow-sm">
            <div className="card-header text-white" style={{ backgroundColor: '#000051' }}>
              <h5 className="mb-0">Video de Ayuda</h5>
            </div>
            <div className="card-body">
              <h1>video de ejemplo</h1>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Soporte;
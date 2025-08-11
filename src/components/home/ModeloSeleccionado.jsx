
const ModeloSeleccionado = () => {
    return (
        <div className="container my-4">
            <div className="row">
                {/* Tarjeta del Modelo */}
                <div className="col-md-6 mb-4">
                    <div className="card h-100">
                        <div className="text-white d-flex justify-content-center align-items-center" style={{ height: '200px', backgroundColor: '#15488C' }}>
                            <i className="bi bi-laptop" style={{ fontSize: '5rem' }}></i>
                        </div>
                        <div className="card-body overflow-auto" style={{ maxHeight: '250px' }}>
                            <p>
                                <strong>XGBRegressor</strong> es un algoritmo de aprendizaje automático especializado en tareas de regresión.
                                Basado en la combinación de múltiples modelos de árboles de decisión, el XGBRegressor mejora gradualmente su
                                capacidad predictiva al corregir errores en cada iteración. Para realizar una predicción, el modelo utiliza los
                                árboles previamente construidos para evaluar las características de los datos de entrada y generar una estimación
                                continua del valor de salida. Esto lo convierte en una herramienta efectiva y precisa para abordar problemas de
                                regresión en diversos campos, desde la predicción de precios inmobiliarios hasta el análisis de series temporales.
                            </p>
                        </div>
                        <div className="card-footer text-end">
                            <a href="https://xgboost.readthedocs.io/en/stable/python/python_api.html#xgboost.XGBRegressor" className="btn btn-link" target="_blank" rel="noopener noreferrer">Ver Documentación</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 mb-4">
                    <div className="card h-100">
                        <div className="text-white d-flex justify-content-center align-items-center" style={{ height: '200px', backgroundColor: '#15488C' }}>
                            <i className="bi bi-bar-chart-line-fill" style={{ fontSize: '5rem' }}></i>
                        </div>
                        <div className="card-body overflow-auto" style={{ maxHeight: '250px' }}>
                            <h5 className="card-title">Configuración de los parámetros</h5>
                            <p><em>Estos parámetros fueron optimizados mediante una búsqueda de hiperparámetros para mejorar el rendimiento del modelo.</em></p>
                            <p className="card-text">
                                <code>
                                    xgb_model = XGBRegressor(
                                    subsample=0.8,
                                    reg_lambda=2.0,
                                    reg_alpha=0,
                                    n_estimators=300,
                                    max_depth=5,
                                    learning_rate=0.1,
                                    gamma=0.2,
                                    colsample_bytree=0.8,
                                    verbosity=0,
                                    random_state=42,
                                    n_jobs=-1     # Usa todos los núcleos
                                )
                                </code>
                                <br/><br/>
                            </p>
                            <ul>
                                <li><strong>subsample:</strong> Porcentaje de muestras utilizadas para entrenar cada árbol.</li>
                                <li><strong>reg_lambda:</strong> Término de regularización L2 para evitar el sobreajuste.</li>
                                <li><strong>reg_alpha:</strong> Término de regularización L1 para mejorar la generalización.</li>
                                <li><strong>n_estimators:</strong> Número total de árboles a construir.</li>
                                <li><strong>max_depth:</strong> Profundidad máxima de cada árbol.</li>
                                <li><strong>learning_rate:</strong> Tasa de aprendizaje que controla la contribución de cada árbol.</li>
                                <li><strong>gamma:</strong> Reducción mínima en la pérdida requerida para hacer una partición adicional.</li>
                                <li><strong>colsample_bytree:</strong> Proporción de características utilizadas en cada árbol.</li>
                                <li><strong>verbosity:</strong> Nivel de verbosidad del algoritmo (0 = silencioso).</li>
                                <li><strong>random_state:</strong> Semilla para reproducibilidad.</li>
                                <li><strong>n_jobs:</strong> Número de núcleos a utilizar para el entrenamiento (usando todos los núcleos).</li>
                            </ul>
                        </div>
                        <div className="card-footer text-end">
                            <a href="https://xgboost.readthedocs.io/en/stable/parameter.html" target="_blank" rel="noopener noreferrer" className="btn btn-link">Ver Documentación</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModeloSeleccionado;

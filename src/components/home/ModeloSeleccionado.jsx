
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
                            <h4 className="card-title">Modelo Seleccionado</h4>
                            <p>
                                <strong>GradientBoostingRegressor</strong> es un algoritmo de aprendizaje automático para tareas de regresión. Se basa en el principio de "potenciación" (boosting), donde se construyen secuencialmente múltiples árboles de decisión débiles. Cada nuevo árbol se entrena para corregir los errores de los árboles anteriores. A diferencia de otros métodos de boosting, Gradient Boosting se enfoca en minimizar una función de pérdida (error) al dirigir la construcción de cada árbol hacia la dirección del gradiente negativo de esa función. Esto le permite obtener predicciones precisas y robustas, siendo muy efectivo en problemas de regresión complejos.
                            </p>
                            {/** Aqui una nota de por que fue seleccionado y no los otros */}
                            <p className="text-muted">
                                <small>
                                    Este modelo fue seleccionado aun que segundo mejor modelo por debajo de RandomForest que es descartado por su tamaño y recursos, pero GradientBoostingRegressor ofrece un equilibrio entre precisión y eficiencia, siendo más ligero en términos de tamaño del modelo y consumo de recursos computacionales sumado a la generación de predicciones con un error absoluto bajo.
                                </small>
                            </p>
                        </div>
                        <div className="card-footer text-end">
                            <a href="https://scikit-learn.org/stable/modules/generated/sklearn.ensemble.GradientBoostingRegressor.html" className="btn btn-link" target="_blank" rel="noopener noreferrer">Ver Documentación</a>
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
                            <p><em>Estos parámetros pueden ser ajustados para mejorar el rendimiento del modelo a través de una búsqueda de hiperparámetros.</em></p>
                            <p className="card-text">
                                <code>
                                    gbm_model = GradientBoostingRegressor(<br />
                                    &nbsp;&nbsp;&nbsp;&nbsp;subsample=0.8,<br />
                                    &nbsp;&nbsp;&nbsp;&nbsp;n_estimators=100,<br />
                                    &nbsp;&nbsp;&nbsp;&nbsp;min_samples_split=10,<br />
                                    &nbsp;&nbsp;&nbsp;&nbsp;min_samples_leaf=2,<br />
                                    &nbsp;&nbsp;&nbsp;&nbsp;max_features=None,<br />
                                    &nbsp;&nbsp;&nbsp;&nbsp;max_depth=5,<br />
                                    &nbsp;&nbsp;&nbsp;&nbsp;learning_rate=0.2,<br />
                                    &nbsp;&nbsp;&nbsp;&nbsp;random_state=42<br />
                                    )
                                </code>
                                <br /><br />
                            </p>
                            <ul>
                                <li><strong>n_estimators:</strong> El número de árboles de decisión a construir en el modelo.</li>
                                <li><strong>max_depth:</strong> La profundidad máxima de los árboles individuales.</li>
                                <li><strong>learning_rate:</strong> Reduce la contribución de cada árbol, lo que ayuda a prevenir el sobreajuste.</li>
                                <li><strong>subsample:</strong> La fracción de muestras a utilizar para el ajuste de cada árbol individual.</li>
                                <li><strong>min_samples_split:</strong> El número mínimo de muestras requeridas para dividir un nodo interno.</li>
                                <li><strong>min_samples_leaf:</strong> El número mínimo de muestras requeridas para estar en un nodo hoja.</li>
                                <li><strong>max_features:</strong> El número de características a considerar al buscar la mejor división.</li>
                                <li><strong>random_state:</strong> La semilla para la reproducibilidad de los resultados.</li>
                            </ul>
                        </div>
                        <div className="card-footer text-end">
                            <a href="https://scikit-learn.org/stable/modules/generated/sklearn.ensemble.GradientBoostingRegressor.html" target="_blank" rel="noopener noreferrer" className="btn btn-link">Ver Documentación</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModeloSeleccionado;

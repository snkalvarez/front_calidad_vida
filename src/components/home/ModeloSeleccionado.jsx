
const ModeloSeleccionado = () => {
    return (
        <div className="container my-4">
            <div className="row">
                {/* Tarjeta del Modelo */}
                <div className="col-md-6 mb-4">
                    <div className="card h-100">
                        <div className="bg-primary text-white d-flex justify-content-center align-items-center" style={{ height: '200px' }}>
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
                            <a href="#" className="btn btn-link">Ver Documentación</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 mb-4">
                    <div className="card h-100">
                        <div className="bg-success text-white d-flex justify-content-center align-items-center" style={{ height: '200px' }}>
                            <i className="bi bi-bar-chart-line-fill" style={{ fontSize: '5rem' }}></i>
                        </div>
                        <div className="card-body overflow-auto" style={{ maxHeight: '250px' }}>
                            <h5 className="card-title">Configuración de los parámetros</h5>
                            <p className="card-text">
                                <code>
                                    xgb.XGBClassifier(objective='multi:softmax', num_class=3,
                                    importance_type='gain', learning_rate=0.030958241241393895, max_depth=7,
                                    colsample_bytree=0.53305545532179588, n_estimators=568,
                                    reg_alpha=4.108048686396134e-08, reg_lambda=0.00024280802318611656,
                                    min_child_weight=1, gamma=0.23304950539819528, subsample=0.8458561246387711)
                                </code>
                                <br /><br />
                                <strong>Objective:</strong> La función objetivo utilizada por el algoritmo es...
                            </p>
                        </div>
                        <div className="card-footer text-end">
                            <a href="#" className="btn btn-link">Ver Documentación</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModeloSeleccionado;

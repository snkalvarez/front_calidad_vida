import { Link } from "react-router-dom";

export default function Sidebar({ componente: Componente}) {
    const opcionesMenu = [
        {
            nombre: 'Inicio',
            submenu: [
                {
                    nombre: 'prueba',
                    ruta: '/prueba'
                }
            ]
        },
        {
            nombre: 'Graficas',
            submenu: [
                {
                    nombre: 'Exactitud de modelos',
                    ruta: '/GraficasComparativas'
                },
                {
                    nombre: 'Factores Parentales y Su incidencia en los Ingresos del Hogar',
                    ruta: '/GrafFactoresParentales'
                },
                {
                    nombre: 'Satisfacción, Edad y Género vs Ingreso Laboral',
                    ruta: '/GrafIngresoEdadGenero'
                },
                {
                    nombre: 'Real vs Predicción Random Forest',
                    ruta: '/realvsprediccionrandomforest'
                }
            ]
        },
        {
            nombre: 'Predictor',
            submenu: [
                {
                    nombre: 'Predictor',
                    ruta: '/predictor'
                },
                {
                    nombre: 'Soporte',
                    ruta: '/soporte'
                }
            ]
        }
    ];

    return (
        <div>
            <div className="wrapper">
                <nav id="sidebar" className="small">
                    <div className="sidebar-header  align-items-center text-center">
                        <Link to="/" className="mb-0 mx-1 sin-estilo">Predictor</Link>
                    </div>
                    <ul className="list-unstyled components">
                        {opcionesMenu.map((opcion, index) => (
                            <li key={index}>
                                <a href={`#${opcion.nombre}Submenu`}data-bs-toggle="collapse" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">
                                    {opcion.nombre}
                                </a>
                                <ul
                                    className="collapse list-unstyled" id={`${opcion.nombre}Submenu`} data-bs-parent="#sidebar ul.components" >
                                    {opcion.submenu.map((subopcion, subIndex) => (
                                        <li key={subIndex} >
                                            <Link to={subopcion.ruta}>{subopcion.nombre}</Link>
                                        </li>
                                    ))}
                                </ul>
                            </li>        
                        ))}
                    </ul>
                </nav>
                <div id="content">
                    <div className="content-scroll">
                        {Componente && <Componente />}
                        <footer className="footer-dinamico">
                            <p className="text-muted text-center">
                                <small>© 2025 - Todos los derechos reservados Julio ALvarez Cuaces & Juan Carlos Ruales</small>
                            </p>
                        </footer>
                    </div>
                </div>
            </div>
        </div>
    );
}
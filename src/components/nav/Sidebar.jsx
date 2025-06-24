import { Link } from "react-router-dom";

export default function Sidebar({ componente: Componente}) {
    const opcionesMenu = [
        // {
        //     nombre: 'Pruebas',
        //     submenu: [
                                // prueba realizada con recharts
                // {
                //     nombre: 'Exactitud de modelos Recharts',
                //     ruta: '/GraficasComparativasRecharts'
                // },
                
                // prueba realizada con react-plotly
                // {
                //     nombre: 'Real vs Predicción Random Forest',
                //     ruta: '/realvsprediccionrandomforest'
                // }
            // ]
        // },
        {
            id: '1',
            nombre: 'Graficas Comparativas',
            submenu: [
                {
                    nombre: 'Comparativas Real vs Predicción',
                    ruta: '/GraficasComparativasPlotly'
                },
            ]
        },
        {
            id: '2',
            nombre: 'Graficas Exploratorias',
            submenu: [
                {
                    nombre: 'Factores Parentales y Su incidencia en los Ingresos del Hogar',
                    ruta: '/GrafFactoresParentales'
                },
                {
                    nombre: 'Satisfacción, Edad y Género vs Ingreso Laboral',
                    ruta: '/GrafIngresoEdadGenero'
                },
            ]
        },
        {
            id: '3',
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
                        <li><Link to="/">Inicio</Link></li>
                        {opcionesMenu.map((opcion, index) => (
                            <li key={index}>
                                <a href={`#${opcion.id}Submenu`}data-bs-toggle="collapse" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">
                                    {opcion.nombre}
                                </a>
                                <ul
                                    className="collapse list-unstyled" id={`${opcion.id}Submenu`} data-bs-parent="#sidebar ul.components" >
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
                                <small>© 2025 - Todos los derechos reservados Julio Alvarez Cuaces & Juan Carlos Ruales</small>
                            </p>
                        </footer>
                    </div>
                </div>
            </div>
        </div>
    );
}
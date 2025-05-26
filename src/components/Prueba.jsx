// src/pages/Prueba.jsx
import React from 'react';

const Prueba = () => {
    // Datos de ejemplo para la tabla
    const datosTabla = [
        { id: 1, nombre: 'Juan Pérez', edad: 30, ciudad: 'Madrid', ocupacion: 'Ingeniero de Software' },
        { id: 2, nombre: 'María García', edad: 25, ciudad: 'Barcelona', ocupacion: 'Diseñadora UX/UI' },
        { id: 3, nombre: 'Carlos Rodríguez', edad: 40, ciudad: 'Sevilla', ocupacion: 'Gerente de Proyectos Senior' },
        { id: 4, nombre: 'Laura Fernández', edad: 35, ciudad: 'Valencia', ocupacion: 'Analista de Datos' },
        { id: 5, nombre: 'Pedro Sánchez', edad: 28, ciudad: 'Bilbao', ocupacion: 'Desarrollador Frontend' },
        { id: 6, nombre: 'Ana López', edad: 32, ciudad: 'Zaragoza', ocupacion: 'Especialista en Marketing Digital' },
        { id: 7, nombre: 'Miguel Torres', edad: 45, ciudad: 'Málaga', ocupacion: 'Consultor de Negocios' },
        { id: 8, nombre: 'Sofía Díaz', edad: 29, ciudad: 'Granada', ocupacion: 'Content Creator' },
        { id: 9, nombre: 'Javier Ruíz', edad: 38, ciudad: 'Murcia', ocupacion: 'Arquitecto de Soluciones' },
        { id: 10, nombre: 'Elena Castro', edad: 31, ciudad: 'Palma', ocupacion: 'Desarrolladora Backend' },
        // Añadimos más datos para que la tabla sea "larga" y provoque scroll vertical
        { id: 11, nombre: 'David Gómez', edad: 27, ciudad: 'Alicante', ocupacion: 'Diseñador Gráfico' },
        { id: 12, nombre: 'Isabel Vargas', edad: 33, ciudad: 'Santander', ocupacion: 'Product Manager' },
        { id: 13, nombre: 'Francisco Solís', edad: 42, ciudad: 'Gijón', ocupacion: 'Experto en Ciberseguridad' },
        { id: 14, nombre: 'Carmen Mora', edad: 26, ciudad: 'Logroño', ocupacion: 'Especialista SEO' },
        { id: 15, nombre: 'Roberto Sanz', edad: 39, ciudad: 'Cáceres', ocupacion: 'Scrum Master' },
        { id: 16, nombre: 'Pilar Núñez', edad: 30, ciudad: 'Albacete', ocupacion: 'Recursos Humanos' },
        { id: 17, nombre: 'Diego León', edad: 34, ciudad: 'Valladolid', ocupacion: 'Ingeniero DevOps' },
        { id: 18, nombre: 'Lucía Blanco', edad: 29, ciudad: 'Salamanca', ocupacion: 'Asistente de Marketing' },
        { id: 19, nombre: 'Pablo Ferrer', edad: 41, ciudad: 'Badajoz', ocupacion: 'Analista Financiero' },
        { id: 20, nombre: 'Marta Ríos', edad: 36, ciudad: 'León', ocupacion: 'Investigadora de Mercados' },
        { id: 21, nombre: 'Jorge Cano', edad: 30, ciudad: 'Pamplona', ocupacion: 'Soporte Técnico' },
        { id: 22, nombre: 'Natalia Vidal', edad: 27, ciudad: 'Vitoria-Gasteiz', ocupacion: 'Traductora' },
        { id: 23, nombre: 'Sergio Bravo', edad: 35, ciudad: 'Oviedo', ocupacion: 'Desarrollador Mobile' },
        { id: 24, nombre: 'Andrea Soto', edad: 28, ciudad: 'Santiago de Compostela', ocupacion: 'Periodista' },
        { id: 25, nombre: 'Ricardo Pardo', edad: 48, ciudad: 'A Coruña', ocupacion: 'Director de IT' },
    ];

    return (
        <div className="container-fluid"> {/* Usamos container-fluid de Bootstrap para que ocupe todo el ancho disponible */}
            <h2 className="mb-4">Tabla de Datos de Prueba</h2>
            <div className="table-responsive"> {/* Bootstrap para tablas scrollables horizontalmente */}
                <table className="table table-striped table-bordered table-hover">
                    <thead className="table-dark">
                        <tr>
                            <th>ID</th>
                            <th>Nombre Completo</th>
                            <th>Edad</th>
                            <th>Ciudad</th>
                            <th>Ocupación</th>
                            {/* Añadimos más columnas para probar el scroll horizontal */}
                            <th>Email</th>
                            <th>Teléfono</th>
                            <th>Fecha de Contratación</th>
                            <th>Departamento</th>
                        </tr>
                    </thead>
                    <tbody>
                        {datosTabla.map((dato) => (
                            <tr key={dato.id}>
                                <td>{dato.id}</td>
                                <td>{dato.nombre}</td>
                                <td>{dato.edad}</td>
                                <td>{dato.ciudad}</td>
                                <td>{dato.ocupacion}</td>
                                {/* Datos de ejemplo para las nuevas columnas */}
                                <td>{dato.nombre.toLowerCase().replace(' ', '.') + '@example.com'}</td>
                                <td>+34 6{Math.floor(Math.random() * 900000000) + 100000000}</td>
                                <td>{`20${Math.floor(Math.random() * 5) + 20}-0${Math.floor(Math.random() * 9) + 1}-0${Math.floor(Math.random() * 9) + 1}`}</td>
                                <td>{dato.ocupacion.split(' ')[0]}</td> {/* Solo la primera palabra de la ocupación */}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {/* Agregamos más contenido para forzar el scroll vertical */}
            <p>Este es contenido adicional debajo de la tabla. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, voluptas. Doloremque, quae. Repellat, inventore! Dicta, omnis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, reprehenderit! </p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, rerum saepe. Consequuntur laudantium eveniet neque non dolore, sint quam, ipsa facilis earum aspernatur blanditiis nemo voluptatum esse harum doloremque omnis!</p>
            <p>Más contenido para probar el scroll. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, voluptas. Doloremque, quae. Repellat, inventore! Dicta, omnis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, reprehenderit! </p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, rerum saepe. Consequuntur laudantium eveniet neque non dolore, sint quam, ipsa facilis earum aspernatur blanditiis nemo voluptatum esse harum doloremque omnis!</p>
            <p>Y un poco más. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, voluptas. Doloremque, quae. Repellat, inventore! Dicta, omnis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, reprehenderit! </p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, rerum saepe. Consequuntur laudantium eveniet neque non dolore, sint quam, ipsa facilis earum aspernatur blanditiis nemo voluptatum esse harum doloremque omnis!</p>
        </div>
    );
}

export default Prueba;
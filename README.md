---
![Badge en Desarrollo](https://img.shields.io/badge/STATUS-EN%20DESAROLLO-green)

# Frontend Predicción Calidad de Vida

## Introducción
Este proyecto es el **frontend** de una aplicación que predice la calidad de vida. Desarrollado con **React y Vite**, se encarga de la interfaz de usuario, la interacción con la API de predicción (backend) y la visualización de los resultados. Permite a los usuarios ingresar variables y recibir una predicción de calidad de vida de forma intuitiva.

# README
[![platform][windows]][windows]

---
## Tabla de contenido
- [Frontend Predicción Calidad de Vida](#frontend-predicción-calidad-de-vida)
  - [Introducción](#introducción)
- [README](#readme)
  - [Tabla de contenido](#table-of-contents)
  - [Requerimientos](#requirements)
  - [Instalación](#instalación)
  - [Uso](#uso)
  - [Author](#author)
  - [License](#license)
  - [Documentación](#documentation)

---
## Requerimientos
| Platform | Language | IDE | Frameworks & Libraries |
|:----------------------------------------------------------------------------------------:|:-------------------------:|:---:|:--------------------------:|
| [![platform][windows]][windows] [![platform][linux]][linux] [![platform][docker]][docker] | [![language][Javascript]][Javascript] |[![ide][Visual Studio Code]][Visual Studio Code]| `react`, `react-dom`, `react-router-dom`, `react-redux`, `redux`, `zustand`, `bootstrap` |

---
## Instalación
- Clonar el repositorio
~~~bash
git clone <URL-del-repositorio-frontend>
~~~

- Instalar dependencias
~~~bash
npm install
# o si usas yarn
# yarn install
~~~

> Si no tienes el archivo `package.json`, puedes instalar manualmente:

~~~txt
bootstrap@^5.3.3
react@^19.1.0
react-dom@^19.1.0
react-redux@^9.2.0
react-router-dom@^7.6.1
redux@^5.0.1
zustand@^5.0.5
~~~

- Configurar variables de entorno (si aplica)
  Crea un archivo `.env` en la raíz del proyecto para definir variables de entorno, como la URL de tu API backend.

  Ejemplo de `.env`:
~~~
VITE_API_URL=http://localhost:5000
~~~

- Ejecutar la aplicación
~~~bash
npm run dev
# o si usas yarn
# yarn dev
~~~

---
## Uso
Una vez que el frontend esté en ejecución, podrás acceder a la aplicación web a través de tu navegador (normalmente en `http://localhost:5173/`).

La aplicación te permitirá:
- Ingresar las 29 variables necesarias para la predicción de calidad de vida.
- Enviar los datos a la API backend.
- Visualizar el resultado de la predicción de manera clara.

Asegúrate de que tu **API backend** esté funcionando para que el frontend pueda realizar las peticiones correctamente.

---
## Author
Julio Alvarez, [linkedin][myLinkedin].
Juan Carlos Ruales, [linkedin][rualesLinkedin].

---
## License
README is available under the license. See the [LICENSE](LICENSE) file for more info.

---
## Documentation
No hay una documentación específica del frontend aparte de este README. Para la documentación de la API backend, consulta su propio README o accede a su Swagger UI si está disponible.

[myLinkedin]:https://www.linkedin.com/in/julio-alvarez-dev/
[rualesLinkedin]:https://www.linkedin.com/in/juancarlosrualescaicedo/
[Javascript]:https://img.shields.io/badge/JavaScript-ES6+-F7DF1E.svg?colorA=F7DF1E&logo=javascript&logoColor=black
[Windows]:https://img.shields.io/badge/Windows-0078D6.svg?colorA=0078D6&logo=windows&logoColor=white
[Linux]:https://img.shields.io/badge/Linux-FCC624.svg?colorA=FCC624&logo=linux&logoColor=black
[Docker]:https://img.shields.io/badge/Docker-2496ED.svg?colorA=2496ED&logo=docker&logoColor=white
[Visual Studio Code]: https://img.shields.io/badge/Visual_Studio_Code-007ACC.svg?colorA=007ACC&logo=visual-studio-code&logoColor=white
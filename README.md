# Frontend_Veterinario

Este repositorio pertenece al Frontend de la aplicación para una clínica veterinaria que complementa al Backend anteriormente creado, lo que lo convierte en la primera aplicación FullStack desarrollada en este curso.

## Tecnología utilizada

Este Frontend está basado en React como librería principal de JavaScript y Create-React app para la visualización del resultado. Además hemos implementado la herramienta Redux para la gestión del estado, que explicaremos posteriormente.Además otra novedad implementada es el Sass como complemento de CSS.

## Creación de la aplicación

Para crear esta aplicación hemos utilizado un Backend externo al que nos conectamos a traves de los fetch(llamadas a la API),y nos genera un intercambio de datos entre el Front y el Back. Una vez creada esta union, generamos distintos tipos de llamadas a la API, tanto para enviar información (al crear un usuario) o para recibir(al entrar a tu perfil). 
Además hemos segiudo un patrón para la estructura de carpetas, donde tenemos unarchivo componentes, en el que añadimos por separado cada componente de la aplicación(el Header, el Footer...).También esta la carpeta de Container, donde añadimos las páginas y en ellas los componentes de las que constan como se puede ver a continuación:


En la carpeta Services, hemos añadido el script apiConsumer.js que es el archivo que contiene las rutas para cominucarse con la API.En Store se encuntra el Reducer, que explicaremos en el siguiente apartado.

## Gestion de estados

Una de las novedades de esta aplicación es la implementación de Redux y la gestión del estado.Para ello contamos con 3 elementos principales:

### Reducer

Esta función es la que se encarga de gestionar los eventos. Cuando le llegue la acción que hayamos creado, mandará una está acción al componente que tenga que ejecutarla. Esto se consigue gracias al Dispatch, elemento que manda la acción, y al Suscribe, que es el que recibe esta acción.

Este  reducer consta de un estado que queremos cambiar, un estado inical y una accion, que son los parámetros que recibe como podemos ver:


    const reducer = (currentState = initalState, action) => {
    
Dentro de esta función se crean las condiciones para que  el estado cambie. En el caso del login el estado inical, constaría como False, y al ejecutarse, este estado cambiaría segun la acción que reciba:

    if(action.type === "LOGIN"){
        return{
            userLogged: action.payload
        }
    }
    
Lo que retorna es un nuevo estado, que permanecerá hasta que llegue otra acción que determine un nuevo cambio de estado:

    return currentState
    
    
De esta forma manejamos los estados que creamos necesarios añadir según las distintas funcionalidades que la aplicación necesita.

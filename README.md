# CLOUD AT HOME

## Propósito del proyecto

Este proyecto ha sido realizado con el fin de aprender a usar y familizarme con Docker y los contenedores. Otra de las motivaciones ha sido aprender Flask y crear una API sencilla. Finalmente, acabé realizando un frontend básico con Astro, Preact y Tailwind para que todo el mundo pudiese usar la aplicación sin necesidad de crear o añadir nada al proyecto. 
Soy conocedor de los posibles fallos e imperfecciones del proyecto pero, como he dicho anteriornmente, la principal intención del mismo es el aprendizaje.

## Despliegue

Será necesario establecer el directorio local en el que se almacenarán los datos
```
$ export HOME_STORAGE="/home/user/example"
```
Por otro lado, si queremos usar un entorno de producción y acceder a la aplicación desde todos los dispositivos de la red, antes debemos establecer en la variable API_URL la ip del dispositivo en el que estamos ejecutando la app. Ejemplo:
```
$ export API_URL="http://192.168.1.10:8000"
```

Antes de desplegar el proyecto debemos seguir los siguientes pasos para instalar las dependencias:
```
$ cd client
$ npm install
```

> Si obtenemos algún warning, podemos ejecutar 'npm install' nuevamente o eliminar la carpeta node_modules y el archivo package-lock.json y nuevamente ejecutar 'npm install'

### Desplegar el proyecto para producción
```
$ docker compose up
```

### Desplegar el proyecto para desarrollo
```
$ docker compose -f docker-compose-dev.yml up
```

> Para parar el proyecto en ambos casos hemos de sustituir 'up' por 'down'

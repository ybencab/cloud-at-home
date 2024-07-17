# CLOUD AT HOME

> Serán necesario establecer el directorio local en el que se almacenarán los datos
```
$ export HOME_STORAGE="/home/user/example"
```

## Desplegar el proyecto para producción
```
$ docker compose up
```

## Desplegar el proyecto para desarrollo
```
$ docker compose -f docker-compose-dev.yml up
```

> Para parar el proyecto en ambos casos hemos de sustituir 'up' por 'down'



  <p align="center"> Ejercicio Dojo que maneja la administracion de distintas tablas , consultas a otra API y generacion de reporte</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>

## Descripcion

[Nest] El Proyecto fue elaborado usando Nest JS y Typeorm .
 ```bash
 Los ejercicios desarrollados en este repositorio fueron los siguientes.
 1.- Diseñar una API Rest con las operaciones básicas (CRUD).
 2.- Desarrollar un endpoint que muestre las metrica de los repositorios que pertenezcan a una tribu
 3.- Generar un reporte CSV de las metricas de los repositorios que pertenezcan a una tribu
```
## Instalacion
  ### Pre Instalacion
  Se debe tener instalado  Nestjs en la maquina donde se ejecuta el proyecto, el comando para la instalacion es el siguiente
  ```bash
  npm i -g @nestjs/cli
  ```
Una vez descargado el proyecto , ejecuta el siguiente comando
```bash
$ npm install
```

## Ejecutando la App
Consideraciones: Antes de ejecutar este proyecto 
  - Se debe ejecutar el proyecto kevinortizmockservice_repo : siguiendo los mismos pasos [npm install] and [npm run start:dev]
  - El proyecto kevinortizmockservice_repo escucha en el puerto 3000
  - El proyecto de este readme kevinortizglobant_repo escucha en el puerto 3001  
```bash
  
# Comando para ejecutar el proyecto
$ npm run start:dev

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

  
## Database
Al momento que se descarga el proyecto, automaticamente un archivo de env se descarga con el proyecto con el acceso respectivo.

## Documentacion del Api
Para acceder a la documentacion del Api se debe ingresar a-traves del endpoint localhost:3000/api



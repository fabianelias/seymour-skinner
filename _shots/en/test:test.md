---
title: "Hablemos de Clean Architecture con Nesjt y TypeScript" 
date: '2022-03-16'
description: hablemos de la Arquitectura limpia
excerpt: ¿Qué es Clean Architecrue?
topic: me
toc: true
tags: arquitectura|clean
coverImage: ''
readingTime: '5 min'
---

### Qué es la Arquitectura limpia 
 
Este tipo de arquitectura intenta integrar algunas cosas de las principales arquitecturas modernas, tales como la Arquitectura Hexagonal, la arquitectura de cebolla y la arquitectura de gritos dentro de una arquitectura principal. 

> "Sus arquitecturas deben informar a los lectores sobre el sistema, no sobre los marcos que utilizó en su sistema" - Robert C.Martin 
 
![Imagen](https://blog.cleancoder.com/uncle-bob/images/2012-08-13-the-clean-architecture/CleanArchitecture.jpg) 
 fuente: blog.cleancoder.com 
 
El diagrama anterior representa algo muy diferente a lo que normalmente estamos acostumbrados, MVC entre los más comunes. Comó vemos en la imagen cada anillo representa una capa distinta en la aplicación, lo veremos a continuación:
 
- Entidades: Esta capa contiene cada `entidad` comercial que forma nuestra aplicación.
- Dependecia: La dependencia de nuestra app es de afuera hacia adentro, Significa que la capa de entidades es totalmente independiente y la capa "web" depente de todas las demás capas.
- Casos de usos:  En esta capa centralizamos la lógica de  un caso de uso comercial específicos.
- Controladores: Los controladores y presentadores son la capa intermedia, lo que básicamente tienen la tarea de entrada y salida de casos de uso.
- Frameworks: Esta última capa contiene todas las implementaciones específicas,la base de datos que se ocupará, framework web, manejos de log, errores, excepciones, etc 
 
> “ Esta capa es donde van todos los detalles. La web es un detalle. La base de datos es un detalle. Mantenemos estas cosas afuera donde pueden hacer poco daño” - Robert C. Martin 
 

 


 


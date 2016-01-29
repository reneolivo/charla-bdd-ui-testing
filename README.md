# Charla BDD UI Testing

### Cómo correr el proyecto?

* Abre dos terminales
* terminal 1: `npm install` (solo la primera vez)
* terminal 1: `npm run watch`
* terminal 2: `npm run cucumber`

Deben de ir a `test/e2e/features`, abrir cualquier archivo `.feature` y taguear un **Scenario** con con `@runThis`. Solo un **Scenario**, no un **Feature**. Problemas técnicos :'(. Puntos extras al que lo arregle.

Pueden crear archivos `.feature`, ponerle un `@runThis` al **Feature** completo, esperar a cucumber y ver las definiciones de los pasos en la consola. Copienlas y peguenlas en un archivo dentro del folder `test/e2e/features/step_definition`. Fijense de los demás para que vean como funcionan.

Cualquier pregunta la pueden hacer creando un issue aquí en github o en DevsDo en Facebook.

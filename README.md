# Proyecto en Astro incluyendo varia tecnologías útiles

## Blog

La implementacion de Blog, ha requerido establecer la configuracion del 'output' a 'hybrid', es actualmente una feature experimental y permite tener definidos por defecto las paginas como estaticas para que su generación sea en tiempo de compilación.

Para definir una pagina como SSR deberemos eportar una variable 'export const prerender = false;'

Ver <https://docs.astro.build/es/guides/server-side-rendering/#renderizado-h%C3%ADbrido>

## Node

Se ha incluido un servidor de node y la configuración básica para despliegue en Railway.

Lo que hace node es cargar la app de Astro como Middleware, dento de la configuracion de Express y servir así las rutas estaticas de Astro, y todo lo que nosotro queramos especificar en el fichero server.js

Hay que especificar las variables de entorno DOMAIN_URL y PORT en desarrollo y en producción solamente DOMAIN_URL, ya que PORT es la que viene preestablecida por Railway en producción

Se ha desplegado a Railway desde local, usando el CLI de Railway (railway up), pero podemos hacer perfectamente un deploy desde el despliegue a la rama de Github

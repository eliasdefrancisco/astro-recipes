# Proyecto en Astro incluyendo varia tecnologías útiles

Algunos datos útiles
## Fonts

Se han implementado las funtente usando [Fontsource](https://fontsource.org)
Hay que instalar la fuente en concreto con npm
Hay que hacer los imports de la fuente y las variantes a usar
Hay que usarla desde css con font-family y font-weight


## CSS

Se ha implementado Pure-css, en la carpeta styles, también un archivo, globals.css para clases globales y variables. Para modificación de componentes, se hace desde la etiqueta < style > del template o el componente en cuestión

## Sitemaps

Al compilar el proyecto se generan los archivos de sitemaps en la carpeta /dist

## Blog

La implementacion de Blog, ha requerido establecer la configuracion del 'output' a 'hybrid', es actualmente una feature experimental y permite tener definidos por defecto las paginas como estaticas para que su generación sea en tiempo de compilación.

Para definir una pagina como SSR deberemos eportar una variable 'export const prerender = false;'

Ver <https://docs.astro.build/es/guides/server-side-rendering/#renderizado-h%C3%ADbrido>

## Node

Se ha incluido un servidor de node y la configuración básica para despliegue en Railway.

Lo que hace node es cargar la app de Astro como Middleware, dento de la configuracion de Express y servir así las rutas estaticas de Astro, y todo lo que nosotro queramos especificar en el fichero server.js

Hay que especificar las variables de entorno DOMAIN_URL y PORT en desarrollo y en producción solamente DOMAIN_URL, ya que PORT es la que viene preestablecida por Railway en producción

Se ha desplegado a Railway desde local, usando el CLI de Railway (railway up), pero podemos hacer perfectamente un deploy desde el despliegue a la rama de Github

<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Proceso de servicio al cliente en redes sociales
    
    .bg-color-22.mb-5.tarjeta.px-4
      .row.align-items-center
        .col-lg-auto.order-2
          img.d-none.d-lg-flex(src="@/assets/curso/tema5/1.png").mx-auto
        .col-lg.order-1.mb-3.mb-lg-0
          p Los avances tecnológicos y el comercio electrónico han cambiado la interacción, atención y servicio al cliente, este escenario digital promueve una interacción inmediata a través de portales, sitios web o redes sociales, lo cual genera un proceso. Una vez revise el siguiente recurso educativo tendrá la capacidad de describir el paso a paso de un proceso de servicio al cliente en las redes sociales.

          p.mb-0 ¡Adelante!
    
    .bg-full-width.bg-fondo-2
      .p-4.p-lg-5
        LineaTiempoC.color-acento-contenido.bg-color-white.tarjeta.p-3.p-lg-4
          .row(titulo="Paso 1").justify-content-center.align-items-center.p-3.p-lg-4
            .col-lg-6.mb-4.mb-lg-0
              h5 Conformar un equipo
              p Integrar un equipo para capacitarlo en relación con la atención en redes. Un elemento a considerarse es humanizar la interacción y el servicio de ellos con el cliente.
            .col-lg-4
              figure
                img(src='@/assets/curso/tema5/2.png', alt='')
          .row(titulo="Paso 2").justify-content-center.align-items-center.p-3.p-lg-4
            .col-lg-6.mb-4.mb-lg-0
              h5 Diseño de guía específica
              p Planear un documento que dé cuenta del espíritu de la marca y de la empresa. Algunas indicaciones son: tono de voz de la marca, idiomas, tiempo ante cada requerimiento y el protocolo de resolución de problemas.
            .col-lg-4
              figure
                img(src='@/assets/curso/tema5/3.png', alt='')
          .row(titulo="Paso 3").justify-content-center.align-items-center.p-3.p-lg-4
            .col-lg-6.mb-4.mb-lg-0
              h5 Información clara
              p Dar claridad de los horarios de atención al cliente y compartir los correos de contacto o números telefónicos para generar mayor comodidad a los clientes.
            .col-lg-4
              figure
                img(src='@/assets/curso/tema5/4.png', alt='')
          .row(titulo="Paso 4").justify-content-center.align-items-center.p-3.p-lg-4
            .col-lg-6.mb-4.mb-lg-0
              h5 Preguntas frecuentes
              p Identificar cuáles son las preguntas o reclamaciones comunes, para generar un manual en la web que remita a los clientes. Esto optimizará la atención.
            .col-lg-4
              figure
                img(src='@/assets/curso/tema5/5.png', alt='')
          .row(titulo="Paso 5").justify-content-center.align-items-center.p-3.p-lg-4
            .col-lg-6.mb-4.mb-lg-0
              h5 Anticiparse
              p Prever cuáles serán las dudas, preguntas ante su producto y servicio, por eso es necesario crear contenido exclusivo que pueda tener en sus redes, no esperar a tener problemas.
            .col-lg-4
              figure
                img(src='@/assets/curso/tema5/6.png', alt='')
          .row(titulo="Paso 6").justify-content-center.align-items-center.p-3.p-lg-4
            .col-lg-6.mb-4.mb-lg-0
              h5 Seguimiento
              p Implementar una base de datos de los clientes, para resolver y gestionar la solicitud, volverse a contactar para medir el grado de satisfacción con la respuesta ofrecida, esto ayuda a la fidelización de los clientes.
            .col-lg-4
              figure
                img(src='@/assets/curso/tema5/7.png', alt='')
          .row(titulo="Paso 7").justify-content-center.align-items-center.p-3.p-lg-4
            .col-lg-6.mb-4.mb-lg-0
              h5 Medición
              p Evaluar el impacto de las acciones emprendidas en las redes, esto permitirá visionar, validar o reestructurar la estrategia de atención al cliente en redes.
            .col-lg-4
              figure
                img(src='@/assets/curso/tema5/8.png', alt='')
   


</template>

<script>
export default {
  name: 'Tema5',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>

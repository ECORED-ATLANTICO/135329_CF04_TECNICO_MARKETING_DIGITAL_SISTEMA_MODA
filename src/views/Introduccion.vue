<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/intro/1.png", data-aos="zoom-in")
      .col-lg-8
        p Pensar en el servicio y atención al cliente nos acerca a todo lo que pasa con el consumidor durante su decisión de adquirir un bien o servicio. Todo no debe percibirse como una simple acción transaccional, sino que involucra una experiencia que haga sentir la compra como una buena decisión.
        .bg-color-20.tarjeta.p-4
            p.mb-0 En este sentido, el presente componente realizará un recorrido por los fundamentos básicos del servicio y atención al cliente con la intención de que pueda reconocer el estilo de comunicación asociado al servicio al cliente en redes sociales, de acuerdo con las políticas de la empresa. 
    

</template>

<script>
export default {
  name: 'Introduccion',
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

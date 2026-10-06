<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 6
      h1 Etiqueta empresarial
    
    img(src="@/assets/curso/tema6/1.png", alt="Imagen decorativa")
    
    .row.justify-content-center.align-items-center.z-2.mb-5
      .col-lg-10(data-aos="fade-up")
        p.banner-text La globalización del mundo de los negocios les exige a las empresas generar una imagen positiva, basada en reglas que rigen las relaciones interpersonales y empresariales, aplicarlas genera distinción frente a clientes, colaboradores y colegas como un sello de garantía en ese escenario competido del mundo empresarial, es allí donde cobra vida el concepto de etiqueta empresarial.
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema6/2.png", data-aos="zoom-in")
      .col-lg-8
        p Rodríguez (2021) conceptualiza la etiqueta empresarial como la asimilación de normas de cortesía y pautas de comportamiento corporativo que buscan sensibilizar la atención comercial, asegurando interacciones fluidas que fortalecen la identidad de la organización frente a sus colaboradores y clientes externos.  
        p Pero en el escenario empresarial se refiere a esa codificación de modales y comportamientos que determinan las formas y modos de relaciones; para generar un buen ambiente deben estar basados en la misión y visión empresarial y en la cultura de servicio definido por la empresa.
        .bg-color-21.tarjeta.p-4
            p.mb-0 Para recopilar esas pautas de comportamiento y criterios empresariales se debe generar un protocolo, entendido como ese documento que establece los principios, normas y actuaciones que se deben generar en la empresa, no es obligatorio, pero sí esencial para construir un ambiente laboral saludable. Este documento tiene unas características y un contenido, por ello, es importante que revise el siguiente recurso de aprendizaje.
    
    AcordionA(tipo="a" clase-tarjeta="tarjeta bg-color-11")
      div(titulo="Contenido")
        p.ms-5 Cada empresa genera el contenido de su protocolo, según su dinámica, su tamaño y su cultura de servicio, pero hay puntos esenciales que se deben tener en cuenta. Ellos son:
        .row.mb-5.justify-content-center.align-items-center
          .col-lg-4.mb-3.mb-lg-0
            .tarjeta-avatar-b.align-items-center
              .tarjeta-avatar-b__img
                img(src='@/assets/curso/tema6/4.svg' alt='')
              .tarjeta.tarjeta--azul
                .p-4
                  p.mb-0 El organigrama empresarial.
          .col-lg-4.mb-3.mb-lg-0
            .tarjeta-avatar-b.align-items-center
              .tarjeta-avatar-b__img
                img(src='@/assets/curso/tema6/5.svg' alt='')
              .tarjeta.tarjeta--azul
                .p-3
                  p.mb-0 Imagen corporativa y los indicadores de uso.
          .col-lg-4.mb-3.mb-lg-0
            .tarjeta-avatar-b.align-items-center
              .tarjeta-avatar-b__img
                img(src='@/assets/curso/tema6/6.svg' alt='')
              .tarjeta.tarjeta--azul
                .p-3
                  p.mb-0 Normas de interacción y convivencia.
        .row.mb-5.justify-content-center.align-items-center
          .col-lg-4.mb-3.mb-lg-0
            .tarjeta-avatar-b.align-items-center
              .tarjeta-avatar-b__img
                img(src='@/assets/curso/tema6/7.svg' alt='')
              .tarjeta.tarjeta--azul
                .p-3
                  p.mb-0 Códigos de comportamiento que den cuenta de horarios, vestimenta, relaciones y tratamientos personales.
          .col-lg-4.mb-3.mb-lg-0
            .tarjeta-avatar-b.align-items-center
              .tarjeta-avatar-b__img
                img(src='@/assets/curso/tema6/8.svg' alt='')
              .tarjeta.tarjeta--azul
                .p-4
                  p.mb-0 Líneas de comunicación corporativa, estableciendo canales y estilos.
      div(titulo="Características")
        p.ms-5 El protocolo empresarial debe reunir como mínimo las siguientes características:
        .row.mb-5.justify-content-center.align-items-center.ms-4
          .col-lg-3.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema6/3.png")
          .col-lg-9
            .row.mb-3.justify-content-center.align-items-center
              .col-lg-6.mb-3.mb-lg-0
                .tarjeta-avatar-b.align-items-center
                  .tarjeta-avatar-b__img
                    img(src='@/assets/curso/tema6/9.svg' alt='')
                  .tarjeta.tarjeta--azul
                    .p-4
                      p.mb-0 Comprensible a todos los empleados.
              .col-lg-6.mb-3.mb-lg-0
                .tarjeta-avatar-b.align-items-center
                  .tarjeta-avatar-b__img
                    img(src='@/assets/curso/tema6/10.svg' alt='')
                  .tarjeta.tarjeta--azul
                    .p-3
                      p.mb-0 Práctico en cuanto a retomar situaciones cercanas a los empleados.
            .row.justify-content-center.align-items-center
              .col-lg-6.mb-3.mb-lg-0
                .tarjeta-avatar-b.align-items-center
                  .tarjeta-avatar-b__img
                    img(src='@/assets/curso/tema6/11.svg' alt='')
                  .tarjeta.tarjeta--azul
                    .p-4
                      p.mb-0 Accesible en cuanto a disponer de los medios para la venta.
              .col-lg-6.mb-3.mb-lg-0
                .tarjeta-avatar-b.align-items-center
                  .tarjeta-avatar-b__img
                    img(src='@/assets/curso/tema6/12.svg' alt='')
                  .tarjeta.tarjeta--azul
                    .p-4
                      p.mb-0 Flexible al contexto sin perder su sentido.
            
            


</template>

<script>
export default {
  name: 'Tema6',
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

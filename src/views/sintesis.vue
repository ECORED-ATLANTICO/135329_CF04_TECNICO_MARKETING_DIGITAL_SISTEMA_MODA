<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.col-md-6.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/intro/2.png", data-aos="zoom-in")
      .col-lg-8.col-md-12
        p El Componente Formativo Servicio y atención al cliente ofrece al aprendiz una comprensión sobre los fundamentos del servicio al cliente en entornos empresariales y digitales, abordando conceptos relacionados con la definición de cliente, los tipos de clientes y las técnicas utilizadas para brindar atención efectiva. Asimismo, se estudian los acuerdos de niveles de servicio, la evaluación del servicio y el manejo de quejas y sugerencias, elementos que permiten comprender la importancia de generar experiencias positivas para los consumidores en diferentes contextos organizacionales.
        .bg-color-25.tarjeta.p-4
          p.mb-0 El componente también desarrolla temas relacionados con la calidad y cultura de servicio, las dimensiones de la calidad del servicio y los modelos asociados a su evaluación, además, aborda los canales de servicio al cliente en redes sociales, las nuevas tendencias en la interacción digital y el proceso de atención en entornos virtuales. Finalmente, se presentan elementos de etiqueta empresarial y normativa legal relacionada con la protección de datos y el manejo ético de la información.
    
    
    .row.justify-content-center
      .col-lg-12.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg", alt="La figura describe la estructura del componente Servicio y atención al cliente. El contenido se organiza en siete temas principales: fundamentos del servicio al cliente, calidad y cultura de servicio, tipos de canales para el servicio al cliente en redes sociales, nuevas tendencias en servicio al cliente en redes sociales, proceso de servicio al cliente en redes sociales, etiqueta empresarial y normatividad legal vigente y ética en el manejo de datos. Dentro del tema Fundamentos del servicio al cliente se incluyen tres subtemas: definición de cliente, tipos de cliente y tipos y técnicas de servicio al cliente.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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

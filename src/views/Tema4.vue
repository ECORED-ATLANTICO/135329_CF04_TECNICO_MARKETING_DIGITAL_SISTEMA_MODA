<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Nuevas tendencias en servicio al cliente en redes sociales
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema4/1.png", data-aos="zoom-in")
      .col-lg-8
        p Hoy en día, los desarrollos en la tecnología y la evolución del <em>marketing</em> al escenario digital han generado nuevos esquemas de relación, interacción y atención al cliente; la web posibilita nuevas maneras de interactuar con ellos, pues los consumidores se convierten en protagonistas, con varias opciones de interacción; comparten información (foros, <em>chats</em>), premian o castigan contenidos de las diferentes empresas (marcadores sociales), generan opinión (<em>blogs</em>), producen información (<em>wikis</em>, redes sociales).
        .bg-color-21.tarjeta.p-4
            p.mb-0 Este nuevo perfil de cliente crea retos para desarrollar relaciones estrechas entre usuarios, marcas y empresas. Consulte el siguiente recurso de aprendizaje para que pueda aplicar algunas tendencias en su contexto laboral.

    figure.mb-5
      .video.mb-2
        iframe(width="560" height="315" src="https://www.youtube.com/embed/GzboPLCn170" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video: Nuevas tendencias


</template>

<script>
export default {
  name: 'Tema4',
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

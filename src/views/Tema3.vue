<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Tipos de canales para el servicio al cliente en redes sociales
    
    img(src="@/assets/curso/tema3/1.png", alt="Imagen decorativa")
    
    .row.justify-content-center.align-items-center.z-2.mb-5
      .col-lg-10(data-aos="fade-up")
        p.banner-text Las redes sociales generan una nueva manera de atención al cliente que no se debe visionar exclusivamente para manejar quejas y reclamaciones. Estas permiten la creación de entornos y vínculos entre los involucrados de este proceso. A continuación, se presentan varios canales para que pueda seleccionar algunos según el segmento de cliente.
    
    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
        h3.titulo-con-imagen__texto ¿Cómo generar entornos que favorezcan la creación de vínculos con los clientes?
      
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/2.png", data-aos="zoom-in")
      .col-lg-8
        .bg-color-23.tarjeta.p-4.mb-3
          p.mb-0 Los entornos virtuales cada vez son más propicios para la creación de relaciones entre las personas y organizaciones en torno a un interés común. Intercambiar ideas, encontrar información y comprar son algunas acciones que generan un vínculo en los entornos digitales.
        p Las dinámicas dadas en el entorno virtual son útiles para el servicio y atención al cliente porque ayudan a fidelizar y atraer clientes, pero ¿cuáles son los entornos para crear estos vínculos?, a continuación, algunos de ellos.
    
    
    TabsB.color-secundario.mb-5
      .py-4.py-md-5(titulo="<em>E-mail marketing</em>" :icono="require('@/assets/componentes/2.svg')")
        .row.px-3.px-lg-5.align-items-center
          .col-md-8.mb-4.mb-md-0
            h4 <em>E-mail marketing</em>
            p Herramienta de comunicación, que permite enviar contenido y valor, masivamente a clientes potenciales o prospectos. A pesar de ser masiva es personalizable y nada invasivo.
          .col-md-4
            figure
              img(src='@/assets/curso/tema3/3.png', alt='')
      .py-4.py-md-5(titulo="Teléfono" :icono="require('@/assets/componentes/3.svg')")
        .row.px-3.px-lg-5.align-items-center
          .col-md-8.mb-4.mb-md-0
            h4 Teléfono
            p Asociado a las redes, el teléfono sigue siendo uno de los canales de atención más importantes y utilizados, debido a la rapidez del servicio y a la atención inmediata.
          .col-md-4
            figure
              img(src='@/assets/curso/tema3/4.png', alt='')
      .py-4.py-md-5(titulo="Redes sociales" :icono="require('@/assets/componentes/4.svg')")
        .row.px-3.px-lg-5.align-items-center
          .col-md-8.mb-4.mb-md-0
            h4 Redes sociales
            p Estas plataformas digitales cada vez son de mayor interés entre las personas porque hay un intercambio social a través de contenido. Es importante reconocerlas para crear vínculos con los clientes.
          .col-md-4
            figure
              img(src='@/assets/curso/tema3/5.png', alt='')
      .py-4.py-md-5(titulo="Videoconferencias" :icono="require('@/assets/componentes/5.svg')")
        .row.px-3.px-lg-5.align-items-center
          .col-md-8.mb-4.mb-md-0
            h4 Videoconferencias
            p Este canal de atención se ha vuelto tendencia, pues a través de Skype o videollamadas se da una atención rápida, personalizada y humanizada.
          .col-md-4
            figure
              img(src='@/assets/curso/tema3/6.png', alt='')
      .py-4.py-md-5(titulo="SMS (<em>Short Message Service</em>)" :icono="require('@/assets/componentes/6.svg')")
        .row.px-3.px-lg-5.align-items-center
          .col-md-8.mb-4.mb-md-0
            h4 SMS (<em>Short Message Service</em>)
            p Es un canal de mensajería de texto utilizado para la comunicación con el cliente. Se emplea para enviar información breve, como la confirmación del estado de un pedido o de un servicio.
          .col-md-4
            figure
              img(src='@/assets/curso/tema3/7.png', alt='')
      .py-4.py-md-5(titulo="<em>Chats online</em>" :icono="require('@/assets/componentes/7.svg')")
        .row.px-3.px-lg-5.align-items-center
          .col-md-8.mb-4.mb-md-0
            h4 <em>Chats online</em>
            p Son cada vez más comunes y se están implementando como un canal híbrido, pues usan <em>chatbots</em>, robots que realizan el contacto inicial con el cliente, ahorrando tiempo y recursos.
          .col-md-4
            figure
              img(src='@/assets/curso/tema3/8.png', alt='')
    
    .bg-color-22.mb-5.tarjeta.px-4
      .row.align-items-center
        .col-lg-auto.order-2
          img.d-none.d-lg-flex(src="@/assets/curso/tema3/9.png").mx-auto
        .col-lg.order-1.mb-3.mb-lg-0
          p.mb-0 Recuerde que la presencia de la organización en los entornos digitales debe considerar la comunicación desde aspectos como el respeto por la diferencia, la confianza entre el cliente y la empresa y, el buen tratamiento de los datos personales de las personas.
        

</template>

<script>
export default {
  name: 'Tema3',
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

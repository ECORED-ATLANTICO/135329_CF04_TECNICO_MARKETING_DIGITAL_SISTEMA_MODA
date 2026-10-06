<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 7
      h1 Normativa legal vigente y ética en el manejo de datos (protección de datos)
    
    .bg-color-22.mb-5.tarjeta.px-4
      .row.align-items-center
        .col-lg-auto.mb-3.mb-lg-0
          img.d-none.d-lg-flex(src="@/assets/curso/tema7/1.png").mx-auto
        .col-lg
          p La normativa de protección de datos personales reconoce y protege el derecho de las personas a conocer, rectificar y actualizar su información almacenada en base de datos o archivos que sean susceptibles de tratamiento por parte de entidades privadas o públicas. En Colombia rige la siguiente normativa. 
    
    .row.mb-5.justify-content-center.align-items-center
      .col-md-8.col-lg-4.mb-3.mb-lg-0.order-lg-2
        figure
          img(src="@/assets/curso/tema7/2.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        TabsA.color-acento-botones
          .tarjeta.color-acento-botones--borde.p-4(titulo="Constitución Política")
            h4 Constitución Política
            p Con respecto al manejo de los datos, la Constitución Política de Colombia, en su artículo 15 menciona que todas las personas tienen derecho a su intimidad personal y familiar y a su buen nombre, y el Estado debe respetarlos y hacerlos respetar. De igual modo, tienen derecho a conocer, actualizar y rectificar las informaciones que se hayan recogido sobre ellas en bancos de datos y en archivos de entidades públicas y privadas. 
            p.mb-0 En la recolección, tratamiento y circulación de datos se respetarán la libertad y demás garantías consagradas en la Constitución. 
          .tarjeta.color-acento-botones--borde.p-4(titulo="Ley Estatutaria 1266 del 2008 ")
            h4 Ley Estatutaria 1266 del 2008 
            p.mb-0 En el marco de esta ley se dictan las disposiciones generales del hábeas data, regulando el manejo de la información contenida en bases de datos personales, en especial la financiera, crediticia, comercial y de servicios. En los artículos 2 y 4 se definen las normas especiales para la confidencialidad de los datos y los principios aplicables al tratamiento de la información. 
          .tarjeta.color-acento-botones--borde.p-4(titulo="La Ley 1581 de 2012")
            h4 La Ley 1581 de 2012
            p Esta ley establece los lineamientos para la protección de datos personales y la autorización de los titulares para el tratamiento de estos. Además, define que los datos personales corresponden a cualquier tipo de información asociada o que pueda asociarse a una o varias personas naturales determinadas o determinables, como el nombre, la edad, el sexo, el estado civil o el domicilio, entre otros. 
            p Asimismo, esta ley constituye el régimen general de protección de datos personales en Colombia y su reglamentación se encuentra compilada en el Decreto 1074 de 2015, Decreto Único Reglamentario del Sector Comercio, Industria y Turismo. Adicionalmente, para las comunicaciones comerciales y la protección de la intimidad de los consumidores, es pertinente considerar las disposiciones de la Ley 2300 de 2023. Además, define que hay diferentes tipos de datos: 
            ul.lista-ul--color.ms-3.mb-0
              li.mb-3.d-flex
                i.fas.fa-circle.fa-xs.mt-2
                | Dato privado.
              li.mb-3.d-flex
                i.fas.fa-circle.fa-xs.mt-2
                | Dato semiprivado.
              li.mb-3.d-flex
                i.fas.fa-circle.fa-xs.mt-2
                | Dato público.
          .tarjeta.color-acento-botones--borde.p-4(titulo="Decreto 1377 de 2013")
            h4 Decreto 1377 de 2013
            p Por medio de este decreto se reglamentó parcialmente la Ley 1581 de 2012, estableciendo disposiciones relacionadas con la autorización para el tratamiento de datos personales, los derechos de los titulares y las responsabilidades de quienes administran bases de datos. 
            p.mb-0 Actualmente, sus disposiciones se encuentran compiladas en el Decreto 1074 de 2015, que reúne la reglamentación vigente en materia de protección de datos personales. 
    
    img(src="@/assets/curso/tema7/3.png", alt="Imagen decorativa")
    
    .row.justify-content-center.align-items-center.z-2.mb-5
      .col-lg-10(data-aos="fade-down")
        p.banner-text Se ha finalizado esta experiencia de aprendizaje relacionada con el servicio y atención al cliente en las redes sociales. Se espera que los conocimientos, habilidades y actitudes desarrollados tengan sentido en la solución de problemas y la transformación de procesos en su contexto laboral. 


</template>

<script>
export default {
  name: 'Tema7',
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

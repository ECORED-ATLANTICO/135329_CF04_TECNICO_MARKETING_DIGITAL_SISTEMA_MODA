<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Fundamentos del servicio al cliente
    
    img(src="@/assets/curso/tema1/1.png", alt="Imagen decorativa")
    
    .row.justify-content-center.align-items-center.z-2.mb-5
      .col-lg-10(data-aos="fade-up")
        p.banner-text En la actualidad se trabaja desde los diferentes escenarios empresariales para asegurar que todos los empleados brinden un buen servicio como clave para lograr el objetivo de generar una experiencia dinámica, proactiva y de calidad para el cliente.
    
    .bloque-texto-g.color-secundario.bg-color-1.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema1/2.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p Por eso se puede decir que servicio al cliente es un conjunto de acciones y estrategias que se realizan antes, durante y después del proceso de interacción y transacción entre una organización proveedora de productos, servicios y un cliente.
        <br>
        p.mb-0 El servicio al cliente lleva a las organizaciones a identificar las necesidades de los consumidores para satisfacerlas a través de soluciones tales como productos y servicios.
    
    .bg-full-width.bg-fondo-1
      .px-4.px-lg-5
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-4.mb-3
            figure
              img(src="@/assets/curso/tema1/3.png", data-aos="zoom-in")
          .col-lg-5
            .bg-color-9.px-5.py-4
              p El servicio al cliente no solamente es la atención amable, sino cumplir con las expectativas del cliente, así como solucionar los reclamos o descontentos que puedan suscitarse.
              p.mb-0 Existen varios autores que indican que, a través de la satisfacción de un servicio se deriva la fidelización del cliente. Desde este punto de vista se encuentran autores como Montoya y Boyero (2012) quienes afirman que el servicio al cliente se define como un conjunto de vivencias dadas entre la organización y el cliente para generar una relación adecuada, de la cual depende su supervivencia y éxito.
          .col-lg-3.mb-3
            figure
              img(src="@/assets/curso/tema1/4.png", data-aos="zoom-in")
        
        .bg-color-22.mb-5.tarjeta.px-4
          .row.align-items-center
            .col-lg-auto.order-2
              img.d-none.d-lg-flex(src="@/assets/curso/tema1/5.png").mx-auto
            .col-lg.order-1.mb-3.mb-lg-0
              p.mb-0 Sin duda, el servicio al cliente constituye para las empresas y organizaciones uno de los esfuerzos más grandes, pues demanda una impecable y rigurosa atención para la prestación de este, teniendo en cuenta su relevancia se establecen a nivel empresarial y organizacional un conjunto de acciones para ganarse la lealtad de los clientes o consumidores, ofreciendo un valor adicional más allá de la prestación básica con el fin de incrementar su grado de satisfacción y aceptación al momento de consumir el servicio o producto.
        
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-3.mb-3
            figure
              img(src="@/assets/curso/tema1/6.png", data-aos="zoom-in")
          .col-lg-9
            p Hoy, en el escenario digital especialmente del sector moda se encuentran conceptos enfocados en la satisfacción de expectativas y necesidades del cliente, que a menudo se superponen a su vivencia y experiencia, que, si bien todos son diferentes, son parte esencial de una estrategia general de servicio al cliente.
            p Con la revolución de la tecnología, la interrelación entre marca y cliente se ha visto acentuada en generar la experiencia del cliente como centro de la estrategia digital.
            .bg-color-25.tarjeta.p-4
              p La experiencia del cliente representa esa trayectoria que inicia en la decisión, compra y uso de un producto que hace un consumidor y que tiene gran impacto en la decisión de compra, lealtad y fidelidad del consumidor hacia la marca.
              p.mb-0 La satisfacción del cliente podría definirse como el cumplimiento o superación de las expectativas del cliente con el producto; valorar su grado de satisfacción es un indicador de la calidad en el servicio al cliente.
    
    separador
    
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.1 Definición de cliente
    
    img(src="@/assets/curso/tema1/7.png", alt="Imagen decorativa")
    
    .row.justify-content-center.align-items-center.z-2.mb-5
      .col-lg-10(data-aos="fade-up")
        p.banner-text El cliente es uno de los activos más valiosos de la organización o empresa y todas las políticas, productos y servicios están dirigidos a la satisfacción de sus expectativas. Existen varias definiciones de cliente, entre ellas se pueden citar las siguientes.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.mb-3.order-2
        figure
          img(src="@/assets/curso/tema1/8.png", data-aos="zoom-in")
      .col-lg-8.order-1.mb-3.mb-lg-0
        .bloque-texto-b.color-secundario.p-3(data-aos="fade-up")
          .bloque-texto-b__texto
            i.fas.fa-quote-left
            p.mb-0 El cliente representa el papel más importante en el tema de la calidad, pues es quien demanda de la empresa los bienes y servicios que necesita y luego es quien valora los resultados
            i.fas.fa-quote-right
          .bloque-texto-d__autor 
            .h5.mb-0   (Según Pérez, 2016)
    
    p Es decir que el cliente es un comprador viable o real de los productos o servicios de la empresa.

    p.mb-5 En el contexto del sector moda y del comercio electrónico podemos hablar de un cliente que demanda bienes y servicios a partir de la información y experiencias de compra de otros clientes. Este cliente tiene decisión informada con respecto a un bien o servicio deseado. El cliente moda tiene unas características particulares:  

    .row.justify-content-center.align-items-center.z-2.mb-5
      .col-lg-10
        .titulo-sexto.color-acento-contenido.mb-4
          h5 Figura 1.
          span Características particulares del cliente moda
        img.mb-2.d-none.d-sm-block(data-aos="fade-up", src="@/assets/curso/tema1/9.svg", alt="La figura describe las características particulares del cliente de moda mediante una secuencia de cuatro aspectos. Primero, se informa antes de comprar; segundo, busca tendencias a un precio competitivo; tercero, busca calidad en un sentido amplio; y cuarto, desea vivir experiencias interactivas durante el proceso de compra.")
        img.mb-2.d-sm-none(data-aos="fade-up", src="@/assets/curso/tema1/9-1.svg", alt="La figura describe las características particulares del cliente de moda mediante una secuencia de cuatro aspectos. Primero, se informa antes de comprar; segundo, busca tendencias a un precio competitivo; tercero, busca calidad en un sentido amplio; y cuarto, desea vivir experiencias interactivas durante el proceso de compra.")
    
    .cajon.color-acento-contenido.bg-color-9.p-4.mb-4
      p.mb-0 Con lo mencionado y su experiencia en las redes sociales ¿qué otras características podría mencionar sobre el cliente?, hacer este hallazgo le permitirá conectar lo que aprendió con su reflexión. Adelante con su formación.
  
    separador
    
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.2 Tipos de cliente
    
    img(src="@/assets/curso/tema1/10.png", alt="Imagen decorativa")
    
    .row.justify-content-center.align-items-center.z-2.mb-5
      .col-lg-10(data-aos="fade-up")
        p.banner-text Para tener una estrategia de <em>marketing</em> ajustada y equilibrada hacia el cliente y hacia la empresa es necesario entender que existen muchos tipos de clientes, no todos los clientes o usuarios son iguales, ni tienen la misma naturaleza. Thompson (2006) habla sobre los distintos tipos de clientes del mercado actual y los clasifica según frecuencia, vigencia de volumen de compra, influencia y nivel de satisfacción, así:
    
    .row.mb-5.justify-content-center.align-items-center
      .col-md-8.col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/11.png", data-aos="zoom-in")
      .col-lg-8
        LineaTiempoD.color-secundario
          div(numero="A" titulo="Clasificación según su vigencia") 
            p La clasificación ayuda a identificar a los clientes que a la fecha están comprando y, además, a hacer retención de estos. Finalmente, ante los clientes que no compran se deben elaborar acciones para intentar atraerlos.
            p <b>Clientes activos</b>: son aquellos que están comprando o que hace poco compraron.
            p.mb-0 <b>Clientes inactivos</b>: no realizan compras desde hace un tiempo.
          div(numero="B" titulo="Clasificación según la frecuencia de compra") 
            p Esta clasificación entrega insumos para generar múltiples estrategias para potenciar la frecuencia de los clientes, convirtiendo a los de compra habitual y compra ocasional en clientes frecuentes.
            p <b>Clientes de compra frecuente</b>: son aquellos que presentan un intervalo de compra corto y permanente, mostrando rasgos de satisfacción con la empresa, sus productos y servicios.
            p <b>Clientes de compra habitual</b>: son aquellos que realizan compras de vez en cuando, es decir, con cierta regularidad, igualmente se evidencia satisfacción con la empresa, el producto y el servicio.
            p.mb-0 <b>Clientes de compra ocasional</b>: son aquellos que realizan compras por única vez.
          div(numero="C" titulo="Clasificación según el volumen de compra") 
            p Esta clasificación da información importante para generar estrategias para captar clientes, potencializando su promedio de volumen de compra.
            p <b>Clientes con alto volumen de compras</b>: son por lo general pocos clientes que generan mayor cantidad de compras que el grueso de los clientes.
            p <b>Clientes con promedio de volumen de compras</b>: pero en un nivel medio.
            p.mb-0 <b>Clientes con bajo volumen de compras</b>: que ocasionalmente compran por debajo del promedio.
          div(numero="D" titulo="Clasificación según el nivel de satisfacción") 
            p Esta clasificación da información para mejorar la estrategia de satisfacción y complacencia de todos los clientes.
            p <b>Clientes complacidos</b>: clientes que percibieron que el producto o servicio excedió sus expectativas, generando afinidad y lealtad con la marca.
            p <b>Clientes satisfechos</b>: clientes que apreciaron el desempeño de la empresa, el producto y el servicio como compatible con sus expectativas.
            p.mb-0 <b>Clientes insatisfechos</b>: clientes que apreciaron el desempeño de la empresa, el producto y/o el servicio por debajo de sus expectativas.
          div(numero="E" titulo="Clasificación según el grado de influencia") 
            p Un cliente con influencia ayuda a generar mayor afluencia de clientes nuevos, por eso esta clasificación es vital para establecer estrategias de fidelización de clientes y ampliación de nuevos clientes.
            p <b>Clientes altamente influyentes</b>: generalmente son clientes con reconocimiento social y su influencia se da desde una percepción positiva o negativa.
            p <b>Clientes de regular influencia</b>: clientes con influencia en grupos más reducidos.
            p.mb-0 <b>Clientes de influencia a nivel familiar</b>: clientes que logran influenciar escenarios más pequeños como su familia o su grupo de amigos.
          div(numero="F" titulo="Clasificación según su participación") 
            p <b>Cliente interno</b>: es aquel que participa en el desarrollo del producto o servicio de la empresa, es el empleado, socio, proveedor y tercerizado.
            p.mb-0 <b>Cliente externo</b>: es aquel que contrata o paga el producto final.
          div(numero="G" titulo="Clasificación clientes potenciales") 
            p.mb-0 Los clientes potenciales se pueden ubicar de acuerdo con su frecuencia, volumen de compra y su nivel de influencia, es necesario generar estrategias para diferenciarlos y buscar un enfoque para cada tipo en particular.
    

    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.3 Tipos y técnicas de servicio al cliente
    
    .row.justify-content-center.align-items-center.mb-5
      .col-md-12
        p.mb-0 Hoy no solo es necesario estudiar la tipología y características de los clientes, sino crear estrategias y técnicas para ofrecer cada vez un mejor servicio al cliente. A continuación, se presenta una serie de tipos y técnicas para ofrecer una experiencia positiva, inolvidable y única a los clientes. Haga una lista en su mente de cuáles podría utilizar y por qué.

    .bg-full-width.bg-fondo-2
      .p-4.p-lg-5
        LineaTiempoC.color-acento-contenido.bg-color-white.tarjeta.p-3.p-lg-4
          .row(titulo="Acuerdo de Niveles de Servicio (ANS)").justify-content-center.align-items-center
            .col-lg-6.mb-4.mb-lg-0
              h5 Acuerdo de Niveles de Servicio (ANS)
              p Constituye en una herramienta de negociación para fijar la calidad del servicio comprometido, se da entre el cliente y el proveedor. Estos ANS ayudan a gestionar aspectos como tiempo de respuesta, personal asignado al servicio, garantía, servicio posventa y otras características del servicio, los cuales deben estar descritos como acciones comprometidas entre las partes. En el documento es una promesa de servicio, y cuando se cumpla y se supere el nivel comprometido aumenta la competitividad y genera diferencia con respecto a la competencia.
              p Los acuerdos de niveles de servicios son punto de referencia para la mejora continua, ya que genera insumos por la medición de niveles de servicio que se está prestando.
            .col-lg-4
              figure
                img(src='@/assets/curso/tema1/12.png', alt='')
          .row(titulo="Evaluación del servicio").justify-content-center.align-items-center
            .col-lg-6.mb-4.mb-lg-0
              h5 Evaluación del servicio
              p El servicio es un valor subjetivo y no tangible, depende del punto de vista del cliente, por eso puede variar significativamente; ya que se hace necesaria la generación de métodos de tabulación de información que produzcan los instrumentos de evaluación del producto y el servicio. Los resultados que arrojen estos ayudarán a mejorar procesos y acciones de la organización para la fidelización de los clientes. Esta evaluación permite generar directrices de cambio en procura de lograr cumplir los ANS. Uno de los instrumentos puede ser:
              p Libreta de calificación del cliente que permite calificar el nivel del servicio que el cliente vive, estructurado en tres niveles: 1. Atributos clave de la calidad del servicio, 2. La importancia relativa de los atributos, 3. Puntaje del negocio en atributos.
            .col-lg-4
              figure
                img(src='@/assets/curso/tema1/13.png', alt='')
          .row(titulo="Manejo de peticiones, quejas, reclamos y sugerencias").justify-content-center.align-items-center
            .col-lg-6.mb-4.mb-lg-0
              h5 Manejo de peticiones, quejas, reclamos y sugerencias
              p Las PQRS son actividades básicas del proceso de servicio al cliente que responden a sus necesidades, deseos y expectativas. Estas ayudan a crear estrategias y programas de análisis y resolución eficaz desde una escucha atenta y receptiva a las observaciones de los clientes para dar una solución pronta a su reclamo. Esta acción puede garantizar clientes fieles y satisfechos aun cuando hayan vivido fallas y, genera posibilidades de subsanar errores y promover mejoras.
              p El procedimiento para atender de manera efectiva las quejas y reclamos debe contar con los siguientes factores como principios básicos:
            .col-lg-4
              figure
                img(src='@/assets/curso/tema1/14.png', alt='')
            
            .row.justify-content-center.align-items-center
              .col-lg-3.mb-4.mb-lg-0.p-3
                ul.lista-ul--color.ms-3
                  li.mb-3.d-flex
                    i.fas.fa-circle.fa-xs.mt-2.bg-color-18
                    | Saber escuchar.
                  li.mb-3.d-flex
                    i.fas.fa-circle.fa-xs.mt-2.bg-color-18
                    | Saber preguntar.
              .col-lg-3.mb-4.mb-lg-0
                ul.lista-ul--color.ms-3
                  li.mb-3.d-flex
                    i.fas.fa-circle.fa-xs.mt-2.bg-color-18
                    | Saber disculparse.
                  li.mb-3.d-flex
                    i.fas.fa-circle.fa-xs.mt-2.bg-color-18
                    | Saber alinearse con el cliente.
              .col-lg-4.mb-4.mb-lg-0
                ul.lista-ul--color.ms-3
                  li.mb-3.d-flex
                    i.fas.fa-circle.fa-xs.mt-2.bg-color-18
                    | Saber buscar opciones de solución.
                  li.mb-3.d-flex
                    i.fas.fa-circle.fa-xs.mt-2.bg-color-18
                    | Saber compensar el inconveniente ocasionado.
                
          .row(titulo="Fidelización del servicio").justify-content-center.align-items-center
            .col-lg-6.mb-4.mb-lg-0
              h5 Fidelización del servicio
              p Implica diferenciarse de la competencia cuando responde a los requerimientos del cliente de forma personalizada para conocer, comprender y superar sus necesidades, no solo supone retener clientes sino atraer clientes potenciales. Es necesario generar estrategias de fidelización efectivas, capaces de propiciar confianza y lealtad, lo que implica un permanente ejercicio entre el cliente, el producto y la interacción de la empresa y el cliente.
            .col-lg-4
              figure
                img(src='@/assets/curso/tema1/15.png', alt='')
          .row(titulo="Sistema de Gestión de las Relaciones con los Clientes (CRM)").justify-content-center.align-items-center
            .col-lg-6.mb-4.mb-lg-0
              h5 Sistema de Gestión de las Relaciones con los Clientes (CRM)
              p Las empresas deben generar sistemas que le permitan permanecer conectadas con sus clientes para agilizar sus procesos y mejorar la rentabilidad, esto lo posibilita el CRM o gestión de relaciones con clientes, cuyo objetivo gira en torno a la actuación sistémica y coordinada de la empresa para garantizar que el cliente viva una experiencia que sobrepase sus expectativas.
              p Este sistema entrega información de sus clientes, que ayuda a incrementar el conocimiento acerca de ellos y construir relaciones altamente rentables y duraderas.
            .col-lg-4
              figure
                img(src='@/assets/curso/tema1/17.png', alt='')
          .row(titulo="Valores que mejoran el servicio al cliente").justify-content-center.align-items-center
            .col-lg-6.mb-4.mb-lg-0
              h5 Valores que mejoran el servicio al cliente
              p El éxito de toda organización radica en el buen servicio, por eso el desafío es lograr un producto o servicio de calidad, en el marco de superación de expectativas del cliente y un servicio que lo cautive y lo convierta en facilitador para vincular a otros.
              p Es la identidad organizacional que encarna los valores y los irradia a dar seguridad, confianza y respaldo a los clientes, generando fortalecimiento empresarial. A continuación, se relacionan algunos de los valores que son fundamentales en la prestación de un excelente servicio al cliente.
              .row.justify-content-center.align-items-center
                .col-lg-6.mb-4.mb-lg-0
                  ul.lista-ul--color.ms-3
                    li.mb-3.d-flex
                      i.fas.fa-circle.fa-xs.mt-2.bg-color-18
                      | Sentido de pertenencia.
                    li.mb-3.d-flex
                      i.fas.fa-circle.fa-xs.mt-2.bg-color-18
                      | Orientación al cliente.
                .col-lg-6.mb-4.mb-lg-0
                  ul.lista-ul--color.ms-3
                    li.mb-3.d-flex
                      i.fas.fa-circle.fa-xs.mt-2.bg-color-18
                      | Comunicación asertiva.
                    li.mb-3.d-flex
                      i.fas.fa-circle.fa-xs.mt-2.bg-color-18
                      | Trabajo en equipo.
            .col-lg-4
              figure
                img(src='@/assets/curso/tema1/16.png', alt='')
            
          .row(titulo="Técnicas de servicio al cliente").justify-content-center.align-items-center
            .col-lg-6.mb-4.mb-lg-0
              h5 Técnicas de servicio al cliente
              p Este proceso de servicio al cliente se da a través de diferentes técnicas:
              p <b><em>Chat</em> en vivo</b>: se ha popularizado esta posibilidad de servicio digital al cliente, es implementada por agentes o incluso por un robot.
              p <b><em>Email</em></b>: continúa siendo el modelo de atención más implementado, posibilita efectividad, precisión y estructuración de la atención y comunicación con el cliente.
              p <b>Atención telefónica</b>: modelo tradicional que genera conexión personal y emocional con el cliente, identificando su necesidad y posibilitando empatizar con el cliente.
              p <b>Formularios web</b>: toda web o <em>app</em> debe tener como mínimo un formulario de contacto con el cliente. Es similar a la técnica del correo, aunque también puede derivar en que alguien contacte por teléfono directamente al cliente.
              p <b>Redes sociales</b>: generan respuestas rápidas con el cliente.
            .col-lg-4
              figure
                img(src='@/assets/curso/tema1/18.png', alt='')
          

          
          

 
</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
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

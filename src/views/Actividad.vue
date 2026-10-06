<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema: 'Verificación conceptual del servicio y atención al cliente',
      titulo: 'Cuestionario',
      introduccion:
        '<b>Objetivo:</b> verificar la comprensión del aprendiz sobre los fundamentos del servicio y atención al cliente mediante la resolución de preguntas de verdadero o falso, a partir de la identificación de conceptos clave desarrollados en el componente formativo relacionados con tipos de cliente, calidad del servicio, canales de atención en redes sociales, etiqueta empresarial y normativa legal sobre protección de datos.',
      barajarPreguntas: true,
      titulo_aprobado: '¡EXCELENTE!',
      titulo_reprobado: 'VUELVA A INTENTARLO',
      preguntas: [
        {
          id: 1,
          texto: '¿Qué propósito tiene el servicio al cliente organizacional?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Generar experiencias satisfactorias mediante atención orientada al cliente.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Sustituir completamente los procesos comerciales de la empresa.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Reducir el contacto entre clientes y organizaciones.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Eliminar estrategias de fidelización en los mercados actuales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto: '¿Qué representa el cliente para una organización?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Un recurso operativo destinado exclusivamente al área comercial.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Uno de los activos más valiosos de la organización.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Un participante ocasional sin influencia sobre la empresa.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Un comprador interesado únicamente en el precio ofrecido.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            '¿Qué busca principalmente una estrategia efectiva de servicio al cliente?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Reducir la interacción entre consumidores y organizaciones modernas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Eliminar procesos posteriores a la venta del producto.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Satisfacer necesidades y fortalecer relaciones con los clientes.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Sustituir acciones de comunicación por respuestas automatizadas exclusivamente.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto: '¿Qué aspecto fortalece la experiencia positiva del cliente?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Limitar la comunicación durante el proceso de compra.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Ignorar expectativas manifestadas por los consumidores actuales.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Eliminar acciones posteriores a la entrega del producto.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Brindar atención oportuna durante toda la relación comercial.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto: '¿Cómo pueden clasificarse los clientes según el componente?',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Según vigencia, frecuencia, volumen, satisfacción e influencia.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Únicamente según edad y nivel de ingresos económicos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Exclusivamente por ubicación geográfica y profesión desempeñada.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Solamente mediante criterios financieros establecidos por la empresa.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto: '¿Qué finalidad tienen las técnicas de servicio al cliente?',
          imagen: require('@/assets/actividad/imagen6.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Sustituir la comunicación personalizada por procesos automatizados.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Mejorar la experiencia mediante atención organizada y eficiente.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Eliminar mecanismos para gestionar solicitudes de los clientes.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Reducir la calidad del servicio ofrecido por la organización.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto: '¿Qué incluye un Acuerdo de Nivel de Servicio ANS?',
          imagen: require('@/assets/actividad/imagen7.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Únicamente las políticas internas de recursos humanos empresariales.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Solamente las campañas comerciales dirigidas al mercado objetivo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Condiciones, tiempos y compromisos acordados entre proveedor y cliente.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Exclusivamente indicadores financieros relacionados con la organización.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto:
            '¿Qué beneficio aporta implementar acuerdos de nivel de servicio?',
          imagen: require('@/assets/actividad/imagen8.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Eliminar responsabilidades asumidas por proveedores y clientes.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Reducir mecanismos para evaluar la calidad del servicio.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Sustituir indicadores por apreciaciones subjetivas del consumidor.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Establecer compromisos claros para mejorar continuamente el servicio.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto: '¿Qué influye directamente en la satisfacción del cliente?',
          imagen: require('@/assets/actividad/imagen9.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'La percepción sobre la atención recibida durante su experiencia.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Únicamente el precio final pagado por el consumidor.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La eliminación de procesos posteriores a la compra.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Exclusivamente la publicidad realizada antes de la venta.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto: '¿Por qué es importante conocer los tipos de clientes?',
          imagen: require('@/assets/actividad/imagen10.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Eliminar procesos de segmentación desarrollados por la organización.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Adaptar estrategias de atención según características y necesidades.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Sustituir el servicio personalizado por atención estandarizada permanente.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Reducir la capacidad competitiva frente a otros mercados.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 11,
          texto: '¿Qué objetivo tiene un protocolo de atención al cliente?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Eliminar procedimientos durante la atención comercial al cliente.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Estandarizar acciones para brindar atención eficiente y consistente.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Sustituir la comunicación directa mediante procesos automáticos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Reducir responsabilidades del personal encargado del servicio.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 12,
          texto: '¿Qué representa una PQR dentro del servicio al cliente?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Un mecanismo para gestionar peticiones, quejas y reclamos.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Un proceso exclusivo para realizar campañas comerciales digitales.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Una estrategia utilizada únicamente para captar nuevos clientes.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Un documento relacionado con procesos financieros empresariales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 13,
          texto: '¿Qué aporta gestionar correctamente una PQR del cliente?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Eliminar oportunidades de mejora identificadas durante la atención.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Fortalecer la confianza y mejorar continuamente el servicio prestado.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Sustituir protocolos establecidos para responder solicitudes ciudadanas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Reducir el seguimiento realizado sobre inconformidades del cliente.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 14,
          texto: '¿Qué caracteriza un momento de verdad durante el servicio?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Una interacción donde el cliente forma percepciones del servicio.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Un proceso exclusivo de evaluación financiera empresarial interna.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Una actividad administrativa sin contacto con los consumidores.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Un procedimiento utilizado únicamente para controlar inventarios organizacionales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 15,
          texto: '¿Qué favorece una experiencia positiva del cliente?',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Atención coherente durante todos los puntos de contacto establecidos.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Disminuir comunicación entre colaboradores y consumidores frecuentes.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Eliminar seguimiento después de finalizar el proceso comercial.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Sustituir atención personalizada por respuestas completamente automatizadas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 16,
          texto:
            '¿Qué propósito tiene la fidelización dentro del servicio al cliente?',
          imagen: require('@/assets/actividad/imagen6.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Reducir relaciones comerciales mantenidas con clientes habituales.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Promover relaciones duraderas mediante experiencias satisfactorias continuas.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Sustituir programas de servicio por promociones ocasionales únicamente.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Eliminar estrategias enfocadas en conservar clientes existentes.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 17,
          texto:
            '¿Qué elemento fortalece la percepción de calidad del servicio?',
          imagen: require('@/assets/actividad/imagen7.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Incrementar tiempos de respuesta frente a solicitudes recibidas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Ignorar expectativas manifestadas por los diferentes clientes atendidos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Cumplir compromisos establecidos con oportunidad y confiabilidad permanente.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Disminuir disponibilidad de canales para atender requerimientos ciudadanos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 18,
          texto:
            '¿Qué beneficio aporta evaluar continuamente el servicio prestado?',
          imagen: require('@/assets/actividad/imagen8.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Eliminar procesos orientados al mejoramiento continuo institucional.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Sustituir indicadores mediante apreciaciones personales del equipo operativo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Reducir oportunidades para fortalecer satisfacción del cliente organizacional.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Identificar oportunidades para mejorar la atención y los procesos.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 19,
          texto:
            '¿Qué relación existe entre servicio y fidelización del cliente?',
          imagen: require('@/assets/actividad/imagen9.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Un servicio de calidad fortalece relaciones comerciales duraderas.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'La fidelización elimina necesidad de brindar atención personalizada.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'El servicio únicamente depende del precio ofrecido al consumidor.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'La fidelización reemplaza estrategias de mejoramiento del servicio.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 20,
          texto:
            '¿Qué resultado genera una cultura organizacional orientada al servicio?',
          imagen: require('@/assets/actividad/imagen10.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Reducir compromiso del personal con los clientes atendidos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Fortalecer satisfacción, confianza y competitividad de la organización.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Sustituir procesos de calidad por acciones comerciales aisladas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Eliminar mecanismos de evaluación sobre la experiencia del cliente.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado:
        '¡Excelente! Lo felicito, ha superado la actividad y demuestra sólidos conocimientos sobre el componente formativo.',
      mensaje_final_reprobado:
        'No ha superado la actividad. Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>

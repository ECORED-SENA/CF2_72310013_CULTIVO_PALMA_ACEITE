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
      tema: 'Microcontroladores y sensores',
      titulo: 'Cuestionario',
      introduccion:
        'Fortalecer los conocimientos sobre la gestión del cultivo de palma de aceite mediante la ejecución adecuada de labores mantenimiento y una cosecha planificada, técnica y oportuna, garantizando óptimo desarrollo, productividad, calidad del fruto y eficiencia operativa, bajo criterios ambientales, sociales y económicos sostenibles.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO.',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál es el principal objetivo de las labores culturales en el cultivo de palma de aceite?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Aumentar de manera gradual la aplicación y utilización de productos agroquímicos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Garantizar condiciones adecuadas para el desarrollo y crecimiento del cultivo.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Disminuir la cantidad de trabajadores y herramientas en la plantación agrícola.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Incrementar progresivamente la siembra planificada de cultivos agrícolas asociados.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            '¿Por qué es importante el control de malezas en los primeros años de la plantación?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Porque mejora la estética del cultivo de palma de aceite.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Porque evita la erosión del suelo de palma únicamente.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Porque reduce la competencia por agua, luz y nutrientes.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Porque elimina todas las plantas consideradas muy benéficas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            '¿Cada cuánto se recomienda realizar la limpieza del plato en palmas hasta 2 años?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Cada 15 días.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Cada 30 días.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Cada 60 días.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Una vez al año.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            '¿Cuáles son las etapas del manejo integrado de plagas y enfermedades?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Diagnóstico, erradicación y fertilización.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Monitoreo, cosecha y transporte.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Prevención, observación y aplicación.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Aplicación, erradicación y riego.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            '¿Qué daño ocasiona principalmente el barrenador de raíces (Sagalassa valida)?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Defoliación total y progresiva de la palma de aceite cultivada.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Perforación profunda y progresiva del cogollo central de la palma.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Daño al sistema radicular afectando la absorción de nutrientes.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Caída prematura y abundante sin control de frutos maduros.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto:
            '¿Cuál es el agente causal del anillo rojo en la palma de aceite?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: '<i>Bursaphelenchus cocophilus.</i>',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: '<i>Phytomonas staheli.</i>',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: '<i>Phytophthora palmivora.</i>',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: '<i>Haplaxius crudus.</i>',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto:
            '¿Dónde debe aplicarse el fertilizante durante el primer año de siembra?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'En las interlíneas exclusivamente por razones de control y seguimiento.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Aplicarlo directamente sobre el tronco principal de la palma de aceite a los 90 días.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Solo en los canales de drenaje del cultivo por estandarización, control y desarrollo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'En el plato, en forma circular, dejando espacio alrededor del tronco.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto:
            '¿Cuál es uno de los principales objetivos de la poda en palma de aceite?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Reducir la altura de la palma.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Incrementar la sombra en el cultivo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Mantener un número adecuado de hojas para mejorar la fotosíntesis.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Eliminar completamente las inflorescencias.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto:
            '¿Por qué la cosecha es considerada una de las labores más importantes en el cultivo de palma de aceite?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Porque reduce el número de trabajadores.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Porque garantiza exclusivamente el transporte del fruto.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Porque de su planificación depende la cantidad y calidad del aceite obtenido.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Porque elimina la necesidad de mantenimiento del cultivo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto:
            '¿Cuál es el mejor indicador para determinar el estado óptimo de madurez del racimo?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El tamaño del racimo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'El número de hojas de la palma.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La altura del estípite.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'El desprendimiento natural de frutos.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 11,
          texto:
            '¿Cuándo se recomienda realizar ciclos de cosecha entre 8 y 10 días?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'En palmas menores de seis años.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'En palmas mayores de seis años.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'En época de verano únicamente.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'En plantaciones con baja producción.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 12,
          texto:
            '¿Qué herramienta se utiliza para cosechar racimos ubicados a más de 4 metros de altura?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Cincel.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Palín.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Chuza.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Cuchillo malayo.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 13,
          texto:
            'Para estimar la producción futura, se recomienda seleccionar como muestra:',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El 10% de las palmas del lote.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'El 5% de las palmas del lote.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Todas las palmas adultas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Solo las palmas jóvenes.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 14,
          texto:
            '¿Cómo realizan los cosechadores el recorrido del lote durante la cosecha?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Avanzando en zigzag por todo el lote.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Caminando en líneas rectas continuas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Trabajando únicamente en los bordes.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Siguiendo caminos previamente trazados.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 15,
          texto: '¿Cómo se verifica la madurez de los racimos en la cosecha?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Por el tamaño total del racimo de la planta.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Mediante el desprendimiento de frutos.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Observando el color de las hojas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Midiendo la altura de la palma.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 16,
          texto: '¿Cuál es una práctica adecuada en el control de calidad del proceso?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Cortar todas las hojas disponibles.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Dejar frutos maduros en la palma.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Realizar solo cortes necesarios de hojas.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Mezclar frutos verdes con maduros.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 17,
          texto: '¿Qué se debe evitar durante la cosecha para mantener la calidad del fruto?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Transportar racimos en canastas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Cortar únicamente racimos maduros.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Organizar racimos en puntos definidos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Dejar fruta madura sin cosechar.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 18,
          texto: '¿Cómo debe realizarse el corte correcto del racimo?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'En forma de V y a ras del racimo.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Con corte recto lejos del racimo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Con corte superficial sobre hojas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'De manera irregular sobre el tallo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 19,
          texto: '¿Qué característica tiene el transporte realizado por el hombre?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Alta capacidad y uso de maquinaria.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Transporte exclusivo en vehículos grandes.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Uso de sistemas hidráulicos complejos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Uso de canastas en terrenos difíciles.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 20,
          texto: '¿Cuál es una ventaja del uso de tracción animal en la recolección?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Alta velocidad en grandes distancias.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Mayor capacidad que maquinaria pesada.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Bajo costo y menor compactación del suelo.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Eliminación total del trabajo humano.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>

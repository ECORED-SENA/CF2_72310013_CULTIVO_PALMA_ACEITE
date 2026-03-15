<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Mantenimiento del Cultivo de Palma de Aceite
 
    .row.mb-5
      .col-9.bg-color-1.p-4(data-aos="fade-right")
        p Las labores culturales corresponden a las actividades de mantenimiento y cuidado realizadas después de la siembra para garantizar el adecuado desarrollo y crecimiento del cultivo, mediante prácticas ambientales y socialmente responsables. Su correcta ejecución es fundamental, ya que influye directamente en la calidad y cantidad de la producción. Durante su ciclo vegetativo, la palma requiere control de la competencia vegetal, manejo sanitario frente a plagas y enfermedades, suministro adecuado de agua y nutrientes, y la poda o eliminación de estructuras no funcionales para favorecer su productividad.
      .col-3        
        figure
          img(src="@/assets/curso/tema1/1.png", data-aos="zoom-in", style="max-width: 250px").mx-auto

    //- Inicio Tema1.1
    .row.mt-5
        #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 1.1 Control de malezas
    
    p(data-aos="fade-left") El manejo de la vegetación en palma de aceite es fundamental para reducir la competencia, favorecer el crecimiento y mantener el equilibrio del cultivo. A continuación, conoceremos algunas generalidades.


    //- Carrusel
    .bg-full-width.bg-fondo-slider.mb-3
            .p-4.p-md-5
              SlyderA(tipo="b").bg-white.p-4.tarjeta(data-aos="fade-left")
                .row.align-items-center.p-4.p-md-5
                  .col-lg-5.order-2
                    figure
                      img(src="@/assets/curso/tema1/slide1_01.png")
                  .col-lg-7.order-1.mb-3.mb-lg-0
                    h4 Dinámica de la vegetación en el cultivo de palma de aceite
                    p La palma aceitera es una planta perenne de crecimiento lento, por lo que, a lo largo de la vida productiva de la plantación, las condiciones ambientales del suelo cambian constantemente y generan modificaciones en la flora presente. Estas variaciones influyen directamente en la aparición y desarrollo de diferentes especies vegetales dentro del cultivo.
                    
                .row.align-items-center.p-4.p-md-5
                  .col-lg-5.order-2
                    figure
                      img(src="@/assets/curso/tema1/slide1_02.png")
                  .col-lg-7.order-1.mb-3.mb-lg-0
                    h4 Condiciones ambientales y desarrollo de arvenses
                    p Las características ecológicas propias de las zonas óptimas para el cultivo, como altas temperaturas y abundantes lluvias, favorecen el crecimiento rápido de arvenses o malezas. Estas condiciones permiten la formación de poblaciones vegetales diversificadas que pueden volverse agresivas y competir con la palma por recursos esenciales, haciendo necesario implementar prácticas de control con mayor frecuencia.

                .row.align-items-center.p-4.p-md-5
                  .col-lg-5.order-2
                    figure
                      img(src="@/assets/curso/tema1/slide1_03.png")
                  .col-lg-7.order-1.mb-3.mb-lg-0
                    h4 Plantas benéficas dentro del cultivo
                    p No todas las arvenses representan un efecto negativo, ya que algunas especies cumplen funciones ecológicas importantes cuando se ubican estratégicamente en el lote. Estas plantas presentan características como porte bajo, producción de néctar y polen, y emisión de sustancias que atraen insectos benéficos, incluidos depredadores y parasitoides que ayudan al equilibrio biológico del cultivo. Entre ellas se encuentran especies como uña de gato, hierba de mora, maní forrajero, pega-pega y bajagua, entre otras.

                .row.align-items-center.p-4.p-md-5
                  .col-lg-5.order-2
                    figure
                      img(src="@/assets/curso/tema1/slide1_04.png")
                  .col-lg-7.order-1.mb-3.mb-lg-0
                    h4 Malezas gramíneas y su impacto en palmas jóvenes
                    p Los mayores problemas por malezas se presentan durante los primeros años de la plantación, especialmente por la presencia de gramíneas que crecen rápidamente bajo condiciones de plena luz. Estas especies compiten intensamente con las palmas jóvenes por agua, nutrientes y espacio, afectando su crecimiento y desarrollo. Entre las más comunes se destacan el gramalote, la caminadora y la guinea.

                .row.align-items-center.p-4.p-md-5
                  .col-lg-5.order-2
                    figure
                      img(src="@/assets/curso/tema1/slide1_05.png")
                  .col-lg-7.order-1.mb-3.mb-lg-0
                    h4 Malezas trepadoras y dificultades operativas
                    p Las malezas trepadoras representan otro riesgo importante, ya que ascienden por las palmas y generan competencia por la luz, además de dificultar las labores normales de mantenimiento del cultivo. Especies como meloncillo, pepinillo e Ipomea pueden ocasionar problemas significativos si no se controlan oportunamente.

                .row.align-items-center.p-4.p-md-5
                  .col-lg-5.order-2
                    figure
                      img(src="@/assets/curso/tema1/slide1_06.png")
                  .col-lg-7.order-1.mb-3.mb-lg-0
                    h4 Importancia del control integral de malezas
                    p Durante las etapas iniciales del cultivo es indispensable implementar un programa adecuado de control de malezas tanto en los platos como en las interlíneas. Un manejo deficiente puede afectar seriamente el desarrollo de las palmas y reducir su potencial productivo durante todo el ciclo vegetativo, impactando negativamente la producción futura.

    //- Fin Carrusel

    p(data-aos="fade-left") Debido a la importancia que tiene el control de malezas en el cultivo de palma de aceite, a continuación, se presentan los diferentes tipos de control que se implementan.


    //- Pestanas horizontales
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
        TabsC.color-acento-contenido.mt-1
          .py-3.py-md-4(titulo="Control en plato")
            .row
              .col-md-6
                figure
                  img(src='@/assets/curso/tema1/pestana1_01.png', alt='')                 

              .col-md-6.mb-4.mb-md-0
                h4 Control en plato
                p El plateo es una práctica esencial que mantiene libre de malezas el área alrededor de la palma, favoreciendo su crecimiento y el aprovechamiento de fertilizantes. Inicialmente se realiza de forma manual y luego puede aplicarse control químico, según la edad del cultivo y las condiciones ambientales. 


          .py-3.py-md-4(titulo="Control en interlíneas")
            .row
              .col-md-6.mb-4.mb-md-0
                figure
                  img(src='@/assets/curso/tema1/pestana1_02.png', alt='')

              .col-md-6
                h4 Control en interlíneas
                p Las interlíneas de la plantación suelen estar cubiertas con leguminosas que ayudan a controlar las malezas. Cuando la cobertura crece en exceso y dificulta las labores agrícolas, se realiza rocería superficial o aplastamiento. Si aparecen gramíneas o especies de hoja ancha, su control debe hacerse selectivamente, usando herbicidas específicos o eliminación manual para evitar afectar la cobertura vegetal.
                  

          .py-3.py-md-4(titulo="Recuperación de detalles")
            .row
              .col-md-6.mb-4.mb-md-0
                figure
                  img(src='@/assets/curso/tema1/pestana1_03.png', alt='')

              .col-md-6
                h4 Control en canales de drenaje
                p Los taludes y canales de drenaje pueden ser invadidos por malezas que dificultan el flujo del agua, favorecen la erosión y aumentan el riesgo de plagas y costos de mantenimiento. Por ello, deben mantenerse limpios mediante controles periódicos cada 4 a 6 meses, conservando coberturas vegetales y, en canales primarios, estableciendo arbustos que reduzcan malezas y protejan contra la erosión.

        
        //- Cierres Pestanas horizontales


    //- Fin Tema1.1

    //- Inicio Tema1.1
    .row.mt-5
        #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 1.2 Manejo integrado de plagas y enfermedades
    
    p(data-aos="fade-left") La fragilidad del monocultivo de palma en el trópico favorece plagas y enfermedades; por ello, analizaremos seguidamente los aspectos clave para su manejo integral.


    //- Carrusel
    .bg-full-width.bg-fondo-slider.mb-3
            .p-4.p-md-5
              SlyderA(tipo="b").bg-white.p-4.tarjeta(data-aos="fade-left")
                .row.align-items-center.p-4.p-md-5
                  .col-lg-5.order-2
                    figure
                      img(src="@/assets/curso/tema1/slide2_01.png")
                  .col-lg-7.order-1.mb-3.mb-lg-0
                    h4 ¿Por qué es importante el MIPE (Manejo Integrado de Plagas y Enfermedades)?                    
                    ul.lista-ul
                      li.d-flex
                        i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                        p.mb-0 La palma se cultiva en condiciones tropicales favorables para plagas y enfermedades.
                      li.d-flex
                        i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                        p.mb-0 El monocultivo aumenta la vulnerabilidad del agroecosistema.
                      li.d-flex
                        i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                        p.mb-0 Las plagas pueden afectar raíces, hojas, flores y racimos.
                    
                    p <b>Objetivo:</b> mantener la sanidad del cultivo y la productividad.

                    
                .row.align-items-center.p-4.p-md-5
                  .col-lg-5.order-2
                    figure
                      img(src="@/assets/curso/tema1/slide2_02.png")
                  .col-lg-7.order-1.mb-3.mb-lg-0
                    h4 ¿Qué es MIPE (Manejo Integrado de Plagas y Enfermedades)?
                    p Es un conjunto de estrategias que busca:
                    ul.lista-ul
                      li.d-flex
                        i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                        p.mb-0 Prevenir daños en el cultivo.
                      li.d-flex
                        i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                        p.mb-0 Reducir poblaciones de plagas.
                      li.d-flex
                        i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                        p.mb-0 Minimizar impactos ambientales.
                      li.d-flex
                        i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                        p.mb-0 Proteger la salud humana.

                    p Basado en principios ecológicos.

                .row.align-items-center.p-4.p-md-5
                  .col-lg-5.order-2
                    figure
                      img(src="@/assets/curso/tema1/slide2_03.png")
                  .col-lg-7.order-1.mb-3.mb-lg-0
                    h4 Etapas del MIPE (Manejo Integrado de Plagas y Enfermedades)
                    ul.lista-ul
                      li.d-flex
                        span.me-3.text-bold(style="color:#AD9721") 1.
                        p.mb-0 Prevenir daños en el cultivo.
                      li.d-flex
                        span.me-3.text-bold(style="color:#AD9721") 2.
                        p.mb-0 Reducir poblaciones de plagas.
                      li.d-flex
                        span.me-3.text-bold(style="color:#AD9721") 3.
                        p.mb-0 Minimizar impactos ambientales.

                .row.align-items-center.p-4.p-md-5
                  .col-lg-5.order-2
                    figure
                      img(src="@/assets/curso/tema1/slide2_04.png")
                  .col-lg-7.order-1.mb-3.mb-lg-0
                    h4 Acciones preventivas
                    ul.lista-ul
                      li.d-flex
                        i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                        p.mb-0 Selección de variedades resistentes.
                      li.d-flex
                        i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                        p.mb-0 Fertilización adecuada.
                      li.d-flex
                        i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                        p.mb-0 Manejo de coberturas vegetales.
                      li.d-flex
                        i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                        p.mb-0 Conservación de insectos benéficos.
                      li.d-flex
                        i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                        p.mb-0 Manejo adecuado de residuos de poda.

                    p Reduce la aparición de plagas.

                .row.align-items-center.p-4.p-md-5
                  .col-lg-5.order-2
                    figure
                      img(src="@/assets/curso/tema1/slide2_05.png")
                  .col-lg-7.order-1.mb-3.mb-lg-0
                    h4 Monitoreo del cultivo
                    ul.lista-ul
                      li.d-flex
                        i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                        p.mb-0 Inspecciones periódicas.
                      li.d-flex
                        i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                        p.mb-0 Identificación de plagas y enfermedades.
                      li.d-flex
                        i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                        p.mb-0 Evaluación del nivel de daño.
                      li.d-flex
                        i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                        p.mb-0 Verificación de prácticas preventivas.         

                    p Base para la toma de decisiones.

                .row.align-items-center.p-4.p-md-5
                  .col-lg-5.order-2
                    figure
                      img(src="@/assets/curso/tema1/slide2_06.png")
                  .col-lg-7.order-1.mb-3.mb-lg-0
                    h4 Aplicación (Control)
                    
                    ul.lista-ul
                      li.d-flex
                        i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                        p.mb-0 Físico → trampas.
                      li.d-flex
                        i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                        p.mb-0 Cultural → podas, control de malezas.
                      li.d-flex
                        i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                        p.mb-0 Biológico → enemigos naturales.
                      li.d-flex
                        i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                        p.mb-0 Químico → plaguicidas registrados ICA.       

                      li.d-flex.mt-5
                        i.fas.fa-triangle-exclamation.me-3(style="color:#AD9721")
                        p Uso químico solo cuando sea necesario.
                
                .row.align-items-center.p-4.p-md-5
                  .col-lg-5.order-2
                    figure
                      img(src="@/assets/curso/tema1/slide2_07.png")
                  .col-lg-7.order-1.mb-3.mb-lg-0
                    h4 Enfoque Sostenible
                    p El MIPE busca:
                    ul.lista-ul
                      li.d-flex
                        i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                        p.mb-0 Reducir agroquímicos.
                      li.d-flex
                        i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                        p.mb-0 Proteger el ambiente.  
                      li.d-flex
                        i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                        p.mb-0 Mantener equilibrio ecológico.
                      li.d-flex
                        i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                        p.mb-0 Disminuir costos productivos.

                    

                .row.align-items-center.p-4.p-md-5
                  .col-lg-5.order-2
                    figure
                      img(src="@/assets/curso/tema1/slide2_08.png")
                  .col-lg-7.order-1.mb-3.mb-lg-0
                    h4 Normatividad (Marco fitosanitario)
                    ul.lista-ul
                      li.d-flex
                        i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                        p.mb-0 Normatividad vigente del ICA.
                      li.d-flex
                        i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                        p.mb-0 Resolución 4170 de 2014 y actualizaciones.
                      li.d-flex
                        i.fas.fa-check-circle.color-acento-contenido.me-3(style="color:#AD9721")
                        p.mb-0 Uso responsable de productos registrados.


    //- Fin Carrusel



    //- Título con imagen
    .bg-full-width.mt-5
      .px-4.px-md-5.pb-md-3
      .titulo-con-imagen.mb-5(data-aos="fade-right")
        .titulo-con-imagen__fondo
          img.titulo-con-imagen__imagen(src="@/assets/curso/tema1/imagen-titulos.svg")
          h3.titulo-con-imagen__texto Etapas del manejo (Prevención, Observación, Aplicación)
    //- Título con imagen


    p(data-aos="fade-left") La fragilidad del monocultivo de palma en el trópico favorece plagas y enfermedades; por ello, analizaremos seguidamente los aspectos clave para su manejo integral.Seguidamente se presenta las etapas fundamentales del manejo integrado de plagas y enfermedades aplicadas al cultivo de palma de aceite.


    //- Inicio Tarjetas
    .row
      .col-sm-6.col-lg.mb-4.d-flex.flex-column
        .tarjeta.p-4.rounded-5.h-100.bg-color-6
          .row.justify-content-center.mb-3.align-items-center
            .col-7
              figure
                img(src='@/assets/curso/tema1/tarjeta1_01.svg', alt='')
          h4.card-title.text-center.mb-4 Tendencias
          p.text-center Seleccionar variedades resistentes, aplicar riego y fertilización adecuados, conservar insectos benéficos mediante coberturas vegetales y manejar correctamente los residuos de poda para prevenir plagas y enfermedades.

      .col-sm-6.col-lg.mb-4.d-flex.flex-column
        .tarjeta.p-4.rounded-5.h-100.bg-color-6
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/tema1/tarjeta1_02.svg', alt='')
          h4.card-title.text-center.mb-4 Relación causa–efecto
          p.text-center Consiste en realizar monitoreo periódico para evaluar las prácticas preventivas, detectar plagas y enfermedades y determinar oportunamente las medidas de control necesarias.

      .col-sm-6.col-lg.mb-4.d-flex.flex-column
        .tarjeta.p-4.rounded-5.h-100.bg-color-6
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/tema1/tarjeta1_03.svg', alt='')
          h4.card-title.text-center.mb-4 Comparación con metas productivas
          p.text-center Según los resultados del monitoreo, se aplican medidas de control físicas, culturales, biológicas o químicas, considerando el desarrollo del cultivo y usando agroquímicos registrados por el ICA de manera responsable y segura.
    //- Fin Tarjetas






    //- Fin Tema1.2

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

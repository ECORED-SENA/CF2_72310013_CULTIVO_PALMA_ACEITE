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
                    figure.indicador__container
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

    //- Título con imagen
    .bg-full-width.mt-5
      .px-4.px-md-5.pb-md-3
      .titulo-con-imagen.mb-5(data-aos="fade-right")
        .titulo-con-imagen__fondo
          img.titulo-con-imagen__imagen(src="@/assets/curso/tema1/imagen-titulos.svg")
          h3.titulo-con-imagen__texto Principales plagas
    //- Título con imagen

    p(data-aos="fade-left") Existen numerosas y diversas plagas que pueden afectar los cultivos de palma de aceite, tanto en etapas jóvenes como adultas; a continuación, se presentan las más frecuentes.




    //- Inicio Accordion

    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta acordeonA")
      .row(titulo="Barrenador de raíces (<i>Sagalassa valida</i>)")
          .col-lg-10.ps-lg-5.mb-4.mb-md-0s  
            ul.lista-ul
              li.d-flex
                i.fas.fa-check-circle(style="color:#AD9721").me-3
                p.mb-0 <b>Larvas:</b> blanco hialino, con 20 mm de largo (2 cm). 
              li.d-flex
                i.fas.fa-check-circle(style="color:#AD9721").me-3
                p.mb-0 <b>Pupas:</b> tipo obtecta con los apéndices adheridos al cuerpo. Son marrón claro. 
              li.d-flex
                i.fas.fa-check-circle(style="color:#AD9721").me-3
                p.mb-0 <b>Ciclo biológico:</b> Huevo: 7 – 9 días.  Larva: 50 – 55 días. Pupa: 18 – 21 días. Total: 75 – 85 días.
              li.d-flex
                i.fas.fa-check-circle(style="color:#AD9721").me-3
                p.mb-0 <b>Daños:</b> La larva ataca las raíces de la palma, reduciendo la absorción de nutrientes y el anclaje, causando crecimiento lento, amarillamiento de hojas y disminución del tamaño y peso de los racimos.
              li.d-flex
                i.fas.fa-check-circle(style="color:#AD9721").me-3
                p.mb-0 <b>Control:</b> Aporque con tusas, raquis fibra, hojas o residuos de hierbas, es decir en el plato, como barrera física impidiendo el ingreso de las larvas a las raíces.
              
          .col-lg-2
            figure
                img(src='@/assets/curso/tema1/acordion1_01.png', alt='' style="width: 150px")

      .row(titulo="Cucarrón torito (<i>Strategus aloeus</i>)")
          .col-lg-10.ps-lg-5.mb-4.mb-md-0s  
            ul.lista-ul
              li.d-flex
                i.fas.fa-check-circle(style="color:#AD9721").me-3
                p.mb-0 <b>Ciclo biológico:</b> Huevo: 14,5 días. Larva: 266,5 días. Pupa: 26,8 días. Total: 307,8 días.
              li.d-flex
                i.fas.fa-check-circle(style="color:#AD9721").me-3
                p.mb-0 <b>Larvas:</b> forma de C, tres pares de patas; color blanco con café rojizo. Al inicio miden 10,6 mm de largo y al final del tercer estadio mide 80,3 mm de longitud. 
              li.d-flex
                i.fas.fa-check-circle(style="color:#AD9721").me-3
                p.mb-0 <b>Pupas:</b> inicia de color naranja y se va oscureciendo a medida que se aproxima la adultez. 
              li.d-flex
                i.fas.fa-check-circle(style="color:#AD9721").me-3
                p.mb-0 <b>Adultos:</b> coleópteros, de color negro, que mide entre 4,0 y 5,8 cm de largo; el macho posee tres protuberancias como cuernos en el tórax; la hembra carece de ellas; el macho es más grande que la hembra.
              li.d-flex
                i.fas.fa-check-circle(style="color:#AD9721").me-3
                p.mb-0 <b>Daños:</b> El daño es causado por adultos que perforan el bulbo de palmas jóvenes para alimentarse y reproducirse, afectando el meristemo y facilitando la entrada de microorganismos que provocan enfermedades en el estípite.
              li.d-flex
                i.fas.fa-check-circle(style="color:#AD9721").me-3
                p.mb-0 <b>Control:</b> Realizar monitoreos periódicos, eliminar sitios de reproducción y aplicar control biológico o químico según recomendaciones técnicas, promoviendo además la protección de enemigos naturales de la plaga.
            
          .col-lg-2
            figure
                img(src='@/assets/curso/tema1/acordion1_02.png', alt='' style="width: 150px")

      .row(titulo="Cucarrón o picudo negro (<i>Rhynchophorus palmarum</i>)")
          .col-lg-10.ps-lg-5.mb-4.mb-md-0s  
            ul.lista-ul
              li.d-flex
                i.fas.fa-check-circle(style="color:#AD9721").me-3
                p.mb-0 <b>Ciclo biológico:</b>  Huevo: 3 – 5 días.  Larva: 50 – 70 días. Pupa:  24 días. Total:  77 – 99 días.
              li.d-flex
                i.fas.fa-check-circle(style="color:#AD9721").me-3
                p.mb-0 <b>Larvas:</b> cuerpo muy segmentado de 4,5 a 6 cm, presenta 8 estadios, color marrón. 
              li.d-flex
                i.fas.fa-check-circle(style="color:#AD9721").me-3
                p.mb-0 <b>Pupas:</b> color blanco crema y luego se torna café rojizo; se forma dentro de un cocón de una longitud de 8,7 cm por 3,5 cm de ancho, en promedio, fabricado por la larva con fibras del tejido del tallo de la palma. 
              li.d-flex
                i.fas.fa-check-circle(style="color:#AD9721").me-3
                p.mb-0 <b>Adultos:</b> picudo de color negro, gran tamaño (3 – 6 cm), los machos son más pequeños que las hembras. Se ocultan en las axilas de las hojas. 
              li.d-flex
                i.fas.fa-check-circle(style="color:#AD9721").me-3
                p.mb-0 <b>Daños:</b> Las larvas perforan el estípite y el cogollo, dañan el meristemo y pueden causar la muerte de la palma, además de transmitir el nemátodo causante del anillo rojo.
              li.d-flex
                i.fas.fa-check-circle(style="color:#AD9721").me-3
                p.mb-0 <b>Control:</b> Evitar heridas en las palmas, proteger los cortes de poda y establecer trampas para capturar adultos, especialmente en épocas secas cuando aumenta la población del picudo.

          .col-lg-2
            figure
                img(src='@/assets/curso/tema1/acordion1_03.png', alt='' style="width: 150px")

      .row(titulo="Gusano de la palma (<i>Brassolis sophorae</i>)")
          .col-lg-10.ps-lg-5.mb-4.mb-md-0s  
            ul.lista-ul
              li.d-flex
                i.fas.fa-check-circle(style="color:#AD9721").me-3
                p.mb-0 <b>Ciclo biológico:</b> Huevos: 20 – 25 días. Larvas: 50 – 85 días. Pupas: 11 – 15 días. Total: 81 - 125 días.
              li.d-flex
                i.fas.fa-check-circle(style="color:#AD9721").me-3
                p.mb-0 <b>Larvas:</b> Son larvas gregarias y nocturnas que se refugian en nidos de seda entre los folíolos; alcanzan hasta 8 cm, presentan color pardo rojizo con bandas claras y cabeza grande color vino tinto.
              li.d-flex
                i.fas.fa-check-circle(style="color:#AD9721").me-3
                p.mb-0 <b>Pupas:</b> son grandes, robustas y convexas, con bandas longitudinales amarillo pálido; se localizan sobre las bases peciolares de las hojas, sobre el estípite o sobre arvenses. 
              li.d-flex
                i.fas.fa-check-circle(style="color:#AD9721").me-3
                p.mb-0 <b>Adultos:</b> lepidópteros grandes, de 7 a 10 cm de envergadura alar; las alas son marrones, y presentan tres ocelos negros y marrón en la parte inferior de las alas traseras. Son de hábito crepuscular.
              li.d-flex
                i.fas.fa-check-circle(style="color:#AD9721").me-3
                p.mb-0 <b>Daños:</b> las larvas atacan agresivamente las hojas, pues consumen individualmente entre 500 a 600 cm² de área foliar, el ataque se inicia en palma joven, en todos los niveles y puede defoliar una palma en pocos días.
              li.d-flex
                i.fas.fa-check-circle(style="color:#AD9721").me-3
                p.mb-0 <b>Control:</b> Control mediante recolección de nidos y pupas, uso del hongo Beauveria bassiana y aprovechamiento de enemigos naturales que parasitan huevos, larvas y pupas para reducir la población.

          .col-lg-2
            figure
                img(src='@/assets/curso/tema1/acordion1_04.png', alt='' style="width: 150px")

      .row(titulo="Gusano cabrito (<i>Opsiphanes cassina</i>)")
          .col-lg-10.ps-lg-5.mb-4.mb-md-0s  
            ul.lista-ul
              li.d-flex
                i.fas.fa-check-circle(style="color:#AD9721").me-3
                p.mb-0 <b>Ciclo biológico:</b>  Huevos: 8 – 10 días. Larvas: 36 – 47 días. Pupas: 59 – 77 días.
              li.d-flex
                i.fas.fa-check-circle(style="color:#AD9721").me-3
                p.mb-0 <b>Larvas:</b> son grandes de 6 a 9 cm, con dos apéndices cefálicos a manera de cuernos y dos apéndices caudales tipo aguja; son verdes con bandas dorsales longitudinales amarillas; en su último estadio, su color es café y una banda dorsal longitudinal verde amarillenta; se ubican en el envés de los folíolos. 
              li.d-flex
                i.fas.fa-check-circle(style="color:#AD9721").me-3
                p.mb-0 <b>Pupas:</b> de 30 mm de longitud, en promedio; se forman sobre las plantas epifitas que creen en el estípite. 
              li.d-flex
                i.fas.fa-check-circle(style="color:#AD9721").me-3
                p.mb-0 <b>Adultos:</b> lepidóptero, de hábito diurno. La hembra oviposita individualmente o en pequeños grupos en el envés de los folíolos y cerca al raquis de las hojas; tiene una envergadura alar de 7,2 cm y el macho de 6 cm; las alas anteriores son de color café con una banda anaranjada en forma de “y”.
              li.d-flex
                i.fas.fa-check-circle(style="color:#AD9721").me-3
                p.mb-0 <b>Daños:</b> Las larvas devoran el follaje, preferencialmente la parte superior de la palma. Una larva alcanza a consumir de 700 a 800 cm² de follaje durante su vida, dejando solo la nervadura central de cada folíolo.
              li.d-flex
                i.fas.fa-check-circle(style="color:#AD9721").me-3
                p.mb-0 <b>Control:</b> Fomentar enemigos naturales mediante plantas nectaríferas, usar trampas con material fermentado, realizar recolección manual de larvas y pupas, y aplicar baculovirus como control biológico.


          .col-lg-2
            figure
                img(src='@/assets/curso/tema1/acordion1_05.png', alt='' style="width: 150px")
        
      .row(titulo="Chinche de encaje (<i>Leptopharsa gibbicarina</i>)")
          .col-lg-10.ps-lg-5.mb-4.mb-md-0s  
            ul.lista-ul
              li.d-flex
                i.fas.fa-check-circle(style="color:#AD9721").me-3
                p.mb-0 Ciclo biológico: Huevo: 15 días. Ninfa: 22 días. Adulto: 14 – 24 días. Total:  51 – 61 días.
              li.d-flex
                i.fas.fa-check-circle(style="color:#AD9721").me-3
                p.mb-0 Ninfa: pueden medir 0,5 mm de largo y 0,2 mm de ancho, cuerpo cilíndrico, blanco translúcido. Al avanzar su desarrollo, las espinas que posee sobre su cuerpo se vuelven negras, gruesas y abundantes; sufren cinco instares ninfales, y las del último instar pueden medir 1,8 mm de largo y 0,8 mm de ancho.
              li.d-flex
                i.fas.fa-check-circle(style="color:#AD9721").me-3
                p.mb-0 Adulto: de la familia Tingidae; mide de 2,5 a 2,9 mm de largo y 1,2 mm de ancho, antenas largas claviformes, son reticulados y transparentes; aparentan un encaje muy característico de la familia. Se ubican en el envés de los folíolos, donde pueden cumplir todo un ciclo; prefieren las áreas y niveles con menor incidencia de luz.
              li.d-flex
                i.fas.fa-check-circle(style="color:#AD9721").me-3
                p.mb-0 Daños: El adulto pica el envés del folíolo para alimentarse, succionando el jugo celular del parénquima foliar, produciendo unos puntos cloróticos en el haz que ocasionan secamientos o necrosamiento del tejido. 
              li.d-flex
                i.fas.fa-check-circle(style="color:#AD9721").me-3
                p.mb-0 Control: Establecer plantas nectaríferas y promover enemigos naturales como hormigas y otros depredadores, además del uso de hongos entomopatógenos para el control biológico de la plaga.
              
          .col-lg-2
            figure
                img(src='@/assets/curso/tema1/acordion1_06.png', alt='' style="width: 150px")

    //- Fin Accordion

    
    //- Título con imagen
    .bg-full-width.mt-5
      .px-4.px-md-5.pb-md-3
      .titulo-con-imagen.mb-5(data-aos="fade-right")
        .titulo-con-imagen__fondo
          img.titulo-con-imagen__imagen(src="@/assets/curso/tema1/imagen-titulos.svg")
          h3.titulo-con-imagen__texto Principales enfermedades
    //- Título con imagen

    p(data-aos="fade-left") En este punto se relacionan las principales enfermedades de mayor ocurrencia en un cultivo de palma aceitera.



    //- Inicio Accordion
    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta acordeonA")
      .row(titulo="Anillo rojo")
          .col-lg-10.ps-lg-5.mb-4.mb-md-0s  
            ul.lista-ul
              li.d-flex
                i.fas.fa-check-circle(style="color:#AD9721").me-3
                p.mb-0 <b>Agente causal:</b> nemátodo <i>Bursaphelenchus cocophilus</i>, teniendo como agente vector al <i>Rhynchophorus palmarum</i> (coleóptero), este lleva el nemátodo externa o internamente en su cuerpo, ataca la palma, principalmente en tejidos donde se han producido heridas, transmitiendo así la enfermedad.
              li.d-flex
                i.fas.fa-check-circle(style="color:#AD9721").me-3
                p.mb-0 <b>Síntomas:</b> La enfermedad provoca amarillamiento y secamiento de hojas, deformaciones en hojas jóvenes, reducción del crecimiento, necrosis progresiva y presencia de un anillo característico en el tronco, afectando también la producción de racimos.
              li.d-flex
                i.fas.fa-check-circle(style="color:#AD9721").me-3
                p.mb-0 <b>Control:</b> monitoreo del cultivo una vez al mes; reducir población del insecto vector mediante el uso de trampas, eliminación oportuna de palmas, realizando un troceado de cada una de sus partes para luego aplicar insecticidas con registro ICA para el cultivo de palma, evitando de esta manera la diseminación del patógeno.
              
          .col-lg-2
            figure
                img(src='@/assets/curso/tema1/acordion2_01.png', alt='' style="width: 150px")

      .row(titulo="Marchitez sorpresiva")
          .col-lg-10.ps-lg-5.mb-4.mb-md-0s  
            ul.lista-ul              
              li.d-flex
                i.fas.fa-check-circle(style="color:#AD9721").me-3
                p.mb-0 <b>Agente causal:</b> protozoarios flagelados de la familia <i>Tripanosomatidae: Phytomonas staheli</i>, el vector es del género <i>Lincus</i> de la familia Pentatomidae <i>(chinches)</i>.
              li.d-flex
                i.fas.fa-check-circle(style="color:#AD9721").me-3
                p.mb-0 <b>Síntomas</b>: Los síntomas iniciales incluyen secamiento y coloración rojiza en los folíolos, seguido de enrollamiento y secado de hojas, daño progresivo en raíces, aborto de inflorescencias y secamiento de frutos inmaduros.
              li.d-flex
                i.fas.fa-check-circle(style="color:#AD9721").me-3
                p.mb-0 <b>Control</b>: Aplicar control químico en palmas vecinas, erradicar y desinfectar plantas afectadas, controlar gramíneas, realizar fertilización adecuada y establecer coberturas vegetales para reducir la propagación de la enfermedad.
              
          .col-lg-2
            figure
                img(src='@/assets/curso/tema1/acordion2_02.png', alt='' style="width: 150px")

      .row(titulo="Marchitez letal (ML)")
          .col-lg-10.ps-lg-5.mb-4.mb-md-0s  
            ul.lista-ul
              li.d-flex
                i.fas.fa-check-circle(style="color:#AD9721").me-3
                p.mb-0 <b>Agente causal:</b> el agente causante de la ML es aún desconocido, sin embargo, se estima que el vector es el insecto chupador<i> Myndus crudus</i> o <i>Haplaxius crudus</i>.
              li.d-flex
                i.fas.fa-check-circle(style="color:#AD9721").me-3
                p.mb-0 <b>Síntomas:</b> La enfermedad causa secamiento progresivo de los folíolos, necrosis en inflorescencias y desprendimiento prematuro de frutos debido al daño en su punto de inserción.
              li.d-flex
                i.fas.fa-check-circle(style="color:#AD9721").me-3
                p.mb-0 <b>Control:</b> realizar inspecciones sanitarias mensualmente, para la detección oportuna de los síntomas. Aplicar oportunamente fertilizantes, no retrasar podas, evitar estrés hídrico y uso de herbicidas tóxicos. Monitorear la presencia de <i>Haplaxius crudus</i> con el uso de trampas amarillas y en caso de detectar la enfermedad se debe aplicar insecticida con registro ICA.
              
          .col-lg-2
            figure
                img(src='@/assets/curso/tema1/acordion2_03.png', alt='' style="width: 150px")

      .row(titulo="Pudrición del cogollo")
          .col-lg-10.ps-lg-5.mb-4.mb-md-0s  
            ul.lista-ul
              li.d-flex
                i.fas.fa-check-circle(style="color:#AD9721").me-3
                p.mb-0 <b>Agente causal:</b>  hongo patógeno <i>Phytophthora palmivora</i> y las condiciones que favorecen su desarrollo son temperaturas de 27 y 30ºC, alta humedad relativa y baja radiación solar. Se considera una de las enfermedades más devastadoras del cultivo de palma.
              li.d-flex
                i.fas.fa-check-circle(style="color:#AD9721").me-3
                p.mb-0 <b>Síntomas:</b> La enfermedad inicia en las flechas jóvenes y, en estados avanzados, afecta el cogollo, deteniendo la emisión de nuevas hojas y el crecimiento de la palma.
              li.d-flex
                i.fas.fa-check-circle(style="color:#AD9721").me-3
                p.mb-0 <b>Control:</b> Detectar y eliminar oportunamente tejidos afectados, proteger el cogollo con tratamientos fitosanitarios y, en casos severos, erradicar y desinfectar las palmas para evitar la propagación de la enfermedad.
              

          .col-lg-2
            figure
                img(src='@/assets/curso/tema1/acordion2_04.png', alt='' style="width: 150px")

    //- Fin Accordion
    //- Fin Tema1.2

    //- Inicio Tema1.3
    .row.mt-5
        #t_1_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 1.3 Manejo nutricional del cultivo
    


    .row.mb-5
      .col-9.bg-color-9.p-4(data-aos="fade-right")
        p El manejo nutricional es esencial para el crecimiento, sanidad y productividad de la palma de aceite. La fertilización depende de la edad, suelo y condiciones ambientales, basándose en análisis de suelo y foliar, aplicando nutrientes esenciales y distribuyendo el fertilizante adecuadamente alrededor de la palma.
      .col-3        
        figure
          img(src="@/assets/curso/tema1/2.png", data-aos="zoom-in", style="max-width: 250px").mx-auto


    //- Título con imagen
    .bg-full-width.mt-5
      .px-4.px-md-5.pb-md-3
      .titulo-con-imagen.mb-5(data-aos="fade-right")
        .titulo-con-imagen__fondo
          img.titulo-con-imagen__imagen(src="@/assets/curso/tema1/imagen-titulos.svg")
          h3.titulo-con-imagen__texto Nutrientes principales
    //- Título con imagen


    //- Inicio Carrusel
    .bg-full-width
      .px-4.px-md-5.pb-md-3
    .carousel-bg
      .row.justify-content-center.mb-5.align-items-center
        .col-lg-12.mb-3.mb-lg-0.order-lg-2
          SlyderF(columnas="col-md-4 col-xl-4")
            .bg-color-white.tarjeta.p-4.h-100.shadow-app.text-center.bordes
              img(src='@/assets/curso/tema1/carrusel1_01.svg' alt='' , style="max-width: 150px").mx-auto.mb-3
              h4.card-title.text-center.mb-4 Nitrógeno
              p.card-text.text-center
                | Se aplica en la primera fertilización, cuando el suelo está húmedo.

            .bg-color-white.tarjeta.p-4.h-100.shadow-app.text-center.bordes
              img(src='@/assets/curso/tema1/carrusel1_02.svg' alt='' , style="max-width: 150px").mx-auto.mb-3
              h4.card-title.text-center.mb-4 Fósforo
              p.card-text.text-center
                | La fertilización inicial aporta fósforo para estimular raíces.

            .bg-color-white.tarjeta.p-4.h-100.shadow-app.text-center.bordes
              img(src='@/assets/curso/tema1/carrusel1_03.svg' alt='' , style="max-width: 150px").mx-auto.mb-3
              h4.card-title.text-center.mb-4 Potasio
              p.card-text.text-center
                | También se aplica en la primera fertilización, cuando el suelo está húmedo.

            .bg-color-white.tarjeta.p-4.h-100.shadow-app.text-center.bordes
              img(src='@/assets/curso/tema1/carrusel1_04.svg' alt='' , style="max-width: 150px").mx-auto.mb-3
              h4.card-title.text-center.mb-4 Magnesio
              p.card-text.text-center
                | El magnesio favorece la fotosíntesis y productividad de la palma.

            .bg-color-white.tarjeta.p-4.h-100.shadow-app.text-center.bordes
              img(src='@/assets/curso/tema1/carrusel1_05.svg' alt='' , style="max-width: 150px").mx-auto.mb-3
              h4.card-title.text-center.mb-4 Boro
              p.card-text.text-center
                | El boro favorece crecimiento, formación celular y desarrollo foliar.

            .bg-color-white.tarjeta.p-4.h-100.shadow-app.text-center.bordes
              img(src='@/assets/curso/tema1/carrusel1_06.svg' alt='' , style="max-width: 150px").mx-auto.mb-3
              h4.card-title.text-center.mb-4 Azufre
              p.card-text.text-center
                | El azufre participa en proteínas y crecimiento saludable de la palma.

            .bg-color-white.tarjeta.p-4.h-100.shadow-app.text-center.bordes
              img(src='@/assets/curso/tema1/carrusel1_07.svg' alt='' , style="max-width: 150px").mx-auto.mb-3
              h4.card-title.text-center.mb-4 Cloro
              p.card-text.text-center
                | El cloro regula balance hídrico y procesos fisiológicos de la palma.

            .bg-color-white.tarjeta.p-4.h-100.shadow-app.text-center.bordes
              img(src='@/assets/curso/tema1/carrusel1_08.svg' alt='' , style="max-width: 150px").mx-auto.mb-3
              h4.card-title.text-center.mb-4 Calcio
              p.card-text.text-center
                | El calcio fortalece tejidos y mejora el desarrollo radicular.
            
            .bg-color-white.tarjeta.p-4.h-100.shadow-app.text-center.bordes
              img(src='@/assets/curso/tema1/carrusel1_09.svg' alt='' , style="max-width: 150px").mx-auto.mb-3
              h4.card-title.text-center.mb-4 Manganesio
              p.card-text.text-center
                | El manganeso activa enzimas y favorece la fotosíntesis en palma.
            
            .bg-color-white.tarjeta.p-4.h-100.shadow-app.text-center.bordes
              img(src='@/assets/curso/tema1/carrusel1_10.svg' alt='' , style="max-width: 150px").mx-auto.mb-3
              h4.card-title.text-center.mb-4 Hierro
              p.card-text.text-center
                | El hierro interviene en la fotosíntesis y formación de clorofila.

            .bg-color-white.tarjeta.p-4.h-100.shadow-app.text-center.bordes
              img(src='@/assets/curso/tema1/carrusel1_11.svg' alt='' , style="max-width: 150px").mx-auto.mb-3
              h4.card-title.text-center.mb-4 Cobre
              p.card-text.text-center
                | El cobre participa en enzimas y fortalece el metabolismo vegetal.

            .bg-color-white.tarjeta.p-4.h-100.shadow-app.text-center.bordes
              img(src='@/assets/curso/tema1/carrusel1_12.svg' alt='' , style="max-width: 150px").mx-auto.mb-3
              h4.card-title.text-center.mb-4 Zinc
              p.card-text.text-center
                | El zinc regula crecimiento y formación de hojas en palma.

            .bg-color-white.tarjeta.p-4.h-100.shadow-app.text-center.bordes
              img(src='@/assets/curso/tema1/carrusel1_13.svg' alt='' , style="max-width: 150px").mx-auto.mb-3
              h4.card-title.text-center.mb-4 Sodio
              p.card-text.text-center
                | El sodio contribuye al equilibrio osmótico y eficiencia nutricional.

            .bg-color-white.tarjeta.p-4.h-100.shadow-app.text-center.bordes
              img(src='@/assets/curso/tema1/carrusel1_14.svg' alt='' , style="max-width: 150px").mx-auto.mb-3
              h4.card-title.text-center.mb-4 Molibdenio
              p.card-text.text-center
                | El molibdeno favorece la asimilación del nitrógeno en la palma.

    //- Fin Carrusel


    //- Título con imagen
    .bg-full-width.mt-5
      .px-4.px-md-5.pb-md-3
      .titulo-con-imagen.mb-5(data-aos="fade-right")
        .titulo-con-imagen__fondo
          img.titulo-con-imagen__imagen(src="@/assets/curso/tema1/imagen-titulos.svg")
          h3.titulo-con-imagen__texto Deficiencias nutricionales
    //- Título con imagen


    p(data-aos="fade-left") En esta sección se describen las principales deficiencias de nutrientes en el cultivo, sus síntomas característicos, causas y efectos sobre el crecimiento, desarrollo y productividad de las plantas.


    //- Carrusel
    .bg-full-width.bg-fondo-slider.mb-3
            .p-4.p-md-5
              SlyderA(tipo="b").bg-white.p-4.tarjeta(data-aos="fade-left")
                .row.align-items-center.p-4.p-md-5
                  .col-lg-5.order-2
                    figure
                      img(src="@/assets/curso/tema1/slide3_01.svg" , style="max-width: 150px").mx-auto
                  .col-lg-7.order-1.mb-3.mb-lg-0
                    h4 Deficiencia de Fósforo
                    p <b>Función:</b> Estimula el desarrollo radicular, participa en procesos energéticos y celulares, favorece la producción y mejora la calidad del fruto y la formación de semillas.
                    p <b>Deficiencia:</b> Provoca crecimiento piramidal del tronco, coloración violeta en coberturas, escaso desarrollo radicular y abortos florales.

                    
                .row.align-items-center.p-4.p-md-5
                  .col-lg-5.order-2
                    figure
                      img(src="@/assets/curso/tema1/slide3_02.svg" , style="max-width: 150px").mx-auto
                  .col-lg-7.order-1.mb-3.mb-lg-0
                    h4 Deficiencia de potasio
                    p <b>Función:</b> Estimula la floración, reduce abortos, mejora la resistencia a enfermedades y sequías, e influye en el peso del racimo.
                    p <b>Deficiencia:</b> Provoca manchas anaranjadas en hojas, reducción del peso de racimos, frutos deformes y debilitamiento progresivo que puede causar la muerte de la palma.


                .row.align-items-center.p-4.p-md-5
                  .col-lg-5.order-2
                    figure
                      img(src="@/assets/curso/tema1/slide3_03.svg" , style="max-width: 150px").mx-auto
                  .col-lg-7.order-1.mb-3.mb-lg-0
                    h4 Deficiencia de magnesio
                    p <b>Función:</b> Es componente de la clorofila, participa en la fotosíntesis, respiración y procesos metabólicos relacionados con fósforo y potasio.
                    p <b>Deficiencia:</b> Provoca amarillamiento de hojas inferiores, disminución del contenido de aceite y decoloración en folíolos expuestos a la luz, mientras los inferiores permanecen verdes.


                .row.align-items-center.p-4.p-md-5
                  .col-lg-5.order-2
                    figure
                      img(src="@/assets/curso/tema1/slide3_04.svg" , style="max-width: 150px").mx-auto
                  .col-lg-7.order-1.mb-3.mb-lg-0
                    h4 Deficiencia de boro
                    p <b>Función:</b> Actúa en los puntos de crecimiento, favorece la polinización y formación de frutos, y participa en la elongación radicular y formación de paredes celulares.
                    p <b>Deficiencia:</b> Provoca deformación y quiebre de folíolos, reducción del tamaño de hojas, hojas ciegas y corrugaciones severas en casos avanzados de deficiencia de boro.

    //- Fin Carrusel
    //- Fin Tema1.3


    //- Inicio Tema1.4
    .row.mt-5
        #t_1_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 1.4 Manejo del agua en el lote
    
    .row.mb-5
      .col-9.bg-color-1.p-4(data-aos="fade-right")
        p La palma de aceite requiere un adecuado manejo del agua, ya que el exceso o déficit hídrico reduce la fotosíntesis, aumenta abortos florales y disminuye la producción y contenido de aceite, por lo que es esencial implementar sistemas de riego y drenaje adecuados.
      .col-3        
        figure
          img(src="@/assets/curso/tema1/3.png", data-aos="zoom-in", style="max-width: 250px").mx-auto


    

    //- Inicio Tema1.5
    .row.mt-5
        #t_1_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 1.5 Manejo del agua en el lote  


        
      
    .row.justify-content-center
      .col-lg-3 
        figure(data-aos="zoom-in")
          img(src="@/assets/curso/tema1/4.png", alt="").img400.m-auto
      .col-lg-9
        //- Inicio Accordion
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta acordeonA")
          .row(titulo="¿Qué es?")
            p La poda en palma de aceite consiste en eliminar hojas y estructuras no funcionales para mantener la capacidad fotosintética, facilitar la cosecha, mejorar la sanidad del cultivo, favorecer la producción y aportar materia orgánica al suelo.
                  
          .row(titulo="Herramientas")
            p La poda utiliza herramientas como palines, barretones y cuchillo malayo, seleccionadas según la edad y altura de la palma, además de machetes, limas y rastrillos para corte, mantenimiento y limpieza.

          .row(titulo="Procedimiento")
            p El operario debe ubicarse correctamente para cortar hojas bajo los racimos, fraccionarlas y organizarlas adecuadamente, distribuyendo residuos como materia orgánica y limpiando el plato para facilitar la cosecha.
        //- Inicio Accordion
        

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

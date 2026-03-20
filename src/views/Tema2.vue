<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Cosecha del Fruto de Palma de Aceite
    .row.mb-5
      .col-lg-9.mb-4.mb-lg-0.bg-color-1.p-4(data-aos="fade-right")
        p.mb-0 La cosecha es la etapa final del cultivo y una de las labores más importantes, ya que de su adecuada planificación depende la cantidad y calidad del aceite producido. Representa entre el 25 % y 30 % de los costos operativos y requiere mano de obra especializada, capacitación, supervisión constante y criterios técnicos para cortar, recolectar y transportar los racimos en su punto óptimo de maduración, evitando errores que afecten la productividad.
      .col-lg-3(data-aos="fade-left")
        figure
          img(src="@/assets/curso/tema2/1.png", alt="", style="width: 450px").m-auto
    Separador          
    //- Inicio Tema2.1
    .row.mt-0
        #t_2_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 2.1	Proceso de cosecha
    p(data-aos="fade-right") La cosecha en palma de aceite es la labor más importante y costosa del cultivo, donde se reflejan los esfuerzos de mantenimiento para obtener mayor producción de aceite, buena calidad y baja acidez. Por lo anterior, se detallarán las labores.
    //- Inicio Carrusel
    .row.bg-color-11(data-aos="fade-left")
      .col-12
        .p-5
          .bg-full-width
            .px-4.px-md-5.pb-md-3
          .carousel-bg
            .row.mb-5.align-items-center              
                SlyderF(columnas="col-xl-4 col-lg-6")
                  .bg-color-12.tarjeta.h-100.shadow-app.text-center.bordes
                    img(src='@/assets/curso/tema2/carrusel1_01.png' alt='').mx-auto.mb-4
                    .avatar-circle.bg-color-acento-contenido.mx-auto.mb-4
                      span.h4.mb-0 A
                    p.card-text-2.text-center
                      | Corte de los racimos. 
                  .bg-color-12.tarjeta.h-100.shadow-app.text-center.bordes
                    img(src='@/assets/curso/tema2/carrusel1_02.png' alt='').mx-auto.mb-4
                    .avatar-circle.bg-color-acento-contenido.mx-auto.mb-4
                      span.h4.mb-0 B
                    p.card-text-2.text-center
                      | Recolección de los racimos y los frutos caídos.
                  .bg-color-12.tarjeta.h-100.shadow-app.text-center.bordes
                    img(src='@/assets/curso/tema2/carrusel1_03.png' alt='').mx-auto.mb-4
                    .avatar-circle.bg-color-acento-contenido.mx-auto.mb-4
                      span.h4.mb-0 C
                    p.card-text-2.text-center
                      | Acomodación de las hojas cortadas en las interlíneas. 
                  .bg-color-12.tarjeta.h-100.shadow-app.text-center.bordes
                    img(src='@/assets/curso/tema2/carrusel1_04.png' alt='').mx-auto.mb-4
                    .avatar-circle.bg-color-acento-contenido.mx-auto.mb-4
                      span.h4.mb-0 D
                    p.card-text-2.text-center
                      | Transporte manual o en mulas de los racimos a vehículos que han de llevarlos a la planta extractora de aceite.
    //- Fin Carrusel
    Separador
    //- Inicio Tema2.2
    .row.mt-0
        #t_2_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 2.2 Estado de madurez del racimo
    p(data-aos="fade-left") Lo invitamos a profundizar sobre el estado de madurez del fruto de la palma de aceite en el siguiente pódcast.     
    //- Inicio Podcast
    .container-fluid.tarjeta.tarjeta--blanca.px-0.mb-2
      .row.g-0.align-items-stretch(data-aos="fade-right")
        .col-lg-7.mb-3
          .p-4.p-md-5.bg-custom-dark-teal.h-100.rounded-4
            .row.align-items-center
              .col-md-5.text-center.mb-4.mb-md-0
                img(src="@/assets/curso/tema2/podcast.svg" style="max-width: 200px;").img-fluid
              .col-md-7.ps-md-4
                h2.mb-3.fw-bold(style="color:#000") Pódcast
                .tarjeta.bg-white.p-3.shadow-sm.border-lemon
                  h5.mb-3.fw-bold Gestión de la información productiva en acuicultura
                  TarjetaAudio.color-primario(
                    texto="" 
                    :audio="require('@/assets/componentes/audios/podcast.mp3')"
                    @audio-hover="mostrarIndicadorTarjetaAudio = false"
                  )
                    .indicador--click(v-if="mostrarIndicadorTarjetaAudio")        
        .col-lg-5
          figure.mb-0
            img(src='@/assets/curso/tema2/2.png')
    //- Fin Podcast
    //- Título con imagen
    .bg-full-width.mt-5
      .px-4.px-md-5.pb-md-3
      .titulo-con-imagen.mb-5(data-aos="fade-right")
        .titulo-con-imagen__fondo
          img.titulo-con-imagen__imagen(src="@/assets/curso/tema1/imagen-titulos.svg")
          h3.titulo-con-imagen__texto Escala de maduración
    //- Título con imagen
    p(data-aos="fade-left") El racimo de palma madura de arriba hacia abajo y cambia de color al madurar. Se considera listo para cosecha cuando se desprenden naturalmente entre 5 y 10 frutos o se separan fácilmente al menos 20; por lo cual, se analizará la escala de maduración.
    //- Carrusel
    .bg-full-width.bg-fondo-slider.mb-5
            .p-4.p-md-5
              SlyderA(tipo="b").bg-white.p-4.tarjeta(data-aos="fade-left")
                .row.align-items-center.p-4.p-md-5
                  .col-lg-5.order-2
                    figure
                      img(src="@/assets/curso/tema2/slide1_01.png")
                  .col-lg-7.order-1.mb-3.mb-lg-0
                    h4 Racimo verde
                    p En proceso de maduración, sin ningún fruto suelto, de color negro brillante o morado.                    
                .row.align-items-center.p-4.p-md-5
                  .col-lg-5.order-2
                    figure
                      img(src="@/assets/curso/tema2/slide1_02.png")
                  .col-lg-7.order-1.mb-3.mb-lg-0
                    h4 Racimo maduro
                    p Estado óptimo de madurez, presenta del 1 a 50% del fruto suelto, se evidencia desprendimiento natural de frutos, color rojo anaranjado brillante, cabe resaltar que el color del fruto depende en gran medida de la variedad sembrada.
                .row.align-items-center.p-4.p-md-5
                  .col-lg-5.order-2
                    figure
                      img(src="@/assets/curso/tema2/slide1_03.png")
                  .col-lg-7.order-1.mb-3.mb-lg-0
                    h4 Racimo sobre maduro
                    p Presenta más del 50% de frutos desprendidos, su color es rojo oscuro o naranja intenso.
                .row.align-items-center.p-4.p-md-5
                  .col-lg-5.order-2
                    figure
                      img(src="@/assets/curso/tema2/slide1_04.png")
                  .col-lg-7.order-1.mb-3.mb-lg-0
                    h4 Racimo podrido
                    p Se caracteriza porque presenta el pedúnculo largo con síntomas de descomposición, el color del fruto es café negruzco opaco, se evidencia desprendimiento de más del 90% de sus frutos.
    //- Carrusel
    Separador
    //- Fin Tema2.2
    //- Inicio Tema2.3
    .row.mt-0
        #t_2_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 2.3 Pronósticos de producción
    p(data-aos="fade-left") Los pronósticos de producción son estimativos en kilos o toneladas de la producción futura y por su importancia, lo invitamos a conocer todos los detalles en siguiente video.    
    figure.mb-5(data-aos="fade-down")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/nHjl83QvSUw?si=PYOSxqLdAk88V5nb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    //- Fin Tema2.3
    Separador
    //- Inicio Tema2.4
    .row.mt-0
        #t_2_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 2.4 Frecuencia de cosecha
    p(data-aos="fade-left") El ciclo de cosecha es el intervalo entre recolecciones en un área, determinado por la maduración desigual de los racimos y factores como genética, edad del cultivo y época del año. Le invitamos a conocer algunos detalles a considerar en esta fase.
    .row.bg-color-10
      .col-12
        .p-5
          //- Inicio Tarjetas
          .row.justify-content-center      
            .col-sm-10.col-md-6.col-lg-4.mb-4.d-flex.flex-column
              .tarjeta.p-0.rounded-5.h-100.bg-color-13.overflow-hidden
                figure.mb-0
                  img(src='@/assets/curso/tema2/tarjeta1_01.png', alt='').w-100
                .p-4
                  h4.card-title.text-center.mb-4 La edad del cultivo
                  p.mb-0 En palmas menores de seis años la velocidad de formación de ácidos grasos (lipogénesis), es mayor, por lo que se recomienda ciclos de 8 a 10 días. En palmas mayores de seis años, la lipogénesis decrece con el tiempo, y por esta razón los ciclos de cosecha deben ser entre 10 a 15 días de intervalo.
            .col-sm-10.col-md-6.col-lg-4.mb-4.d-flex.flex-column
              .tarjeta.p-0.rounded-5.h-100.bg-color-13.overflow-hidden
                figure.mb-0
                  img(src='@/assets/curso/tema2/tarjeta1_02.png', alt='').w-100
                .p-4
                  h4.card-title.text-center.mb-4 El material vegetal sembrado
                  p.mb-0 El material “dura” cruzado con “tenera” es más rápida la maduración y en cambio el material “dura” cruzado con “dura” es un poco más lenta.
            .col-sm-10.col-md-6.col-lg-4.mb-4.d-flex.flex-column
              .tarjeta.p-0.rounded-5.h-100.bg-color-13.overflow-hidden
                figure.mb-0
                  img(src='@/assets/curso/tema2/tarjeta1_03.png', alt='').w-100
                .p-4
                  h4.card-title.text-center.mb-4 Época del año
                  p.mb-0 En la época de verano la maduración es más lenta, lo cual permite tener ciclos más largos, mientras que en épocas lluviosas la maduración se acelera.
          //- Fin Tarjetas
          //- Fin Tema2.4
          Separador
          //- Inicio Tema2.5
          .row.mt-0
              #t_2_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
                h2 2.5 Herramientas de cosecha
          p(data-aos="fade-left") El uso de las herramientas está en función de la edad y la altura de la palma. Las más utilizadas en el proceso de la cosecha son:
          //- Inicio Tarjetas
          .row.justify-content-center      
            .col-sm-10.col-md-6.col-lg-4.mb-4.d-flex.flex-column
              .tarjeta.p-0.rounded-5.h-100.bg-color-7.overflow-hidden
                figure.mb-0
                  img(src='@/assets/curso/tema2/tarjeta2_01.png', alt='').w-100
                .p-4
                  h4.card-title.text-center.mb-4 Cincel
                  p.mb-0 Las cosechas en palma joven se realizan con una herramienta tipo cincel, la cual permite cortar solo el pedúnculo del racimo, sin cortar la hoja que lo sostiene. Este cincel consta de una cuchilla que mide entre 6 y 8 cm de ancho, unido a un tubo o mango de 1.5 metros; en palmas más altas, se utiliza un tubo de mayor longitud.
            .col-sm-10.col-md-6.col-lg-4.mb-4.d-flex.flex-column
              .tarjeta.p-0.rounded-5.h-100.bg-color-7.overflow-hidden
                figure.mb-0
                  img(src='@/assets/curso/tema2/tarjeta2_02.png', alt='').w-100
                .p-4
                  h4.card-title.text-center.mb-4 Chuza
                  p.mb-0 Cuando los racimos alcanzan una altura de 1 metro sobre el nivel del suelo, se utiliza la chuza de 14 centímetros de ancho anexada a tubos largos lo que permite cosechar racimos ubicados hasta una altura aproximada de 3 a 4 metros. En esta altura también es común el uso del palín.

            .col-sm-10.col-md-6.col-lg-4.mb-4.d-flex.flex-column
              .tarjeta.p-0.rounded-5.h-100.bg-color-7.overflow-hidden
                figure.mb-0
                  img(src='@/assets/curso/tema2/tarjeta2_03.png', alt='').w-100
                .p-4
                  h4.card-title.text-center.mb-4 Cuchillo malayo
                  p.mb-0 Cuando los racimos se encuentran localizados a más de 4 metros, se utiliza un cuchillo curvo llamado malayo, el cual se ata a una varilla de aluminio o de bambú, que se reemplaza gradualmente dependiendo del desarrollo de las palmas; permitiendo cosechar palmas hasta de 12 metros de altura.
          //- Fin Tarjetas
    Separador
    //- Inicio Tema2.6
    .row.mt-0
        #t_2_6.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 2.6 Procedimiento de la cosecha
    .row.bg-color-10
      .col-12
        .p-5
          .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-3
                .bloque-texto-g__img(
                  :style="{'background-image': `url(${require('@/assets/curso/tema2/3.png')})`}"
                )
                .bloque-texto-g__texto.p-4
                  p.mb-0 El grupo de cosechadores recorre el lote en zigzag verificando la madurez de los racimos mediante el desprendimiento de frutos. Posteriormente, cortan hojas y racimos, los organizan en puntos definidos y preparan el producto para su transporte hacia la planta de beneficio.
          Separador
          //- Inicio Tema2.7
          .row.mt-0
              #t_2_7.titulo-segundo.color-acento-contenido(data-aos="fade-right")
                h2 2.7 Control de calidad del proceso
          p(data-aos="fade-left") Es indispensable llevar a cabo un control de calidad del proceso de cosecha, que permitan mantener la calidad del fruto y evitar pérdidas económicas. A continuación, se presentan los principales controles que se deben tener en cuenta.
          .container-fluid.p-0
            .row.g-0.align-items-stretch
              .col-md-4.mb-3
                figure.mb-0.h-100
                  img.w-100.h-100(src='@/assets/curso/tema2/4.png' style="object-fit: cover;")
              .col-md-5.bg-color-13.d-flex.align-items-center.mb-3
                ol.lista-ol--cuadro.ms-4
                  li.d-flex.mb-3 
                    .lista-ol--cuadro__vineta
                      span A
                    | Realizar el corte sólo de las hojas necesarias.
                  li.d-flex 
                    .lista-ol--cuadro__vineta
                      span B
                    | Evitar dejar fruta madura sin cosechar. 
                  li.d-flex 
                    .lista-ol--cuadro__vineta
                      span C
                    | Evitar el corte de racimos verdes. 
                  li.d-flex 
                    .lista-ol--cuadro__vineta
                      span D
                    | Cortar el pedúnculo en forma de “V” y a ras del racimo.
              .col-md-3.mb-3
                figure.mb-0.h-100
                  img.w-100.h-100(src='@/assets/curso/tema2/5.png' style="object-fit: cover;")
    Separador
    //- Inicio Tema2.8
    .row.mt-0
        #t_2_8.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 2.8 Recolección y transporte
    p(data-aos="fade-left") La selección del sistema de recolección debe estar en función de las condiciones topográficas de la plantación, la infraestructura de caminos y la disponibilidad de recursos económicos. Los medios de transporte más utilizados en una plantación de palma son:
    //- Inicio Tarjetas
    .row.justify-content-center      
      .col-sm-10.col-md-6.col-lg-4.mb-4.d-flex.flex-column
        .tarjeta.p-0.rounded-5.h-100.bg-color-7.overflow-hidden
          figure.mb-0
            img(src='@/assets/curso/tema2/tarjeta3_01.png', alt='').w-100
          .p-4
            h4.card-title.text-center.mb-4 Hombre
            p.mb-0 Sistema usado en explotaciones pequeñas o terrenos difíciles, donde la fruta se transporta en canastas hasta centros de acopio. Requiere muchos caminos, tiene bajos rendimientos, pero genera mínima compactación del suelo.
      .col-sm-10.col-md-6.col-lg-4.mb-4.d-flex.flex-column
        .tarjeta.p-0.rounded-5.h-100.bg-color-7.overflow-hidden
          figure.mb-0
            img(src='@/assets/curso/tema2/tarjeta3_02.png', alt='').w-100
          .p-4
            h4.card-title.text-center.mb-4 Tracción animal
            p.mb-0 Sistema de transporte que utiliza mulas, búfalos o bueyes para llevar los frutos a centros de acopio mediante canastas o carretas pequeñas. Es común en plantaciones pequeñas por su bajo costo y menor compactación del suelo.
      .col-sm-10.col-md-6.col-lg-4.mb-4.d-flex.flex-column
        .tarjeta.p-0.rounded-5.h-100.bg-color-7.overflow-hidden
          figure.mb-0
            img(src='@/assets/curso/tema2/tarjeta3_03.png', alt='').w-100
          .p-4
            h4.card-title.text-center.mb-4 Equipos mecánicos
            p.mb-0 En plantaciones grandes se emplean tractores para transportar fruta desde centros de acopio hasta la planta extractora, movilizando grandes cargas. También se usan góndolas y camiones con sistemas hidráulicos que facilitan la descarga y reducen el daño a los racimos.
    //- Fin Tarjetas
</template>

<script>
export default {
  name: 'Tema2',
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

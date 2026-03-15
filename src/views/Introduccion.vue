<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.mb-5
      .col-9.bg-color-1.p-4(data-aos="fade-right")
        p El cultivo de la palma de aceite se reconoce como una actividad agrícola de gran importancia productiva, cuyo éxito depende de la adecuada aplicación de prácticas técnicas desde el mantenimiento del cultivo hasta la cosecha del fruto. Las labores de mantenimiento comprenden un conjunto de actividades orientadas a garantizar el crecimiento y desarrollo óptimo de las palmas, entre ellas el control de malezas, el manejo integrado de plagas y enfermedades, la nutrición vegetal, el manejo del agua y la poda, acciones que contribuyen a conservar la sanidad del cultivo y a optimizar su productividad.         
      .col-3        
        figure
          img(src="@/assets/curso/intro/1.png", data-aos="zoom-in", style="max-width: 250px").mx-auto

    .bloque-texto-g.bloque-texto-g.bg-color-2.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-right")
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/intro/2.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 Por su parte, la cosecha constituye la fase final del proceso productivo, en la cual se evidencian los resultados de las prácticas agronómicas implementadas, requiriendo criterios técnicos específicos para identificar el estado óptimo de maduración de los racimos, efectuar un corte adecuado y garantizar una correcta recolección y transporte del fruto hacia la planta de beneficio, aspectos determinantes para la calidad del aceite y la rentabilidad de la plantación.
    
    .row.mb-5
      .col-10.bg-color-3.p-4(data-aos="fade-right")
        p En conjunto, el mantenimiento y la cosecha se consideran etapas complementarias e indispensables que, mediante una adecuada planificación y supervisión técnica, permiten alcanzar una producción sostenible, eficiente y ambientalmente responsable.
      .col-2.bg-color-4      
        figure
          img(src="@/assets/curso/intro/3.svg", data-aos="zoom-in", style="max-width: 250px").mx-auto



</template>

<script>
export default {
  name: 'Introduccion',
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

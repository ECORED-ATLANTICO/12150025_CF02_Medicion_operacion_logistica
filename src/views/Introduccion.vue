<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .bg-full-width.bg-fondo-1.mb-5
      .p-4.p-md-5
        .row.mb-5
          .col-lg-4.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/intro/1.png", data-aos="zoom-in")
          .col-lg-8
            p(data-aos="fade-left") El componente formativo en evaluación de operaciones en almacén proporciona las herramientas esenciales para optimizar los procesos logísticos, garantizando eficiencia y calidad. A través del estudio de conceptos, procedimientos y métodos de evaluación, se busca entender cómo medir el desempeño de las actividades almacenistas, identificando áreas de mejora. Además, se analizan indicadores clave que permiten cuantificar el rendimiento, utilizando técnicas de cálculo y validación para asegurar datos confiables. Este enfoque sistemático facilita la detección de desviaciones y la implementación de correctivos, asegurando que las operaciones cumplan con los estándares establecidos y contribuyan a la productividad global.
        
            .bg-color-1.tarjeta.p-4(data-aos="fade-left")
              .row.align-items-center
                .col-lg-auto.mb-3.mb-lg-0
                  img(src="@/assets/curso/intro/2.png", style="max-width: 90px").mx-auto
                .col-lg
                  p.mb-0 El análisis de resultados y la generación de informes estructurados son fundamentales para transformar datos en acciones concretas. Mediante metodologías y técnicas de análisis, se interpreta la información recopilada, facilitando la toma de decisiones basada en evidencia. La mejora continua se consolida como un pilar estratégico, promoviendo acciones que incrementan la eficiencia y reducen costos. 
        
        p.mb-5 Al estandarizar procesos y aplicar estrategias de optimización, el almacén se convierte en un elemento clave para la competitividad empresarial, adaptándose a las demandas del mercado y asegurando un servicio de excelencia.

        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        
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

<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Análisis de resultados

    .bg-full-width.bg-fondo-1.mb-3
      .p-4.p-md-5
        .row
          .col-lg-4.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema3/1.png", data-aos="zoom-in")
          .col-lg-8
            p(data-aos="fade-left") El análisis de resultados en la gestión de almacenes es un proceso estructurado que permite evaluar el desempeño de las operaciones, identificar problemas y tomar decisiones basadas en datos para mejorar la eficiencia, reducir costos y optimizar procesos.
            p El análisis de resultados en almacenes requiere:
            .row.mb-5.bg-color-13.pst-2.justify-content-center
              .col-6.col-lg-3.mb-3.mb-lg-0
                figure
                  img(src="@/assets/curso/tema3/2.png", data-aos="zoom-in")
              .col-lg-9.p-3
                ul.ms-3.lista-ul--color.lista-ul--separador.mb-0
                  li.d-flex 
                    i.fas.fa-circle-check.bg-color-5
                    p.mb-0 Recolección precisa de datos (mediante WMS, <em>IoT</em>, o auditorías).
                  li.d-flex 
                    i.fas.fa-circle-check.bg-color-5
                    p.mb-0 Uso de técnicas adecuadas (ABC, Pareto, RCA) según el problema.
                  li.d-flex 
                    i.fas.fa-circle-check.bg-color-5
                    p.mb-0 Metodologías estructuradas (DMAIC, PDCA) para soluciones sostenibles.
                  li.d-flex 
                    i.fas.fa-circle-check.bg-color-5
                    p.mb-0 Toma de decisiones basada en datos para reducir costos y mejorar servicio.

        separador
        
        #t_3_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
          h2 3.1 Metodologías estructuradas   

        p.mb-5 Las metodologías estructuradas proporcionan un marco sistemático para analizar los resultados de las evaluaciones en almacenes, permitiendo identificar áreas de mejora e implementar soluciones efectivas. Estas son las principales metodologías aplicables:

        .row.justify-content-center
          .col-xl-3.col-lg-6.col-md-9.col-11.mb-4.mb-xl-0
            .crd_hover_txt(data-aos="flip-left")
              .crd_hover_txt--img
                figure
                  img(src="@/assets/curso/tema3/3.png", alt="alt")
              .crd_hover_txt--body.bg-color-12
                h4.mb-3.text-center <em>Six  Sigma</em>
                p.mb-0 Metodología para optimizar procesos mediante cinco fases: definir objetivos claros, medir datos operativos, analizar causas raíz, mejorar con soluciones implementadas y controlar con seguimiento continuo.
          .col-xl-3.col-lg-6.col-md-9.col-11.mb-4.mb-xl-0
            .crd_hover_txt(data-aos="flip-left")
              .crd_hover_txt--img
                figure
                  img(src="@/assets/curso/tema3/4.png", alt="alt")
              .crd_hover_txt--body.bg-color-4
                h4.mb-3.text-center Ciclo de Deming (PHVA)
                p.mb-0 Mejora continua en la recepción: planificar objetivos, hacer cambios piloto, verificar resultados, actuar ajustando o ampliando la solución.
          .col-xl-3.col-lg-6.col-md-9.col-11.mb-4.mb-xl-0
            .crd_hover_txt(data-aos="flip-left")
              .crd_hover_txt--img
                figure
                  img(src="@/assets/curso/tema3/5.png", alt="alt")
              .crd_hover_txt--body.bg-color-12
                h4.mb-3.text-center <em>Lean Warehousing</em>
                p.mb-0 Enfoque para eliminar desperdicios en almacenes, evitando tiempos de espera, movimientos innecesarios, sobrecarga de trabajo y fluctuaciones en la demanda.
          .col-xl-3.col-lg-6.col-md-9.col-11.mb-4.mb-xl-0
            .crd_hover_txt(data-aos="flip-left")
              .crd_hover_txt--img
                figure
                  img(src="@/assets/curso/tema3/6.png", alt="alt")
              .crd_hover_txt--body.bg-color-4
                h4.mb-3.text-center SCOR
                p.mb-0 Modelo que evalúa cinco procesos clave de la cadena de suministro: planificación, abastecimiento, producción, entrega y devoluciones.   
    
    separador
    
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.3 Técnicas de análisis
    
    img(data-aos="fade-up")(src="@/assets/curso/tema3/7.png", alt="Imagen decorativa")

    .row.justify-content-center.align-items-center.z-2.mb-5
      .col-lg-10
        p.banner-text Las técnicas de análisis de resultados son metodologías sistemáticas utilizadas para interpretar datos operativos, identificar patrones y tomar decisiones basadas en evidencia. En el contexto de almacenes, estas técnicas permiten transformar datos brutos en información estratégica para optimizar procesos. A continuación, se presentan las principales:
    
    .row
      .col-lg-5.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/8.png", data-aos="zoom-in")
      .col-lg-7
        LineaTiempoD.color-primario.large(data-aos="fade-left")
          p(numero="1" titulo="Análisis  ABC") Clasifica productos por impacto: A (alto), B (medio), C (bajo). Sirve para asignar espacios estratégicos y priorizar control.
          p(numero="2" titulo="Análisis de tendencias") Detecta patrones históricos para predecir demanda usando media móvil, análisis estacional o regresión. Aplica en planeación de inventarios y ajustes de personal.
          p(numero="3" titulo="Análisis de causa raíz") Identifica el origen de problemas usando Diagrama de Ishikawa o los 5 porqués. Ejemplo: errores de picking por falta de capacitación en WMS.
          p(numero="4" titulo="Análisis de Pareto") Enfoca en el 20 % de causas que generan el 80 % de problemas. Útil para priorizar acciones en productos o procesos clave.
          p(numero="5" titulo="Simulación y modelado de procesos") Prueba escenarios sin afectar operaciones reales, usando software o análisis “qué pasaría si”. Optimiza rutas de picking y uso de espacio.
    
              

    
      

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

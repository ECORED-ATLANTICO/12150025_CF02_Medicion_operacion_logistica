<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Informe de resultados
    
    .bloque-texto-g.color-secundario.bg-color-12.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema4/1.png')})`}"
      )(data-aos="zoom-in")
      .bloque-texto-g__texto.p-4
        p.mb-0 El informe de resultados es el documento clave que sintetiza los hallazgos, análisis y recomendaciones derivados de la evaluación de las operaciones del almacén. Su objetivo es comunicar de manera clara y accionable los datos recopilados para facilitar la toma de decisiones estratégicas.
    
    separador
    
    #t_4_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.1 Estructura
    
    
    .row.mb-5.align-items-center
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema4/2.png", data-aos="zoom-in")
      .col-lg-8
        p(data-aos="fade-left") La presentación de resultados es una fase crítica en la gestión de almacenes, ya que permite comunicar de manera clara y efectiva los hallazgos, análisis y recomendaciones derivadas de la evaluación de operaciones. Una buena presentación facilita la toma de decisiones estratégicas y operativas por parte de los <em>stakeholders</em> (gerentes, supervisores, equipos de trabajo, entre otros). Los objetivos son:
        .row.mb-3
          .col-md-6.col-xl-3.mb-4.mb-xl-0
            //- .tarjeta-numerada debe ir acompañado de una de una de estas clases => 
            //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
            //- estas clases tambien tienen un modificador --borde
            .tarjeta-numerada.color-primario.p-4.h-100
              .tarjeta-numerada__numero
                .h2 01
              p.ms-3.mb-0.text-small Comunicar hallazgos clave de manera clara y concisa.
          .col-md-6.col-xl-3.mb-4.mb-xl-0
            //- .tarjeta-numerada debe ir acompañado de una de una de estas clases => 
            //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
            //- estas clases tambien tienen un modificador --borde
            .tarjeta-numerada.color-secundario.p-4.h-100
              .tarjeta-numerada__numero
                .h2 02
              p.ms-3.mb-0.text-small Mostrar el impacto de las operaciones actuales en indicadores críticos.
          .col-md-6.col-xl-3.mb-4.mb-xl-0
            //- .tarjeta-numerada debe ir acompañado de una de una de estas clases => 
            //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
            //- estas clases tambien tienen un modificador --borde
            .tarjeta-numerada.color-primario.p-4.h-100
              .tarjeta-numerada__numero
                .h2 03
              p.ms-3.mb-0.text-small Proponer acciones de mejora basadas en datos.
          .col-md-6.col-xl-3.mb-4.mb-xl-0
            //- .tarjeta-numerada debe ir acompañado de una de una de estas clases => 
            //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
            //- estas clases tambien tienen un modificador --borde
            .tarjeta-numerada.color-secundario.p-4.h-100
              .tarjeta-numerada__numero
                .h2 04
              p.ms-3.mb-0.text-small Facilitar la toma de decisiones para gerentes y equipos operativos.
    
    .bg-full-width.bg-fondo-1.mb-3
      .p-4.p-md-5
        .row.justify-content-center
          .col-lg-8
            p.mb-5.text-bold.bg-color-14.p-3.text-center.tarjeta.text-white A continuación, se presenta la estructura recomendada para la presentación de resultados:
            PasosA.color-primario(tipo="n")
              .row
                .col-md-10.mb-4.mb-md-0.order-2
                  h3 Portada y contexto
                  p Presenta el título del informe, fecha, responsables y objetivos principales, como la meta de reducir tiempos de <em>picking</em>.
                .col-md-2.order-1.mb-3.mb-lg-0
                  figure
                    img(src='@/assets/curso/tema4/3.png', alt='Texto que describa la imagen')
              .row
                .col-md-10.mb-4.mb-md-0
                  h3 Resumen ejecutivo
                  p Resume hallazgos clave, impacto financiero u operativo y recomendaciones prioritarias en una sola página.
                .col-md-2
                  figure
                    img(src='@/assets/curso/tema4/4.png', alt='Texto que describa la imagen')
              .row
                .col-md-10.mb-4.mb-md-0.order-2
                  h3 Metodología utilizada
                  p Describe el enfoque, fuentes de datos, técnicas aplicadas y el período de evaluación.
                .col-md-2.order-1.mb-3.mb-lg-0
                  figure
                    img(src='@/assets/curso/tema4/5.png', alt='Texto que describa la imagen')
              .row
                .col-md-10.mb-4.mb-md-0
                  h3 Resultados y hallazgos
                  p Expone indicadores, análisis por área y visualizaciones como diagramas de Pareto, mapas de calor o series de tiempo.
                .col-md-2
                  figure
                    img(src='@/assets/curso/tema4/6.png', alt='Texto que describa la imagen')
              .row
                .col-md-10.mb-4.mb-md-0.order-2
                  h3 Conclusiones
                  p Identifica problemas críticos y su impacto en la operación.
                .col-md-2.order-1.mb-3.mb-lg-0
                  figure
                    img(src='@/assets/curso/tema4/7.png', alt='Texto que describa la imagen')
              .row
                .col-md-10.mb-4.mb-md-0
                  h3 Recomendaciones
                  p Plantea acciones a corto, mediano y largo plazo para mejorar el desempeño.
                .col-md-2
                  figure
                    img(src='@/assets/curso/tema4/8.png', alt='Texto que describa la imagen')
              .row
                .col-md-10.mb-4.mb-md-0.order-2
                  h3 Anexos
                  p Incluye datos crudos, evidencias fotográficas y glosario de términos.
                .col-md-2.order-1.mb-3.mb-lg-0
                  figure
                    img(src='@/assets/curso/tema4/9.png', alt='Texto que describa la imagen')
      
    separador
    
    #t_4_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.2 Técnicas de redacción y presentación
    
    img(data-aos="fade-up")(src="@/assets/curso/tema4/10.png", alt="Imagen decorativa")

    .row.justify-content-center.align-items-center.z-2.mb-5
      .col-lg-10
        p.banner-text La efectividad de un informe de evaluación de almacén no solo depende de la calidad de los datos, sino también de cómo se comunican. A continuación, se detallan técnicas para redactar, estructurar y presentar informes que impulsen la toma de decisiones.

    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
      .div(titulo="Principios clave de redacción técnica")
        .row.mb-5.justify-content-center.align-items-center
          .col-lg-4.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema4/11.png")
          .col-lg-8
            ul.ms-3.lista-ul--color.lista-ul--separador
              li.d-flex 
                i.fas.fa-circle-check.bg-color-5
                p.mb-0 <b>Claridad y precisión</b>: Se debe emplear un lenguaje comprensible para todas las partes interesadas, definiendo claramente las siglas y explicando los tecnicismos para asegurar una comunicación clara y efectiva.
              li.d-flex 
                i.fas.fa-circle-check.bg-color-5
                p.mb-0 <b>Estructura lógica</b>: La información debe organizarse en orden descendente, comenzando por lo más importante y continuando con lo secundario. Se recomienda redactar párrafos cortos de 3 a 5 líneas, cada uno con una idea central, y emplear conectores como “Por lo tanto”, “En consecuencia” o “Sin embargo” para garantizar la coherencia del texto.
              li.d-flex 
                i.fas.fa-circle-check.bg-color-5
                p.mb-0 <b>Enfoque basado en datos</b>: Sustentar las afirmaciones con cifras, por ejemplo: el 25 % de los errores en <em>picking</em> se deben a etiquetado incorrecto, frente al 15 % registrado en 2023. Asimismo, se deben realizar comparaciones con <em>benchmarks</em>, como en el caso del tiempo de recepción, que con 45 minutos supera el estándar de la industria establecido en 30 minutos.
      .div(titulo="Técnicas de redacción por sección")
        .row.mb-5.justify-content-center.align-items-center
          .col-lg-3.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema4/12.png")
          .col-lg-8
            ul.ms-3.lista-ul--color.lista-ul--separador
              li.d-flex 
                i.fas.fa-circle-check.bg-color-5
                p.mb-0 <b>Resumen ejecutivo</b>: Debe ser breve, máximo una página, e incluir el problema o contexto, el hallazgo principal y la recomendación prioritaria para generar mayor impacto en la mejora.
              li.d-flex 
                i.fas.fa-circle-check.bg-color-5
                p.mb-0 <b>Resultados detallados</b>: Organizar por procesos clave (recepción, almacenamiento, picking y despacho) usando tablas comparativas y gráficos para mostrar diferencias, tendencias y oportunidades de mejora.
              li.d-flex 
                i.fas.fa-circle-check.bg-color-5
                p.mb-0 <b>Recomendaciones</b>: Formular las recomendaciones con el enfoque SMART: específicas, medibles, alcanzables, relevantes y con un tiempo definido para su ejecución y seguimiento.
      .div(titulo="Diseño visual y herramientas")
        .row.mb-5.justify-content-center
          .col-lg-3.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema4/13.png")
          .col-lg-5
            div.bg-color-sintesis.p-3.tarjeta.h-100
              figure.mb-3
                img(src="@/assets/curso/tema4/14.png", style="max-width: 190px")
              ul.ms-3.lista-ul--color.lista-ul--separador
                li.d-flex 
                  i.fas.fa-circle-check.bg-color-5
                  p.mb-0 <b>Barras</b>: comparar indicadores entre periodos.
                li.d-flex 
                  i.fas.fa-circle-check.bg-color-5
                  p.mb-0 <b>Gráficos circulares</b>: mostrar proporciones.
                li.d-flex 
                  i.fas.fa-circle-check.bg-color-5
                  p.mb-0 <b>Mapas de calor</b>: identificar zonas críticas en el almacén.
          .col-lg-4
            div.bg-color-sintesis.p-3.tarjeta.h-100
              figure.mb-3
                img(src="@/assets/curso/tema4/15.png", style="max-width: 230px")
              ul.ms-3.lista-ul--color.lista-ul--separador
                li.d-flex 
                  i.fas.fa-circle-check.bg-color-5
                  p.mb-0 <b>Rojo</b>: alertas o desviaciones críticas.
                li.d-flex 
                  i.fas.fa-circle-check.bg-color-5
                  p.mb-0 <b>Verde</b>: metas cumplidas.
                li.d-flex 
                  i.fas.fa-circle-check.bg-color-5
                  p.mb-0 <b>Azul</b>: datos neutros o comparativos.
      .div(titulo="Adaptación al público objetivo")
        .row.mb-5.justify-content-center.align-items-center
          .col-lg-3.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema4/16.png")
          .col-lg-8
            ul.ms-3.lista-ul--color.lista-ul--separador
              li.d-flex 
                i.fas.fa-circle-check.bg-color-5
                p.mb-0 <b>Para alta dirección</b>: Formato ejecutivo (máximo 10 diapositivas) destacando impacto financiero, ahorros, ROI y riesgos de no actuar para apoyar decisiones estratégicas.
              li.d-flex 
                i.fas.fa-circle-check.bg-color-5
                p.mb-0 <b>Para supervisores</b>: Informe técnico con taller práctico, enfocado en soluciones operativas paso a paso y capacitación para adoptar nuevos procesos.
              li.d-flex 
                i.fas.fa-circle-check.bg-color-5
                p.mb-0 <b>Para equipo operativo</b>: Infografías en zonas comunes con métricas simples y visuales, como “5 pasos para reducir errores en <em>picking</em>”, para reforzar buenas prácticas.

</template>

<script>
export default {
  name: 'Tema4',
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

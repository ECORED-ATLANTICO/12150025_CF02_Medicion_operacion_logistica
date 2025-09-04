<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Evaluación de operaciones en almacén
    
    .bloque-texto-g.color-secundario.bg-color-1.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema1/1.png')})`}"
      )(data-aos="zoom-in")
      .bloque-texto-g__texto.p-4
        p.mb-0 La evaluación de operaciones en almacén es un proceso que integra métodos cuantitativos, como el análisis de datos numéricos y la medición de indicadores clave de desempeño (KPIs); por ejemplo, la eficiencia de recepción, el porcentaje de ocupación del almacén, la exactitud del inventario, la productividad por hora y el porcentaje de órdenes perfectas, con métodos cualitativos, que consideran el criterio y la experiencia de los expertos para identificar amenazas, vulnerabilidades y oportunidades de mejora en los procesos. 
    
    separador
    
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.1 Concepto
    
    .bg-full-width.bg-fondo-1.mb-5
      .p-4.p-md-5
        img(data-aos="fade-up")(src="@/assets/curso/tema1/2.png", alt="Imagen decorativa")

        .row.justify-content-center.align-items-center.z-2.mb-5
          .col-lg-10
            p.banner-text La evaluación de operaciones en almacén es un proceso sistemático y estructurado que tiene como objetivo medir, analizar y mejorar la eficiencia, productividad y calidad de las actividades logísticas realizadas dentro de un almacén. Este proceso permite identificar fortalezas, debilidades y oportunidades de optimización, asegurando que los recursos (humanos, tecnológicos y económicos) se utilicen de la manera más efectiva posible, de acuerdo con los siguientes propósitos clave:

        .row
          .col-lg-5.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema1/3.png", data-aos="zoom-in")
          .col-lg-7
            LineaTiempoD.color-primario.large(data-aos="fade-left")
              p(numero="1" titulo="Medir  el desempeño") Establecer métricas cuantificables para evaluar la eficacia de los procesos.
              p(numero="2" titulo="Identificar ineficiencias") Detectar cuellos de botella, errores recurrentes y áreas con bajo rendimiento.
              p(numero="3" titulo="Garantizar la calidad") Asegurar que los productos se almacenen, manipulen y despachen cumpliendo estándares establecidos.
              p(numero="4" titulo="Optimizar costos.") Reducir gastos innecesarios en mano de obra, tiempo y recursos.
              p(numero="5" titulo="Facilitar la toma de decisiones") Proporcionar datos confiables para implementar mejoras estratégicas.
    
    .cajon.color-acento-contenido.p-4.mb-5
      p La evaluación de las operaciones logísticas en almacén se centra en procesos clave que permiten medir el desempeño y detectar oportunidades de mejora. A continuación, se presentan las principales áreas objeto de análisis:
    
    .bg-full-width.bg-fondo-2
      .p-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-6.p-5
            ImagenInfografica.color-secundario
              template(v-slot:imagen)
                figure
                  img(src='@/assets/curso/tema1/4.png', alt='', style="max-width: 1106px;").mx-auto
    
              .bg-color-3.tarjeta.box-shadow.p-3(x="2%" y="100%" numero="+")
                .row.align-items-center
                  .col-lg-5
                    figure
                      img(src='@/assets/curso/tema1/5.png').mx-auto
                  .col-lg-7
                    h5 Recepción  de mercancías
                    p Tiempos de descarga, verificación de pedidos y registro en sistemas.
    
              .bg-color-3.tarjeta.box-shadow.p-3(x="27%" y="100%" numero="+")
                .row.align-items-center
                  .col-lg-5
                    figure
                      img(src='@/assets/curso/tema1/6.png').mx-auto
                  .col-lg-7
                    h5 Recepción  de mercancías
                    p Tiempos de descarga, verificación de pedidos y registro en sistemas.
    
              .bg-color-3.tarjeta.box-shadow.p-3(x="52%" y="100%" numero="+")
                .row.align-items-center
                  .col-lg-5
                    figure
                      img(src='@/assets/curso/tema1/7.png').mx-auto
                  .col-lg-7
                    h5 Recepción  de mercancías
                    p Tiempos de descarga, verificación de pedidos y registro en sistemas.
    
              .bg-color-3.tarjeta.box-shadow.p-3(x="75%" y="100%" numero="+")
                .row.align-items-center
                  .col-lg-5
                    figure
                      img(src='@/assets/curso/tema1/8.png').mx-auto
                  .col-lg-7
                    h5 Recepción  de mercancías
                    p Tiempos de descarga, verificación de pedidos y registro en sistemas.
    
              .bg-color-3.tarjeta.box-shadow.p-3(x="100%" y="100%" numero="+")
                .row.align-items-center
                  .col-lg-5
                    figure
                      img(src='@/assets/curso/tema1/9.png').mx-auto
                  .col-lg-7
                    h5 Recepción  de mercancías
                    p Tiempos de descarga, verificación de pedidos y registro en sistemas.
    
    separador
    
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.2 Procedimiento
    
    .bloque-texto-g.color-secundario.bg-color-4.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema1/10.png')})`}"
      )(data-aos="zoom-in")
      .bloque-texto-g__texto.p-4
        p.mb-0 El procedimiento de evaluación de operaciones en almacén es un proceso estructurado y secuencial que permite analizar el desempeño de las actividades logísticas, identificar áreas de mejora y tomar decisiones basadas en datos. A continuación, se detallan las etapas clave para llevar a cabo una evaluación efectiva:

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/11.png", data-aos="zoom-in")
      .col-lg-8
         TabsA.color-primario.mb-5
          //- .tarjeta debe ir acompañado de una de una de estas clases => 
          //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
          //- estas clases tambien tienen un modificador --borde
          .tarjeta.color-acento-botones--borde.p-4.h-100(titulo="Planificación")
            figure
              img(src="@/assets/curso/tema1/12.png", data-aos="zoom-in")
            h4 Planificación
            p Definir el alcance, los recursos necesarios y los criterios de evaluación.
          .tarjeta.color-acento-botones--borde.p-4.h-100(titulo="Recolección de datos")
            figure
              img(src="@/assets/curso/tema1/13.png", data-aos="zoom-in")
            h4 Recolección de datos
            p Obtener información precisa y relevante para el análisis.
          .tarjeta.color-acento-botones--borde.p-4.h-100(titulo="Análisis de datos")
            figure
              img(src="@/assets/curso/tema1/14.png", data-aos="zoom-in")
            h4 Análisis de datos
            p Interpretar la información para identificar tendencias, problemas y oportunidades.
          .tarjeta.color-acento-botones--borde.p-4.h-100(titulo="Reporte y recomendaciones")
            figure
              img(src="@/assets/curso/tema1/15.png", data-aos="zoom-in")
            h4 Reporte y recomendaciones
            p Comunicar hallazgos y proponer acciones correctivas.
          .tarjeta.color-acento-botones--borde.p-4.h-100(titulo="Implementación y seguimiento")
            figure
              img(src="@/assets/curso/tema1/16.png", data-aos="zoom-in")
            h4 Implementación y seguimiento
            p Asegurar que las mejoras se apliquen y mantengan.
           
    .cajon.color-acento-contenido.p-4.mb-5
      p Un error común en la evaluación de operaciones logísticas es trabajar con datos incompletos, lo que impide tener una visión integral al omitir áreas críticas del almacén. Además, puede presentarse sesgo en la recolección de información cuando se recurre únicamente a fuentes subjetivas, como opiniones sin respaldo en datos objetivos, afectando la precisión del análisis. Finalmente, la falta de seguimiento posterior a la implementación de mejoras limita la posibilidad de verificar su efectividad y de realizar ajustes oportunos, comprometiendo así la mejora continua del sistema logístico.
    
    separador
    
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.3 Métodos de evaluación
    
    .bg-full-width.bg-fondo-1.mb-3
      .p-4.p-md-5
        .row.mb-5
          .col-lg-4.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema1/17.png", data-aos="zoom-in")
          .col-lg-8
            p(data-aos="fade-left").mb-5 La evaluación de las operaciones en un almacén es esencial para identificar áreas de mejora, optimizar procesos y garantizar la eficiencia logística. Existen diversos métodos de evaluación, cada uno con enfoques y herramientas específicas. A continuación, se presenta un análisis detallado de los principales métodos utilizados en la gestión de almacenes.

            .titulo-con-imagen.mb-3(data-aos="fade-right")
              .titulo-con-imagen__fondo
                img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
                h3.titulo-con-imagen__texto Métodos cuantitativos
            
            p.mb-5 Los métodos cuantitativos se basan en datos numéricos y estadísticos para medir el desempeño de las operaciones. Son objetivos y permiten comparaciones precisas.
        
        TabsC.color-primario
          .py-3.py-md-4(titulo="Análisis  de datos operativos.")
            .row.p-4.align-items-center
              .col-md-8.mb-4.mb-md-0
                h4 Análisis  de datos operativos.
                p Permite la recolección de métricas clave como: tiempos de ciclo (recepción, almacenamiento, picking, despacho, entre otros), exactitud de inventarios (discrepancias entre sistema y físico), niveles de productividad (unidades movidas por hora).
                p Utiliza herramientas como sistemas de gestión de almacenes (WMS), hojas de cálculo (Excel, Power BI).
            
              .col-md-4
                figure
                  img(src='@/assets/curso/tema1/18.png', alt='Texto que describa la imagen')
          .py-3.py-md-4(titulo="Estudios de tiempos y movimientos.")
            .row.p-4.align-items-center
              .col-md-8.mb-4.mb-md-0.order-2
                h4 Estudios de tiempos y movimientos.
                p Permite medir la eficiencia de los procesos mediante la observación directa. Se realiza cronometrando actividades como picking, packing y carga. Un ejemplo es cuando un operario tarda 5 m en preparar un pedido, pero el estándar es 3, se investigan las causas.
            
              .col-md-4.order-1
                figure
                  img(src='@/assets/curso/tema1/19.png', alt='Texto que describa la imagen')
          .py-3.py-md-4(titulo="Muestreo de trabajo.")
            .row.p-4.align-items-center
              .col-md-8.mb-4.mb-md-0
                h4 Muestreo de trabajo.
                p Permite la observación aleatoria de actividades para estimar distribución de tiempos. Es menos intrusivo que el cronometraje continuo y útil para procesos no repetitivos.
              .col-md-4
                figure
                  img(src='@/assets/curso/tema1/20.png', alt='Texto que describa la imagen')
          .py-3.py-md-4(titulo="Simulación por computadora.")
            .row.p-4.align-items-center
              .col-md-8.mb-4.mb-md-0.order-2
                h4 Simulación por computadora.
                p Permite modelar flujos de trabajo y probar escenarios (aumento de pedidos, cambios en layout, entre otros).
                p Ayuda a reducir costos de pruebas físicas y permite optimizar rutas de picking y almacenamiento.
              .col-md-4.order-1
                figure
                  img(src='@/assets/curso/tema1/21.png', alt='Texto que describa la imagen')
    
    .titulo-con-imagen.mb-3(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
        h3.titulo-con-imagen__texto Métodos cualitativos
    
    .bg-full-width.bg-fondo-3.mb-3
      .p-4.p-md-5
        p.mb-5 Estos métodos evalúan aspectos subjetivos como satisfacción del personal, ergonomía y clima laboral.

        .row.mb-5
          .col-lg-4.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema1/22.png", data-aos="zoom-in")
          .col-lg-8
            .bg-fondo-slider.mb-5
              .p-4.p-md-5
                SlyderA(tipo="b").bg-white.tarjeta.p-4
                  div
                    h4 Encuestas  y entrevistas.
                    ul.ms-3.lista-ul--color.lista-ul--separador
                      li.d-flex 
                        i.fas.fa-circle-check.bg-color-5
                        p.mb-0 Encuestas anónimas a operarios sobre condiciones de trabajo.
                      li.d-flex 
                        i.fas.fa-circle-check.bg-color-5
                        p.mb-0 Entrevistas con supervisores para identificar cuellos de botella.
                    p.mb-0 <b>Ejemplo</b>: si el 70 % del personal reporta fatiga por mal diseño de pasillos, se reconsidera el <em>layout</em>.
                  div
                    h4 Grupos focales.
                    p.mb-0 Dinámicas con equipos de trabajo en las cuales se realizan discusiones abiertas sobre problemas operativos y lluvia de ideas para mejorar procesos.
                  div
                    h4 Observación participante.
                    ul.ms-3.lista-ul--color.lista-ul--separador
                      li.d-flex 
                        i.fas.fa-circle-check.bg-color-5
                        p.mb-0 En esta, supervisores o consultores trabajan junto al personal para identificar ineficiencias "en tiempo real".
                    p.mb-0 <b>Ejemplo</b>: dificultad para alcanzar estanterías altas sin equipo adecuado.

        .titulo-con-imagen(data-aos="fade-right")
          .titulo-con-imagen__fondo
            img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
            h3.titulo-con-imagen__texto Benchmarking  
    
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/23.png", data-aos="zoom-in")
      .col-lg-8
        p(data-aos="fade-left") La comparación con estándares de la industria o con empresas líderes es una técnica fundamental para identificar brechas en el desempeño logístico. Este enfoque permite detectar diferencias entre los resultados actuales y los niveles óptimos alcanzados por referentes del sector. Para llevar a cabo este análisis, se debe seguir un proceso estructurado que incluye la selección de métricas clave, la recolección de datos pertinentes, el análisis de las diferencias encontradas y, finalmente, la propuesta de acciones de mejora orientadas al cierre de dichas brechas:

        .row.justify-content-center
          .col-lg-12
            .section-pasos
              .pasos-container
                .paso(data-aos="fade-down")
                  span.numero 1
                  .contenido
                    .icono
                      img(src="@/assets/curso/tema1/24.svg" alt="Seguridad")
                    h4 Interno
                    p Comparar diferentes almacenes de la misma empresa.
                .paso(data-aos="fade-up")
                  span.numero 2
                  .contenido
                    .icono
                      img(src="@/assets/curso/tema1/25.svg" alt="Eficiencia")
                    h4 Competitivo
                    p Analizar competidores directos.
                .paso(data-aos="fade-down")
                  span.numero 3
                  .contenido
                    .icono
                      img(src="@/assets/curso/tema1/26.svg" alt="Protección")
                    h4 Funcional
                    p Estudiar mejores prácticas de otros sectores.
    
    .titulo-con-imagen(data-aos="fade-right").mb-5
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
        h3.titulo-con-imagen__texto Auditorías 

    .bg-full-width.bg-fondo-1.mb-3
      .p-4.p-md-5
        .bloque-texto-g.color-secundario.bg-color-1.p-3.p-sm-4.p-md-5.mb-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema1/27.png')})`}"
          )(data-aos="zoom-in")
          .bloque-texto-g__texto.p-4
            p.mb-0 Evaluaciones estructuradas para verificar cumplimiento de normas y estándares. Los enfoques utilizados son listas de verificación para evaluar condiciones de almacén y las auditorías sorpresa que detectan problemas no visibles en evaluaciones programadas.
        
        .row.mb-5.justify-content-center
          .col-md-6.col-xl.mb-4.mb-xl-0
            //- .tarjeta-numerada debe ir acompañado de una de una de estas clases => 
            //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
            //- estas clases tambien tienen un modificador --borde
            .tarjeta-numerada.color-primario.p-4
              .tarjeta-numerada__numero
                .h2 01
              p.ms-3.mb-0 
                b Internas
              p.ms-3.mb-0 Realizadas por el equipo de calidad de la empresa.
          .col-md-6.col-xl.mb-4.mb-xl-0
            //- .tarjeta-numerada debe ir acompañado de una de una de estas clases => 
            //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
            //- estas clases tambien tienen un modificador --borde
            .tarjeta-numerada.color-secundario.p-4
              .tarjeta-numerada__numero
                .h2 02
              p.ms-3.mb-0 
                b Externas
              p.ms-3.mb-0 Llevadas a cabo por entidades certificadoras.
          .col-md-6.col-xl.mb-4.mb-xl-0
            //- .tarjeta-numerada debe ir acompañado de una de una de estas clases => 
            //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
            //- estas clases tambien tienen un modificador --borde
            .tarjeta-numerada.color-primario.p-4
              .tarjeta-numerada__numero
                .h2 03
              p.ms-3.mb-0 
                b De seguridad
              p.ms-3.mb-0 Revisión de normas o regulaciones locales.
     
        .titulo-con-imagen(data-aos="fade-right").mb-5
          .titulo-con-imagen__fondo
            img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
            h3.titulo-con-imagen__texto Métodos híbridos

        p.mb-5 Combinación de técnicas cuantitativas y cualitativas para una evaluación integral.

        .row
          .col-lg-6.mb-3.mb-lg-0
            .bg-color-6.h-100
              figure
                img(src="@/assets/curso/tema1/28.png", data-aos="zoom-in")
              div.p-3
                h4 Cuadro  de mando integral (<em>Balanced scorecard</em>)
                p Evalúa el almacén en cuatro perspectivas:
                ul.ms-3.lista-ul--color.lista-ul--separador
                  li.d-flex 
                    i.fas.fa-circle-check.bg-color-7
                    p.mb-0 <b>Financiera</b>: costos de operación.
                  li.d-flex 
                    i.fas.fa-circle-check.bg-color-7
                    p.mb-0 <b>Cliente</b>: tiempos de entrega.
                  li.d-flex 
                    i.fas.fa-circle-check.bg-color-7
                    p.mb-0 <b>Procesos internos</b>: eficiencia de <em>picking</em>.
                  li.d-flex 
                    i.fas.fa-circle-check.bg-color-7
                    p.mb-0 <b>Aprendizaje y crecimiento</b>: capacitación del personal.
          .col-lg-6
            .bg-color-1.h-100
              figure
                img(src="@/assets/curso/tema1/29.png", data-aos="zoom-in")
              div.p-3
                h4 <em>Six Sigma</em>
                p Metodología para reducir variabilidad y errores:
                ul.ms-3.lista-ul--color.lista-ul--separador
                  li.d-flex 
                    i.fas.fa-circle-check.bg-color-8
                    p.mb-0 Definir el problema.
                  li.d-flex 
                    i.fas.fa-circle-check.bg-color-8
                    p.mb-0 Medir el desempeño actual.
                  li.d-flex 
                    i.fas.fa-circle-check.bg-color-8
                    p.mb-0 Analizar causa raíz.
                  li.d-flex 
                    i.fas.fa-circle-check.bg-color-8
                    p.mb-0 Mejorar procesos.
                  li.d-flex 
                    i.fas.fa-circle-check.bg-color-8
                    p.mb-0 Controlar resultados.
              
    .cajon.color-acento-contenido.p-4.mb-5
      p La elección del método de evaluación en un almacén debe responder a los objetivos específicos que se buscan alcanzar. Si el enfoque es mejorar la eficiencia operativa, se recomiendan métodos cuantitativos; si se trata de analizar el clima laboral, son más apropiados los métodos cualitativos; y si el propósito es fortalecer la mejora continua, herramientas como el benchmarking y six sigma resultan ideales. En cualquier caso, una evaluación constante es fundamental para garantizar un almacén competitivo y eficiente.
    
      
              
       
    
 
        
    
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

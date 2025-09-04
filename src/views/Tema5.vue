<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Mejora continua en almacén
    
    img(data-aos="fade-up")(src="@/assets/curso/tema5/1.png", alt="Imagen decorativa")

    .row.justify-content-center.align-items-center.z-2.mb-5
      .col-lg-10
        p.banner-text En un entorno logístico competitivo, los almacenes deben adaptarse a cambios en la demanda, nuevas tecnologías y estándares de servicio. Implementar un sistema de mejora continua permite mantener altos niveles de desempeño y responder rápidamente a los desafíos operativos.
    
    .bg-full-width.bg-fondo-3.mb-3
      .p-4.p-md-5
        separador
        
        #t_5_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
          h2 5.1 Concepto
        
        p.mb-5 La mejora continua es un enfoque sistemático para optimizar procesos, eliminar desperdicios y aumentar la eficiencia en el almacén. Se basa en la filosofía de que siempre hay oportunidades para mejorar, ya sea en productividad, calidad, seguridad o costos. Los principales objetivos son:

        .row.justify-content-center.align-items-center
          .col-lg-8.mb-3.mb-lg-0.order-2
            SlyderF(columnas="col-12 col-lg-6")
              .bg-color-white.p-4.h-100.box-shadow
                img(src='@/assets/curso/tema5/3.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                p.text-center.mb-0 Reducir tiempos de operación (picking, packing, despacho, entre otros).
              .bg-color-white.p-4.h-100.box-shadow
                img(src='@/assets/curso/tema5/4.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                p.text-center.mb-0 Minimizar errores (inventarios inexactos y pedidos equivocados).
              .bg-color-white.p-4.h-100.box-shadow
                img(src='@/assets/curso/tema5/5.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                p.text-center.mb-0 Aumentar la productividad con los mismos recursos
              .bg-color-white.p-4.h-100.box-shadow
                img(src='@/assets/curso/tema5/6.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                p.text-center.mb-0 Eliminar desperdicios (sobreprocesamiento, movimientos innecesarios y esperas).
              .bg-color-white.p-4.h-100.box-shadow
                img(src='@/assets/curso/tema5/7.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                p.text-center.mb-0 Mejorar la satisfacción del cliente (entregas a tiempo y menor tasa de devoluciones).
    
          .col-lg-4.order-1
            figure
              img(src='@/assets/curso/tema5/2.png', alt='')
    
    separador
    
    #t_5_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 5.2 Acciones y estrategias

    .bg-full-width.bg-fondo-3.mb-3
      .p-4.p-md-5
        .row.mb-5
          .col-lg-4.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema5/8.png", data-aos="zoom-in")
          .col-lg-8
            p.mb-5(data-aos="fade-left") La implementación de acciones de mejora en el almacén es crucial para optimizar procesos, reducir costos y aumentar la productividad. Permite eliminar desperdicios, minimizar errores y adaptarse a cambios en la demanda. Además, fomenta una cultura de innovación y eficiencia, garantizando competitividad y satisfacción del cliente. Una vez identificadas las oportunidades, se ejecutan acciones concretas:
        
            .titulo-con-imagen.mb-3(data-aos="fade-right")
              .titulo-con-imagen__fondo
                img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
                h3.titulo-con-imagen__texto Tipos de acciones de mejora continua
            
            p Se refieren a las categorías o enfoques específicos que pueden aplicarse para optimizar procesos, eliminar desperdicios y aumentar la eficiencia en un almacén o entorno logístico:

        TabsC.color-primario.mb-5
          .py-3.py-md-4(titulo="Optimización  de <em>layout</em> y flujos")
            .row.p-4.align-items-center
              .col-md-8.mb-4.mb-md-0
                h4 Optimización  de <em>layout</em> y flujos
                p Rediseñar el almacén para reducir movimientos, ubicando productos de alta rotación cerca del despacho, e implementar sistemas de almacenamiento dinámico como estanterías móviles o <em>picking</em> por zonas para agilizar la operación.
              .col-md-4
                figure
                  img(src='@/assets/curso/tema5/9.png', alt='Texto que describa la imagen')
          .py-3.py-md-4(titulo="Automatización y tecnología")
            .row.p-4.align-items-center
              .col-md-8.mb-4.mb-md-0
                h4 Automatización y tecnología
                p Implementar un WMS para seguimiento en tiempo real, usar <em>cobots</em> para <em>picking</em> y transporte, y aplicar RFID o códigos QR para lograr inventarios más precisos.
              .col-md-4
                figure
                  img(src='@/assets/curso/tema5/10.png', alt='Texto que describa la imagen')
          .py-3.py-md-4(titulo="Capacitación del personal")
            .row.p-4.align-items-center
              .col-md-8.mb-4.mb-md-0
                h4 Capacitación del personal
                p Capacitar en buenas prácticas logísticas y usar simulaciones o gamificación para reforzar habilidades
              .col-md-4
                figure
                  img(src='@/assets/curso/tema5/11.png', alt='Texto que describa la imagen')
          .py-3.py-md-4(titulo="Reducción de desperdicios")
            .row.p-4.align-items-center
              .col-md-8.mb-4.mb-md-0
                h4 Reducción de desperdicios
                p Eliminar sobreprocesos, reducir tiempos de espera y aplicar inventarios “justo a tiempo” para optimizar la operación del almacén.
              .col-md-4
                figure
                  img(src='@/assets/curso/tema5/12.png', alt='Texto que describa la imagen')

        .titulo-con-imagen(data-aos="fade-right")
          .titulo-con-imagen__fondo
            img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
            h3.titulo-con-imagen__texto Fomento de la mejora continua
    
    .bg-full-width.bg-fondo-3.mb-3
      .p-4.p-md-5
        .bloque-texto-g.color-secundario.bg-color-12.p-3.p-sm-4.p-md-5.mb-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema5/13.png')})`}"
          )(data-aos="zoom-in")
          .bloque-texto-g__texto.p-4
            p.mb-0 El fomento de una cultura de mejora continua es esencial para mantener operaciones eficientes y competitivas en el almacén. Involucrar al equipo, reconocer aportes y promover la innovación constante genera un entorno proactivo, donde la optimización de procesos se convierte en un hábito, impulsando productividad, reducción de costos y adaptabilidad a cambios del mercado.
    
    
        p El resultado es un almacén más ágil, eficiente y adaptable, capaz de enfrentar los retos logísticos con una mentalidad de crecimiento constante. Para que la mejora continua sea sostenible, debe integrarse en la cultura organizacional:

    .titulo-sexto.color-acento-contenido
      h5 Tabla 3.
      span Aspectos clave para el fomento de la mejora continua
    .tabla-a.color-secundario.mb-5.tbl
      table
        caption Fuente: SENA, 2025.
        thead
          tr
            th.bg-color-1 Aspectos claves
            th.bg-color-1 Estrategias
            th.bg-color-1 Descripción
        tbody.bg-color-white
          tr
            td(rowspan="2") Involucramiento activo del personal.
            td Participación de todos los niveles.
            td
              ul.lista-ul--color.lista-ul--separador
                li.d-flex
                  i.fas.fa-circle-check.bg-color-5
                  p.mb-0 Liderazgo comprometido: la gerencia debe apoyar visiblemente las mejoras, asignando recursos y tiempo.
                li.d-flex
                  i.fas.fa-circle-check.bg-color-5
                  p.mb-0 Empoderamiento de operarios: los trabajadores, por su cercanía con los procesos, son clave para detectar y proponer soluciones.
          tr.bg-color-9
            td Sistemas de sugerencias y reconocimiento.
            td
              ul.lista-ul--color.lista-ul--separador
                li.d-flex
                  i.fas.fa-circle-check.bg-color-5
                  p.mb-0 Buzones de ideas: habilitar medios físicos o digitales para recibir propuestas de mejora.
                li.d-flex
                  i.fas.fa-circle-check.bg-color-5
                  p.mb-0 Programas de incentivos: reconocer y recompensar ideas implementadas con bonos, ascensos o menciones públicas.
                li.d-flex
                  i.fas.fa-circle-check.bg-color-5
                  p.mb-0 Retroalimentación constante: informar a los empleados sobre el impacto positivo de sus aportes.
          tr
            td(rowspan="3") Comunicación efectiva y transparencia.
            td Reuniones periódicas de mejora.
            td
              ul.lista-ul--color.lista-ul--separador
                li.d-flex
                  i.fas.fa-circle-check.bg-color-5
                  p.mb-0 Reuniones diarias breves: tratar problemas operativos y posibles soluciones en encuentros cortos.
                li.d-flex
                  i.fas.fa-circle-check.bg-color-5
                  p.mb-0 Sesiones Kaizen: talleres enfocados en resolver problemas puntuales con equipos multidisciplinarios.
          tr.bg-color-9
            td Tableros visuales (Kanban) y Dashboards.
            td
              ul.lista-ul--color.lista-ul--separador
                li.d-flex
                  i.fas.fa-circle-check.bg-color-5
                  p.mb-0 Indicadores en tiempo real: mostrar métricas clave como productividad, errores y tiempos de ciclo.
                li.d-flex
                  i.fas.fa-circle-check.bg-color-5
                  p.mb-0 Seguimiento de proyectos: registrar avances y obstáculos en paneles accesibles a todos.
          tr
            td Comunicación bidireccional.
            td
              ul.lista-ul--color.lista-ul--separador
                li.d-flex
                  i.fas.fa-circle-check.bg-color-5
                  p.mb-0 Encuestas de clima laboral: detectar frustraciones y oportunidades desde la visión del empleado.
                li.d-flex
                  i.fas.fa-circle-check.bg-color-5
                  p.mb-0 Canales de diálogo abiertos: permitir que los trabajadores expresen inquietudes sin temor a represalias.
          tr.bg-color-9
            td(rowspan="2") Reconocimiento y motivación.
            td Celebración de éxitos.
            td
              ul.lista-ul--color.lista-ul--separador
                li.d-flex
                  i.fas.fa-circle-check.bg-color-5
                  p.mb-0 Eventos de reconocimiento: resaltar públicamente a quienes aporten mejoras significativas.
                li.d-flex
                  i.fas.fa-circle-check.bg-color-5
                  p.mb-0 Historias de éxito: compartir casos donde las ideas del equipo generaron impacto.
          tr
            td Vinculación de la mejora continua con objetivos personales.
            td
              ul.lista-ul--color.lista-ul--separador
                li.d-flex
                  i.fas.fa-circle-check.bg-color-5
                  p.mb-0 Evaluaciones de desempeño: incluir la innovación y mejora como criterios de valoración.
                li.d-flex
                  i.fas.fa-circle-check.bg-color-5
                  p.mb-0 Planes de carrera: ofrecer crecimiento profesional a quienes lideren iniciativas de optimización.



 
        

</template>

<script>
export default {
  name: 'Tema5',
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

<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Indicadores de desempeño
    
   
    img(data-aos="fade-up")(src="@/assets/curso/tema2/1.png", alt="Imagen decorativa")

    .row.justify-content-center.align-items-center.z-2.mb-5
      .col-lg-10
        p.banner-text Los indicadores de desempeño (KPIs) son herramientas cuantitativas y cualitativas que permiten medir, evaluar y mejorar la eficiencia de los procesos logísticos en un almacén. Su correcta selección y análisis garantiza una gestión basada en datos para la toma de decisiones estratégicas.
    
    .bg-full-width.bg-fondo-1.mb-5
      .p-4.p-md-5
        .row.mb-5.align-items-center
          .col-lg-5.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema2/2.png", data-aos="zoom-in")
          .col-lg-7
            p(data-aos="fade-left") Las funciones clave de los KPIs permiten traducir los datos operativos en información útil para gestionar el rendimiento logístico, detectar oportunidades de mejora y alinear las acciones con los objetivos estratégicos del almacén.
            .row.align-items-center
              .col-lg-7
                ul.lista-ul--color.lista-ul--separador
                  li.d-flex 
                    i.fas.fa-circle-check.bg-color-5
                    p.mb-0 Establecer estándares de desempeño.
                  li.d-flex 
                    i.fas.fa-circle-check.bg-color-5
                    p.mb-0 Identificar desviaciones operativas.
                  li.d-flex 
                    i.fas.fa-circle-check.bg-color-5
                    p.mb-0 Tomar decisiones basadas en datos.
                  li.d-flex 
                    i.fas.fa-circle-check.bg-color-5
                    p.mb-0 Implementar mejoras continuas.
                  li.d-flex 
                    i.fas.fa-circle-check.bg-color-5
                    p.mb-0 Alinear operaciones con los objetivos estratégicos.

              .col-lg-5
                figure
                  img(src="@/assets/curso/tema2/3.png", data-aos="zoom-in")
        
        separador
        
        #t_2_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
          h2 2.1 Tipos 
        
        .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema2/4.png')})`}"
          )(data-aos="zoom-in")
          .bloque-texto-g__texto.p-4
            p.mb-0 Los indicadores de desempeño son herramientas cuantitativas esenciales para medir, analizar y mejorar el desempeño de las operaciones logísticas en almacenes.  A continuación, se mencionan los tipos de indicadores utilizados en la evaluación de operaciones en almacén:
    
  
    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
      .div(titulo="Por dimensión operativa")
        .titulo-sexto.color-acento-contenido
          h5 Tabla 1.
          span Tipos de indicadores según dimensión operativa 
        .tabla-a.color-secundario.mb-5.tbl
          table
            caption Fuente: SENA, 2025.
            thead
              tr
                th.bg-color-1 Clasificación
                th.bg-color-1 Indicadores
                th.bg-color-1 Descripción
            tbody.bg-color-9
              tr.bg-color-white
                td(rowspan="3") De recepción.
                td Tiempo promedio de descarga (TPD).
                td 
                  ul.lista-ul--color.lista-ul--separador
                    li.d-flex 
                      i.fas.fa-circle-check.bg-color-5
                      p.mb-0 Fórmula: total minutos de descarga / número de vehículos recibidos.
                    li.d-flex 
                      i.fas.fa-circle-check.bg-color-5
                      p.mb-0 Estándar industrial: 30-45 min para carga paletizada.
              tr
                td Tiempo de inventariado de mercancías recibidas.
                td 
                  ul.lista-ul--color.lista-ul--separador
                    li.d-flex 
                      i.fas.fa-circle-check.bg-color-5
                      p.mb-0 Fórmula: fecha en que la mercancía se coloca en stock - fecha en que se recibe la mercancía.
              tr.bg-color-white
                td Productividad en recepción.
                td 
                  ul.lista-ul--color.lista-ul--separador
                    li.d-flex 
                      i.fas.fa-circle-check.bg-color-5
                      p.mb-0 Fórmula: Unidades recibidas / h por operario
                    li.d-flex 
                      i.fas.fa-circle-check.bg-color-5
                      p.mb-0 Benchmark: 150-200 cajas / h en operación manual. 
              tr
                td(rowspan="4") De almacenamiento.
                td Tasa de utilización de espacio.
                td 
                  ul.lista-ul--color.lista-ul--separador
                    li.d-flex 
                      i.fas.fa-circle-check.bg-color-5
                      p.mb-0 Fórmula: volumen ocupado / capacidad total x 100.
                    li.d-flex 
                      i.fas.fa-circle-check.bg-color-5
                      p.mb-0 Óptimo: 80-85 % (permite flujos de trabajo).
              tr.bg-color-white
                td Costo de almacenamiento por unidad.
                td 
                  ul.lista-ul--color.lista-ul--separador
                    li.d-flex 
                      i.fas.fa-circle-check.bg-color-5
                      p.mb-0 Fórmula: costos operativos totales / unidades almacenadas.
                    li.d-flex 
                      i.fas.fa-circle-check.bg-color-5
                      p.mb-0 Incluye: mano obra, equipos, energía, depreciación.
              tr
                td Eficiencia en ubicación.
                td 
                  ul.lista-ul--color.lista-ul--separador
                    li.d-flex 
                      i.fas.fa-circle-check.bg-color-5
                      p.mb-0 Tiempo promedio para ubicar mercancía.
                    li.d-flex 
                      i.fas.fa-circle-check.bg-color-5
                      p.mb-0 Tecnología de mejora: sistemas de putaway inteligente.
              tr.bg-color-white
                td Días on hand de mercancía.
                td 
                  ul.lista-ul--color.lista-ul--separador
                    li.d-flex 
                      i.fas.fa-circle-check.bg-color-5
                      p.mb-0 Tiempo promedio que permanece una referencia en el almacén.
              tr
                td(rowspan="3").bg-color-white De picking.
                td Tasa de errores en picking.
                td 
                  ul.lista-ul--color.lista-ul--separador
                    li.d-flex 
                      i.fas.fa-circle-check.bg-color-5
                      p.mb-0 Fórmula: pedidos con errores / total pedidos x 100
                    li.d-flex 
                      i.fas.fa-circle-check.bg-color-5
                      p.mb-0 Nivel aceptable: <0.5 % en retail.
              tr.bg-color-white
                td Distancia recorrida en picking.
                td 
                  ul.lista-ul--color.lista-ul--separador
                    li.d-flex 
                      i.fas.fa-circle-check.bg-color-5
                      p.mb-0 Medición con sistemas WMS con routing, wearables.
              tr
                td Número de líneas de pedido recogidas y preparadas en una hora.
                td 
                  ul.lista-ul--color.lista-ul--separador
                    li.d-flex 
                      i.fas.fa-circle-check.bg-color-5
                      p.mb-0 Representa la cantidad de líneas de pedido (o ítems individuales) que un operario o equipo logra recoger y preparar en una hora de trabajo.
                    li.d-flex 
                      i.fas.fa-circle-check.bg-color-5
                      p.mb-0 Variaciones según método: picking discreto: 60-80 LPH, picking por lote: 100-120 LPH, picking por zona: 80-100 LPH.
              tr
                td(rowspan="2") De despacho.
                td.bg-color-white Envíos a tiempo
                td.bg-color-white 
                  ul.lista-ul--color.lista-ul--separador
                    li.d-flex 
                      i.fas.fa-circle-check.bg-color-5
                      p.mb-0 Fórmula: pedidos despachados a tiempo / total pedidos.
                    li.d-flex 
                      i.fas.fa-circle-check.bg-color-5
                      p.mb-0 Estándar clase mundial: >98 %.
              tr
                td Utilización del cubicaje
                td 
                  ul.lista-ul--color.lista-ul--separador
                    li.d-flex 
                      i.fas.fa-circle-check.bg-color-5
                      p.mb-0 Fórmula: volumen utilizado / capacidad del vehículo x 100.
                    li.d-flex 
                      i.fas.fa-circle-check.bg-color-5
                      p.mb-0 Meta óptima: >90 %.
        

      .div(titulo="Por naturaleza del indicador")
        .titulo-sexto.color-acento-contenido
          h5 Tabla 2.
          span Tipos de indicadores según su naturaleza 
        .tabla-a.color-secundario.mb-5.tbl
          table
            caption Fuente: SENA, 2025.
            thead
              tr
                th.bg-color-1 Clasificación
                th.bg-color-1 Indicadores
                th.bg-color-1 Descripción
            tbody.bg-color-white
              tr
                td(rowspan="2") De eficiencia
                td Tiempo de ciclo de órdenes
                td 
                  ul.lista-ul--color.lista-ul--separador
                    li.d-flex
                      i.fas.fa-circle-check.bg-color-5
                      p.mb-0 Fórmula: fecha de entrega del pedido − fecha de recepción del pedido.
                    li.d-flex
                      i.fas.fa-circle-check.bg-color-5
                      p.mb-0 Mide el tiempo total desde que se genera una orden hasta que es entregada al cliente.
              tr.bg-color-9
                td Productividad por estación de trabajo
                td
                  ul.lista-ul--color.lista-ul--separador
                    li.d-flex
                      i.fas.fa-circle-check.bg-color-5
                      p.mb-0 Fórmula: unidades procesadas / hora / estación.
                    li.d-flex
                      i.fas.fa-circle-check.bg-color-5
                      p.mb-0 Evalúa la productividad y eficiencia de cada estación dentro del proceso logístico.
              tr
                td(rowspan="2") De calidad
                td Precisión de registros de inventario
                td
                  ul.lista-ul--color.lista-ul--separador
                    li.d-flex
                      i.fas.fa-circle-check.bg-color-5
                      p.mb-0 Fórmula: registros correctos / conteos totales × 100.
                    li.d-flex
                      i.fas.fa-circle-check.bg-color-5
                      p.mb-0 Compara registros de inventario con el inventario físico real.
              tr.bg-color-9
                td Cumplimiento de especificaciones de almacenaje
                td
                  ul.lista-ul--color.lista-ul--separador
                    li.d-flex
                      i.fas.fa-circle-check.bg-color-5
                      p.mb-0 Fórmula: elementos que cumplen especificaciones / total evaluados × 100.
                    li.d-flex
                      i.fas.fa-circle-check.bg-color-5
                      p.mb-0 % de productos en condiciones óptimas (temperatura y humedad).
              tr
                td(rowspan="2") De productividad
                td Horas hombre por unidad movida
                td
                  ul.lista-ul--color.lista-ul--separador
                    li.d-flex
                      i.fas.fa-circle-check.bg-color-5
                      p.mb-0 Fórmula: horas hombre invertidas / unidades movidas × 100.
                    li.d-flex
                      i.fas.fa-circle-check.bg-color-5
                      p.mb-0 Mide la eficiencia en actividades como picking, embalaje, carga y descarga.
              tr.bg-color-9
                td Rendimiento de equipos
                td
                  ul.lista-ul--color.lista-ul--separador
                    li.d-flex
                      i.fas.fa-circle-check.bg-color-5
                      p.mb-0 Fórmula: horas productivas / horas disponibles × 100.
                    li.d-flex
                      i.fas.fa-circle-check.bg-color-5
                      p.mb-0 Evalúa la eficiencia de maquinaria en almacenamiento, transporte interno, carga y descarga.
              tr
                td(rowspan="2") De seguridad
                td Tasa total de incidentes registrables
                td
                  ul.lista-ul--color.lista-ul--separador
                    li.d-flex
                      i.fas.fa-circle-check.bg-color-5
                      p.mb-0 Fórmula: N° incidentes × 200,000 / h trabajadas.
                    li.d-flex
                      i.fas.fa-circle-check.bg-color-5
                      p.mb-0 Refleja la frecuencia de lesiones y enfermedades laborales registrables.
              tr.bg-color-9
                td Reportes de cuasi accidentes
                td
                  ul.lista-ul--color.lista-ul--separador
                    li.d-flex
                      i.fas.fa-circle-check.bg-color-5
                      p.mb-0 Fórmula: N° cuasi incidentes x 1.000.000 / h trabajadas x 100.
                    li.d-flex
                      i.fas.fa-circle-check.bg-color-5
                      p.mb-0 Mide incidentes evitados, cultura de seguridad y reducción de riesgos laborales.

    .bg-color-10.tarjeta.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema2/5.png", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0 Actualmente, los indicadores de almacén incorporan nuevas categorías que responden a las exigencias de una gestión más integral. Entre ellos se destacan los de sostenibilidad, como las emisiones de CO₂ y el uso de energías renovables; los predictivos, que anticipan desabastecimientos mediante machine learning; y la analítica de personas, enfocada en medir la satisfacción y lealtad del talento humano. Estas tendencias fortalecen la toma de decisiones y mejoran el desempeño logístico.
    
    separador
    
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.2 Tipos de variables
            
    .bg-full-width.bg-fondo-3.mb-3
      .p-4.p-md-5
        p.mb-5 En la gestión de almacenes, las variables son elementos clave para medir, analizar y optimizar procesos. Identificar y clasificar correctamente estos factores permite diseñar estrategias de control más efectivas. A continuación, se presenta una clasificación detallada de los tipos de variables relevantes en la evaluación de operaciones logísticas.
      
        .row.mb-5
          .col-lg-3.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema2/6.png", data-aos="zoom-in")
          .col-lg-9
            .titulo-con-imagen.mb-5(data-aos="fade-right")
              .titulo-con-imagen__fondo
                img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
                h3.titulo-con-imagen__texto Según su naturaleza
            p(data-aos="fade-left")  Las variables, según su naturaleza, se clasifican en cualitativas y cuantitativas. Esta distinción permite identificar si los datos representan características no numéricas, como categorías o atributos, o si expresan valores numéricos que pueden ser medidos y ordenados. Esta clasificación es fundamental para elegir los métodos adecuados de análisis y representar correctamente la información:
        
        TabsC.color-primario
          .py-3.py-md-4(titulo="Cualitativas")
            .row.align-items-center.p-4
              .col-md-7.mb-4.mb-md-0
                p No se expresan numéricamente, sino mediante categorías o atributos:
                ul.lista-ul--color.lista-ul--separador.ms-3
                  li.d-flex
                    i.fas.fa-circle-check.bg-color-5
                    p.mb-0 <b>Nominal</b>: distingue categorías sin jerarquía, como la zona de almacenaje A, B o C.
                  li.d-flex
                    i.fas.fa-circle-check.bg-color-5
                    p.mb-0 <b>Ordinal</b>: establece un orden entre categorías, como los niveles de prioridad: alta, media o baja.
              .col-md-5
                figure
                  img(src='@/assets/curso/tema2/7.png', alt='Texto que describa la imagen')
          .py-3.py-md-4(titulo="Cuantitativas")
            .row.align-items-center.p-4
              .col-md-7.mb-4.mb-md-0
                p Se miden en valores numéricos y permiten operaciones matemáticas:
                ul.lista-ul--color.lista-ul--separador.ms-3
                  li.d-flex
                    i.fas.fa-circle-check.bg-color-5
                    p.mb-0 <b>Discreta</b>: representa valores enteros contables, como el número de paletas en un almacén.
                  li.d-flex
                    i.fas.fa-circle-check.bg-color-5
                    p.mb-0 <b>Continua</b>: puede tomar cualquier valor dentro de un rango, como el peso de la mercancía o el tiempo de <em>picking</em>.
              .col-md-5
                figure
                  img(src='@/assets/curso/tema2/8.png', alt='Texto que describa la imagen')

    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
        h3.titulo-con-imagen__texto Según su función en el análisis
    
    p.mb-5 Permite identificar el papel que cada variable desempeña en el estudio, ya sea como factor que se manipula, resultado que se mide o elemento que se mantiene constante para garantizar la validez del análisis.

    .bg-full-width.bg-fondo-1.mb-3
      .p-4.p-md-5
        .tarjeta--container.row.mb-5
          .col-md.tarjeta.bg-color-1.p-5
            .row.justify-content-center.mb-4
              .col-6
                figure
                  img(src='@/assets/curso/tema2/9.png', alt='Texto descriptivo 1')
            h2.text-center Independiente
            p.text-center Factor que se controla o varía para observar su efecto en la gestión del almacén, por ejemplo, el método de picking, layout o nivel de automatización.
        
          .col-md.tarjeta.bg-color-4.p-5
            .row.justify-content-center.mb-4
              .col-6
                figure
                  img(src='@/assets/curso/tema2/10.png', alt='Texto descriptivo 2')
            h2.text-center Dependiente
            p.text-center Resultado que se mide para evaluar el desempeño, como el tiempo de ciclo de almacenamiento o la tasa de errores en despachos.
        
          .col-md.tarjeta.bg-color-1.p-5
            .row.justify-content-center.mb-4
              .col-6
                figure
                  img(src='@/assets/curso/tema2/11.png', alt='Texto descriptivo 3')
            h2.text-center Interviniente
            p.text-center Variable que condiciona o modifica la relación entre independientes y dependientes, por ejemplo, la experiencia del operario, rotación de personal o variabilidad de la demanda.

        .titulo-con-imagen.mb-5(data-aos="fade-right")
          .titulo-con-imagen__fondo
            img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
            h3.titulo-con-imagen__texto Según su escala de medición
        
        p.mb-5 Se clasifican en niveles que determinan cómo se interpretan y procesan los datos, desde simples categorías sin orden hasta mediciones numéricas con cero absoluto que permiten cálculos completos.   

        .row
          .col-lg-3.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema2/12.png", data-aos="zoom-in")
          .col-lg-9
            AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta bg-color-1")
              div(titulo="Nominal")
                .row
                  .col-lg.mb-3.mb-lg-0
                    p.ms-5 Clasifica elementos sin un orden numérico, asignando categorías diferenciadas. 
                    ul.lista-ul--color.ms-5.mb-0
                      li.mb-0.d-flex
                        i.fas.fa-circle-check.bg-color-5
                        p.mb-0 <b>Ejemplo</b>: tipo de empaque (caja, bolsa o palet).
                  .col-lg-auto
                    figure
                      img(src="@/assets/curso/tema2/13.png", data-aos="zoom-in")
              div(titulo="Ordinal")
                .row
                  .col-lg.mb-3.mb-lg-0
                    p.ms-5 Clasifica elementos con un orden lógico, pero sin distancias numéricas precisas entre ellos. 
                    ul.lista-ul--color.ms-5.mb-0
                      li.mb-0.d-flex
                        i.fas.fa-circle-check.bg-color-5
                        p.mb-0 <b>Ejemplo</b>: nivel de satisfacción (1 a 5).
                  .col-lg-auto
                    figure
                      img(src="@/assets/curso/tema2/14.png", data-aos="zoom-in")
              div(titulo="Intervalo")
                .row
                  .col-lg.mb-3.mb-lg-0
                    p.ms-5 Utiliza intervalos iguales entre valores, pero sin un cero absoluto, lo que impide cálculos de proporciones.  
                    ul.lista-ul--color.ms-5.mb-0
                      li.mb-0.d-flex
                        i.fas.fa-circle-check.bg-color-5
                        p.mb-0 <b>Ejemplo</b>: temperatura en el almacén (20 °C frente a 25 °C).
                  .col-lg-auto
                    figure
                      img(src="@/assets/curso/tema2/15.png", data-aos="zoom-in")
              div(titulo="Razón")
                .row
                  .col-lg.mb-3.mb-lg-0
                    p.ms-5 Presenta intervalos iguales y un cero absoluto, permitiendo todas las operaciones matemáticas. 
                    ul.lista-ul--color.ms-5.mb-0
                      li.mb-0.d-flex
                        i.fas.fa-circle-check.bg-color-5
                        p.mb-0 <b>Ejemplo</b>: peso de la mercancía.
                  .col-lg-auto
                    figure
                      img(src="@/assets/curso/tema2/16.png", data-aos="zoom-in")
    
    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
        h3.titulo-con-imagen__texto Según su temporalidad
    
    p.mb-5 Se clasifican en función del momento y la etapa del proceso logístico en que se miden, lo que permite evaluar los recursos disponibles, el desarrollo de las operaciones y los resultados obtenidos. 

    .bg-full-width.bg-fondo-1.mb-3
      .p-4.p-md-5
        .bg-full-width.bg-fondo-5
          .px-4.px-md-5.pb-md-3
            .row.justify-content-center.mb-5.align-items-center
              .col-lg-8.mb-3.mb-lg-0.order-2
                SlyderF(columnas="col-12 col-lg-6")
                  .bg-color-white.p-4.h-100.box-shadow
                    img(src='@/assets/curso/tema2/18.png' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                    h4.text-center.mb-4.bg-color-11.p-3 De  entrada (<em>inputs</em>)
                    p.text-center Representan los recursos empleados en el almacén antes de iniciar las operaciones. 
                    p.text-center <b>Ejemplo</b>: horas de mano de obra y capacidad de almacenamiento en metros cúbicos.
                  .bg-color-white.p-4.h-100.box-shadow
                    img(src='@/assets/curso/tema2/19.png' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                    h4.text-center.mb-4.bg-color-11.p-3 De proceso
                    p.text-center Evalúan cómo se llevan a cabo las actividades logísticas durante la operación. 
                    p.text-center <b>Ejemplo</b>: tiempo de estancia y nivel de ocupación de pasillos.
                  .bg-color-white.p-4.h-100.box-shadow
                    img(src='@/assets/curso/tema2/20.png' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                    h4.text-center.mb-4.bg-color-11.p-3 De salida (<em>outputs</em>)
                    p.text-center Reflejan los resultados y el desempeño alcanzado por el almacén. 
                    p.text-center <b>Ejemplo</b>: órdenes despachadas por día y nivel de servicio.
        
              .col-lg-4.order-1.mb-3.mb-lg-0
                figure
                  img(src='@/assets/curso/tema2/17.png', alt='')
    
    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
        h3.titulo-con-imagen__texto Según su control
    
    .row.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/21.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        p(data-aos="fade-left") Se clasifican en aquellas que la gestión del almacén puede modificar directamente y en las que dependen de factores externos, lo que influye en la capacidad de adaptación y respuesta de las operaciones.

        .tarjeta--container.row
          .col-md.tarjeta.bg-color-1.p-4
            .row.justify-content-center.mb-4
              .col-6
                figure
                  img(src='@/assets/curso/tema2/22.png', alt='Texto descriptivo 1')
            h4.text-center Controlables
            p.text-center Son variables que la gestión del almacén puede ajustar para mejorar el desempeño. 
            p.text-center <b>Ejemplo</b>: distribución de zonas y políticas de reposición.
        
          .col-md.tarjeta.bg-color-4.p-4
            .row.justify-content-center.mb-4
              .col-6
                figure
                  img(src='@/assets/curso/tema2/22.png', alt='Texto descriptivo 2')
            h4.text-center No controlables
            p.text-center Son variables condicionadas por factores externos que no pueden modificarse internamente. 
            p.text-center <b>Ejemplo</b>: demanda estacional y restricciones legales como normas de seguridad.
    
    separador
    
    #t_2_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.3 Técnicas de cálculo
    
    .bg-full-width.bg-fondo-1.mb-3
      .p-4.p-md-5
        .bloque-texto-g.color-primario.bg-color-4.p-3.p-sm-4.p-md-5.mb-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema2/23.png')})`}"
          )(data-aos="zoom-in")
          .bloque-texto-g__texto.p-4
            p.mb-0 Las técnicas de cálculo son herramientas fundamentales en la gestión logística y de inventarios, ya que permiten medir y optimizar diferentes aspectos del rendimiento operativo en almacén. A continuación, se mencionan las principales técnicas utilizadas:
        
        .row
          .col-lg-4.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema2/24.png", data-aos="zoom-in")
          .col-lg-8
            TabsA.color-primario
              //- .tarjeta debe ir acompañado de una de una de estas clases => 
              //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
              //- estas clases tambien tienen un modificador --borde
              .tarjeta.color-acento-botones--borde.p-4.h-100(titulo="Porcentaje")
                h4 Porcentaje
                p Evalúa la proporción de éxito o error en un proceso, expresada en "%", facilitando comparaciones. 
                p <b>Ejemplo</b>: precisión en picking del 95 % significa que 5 de cada 100 pedidos tienen errores.

              .tarjeta.color-acento-botones--borde.p-4.h-100(titulo="Ratios")
                h4 Ratios
                p Relaciona dos variables clave para medir rendimiento o liquidez, expresados como “veces” o “proporciones”. 
                p <b>Ejemplo</b>: rotación de inventario de 5 indica que el stock se renueva 5 veces al año.
              .tarjeta.color-acento-botones--borde.p-4.h-100(titulo="Promedios")
                h4 Promedios
                p Analiza tendencias y estabilidad suavizando fluctuaciones, útil en gestión de inventarios y recursos. 
                p <b>Ejemplo</b>: tiempo promedio de preparación de pedidos de 2 horas indica posibles ineficiencias si aumenta.
              .tarjeta.color-acento-botones--borde.p-4.h-100(titulo="Índices")
                h4 Índices
                p Mide la relación entre capacidad y uso real de un recurso. 
                p <b>Ejemplo</b>: índice de ocupación de 75 % indica que el almacén usa tres cuartas partes de su capacidad.
    
    separador
    
    #t_2_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.4 Tipos de desviaciones o hallazgos
    
    p.mb-5 Las desviaciones en almacenes representan diferencias entre lo planificado y lo ejecutado, afectando la eficiencia, costos y servicio al cliente. Su identificación y clasificación son esenciales para implementar acciones correctivas y preventivas. A continuación, se mención los tipos de desviaciones o hallazgos:

    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
        h3.titulo-con-imagen__texto Por área de impacto
    
    .bg-full-width.bg-fondo-1.mb-3
      .p-4.p-md-5
        .row.justify-content-center.mb-5.align-items-center
          .col-lg-8.mb-3.mb-lg-0
            SlyderF(columnas="col-12 col-md-6 col-xl-4")
              .bg-color-white.p-4.h-100.box-shadow
                img(src='@/assets/curso/tema2/26.svg' alt='AvatarTop' , style="max-width: 80px").mx-auto.mb-3
                h4.text-center Operativas
                p.text-center.mb-0 Fallas en procesos logísticos básicos. 
                p.text-center.mb-0 <b>Ejemplo</b>: <em>picking</em> incorrecto o mercancía ubicada en zonas erradas.
              .bg-color-white.p-4.h-100.box-shadow
                img(src='@/assets/curso/tema2/27.svg' alt='AvatarTop' , style="max-width: 80px").mx-auto.mb-3
                h4.text-center De inventario
                p.text-center.mb-0 Diferencias entre registros físicos y de sistema.
                p.text-center.mb-0 <b>Ejemplo</b>: roturas de stock o mermas no justificadas.
              .bg-color-white.p-4.h-100.box-shadow
                img(src='@/assets/curso/tema2/28.svg' alt='AvatarTop' , style="max-width: 80px").mx-auto.mb-3
                h4.text-center De calidad
                p.text-center.mb-0 Afectan la integridad del producto o proceso. 
                p.text-center.mb-0 <b>Ejemplo</b>: daños por golpes, humedad o embalaje inadecuado.
              .bg-color-white.p-4.h-100.box-shadow
                img(src='@/assets/curso/tema2/29.svg' alt='AvatarTop' , style="max-width: 80px").mx-auto.mb-3
                h4.text-center De seguridad
                p.text-center.mb-0 Incumplimiento de normas de protección. 
                p.text-center.mb-0 <b>Ejemplo</b>: uso incorrecto de equipos o zonas de riesgo.
              .bg-color-white.p-4.h-100.box-shadow
                img(src='@/assets/curso/tema2/30.svg' alt='AvatarTop' , style="max-width: 80px").mx-auto.mb-3
                h4.text-center De costos
                p.text-center.mb-0 Sobrecostos en operaciones logísticas. 
                p.text-center.mb-0 <b>Ejemplo</b>: alquiler extra por mala gestión o desperdicio de materiales.
    
          .col-lg-4
            figure
              img(src='@/assets/curso/tema2/25.png', alt='')

        .titulo-con-imagen.mb-5(data-aos="fade-right")
          .titulo-con-imagen__fondo
            img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
            h3.titulo-con-imagen__texto Por origen de la desviación
        
        .row
          .col-lg-3.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema2/31.png", data-aos="zoom-in")
          .col-lg-9
            AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta bg-color-1")
              div(titulo="Humanas")
                div.ms-5
                  p.mb-0 Causadas por errores del personal. 
                  p.mb-0 <b>Ejemplos</b>: falta de capacitación (operarios que no siguen protocolos), negligencia (omisión de controles de calidad).
              div(titulo="Tecnológicas")
                div.ms-5
                  p.mb-0 Fallos en sistemas o equipos. 
                  p.mb-0 <b>Ejemplos</b>: fallas en automatización (robots de picking que no funcionan), códigos dañados (etiquetas RFID ilegibles).
              div(titulo="De proceso")
                div.ms-5
                  p.mb-0 Problemas en flujos de trabajo. 
                  p.mb-0 <b>Ejemplos</b>: cuellos de botella (zonas de picking congestionadas), falta de estandarización (métodos distintos para la misma tarea).
              div(titulo="Externas")
                div.ms-5
                  p.mb-0 Factores fuera del control del almacén. 
                  p.mb-0 <b>Ejemplos</b>: proveedores con retrasos, cambios en demanda no pronosticados.
    
    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
        h3.titulo-con-imagen__texto Por gravedad
    
    .tarjeta--container.row.mb-5
      .col-md.tarjeta.bg-color-1.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/tema2/9.png', alt='Texto descriptivo 1')
        h2.text-center Leves
        p.text-center.mb-0 Impacto mínimo, fácil corrección. 
        p.text-center.mb-0 <b>Ejemplo</b>: pequeño retraso en una orden no prioritaria.
    
      .col-md.tarjeta.bg-color-4.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/tema2/10.png', alt='Texto descriptivo 2')
        h2.text-center Moderadas
        p.text-center.mb-0 Afectan KPIs pero no detienen operaciones. 
        p.text-center.mb-0 <b>Ejemplo</b>: 5 % de errores en <em>picking</em> durante un turno.
    
      .col-md.tarjeta.bg-color-1.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/tema2/11.png', alt='Texto descriptivo 3')
        h2.text-center Criticas
        p.text-center.mb-0 Paralizan parcial o totalmente el almacén. 
        p.text-center.mb-0 <b>Ejemplo</b>: incendio en zona de almacenamiento.

    separador
    
    #t_2_5.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.5 Validación y estandarización
    
    .row.mb-5.align-items-center
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/32.png", data-aos="zoom-in")
      .col-lg-8
        p(data-aos="fade-left") En la gestión moderna de almacenes, la validación y estandarización son pilares fundamentales para garantizar:
        .row.mb-3
          .col-md-6.col-xl-3.mb-4.mb-xl-0
            //- .tarjeta-numerada debe ir acompañado de una de una de estas clases => 
            //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
            //- estas clases tambien tienen un modificador --borde
            .tarjeta-numerada.color-primario.p-4.h-100
              .tarjeta-numerada__numero
                .h2 01
              p.ms-3.mb-0.text-small Consistencia en los procesos.
          .col-md-6.col-xl-3.mb-4.mb-xl-0
            //- .tarjeta-numerada debe ir acompañado de una de una de estas clases => 
            //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
            //- estas clases tambien tienen un modificador --borde
            .tarjeta-numerada.color-secundario.p-4.h-100
              .tarjeta-numerada__numero
                .h2 02
              p.ms-3.mb-0.text-small Trazabilidad de las operaciones.
          .col-md-6.col-xl-3.mb-4.mb-xl-0
            //- .tarjeta-numerada debe ir acompañado de una de una de estas clases => 
            //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
            //- estas clases tambien tienen un modificador --borde
            .tarjeta-numerada.color-primario.p-4.h-100
              .tarjeta-numerada__numero
                .h2 03
              p.ms-3.mb-0.text-small Cumplimiento normativo.
          .col-md-6.col-xl-3.mb-4.mb-xl-0
            //- .tarjeta-numerada debe ir acompañado de una de una de estas clases => 
            //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
            //- estas clases tambien tienen un modificador --borde
            .tarjeta-numerada.color-secundario.p-4.h-100
              .tarjeta-numerada__numero
                .h2 04
              p.ms-3.mb-0.text-small Mejora continua de la productividad.

        .tarjeta.bg-color-1.mb-5
          .px-4.px-md-5.py-4
            .row.align-items-center
              .col-lg-auto
                img(src="@/assets/curso/tema2/5.png", style="max-width: 90px").mx-auto
              .col-lg
                p.mb-0 Estos procesos permiten transformar operaciones empíricas en sistemas confiables y repetibles, reduciendo variabilidad y errores. La validación es el proceso sistemático de verificar que los sistemas, equipos y procedimientos cumplen con los requisitos establecidos y producen resultados consistentes. Existen varios tipos de validación, que se mencionan a continuación:
    
    .row.justify-content-center.mb-5
      .col-xl-3.col-lg-6.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema2/33.png", alt="alt")
          .crd_hover_txt--body.bg-color-12
            h4.mb-3.text-center De  procesos
            p.mb-0 Verificación de que un proceso mantiene control bajo condiciones normales. 
            p.mb-0 <b>Ejemplo</b>: validación del proceso de picking automatizado.
      .col-xl-3.col-lg-6.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema2/34.png", alt="alt")
          .crd_hover_txt--body.bg-color-4
            h4.mb-3.text-center De sistemas
            p.mb-0 Comprobación de que sistemas informáticos funcionan según requerimientos.
            p.mb-0 <b>Ejemplo</b>: validación de integración WMS-ERP.
      .col-xl-3.col-lg-6.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema2/35.png", alt="alt")
          .crd_hover_txt--body.bg-color-12
            h4.mb-3.text-center De métodos
            p.mb-0 Confirmación de que metodologías producen resultados confiables. 
            p.mb-0 <b>Ejemplo</b>: validación de técnicas de conteo cíclico.
      .col-xl-3.col-lg-6.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema2/36.png", alt="alt")
          .crd_hover_txt--body.bg-color-4
            h4.mb-3.text-center De limpieza
            p.mb-0 Aseguramiento de que procedimientos de limpieza previenen contaminación cruzada
            p.mb-0 <b>Ejemplo</b>: validación en almacenes farmacéuticos.

        

    
  
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

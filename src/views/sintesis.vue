<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p A continuación, se describe una visión general sobre los aspectos clave de la “Evaluación de las operaciones logísticas de almacén”. Comienza con todo lo relacionado a la evaluación de las operaciones y el procedimiento que se lleva a cabo en almacén, mediante la implementación de diferentes métodos. Seguidamente, se menciona lo referente a los indicadores de desempeño, sus tipos, variables, técnicas de cálculo, desviaciones o hallazgos, y la validación y estandarización. Además, se explora todo lo referente al análisis de los resultados obtenidos en la evaluación, a través de metodologías estructuradas y técnicas. Al igual se hace referencia al informe de resultados, su estructura y técnicas de redacción y presentación de estos. Finalmente, se aborda lo referente a la mejora continua, sus acciones y estrategias.
    .row.justify-content-center.bg-color-2.tarjeta.p-5
      .col-lg-10.mb-5.bgs.brad
        figure
          img(src="@/assets/curso/sintesis.svg", alt="En la síntesis del componente formativo “Evaluación de las operaciones logísticas de almacén” se ofrece una visión general de la evaluación de las operaciones en almacén, los indicadores de desempeño, el análisis de los resultados y su informe correspondiente; y la implementación de mejora continua.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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

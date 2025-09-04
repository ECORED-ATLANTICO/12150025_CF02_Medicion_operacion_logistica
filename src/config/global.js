export default {
  global: {
    Name: 'Evaluación de las operaciones logísticas de almacén.',
    Description:
      'Este componente formativo aborda la evaluación de operaciones en almacén, incluyendo conceptos, procedimientos y métodos de evaluación, así como indicadores de desempeño, técnicas de cálculo y análisis de resultados. También cubre la estructuración de informes y estrategias de mejora continua, con el fin de optimizar procesos, identificar desviaciones y aumentar la eficiencia en la gestión logística.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Evaluación de operaciones en almacén',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Concepto',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Procedimiento',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Métodos de evaluación',
            hash: 't_1_3',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Indicadores de desempeño',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Tipos',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Tipos de variables',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Técnicas de cálculo ',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Tipos de desviaciones o hallazgos',
            hash: 't_2_4',
          },
          {
            numero: '2.5',
            titulo: 'Validación y estandarización',
            hash: 't_2_5',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Análisis de resultados',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Metodologías estructuradas',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Técnicas de análisis',
            hash: 't_3_2',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Informe de resultados',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Estructura',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Técnicas de redacción y presentación',
            hash: 't_4_2',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Mejora continua en almacén',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Concepto',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Acciones y estrategias',
            hash: 't_5_2',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Evaluación de operaciones en almacén.',
      referencia:
        'DEHA Consultores. (2021). Evaluación de almacenes. [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=hx-NfkPcd3c&t=40s',
    },
    {
      tema: 'Indicadores de desempeño.',
      referencia:
        'Logística para el mundo SENA Maicao. (2023). Indicadores de gestión de almacenamiento. [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=8tJVSBf3zdo',
    },
    {
      tema: 'Mejora continua en almacén.',
      referencia:
        'SGS Productivity. (2024). Lean Logistics Consum: La mejora continua aplicada en la logística [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=B7uTJeOVHkE',
    },
  ],
  glosario: [
    {
      termino: 'Auditorías internas',
      significado:
        'evaluaciones sistemáticas realizadas por el equipo de la empresa para verificar el cumplimiento de normas y estándares operativos.',
    },
    {
      termino: '<em>Benchmarking</em>',
      significado:
        'comparación con estándares de la industria o competidores para identificar brechas y mejoras.',
    },
    {
      termino: 'Cubicaje',
      significado:
        'medición de la utilización del espacio en vehículos o almacenes.',
    },
    {
      termino: 'Desviaciones operativas',
      significado:
        'diferencias entre los resultados esperados y los obtenidos en las actividades del almacén.',
    },
    {
      termino: 'Ergonomía',
      significado:
        ' estudio de condiciones laborales para optimizar comodidad y eficiencia del personal.',
    },
    {
      termino: 'Estandarización',
      significado:
        'documentación y armonización de métodos de trabajo para garantizar consistencia y reducir errores.',
    },
    {
      termino: 'Hallazgos ',
      significado:
        'desviaciones identificadas entre lo planificado y lo ejecutado en operaciones logísticas.',
    },
    {
      termino: 'Indicadores',
      significado: 'métricas clave de desempeño.',
    },
    {
      termino: 'IoT',
      significado:
        'uso de dispositivos conectados para monitoreo automatizado en almacenes.',
    },
    {
      termino: 'Justo a tiempo (JIT)',
      significado:
        'estrategia que recibe productos solo cuando son necesarios, reduciendo inventarios.',
    },
    {
      termino: 'Kanban',
      significado:
        'sistema visual de gestión de tareas mediante tarjetas o tableros.',
    },
    {
      termino: '<em>Layout</em>',
      significado:
        'diseño físico de la distribución de espacios en un almacén.',
    },
    {
      termino: '<em>Lead time</em>',
      significado:
        'tiempo total entre la solicitud de un pedido y su entrega al cliente.',
    },
    {
      termino: '<em>Machine learning</em>',
      significado: 'tecnología predictiva aplicada a logística.',
    },
    {
      termino: 'SKU <em>(Stock Keeping Unit)</em>',
      significado: 'código único que identifica cada producto en inventario.',
    },
    {
      termino: 'Tasa de rotación',
      significado:
        'medida que indica cuántas veces el inventario se renueva en un período determinado.',
    },
    {
      termino: 'Validación',
      significado:
        'proceso de verificación que asegura que sistemas y procedimientos cumplen con los requisitos establecidos.',
    },
  ],
  referencias: [
    {
      referencia:
        'Algevasa Logistics. (2025). La planificación en el almacén logístico. ',
      link:
        'https://www.algevasa.com/la-planificacion-en-el-almacen-logistico/',
    },
    {
      referencia:
        'Aula Centro de Formación. (2022). Gestión de almacén y logística. ',
      link:
        'https://dl.dropboxusercontent.com/scl/fi/ucro9rrtkrv682y7s1qt6/Curso-Gesti-n-de-Almanc-n-y-Log-stica-Aula-Centro-Formaci-n.pdf?rlkey=azxypu2r27s5m21odlj9ymwys&dl=0',
    },
    {
      referencia:
        'Mecalux. (2022). 9 indicadores de bodega para medir la gestión logística. ',
      link: 'https://www.mecalux.com.co/blog/indicadores-bodega',
    },
    {
      referencia:
        'Mecalux. (2021). La mejora continua y su aplicación en logística. ',
      link: 'https://www.mecalux.com.co/blog/mejora-continua',
    },
    {
      referencia:
        'Polypal. (2021). Controla estos indicadores y mejora la gestión logística de tu almacén. ',
      link:
        'https://www.polypal.com/blog/controla-estos-indicadores-y-mejora-la-gestion-logistica-de-tu-almacen/',
    },
    {
      referencia:
        'Servicio Nacional de Aprendizaje (SENA). (2021). Coordinación de procesos logísticos [Curso virtual]. Plataforma Zajuna. ',
      link: 'https://zajuna.sena.edu.co/zajuna/course/view.php?id=32450',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos ',
          cargo:
            'Responsable del Ecosistema de Recursos Educativos Digitales (RED)',
          centro: 'Dirección General',
        },
        {
          nombre: 'Miguel de Jesús Paredes Maestre',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Yezid Arturo Choperena Guerrero',
          cargo: 'Experto temático',
          centro: 'Centro de Comercio y Servicios -Regional Atlántico',
        },
        {
          nombre: 'Heydy Cristina González García',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro de Comercio y Servicios -Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Carmen Alicia Martínez Torres',
          cargo: 'Diseñador <em>web</em>',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Carlos Andrés Díaz Pinto',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Alexander Rafael Acosta Bedoya',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'María Fernanda Morales Angulo',
          cargo: 'Evaluador de contenidos inclusivos y accesibles ',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Luz Karime Amaya Cabra',
          cargo: 'Evaluador de contenidos inclusivos y accesibles ',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Jairo Luis Valencia Ebratt',
          cargo: 'Validador y vinculador de recursos digitales ',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Jonathan Adié Villafañe',
          cargo: 'Validador y vinculador de recursos digitales ',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}

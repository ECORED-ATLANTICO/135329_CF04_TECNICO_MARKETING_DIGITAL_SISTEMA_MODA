export default {
  global: {
    Name: 'Servicio y atención al cliente',
    Description:
      'Este componente busca realizar un recorrido por los fundamentos básicos del servicio y atención al cliente, enfocados en el sector moda, con el objetivo de desarrollar en los aprendices las competencias necesarias para estructurar los sistemas de medición continua de la experiencia del cliente, y así liderar decisiones, acciones y estrategias que maximicen la atención y satisfacción del cliente.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.png'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-4.png'),
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
        titulo: 'Fundamentos del servicio al cliente',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Definición de cliente',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Tipos de cliente',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Tipos y técnicas de servicio al cliente',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Calidad y cultura de servicio',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo:
          'Tipos de canales para el servicio al cliente en redes sociales',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Nuevas tendencias en servicio al cliente en redes sociales',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Proceso de servicio al cliente en redes sociales',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Etiqueta empresarial',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema7',
        numero: '7',
        titulo:
          'Normativa legal vigente y ética en el manejo de datos (protección de datos)',
        desarrolloContenidos: true,
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
      /*{
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },*/
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/124108_CF04_DU.pdf',
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
      tema: '',
      referencia: '',
      tipo: '',
      link: '',
    },
  ],
  glosario: [
    {
      termino: 'Cadena de satisfacción',
      significado:
        'medio que permite medir las capacidades de sus colaboradores y el sentido de pertenencia con la organización, para así poder brindar a los clientes lealtad a la marca.',
    },
    {
      termino: 'Cliente',
      significado:
        'persona que adquiere un producto o servicio con la finalidad de suplir una necesidad.',
    },
    {
      termino: 'Competitividad',
      significado:
        'capacidad de un negocio o empresa para crear estrategias que lo ayuden a adquirir una posición vanguardista en el mercado.',
    },
    {
      termino: 'Corporativo',
      significado: 'perteneciente o relativo a una corporación.',
    },
    {
      termino: 'Cultura organizacional',
      significado:
        'conjunto de normas que se tienen en una organización en todas sus áreas, basadas en el respeto, los valores, la ética, la integridad, las actitudes y los hábitos, todo esto genera una persona íntegra y un buen ambiente laboral.',
    },
    {
      termino: 'Estándares',
      significado:
        'permiten controlar las operaciones o procesos que se realizan en la organización, teniendo el conocimiento de cada una de las personas que trabajan en ella y de sus actividades.',
    },
    {
      termino: 'Garantía de la calidad',
      significado:
        'comprende todas aquellas actividades de una empresa u organismo para conseguir y demostrar la calidad de esta.',
    },
    {
      termino: 'Quejas',
      significado:
        'son la forma que tiene el cliente de mostrar su inconformidad con un servicio o producto que esté adquiriendo.',
    },
  ],
  referencias: [
    {
      referencia:
        'Asamblea Nacional Constituyente. (1991). <em>Constitución Política de Colombia, artículo 15.</em> SUIN-Juriscol. ',
      link: 'https://www.suin-juriscol.gov.co/viewDocument.asp?id=1687988',
    },
    {
      referencia:
        'Congreso de Colombia. (2008, 31 de diciembre). <em>Ley Estatutaria 1266 de 2008. Por la cual se dictan las disposiciones generales del hábeas data y se regula el manejo de la información contenida en bases de datos personales.</em> SUIN-Juriscol. ',
      link: 'https://www.suin-juriscol.gov.co/viewDocument.asp?id=1676616',
    },
    {
      referencia:
        'Congreso de Colombia. (2012, 17 de octubre). <em>Ley 1581 de 2012. Por la cual se dictan disposiciones generales para la protección de datos personales.</em> SUIN-Juriscol. ',
      link: 'https://www.suin-juriscol.gov.co/viewDocument.asp?id=1684507',
    },
    {
      referencia:
        'Congreso de Colombia. (2021, 29 de octubre). <em>Ley 2157 de 2021. Por medio de la cual se modifica y adiciona la Ley Estatutaria 1266 de 2008.</em> SUIN-Juriscol. ',
      link: 'https://www.suin-juriscol.gov.co/viewDocument.asp?id=30042420',
    },
    {
      referencia:
        'Congreso de Colombia. (2023, 10 de julio). <em>Ley 2300 de 2023. Por medio de la cual se establecen medidas que protejan el derecho a la intimidad de los consumidores.</em> SUIN-Juriscol. ',
      link: 'https://www.suin-juriscol.gov.co/viewDocument.asp?id=30046853',
    },
    {
      referencia:
        'Deming, W. E. (2009). <em>Calidad, productividad y competitividad: la salida de la crisis</em>. Ediciones Diaz de Santos.',
    },
    {
      referencia:
        'Ley 1266 de 2008. Por la cual se dictan las disposiciones generales del hábeas data y se regula el manejo de la información contenida en bases de datos personales, en especial la financiera, crediticia, comercial, de servicios y la proveniente de terceros países y se dictan otras disposiciones. Diciembre 31 de 2008.',
    },
    {
      referencia:
        'Maciá, F., y Gosende, J. (2011). <em>Marketing con redes sociales</em>. Anaya Multimedia.',
    },
    {
      referencia:
        'Macone, C. F. (2017). <em>Programa para el mejoramiento de la calidad de atención al usuario en el Laboratorio de la Clínica DR. A. L. Briceño Rossi</em>. [Trabajo especial de grado, Universidad Católica Andrés Bello]. Repositorio Institucional UCAB.',
      link:
        'https://biblioteca2.ucab.edu.ve/anexos/biblioteca/marc/texto/AAU7630',
    },
    {
      referencia:
        'Ministerio de Comercio, Industria y Turismo. (2013, 27 de junio). Decreto 1377 de 2013. Por el cual se reglamenta parcialmente la Ley 1581 de 2012 [Compilado en el Decreto 1074 de 2015]. SUIN-Juriscol.',
      link: 'https://www.suin-juriscol.gov.co/viewDocument.asp?id=1276081',
    },
    {
      referencia:
        'Ministerio de Comercio, Industria y Turismo. (2015, 26 de mayo). Decreto 1074 de 2015. Por medio del cual se expide el Decreto Único Reglamentario del Sector Comercio, Industria y Turismo. SUIN-Juriscol.',
      link: 'https://www.suin-juriscol.gov.co/viewDocument.asp?id=30019935',
    },
    {
      referencia:
        'Montoya Agudelo, C. A., y Boyero Saavedra, M. R. (2013). <em>El CRM como herramienta para el servicio al cliente en la organización. Revista Científica Visión de Futuro</em>, 17(1), 130-151.',
      link: 'https://www.redalyc.org/articulo.oa?id=357935480005',
    },
    {
      referencia:
        'Mora Contreras, C. E. (2011). <em>La calidad del servicio y la satisfacción del consumidor. Revista Brasileira de Marketing,</em> 10(2), 146-162.',
      link: 'https://doi.org/10.5585/remark.v10i2.2212',
    },
    {
      referencia:
        'Pérez Torres, V. C. (2016). Calidad total en la atención al cliente: Pautas para garantizar la excelencia en el servicio. Ideaspropias Editorial. ',
      link: '',
    },
    {
      referencia:
        'Pincay Moreno, Y. M., y Parra Ferié, C. (2020). <em>Gestión de la calidad en el servicio al cliente de las PYMES comercializadoras: Una mirada en Ecuador. Dominio de las Ciencias,</em> 6(3), 1118-1142.',
      link:
        'https://www.dominiodelasciencias.com/ojs/index.php/es/article/view/1341',
    },
    {
      referencia:
        'Rodríguez, J. (2021). <em>La etiqueta empresarial como estrategia para la atención al cliente.</em> Repositorio de la Universidad de Panamá.',
      link: 'https://up-rid.up.ac.pa/8355/1/jiomar_rodriguez.pdf',
    },
    {
      referencia:
        'Thompson, I. (2009). <em>Definición de cliente.</em> Promonegocios.net',
      link: 'https://www.promonegocios.net/clientes/cliente-definicion.html',
    },
    {
      referencia:
        'Vera, J., y Trujillo, A. (2013). <em>Factores relevantes de calidad en el servicio en el sector de concreto en el mercado de clientes pequeños y de hogar.</em> Panorama Socioeconómico, 31(46), 14-28.',
      link: 'https://www.redalyc.org/articulo.oa?id=39929212003',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Profesional G06. Responsable Ecosistema Virtual de Recursos Educativos Digitales',
          centro: 'Centro Agroturístico - Regional Santander',
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
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Asesor metodológico y pedagógico',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Maria Camila Álvarez',
          cargo: 'Contratista diseño curricular',
          centro:
            'Centro de Formación en Diseño, Confección y Moda - Regional Antioquia',
        },
        {
          nombre: 'Liliana Ceballos',
          cargo: 'Contratista diseño curricular',
          centro:
            'Centro de Formación en Diseño, Confección y Moda - Regional Antioquia',
        },
        {
          nombre: 'Cristian Metaute Medina',
          cargo: 'Diseñador instruccional',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Andrés Felipe Herrera Roldan',
          cargo: 'Diseñador web',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Carlos Andrés Diaz Pinto',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Nelson Iván Vera Briceño',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Zuleidy María Ruíz Torres',
          cargo: 'Producción audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Wilson Andrés Arenales Cáceres',
          cargo: 'Producción audiovisual',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Gilberto Junior Rodríguez Rodríguez',
          cargo: 'Producción audiovisual',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Carlos Eduardo Garavito Parada',
          cargo: 'Producción audiovisual',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Luz Karime Amaya Cabra',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Laura Daniela Burgos Rueda',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Jonathan Adié Villafañe',
          cargo: 'Validador y vinculador de recursos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Karine Isabel Ospino Fritz',
          cargo: 'Validador y vinculador de recursos digitales',
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

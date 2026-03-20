export default {
  global: {
    Name:
      'Cultivo de palma de aceite: mantenimiento del cultivo y cosecha del fruto.',
    Description:
      'En este componente formativo el aprendiz conocerá cómo realizar control de malezas, manejo integrado de plagas y enfermedades, nutrición, riego y poda, así como los criterios de madurez, frecuencia de cosecha, herramientas, pronósticos de producción y sistemas de transporte. Además, incluyen descripciones de plagas, enfermedades y prácticas para garantizar productividad, calidad del fruto y sostenibilidad del cultivo.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
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
        titulo: 'Mantenimiento del Cultivo de Palma de Aceite',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Control de malezas',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Manejo integrado de plagas y enfermedades',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Manejo nutricional del cultivo',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Manejo del agua en el lote',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Podas',
            hash: 't_1_5',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Cosecha del Fruto de Palma de Aceite',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Proceso de cosecha',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Estado de madurez del racimo',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Pronósticos de producción',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Frecuencia de cosecha',
            hash: 't_2_4',
          },
          {
            numero: '2.5',
            titulo: 'Herramientas de cosecha',
            hash: 't_2_5',
          },
          {
            numero: '2.6',
            titulo: 'Procedimiento de cosecha',
            hash: 't_2_6',
          },
          {
            numero: '2.7',
            titulo: 'Control de calidad del proceso',
            hash: 't_2_7',
          },
          {
            numero: '2.8',
            titulo: 'Recolección y transporte',
            hash: 't_2_8',
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
      tema: '',
      referencia: '',
      tipo: 'Sitio web',
      link: '',
    },
  ],
  glosario: [
    {
      termino: 'Aceite de palma',
      significado:
        'Producto obtenido del fruto de la palma de aceite, utilizado en la industria alimentaria, cosmética y energética.',
    },
    {
      termino: 'Anillo rojo',
      significado:
        'Enfermedad causada por el nemátodo Bursaphelenchus cocophilus, transmitida por el picudo negro.',
    },
    {
      termino: 'Arvenses (malezas)',
      significado:
        'Plantas que crecen de forma espontánea en el cultivo y compiten por agua, luz y nutrientes.',
    },
    {
      termino: 'Baculovirus',
      significado:
        'Agente de control biológico utilizado para reducir poblaciones de insectos plaga.',
    },
    {
      termino: 'Cincel',
      significado:
        'Herramienta utilizada en la cosecha de palmas jóvenes para cortar el pedúnculo del racimo.',
    },
    {
      termino: 'Chuza',
      significado:
        'Herramienta de cosecha empleada en palmas de mediana altura, adaptada a tubos largos.',
    },
    {
      termino: 'Clorosis',
      significado:
        'Amarillamiento de las hojas asociado a deficiencias nutricionales o daños por plagas.',
    },
    {
      termino: 'Cogollo',
      significado:
        'Parte central de crecimiento de la palma cuya afectación compromete su desarrollo.',
    },
    {
      termino: 'Control de calidad de la cosecha',
      significado:
        'Acciones destinadas a garantizar que los racimos sean cosechados en estado óptimo.',
    },
    {
      termino: 'Control de malezas',
      significado:
        'Prácticas manuales, mecánicas, culturales o químicas para reducir la competencia vegetal.',
    },
    {
      termino: 'Cosecha',
      significado:
        'Etapa final del proceso productivo que consiste en el corte, recolección y transporte de racimos.',
    },
    {
      termino: 'Cuchillo malayo',
      significado:
        'Herramienta curva utilizada para la cosecha de racimos en palmas de gran altura.',
    },
    {
      termino: 'Deficiencia nutricional',
      significado:
        'Insuficiencia de nutrientes esenciales que afecta el crecimiento y productividad.',
    },
    {
      termino: 'Drenaje',
      significado:
        'Sistema que permite evacuar el exceso de agua del suelo para evitar estrés hídrico.',
    },
    {
      termino: 'Estado de madurez del racimo',
      significado:
        'Condición fisiológica del fruto que indica el momento adecuado para la cosecha.',
    },
    {
      termino: 'Fertilización',
      significado:
        'Aplicación de nutrientes al suelo o planta para suplir requerimientos nutricionales.',
    },
    {
      termino: 'Frecuencia de cosecha',
      significado:
        'Intervalo de tiempo entre cosechas determinado por edad, material vegetal y época del año.',
    },
    {
      termino: 'Gusano de la palma',
      significado:
        'Plaga defoliadora que reduce la capacidad fotosintética de la palma.',
    },
    {
      termino: 'Interlíneas',
      significado:
        'Espacios entre hileras de palmas donde se establecen coberturas o labores culturales.',
    },
    {
      termino: 'Manejo del agua',
      significado:
        'Prácticas de riego y drenaje para mantener un balance hídrico adecuado.',
    },
    {
      termino: 'Manejo integrado de plagas y enfermedades (MIPE)',
      significado:
        'Estrategia que combina acciones preventivas, monitoreo y control sostenible.',
    },
    {
      termino: 'Malezas gramíneas',
      significado:
        'Arvenses de rápido crecimiento que afectan principalmente palmas jóvenes.',
    },
    {
      termino: 'Marchitez letal',
      significado:
        'Enfermedad que provoca secamiento progresivo, necrosis y caída prematura de frutos.',
    },
    {
      termino: 'Monitoreo del cultivo',
      significado:
        'Inspección periódica del lote para detectar plagas, enfermedades y deficiencias.',
    },
    {
      termino: 'Nutrientes esenciales',
      significado:
        'Elementos químicos necesarios para el crecimiento y desarrollo de la palma.',
    },
    {
      termino: 'Poda',
      significado:
        'Eliminación de hojas y estructuras no funcionales para mejorar la sanidad.',
    },
    {
      termino: 'Pronóstico de producción',
      significado:
        'Estimación de la producción futura del cultivo expresada en kilogramos o toneladas.',
    },
    {
      termino: 'Racimo',
      significado:
        'Conjunto de frutos producidos por la palma cuya madurez determina la cosecha.',
    },
    {
      termino: 'Recolección y transporte',
      significado:
        'Actividades posteriores al corte del racimo para su traslado a la planta de beneficio.',
    },
    {
      termino: 'Sostenibilidad',
      significado:
        'Enfoque productivo que integra criterios ambientales, sociales y económicos.',
    },
  ],
  referencias: [
    {
      referencia:
        'Bustillo, A. (2014). Manejo de insectos plagas de la palma de aceite, con énfasis en control biológico y sus relaciones con el cambio climático. Bogotá.',
      link:
        'https://repositorio.fedepalma.org/bitstream/handle/123456789/107659/Guia%20enfermedades%20y%20plagas%2022.pdf?sequence=11',
    },
    {
      referencia:
        'CENIPALMA, SENA, SAC y FONADE. (2002). Selección y descarte de plantas anormales de palma de aceite en viveros. Bogotá: Editorial Ápice.',
      link: 'https://repositorio.fedepalma.org/handle/123456789/84193',
    },
    {
      referencia:
        'CIRAD. (2008). Germinated oil palm seed: Recommendations for prenursery and nursery management. Montferrier-sur-Lez, Francia.',
      link:
        'https://www.palmelit.com/en/content/download/4353/32854/version/4/file/Booklet-of-recommandations-for-prenursery-and-nursery-management-oil-palm-seeds-CIRAD.pdf',
    },
    {
      referencia:
        'Grupo Jaremar. (2016). Manual de Buenas Prácticas Agrícolas para la Producción Sostenible de la Palma Aceitera por Pequeños Productores. Honduras.',
      link:
        'https://fhia.org.hn/wp-content/uploads/manual_buenas_practicas.pdf',
    },
    {
      referencia:
        'Instituto Colombiano Agropecuario (ICA). (2014). Resolución 4170 de 2014: Medidas fitosanitarias para el manejo y control sanitario en el cultivo de palma de aceite en Colombia.',
      link: '',
    },
    {
      referencia:
        'Instituto Colombiano Agropecuario (ICA). (s. f.). Normatividad fitosanitaria vigente para el sector agrícola colombiano.',
      link: 'https://www.ica.gov.co',
    },
    {
      referencia:
        'Instituto Colombiano Agropecuario (ICA). (s. f.). Registro y uso responsable de plaguicidas de uso agrícola en Colombia.',
      link: 'https://www.ica.gov.co',
    },
    {
      referencia:
        'Instituto Agropecuario Colombiano ICA. (2011). Manejo del picudo - Rhynchophorus palmarum L. (Coleoptera: Curculionidae). Bogotá.',
      link:
        'https://www.ica.gov.co/getattachment/19e016c0-0d14-4412-af12-03eecfe398f2/Manejo-del-picudo--Rhynchophorus-palmarum-L--%28Cole.aspx',
    },
    {
      referencia:
        'Instituto Nacional de Investigaciones Agropecuarias – INIAP. (2017). Guía para facilitar el aprendizaje en el manejo integrado del cultivo de Palma aceitera. Santo Domingo, Ecuador.',
      link: 'https://repositorio.iniap.gob.ec/handle/41000/4774',
    },
    {
      referencia:
        'Narváez, J., Chilito, L., & Bastidas, S. (1996). Determinación de la madurez óptima de cosecha para la palma de aceite en la región de Tumaco, Nariño.',
      link: 'https://repositorio.fedepalma.org/handle/123456789/143664',
    },
    {
      referencia:
        'Ortíz, R. & Fernández, O. (2000). Cultivo de la palma aceitera. San José: Editorial Universidad Estatal a Distancia.',
      link:
        'https://books.google.com.co/books?id=xZkO8yiPgf0C&printsec=frontcover&source=gbs_ge_summary_r&cad=0#v=onepage&q&f=false',
    },
    {
      referencia:
        'Prada, F., & Romero, M. (2012). Muestreo y análisis de racimos en el cultivo de palma de aceite. Tecnologías para la agricultura de la palma de aceite: guía para facilitadores. Bogotá, Colombia.',
      link: 'https://repositorio.fedepalma.org/handle/123456789/107697',
    },
    {
      referencia:
        'Rodríguez T., D. K. (2025, junio 17). Producción de aceite de palma en Colombia crece 10% entre enero y mayo de 2025. Portafolio.',
      link:
        'https://www.portafolio.co/economia/agro/produccion-de-aceite-de-palma-en-colombia-crece-10-a-mayo-de-2025-633174',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Johanna Gómez',
          cargo: 'Líder del Ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Olga Constanza Bermúdez',
          cargo: 'Responsable de Línea de Producción Huila',
          centro: 'Dirección General',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Andrea Patiño Villarraga',
          cargo: 'Experta temática',
          centro:
            'Centro de Gestión y Desarrollo Sostenible Surcolombiano – Regional Huila',
        },
        {
          nombre: 'Paula Marcela Vidal Quintero',
          cargo: 'Evaluadora instruccional',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Juan José Calderón Gutierrez',
          cargo: 'Diseñador de contenidos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Henry Alvarez Astudillo',
          cargo: 'Desarrollador fullstack',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Alejandro Delgado Acosta',
          cargo: 'Intérprete lenguaje de señas',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Cristhian Giovanni Gordillo Segura',
          cargo: 'Intérprete lenguaje de señas',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Juan Pablo Rojas Polania',
          cargo: 'Animador y productor multimedia',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Carlos Eduardo Garavito Parada',
          cargo: 'Animador y productor multimedia',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Maria Carolina Tamayo Lopez',
          cargo: 'Locución',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'German Acosta Ramos',
          cargo: 'Locución',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Fabio Armando Ortíz Reyes',
          cargo: 'Locución',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Javier Ricardo Ortiz Puentes',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Aixa Natalia Sendoya Fernández',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Anyerson Wilfredo Pizo Ossa',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
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

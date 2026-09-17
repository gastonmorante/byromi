export const CATEGORIES = [
  "Todos",
  "Paquetes Semanales",
  "Platos Fuertes & Guisados",
  "Pastas & Tradición Italiana",
  "Del Mar",
  "Entradas & Ensaladas",
  "Postres Artesanales"
];

export const GUARNICIONES = [
  { id: "pure-papa", name: "Puré de Papa Casero (Textura tersa y sedosa con mantequilla y crema fresca)", price: 0 },
  { id: "arroz-blanco", name: "Arroz Blanco al Vapor (Grano largo suave, perfecto para salsas y caldillos)", price: 0 },
  { id: "arroz-elote", name: "Arroz con Elote Tierno (Cocinado con mantequilla y tiernos granos de maíz dulce)", price: 0 },
  { id: "arroz-primavera", name: "Arroz Primavera Campirano (Arroz rojo tradicional con cubitos de zanahoria y chícharos)", price: 0 },
  { id: "verduras-salteadas", name: "Verduras Salteadas de Temporada (Mezcla de vegetales salteados al sartén con aceite de oliva)", price: 0 },
  { id: "mix-verde", name: "Mix Verde Fresco (Hojas tiernas mixtas aliñadas con vinagreta fresca balsámica)", price: 0 }
];

export const PRODUCTS = [
  // ==========================================
  // 1. PAQUETES SEMANALES PARA CONGELADOR
  // ==========================================
  {
    id: "pack-semana-ligera",
    name: "Pack 'Semana Ligera & Sin Prisas'",
    category: "Paquetes Semanales",
    tagline: "5 comidas completas listas en 7 min • Individual / Ejecutivo",
    description:
      "El alivio de llegar a casa y tener comida de verdad en minutos. Incluye 5 guisados individuales empacados al vacío con su guarnición: Lomo a la Coca-Cola Glaseada con Puré de Papa, Tinga Casera con Arroz con Elote, Penne al Pomodoro rústico, Filete en Salsa Verde de Tomate con Verduras Salteadas y Pastel de Papa y Picadillo Horneado. ¡Incluye de regalo una porción de Pan de Elote Tierno!",
    basePrice: 650,
    rating: 5.0,
    reviewsCount: 42,
    image: "/images/pack_congelados.jpg",
    isBestSeller: true,
    isPopular: true,
    prepTime: "7 - 10 min al baño maría",
    tags: ["Ahorro", "Para la Semana", "Empacado al Vacío", "Listo para Calentar"],
    sizeTitle: "Formato de Entrega",
    sizes: [
      { id: "pack-completo", name: "Paquete Completo (5 comidas + postre sorpresa)", price: 650, desc: "A solo $130 por comida completa." }
    ]
  },
  {
    id: "pack-complices-casa",
    name: "Pack 'Cómplices en Casa' (Dúo / Parejas)",
    category: "Paquetes Semanales",
    tagline: "10 porciones (5 comidas para 2) con guarnición y postre",
    description:
      "Cenen como en restaurante sin lavar sartenes a las 9 de la noche. 5 comidas dobles listas para regenerar: Lomo al Vino Tinto Especiado (2 pax), Lasaña Boloñesa Tradicional gratinada (2 pax), Fajitas de Pollo con Pimientos (2 pax), Adobo de Puerco en Chiles Secos (2 pax) y Canelones de Espinaca a la Crema (2 pax). Incluye 2 porciones de Pay Helado de Limón de regalo.",
    basePrice: 1250,
    rating: 4.9,
    reviewsCount: 38,
    image: "/images/cazuela_romi.jpg",
    isPopular: true,
    prepTime: "7 - 10 min",
    tags: ["Para Parejas", "Ahorro de Tiempo", "Cenas de Calidad"],
    sizeTitle: "Formato de Entrega",
    sizes: [
      { id: "pack-duo", name: "Paquete Dúo Completo (10 porciones)", price: 1250, desc: "$125 por porción por persona." }
    ]
  },
  {
    id: "pack-hogar-feliz",
    name: "Pack 'Hogar Feliz & Consentido' (Familiar 4 Pax)",
    category: "Paquetes Semanales",
    tagline: "Guisados en formato de 1 Kg + Guarniciones para toda la familia",
    description:
      "Nutrición real, sabor de hogar y paz mental para toda la semana. Rinde 16 platos: 1 Kg de Pastel de Papa y Picadillo, 1 Kg de Tinga Casera + 500g Arroz Primavera, 1 Bandeja de Lasaña Boloñesa Familiar y 1 Kg de Lomo Horneado a la Piña + 500g Puré de Papa. Incluye 1 Flan Tradicional Casero Familiar de cortesía.",
    basePrice: 1890,
    rating: 5.0,
    reviewsCount: 57,
    image: "/images/mole_poblano.jpg",
    isBestSeller: true,
    prepTime: "Listo para calentar",
    tags: ["Familiar", "Rinde 16 Platos", "Favorito de Mamás", "Nutrición Real"],
    sizeTitle: "Formato Familiar",
    sizes: [
      { id: "pack-familiar", name: "Paquete Familiar Completo (4 Kg guisados + guarniciones + flan)", price: 1890, desc: "Solo $118 por plato individual." }
    ]
  },
  {
    id: "pack-sabor-costero",
    name: "Pack 'Sabor Costero & Balance'",
    category: "Paquetes Semanales",
    tagline: "5 comidas ligeras y del mar con proteína de alta calidad",
    description:
      "Frescura y ligereza ideal para el clima de Playa del Carmen. Incluye: Salmón Glaseado al Teriyaki con verduras, Lomo de Atún Sellado con aguacate y almendras, Filete de Pescado a las Finas Hierbas con mix verde, Filete en Salsa Verde de Tomate y Lasaña de Berenjena al Horno.",
    basePrice: 850,
    rating: 4.9,
    reviewsCount: 29,
    image: "/images/lomo_atun.jpg",
    prepTime: "7 - 10 min",
    tags: ["Pescados & Mariscos", "Saludable", "Proteína Limpia"],
    sizeTitle: "Formato Individual",
    sizes: [
      { id: "pack-mar", name: "Paquete Balance Marino (5 comidas del mar)", price: 850, desc: "Nutrición fresca y balanceada." }
    ]
  },

  // ==========================================
  // 2. PLATOS PRINCIPALES & TRADICIÓN CULINARIA (Página 3 PDF)
  // ==========================================
  {
    id: "lomo-coca-cola",
    name: "Lomo a la Coca-Cola Glaseada",
    category: "Platos Fuertes & Guisados",
    tagline: "Receta clásica casera con salsa brillante, notas especiadas y carne tierna",
    description:
      "El consentido de la familia. Carne tierna que se deshace al tenedor, horneada lentamente y bañada en una salsa brillante y caramelizada con sutiles notas especiadas.",
    basePrice: 165,
    rating: 4.95,
    reviewsCount: 84,
    image: "/images/cazuela_romi.jpg",
    isBestSeller: true,
    prepTime: "5 - 7 min",
    tags: ["Guisado Estrella", "Carne Suave", "Tradición"],
    optionsTitle: "Guarnición a elegir (Incluida)",
    fruitOptions: GUARNICIONES,
    sizeTitle: "Porción",
    sizes: [
      { id: "individual", name: "Porción Individual (300 g de lomo + guarnición)", price: 165, desc: "Listo para regenerar y disfrutar." },
      { id: "familiar", name: "Porción Familiar (1 Kg para compartir en casa)", price: 480, desc: "Rinde de 3 a 4 personas." }
    ]
  },
  {
    id: "lomo-ciruela",
    name: "Lomo de Puerco a la Ciruela",
    category: "Platos Fuertes & Guisados",
    tagline: "Suave medallón horneado y glaseado en salsa agridulce de ciruelas pasas selectas",
    description:
      "Medallones de filete de cerdo horneados a fuego lento, cubiertos en una tersa salsa agridulce elaborada con ciruelas pasas selectas y notas tostadas.",
    basePrice: 170,
    rating: 4.9,
    reviewsCount: 63,
    image: "/images/cazuela_romi.jpg",
    prepTime: "5 - 7 min",
    tags: ["Agridulce", "Horneado Lento", "Elegante"],
    optionsTitle: "Guarnición a elegir (Incluida)",
    fruitOptions: GUARNICIONES,
    sizeTitle: "Porción",
    sizes: [
      { id: "individual", name: "Porción Individual (300 g + guarnición)", price: 170, desc: "Porción generosa." },
      { id: "familiar", name: "Porción Familiar (1 Kg)", price: 490, desc: "Para 3-4 personas." }
    ]
  },
  {
    id: "lomo-pina-dorada",
    name: "Lomo con Piña Dorada Caramelizada",
    category: "Platos Fuertes & Guisados",
    tagline: "Filete bañado en sus propios jugos con rodajas de piña caramelizada al horno",
    description:
      "Filete jugoso bañado en sus propios jugos reducidos con toques frutales y coronado con rodajas de piña natural caramelizadas en horno a fuego lento.",
    basePrice: 165,
    rating: 4.88,
    reviewsCount: 45,
    image: "/images/cazuela_romi.jpg",
    prepTime: "5 - 7 min",
    tags: ["Frutal", "Caramelizado", "Casero"],
    optionsTitle: "Guarnición a elegir (Incluida)",
    fruitOptions: GUARNICIONES,
    sizeTitle: "Porción",
    sizes: [
      { id: "individual", name: "Porción Individual (300 g + guarnición)", price: 165, desc: "Sabor agridulce y fresco." },
      { id: "familiar", name: "Porción Familiar (1 Kg)", price: 480, desc: "Para toda la familia." }
    ]
  },
  {
    id: "lomo-adobado-enchilado",
    name: "Lomo Adobado Enchilado Tradicional",
    category: "Platos Fuertes & Guisados",
    tagline: "Horneado lentamente con adobo tradicional de chiles guajillo, ancho y hierbas de olor",
    description:
      "La sazón más profunda de México. Carne magra adobada por horas en mezcla de chiles secos aromáticos, orégano de campo, comino y clavo, suave al corte.",
    basePrice: 165,
    rating: 4.92,
    reviewsCount: 51,
    image: "/images/mole_poblano.jpg",
    prepTime: "5 - 7 min",
    tags: ["Adobo Tradicional", "Especiado", "Sazón Profundo"],
    optionsTitle: "Guarnición a elegir (Incluida)",
    fruitOptions: GUARNICIONES,
    sizeTitle: "Porción",
    sizes: [
      { id: "individual", name: "Porción Individual (300 g + guarnición)", price: 165, desc: "Acompañado de tu guarnición favorita." },
      { id: "familiar", name: "Porción Familiar (1 Kg)", price: 480, desc: "Excelente con arroz blanco o frijoles." }
    ]
  },
  {
    id: "lomo-vino-tinto",
    name: "Lomo al Vino Tinto Especiado",
    category: "Platos Fuertes & Guisados",
    tagline: "Reducción profunda de vino tinto con hierbas provenzales y aromas tostados",
    description:
      "Un plato reconfortante y festivo. Suave medallón bañado en terciopelo de vino tinto con notas de romero, tomillo y pimienta negra quebrada.",
    basePrice: 175,
    rating: 4.96,
    reviewsCount: 39,
    image: "/images/cazuela_romi.jpg",
    prepTime: "5 - 7 min",
    tags: ["Vino Tinto", "Gourmet Casero", "Cena Especial"],
    optionsTitle: "Guarnición a elegir (Incluida)",
    fruitOptions: GUARNICIONES,
    sizeTitle: "Porción",
    sizes: [
      { id: "individual", name: "Porción Individual (300 g + guarnición)", price: 175, desc: "Maridaje ideal con puré de papa." },
      { id: "familiar", name: "Porción Familiar (1 Kg)", price: 510, desc: "Para ocasiones especiales." }
    ]
  },
  {
    id: "pastel-papa-picadillo",
    name: "Pastel de Papa y Picadillo Casero",
    category: "Platos Fuertes & Guisados",
    tagline: "Capas de puré de papa suave y carne molida sazonada, dorada al horno",
    description:
      "Nostalgia pura en cada bocado. Capas de puré de papa sedoso con mantequilla de rancho, relleno generoso de picadillo de res sazonado y cubierta gratinada dorada.",
    basePrice: 150,
    rating: 4.98,
    reviewsCount: 78,
    image: "/images/lasana_tradicional.jpg",
    isBestSeller: true,
    prepTime: "8 min",
    tags: ["Reconfortante", "Favorito de Niños y Adultos", "Horneado Casero"],
    optionsTitle: "Guarnición a elegir (Incluida)",
    fruitOptions: GUARNICIONES,
    sizeTitle: "Presentación",
    sizes: [
      { id: "individual", name: "Porción Individual Generosa", price: 150, desc: "Listo para calentar y servir." },
      { id: "familiar", name: "Refractario Familiar (4-5 porciones)", price: 440, desc: "Para comidas en familia." }
    ]
  },
  {
    id: "rollo-carne-tradicional",
    name: "Rollo de Carne Tradicional al Estilo Romi",
    category: "Platos Fuertes & Guisados",
    tagline: "Carne molida sazonada al estilo de casa, horneada en su punto jugoso",
    description:
      "Receta materna secreta con carne selecta de res y cerdo finamente sazonada con hierbas finas, horneada hasta conservar todos sus jugos naturales.",
    basePrice: 155,
    rating: 4.89,
    reviewsCount: 34,
    image: "/images/cazuela_romi.jpg",
    prepTime: "6 - 8 min",
    tags: ["Horneado", "Jugoso", "Receta Familiar"],
    optionsTitle: "Guarnición a elegir (Incluida)",
    fruitOptions: GUARNICIONES,
    sizeTitle: "Porción",
    sizes: [
      { id: "individual", name: "Porción Individual (3 rebanadas gruesas + guarnición)", price: 155, desc: "Con caldillo de la casa." },
      { id: "familiar", name: "Rollo Completo Horneado (1 Kg aprox)", price: 460, desc: "Rinde para 4-5 personas." }
    ]
  },
  {
    id: "chiles-nogada-casa",
    name: "Chiles en Nogada de la Casa",
    category: "Platos Fuertes & Guisados",
    tagline: "Chile poblano relleno de picadillo agridulce con manzana, pera, durazno y frutos secos, cubierto con tersa nogada de nuez de castilla y granada fresca",
    description:
      "La obra cumbre de la cocina tradicional mexicana. Chile poblano asado y pelado a mano, relleno de carne con manzana, pera, durazno y frutos secos, bañado en una tersa y abundante nogada de nuez de castilla fresca y coronado con granada roja jugosa y perejil.",
    basePrice: 220,
    rating: 5.0,
    reviewsCount: 61,
    image: "/images/chiles_nogada.jpg",
    isBestSeller: true,
    prepTime: "Servido fresco / temperatura ambiente",
    tags: ["Platillo Insignia", "Tradición Mexicana", "Nogada Artesanal"],
    sizeTitle: "Presentación",
    sizes: [
      { id: "1pieza", name: "1 Chile en Nogada Grande Completo", price: 220, desc: "Servido con abundante nogada y granada fresca." },
      { id: "2piezas", name: "Dúo de Chiles en Nogada", price: 420, desc: "Ahorra $20 pidiendo el par para compartir." }
    ]
  },
  {
    id: "chiles-rellenos-picadillo-queso",
    name: "Chiles Poblanos Rellenos (Picadillo o Queso)",
    category: "Platos Fuertes & Guisados",
    tagline: "Rellenos de carne sazonada o queso fundido en caldillo rojo aromático de jitomate",
    description:
      "Chiles poblanos asados a fuego directo, desvenados y rellenos con picadillo sazonado o abundante queso fundido, servidos en un caldillo rojo de jitomate aromático cocinado a fuego lento.",
    basePrice: 150,
    rating: 4.91,
    reviewsCount: 47,
    image: "/images/chiles_nogada.jpg",
    prepTime: "6 min",
    tags: ["Clásico Mexicano", "Opción Vegetariana", "Caldillo Casero"],
    optionsTitle: "Relleno a Elegir",
    fruitOptions: [
      { id: "relleno-picadillo", name: "Relleno de Picadillo de Carne Sazonado", price: 0 },
      { id: "relleno-queso", name: "Relleno de Queso Fundido [Vegetariano]", price: 0 }
    ],
    sizeTitle: "Porción",
    sizes: [
      { id: "individual", name: "1 Chile Relleno con Guarnición de Arroz", price: 150, desc: "Porción completa para una comida." },
      { id: "orden-doble", name: "Orden Doble (2 Chiles + Guarnición)", price: 270, desc: "Ideal para buen diente o compartir." }
    ]
  },
  {
    id: "mole-poblano-artesanal",
    name: "Mole Poblano Artesanal de la Casa",
    category: "Platos Fuertes & Guisados",
    tagline: "Receta emblemática con textura espesa y balance perfecto de chiles secos y cacao",
    description:
      "Elaborado desde cero tostando chiles mulato, ancho y pasilla, especias enteras, plátano macho, almendra y chocolate de metate. Textura aterciopelada, brillante y servido con pollo tierno y ajonjolí tostado.",
    basePrice: 160,
    rating: 4.97,
    reviewsCount: 92,
    image: "/images/mole_poblano.jpg",
    isBestSeller: true,
    prepTime: "6 min",
    tags: ["Artesanal", "Chocolate de Metate", "Patrimonio Culinario"],
    optionsTitle: "Guarnición a elegir (Incluida)",
    fruitOptions: GUARNICIONES,
    sizeTitle: "Porción",
    sizes: [
      { id: "individual", name: "Porción Individual (Pieza de pollo bañada en mole + arroz)", price: 160, desc: "Listo para calentar y disfrutar." },
      { id: "litro-mole", name: "1 Litro de Mole Poblano Pasta/Salsa Lista", price: 340, desc: "Para bañar tus piezas en casa." }
    ]
  },
  {
    id: "adobo-puerco-chiles-secos",
    name: "Adobo de Puerco en Salsa de Chiles Secos",
    category: "Platos Fuertes & Guisados",
    tagline: "Cerdo estofado lentamente en salsa aterciopelada de chiles secos",
    description:
      "Trozos suaves de carne de cerdo estofados lentamente en una salsa aterciopelada y perfumada de chiles secos seleccionados con hierbas de olor tradicionales.",
    basePrice: 160,
    rating: 4.9,
    reviewsCount: 38,
    image: "/images/cazuela_romi.jpg",
    prepTime: "6 min",
    tags: ["Estofado Lento", "Chiles Secos", "Sazón Auténtico"],
    optionsTitle: "Guarnición a elegir (Incluida)",
    fruitOptions: GUARNICIONES,
    sizeTitle: "Porción",
    sizes: [
      { id: "individual", name: "Porción Individual (300 g + guarnición)", price: 160, desc: "Rico con arroz o tortillas calientitas." },
      { id: "familiar", name: "Porción Familiar (1 Kg)", price: 470, desc: "Para compartir en casa." }
    ]
  },
  {
    id: "tinga-casera-pollo",
    name: "Tinga Casera de Pollo Jugosa",
    category: "Platos Fuertes & Guisados",
    tagline: "Tinga jugosa con chipotle o fajitas salteadas al wok con pimientos crujientes",
    description:
      "Pechuga de pollo deshebrada a mano, guisada lentamente con cebolla caramelizada, puré de jitomate sazonado y el sutil ahumado del chile chipotle.",
    basePrice: 140,
    rating: 4.93,
    reviewsCount: 110,
    image: "/images/cazuela_romi.jpg",
    prepTime: "5 min",
    tags: ["Versátil", "Cero Grasa Añadida", "Ideal Tostadas o Tacos"],
    optionsTitle: "Guarnición a elegir (Incluida)",
    fruitOptions: GUARNICIONES,
    sizeTitle: "Porción",
    sizes: [
      { id: "individual", name: "Porción Individual (300 g con arroz)", price: 140, desc: "Perfecta para tostadas o tacos." },
      { id: "medio-kilo", name: "Medio Kilo (500 g solo guisado)", price: 190, desc: "Para 2-3 personas." },
      { id: "kilo-completo", name: "1 Kilo de Tinga al Vacío", price: 360, desc: "Rinde para más de 12 tostadas." }
    ]
  },
  {
    id: "rajas-poblanas-crema",
    name: "Rajas Poblanas a la Crema con Elote [Vegetariano]",
    category: "Platos Fuertes & Guisados",
    tagline: "Chile poblano en tiras con elote dulce y cremosa salsa de la casa",
    description:
      "Tiras de chile poblano tierno asado a la plancha, combinadas con granos de elote amarillo dulce, crema fresca de rancho y queso suave.",
    basePrice: 145,
    rating: 4.9,
    reviewsCount: 52,
    image: "/images/mole_poblano.jpg",
    prepTime: "5 min",
    tags: ["Vegetariano", "Cremoso", "Tradición Poblana"],
    optionsTitle: "Guarnición a elegir (Incluida)",
    fruitOptions: GUARNICIONES,
    sizeTitle: "Porción",
    sizes: [
      { id: "individual", name: "Porción Individual (300 g + guarnición)", price: 145, desc: "Suave y nada picoso." },
      { id: "familiar", name: "Medio Kilo (500 g)", price: 210, desc: "Ideal para acompañar carnes o tacos." }
    ]
  },

  // ==========================================
  // 3. PASTAS ARTESANALES & TRADICIÓN ITALIANA (Página 2 PDF)
  // ==========================================
  {
    id: "lasana-tradicional-carne",
    name: "Lasaña Tradicional de Carne Gratinada",
    category: "Pastas & Tradición Italiana",
    tagline: "Capas de pasta casera, abundante carne boloñesa, bechamel suave y queso mozzarella gratinado",
    description:
      "El confort italiano en su máxima expresión. Capas de pasta artesanal hechas a mano, ragú boloñesa estofado con vino tinto y hortalizas, bechamel sedosa de nuez moscada y una generosa cubierta de queso mozzarella dorado al horno.",
    basePrice: 165,
    rating: 4.99,
    reviewsCount: 88,
    image: "/images/lasana_tradicional.jpg",
    isBestSeller: true,
    prepTime: "8 min",
    tags: ["Receta Italiana", "Gratinado Dorado", "Boloñesa Lenta"],
    sizeTitle: "Porción",
    sizes: [
      { id: "individual", name: "Porción Individual Generosa", price: 165, desc: "Listo para calentar y gratinar." },
      { id: "familiar", name: "Bandeja Familiar Horneada (4-5 porciones)", price: 490, desc: "Para cena o reunión familiar." }
    ]
  },
  {
    id: "lasana-berenjena",
    name: "Lasaña de Berenjena al Horno [Vegetariano]",
    category: "Pastas & Tradición Italiana",
    tagline: "Especial para vegetarianos: láminas de berenjena horneada, salsa de tomate y queso fundido",
    description:
      "Una alternativa deliciosa y ligera sin gluten de pasta. Láminas de berenjena asadas intercaladas con salsa pomodoro rústica, hojas de albahaca fresca y queso mozzarella fundido.",
    basePrice: 155,
    rating: 4.88,
    reviewsCount: 31,
    image: "/images/lasana_tradicional.jpg",
    prepTime: "8 min",
    tags: ["Vegetariano", "Keto Friendly", "Ligero"],
    sizeTitle: "Porción",
    sizes: [
      { id: "individual", name: "Porción Individual", price: 155, desc: "Cocina saludable y reconfortante." },
      { id: "familiar", name: "Bandeja Familiar (4 porciones)", price: 460, desc: "Para compartir sin culpa." }
    ]
  },
  {
    id: "canelones-picadillo-espinaca",
    name: "Canelones Artesanales Rellenos (Picadillo o Espinaca)",
    category: "Pastas & Tradición Italiana",
    tagline: "Rellenos de exquisito picadillo de carne sazonado o espinacas salteadas a la crema con queso gratinado",
    description:
      "Tubos de pasta fresca enrollados a mano y rellenos generosamente con picadillo sazonado cubiertos de salsa, o con espinacas salteadas a la crema y queso con capa dorada.",
    basePrice: 160,
    rating: 4.92,
    reviewsCount: 46,
    image: "/images/lasana_tradicional.jpg",
    prepTime: "8 min",
    tags: ["Pasta Rellena", "Al Horno", "Gratinado"],
    optionsTitle: "Relleno de los Canelones",
    fruitOptions: [
      { id: "picadillo", name: "Canelones de Picadillo de Carne Sazonado", price: 0 },
      { id: "espinaca", name: "Canelones de Espinaca a la Crema [Vegetariano]", price: 0 }
    ],
    sizeTitle: "Porción",
    sizes: [
      { id: "individual", name: "Porción Individual (3 piezas grandes gratinadas)", price: 160, desc: "Bañados en salsa y queso." },
      { id: "familiar", name: "Charola Familiar (8 piezas)", price: 420, desc: "Para 3-4 personas." }
    ]
  },
  {
    id: "pasta-artesanal-salsas",
    name: "Pastas al Gusto: Espagueti o Tallarines Caseros",
    category: "Pastas & Tradición Italiana",
    tagline: "Elija entre Penne al Tomate, Fusilli Mediterráneo, Boloñesa Tradicional, Salsa Alfredo Cremosa o Camarones al Vino Blanco",
    description:
      "Pasta al dente artesanal con la salsa de tu elección: Pomodoro rústica de tomates maduros, Fusilli Mediterráneo con aceitunas y cherry, Boloñesa tradicional estofada, Alfredo cremosa al parmesano añejado o Camarones salteados al vino blanco.",
    basePrice: 145,
    rating: 4.94,
    reviewsCount: 65,
    image: "/images/lasana_tradicional.jpg",
    prepTime: "6 - 7 min",
    tags: ["Pasta al Dente", "Salsas de Autor", "Personalizable"],
    optionsTitle: "Salsa a Elegir",
    fruitOptions: [
      { id: "pomodoro", name: "Penne al Tomate (Pomodoro rústico con albahaca y AOVE)", price: 0 },
      { id: "fusilli-med", name: "Fusilli Mediterráneo (Aceitunas negras, cherry y vinagreta)", price: 0 },
      { id: "bolonesa", name: "Boloñesa Tradicional (Estofada con sofrito de hortalizas y vino tinto)", price: 15 },
      { id: "alfredo", name: "Salsa Alfredo Cremosa (Mantequilla, crema y parmesano añejado)", price: 10 },
      { id: "camarones", name: "Al Vino Blanco con Camarones (Salteados con mantequilla, ajo y perejil)", price: 45 }
    ],
    sizeTitle: "Tipo de Pasta",
    sizes: [
      { id: "espagueti", name: "Espagueti Clásico al Dente", price: 145, desc: "La pasta clásica preferida." },
      { id: "tagliatelle", name: "Tallarines Caseros (Tagliatelle)", price: 145, desc: "Cintas anchas caseras." }
    ]
  },

  // ==========================================
  // 4. ESPECIALIDADES DEL MAR & GUARNICIONES (Página 4 PDF)
  // ==========================================
  {
    id: "lomo-atun-sellado",
    name: "Lomo de Atún Sellado con Costra de Ajonjolí",
    category: "Del Mar",
    tagline: "Posta de atún con costra dorada y centro jugoso, acompañada de verduras salteadas, aguacate o almendras",
    description:
      "Posta gruesa de atún fresco del Caribe sellada a fuego vivo con costra crocante de ajonjolí y centro tierno y rosado. Servido con láminas de aguacate cremoso, germinado orgánico y almendras tostadas.",
    basePrice: 195,
    rating: 4.96,
    reviewsCount: 54,
    image: "/images/lomo_atun.jpg",
    isBestSeller: true,
    prepTime: "3 - 5 min",
    tags: ["Atún Fresco", "Sellado al Punto", "Saludable & Gourmet"],
    optionsTitle: "Guarnición a elegir (Incluida)",
    fruitOptions: GUARNICIONES,
    sizeTitle: "Porción",
    sizes: [
      { id: "individual", name: "Posta Individual (220 g con guarnición)", price: 195, desc: "Punto sellado jugoso." }
    ]
  },
  {
    id: "salmon-teriyaki-glaseado",
    name: "Salmón al Estilo Teriyaki Glaseado",
    category: "Del Mar",
    tagline: "Salmón sellado y glaseado con reducción teriyaki agridulce y ajonjolí",
    description:
      "Filete de salmón fresco sellado a la plancha con la piel crujiente, glaseado con reducción casera de salsa teriyaki agridulce, jengibre y semillas de ajonjolí tostadas.",
    basePrice: 215,
    rating: 4.97,
    reviewsCount: 49,
    image: "/images/lomo_atun.jpg",
    prepTime: "5 min",
    tags: ["Salmón Fresco", "Glaseado Teriyaki", "Omega 3"],
    optionsTitle: "Guarnición a elegir (Incluida)",
    fruitOptions: GUARNICIONES,
    sizeTitle: "Porción",
    sizes: [
      { id: "individual", name: "Filete Individual (220 g de Salmón + guarnición)", price: 215, desc: "Balance gastronómico ideal." }
    ]
  },
  {
    id: "filete-pescado-finas-hierbas",
    name: "Filete a las Finas Hierbas (Salmón o Pescado Blanco)",
    category: "Del Mar",
    tagline: "Bañado en mantequilla clarificada y finas hierbas aromáticas de huerto",
    description:
      "Pescado cocinado al punto perfecto en mantequilla fundida con tomillo, eneldo, perejil francés y gotas de limón amarillo.",
    basePrice: 175,
    rating: 4.91,
    reviewsCount: 37,
    image: "/images/lomo_atun.jpg",
    prepTime: "5 min",
    tags: ["Finas Hierbas", "Mantequilla", "Delicado"],
    optionsTitle: "Guarnición a elegir (Incluida)",
    fruitOptions: GUARNICIONES,
    sizeTitle: "Pescado",
    sizes: [
      { id: "pescado-blanco", name: "Filete de Pescado Blanco del Día", price: 175, desc: "Textura suave y delicada." },
      { id: "salmon-hierbas", name: "Filete de Salmón Premium", price: 215, desc: "Rico en grasas saludables." }
    ]
  },
  {
    id: "filete-salsa-verde-tomate",
    name: "Filete en Salsa Verde de Tomate con Verduras",
    category: "Del Mar",
    tagline: "Filete de pescado cocinado suavemente en salsa verde de tomate con verduras tiernas",
    description:
      "Guiso marino tradicional. Pescado pochado suavemente en caldillo verde de tomate milpero con cilantro fresco y rodajas de calabacita y chayote tierno.",
    basePrice: 170,
    rating: 4.88,
    reviewsCount: 28,
    image: "/images/lomo_atun.jpg",
    prepTime: "6 min",
    tags: ["Salsa Verde", "Tradición Costera", "Ligero"],
    optionsTitle: "Guarnición a elegir (Incluida)",
    fruitOptions: GUARNICIONES,
    sizeTitle: "Porción",
    sizes: [
      { id: "individual", name: "Porción Individual con Verduras y Arroz", price: 170, desc: "Comida completa y balanceada." }
    ]
  },

  // ==========================================
  // 5. ENTRADAS SELECTAS & ENSALADAS DE AUTOR (Página 1 PDF)
  // ==========================================
  {
    id: "trufas-queso-crema",
    name: "Trufas de Queso Crema Artesanales (Cream Cheese Truffles)",
    category: "Entradas & Ensaladas",
    tagline: "Variedad de bolitas de queso crema cubiertas de nuez pecana, arándanos dulces, ajonjolí tostado y chabacano",
    description:
      "Aperitivo gourmet de la casa. Suaves esferas de queso crema preparadas al momento y rebozadas en cuatro cubiertas contrastantes: nuez pecana crujiente, arándanos deshidratados dulces, ajonjolí dorado y trocitos de chabacano.",
    basePrice: 130,
    rating: 4.95,
    reviewsCount: 41,
    image: "/images/trufas_queso.jpg",
    isBestSeller: true,
    tags: ["Entrada Gourmet", "Bocadillo", "Para Compartir"],
    sizeTitle: "Presentación",
    sizes: [
      { id: "charola-12", name: "Charola de 12 Trufas Surtidas (4 variedades)", price: 130, desc: "Acompañada de galletitas saladas." },
      { id: "charola-24", name: "Charola de 24 Trufas para Eventos", price: 240, desc: "Ideal para juntas y reuniones." }
    ]
  },
  {
    id: "rollo-chabacano-enchipotlado",
    name: "Rollo de Queso Crema al Chabacano Enchipotlado",
    category: "Entradas & Ensaladas",
    tagline: "Cremoso rollo de queso bañado en reducción agridulce de chabacano con el sutil toque ahumado del chile chipotle",
    description:
      "El equilibrio perfecto entre dulce, cremoso y picor ahumado. Queso crema moldeado bañado en mermelada rústica casera de chabacano y chipotle.",
    basePrice: 140,
    rating: 4.92,
    reviewsCount: 35,
    image: "/images/trufas_queso.jpg",
    tags: ["Agridulce", "Chipotle", "Favorito en Reuniones"],
    sizeTitle: "Presentación",
    sizes: [
      { id: "pieza-completa", name: "Rollo Completo con Galletas Artesanales", price: 140, desc: "Listo para emplatar al centro." }
    ]
  },
  {
    id: "rollo-frutos-secos-apio",
    name: "Rollo de Queso Crema con Frutos Secos y Apio",
    category: "Entradas & Ensaladas",
    tagline: "Fresca combinación de queso crema con fina mezcla crocante de frutos secos y tropezones de apio fresco de huerto",
    description:
      "Una entrada ligera y con deliciosa textura crujiente. Queso crema aderezado con nueces, almendras tostadas y cubitos crujientes de apio fresco.",
    basePrice: 140,
    rating: 4.89,
    reviewsCount: 22,
    image: "/images/trufas_queso.jpg",
    tags: ["Crocante", "Fresco", "Aperitivo"],
    sizeTitle: "Presentación",
    sizes: [
      { id: "pieza-completa", name: "Rollo Completo con Galletas", price: 140, desc: "Para abrir boca en casa o eventos." }
    ]
  },
  {
    id: "ensalada-dulce-cabra",
    name: "Ensalada Dulce con Queso de Cabra [Vegetariana]",
    category: "Entradas & Ensaladas",
    tagline: "Cama de lechugas frescas crujientes con frutos secos, láminas de manzana dulce, queso de cabra y vinagreta de miel y mostaza dijón",
    description:
      "Ensalada fresca y equilibrada. Mezcla de lechugas tiernas, láminas delgadas de manzana verde y roja, nueces caramelizadas, queso de cabra artesanal y vinagreta emulsionada.",
    basePrice: 125,
    rating: 4.93,
    reviewsCount: 38,
    image: "/images/trufas_queso.jpg",
    tags: ["Vegetariana", "Fresca", "Queso de Cabra"],
    sizeTitle: "Porción",
    sizes: [
      { id: "individual", name: "Porción Individual", price: 125, desc: "Ideal como entrada o cena ligera." },
      { id: "familiar", name: "Ensaladera Familiar para 4 personas", price: 290, desc: "Con aderezos servidos aparte." }
    ]
  },
  {
    id: "ensalada-navidena-nuez-manzana",
    name: "Ensalada Festiva de Nuez y Manzana [Vegetariana]",
    category: "Entradas & Ensaladas",
    tagline: "Tradicional receta festiva de cubos de manzana jugosa, nuez picada y tersa crema dulce casera",
    description:
      "La clásica y consentida ensalada de fiesta. Manzanas crujientes en cubitos con abundante nuez pecana quebrada, tropezones de piña y crema dulce casera suave.",
    basePrice: 120,
    rating: 4.97,
    reviewsCount: 44,
    image: "/images/trufas_queso.jpg",
    tags: ["Vegetariana", "Nuez Pecana", "Receta Festiva"],
    sizeTitle: "Porción",
    sizes: [
      { id: "individual", name: "Porción Individual (250 g)", price: 120, desc: "Cremosa y refrescante." },
      { id: "medio-kilo", name: "Medio Kilo (500 g)", price: 210, desc: "Para compartir al centro." }
    ]
  },

  // ==========================================
  // 6. POSTRES ARTESANALES & DULCES CREACIONES (Página 5 PDF)
  // ==========================================
  {
    id: "mostachon-artesanal",
    name: "Mostachón de Fresa Insignia",
    category: "Postres Artesanales",
    tagline: "Base crujiente de merengue horneado con nuez y galleta, coronado con queso crema y fresas frescas",
    description:
      "La joya de la corona de By Romi. Base crocante de merengue horneado a baja temperatura con nuez pecana y galleta, cubierta con una generosa nube de crema batida con queso crema y coronada con fresas frescas seleccionadas del día.",
    basePrice: 140,
    rating: 5.0,
    reviewsCount: 165,
    image: "/images/mostachon_artesanal.jpg",
    isBestSeller: true,
    isPopular: true,
    tags: ["👑 El Rey de la Casa", "Receta Estrella", "Nuez y Merengue", "100% Fresas Naturales"],
    optionsTitle: "Corona de Fruta de Temporada",
    fruitOptions: [
      { id: "fresas-clasicas", name: "Fresas Frescas Tradicionales (Recomendada de la Casa)", price: 0 },
      { id: "frutos-rojos-mix", name: "Mix Silvestre (Fresas, zarzamoras y moras azules)", price: 25 },
      { id: "mango-tropical", name: "Mango Ataulfo en Láminas (De temporada)", price: 15 }
    ],
    sizeTitle: "Tamaño",
    sizes: [
      { id: "individual", name: "Porción Individual Generosa", price: 140, desc: "Para un momento de apapacho personal." },
      { id: "mediano", name: "Pastel Mediano (Para 6 - 8 personas)", price: 420, desc: "El centro de atención de cualquier comida." },
      { id: "grande", name: "Pastel Grande de Fiesta (10 - 12 personas)", price: 620, desc: "Para celebrar cumpleaños y reuniones." }
    ]
  },
  {
    id: "pay-limon-helado",
    name: "Pay de Limón Helado Tradicional",
    category: "Postres Artesanales",
    tagline: "Costra de galleta crocante con relleno helado de limón natural, cremoso y refrescante",
    description:
      "El balance perfecto de acidez cítrica y dulzor cremoso. Costra de galleta con mantequilla horneada, rellena de una tersa crema helada de limón fresco.",
    basePrice: 110,
    rating: 4.95,
    reviewsCount: 73,
    image: "/images/carlota_limon.jpg",
    isPopular: true,
    tags: ["Refrescante", "Cítrico Dulce", "Clásico de Playa"],
    sizeTitle: "Tamaño",
    sizes: [
      { id: "individual", name: "Rebanada Individual Fría", price: 110, desc: "Refrescante para la tarde." },
      { id: "completo", name: "Pay Completo Familiar (8 porciones)", price: 340, desc: "Ideal para tener en el congelador." }
    ]
  },
  {
    id: "pan-elote-tierno",
    name: "Pan de Elote Tierno Artesanal",
    category: "Postres Artesanales",
    tagline: "Hecho con elote tierno fresco, esponjoso, húmedo y con inconfundible aroma a maíz dulce",
    description:
      "Horneado a diario con granos de elote tierno recién desgranados. Sin harinas pesadas ni saborizantes artificiales: consistencia húmeda tipo budín campesino con el aroma dulce que perfuma toda la cocina.",
    basePrice: 95,
    rating: 4.98,
    reviewsCount: 112,
    image: "/images/pan_elote.jpg",
    isBestSeller: true,
    tags: ["Húmedo y Tiernito", "100% Maíz Fresco", "Sin Conservadores"],
    sizeTitle: "Tamaño",
    sizes: [
      { id: "individual", name: "Rebanada Calientita Individual", price: 95, desc: "Perfecta con café de olla." },
      { id: "panque-completo", name: "Panqué Completo de Hogar (6 porciones)", price: 280, desc: "Para el desayuno o merienda en familia." }
    ]
  },
  {
    id: "flan-tradicional-casero",
    name: "Flan Tradicional Casero con Caramelo Dorado",
    category: "Postres Artesanales",
    tagline: "Textura suave y cremosa con delicioso baño de caramelo dorado al punto",
    description:
      "El flan de la abuela llevado a su máxima perfección. Textura tersa, aterciopelada y densa, cocinado al baño maría a fuego lento y bañado en caramelo líquido ambarino.",
    basePrice: 105,
    rating: 4.96,
    reviewsCount: 89,
    image: "/images/flan_casero.jpg",
    isBestSeller: true,
    tags: ["Receta de Abuela", "Baño María", "Caramelo Dorado"],
    sizeTitle: "Presentación",
    sizes: [
      { id: "individual", name: "Rebanada Individual Bañada en Caramelo", price: 105, desc: "Pura suavidad que se deshace en boca." },
      { id: "flan-entero", name: "Flan Entero Familiar (8 porciones)", price: 340, desc: "El postre infaltable del domingo." }
    ]
  },
  {
    id: "pay-platano-nuez-cajeta",
    name: "Pay de Plátano, Nuez y Cajeta Tradicional",
    category: "Postres Artesanales",
    tagline: "Rodajas de plátano fresco con cajeta tradicional mexicana, nuez y corona de crema batida",
    description:
      "Costra crujiente de galleta con mantequilla, base de cajeta tradicional mexicana espesa, plátano dulce en su punto exacto y corona de crema batida artesanal con lluvia de nuez tostada.",
    basePrice: 120,
    rating: 4.94,
    reviewsCount: 56,
    image: "/images/pay_platano.jpg",
    tags: ["Cajeta de Celaya", "Plátano Fresco", "Hogareño"],
    sizeTitle: "Tamaño",
    sizes: [
      { id: "individual", name: "Porción Individual", price: 120, desc: "Antojo irresistible." },
      { id: "completo", name: "Pay Completo Familiar (8 rebanadas)", price: 360, desc: "Para compartir con la familia." }
    ]
  },
  {
    id: "pay-nuez-datil",
    name: "Pay de Nuez y Dátil Hogareño",
    category: "Postres Artesanales",
    tagline: "Relleno artesanal horneado con nueces tostadas y dátiles dulces, lleno de calidez hogareña",
    description:
      "Relleno denso y acaramelado de nueces pecanas tostadas al horno combinadas con dátiles dulces naturales sobre costra de masa quebrada crujiente.",
    basePrice: 125,
    rating: 4.93,
    reviewsCount: 42,
    image: "/images/mostachon_artesanal.jpg",
    tags: ["Nuez & Dátil", "Horneado Lento", "Dulzor Natural"],
    sizeTitle: "Tamaño",
    sizes: [
      { id: "individual", name: "Rebanada Individual", price: 125, desc: "Maridaje ideal con té o café." },
      { id: "completo", name: "Pay Completo Familiar (8 porciones)", price: 380, desc: "Calidez hogareña para compartir." }
    ]
  },
  {
    id: "pastel-tres-leches-dulce",
    name: "Pastel Tres Leches con Dulce de Leche",
    category: "Postres Artesanales",
    tagline: "Bizcocho embebido en jarabe de tres leches y generosa cobertura de dulce de leche artesanal",
    description:
      "Bizcocho aireado empapado en nuestra infusión casera de tres leches con toque de canela y vainilla de Papantla, cubierto con dulce de leche artesanal.",
    basePrice: 135,
    rating: 4.97,
    reviewsCount: 71,
    image: "/images/tres_leches_cake.jpg",
    tags: ["Súper Húmedo", "Vainilla de Papantla", "Dulce de Leche"],
    sizeTitle: "Tamaño",
    sizes: [
      { id: "individual", name: "Porción Individual Húmeda", price: 135, desc: "Servido bien frío." },
      { id: "pastel-entero", name: "Pastel Entero (8-10 porciones)", price: 440, desc: "Para celebraciones especiales." }
    ]
  },
  {
    id: "tiramisu-clasico",
    name: "Tiramisú Clásico al Café de Grano",
    category: "Postres Artesanales",
    tagline: "Soletillas embebidas en café de grano y licor, capas de crema de queso y espolvoreado de cacao",
    description:
      "Galletas soletillas bañadas en café espresso veracruzano recién infusionado y licor fino, cubiertas de crema mascarpone casera y cacao amargo espolvoreado.",
    basePrice: 140,
    rating: 4.95,
    reviewsCount: 64,
    image: "/images/tiramisu_autor.jpg",
    tags: ["Café Espresso", "Cacao Puro", "Italiano Clásico"],
    sizeTitle: "Tamaño",
    sizes: [
      { id: "individual", name: "Copa / Cuadro Individual", price: 140, desc: "El cierre perfecto para tu comida." },
      { id: "charola-familiar", name: "Charola Familiar (6-8 porciones)", price: 460, desc: "Para reuniones." }
    ]
  },
  {
    id: "nuit-chocolate-envinado",
    name: "Nuit de Chocolate Envinado / Tronco",
    category: "Postres Artesanales",
    tagline: "Bizcocho de chocolate semiamargo humedecido con licor aromático y relleno aterciopelado",
    description:
      "Para verdaderos amantes del chocolate oscuro. Bizcocho húmedo de chocolate semiamargo al licor, relleno y cubierto con ganache de chocolate con 70% de cacao.",
    basePrice: 145,
    rating: 4.96,
    reviewsCount: 58,
    image: "/images/nuit_de_chocolate.jpg",
    tags: ["Chocolate 70%", "Envinado", "Gourmet"],
    sizeTitle: "Tamaño",
    sizes: [
      { id: "individual", name: "Porción Individual Densa", price: 145, desc: "Intenso y aterciopelado." },
      { id: "pastel-entero", name: "Pastel Tronco Entero (8-10 porciones)", price: 480, desc: "Elegancia en tu mesa." }
    ]
  }
];

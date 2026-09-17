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
  { id: "pure-papa", name: "Puré de Papa Casero (Textura sedosa con mantequilla y crema)", price: 0 },
  { id: "arroz-blanco", name: "Arroz Blanco al Vapor (Grano largo suave para salsas)", price: 0 },
  { id: "arroz-elote", name: "Arroz con Elote Tierno (Caldito de mantequilla y maíz dulce)", price: 0 },
  { id: "arroz-primavera", name: "Arroz Primavera Campirano (Arroz rojo con zanahoria y chícharos)", price: 0 },
  { id: "verduras-salteadas", name: "Verduras Salteadas de Temporada (Al sartén con aceite de oliva)", price: 0 },
  { id: "mix-verde", name: "Mix Verde Fresco (Hojas tiernas aliñadas con balsámico)", price: 0 }
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
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80",
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
    image: "https://images.unsplash.com/photo-1574484284002-952d92456975?auto=format&fit=crop&w=800&q=80",
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
    image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=800&q=80",
    prepTime: "7 - 10 min",
    tags: ["Pescados & Mariscos", "Saludable", "Proteína Limpia"],
    sizeTitle: "Formato Individual",
    sizes: [
      { id: "pack-mar", name: "Paquete Balance Marino (5 comidas del mar)", price: 850, desc: "Nutrición fresca y balanceada." }
    ]
  },

  // ==========================================
  // 2. PLATOS PRINCIPALES & TRADICIÓN CULINARIA
  // ==========================================
  {
    id: "lomo-coca-cola",
    name: "Lomo a la Coca-Cola Glaseada",
    category: "Platos Fuertes & Guisados",
    tagline: "Receta clásica casera con salsa brillante y carne tierna",
    description:
      "El consentido de la familia. Carne tierna que se deshace al tenedor, horneada lentamente y bañada en una salsa brillante y caramelizada con sutiles notas especiadas.",
    basePrice: 165,
    rating: 4.95,
    reviewsCount: 84,
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
    isBestSeller: true,
    prepTime: "5 - 7 min",
    tags: ["Guisado Estrella", "Carne Suave", "Tradición"],
    optionsTitle: "Guarnición de la Casa (Incluida)",
    fruitOptions: GUARNICIONES,
    sizeTitle: "Porción",
    sizes: [
      { id: "individual", name: "Porción Individual (300 g de lomo + guarnición)", price: 165, desc: "Listo para abrir y disfrutar." },
      { id: "familiar", name: "Porción Familiar (1 Kg para compartir en casa)", price: 480, desc: "Rinde de 3 a 4 personas." }
    ]
  },
  {
    id: "lomo-ciruela",
    name: "Lomo de Puerco a la Ciruela",
    category: "Platos Fuertes & Guisados",
    tagline: "Suave medallón horneado y glaseado en salsa agridulce",
    description:
      "Medallones de filete de cerdo horneados a fuego lento, cubiertos en una tersa salsa agridulce elaborada con ciruelas pasas selectas y notas tostadas.",
    basePrice: 170,
    rating: 4.9,
    reviewsCount: 63,
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
    prepTime: "5 - 7 min",
    tags: ["Agridulce", "Horneado Lento", "Elegante"],
    optionsTitle: "Guarnición de la Casa (Incluida)",
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
    tagline: "Filete bañado en sus propios jugos con piña caramelizada",
    description:
      "Filete jugoso cocinado en reducción de sus propios jugos naturales, acompañado de rodajas de piña fresca dorada y caramelizada al horno.",
    basePrice: 165,
    rating: 4.85,
    reviewsCount: 47,
    image: "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?auto=format&fit=crop&w=800&q=80",
    prepTime: "5 - 7 min",
    tags: ["Frutal", "Jugoso", "Horno"],
    optionsTitle: "Guarnición de la Casa (Incluida)",
    fruitOptions: GUARNICIONES,
    sizeTitle: "Porción",
    sizes: [
      { id: "individual", name: "Porción Individual (300 g + guarnición)", price: 165, desc: "Platillo individual." },
      { id: "familiar", name: "Porción Familiar (1 Kg)", price: 480, desc: "Para 3-4 personas." }
    ]
  },
  {
    id: "lomo-adobado-enchilado",
    name: "Lomo Adobado Enchilado Tradicional",
    category: "Platos Fuertes & Guisados",
    tagline: "Adobo tradicional de chiles guajillo, ancho y hierbas de olor",
    description:
      "Horneado lentamente con nuestro adobo artesanal de chiles guajillo y ancho tatemados con comino y hierbas de olor. Sabor profundo de fiesta mexicana.",
    basePrice: 165,
    rating: 4.9,
    reviewsCount: 52,
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
    prepTime: "5 - 7 min",
    tags: ["Tradición Mexicana", "Adobo Casero", "Sazón de Fiesta"],
    optionsTitle: "Guarnición de la Casa (Incluida)",
    fruitOptions: GUARNICIONES,
    sizeTitle: "Porción",
    sizes: [
      { id: "individual", name: "Porción Individual (300 g + guarnición)", price: 165, desc: "Ideal con arroz de la casa." },
      { id: "familiar", name: "Porción Familiar (1 Kg)", price: 480, desc: "Para toda la familia." }
    ]
  },
  {
    id: "lomo-vino-tinto",
    name: "Lomo al Vino Tinto Especiado",
    category: "Platos Fuertes & Guisados",
    tagline: "Reducción profunda de vino tinto con hierbas provenzales",
    description:
      "Suaves filetes de cerdo en una reducción de vino tinto robusto con hierbas provenzales, toques de pimienta negra y aromas tostados.",
    basePrice: 175,
    rating: 4.9,
    reviewsCount: 39,
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
    prepTime: "5 - 7 min",
    tags: ["Vino Tinto", "Cena Especial", "Gourmet Casero"],
    optionsTitle: "Guarnición de la Casa (Incluida)",
    fruitOptions: GUARNICIONES,
    sizeTitle: "Porción",
    sizes: [
      { id: "individual", name: "Porción Individual (300 g + guarnición)", price: 175, desc: "Perfecto con puré de papa." },
      { id: "familiar", name: "Porción Familiar (1 Kg)", price: 510, desc: "Para cena especial." }
    ]
  },
  {
    id: "pastel-papa-picadillo",
    name: "Pastel de Papa y Picadillo Casero",
    category: "Platos Fuertes & Guisados",
    tagline: "Capas de puré de papa suave y carne sazonada, dorada al horno",
    description:
      "Un clásico que abraza el corazón. Capas de puré de papa terso con mantequilla y crema fresca, intercaladas con picadillo de carne molida sazonada a la antigua y gratinado en horno.",
    basePrice: 150,
    rating: 4.95,
    reviewsCount: 91,
    image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80",
    isBestSeller: true,
    prepTime: "7 min",
    tags: ["Reconfortante", "Favorito de Niños", "Horneado"],
    sizeTitle: "Tamaño",
    sizes: [
      { id: "individual", name: "Porción Individual Generosa (350 g)", price: 150, desc: "Listo para calentar." },
      { id: "familiar", name: "Charola Familiar (1 Kg - rinde 4 personas)", price: 440, desc: "Para la mesa familiar." }
    ]
  },
  {
    id: "rollo-carne-tradicional",
    name: "Rollo de Carne Tradicional al Estilo Romi",
    category: "Platos Fuertes & Guisados",
    tagline: "Carne molida sazonada al estilo de casa, horneada jugosa",
    description:
      "Preparado con carne molida magra seleccionada, sazón de hierbas de huerto y horneado en su punto exacto para conservar cada gota de jugo.",
    basePrice: 155,
    rating: 4.85,
    reviewsCount: 44,
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
    prepTime: "5 - 7 min",
    tags: ["Horneado", "Carne Jugosa", "Nutritivo"],
    optionsTitle: "Guarnición de la Casa (Incluida)",
    fruitOptions: GUARNICIONES,
    sizeTitle: "Porción",
    sizes: [
      { id: "individual", name: "Porción Individual (300 g + guarnición)", price: 155, desc: "Con salsa y guarnición." },
      { id: "familiar", name: "Rollo Entero Familiar (1 Kg)", price: 450, desc: "Rinde 4 comensales." }
    ]
  },
  {
    id: "mole-poblano-artesanal",
    name: "Mole Poblano Artesanal de la Casa",
    category: "Platos Fuertes & Guisados",
    tagline: "Receta emblemática con textura espesa y balance de chiles y cacao",
    description:
      "Nuestra receta reina: pasta de mole elaborada con chiles secos seleccionados, especias finas, ajonjolí tostado y auténtico chocolate de metate. Servido con pollo suave.",
    basePrice: 160,
    rating: 5.0,
    reviewsCount: 78,
    image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=800&q=80",
    isBestSeller: true,
    prepTime: "5 - 7 min",
    tags: ["Insignia Mexicana", "Cacao & Especias", "Sazón Puro"],
    optionsTitle: "Guarnición de la Casa (Incluida)",
    fruitOptions: GUARNICIONES,
    sizeTitle: "Porción",
    sizes: [
      { id: "individual", name: "Porción Individual con Pollo + Guarnición", price: 160, desc: "Con arroz blanco o campirano." },
      { id: "familiar", name: "Litro Familiar de Mole con Pollo", price: 460, desc: "Rinde 4 personas." }
    ]
  },
  {
    id: "chiles-nogada-casa",
    name: "Chiles en Nogada de la Casa (Por Temporada o Pedido)",
    category: "Platos Fuertes & Guisados",
    tagline: "Picadillo agridulce, tersa nogada de nuez de castilla y granada fresca",
    description:
      "Chile poblano relleno de picadillo fino de res y cerdo con manzana, pera, durazno criollo y frutos secos, cubierto con nogada elaborada con nuez de castilla y granada fresca.",
    basePrice: 220,
    rating: 5.0,
    reviewsCount: 65,
    image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=800&q=80",
    isPopular: true,
    prepTime: "Listo para degustar",
    tags: ["Especialidad", "Nuez de Castilla", "Joyas de México"],
    sizeTitle: "Piezas",
    sizes: [
      { id: "1pieza", name: "1 Chile en Nogada Grande", price: 220, desc: "Servido con nogada abundante y granada." },
      { id: "duo", name: "2 Chiles en Nogada", price: 420, desc: "Ideal para compartir en pareja." }
    ]
  },
  {
    id: "tinga-casera-pollo",
    name: "Tinga Casera de Pollo Jugosa",
    category: "Platos Fuertes & Guisados",
    tagline: "Pechuga de pollo deshebrada con jitomate y sutil toque de chipotle",
    description:
      "Pechuga de pollo fresca cocinada con cebolla caramelizada, jitomates maduros y el toque ahumado justo de chipotle. Jugosa y perfecta para tostadas o tacos de guisado.",
    basePrice: 140,
    rating: 4.85,
    reviewsCount: 50,
    image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=800&q=80",
    prepTime: "5 min",
    tags: ["Práctico", "Favorito de Casa", "Listo para Taquear"],
    optionsTitle: "Guarnición de la Casa (Incluida)",
    fruitOptions: GUARNICIONES,
    sizeTitle: "Porción",
    sizes: [
      { id: "individual", name: "Porción Individual (300 g + guarnición)", price: 140, desc: "Lista para disfrutar." },
      { id: "medio-kilo", name: "Medio Kilo (500 g solo guisado)", price: 210, desc: "Rinde 6-8 tostadas generosas." },
      { id: "kilo", name: "1 Kilogramo para Freezer", price: 380, desc: "Para resolver la semana." }
    ]
  },
  {
    id: "rajas-poblanas-crema",
    name: "Rajas Poblanas a la Crema con Elote [Vegetariano]",
    category: "Platos Fuertes & Guisados",
    tagline: "Chile poblano en tiras con elote dulce y cremosa salsa de la casa",
    description:
      "Tiras de chile poblano tatemado a mano, salteadas con granos de elote tierno y ligadas con suave crema de rancho y queso fresco. Una delicia vegetariana reconfortante.",
    basePrice: 135,
    rating: 4.9,
    reviewsCount: 46,
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80",
    prepTime: "5 min",
    tags: ["Vegetariano", "Poblano Tatemado", "Cremoso"],
    optionsTitle: "Guarnición de la Casa (Incluida)",
    fruitOptions: GUARNICIONES,
    sizeTitle: "Porción",
    sizes: [
      { id: "individual", name: "Porción Individual (300 g + guarnición)", price: 135, desc: "Con arroz al vapor." },
      { id: "kilo", name: "1 Kilogramo Familiar", price: 360, desc: "Para toda la mesa." }
    ]
  },

  // ==========================================
  // 3. PASTAS ARTESANALES & TRADICIÓN ITALIANA
  // ==========================================
  {
    id: "lasana-tradicional-carne",
    name: "Lasaña Tradicional de Carne Gratinada",
    category: "Pastas & Tradición Italiana",
    tagline: "Capas de pasta casera, boloñesa estofada, bechamel y queso mozzarella",
    description:
      "Capas alternadas de pasta al huevo hecha en casa, abundante carne boloñesa estofada al vino tinto, salsa bechamel sedosa y una cubierta dorada de queso mozzarella fundido.",
    basePrice: 165,
    rating: 4.95,
    reviewsCount: 96,
    image: "https://images.unsplash.com/photo-1574894709920-11b28e7367e3?auto=format&fit=crop&w=800&q=80",
    isBestSeller: true,
    prepTime: "8 - 10 min",
    tags: ["Tradición Italiana", "Pasta Casera", "Gratinada al Horno"],
    sizeTitle: "Porción",
    sizes: [
      { id: "individual", name: "Porción Individual Generosa (380 g)", price: 165, desc: "Dorada y lista para calentar." },
      { id: "familiar", name: "Charola Familiar (4 porciones grandes)", price: 540, desc: "El centro de la mesa del domingo." }
    ]
  },
  {
    id: "lasana-berenjena",
    name: "Lasaña de Berenjena al Horno [Vegetariano]",
    category: "Pastas & Tradición Italiana",
    tagline: "Láminas de berenjena horneada, salsa rústica de tomate y queso fundido",
    description:
      "Ligera, nutritiva y reconfortante. Láminas de berenjena asada con aceite de oliva, intercaladas con pomodoro rústico con albahaca y suave capa de queso gratinado.",
    basePrice: 155,
    rating: 4.85,
    reviewsCount: 37,
    image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=800&q=80",
    prepTime: "8 min",
    tags: ["Vegetariano", "Bajo en Carbohidratos", "Sabor Mediterráneo"],
    sizeTitle: "Porción",
    sizes: [
      { id: "individual", name: "Porción Individual (350 g)", price: 155, desc: "Equilibrada y ligera." },
      { id: "familiar", name: "Charola Familiar (4 porciones)", price: 490, desc: "Para compartir sano." }
    ]
  },
  {
    id: "canelones-picadillo-espinaca",
    name: "Canelones Rellenos al Horno (Picadillo o Espinaca)",
    category: "Pastas & Tradición Italiana",
    tagline: "Tubos de pasta rellenos cubiertos de salsa pomodoro o crema gratinada",
    description:
      "Canelones artesanales rellenos generosamente de picadillo de carne sazonado o de espinacas salteadas a la crema con queso [Vegetariano], gratinados con una capa dorada.",
    basePrice: 160,
    rating: 4.9,
    reviewsCount: 41,
    image: "https://images.unsplash.com/photo-1621996346565-e3d5d628169e?auto=format&fit=crop&w=800&q=80",
    prepTime: "8 min",
    tags: ["Horneado", "Gratinado", "Pasta Rellena"],
    optionsTitle: "Elige tu Relleno Favorito",
    fruitOptions: [
      { id: "picadillo", name: "Picadillo de Carne Sazonado", price: 0 },
      { id: "espinaca-crema", name: "Espinacas Salteadas a la Crema [Vegetariano]", price: 0 }
    ],
    sizeTitle: "Presentación",
    sizes: [
      { id: "individual", name: "Orden de 3 Canelones Grandes", price: 160, desc: "Con salsa abundante y queso fundido." },
      { id: "charola-8", name: "Charola de 8 Canelones para Familia", price: 480, desc: "Ideal para comida compartida." }
    ]
  },
  {
    id: "pasta-artesanal-salsas",
    name: "Pasta al Gusto: Espagueti o Tallarines Caseros",
    category: "Pastas & Tradición Italiana",
    tagline: "Elige entre Pomodoro, Boloñesa, Alfredo o Al Vino Blanco con Camarones",
    description:
      "Pasta clásica cocinada al dente o tallarines tagliatelle caseros preparados con la salsa que prefieras de nuestro recetario tradicional.",
    basePrice: 145,
    rating: 4.9,
    reviewsCount: 58,
    image: "https://images.unsplash.com/photo-1556760544-74068565f05c?auto=format&fit=crop&w=800&q=80",
    prepTime: "7 min",
    tags: ["Al Dente", "Salsas de la Casa", "Versátil"],
    optionsTitle: "Salsa de tu Elección",
    fruitOptions: [
      { id: "pomodoro", name: "Salsa Pomodoro Rústica con Albahaca Fresca", price: 0 },
      { id: "bolonesa", name: "Boloñesa Tradicional de Res y Cerdo al Vino Tinto", price: 25 },
      { id: "alfredo", name: "Salsa Alfredo Cremosa con Parmesano Añejado", price: 20 },
      { id: "mediterraneo", name: "Fusilli Salteado con Aceitunas Negras y Cherry", price: 15 },
      { id: "camarones-vino", name: "Al Vino Blanco con Camarones Salteados al Ajo", price: 65 }
    ],
    sizeTitle: "Variedad de Pasta",
    sizes: [
      { id: "espagueti", name: "Espagueti Clásico al Dente", price: 145, desc: "Porción individual generosa." },
      { id: "tagliatelle", name: "Tallarines Caseros al Huevo (Tagliatelle)", price: 160, desc: "Pasta fresca artesanal." }
    ]
  },

  // ==========================================
  // 4. ESPECIALIDADES DEL MAR & LIGEREZA
  // ==========================================
  {
    id: "lomo-atun-sellado",
    name: "Lomo de Atún Sellado con Costra Dorada",
    category: "Del Mar",
    tagline: "Posta de atún con costra dorada y centro jugoso",
    description:
      "Posta fresca de atún sellada al sartén a alta temperatura para lograr una costra dorada aromática y un centro tierno y jugoso. Acompañada de verduras salteadas al olivo.",
    basePrice: 195,
    rating: 4.95,
    reviewsCount: 49,
    image: "https://images.unsplash.com/photo-1501595091296-3aa970afb3ff?auto=format&fit=crop&w=800&q=80",
    prepTime: "6 min",
    tags: ["Atún Fresco", "Alta Proteína", "Sabor Marino"],
    optionsTitle: "Guarnición Incluida",
    fruitOptions: GUARNICIONES,
    sizeTitle: "Porción",
    sizes: [
      { id: "individual", name: "Posta de Atún (250 g) + Guarnición", price: 195, desc: "Porción gourmet completa." }
    ]
  },
  {
    id: "salmon-teriyaki-glaseado",
    name: "Salmón al Estilo Teriyaki Glaseado",
    category: "Del Mar",
    tagline: "Salmón sellado y glaseado con reducción teriyaki agridulce y ajonjolí",
    description:
      "Filete selecto de salmón fresco sellado a la plancha y bañado con reducción artesanal teriyaki agridulce, coronado con ajonjolí tostado y cebollín fino.",
    basePrice: 220,
    rating: 5.0,
    reviewsCount: 68,
    image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=800&q=80",
    isPopular: true,
    prepTime: "6 min",
    tags: ["Salmón Fresco", "Glaseado Casero", "Omega 3"],
    optionsTitle: "Guarnición Recomendada",
    fruitOptions: GUARNICIONES,
    sizeTitle: "Porción",
    sizes: [
      { id: "individual", name: "Filete de Salmón (220 g) + Guarnición", price: 220, desc: "Ideal con Puré de Papa o Arroz." }
    ]
  },
  {
    id: "filete-pescado-finas-hierbas",
    name: "Filete a las Finas Hierbas (Salmón o Pescado Blanco)",
    category: "Del Mar",
    tagline: "Bañado en mantequilla clarificada y selección de finas hierbas",
    description:
      "Corte noble cocinado en su punto justo, aromatizado con mantequilla de rancho, perejil francés, tomillo fresco y vino blanco.",
    basePrice: 175,
    rating: 4.85,
    reviewsCount: 33,
    image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=800&q=80",
    prepTime: "6 min",
    tags: ["Ligero", "Finas Hierbas", "Delicado"],
    optionsTitle: "Guarnición Incluida",
    fruitOptions: GUARNICIONES,
    sizeTitle: "Variedad de Pescado",
    sizes: [
      { id: "pescado-blanco", name: "Filete de Pescado Blanco Fresco", price: 175, desc: "Tierno y suave." },
      { id: "salmon-hierbas", name: "Filete de Salmón Premium", price: 220, desc: "Rico en ácidos grasos saludables." }
    ]
  },
  {
    id: "filete-salsa-verde-tomate",
    name: "Filete en Salsa Verde de Tomate",
    category: "Del Mar",
    tagline: "Cocinado suavemente en salsa verde de tomate con verduras tiernas",
    description:
      "Filete blanco estofado con delicadeza en caldillo esmeralda de tomate verde y cilantro criollo, enriquecido con calabacitas tiernas.",
    basePrice: 165,
    rating: 4.8,
    reviewsCount: 29,
    image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=800&q=80",
    prepTime: "5 min",
    tags: ["Salsa Verde", "Casero", "Bajo en Calorías"],
    optionsTitle: "Guarnición Incluida",
    fruitOptions: GUARNICIONES,
    sizeTitle: "Porción",
    sizes: [
      { id: "individual", name: "Porción Individual + Guarnición", price: 165, desc: "Sabor fresco y ligero." }
    ]
  },

  // ==========================================
  // 5. ENTRADAS SELECTAS & ENSALADAS DE AUTOR
  // ==========================================
  {
    id: "trufas-queso-crema",
    name: "Trufas de Queso Crema Artesanales",
    category: "Entradas & Ensaladas",
    tagline: "Cubiertas de nuez pecana, arándanos dulces, ajonjolí y chabacano",
    description:
      "Bolitas de queso crema suave y sedoso, cuidadosamente cubiertas con nuez pecana seleccionada, arándanos agridulces, ajonjolí tostado y trocitos de chabacano seco. El centro de mesa perfecto para botanear.",
    basePrice: 180,
    rating: 4.9,
    reviewsCount: 55,
    image: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&w=800&q=80",
    isPopular: true,
    prepTime: "Listo para servir",
    tags: ["Bocadillo Gourmet", "Para Compartir", "Artesanal"],
    sizeTitle: "Presentación",
    sizes: [
      { id: "charola-12", name: "Domo con 12 Trufas Surtidas", price: 180, desc: "Para 3-4 personas." },
      { id: "charola-24", name: "Caja de Reunión con 24 Trufas", price: 340, desc: "Para juntas o reuniones de amigos." }
    ]
  },
  {
    id: "rollo-chabacano-enchipotlado",
    name: "Rollo de Queso al Chabacano Enchipotlado",
    category: "Entradas & Ensaladas",
    tagline: "Queso crema bañado en reducción agridulce con sutil toque ahumado",
    description:
      "Cremoso rollo de queso bañado en una reducción artesanal agridulce de chabacano con el balance exacto de chile chipotle ahumado. Acompañado de galletitas saladas finas.",
    basePrice: 165,
    rating: 4.95,
    reviewsCount: 62,
    image: "https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=800&q=80",
    isBestSeller: true,
    prepTime: "Listo para degustar",
    tags: ["Agridulce & Ahumado", "Favorito en Juntas", "Elegante"],
    sizeTitle: "Tamaño",
    sizes: [
      { id: "pieza-completa", name: "Rollo Completo con Galletitas (250 g)", price: 165, desc: "Listo para abrir y compartir." }
    ]
  },
  {
    id: "rollo-frutos-secos-apio",
    name: "Rollo de Queso con Frutos Secos y Apio",
    category: "Entradas & Ensaladas",
    tagline: "Mezcla crocante de frutos secos y tropezones frescos de apio",
    description:
      "Una opción fresca y crujiente: queso crema fundido en frío con nueces, almendras tostadas y trocitos tiernos de apio fresco de huerto. Súper aromático.",
    basePrice: 165,
    rating: 4.8,
    reviewsCount: 31,
    image: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&w=800&q=80",
    prepTime: "Listo para degustar",
    tags: ["Fresco", "Crujiente", "Reuniones"],
    sizeTitle: "Tamaño",
    sizes: [
      { id: "pieza-completa", name: "Rollo Completo con Galletitas (250 g)", price: 165, desc: "Para 4 personas." }
    ]
  },
  {
    id: "ensalada-dulce-cabra",
    name: "Ensalada Dulce con Queso de Cabra [Vegetariana]",
    category: "Entradas & Ensaladas",
    tagline: "Lechugas crujientes, manzana dulce, frutos secos y vinagreta miel-mostaza",
    description:
      "Cama de lechugas frescas crujientes con láminas finas de manzana dulce, frutos secos tostados, queso de cabra artesanal y una vinagreta emulsionada con miel virgen y mostaza Dijon.",
    basePrice: 130,
    rating: 4.9,
    reviewsCount: 48,
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80",
    prepTime: "Preparada al momento",
    tags: ["Vegetariano", "Frescura", "Queso de Cabra"],
    sizeTitle: "Tamaño",
    sizes: [
      { id: "individual", name: "Porción Individual", price: 130, desc: "Como entrada o cena ligera." },
      { id: "bowl-familiar", name: "Bowl Familiar para Compartir", price: 360, desc: "Para 4 personas al centro." }
    ]
  },
  {
    id: "ensalada-hojas-verdes",
    name: "Combinado de Hojas Verdes Frescas [Vegetariana]",
    category: "Entradas & Ensaladas",
    tagline: "Pepino en rodajas, jitomate maduro, aguacate cremoso y aderezo balsámico",
    description:
      "Hojas verdes recién cortadas con rodajas de pepino crujiente, jitomate rojo dulce, abanico de aguacate cremoso y un delicado aderezo balsámico de Módena.",
    basePrice: 110,
    rating: 4.8,
    reviewsCount: 27,
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80",
    prepTime: "Preparada al momento",
    tags: ["Saludable", "Vegetariano", "Aguacate"],
    sizeTitle: "Tamaño",
    sizes: [
      { id: "individual", name: "Porción Individual", price: 110, desc: "Acompañamiento perfecto." },
      { id: "familiar", name: "Bowl Familiar al Centro", price: 290, desc: "Para 4 comensales." }
    ]
  },

  // ==========================================
  // 6. POSTRES ARTESANALES & DULCES CREACIONES
  // ==========================================
  {
    id: "mostachon-artesanal",
    name: "Mostachón de Fresa de la Casa",
    category: "Postres Artesanales",
    tagline: "Merengue crujiente horneado con nuez, crema de queso y fresas frescas",
    description:
      "El postre insignia que nos representa. Base rústica de merengue horneado lentamente con nuez pecana y galleta crujiente, coronado con una suave y ligera nube de queso crema y abundantes fresas frescas de huerto.",
    basePrice: 140,
    rating: 5.0,
    reviewsCount: 148,
    image: "/images/mostachon_artesanal.jpg",
    isBestSeller: true,
    isPopular: true,
    prepTime: "Elaboración artesanal",
    tags: ["Insignia de la Casa", "Nuez Pecana", "Fresas Frescas", "Amor Puro"],
    optionsTitle: "Elige tu corona de fruta",
    fruitOptions: [
      { id: "fresas", name: "Fresas Frescas Tradicionales", price: 0 },
      { id: "frutos-rojos", name: "Frutos Rojos Mixtos (Zarzamora, Frambuesa, Fresa)", price: 25 },
      { id: "mango", name: "Mango Dulce Tropical", price: 20 }
    ],
    sizeTitle: "Presentación",
    sizes: [
      { id: "individual", name: "Porción Individual (Antojo perfecto)", price: 140, desc: "Para consentirte hoy." },
      { id: "mediano", name: "Pastel Mediano (Rinde 6 a 8 personas)", price: 450, desc: "Ideal para la sobremesa familiar." },
      { id: "grande", name: "Pastel Grande para Festejos (10 a 12 rebanadas)", price: 620, desc: "Para celebraciones inolvidables." }
    ]
  },
  {
    id: "pay-limon-helado",
    name: "Pay de Limón Helado Tradicional",
    category: "Postres Artesanales",
    tagline: "Costra de galleta crocante con relleno helado de limón natural",
    description:
      "Cremoso, helado y refrescante para el clima de Playa del Carmen. Costra crujiente de galleta con mantequilla dorada y relleno suave de jugo de limón verde recién exprimido.",
    basePrice: 110,
    rating: 4.95,
    reviewsCount: 92,
    image: "/images/carlota_limon.jpg",
    isBestSeller: true,
    prepTime: "Listo para degustar",
    tags: ["Refrescante", "Favorito de Playa", "Cremoso"],
    sizeTitle: "Tamaño",
    sizes: [
      { id: "individual", name: "Rebanada Generosa Helada", price: 110, desc: "Perfecta después de comer." },
      { id: "entero", name: "Pay Completo Familiar (8 a 10 rebanadas)", price: 340, desc: "Para tener en el congelador." }
    ]
  },
  {
    id: "pan-elote-tierno",
    name: "Pan de Elote Tierno Artesanal",
    category: "Postres Artesanales",
    tagline: "Hecho con elote tierno fresco, esponjoso, húmedo y aromático",
    description:
      "Preparado desde cero desgranando mazorcas de elote tierno fresco. Textura húmeda, aromática y con ese dulzor natural que inunda la cocina de calidez hogareña.",
    basePrice: 95,
    rating: 5.0,
    reviewsCount: 88,
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80",
    isBestSeller: true,
    prepTime: "Horneado diario",
    tags: ["100% Maíz Dulce", "Receta de la Abuela", "Sabor de Hogar"],
    sizeTitle: "Presentación",
    sizes: [
      { id: "individual", name: "Porción Individual Calientita", price: 95, desc: "Ideal con un café de la tarde." },
      { id: "panque-entero", name: "Panqué Completo Familiar (8 porciones)", price: 320, desc: "El desayuno o merienda soñado." }
    ]
  },
  {
    id: "pay-platano-nuez-cajeta",
    name: "Pay de Plátano, Nuez y Cajeta Tradicional",
    category: "Postres Artesanales",
    tagline: "Plátano fresco con cajeta tradicional mexicana, nuez y crema batida",
    description:
      "Costra de galleta dorada con abundante cajeta tradicional de leche de cabra, rodajas de plátano fresco, lluvia de nuez tostada y corona de crema batida ligera.",
    basePrice: 125,
    rating: 4.9,
    reviewsCount: 74,
    image: "/images/pay_platano.jpg",
    isPopular: true,
    prepTime: "Listo para degustar",
    tags: ["Cajeta Mexicana", "Plátano Fresco", "Puro Placer"],
    sizeTitle: "Tamaño",
    sizes: [
      { id: "individual", name: "Rebanada Individual", price: 125, desc: "Súper consentidora." },
      { id: "entero", name: "Pay Entero Familiar (8 porciones)", price: 380, desc: "Para sorprender a tus invitados." }
    ]
  },
  {
    id: "flan-tradicional-casero",
    name: "Flan Tradicional Casero",
    category: "Postres Artesanales",
    tagline: "Textura suave y cremosa con delicioso baño de caramelo dorado al punto",
    description:
      "Flan de leche y huevos frescos cocinado a baño maría con paciencia infinita. Terso, sin grumos y con un caramelo líquido dorado que abraza cada cucharada.",
    basePrice: 85,
    rating: 4.9,
    reviewsCount: 61,
    image: "https://images.unsplash.com/photo-1528975604071-b4dc52a2d18c?auto=format&fit=crop&w=800&q=80",
    prepTime: "Listo para desmoldar",
    tags: ["Clásico", "Caramelo de Olla", "Suavidad Pura"],
    sizeTitle: "Tamaño",
    sizes: [
      { id: "individual", name: "Copa / Porción Individual", price: 85, desc: "Para terminar la comida feliz." },
      { id: "familiar", name: "Flan Completo Familiar (8 personas)", price: 310, desc: "El postre del domingo." }
    ]
  },
  {
    id: "pastel-tres-leches-dulce",
    name: "Pastel Tres Leches con Dulce de Leche",
    category: "Postres Artesanales",
    tagline: "Bizcocho embebido en jarabe de tres leches y generoso dulce de leche",
    description:
      "Bizcocho esponjoso sumamente húmedo, bañado en nuestra infusión secreta de tres leches y cubierto con una capa generosa de dulce de leche artesanal de olla.",
    basePrice: 135,
    rating: 4.95,
    reviewsCount: 110,
    image: "/images/tres_leches_cake.jpg",
    prepTime: "Elaboración artesanal",
    tags: ["Húmedo & Dulce", "Dulce de Leche", "Celebración"],
    sizeTitle: "Presentación",
    sizes: [
      { id: "individual", name: "Rebanada Generosa", price: 135, desc: "Bañada al punto exacto." },
      { id: "mediano", name: "Pastel Mediano (6 a 8 personas)", price: 420, desc: "Para cumpleaños en casa." },
      { id: "grande", name: "Pastel Grande (12 a 15 rebanadas)", price: 600, desc: "Para celebrar en grande." }
    ]
  },
  {
    id: "tiramisu-clasico",
    name: "Tiramisú Clásico al Café de Grano",
    category: "Postres Artesanales",
    tagline: "Soletillas embebidas en café de grano y licor con crema de queso y cacao",
    description:
      "Elaborado con soletillas caseras empapadas en auténtico café espresso recién extraído y licor aromático, alternadas con capas sedosas de crema de queso y fina lluvia de cacao puro.",
    basePrice: 155,
    rating: 4.95,
    reviewsCount: 82,
    image: "/images/tiramisu_autor.jpg",
    isPopular: true,
    prepTime: "Listo para disfrutar",
    tags: ["Café de Grano", "Crema de Queso", "Elegante"],
    sizeTitle: "Presentación",
    sizes: [
      { id: "individual", name: "Copa Individual Gourmet", price: 155, desc: "Para una sobremesa perfecta." },
      { id: "charola-familiar", name: "Charola Familiar (6 a 8 porciones)", price: 490, desc: "Para compartir con café." }
    ]
  },
  {
    id: "pastel-zanahoria-betun",
    name: "Pastel de Zanahoria con Betún de Queso Crema",
    category: "Postres Artesanales",
    tagline: "Bizcocho especiado con canela y nuez, cubierto con betún suave de queso",
    description:
      "Bizcocho húmedo y especiado con canela, nuez tostada picada y zanahoria fresca rallada, cubierto y relleno de un betún sedoso de queso crema sin exceso de azúcar.",
    basePrice: 130,
    rating: 4.9,
    reviewsCount: 67,
    image: "https://images.unsplash.com/photo-1557308536-ee471ef2c390?auto=format&fit=crop&w=800&q=80",
    isPopular: true,
    prepTime: "Elaboración artesanal",
    tags: ["Especiado", "Nuez Tostada", "Betún de Queso"],
    sizeTitle: "Presentación",
    sizes: [
      { id: "individual", name: "Rebanada Individual", price: 130, desc: "Deliciosa y reconfortante." },
      { id: "entero", name: "Pastel Completo para Vitrina / Fiesta (10 rebanadas)", price: 430, desc: "El consentido de las cafeterías." }
    ]
  },
  {
    id: "nuit-chocolate-envinado",
    name: "Nuit de Chocolate Envinado / Tronco",
    category: "Postres Artesanales",
    tagline: "Bizcocho de chocolate semiamargo con licor aromático y relleno aterciopelado",
    description:
      "Para los verdaderos amantes del buen chocolate: bizcocho húmedo de cacao semiamargo, humedecido con licor aromático y relleno de ganache aterciopelado. Intenso y elegante.",
    basePrice: 160,
    rating: 5.0,
    reviewsCount: 79,
    image: "/images/nuit_de_chocolate.jpg",
    prepTime: "Listo para degustar",
    tags: ["Cacao Intenso", "Envinado", "Gourmet"],
    sizeTitle: "Presentación",
    sizes: [
      { id: "individual", name: "Porción Individual", price: 160, desc: "Densidad y sabor profundo." },
      { id: "entero", name: "Tronco / Pastel Completo (8 a 10 pax)", price: 510, desc: "Para los momentos especiales." }
    ]
  },
  {
    id: "red-velvet-gourmet",
    name: "Red Velvet Gourmet con Queso Dulce",
    category: "Postres Artesanales",
    tagline: "Elegante bizcocho aterciopelado color rubí con suave relleno de queso",
    description:
      "Bizcocho clásico de miga suave y terciopelo rojo con un toque sutil de cacao, relleno y cubierto de una crema batida de queso dulce equilibrado.",
    basePrice: 140,
    rating: 4.85,
    reviewsCount: 54,
    image: "https://images.unsplash.com/photo-1586788680434-30d324b2d46f?auto=format&fit=crop&w=800&q=80",
    prepTime: "Elaboración artesanal",
    tags: ["Red Velvet", "Elegante", "Color Rubí"],
    sizeTitle: "Presentación",
    sizes: [
      { id: "individual", name: "Rebanada Individual", price: 140, desc: "Textura aterciopelada." },
      { id: "entero", name: "Pastel Completo (8 a 10 pax)", price: 460, desc: "Para aniversarios y festejos." }
    ]
  }
];

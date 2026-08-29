export const CATEGORIES = [
  "Todos",
  "Mostachón",
  "Chocolatería",
  "Postres de Autor",
  "Clásicos",
  "Carlotas & Vasitos",
  "Pays & Panqués",
  "Salados Veracruzanos"
];

export const PRODUCTS = [
  {
    id: "mostachon-artesanal",
    name: "Mostachón Artesanal",
    category: "Mostachón",
    tagline: "Nuez y frutos rojos de temporada",
    description:
      "El equilibrio perfecto entre lo crujiente y lo cremoso. Una base rústica de merengue horneado lentamente con trozos de nuez tostada, coronada con una suave y rica crema de queso batida. Una experiencia táctil y de sabor inigualable que evoca recuerdos con cada bocado.",
    basePrice: 140,
    rating: 4.9,
    reviewsCount: 128,
    image: "/images/mostachon_artesanal.jpg",
    isBestSeller: true,
    prepTime: "20 - 30 min",
    tags: ["Artesanal", "Firma de Autor", "Fresco"],
    fruitOptions: [
      { id: "fresas", name: "Fresas Frescas", price: 0 },
      { id: "rojos", name: "Frutos Rojos", price: 20 },
      { id: "mango", name: "Mango Tropical", price: 15 },
      { id: "durazno", name: "Durazno Aterciopelado", price: 15 }
    ],
    sizes: [
      { id: "individual", name: "Porción Individual", price: 140, desc: "Ideal para un antojo personal." },
      { id: "mediano", name: "Pastel Mediano", price: 420, desc: "Rinde aproximadamente de 6 a 8 rebanadas." },
      { id: "grande", name: "Pastel Grande Fiesta", price: 590, desc: "Rinde aproximadamente de 12 a 15 rebanadas." }
    ]
  },
  {
    id: "nuit-de-chocolate",
    name: "Nuit de Chocolate",
    category: "Chocolatería",
    tagline: "Cacao puro 70% con notas de café",
    description:
      "Cacao premium 70%, bizcocho húmedo de fudge artesanal y ganache sedoso con un baño de glaseado espejo y láminas de oro comestible. Un homenaje a la sofisticación chocolatera.",
    basePrice: 185,
    rating: 5.0,
    reviewsCount: 94,
    image: "/images/nuit_de_chocolate.jpg",
    isPopular: true,
    prepTime: "15 - 20 min",
    tags: ["Gourmet", "Oscuro", "70% Cacao"],
    sizes: [
      { id: "individual", name: "Rebanada Gourmet", price: 185, desc: "Porción individual generosa y densa." },
      { id: "entero", name: "Pastel Completo (8-10 pax)", price: 520, desc: "Ideal para amantes del chocolate oscuro." }
    ]
  },
  {
    id: "tiramisu-tradicional",
    name: "Tiramisú Tradicional",
    category: "Postres de Autor",
    tagline: "Mascarpone italiano y espresso de autor",
    description:
      "Auténtica receta italiana infusionada con un toque de café de altura veracruzano. Capas de soletillas artesanales empapadas en espresso, crema de mascarpone batida al punto y fina lluvia de cacao.",
    basePrice: 160,
    rating: 4.8,
    reviewsCount: 76,
    image: "/images/tiramisu_autor.jpg",
    isPopular: true,
    prepTime: "15 min",
    tags: ["Clásico", "Café Veracruz", "De Autor"],
    sizes: [
      { id: "individual", name: "Copa de Cristal Individual", price: 160, desc: "Presentación elegante en copa." },
      { id: "familiar", name: "Charola Familiar (6 pax)", price: 480, desc: "Para compartir en sobremesa." }
    ]
  },
  {
    id: "tres-leches-papantla",
    name: "Tres Leches con Vainilla de Papantla",
    category: "Clásicos",
    tagline: "Receta tradicional con vainilla de Papantla",
    description:
      "Bizcocho esponjoso sumamente húmedo bañado en la clásica mezcla de tres leches perfumada con vaina de vainilla natural originaria de Papantla, Veracruz. Coronada con crema chantilly artesanal.",
    basePrice: 135,
    rating: 4.9,
    reviewsCount: 112,
    image: "/images/tres_leches_cake.jpg",
    prepTime: "15 - 20 min",
    tags: ["Tradición", "Artesanal", "Papantla"],
    sizes: [
      { id: "individual", name: "Rebanada Generosa", price: 135, desc: "Bañada al instante con leches cremosas." },
      { id: "mediano", name: "Pastel Mediano (6-8 pax)", price: 390, desc: "El clásico de los cumpleaños en casa." }
    ]
  },
  {
    id: "volovan-jaiba",
    name: "Volován de Jaiba a la Veracruzana",
    category: "Salados Veracruzanos",
    tagline: "Hojaldre crujiente relleno de jaiba fresca",
    description:
      "Un homenaje directo a nuestras raíces en Veracruz. Cientos de capas crujientes y doradas de masa hojaldrada hecha a mano, rellenas de jaiba suave guisada a la veracruzana con jitomate, aceitunas y alcaparras.",
    basePrice: 85,
    rating: 4.95,
    reviewsCount: 88,
    image: "/images/volovan_jaiba.jpg",
    prepTime: "10 - 15 min",
    tags: ["Veracruz", "Hojaldre Crujiente", "Especialidad"],
    sizes: [
      { id: "individual", name: "1 Pieza Artesanal", price: 85, desc: "Recién horneado, crujiente y caliente." },
      { id: "pack4", name: "Caja con 4 Volovanes", price: 320, desc: "Ideal para el desayuno o reunión." }
    ]
  },
  {
    id: "carlota-limon",
    name: "Carlota de Limón en Vasito",
    category: "Carlotas & Vasitos",
    tagline: "Crema de limón y galleta María",
    description:
      "Refrescante postre en formato individual. Capas de crema tersa de limón natural batido con leche condensada, alternadas con galletas María doradas y ralladura de lima fresca.",
    basePrice: 75,
    rating: 4.8,
    reviewsCount: 65,
    image: "/images/carlota_limon.jpg",
    prepTime: "10 min",
    tags: ["Refrescante", "Individual", "Cremoso"],
    sizes: [
      { id: "individual", name: "Vasito Individual", price: 75, desc: "Fresco y listo para disfrutar." },
      { id: "pack4", name: "Pack de 4 Vasitos", price: 260, desc: "Perfecto para postre después de comer." }
    ]
  },
  {
    id: "pay-platano",
    name: "Pay de Plátano & Dulce de Leche",
    category: "Pays & Panqués",
    tagline: "Cajeta artesanal, plátano fresco y chantilly",
    description:
      "Costra crujiente de galleta con mantequilla horneada, suave cama de dulce de leche artesanal, plátanos maduros rebanados y generosa crema chantilly espolvoreada con cacao y virutas de chocolate.",
    basePrice: 125,
    rating: 4.9,
    reviewsCount: 71,
    image: "/images/pay_platano.jpg",
    prepTime: "15 min",
    tags: ["Casero", "Cajeta", "Favorito"],
    sizes: [
      { id: "individual", name: "Rebanada", price: 125, desc: "Porción individual." },
      { id: "entero", name: "Pay Completo (8 pax)", price: 380, desc: "Pay entero para celebraciones." }
    ]
  }
];

import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { PRODUCTS } from '../data/products';

export const HomeView = () => {
  const { setSelectedProductForModal, addToCart, setActiveTab } = useCart();
  const [openFaq, setOpenFaq] = useState(null);
  const [guisadoFilter, setGuisadoFilter] = useState('todos');

  // Featured products from data
  const tingaProduct = PRODUCTS.find((p) => p.id === 'tinga-casera-pollo') || PRODUCTS[0];
  const lomoProduct = PRODUCTS.find((p) => p.id === 'lomo-coca-cola') || PRODUCTS[1];
  const pastelPapaProduct = PRODUCTS.find((p) => p.id === 'pastel-papa-picadillo') || PRODUCTS[2];
  const packSemanaProduct = PRODUCTS.find((p) => p.id === 'pack-semana-ligera') || PRODUCTS[0];

  const mostachonProduct = PRODUCTS.find((p) => p.id === 'mostachon-artesanal') || PRODUCTS[5];
  const tresLechesProduct = PRODUCTS.find((p) => p.id === 'pastel-tres-leches-dulce') || PRODUCTS[6];
  const panEloteProduct = PRODUCTS.find((p) => p.id === 'pan-elote-tierno') || PRODUCTS[7];
  const payLimonProduct = PRODUCTS.find((p) => p.id === 'pay-limon-helado') || PRODUCTS[8];

  const handleQuickAdd = (e, product) => {
    e.stopPropagation();
    addToCart({
      productId: product.id,
      name: product.name,
      sizeId: product.sizes ? product.sizes[0].id : 'individual',
      sizeName: product.sizes ? product.sizes[0].name : 'Porción',
      fruitId: product.fruitOptions ? product.fruitOptions[0].id : null,
      fruitName: product.fruitOptions ? product.fruitOptions[0].name : null,
      price: product.basePrice,
      quantity: 1,
      image: product.image
    });
  };

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="flex flex-col w-full bg-surface">
      {/* ========================================================================= */}
      {/* 1. HERO SECTION: Emotional culinary warmth & instant family nostalgia    */}
      {/* ========================================================================= */}
      <section className="relative w-full overflow-hidden bg-surface py-space-lg lg:py-space-xl">
        {/* Ambient Warm Culinary Glow Behind Split Layout */}
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-secondary-container/20 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute top-1/2 right-0 w-80 h-80 bg-tertiary-fixed/30 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-[1360px] mx-auto px-margin-mobile lg:px-margin relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter lg:gap-space-xl items-center">
            {/* Left Column: Emotional Storytelling & High-Intent Action */}
            <div className="lg:col-span-6 flex flex-col items-start gap-space-md">
              {/* Eyebrow Pill Badge */}
              <div className="inline-flex items-center gap-space-xs px-space-md py-space-xs rounded-full bg-surface-container-high text-primary-container shadow-sm">
                <span className="material-symbols-outlined text-[16px] text-secondary">favorite</span>
                <span className="font-label-sm text-label-sm uppercase tracking-wider font-bold">
                  BIENVENIDO A LA FAMILIA BY ROMI
                </span>
              </div>

              {/* Editorial Headline */}
              <h1 className="font-display-lg text-display-lg-mobile lg:text-display-lg text-primary tracking-tight leading-tight">
                El apapacho de una comida hecha en casa, listo en tu mesa en{' '}
                <span className="italic text-secondary">10 minutos</span>.
              </h1>

              {/* Body Copy */}
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
                Resolvemos tus comidas diarias con guisados caseros congelados al vacío y repostería de antaño cocinados a fuego lento, con ingredientes 100% naturales y precio justo en Playa del Carmen.
              </p>

              {/* Dual CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-space-sm w-full pt-space-xs">
                <button
                  onClick={() => {
                    const el = document.getElementById('guisados-congelados');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="inline-flex items-center justify-center gap-space-xs px-space-lg py-space-sm rounded-full bg-primary-container text-on-primary font-label-lg text-label-lg shadow-md hover:bg-primary transition-all group"
                >
                  <span>Explorar Guisados</span>
                  <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </button>

                <button
                  onClick={() => {
                    const el = document.getElementById('reposteria-artesanal');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="inline-flex items-center justify-center gap-space-xs px-space-lg py-space-sm rounded-full bg-secondary text-on-secondary font-label-lg text-label-lg shadow-md hover:bg-on-secondary-container transition-all"
                >
                  <span>Quiero un Antojo Dulce 🍰</span>
                </button>
              </div>

              {/* 3 Micro-Trust Badges */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-space-sm w-full pt-space-md mt-space-xs border-t-0">
                <div className="flex items-center gap-space-xs p-space-xs rounded-lg bg-surface-container-lowest shadow-sm border border-outline-variant/20">
                  <span className="material-symbols-outlined text-secondary text-[20px]">eco</span>
                  <span className="font-label-md text-label-md text-on-surface">100% Ingredientes Naturales</span>
                </div>
                <div className="flex items-center gap-space-xs p-space-xs rounded-lg bg-surface-container-lowest shadow-sm border border-outline-variant/20">
                  <span className="material-symbols-outlined text-secondary text-[20px]">timer</span>
                  <span className="font-label-md text-label-md text-on-surface">Listo en 8-10 Minutos</span>
                </div>
                <div className="flex items-center gap-space-xs p-space-xs rounded-lg bg-surface-container-lowest shadow-sm border border-outline-variant/20">
                  <span className="material-symbols-outlined text-secondary text-[20px]">verified_user</span>
                  <span className="font-label-md text-label-md text-on-surface">Cero Conservadores</span>
                </div>
              </div>
            </div>

            {/* Right Column: Visual Composite with Real Brand Images */}
            <div className="lg:col-span-6 relative flex items-center justify-center pt-space-md lg:pt-0">
              <div className="relative w-full max-w-lg">
                {/* Hero Savory Centerpiece Image */}
                <div className="relative rounded-2xl overflow-hidden shadow-[0_16px_36px_-6px_rgba(59,39,30,0.18)] bg-surface-container-lowest p-2">
                  <div className="rounded-xl overflow-hidden aspect-[4/3] relative">
                    <img
                      alt="Cazuela de barro artesanal con guisados caseros y albóndigas humeantes"
                      className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                      src="/images/cazuela_romi.jpg"
                    />
                    {/* Subtle steam & badge overlay */}
                    <div className="absolute top-3 left-3 bg-surface-container-lowest/90 backdrop-blur-sm px-space-sm py-1 rounded-full shadow-sm flex items-center gap-1">
                      <span className="material-symbols-outlined text-secondary text-[16px]">soup_kitchen</span>
                      <span className="font-label-sm text-label-sm text-primary font-bold">Hecho a fuego lento</span>
                    </div>
                    <div className="absolute bottom-3 right-3 bg-primary-container/85 backdrop-blur-sm text-tertiary-fixed px-space-sm py-1 rounded-md shadow-sm text-label-sm font-label-sm">
                      100% Artesanal Playa del Carmen
                    </div>
                  </div>
                </div>

                {/* Floating Pastry Card Inset (Organic Overlap) */}
                <div
                  onClick={() => setSelectedProductForModal(tresLechesProduct)}
                  className="absolute -bottom-8 -left-6 sm:-left-10 w-48 sm:w-60 bg-surface-container-lowest rounded-xl p-space-xs shadow-[0_12px_28px_-4px_rgba(59,39,30,0.16)] flex flex-col gap-1 z-20 transform hover:-translate-y-1 transition-transform cursor-pointer border border-outline-variant/30"
                >
                  <div className="relative rounded-lg overflow-hidden aspect-[4/3]">
                    <img
                      alt="Pastel tres leches con dulce de leche artesanal y merengue tostado"
                      className="w-full h-full object-cover"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuBxQoETJ1SZ-J0FEKW4KusreWovXXNFNTENF-XrDXwiBs6B_McUAJM3b9GjutQhomV15faT7oKR0cPzlFyoru_YOTKXx4Z0ywuOfcniX08SDt29zzH0nRSbJoEz7UTyi5khEzmj_2tD8UZlz48JBtjPOPoESORRzYLtpV4EZsK9C1MR75HP8daq516CZQBrsfe-m8sYNrTL8PygjsL4aMFByIkq-4Gts83hn96Xt2GUjYJ5DZ-q8bjc"
                    />
                    <div className="absolute top-1 right-1 bg-secondary text-on-secondary text-[10px] font-bold px-1.5 py-0.5 rounded-full uppercase">
                      Receta Abuela
                    </div>
                  </div>
                  <div className="px-1 py-0.5 flex items-center justify-between">
                    <div>
                      <p className="font-label-md text-label-md text-primary font-bold leading-tight">Tres Leches Romi</p>
                      <p className="font-body-sm text-body-sm text-secondary font-medium">$135 porción</p>
                    </div>
                    <span className="material-symbols-outlined text-tertiary-fixed-dim text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                      star
                    </span>
                  </div>
                </div>

                {/* Decorative Authentic Wax Stamp Graphic */}
                <div className="absolute -top-4 -right-4 w-20 h-20 rounded-full bg-tertiary-fixed text-primary-container flex flex-col items-center justify-center p-2 text-center shadow-md rotate-12 z-20 pointer-events-none">
                  <span className="font-label-sm text-[9px] uppercase tracking-wider font-extrabold leading-none">Sazón de</span>
                  <span className="font-headline-sm text-headline-sm font-bold text-secondary leading-none my-0.5">Familia</span>
                  <span className="font-label-sm text-[8px] uppercase tracking-widest text-on-tertiary-fixed-variant leading-none">1987</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. VALUE PILLARS: Why choose By Romi (Honesty, Speed, Real Flavor)         */}
      {/* ========================================================================= */}
      <section className="w-full bg-surface-container-low py-space-xl" id="nuestra-cocina">
        <div className="max-w-[1360px] mx-auto px-margin-mobile lg:px-margin">
          <div className="text-center max-w-2xl mx-auto mb-space-lg">
            <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest font-bold">
              CUIDAMOS CADA DETALLE
            </span>
            <h2 className="font-headline-lg text-headline-lg-mobile lg:text-headline-lg text-primary mt-space-xs">
              Cocina honesta, sin atajos ni químicos
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant mt-space-xs">
              Sabemos que el ritmo de la semana es demandante. Por eso preparamos cada guisado tal como lo harías tú en un domingo con tiempo libre.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            {/* Pillar 1 */}
            <div className="bg-surface-container-lowest p-space-lg rounded-2xl shadow-[0_4px_16px_-2px_rgba(59,39,30,0.05)] hover:shadow-[0_12px_28px_-4px_rgba(59,39,30,0.09)] transition-all flex flex-col gap-space-sm group border border-outline-variant/20">
              <div className="w-12 h-12 rounded-xl bg-surface-container-high flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-on-secondary transition-colors">
                <span className="material-symbols-outlined text-[26px]">skillet</span>
              </div>
              <h3 className="font-title-md text-title-md text-primary font-semibold">Sazón de Hogar Real</h3>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Recetas familiares tradicionales de generaciones. Sofrito con jitomate maduro, caldos espesados a fuego lento y sazón equilibrada. Cero cubos concentrados o espesantes artificiales.
              </p>
              <div className="mt-auto pt-space-xs flex items-center gap-space-xs text-secondary font-label-md text-label-md">
                <span>Sabor 100% auténtico</span>
                <span className="material-symbols-outlined text-[16px]">check_circle</span>
              </div>
            </div>

            {/* Pillar 2 */}
            <div className="bg-surface-container-lowest p-space-lg rounded-2xl shadow-[0_4px_16px_-2px_rgba(59,39,30,0.05)] hover:shadow-[0_12px_28px_-4px_rgba(59,39,30,0.09)] transition-all flex flex-col gap-space-sm group border border-outline-variant/20">
              <div className="w-12 h-12 rounded-xl bg-primary-fixed flex items-center justify-center text-primary-container group-hover:bg-primary-container group-hover:text-on-primary transition-colors">
                <span className="material-symbols-outlined text-[26px]">all_inclusive</span>
              </div>
              <h3 className="font-title-md text-title-md text-primary font-semibold">Del Congelador al Plato</h3>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Olvídate de lavar ollas, deshebrar carne o picar cebolla un martes por la noche. Empacado al vacío grado alimenticio que bloquea el sabor fresco y se regenera en agua hirviendo o microondas.
              </p>
              <div className="mt-auto pt-space-xs flex items-center gap-space-xs text-primary font-label-md text-label-md">
                <span>Sin trastes sucios en 8 min</span>
                <span className="material-symbols-outlined text-[16px]">bolt</span>
              </div>
            </div>

            {/* Pillar 3 */}
            <div className="bg-surface-container-lowest p-space-lg rounded-2xl shadow-[0_4px_16px_-2px_rgba(59,39,30,0.05)] hover:shadow-[0_12px_28px_-4px_rgba(59,39,30,0.09)] transition-all flex flex-col gap-space-sm group border border-outline-variant/20">
              <div className="w-12 h-12 rounded-xl bg-tertiary-fixed flex items-center justify-center text-on-tertiary-fixed-variant group-hover:bg-tertiary-container group-hover:text-tertiary-fixed transition-colors">
                <span className="material-symbols-outlined text-[26px]">savings</span>
              </div>
              <h3 className="font-title-md text-title-md text-primary font-semibold">Alta Calidad a Precio Justo</h3>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Porciones abundantes y sinceras (individuales y familiares de 1 Kg para compartir en casa). Costeo directo desde cocina de Romi, sin comisiones infladas del 30% de apps de delivery.
              </p>
              <div className="mt-auto pt-space-xs flex items-center gap-space-xs text-secondary font-label-md text-label-md">
                <span>Comes rico, rindes más</span>
                <span className="material-symbols-outlined text-[16px]">price_check</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. DUAL-LINE PRODUCT SHOWCASE (Frozen Savory, Sweet Bakery & Box Lunch)   */}
      {/* ========================================================================= */}
      <section className="w-full bg-surface py-space-xl" id="guisados-congelados">
        <div className="max-w-[1360px] mx-auto px-margin-mobile lg:px-margin flex flex-col gap-space-xl">
          {/* Category 1 Header: Guisados Caseros Congelados */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-sm pb-space-sm border-b border-surface-container">
            <div>
              <div className="inline-flex items-center gap-space-xs text-primary font-label-sm text-label-sm uppercase tracking-widest font-bold">
                <span className="material-symbols-outlined text-[16px] text-secondary">ac_unit</span>
                <span>Línea Frío Protegido • Al Vacío</span>
              </div>
              <h2 className="font-headline-lg text-headline-lg-mobile lg:text-headline-lg text-primary mt-1">
                Guisados Caseros Congelados
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant mt-1">
                Bolsas herméticas libres de BPA. Conservan textura, jugosidad y aroma intacto durante 90 días en tu congelador.
              </p>
            </div>

            {/* Fast Filter Tabs */}
            <div className="flex items-center gap-space-xs overflow-x-auto pb-1">
              <button
                onClick={() => setGuisadoFilter('todos')}
                className={`px-space-md py-1.5 rounded-full font-label-md text-label-md whitespace-nowrap transition-colors ${
                  guisadoFilter === 'todos'
                    ? 'bg-primary text-on-primary font-bold'
                    : 'bg-surface-container-high text-on-surface-variant hover:bg-surface-container'
                }`}
              >
                Todos los Guisados
              </button>
              <button
                onClick={() => setActiveTab('menu')}
                className="px-space-md py-1.5 rounded-full bg-surface-container-high text-on-surface-variant font-label-md text-label-md whitespace-nowrap hover:bg-surface-container"
              >
                Ver Menú Completo ➔
              </button>
            </div>
          </div>

          {/* Guisados Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter">
            {/* Guisado 1: Tinga Casera */}
            <div
              onClick={() => setSelectedProductForModal(tingaProduct)}
              className="bg-surface-container-lowest rounded-2xl p-space-sm shadow-sm hover:shadow-md transition-all flex flex-col justify-between border border-outline-variant/20 cursor-pointer group"
            >
              <div className="relative rounded-xl overflow-hidden aspect-[4/3] bg-surface-container">
                <img
                  alt="Tinga Casera de Pollo jugosa con chipotle suave"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCSugj9dBZ6PEFWmtn-bDFJfy3dtwSqpz7Cb_z9GGuuHIseyV4Hc0thcCkQic-lJkJCIWgckpz6Hirii4WgrQGip0VnTy0pkQ9P9eTncOTtTzn9ooceGWn4gPYBCcL1mKihulaVgglCbdI_VR8meR1AsP9k9WvP5k7YqfaGblnkmI0Uxf-_woZCaDtoPEibQQE26Z_Nt9Ri6yhE_TdnyeBRNL5Y1KD2bbKgHf2vjy46e1bWKUMZxTc2"
                />
                <span className="absolute top-2 left-2 bg-surface-container-lowest/90 backdrop-blur-sm text-primary text-label-sm font-label-sm font-bold px-2 py-0.5 rounded-full">
                  Individual / Kilo
                </span>
                <span className="absolute bottom-2 right-2 bg-primary-container text-on-primary text-[11px] font-semibold px-2 py-0.5 rounded-md flex items-center gap-1">
                  <span className="material-symbols-outlined text-[13px]">timer</span> 5-7 min
                </span>
              </div>
              <div className="pt-space-sm flex flex-col gap-1 flex-1">
                <h4 className="font-title-md text-title-md text-primary font-semibold group-hover:text-secondary transition-colors">
                  Tinga Casera de Pollo
                </h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2 leading-relaxed">
                  Pechuga fresca deshebrada con cebollita caramelizada en caldillo de jitomate y toque suave de chipotle.
                </p>
              </div>
              <div className="pt-space-md mt-space-sm flex items-center justify-between border-t border-surface-container/60">
                <div>
                  <span className="font-headline-sm text-headline-sm text-secondary font-bold">$140</span>
                  <span className="font-label-sm text-[10px] text-on-surface-variant uppercase ml-1">MXN</span>
                </div>
                <button
                  onClick={(e) => handleQuickAdd(e, tingaProduct)}
                  className="px-space-md py-1.5 rounded-full bg-primary-container text-on-primary font-label-md text-label-md hover:bg-primary transition-colors flex items-center gap-1 shadow-sm"
                >
                  <span className="material-symbols-outlined text-[16px]">add_shopping_cart</span>
                  <span>Pedir</span>
                </button>
              </div>
            </div>

            {/* Guisado 2: Lomo a la Coca-Cola Glaseada */}
            <div
              onClick={() => setSelectedProductForModal(lomoProduct)}
              className="bg-surface-container-lowest rounded-2xl p-space-sm shadow-sm hover:shadow-md transition-all flex flex-col justify-between border border-outline-variant/20 cursor-pointer group"
            >
              <div className="relative rounded-xl overflow-hidden aspect-[4/3] bg-surface-container">
                <img
                  alt="Lomo a la Coca-Cola Glaseada tierno"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80"
                />
                <span className="absolute top-2 left-2 bg-secondary text-on-secondary text-label-sm font-label-sm font-bold px-2 py-0.5 rounded-full">
                  Más Vendido
                </span>
                <span className="absolute bottom-2 right-2 bg-primary-container text-on-primary text-[11px] font-semibold px-2 py-0.5 rounded-md flex items-center gap-1">
                  <span className="material-symbols-outlined text-[13px]">timer</span> 7 min
                </span>
              </div>
              <div className="pt-space-sm flex flex-col gap-1 flex-1">
                <h4 className="font-title-md text-title-md text-primary font-semibold group-hover:text-secondary transition-colors">
                  Lomo a la Coca-Cola Glaseada
                </h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2 leading-relaxed">
                  Carne tierna que se deshace al tenedor, horneada lentamente y bañada en salsa caramelizada y especiada.
                </p>
              </div>
              <div className="pt-space-md mt-space-sm flex items-center justify-between border-t border-surface-container/60">
                <div>
                  <span className="font-headline-sm text-headline-sm text-secondary font-bold">$165</span>
                  <span className="font-label-sm text-[10px] text-on-surface-variant uppercase ml-1">MXN</span>
                </div>
                <button
                  onClick={(e) => handleQuickAdd(e, lomoProduct)}
                  className="px-space-md py-1.5 rounded-full bg-primary-container text-on-primary font-label-md text-label-md hover:bg-primary transition-colors flex items-center gap-1 shadow-sm"
                >
                  <span className="material-symbols-outlined text-[16px]">add_shopping_cart</span>
                  <span>Pedir</span>
                </button>
              </div>
            </div>

            {/* Guisado 3: Pastel de Papa y Picadillo */}
            <div
              onClick={() => setSelectedProductForModal(pastelPapaProduct)}
              className="bg-surface-container-lowest rounded-2xl p-space-sm shadow-sm hover:shadow-md transition-all flex flex-col justify-between border border-outline-variant/20 cursor-pointer group"
            >
              <div className="relative rounded-xl overflow-hidden aspect-[4/3] bg-surface-container">
                <img
                  alt="Pastel de Papa y Picadillo Casero dorado"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  src="https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80"
                />
                <span className="absolute top-2 left-2 bg-surface-container-lowest/90 backdrop-blur-sm text-primary text-label-sm font-label-sm font-bold px-2 py-0.5 rounded-full">
                  Favorito Familiar
                </span>
                <span className="absolute bottom-2 right-2 bg-primary-container text-on-primary text-[11px] font-semibold px-2 py-0.5 rounded-md flex items-center gap-1">
                  <span className="material-symbols-outlined text-[13px]">timer</span> 8 min
                </span>
              </div>
              <div className="pt-space-sm flex flex-col gap-1 flex-1">
                <h4 className="font-title-md text-title-md text-primary font-semibold group-hover:text-secondary transition-colors">
                  Pastel de Papa y Picadillo
                </h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2 leading-relaxed">
                  Capas de puré de papa terso con mantequilla, relleno de carne molida sazonada y gratinado en horno.
                </p>
              </div>
              <div className="pt-space-md mt-space-sm flex items-center justify-between border-t border-surface-container/60">
                <div>
                  <span className="font-headline-sm text-headline-sm text-secondary font-bold">$150</span>
                  <span className="font-label-sm text-[10px] text-on-surface-variant uppercase ml-1">MXN</span>
                </div>
                <button
                  onClick={(e) => handleQuickAdd(e, pastelPapaProduct)}
                  className="px-space-md py-1.5 rounded-full bg-primary-container text-on-primary font-label-md text-label-md hover:bg-primary transition-colors flex items-center gap-1 shadow-sm"
                >
                  <span className="material-symbols-outlined text-[16px]">add_shopping_cart</span>
                  <span>Pedir</span>
                </button>
              </div>
            </div>

            {/* Guisado 4: Paquete Semana Ligera */}
            <div
              onClick={() => setSelectedProductForModal(packSemanaProduct)}
              className="bg-surface-container-high/60 rounded-2xl p-space-sm shadow-sm hover:shadow-md transition-all flex flex-col justify-between border-2 border-secondary/40 cursor-pointer group relative overflow-hidden"
            >
              <div className="relative rounded-xl overflow-hidden aspect-[4/3] bg-surface-container">
                <img
                  alt="Pack Semana Ligera con 5 comidas completas"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  src="/images/pack_congelados.jpg"
                />
                <span className="absolute top-2 left-2 bg-secondary text-on-secondary text-label-sm font-label-sm font-bold px-2 py-0.5 rounded-full">
                  5 Comidas + Regalo
                </span>
                <span className="absolute bottom-2 right-2 bg-primary-container text-on-primary text-[11px] font-semibold px-2 py-0.5 rounded-md flex items-center gap-1">
                  <span className="material-symbols-outlined text-[13px]">savings</span> Ahorro
                </span>
              </div>
              <div className="pt-space-sm flex flex-col gap-1 flex-1">
                <h4 className="font-title-md text-title-md text-primary font-semibold group-hover:text-secondary transition-colors">
                  Pack 'Semana Ligera & Sin Prisas'
                </h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2 leading-relaxed">
                  5 guisados con guarnición para tu semana laboral + porción de Pan de Elote Tierno de cortesía.
                </p>
              </div>
              <div className="pt-space-md mt-space-sm flex items-center justify-between border-t border-surface-container/60">
                <div>
                  <span className="font-headline-sm text-headline-sm text-secondary font-bold">$650</span>
                  <span className="font-label-sm text-[10px] text-on-surface-variant uppercase ml-1">MXN</span>
                </div>
                <button
                  onClick={(e) => handleQuickAdd(e, packSemanaProduct)}
                  className="px-space-md py-1.5 rounded-full bg-secondary text-on-secondary font-label-md text-label-md hover:bg-on-secondary-container transition-colors flex items-center gap-1 shadow-sm"
                >
                  <span className="material-symbols-outlined text-[16px]">add_shopping_cart</span>
                  <span>Pedir</span>
                </button>
              </div>
            </div>
          </div>

          {/* Category 2 Header: Repostería & Antojos de Familia */}
          <div className="pt-space-lg flex flex-col md:flex-row md:items-end justify-between gap-space-sm pb-space-sm border-b border-surface-container" id="reposteria-artesanal">
            <div>
              <div className="inline-flex items-center gap-space-xs text-secondary font-label-sm text-label-sm uppercase tracking-widest font-bold">
                <span className="material-symbols-outlined text-[16px]">bakery_dining</span>
                <span>Horno Caliente &amp; Mantequilla Pura</span>
              </div>
              <h2 className="font-headline-lg text-headline-lg-mobile lg:text-headline-lg text-primary mt-1">
                Repostería &amp; Antojos Caseros
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant mt-1">
                Masa batida a mano, sin saborizantes sintéticos. Opciones individuales para consentirte y pasteles enteros para tu familia o cafeterías aliadas.
              </p>
            </div>
            <div className="flex items-center gap-space-xs">
              <span className="px-space-md py-1 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-label-md text-label-md font-bold">
                Para Festejos Familiares
              </span>
              <span className="px-space-md py-1 rounded-full bg-surface-container-highest text-secondary font-label-md text-label-md font-bold">
                Para Cafeterías &amp; B2B
              </span>
            </div>
          </div>

          {/* Bakery Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            {/* Postre 1: Tres Leches */}
            <div
              onClick={() => setSelectedProductForModal(tresLechesProduct)}
              className="bg-surface-container-low rounded-2xl p-space-md shadow-sm hover:shadow-md transition-all flex flex-col justify-between border border-outline-variant/20 cursor-pointer group"
            >
              <div>
                <div className="relative rounded-xl overflow-hidden aspect-[16/10] bg-surface-container">
                  <img
                    alt="Pastel de tres leches con dulce de leche artesanal"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBxQoETJ1SZ-J0FEKW4KusreWovXXNFNTENF-XrDXwiBs6B_McUAJM3b9GjutQhomV15faT7oKR0cPzlFyoru_YOTKXx4Z0ywuOfcniX08SDt29zzH0nRSbJoEz7UTyi5khEzmj_2tD8UZlz48JBtjPOPoESORRzYLtpV4EZsK9C1MR75HP8daq516CZQBrsfe-m8sYNrTL8PygjsL4aMFByIkq-4Gts83hn96Xt2GUjYJ5DZ-q8bjc"
                  />
                  <span className="absolute top-2 left-2 bg-secondary text-on-secondary text-label-sm font-label-sm font-bold px-2 py-0.5 rounded-full">
                    Especialidad de la Casa
                  </span>
                </div>
                <div className="pt-space-md flex flex-col gap-1">
                  <h4 className="font-headline-sm text-headline-sm text-primary font-bold group-hover:text-secondary transition-colors">
                    Pastel Tres Leches &amp; Dulce de Leche
                  </h4>
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                    Bizcocho aireado bañado en jarabe de tres leches, generosa cobertura de dulce de leche casero y merengue tostado.
                  </p>
                </div>
              </div>
              <div className="pt-space-md mt-space-sm flex items-center justify-between border-t border-surface-container">
                <div>
                  <span className="font-body-sm text-body-sm text-on-surface-variant block">Individual / Entero</span>
                  <span className="font-headline-sm text-headline-sm text-secondary font-bold">
                    $135 <span className="text-body-sm font-normal text-on-surface-variant">/ $420 entero</span>
                  </span>
                </div>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedProductForModal(tresLechesProduct);
                  }}
                  className="px-space-md py-2 rounded-full bg-secondary text-on-secondary font-label-md text-label-md hover:bg-on-secondary-container transition-colors shadow-sm"
                >
                  Ordenar Postre
                </button>
              </div>
            </div>

            {/* Postre 2: Mostachón de Fresa (El Rey de la Casa) */}
            <div
              onClick={() => setSelectedProductForModal(mostachonProduct)}
              className="bg-surface-container-low rounded-2xl p-space-md shadow-sm hover:shadow-md transition-all flex flex-col justify-between border-2 border-secondary/30 cursor-pointer group"
            >
              <div>
                <div className="relative rounded-xl overflow-hidden aspect-[16/10] bg-surface-container">
                  <img
                    alt="Mostachón de Fresa Artesanal con nuez y crema de queso"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    src="/images/mostachon_artesanal.jpg"
                  />
                  <span className="absolute top-2 left-2 bg-secondary text-on-secondary text-label-sm font-label-sm font-bold px-2 py-0.5 rounded-full">
                    👑 El Rey de la Casa
                  </span>
                </div>
                <div className="pt-space-md flex flex-col gap-1">
                  <h4 className="font-headline-sm text-headline-sm text-primary font-bold group-hover:text-secondary transition-colors">
                    Mostachón de Fresa Insignia
                  </h4>
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                    Base crujiente de merengue horneado con nuez pecana y galleta, coronado con una suave nube de queso crema y fresas frescas.
                  </p>
                </div>
              </div>
              <div className="pt-space-md mt-space-sm flex items-center justify-between border-t border-surface-container">
                <div>
                  <span className="font-body-sm text-body-sm text-on-surface-variant block">Individual / Pastel</span>
                  <span className="font-headline-sm text-headline-sm text-secondary font-bold">
                    $140 <span className="text-body-sm font-normal text-on-surface-variant">/ $450 entero</span>
                  </span>
                </div>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedProductForModal(mostachonProduct);
                  }}
                  className="px-space-md py-2 rounded-full bg-secondary text-on-secondary font-label-md text-label-md hover:bg-on-secondary-container transition-colors shadow-sm"
                >
                  Ordenar Postre
                </button>
              </div>
            </div>

            {/* Postre 3: Pan de Elote Tierno */}
            <div
              onClick={() => setSelectedProductForModal(panEloteProduct)}
              className="bg-surface-container-low rounded-2xl p-space-md shadow-sm hover:shadow-md transition-all flex flex-col justify-between border border-outline-variant/20 cursor-pointer group"
            >
              <div>
                <div className="relative rounded-xl overflow-hidden aspect-[16/10] bg-surface-container">
                  <img
                    alt="Pan de Elote Tierno recién horneado con aroma a maíz dulce"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    src="https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80"
                  />
                  <span className="absolute top-2 left-2 bg-surface-container-lowest/90 backdrop-blur-sm text-primary text-label-sm font-label-sm font-bold px-2 py-0.5 rounded-full">
                    100% Maíz Dulce Fresco
                  </span>
                </div>
                <div className="pt-space-md flex flex-col gap-1">
                  <h4 className="font-headline-sm text-headline-sm text-primary font-bold group-hover:text-secondary transition-colors">
                    Pan de Elote Tierno Artesanal
                  </h4>
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                    Preparado desgranando elote fresco tierno. Textura húmeda, aromática y con el balance perfecto de dulzor hogareño.
                  </p>
                </div>
              </div>
              <div className="pt-space-md mt-space-sm flex items-center justify-between border-t border-surface-container">
                <div>
                  <span className="font-body-sm text-body-sm text-on-surface-variant block">Porción / Panqué</span>
                  <span className="font-headline-sm text-headline-sm text-secondary font-bold">
                    $95 <span className="text-body-sm font-normal text-on-surface-variant">/ $320 entero</span>
                  </span>
                </div>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedProductForModal(panEloteProduct);
                  }}
                  className="px-space-md py-2 rounded-full bg-secondary text-on-secondary font-label-md text-label-md hover:bg-on-secondary-container transition-colors shadow-sm"
                >
                  Ordenar Panqué
                </button>
              </div>
            </div>
          </div>

          {/* Category 3 Banner: Box Lunch & Catering Corporativo */}
          <div className="bg-surface-container-highest rounded-3xl p-space-lg lg:p-space-xl shadow-sm border border-outline-variant/30" id="box-lunch">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-center">
              <div className="lg:col-span-7 flex flex-col gap-space-sm">
                <div className="inline-flex items-center gap-space-xs text-secondary font-label-sm text-label-sm uppercase font-bold tracking-wider">
                  <span className="material-symbols-outlined text-[18px]">business_center</span>
                  <span>Línea Corporativa &amp; Juntas de Directorio</span>
                </div>
                <h3 className="font-headline-lg text-headline-lg-mobile lg:text-headline-lg text-primary">
                  Box Lunch Artesanal: dile adiós a los sándwiches fríos y aburridos
                </h3>
                <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                  Eleva tus reuniones de trabajo de 5 a 25 personas con comida caliente y casera presentada en cajas kraft biodegradables con sello individual. Cada caja incluye guisado a elegir, guarnición casera (puré o arroces) y un mini postre horneado de Romi.
                </p>
                <div className="flex flex-wrap items-center gap-space-md pt-space-xs">
                  <div className="flex items-center gap-space-xs text-on-surface font-label-md text-label-md">
                    <span className="material-symbols-outlined text-secondary text-[18px]">recycling</span>
                    <span>Empaque 100% compostable</span>
                  </div>
                  <div className="flex items-center gap-space-xs text-on-surface font-label-md text-label-md">
                    <span className="material-symbols-outlined text-secondary text-[18px]">receipt_long</span>
                    <span>Facturación inmediata</span>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col gap-space-sm justify-center items-center lg:items-end">
                <div className="bg-surface-container-lowest p-space-md rounded-2xl shadow-sm text-center w-full max-w-xs border border-outline-variant/20">
                  <span className="font-label-sm text-label-sm text-secondary uppercase font-bold">Desde 5 paquetes</span>
                  <p className="font-headline-md text-headline-md text-primary font-bold mt-1">
                    $145 <span className="text-body-sm font-normal text-on-surface-variant">por persona</span>
                  </p>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                    Incluye cubiertos ecológicos y entrega programada en Playa del Carmen.
                  </p>
                  <a
                    className="mt-space-sm w-full inline-flex items-center justify-center gap-space-xs py-2.5 rounded-full bg-primary-container text-on-primary font-label-md text-label-md hover:bg-primary transition-colors shadow-md"
                    href="https://wa.me/5212711049733?text=Hola%20Romi,%20me%20gustaria%20cotizar%20un%20Box%20Lunch%20para%20mi%20oficina%20en%20Playa%20del%20Carmen"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span>Cotizar para mi Oficina</span>
                    <span className="material-symbols-outlined text-[16px]">chat</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. "CÓMO FUNCIONA": 3-Step Pragmatic Flow                                */}
      {/* ========================================================================= */}
      <section className="w-full bg-surface-container py-space-xl">
        <div className="max-w-[1360px] mx-auto px-margin-mobile lg:px-margin">
          <div className="text-center max-w-xl mx-auto mb-space-lg">
            <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest font-bold">
              FÁCIL, PRÁCTICO Y SEGURO
            </span>
            <h2 className="font-headline-lg text-headline-lg-mobile lg:text-headline-lg text-primary mt-space-xs">
              Cómo llega el apapacho a tu mesa
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter relative">
            {/* Step 1 */}
            <div className="bg-surface-container-lowest p-space-lg rounded-2xl shadow-sm flex flex-col items-start gap-space-sm relative border border-outline-variant/20">
              <div className="w-10 h-10 rounded-full bg-primary-container text-on-primary font-headline-sm text-headline-sm flex items-center justify-center font-bold">
                1
              </div>
              <h3 className="font-title-md text-title-md text-primary font-semibold">Elige tu menú semanal</h3>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Navega por nuestra selección de guisados individuales o familiares y postres artesanales. Arma tu caja personalizada para resolver tus comidas o las de toda tu familia.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-surface-container-lowest p-space-lg rounded-2xl shadow-sm flex flex-col items-start gap-space-sm relative border border-outline-variant/20">
              <div className="w-10 h-10 rounded-full bg-secondary text-on-secondary font-headline-sm text-headline-sm flex items-center justify-center font-bold">
                2
              </div>
              <h3 className="font-title-md text-title-md text-primary font-semibold">Recibe en frío seguro</h3>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Entregamos directo en tu puerta en Playa del Carmen con control de temperatura en bolsas selladas al vacío. Todo listo para ir directo a tu congelador.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-surface-container-lowest p-space-lg rounded-2xl shadow-sm flex flex-col items-start gap-space-sm relative border border-outline-variant/20">
              <div className="w-10 h-10 rounded-full bg-tertiary-fixed text-primary font-headline-sm text-headline-sm flex items-center justify-center font-bold">
                3
              </div>
              <h3 className="font-title-md text-title-md text-primary font-semibold">Calienta 10 min y disfruta</h3>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Sumerge la bolsa en agua hirviendo (baño maría) durante 8-10 minutos o calienta en sartén. Sirve calientito con tortillas y disfruta sabor de hogar.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. CULINARY HONESTY & TESTIMONIALS                                        */}
      {/* ========================================================================= */}
      <section className="w-full bg-surface py-space-xl">
        <div className="max-w-[1360px] mx-auto px-margin-mobile lg:px-margin">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-center">
            {/* Guarantee Column */}
            <div className="lg:col-span-5 bg-surface-container-high p-space-lg rounded-3xl flex flex-col gap-space-md border border-outline-variant/20">
              <div className="flex items-center gap-space-xs text-secondary">
                <span className="material-symbols-outlined text-[32px]">workspace_premium</span>
                <span className="font-label-sm text-label-sm uppercase font-bold tracking-wider">Compromiso Romi</span>
              </div>
              <h3 className="font-headline-md text-headline-md text-primary font-semibold leading-snug">
                "Garantía Romi: Si no te sabe a comida de hogar hecha con amor, te devolvemos tu dinero."
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                No somos una fábrica masiva. Cada tanda de guisados se cocina en recipientes pequeños, probando el punto exacto de sal y sazón antes de empacar. Cocinamos para tu familia con el mismo cuidado que para la nuestra.
              </p>
              <div className="pt-space-xs flex items-center gap-space-sm">
                <div className="w-12 h-12 rounded-full bg-surface-container-lowest shadow-sm flex items-center justify-center p-1 overflow-hidden border border-secondary/20">
                  <img
                    alt="Firma Romi"
                    className="h-9 w-auto object-contain"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuA3NzzA0KMYrRi2wvRqJzZ6B_mxNl7Pizafq2X9906XlHhcjEiN2j1B5hyg5BiStBbexX7cYb-ETE92DWF7dAsklaSQvliX4WFeeH-UJXdUCd62ISXA4RaqxQRm0SozLb-Ujiw7-fKu1eGwrSOKFnrEC5Vtyp_eHmTPwtQ_VF5nSf1cQKgsWCUV-PP2T4V0kU5aeGgyse6GLgF_lNZCNKwVtIMlknzKhCHy-E6BX_HQ9ATv27K_5VFJg1kmpIcShiHyzw"
                  />
                </div>
                <div>
                  <p className="font-title-md text-title-md text-primary font-semibold leading-tight">Romi &amp; Familia</p>
                  <p className="font-body-sm text-body-sm text-secondary font-medium">Fundadora y Cocinera Principal</p>
                </div>
              </div>
            </div>

            {/* Testimonials Cards Column */}
            <div className="lg:col-span-7 flex flex-col gap-space-md">
              {/* Review 1 */}
              <div className="bg-surface-container-lowest p-space-md rounded-2xl shadow-sm flex flex-col gap-space-xs border border-outline-variant/20">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-tertiary-fixed-dim">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <span key={s} className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                        star
                      </span>
                    ))}
                  </div>
                  <span className="font-label-sm text-label-sm text-on-surface-variant">Hace 3 días</span>
                </div>
                <p className="font-body-lg text-body-lg text-on-surface italic leading-relaxed">
                  "Llegar a las 7:30 pm después de un día interminable y tener resuelta la cena con verdadero sabor a mamá... no tiene precio. El lomo glaseado y el pastel de papa son una maravilla."
                </p>
                <div className="flex items-center gap-space-xs pt-space-xs">
                  <span className="w-8 h-8 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center font-bold text-xs">
                    MG
                  </span>
                  <div>
                    <p className="font-label-md text-label-md text-primary font-bold leading-tight">Mariana G.</p>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">Mamá profesionista en Playacar, QR</p>
                  </div>
                </div>
              </div>

              {/* Review 2 */}
              <div className="bg-surface-container-lowest p-space-md rounded-2xl shadow-sm flex flex-col gap-space-xs border border-outline-variant/20">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-tertiary-fixed-dim">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <span key={s} className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                        star
                      </span>
                    ))}
                  </div>
                  <span className="font-label-sm text-label-sm text-on-surface-variant">Hace 1 semana</span>
                </div>
                <p className="font-body-lg text-body-lg text-on-surface italic leading-relaxed">
                  "Pedimos 18 Box Lunches para nuestra reunión trimestral de socios en Playa del Carmen y fue un éxito total. La presentación kraft con la comida caliente sorprendió a todos; se nota el cariño casero."
                </p>
                <div className="flex items-center gap-space-xs pt-space-xs">
                  <span className="w-8 h-8 rounded-full bg-primary-fixed text-primary-container flex items-center justify-center font-bold text-xs">
                    CR
                  </span>
                  <div>
                    <p className="font-label-md text-label-md text-primary font-bold leading-tight">Carlos R.</p>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">Director de Agencia Creativa</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. TRANSPARENT FAQ ACCORDION                                              */}
      {/* ========================================================================= */}
      <section className="w-full bg-surface-container-low py-space-xl" id="preguntas-frecuentes">
        <div className="max-w-[860px] mx-auto px-margin-mobile lg:px-margin flex flex-col gap-space-lg">
          <div className="text-center">
            <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest font-bold">
              PREGUNTAS FRECUENTES
            </span>
            <h2 className="font-headline-lg text-headline-lg-mobile lg:text-headline-lg text-primary mt-space-xs">
              Claridad antes de tu primer pedido
            </h2>
          </div>

          <div className="flex flex-col gap-space-sm">
            {/* FAQ Item 1 */}
            <div className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm border border-outline-variant/20">
              <button
                onClick={() => toggleFaq(1)}
                className="w-full p-space-md text-left flex items-center justify-between gap-space-md focus:outline-none"
                type="button"
              >
                <span className="font-title-md text-title-md text-primary font-semibold">
                  ¿Cómo caliento mis guisados en casa?
                </span>
                <span className={`material-symbols-outlined text-secondary transition-transform duration-300 ${openFaq === 1 ? 'rotate-180' : ''}`}>
                  expand_more
                </span>
              </button>
              {openFaq === 1 && (
                <div className="px-space-md pb-space-md font-body-md text-body-md text-on-surface-variant leading-relaxed animate-fadeIn">
                  Es sumamente fácil. El método recomendado para conservar el 100% de la jugosidad es el <strong>Baño María</strong>: sumerge la bolsa cerrada directamente en una olla con agua hirviendo durante 8 a 10 minutos. Si tienes prisa, descongela 2 minutos en microondas, abre la bolsa y vierte el guisado directo al sartén tapado a fuego bajito por 4 minutos.
                </div>
              )}
            </div>

            {/* FAQ Item 2 */}
            <div className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm border border-outline-variant/20">
              <button
                onClick={() => toggleFaq(2)}
                className="w-full p-space-md text-left flex items-center justify-between gap-space-md focus:outline-none"
                type="button"
              >
                <span className="font-title-md text-title-md text-primary font-semibold">
                  ¿Cuánto tiempo duran en el congelador?
                </span>
                <span className={`material-symbols-outlined text-secondary transition-transform duration-300 ${openFaq === 2 ? 'rotate-180' : ''}`}>
                  expand_more
                </span>
              </button>
              {openFaq === 2 && (
                <div className="px-space-md pb-space-md font-body-md text-body-md text-on-surface-variant leading-relaxed animate-fadeIn">
                  Gracias al sellado hermético al vacío grado alimenticio, nuestros guisados duran hasta <strong>90 días (3 meses)</strong> en tu congelador doméstico sin quemarse por hielo, sin perder nutrientes y sin alterar su sazón original.
                </div>
              )}
            </div>

            {/* FAQ Item 3 */}
            <div className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm border border-outline-variant/20">
              <button
                onClick={() => toggleFaq(3)}
                className="w-full p-space-md text-left flex items-center justify-between gap-space-md focus:outline-none"
                type="button"
              >
                <span className="font-title-md text-title-md text-primary font-semibold">
                  ¿Cuáles son las zonas y días de entrega en Playa del Carmen?
                </span>
                <span className={`material-symbols-outlined text-secondary transition-transform duration-300 ${openFaq === 3 ? 'rotate-180' : ''}`}>
                  expand_more
                </span>
              </button>
              {openFaq === 3 && (
                <div className="px-space-md pb-space-md font-body-md text-body-md text-on-surface-variant leading-relaxed animate-fadeIn">
                  Cubrimos todo <strong>Playa del Carmen, Quintana Roo</strong> (Centro, Playacar, Ejidal, Corasol y zonas residenciales). Entregamos de lunes a sábado en rutas programadas para garantizar frescura absoluta.
                </div>
              )}
            </div>

            {/* FAQ Item 4 */}
            <div className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm border border-outline-variant/20">
              <button
                onClick={() => toggleFaq(4)}
                className="w-full p-space-md text-left flex items-center justify-between gap-space-md focus:outline-none"
                type="button"
              >
                <span className="font-title-md text-title-md text-primary font-semibold">
                  ¿Manejan catálogo para cafeterías y empresas (B2B)?
                </span>
                <span className={`material-symbols-outlined text-secondary transition-transform duration-300 ${openFaq === 4 ? 'rotate-180' : ''}`}>
                  expand_more
                </span>
              </button>
              {openFaq === 4 && (
                <div className="px-space-md pb-space-md font-body-md text-body-md text-on-surface-variant leading-relaxed animate-fadeIn">
                  ¡Sí! Contamos con catálogo especial para <strong>Box Lunch de oficinas</strong> y pastelería artesanal para <strong>cafeterías locales</strong> que buscan postres premium con márgenes del 40% al 50%. Solicita tu Caja de Degustación por WhatsApp.
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 7. FINAL CALLOUT BANNER: Direct WhatsApp Connection                       */}
      {/* ========================================================================= */}
      <section className="w-full bg-secondary text-on-secondary py-space-xl relative overflow-hidden">
        <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-secondary-container/20 rounded-full blur-2xl pointer-events-none"></div>
        <div className="absolute top-0 left-10 w-40 h-40 bg-tertiary-fixed/10 rounded-full blur-xl pointer-events-none"></div>

        <div className="max-w-[1100px] mx-auto px-margin-mobile lg:px-margin text-center relative z-10 flex flex-col items-center gap-space-md">
          <div className="inline-flex items-center gap-space-xs px-space-md py-1 rounded-full bg-surface-container-lowest/15 backdrop-blur-sm text-tertiary-fixed font-label-sm text-label-sm font-bold uppercase tracking-widest">
            <span className="material-symbols-outlined text-[16px]">soup_kitchen</span>
            <span>PEDIDOS SEMANALES ABIERTOS</span>
          </div>

          <h2 className="font-display-lg text-display-lg-mobile lg:text-display-lg text-on-secondary max-w-3xl leading-tight">
            ¿Te guardamos un lugar en la mesa esta semana?
          </h2>

          <p className="font-body-lg text-body-lg text-surface-container-high max-w-2xl leading-relaxed">
            Cuéntanos qué se te antoja o déjanos armarte un paquete semanal con guisados caseros y postre. Atención directa de Romi sin intermediarios.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-space-md pt-space-sm w-full justify-center">
            <a
              className="w-full sm:w-auto inline-flex items-center justify-center gap-space-xs px-space-xl py-space-sm rounded-full bg-surface-container-lowest text-primary-container font-label-lg text-label-lg font-bold shadow-lg hover:bg-surface-container transition-all"
              href="https://wa.me/5212711049733?text=Hola%20Romi,%20quiero%20hacer%20un%20pedido%20de%20guisados%20caseros"
              target="_blank"
              rel="noreferrer"
            >
              <span className="material-symbols-outlined text-secondary text-[20px]">chat</span>
              <span>Escribir a Romi por WhatsApp</span>
            </a>

            <button
              onClick={() => setActiveTab('menu')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-space-xs px-space-xl py-space-sm rounded-full bg-primary-container text-tertiary-fixed font-label-lg text-label-lg font-bold hover:bg-primary transition-all border border-tertiary-fixed/30"
            >
              <span>Ver Menú Completo</span>
              <span className="material-symbols-outlined text-[18px]">restaurant_menu</span>
            </button>
          </div>

          <p className="font-body-sm text-body-sm text-surface-container-high/80 mt-space-xs">
            Envíos a todo Playa del Carmen, Quintana Roo • Pagos por transferencia, efectivo o tarjeta
          </p>
        </div>
      </section>
    </div>
  );
};

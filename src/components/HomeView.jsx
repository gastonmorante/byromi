import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { PRODUCTS } from '../data/products';

export const HomeView = () => {
  const { setSelectedProductForModal, addToCart, setActiveTab } = useCart();
  const [showOriginalFounders, setShowOriginalFounders] = useState(false);

  const bestSeller = PRODUCTS.find((p) => p.id === 'mostachon-artesanal') || PRODUCTS[0];
  const popularItems = PRODUCTS.filter((p) => p.id !== 'mostachon-artesanal').slice(0, 4);

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

  const handleSpecialQuoteWhatsApp = () => {
    const text = encodeURIComponent(
      '¡Hola Romi! Me gustaría cotizar un pedido especial para un evento (cumpleaños / boda / reunión) en Playa del Carmen.'
    );
    window.open(`https://wa.me/529841234567?text=${text}`, '_blank');
  };

  return (
    <div className="flex flex-col gap-stack-lg max-w-[1120px] mx-auto w-full pb-16">
      {/* Hero Story Section */}
      <section className="relative w-full rounded-3xl overflow-hidden min-h-[460px] md:min-h-[520px] flex items-end p-6 md:p-12 shadow-2xl shadow-black/80 group border border-outline-variant/20">
        <div className="absolute inset-0 w-full h-full">
          <img
            src={showOriginalFounders ? '/images/founders_original.png' : '/images/hero_founders.jpg'}
            alt="Chefs fundadoras de Romi en su atelier"
            className="w-full h-full object-cover object-center ambient-pulse transform group-hover:scale-105 transition-all duration-1000 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-surface-dim via-surface-dim/80 to-transparent"></div>
        </div>

        {/* Story Text Overlay */}
        <div className="relative z-10 max-w-2xl">
          <div className="flex items-center gap-2 mb-3">
            <span className="inline-block px-3 py-1 border border-outline-variant/60 rounded-full font-label-sm text-label-sm text-primary uppercase tracking-widest backdrop-blur-md bg-surface/40">
              Nuestra Historia
            </span>
            <button
              onClick={() => setShowOriginalFounders(!showOriginalFounders)}
              className="text-[11px] font-label-sm uppercase tracking-wider px-3 py-1 rounded-full border border-primary/40 bg-surface-container/60 hover:bg-primary hover:text-surface-lowest text-primary transition-colors backdrop-blur-md flex items-center gap-1"
              title="Alternar fotografía original de cocina"
            >
              <span className="material-symbols-outlined text-[13px]">
                {showOriginalFounders ? 'auto_awesome' : 'photo_camera'}
              </span>
              {showOriginalFounders ? 'Ver Versión Editorial' : 'Ver Foto Original'}
            </button>
          </div>

          <h2 className="font-headline-md text-3xl sm:text-4xl md:text-5xl text-on-surface mb-stack-sm leading-tight">
            Nostalgia Modernizada
          </h2>
          <p className="font-body-lg text-base sm:text-lg text-on-surface-variant max-w-xl leading-relaxed">
            "Somos dos amigas del estado de Veracruz... creando nuevos recuerdos que permanezcan a través del sabor en el corazón del Caribe Mexicano."
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-1.5 text-primary bg-surface-container/60 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-outline-variant/30 text-sm">
              <span className="material-symbols-outlined text-base" style={{ fontVariationSettings: "'FILL' 1" }}>
                location_on
              </span>
              <span className="font-label-sm uppercase tracking-wider font-semibold">Playa del Carmen, MX</span>
            </div>

            <button
              onClick={() => setActiveTab('menu')}
              className="px-5 py-2 rounded-full bg-primary-container text-surface-container-lowest font-headline-md text-sm font-semibold hover:bg-primary-container/90 transition-all flex items-center gap-1.5 shadow-lg shadow-primary-container/30"
            >
              <span>Explorar Catálogo</span>
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </button>
          </div>
        </div>
      </section>

      {/* Categories Scroller */}
      <section className="w-full py-2">
        <div className="flex items-center justify-between mb-3 px-1">
          <h3 className="font-headline-md text-xl text-on-surface">Especialidades de la Casa</h3>
          <button
            onClick={() => setActiveTab('menu')}
            className="text-primary hover:text-primary-fixed text-xs font-semibold uppercase tracking-wider flex items-center gap-1"
          >
            Ver todas <span className="material-symbols-outlined text-sm">chevron_right</span>
          </button>
        </div>
        <div className="flex gap-3 overflow-x-auto hide-scrollbar pb-2 snap-x snap-mandatory">
          {[
            { label: 'Mostachón de Autor', icon: 'cake', cat: 'Mostachón' },
            { label: 'Chocolatería 70%', icon: 'cookie', cat: 'Chocolatería' },
            { label: 'Salados Veracruzanos', icon: 'bakery_dining', cat: 'Salados Veracruzanos' },
            { label: 'Postres en Vasito', icon: 'local_cafe', cat: 'Carlotas & Vasitos' },
            { label: 'Pays & Panqués', icon: 'pie_chart', cat: 'Pays & Panqués' },
            { label: 'Clásicos de Familia', icon: 'dinner_dining', cat: 'Clásicos' }
          ].map((catItem, idx) => (
            <button
              key={idx}
              onClick={() => setActiveTab('menu')}
              className="snap-start shrink-0 px-5 py-3 rounded-2xl bg-surface-container hover:bg-surface-container-high border border-outline-variant/30 hover:border-primary transition-all flex items-center gap-2 group focus:outline-none"
            >
              <span className="material-symbols-outlined text-primary group-hover:scale-110 transition-transform">
                {catItem.icon}
              </span>
              <span className="font-body-md text-sm text-on-surface group-hover:text-primary font-medium whitespace-nowrap">
                {catItem.label}
              </span>
            </button>
          ))}
        </div>
      </section>

      {/* Best Seller Section (Bento style) */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
        {/* Main Best Seller Card */}
        <div
          onClick={() => setSelectedProductForModal(bestSeller)}
          className="col-span-1 md:col-span-8 bg-surface-container-low rounded-3xl overflow-hidden border border-outline-variant/20 hover:border-primary/50 transition-all flex flex-col md:flex-row relative group cursor-pointer shadow-xl"
        >
          <div className="absolute top-4 left-4 z-20">
            <span className="px-3 py-1 bg-primary-container text-surface-container-lowest font-label-sm text-xs font-semibold rounded-full flex items-center gap-1 shadow-lg">
              <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>
                star
              </span>
              N° 1 Más Vendido
            </span>
          </div>

          <div className="w-full md:w-1/2 aspect-[4/3] md:aspect-auto relative overflow-hidden bg-surface-container-high">
            <img
              src={bestSeller.image}
              alt={bestSeller.name}
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface-dim/90 via-transparent to-transparent md:hidden"></div>
          </div>

          <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col justify-between bg-surface-container-low z-10 relative -mt-6 md:mt-0 rounded-t-3xl md:rounded-none border-t border-surface-variant md:border-none">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-primary text-xs font-semibold uppercase tracking-wider">
                  Receta Insignia
                </span>
                <span className="text-on-surface-variant text-xs">• {bestSeller.prepTime}</span>
              </div>
              <h3 className="font-headline-md text-2xl text-on-surface mb-2 font-semibold group-hover:text-primary transition-colors">
                {bestSeller.name}
              </h3>
              <p className="font-body-md text-sm text-on-surface-variant leading-relaxed mb-4 line-clamp-3">
                {bestSeller.description}
              </p>
              <div className="flex flex-wrap gap-1.5 mb-6">
                <span className="px-2 py-0.5 rounded text-[11px] uppercase tracking-wider bg-surface-container text-on-surface-variant border border-outline-variant/30">
                  Merengue con nuez
                </span>
                <span className="px-2 py-0.5 rounded text-[11px] uppercase tracking-wider bg-surface-container text-on-surface-variant border border-outline-variant/30">
                  Fresas frescas
                </span>
              </div>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-surface-container">
              <div className="flex flex-col">
                <span className="font-label-sm text-[10px] text-on-surface-variant uppercase tracking-widest">
                  Desde
                </span>
                <span className="font-headline-md text-2xl text-primary font-bold">
                  ${bestSeller.basePrice}{' '}
                  <span className="text-xs text-on-surface-variant font-normal">MXN</span>
                </span>
              </div>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedProductForModal(bestSeller);
                }}
                className="h-11 px-5 bg-primary-container text-surface-container-lowest rounded-full font-label-sm text-xs uppercase tracking-wider font-semibold hover:bg-primary transition-all flex items-center gap-2 shadow-md active:scale-95"
              >
                <span className="material-symbols-outlined text-sm">tune</span>
                Personalizar
              </button>
            </div>
          </div>
        </div>

        {/* Side Bento Box: Pedidos Especiales */}
        <div className="col-span-1 md:col-span-4 bg-surface-container rounded-3xl p-6 md:p-8 border border-outline-variant/30 flex flex-col justify-between items-center text-center relative overflow-hidden group shadow-xl">
          <div className="absolute inset-0 opacity-15 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary via-transparent to-transparent group-hover:opacity-25 transition-opacity duration-500"></div>

          <div className="relative z-10 flex flex-col items-center">
            <div className="w-14 h-14 rounded-2xl bg-surface-container-high border border-primary/30 flex items-center justify-center text-primary mb-4 shadow-inner">
              <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                celebration
              </span>
            </div>
            <span className="px-3 py-0.5 rounded-full border border-primary/30 text-primary text-[10px] uppercase font-semibold tracking-wider mb-2">
              Eventos & Banquetes
            </span>
            <h4 className="font-headline-md text-2xl text-on-surface mb-2 font-semibold">
              Pedidos Especiales
            </h4>
            <p className="font-body-md text-sm text-on-surface-variant leading-relaxed mb-6">
              Diseñamos mesas de postres y pasteles monumentales para bodas, aniversarios y momentos inolvidables en la Riviera Maya.
            </p>
          </div>

          <div className="w-full relative z-10 space-y-2.5">
            <button
              onClick={handleSpecialQuoteWhatsApp}
              className="w-full py-3.5 px-4 bg-surface-container-high hover:bg-primary hover:text-surface-lowest text-primary border border-primary/40 rounded-full font-label-sm text-xs uppercase tracking-wider font-semibold transition-all flex items-center justify-center gap-2 focus:outline-none shadow-md"
            >
              <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>
                chat
              </span>
              Cotizar por WhatsApp
            </button>
            <p className="text-[11px] text-on-surface-variant/70 text-center">
              Atención directa y personalizada de las chefs
            </p>
          </div>
        </div>
      </section>

      {/* Popular Near You Section */}
      <section className="flex flex-col gap-stack-md pt-2">
        <div className="flex items-end justify-between px-1">
          <div>
            <h2 className="font-headline-md text-2xl text-on-surface font-semibold">
              Favoritos cerca de ti
            </h2>
            <p className="font-body-md text-xs sm:text-sm text-on-surface-variant flex items-center gap-1 mt-1">
              <span className="material-symbols-outlined text-sm text-primary">location_on</span>
              Playa del Carmen y Playacar
            </p>
          </div>
          <button
            onClick={() => setActiveTab('menu')}
            className="text-primary hover:text-primary-fixed font-label-sm text-xs uppercase tracking-wider font-semibold flex items-center gap-1"
          >
            Ver Menú Completo <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
          {popularItems.map((product) => (
            <div
              key={product.id}
              onClick={() => setSelectedProductForModal(product)}
              className="bg-surface-container-low rounded-2xl overflow-hidden border border-outline-variant/20 hover:border-primary/40 transition-all group flex h-36 md:h-44 cursor-pointer shadow-lg hover:shadow-black/60"
            >
              {/* Product Photo */}
              <div className="w-1/3 md:w-2/5 h-full relative overflow-hidden bg-surface-container-high shrink-0">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-2 left-2 bg-surface-container-lowest/80 backdrop-blur-md px-1.5 py-0.5 rounded text-[10px] text-primary flex items-center gap-0.5 font-bold">
                  <span className="material-symbols-outlined text-[11px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                    star
                  </span>
                  {product.rating}
                </div>
              </div>

              {/* Product Details */}
              <div className="w-2/3 md:w-3/5 p-4 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] text-on-surface-variant uppercase tracking-wider block mb-0.5">
                    {product.category}
                  </span>
                  <h3 className="font-headline-md text-base md:text-lg leading-tight text-on-surface mb-1 group-hover:text-primary transition-colors line-clamp-1">
                    {product.name}
                  </h3>
                  <p className="font-body-md text-xs text-on-surface-variant line-clamp-2 leading-relaxed">
                    {product.description}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-surface-container/60">
                  <span className="font-headline-md text-base md:text-lg text-primary font-semibold">
                    ${product.basePrice} <span className="text-[11px] text-on-surface-variant font-normal">MXN</span>
                  </span>

                  <button
                    onClick={(e) => handleQuickAdd(e, product)}
                    className="w-9 h-9 rounded-full bg-surface-container hover:bg-primary hover:text-surface-lowest text-primary border border-outline-variant/40 hover:border-primary flex items-center justify-center transition-all focus:outline-none shadow-sm active:scale-95"
                    title="Agregar al Carrito"
                  >
                    <span className="material-symbols-outlined text-lg">add</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

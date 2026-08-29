import React, { useState, useMemo } from 'react';
import { useCart } from '../context/CartContext';
import { PRODUCTS, CATEGORIES } from '../data/products';

export const MenuView = () => {
  const { setSelectedProductForModal, addToCart } = useCart();
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      const matchesCategory =
        selectedCategory === 'Todos' ||
        product.category.toLowerCase() === selectedCategory.toLowerCase() ||
        (selectedCategory === 'Individuales' && product.tags.includes('Individual'));

      const matchesSearch =
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

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

  return (
    <div className="max-w-[1120px] mx-auto w-full pb-20">
      {/* Sticky Search & Category Bar */}
      <div className="sticky top-16 z-30 bg-background/95 backdrop-blur-xl pb-stack-md pt-stack-sm border-b border-surface-container shadow-[0_4px_30px_rgba(0,0,0,0.5)] -mx-container-padding px-container-padding mb-stack-md">
        {/* Search Bar */}
        <div className="relative w-full max-w-md mx-auto mb-stack-md group">
          <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant group-focus-within:text-primary transition-colors text-xl">
            search
          </span>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Buscar postres, chocolate, volovanes..."
            className="w-full bg-surface-container-low text-on-surface font-body-md text-sm sm:text-base py-3 pl-12 pr-10 rounded-full border border-outline-variant/30 focus:border-primary focus:ring-1 focus:ring-primary focus:bg-surface-container transition-all placeholder:text-on-surface-variant/70 focus:outline-none"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant hover:text-on-surface"
            >
              <span className="material-symbols-outlined text-sm">close</span>
            </button>
          )}
        </div>

        {/* Category Tabs (Scrollable) */}
        <nav className="flex gap-2.5 overflow-x-auto no-scrollbar snap-x snap-mandatory pb-1">
          {CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`snap-start shrink-0 px-5 py-2 rounded-full font-label-sm text-xs sm:text-sm font-semibold transition-all focus:outline-none ${
                  isSelected
                    ? 'bg-primary-container text-surface-container-lowest shadow-md shadow-primary-container/30 ring-1 ring-primary'
                    : 'bg-surface-container hover:bg-surface-variant text-on-surface-variant hover:text-on-surface border border-outline-variant/30'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </nav>
      </div>

      {/* Results Header */}
      <div className="flex justify-between items-center mb-6 px-1">
        <div>
          <h2 className="font-headline-md text-2xl sm:text-3xl text-on-surface">
            {selectedCategory === 'Todos' ? 'Nuestra Repostería & Antojos' : selectedCategory}
          </h2>
          <p className="font-body-md text-xs sm:text-sm text-on-surface-variant mt-0.5">
            {filteredProducts.length} {filteredProducts.length === 1 ? 'creación disponible' : 'creaciones disponibles'} elaboradas con ingredientes nobles
          </p>
        </div>
      </div>

      {/* Products Grid */}
      {filteredProducts.length === 0 ? (
        <div className="text-center py-16 px-4 bg-surface-container-low rounded-3xl border border-outline-variant/20">
          <span className="material-symbols-outlined text-5xl text-outline mb-2">
            search_off
          </span>
          <h3 className="font-headline-md text-xl text-on-surface mb-2">
            No encontramos postres que coincidan
          </h3>
          <p className="text-sm text-on-surface-variant max-w-sm mx-auto mb-4">
            Intenta con otro término de búsqueda o explora nuestras categorías clásicas.
          </p>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory('Todos');
            }}
            className="px-5 py-2 bg-primary text-surface-container-lowest rounded-full text-xs font-semibold uppercase tracking-wider"
          >
            Restablecer Filtros
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-stack-lg md:gap-x-stack-md md:gap-y-stack-lg">
          {filteredProducts.map((product) => (
            <article
              key={product.id}
              onClick={() => setSelectedProductForModal(product)}
              className="flex flex-col group cursor-pointer bg-surface-container-low/40 p-3 rounded-2xl border border-outline-variant/15 hover:border-primary/50 transition-all shadow-md hover:shadow-xl hover:shadow-black/50"
            >
              {/* Image Container with 4/5 Aspect Ratio */}
              <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden mb-stack-sm bg-surface-container-high border border-outline-variant/20 shadow-[0_8px_24px_rgba(0,0,0,0.4)]">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-70"></div>

                {/* Rating Badge */}
                <div className="absolute top-3 right-3 bg-surface-container/90 backdrop-blur-md px-2.5 py-1 rounded-full flex items-center gap-1 border border-outline-variant/30">
                  <span className="material-symbols-outlined text-[13px] text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>
                    star
                  </span>
                  <span className="font-label-sm text-xs text-on-surface font-semibold">
                    {product.rating}
                  </span>
                </div>

                {/* Category Pill on Image */}
                <div className="absolute bottom-3 left-3">
                  <span className="px-2.5 py-1 rounded-md text-[10px] font-semibold uppercase tracking-wider bg-surface-dim/80 backdrop-blur-md text-primary border border-outline-variant/40">
                    {product.category}
                  </span>
                </div>
              </div>

              {/* Product Info */}
              <div className="flex justify-between items-start gap-2 mb-2 flex-grow">
                <div>
                  <h3 className="font-headline-md text-lg text-on-surface group-hover:text-primary transition-colors line-clamp-1">
                    {product.name}
                  </h3>
                  <p className="font-body-md text-xs text-on-surface-variant line-clamp-1 mt-0.5">
                    {product.tagline}
                  </p>
                </div>
                <span className="font-headline-md text-lg font-bold text-primary shrink-0">
                  ${product.basePrice}
                </span>
              </div>

              {/* Tags and Action */}
              <div className="flex items-center justify-between pt-2 border-t border-surface-container">
                <div className="flex gap-1.5 flex-wrap">
                  {product.tags.slice(0, 2).map((tag, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 rounded-sm border border-outline-variant/40 text-on-surface-variant font-label-sm text-[10px] uppercase tracking-wider"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <button
                  onClick={(e) => handleQuickAdd(e, product)}
                  className="w-8 h-8 rounded-full bg-surface-container hover:bg-primary hover:text-surface-lowest text-primary border border-outline-variant/40 flex items-center justify-center transition-all focus:outline-none active:scale-90"
                  title="Añadir directo"
                >
                  <span className="material-symbols-outlined text-base">add_shopping_cart</span>
                </button>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
};

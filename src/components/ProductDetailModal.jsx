import React, { useState, useMemo } from 'react';
import { useCart } from '../context/CartContext';

export const ProductDetailModal = () => {
  const { selectedProductForModal, setSelectedProductForModal, addToCart } = useCart();

  if (!selectedProductForModal) return null;
  const product = selectedProductForModal;

  // Selected options
  const [selectedSizeId, setSelectedSizeId] = useState(
    product.sizes && product.sizes.length > 0 ? product.sizes[0].id : 'individual'
  );
  const [selectedFruitId, setSelectedFruitId] = useState(
    product.fruitOptions && product.fruitOptions.length > 0 ? product.fruitOptions[0].id : null
  );
  const [instructions, setInstructions] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [addedToast, setAddedToast] = useState(false);

  // Selected objects
  const currentSize = useMemo(() => {
    return product.sizes?.find((s) => s.id === selectedSizeId) || {
      id: 'individual',
      name: 'Porción',
      price: product.basePrice
    };
  }, [product, selectedSizeId]);

  const currentFruit = useMemo(() => {
    if (!product.fruitOptions) return null;
    return product.fruitOptions.find((f) => f.id === selectedFruitId) || product.fruitOptions[0];
  }, [product, selectedFruitId]);

  // Unit price & total
  const unitPrice = useMemo(() => {
    let price = currentSize.price;
    if (currentFruit) {
      price += currentFruit.price;
    }
    return price;
  }, [currentSize, currentFruit]);

  const totalPrice = unitPrice * quantity;

  const handleAddToCart = () => {
    addToCart({
      productId: product.id,
      name: product.name,
      sizeId: currentSize.id,
      sizeName: currentSize.name,
      fruitId: currentFruit ? currentFruit.id : null,
      fruitName: currentFruit ? currentFruit.name : null,
      instructions: instructions.trim(),
      price: unitPrice,
      quantity,
      image: product.image
    });

    setAddedToast(true);
    setTimeout(() => {
      setAddedToast(false);
      setSelectedProductForModal(null);
    }, 400);
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `${product.name} - Recuerdos con Sabor by Romi`,
          text: product.description,
          url: window.location.href
        });
      } catch (err) {
        console.log('Share canceled', err);
      }
    } else {
      navigator.clipboard?.writeText(window.location.href);
      alert('¡Enlace del postre copiado al portapapeles!');
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex justify-center items-start sm:py-6 sm:px-4 animate-fadeIn">
      {/* Modal Container */}
      <div className="relative w-full max-w-3xl bg-background text-on-background min-h-screen sm:min-h-0 sm:rounded-3xl overflow-hidden border border-outline-variant/30 shadow-2xl flex flex-col my-auto pb-32">
        {/* Top Floating Buttons */}
        <div className="sticky top-0 left-0 right-0 z-30 flex justify-between items-center px-4 py-3 bg-gradient-to-b from-black/90 via-black/40 to-transparent">
          <button
            onClick={() => setSelectedProductForModal(null)}
            className="w-10 h-10 rounded-full bg-surface-container/70 backdrop-blur-md flex items-center justify-center text-on-surface hover:bg-surface-variant transition-colors border border-outline-variant/30 focus:outline-none"
            aria-label="Cerrar detalle"
          >
            <span className="material-symbols-outlined">arrow_back</span>
          </button>

          <button
            onClick={handleShare}
            className="w-10 h-10 rounded-full bg-surface-container/70 backdrop-blur-md flex items-center justify-center text-on-surface hover:bg-surface-variant transition-colors border border-outline-variant/30 focus:outline-none"
            aria-label="Compartir postre"
          >
            <span className="material-symbols-outlined">share</span>
          </button>
        </div>

        {/* Hero Section */}
        <section className="relative w-full h-[45vh] sm:h-[50vh] -mt-16 overflow-hidden group bg-surface-container-high">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transform transition-transform duration-1000 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent"></div>

          <div className="absolute bottom-0 left-0 w-full p-container-padding flex flex-col justify-end">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="px-2.5 py-1 rounded-full border border-outline-variant/60 text-primary font-label-sm text-[11px] uppercase tracking-wider backdrop-blur-md bg-surface-container/40">
                {product.tags?.[0] || 'Firma de Autor'}
              </span>
              <span className="px-2.5 py-1 rounded-full border border-outline-variant/60 text-on-surface font-label-sm text-[11px] uppercase tracking-wider backdrop-blur-md bg-surface-container/40 flex items-center gap-1">
                <span className="material-symbols-outlined text-[13px] text-primary">schedule</span>
                {product.prepTime || '20 - 30 min'}
              </span>
              <span className="px-2.5 py-1 rounded-full border border-outline-variant/60 text-primary font-label-sm text-[11px] uppercase tracking-wider backdrop-blur-md bg-surface-container/40 flex items-center gap-1">
                <span className="material-symbols-outlined text-[13px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                {product.rating} ({product.reviewsCount} reseñas)
              </span>
            </div>

            <h1 className="font-headline-md text-2xl sm:text-4xl text-on-surface mb-1 font-bold">
              {product.name}
            </h1>
            <p className="font-headline-md text-xl sm:text-2xl text-primary font-bold">
              ${unitPrice.toFixed(2)}{' '}
              <span className="text-xs font-normal text-on-surface-variant">MXN</span>
            </p>
          </div>
        </section>

        {/* Product Details and Customization Form */}
        <div className="px-container-padding py-6 space-y-stack-lg">
          {/* Description */}
          <p className="font-body-md text-sm sm:text-base text-on-surface-variant leading-relaxed">
            {product.description}
          </p>

          {/* Fruit Variations (if any) */}
          {product.fruitOptions && product.fruitOptions.length > 0 && (
            <div className="space-y-stack-sm pt-2">
              <h3 className="font-headline-md text-lg sm:text-xl text-on-surface font-semibold">
                Variaciones de Fruta
              </h3>
              <p className="font-label-sm text-xs text-on-surface-variant uppercase tracking-wider mb-3">
                Elige tu corona perfecta
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {product.fruitOptions.map((fruit) => {
                  const isChecked = selectedFruitId === fruit.id;
                  return (
                    <label
                      key={fruit.id}
                      onClick={() => setSelectedFruitId(fruit.id)}
                      className={`relative flex items-center p-3.5 rounded-xl cursor-pointer transition-all border ${
                        isChecked
                          ? 'border-primary bg-primary/10 shadow-sm shadow-primary/20'
                          : 'border-outline-variant/40 bg-surface-container-low hover:border-primary/40'
                      }`}
                    >
                      <div
                        className={`w-5 h-5 rounded-full border-2 mr-3.5 flex items-center justify-center transition-colors ${
                          isChecked ? 'border-primary bg-primary' : 'border-outline-variant'
                        }`}
                      >
                        {isChecked && (
                          <span className="material-symbols-outlined text-surface-container-lowest text-[13px] font-bold">
                            check
                          </span>
                        )}
                      </div>
                      <div className="flex-grow">
                        <span className={`block font-body-md text-sm font-medium ${isChecked ? 'text-primary' : 'text-on-surface'}`}>
                          {fruit.name}
                        </span>
                      </div>
                      <span className={`text-xs font-semibold ${isChecked ? 'text-primary' : 'text-on-surface-variant'}`}>
                        {fruit.price > 0 ? `+$${fruit.price}` : '+$0'}
                      </span>
                    </label>
                  );
                })}
              </div>
            </div>
          )}

          {/* Size Selection */}
          {product.sizes && product.sizes.length > 0 && (
            <div className="space-y-stack-sm pt-2">
              <h3 className="font-headline-md text-lg sm:text-xl text-on-surface font-semibold">
                Tamaño del Pastel / Porción
              </h3>
              <p className="font-label-sm text-xs text-on-surface-variant uppercase tracking-wider mb-3">
                Para cuántas personas
              </p>
              <div className="flex flex-col gap-3">
                {product.sizes.map((size) => {
                  const isChecked = selectedSizeId === size.id;
                  return (
                    <label
                      key={size.id}
                      onClick={() => setSelectedSizeId(size.id)}
                      className={`relative flex flex-col p-4 rounded-xl cursor-pointer transition-all border ${
                        isChecked
                          ? 'border-primary bg-primary/10 shadow-sm shadow-primary/20'
                          : 'border-outline-variant/40 bg-surface-container-low hover:border-primary/40'
                      }`}
                    >
                      <div className="flex justify-between items-center mb-1">
                        <div className="flex items-center">
                          <div
                            className={`w-5 h-5 rounded-full border-2 mr-3 flex items-center justify-center transition-colors ${
                              isChecked ? 'border-primary bg-primary' : 'border-outline-variant'
                            }`}
                          >
                            {isChecked && (
                              <span className="material-symbols-outlined text-surface-container-lowest text-[13px] font-bold">
                                check
                              </span>
                            )}
                          </div>
                          <span className={`font-body-md text-sm sm:text-base font-bold ${isChecked ? 'text-primary' : 'text-on-surface'}`}>
                            {size.name}
                          </span>
                        </div>
                        <span className="font-headline-md text-base sm:text-lg font-bold text-primary">
                          ${size.price}
                        </span>
                      </div>
                      <span className="font-label-sm text-xs text-on-surface-variant pl-8">
                        {size.desc}
                      </span>
                    </label>
                  );
                })}
              </div>
            </div>
          )}

          {/* Special Instructions */}
          <div className="space-y-stack-sm pt-2">
            <h3 className="font-headline-md text-lg text-on-surface font-semibold">
              Instrucciones Especiales
            </h3>
            <textarea
              value={instructions}
              onChange={(e) => setInstructions(e.target.value)}
              rows={3}
              placeholder="Ej. Dedicatoria en chocolate, alergias, incluir velas, notas para el repartidor..."
              className="w-full bg-surface-container-low border border-outline-variant/40 rounded-xl p-3 text-on-surface font-body-md text-sm focus:border-primary focus:ring-1 focus:ring-primary placeholder:text-on-surface-variant/50 resize-none focus:outline-none"
            ></textarea>
          </div>
        </div>

        {/* Floating Action Area (Sticky at Bottom) */}
        <div className="fixed sm:absolute bottom-0 left-0 w-full z-40 bg-surface-container/95 backdrop-blur-xl border-t border-outline-variant/20 p-4 pb-safe shadow-2xl">
          <div className="max-w-3xl mx-auto flex flex-row gap-3 items-center justify-between">
            {/* Quantity Selector */}
            <div className="flex items-center justify-between bg-surface-container-highest rounded-full p-1 border border-outline-variant/30 shrink-0">
              <button
                type="button"
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                aria-label="Disminuir cantidad"
                className="w-10 h-10 rounded-full flex items-center justify-center text-primary hover:bg-surface-variant transition-colors focus:outline-none"
              >
                <span className="material-symbols-outlined text-lg">remove</span>
              </button>
              <span className="font-headline-md text-base text-on-surface w-8 text-center font-bold">
                {quantity}
              </span>
              <button
                type="button"
                onClick={() => setQuantity((q) => q + 1)}
                aria-label="Aumentar cantidad"
                className="w-10 h-10 rounded-full flex items-center justify-center text-primary hover:bg-surface-variant transition-colors focus:outline-none"
              >
                <span className="material-symbols-outlined text-lg">add</span>
              </button>
            </div>

            {/* Add to Cart Button */}
            <button
              onClick={handleAddToCart}
              className="flex-1 bg-primary-container text-surface-container-lowest font-headline-md text-sm sm:text-base py-3.5 px-6 rounded-full flex justify-between items-center hover:bg-primary transition-all shadow-[0_4px_20px_rgba(217,119,7,0.3)] active:scale-[0.98] focus:outline-none"
            >
              <span className="font-bold flex items-center gap-1.5">
                <span className="material-symbols-outlined text-lg">shopping_bag</span>
                Agregar al Carrito
              </span>
              <span className="font-bold border-l border-surface-container-lowest/30 pl-3">
                ${totalPrice.toFixed(2)}
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

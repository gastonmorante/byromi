import React, { useState } from 'react';
import { useCart } from '../context/CartContext';

export const CartDrawer = () => {
  const {
    items,
    isCartOpen,
    setIsCartOpen,
    removeFromCart,
    updateQuantity,
    subtotal,
    discount,
    discountPercent,
    deliveryFee,
    total,
    couponCode,
    applyCoupon,
    removeCoupon,
    setIsCheckoutOpen,
    setActiveTab
  } = useCart();

  const [inputCoupon, setInputCoupon] = useState('');
  const [couponFeedback, setCouponFeedback] = useState(null);

  if (!isCartOpen) return null;

  const handleApplyCoupon = (e) => {
    e.preventDefault();
    if (!inputCoupon.trim()) return;
    const res = applyCoupon(inputCoupon);
    setCouponFeedback(res);
    if (res.success) {
      setInputCoupon('');
    }
  };

  const handleProceedToCheckout = () => {
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/80 backdrop-blur-sm flex justify-end animate-fadeIn">
      {/* Backdrop click */}
      <div
        className="absolute inset-0"
        onClick={() => setIsCartOpen(false)}
        aria-hidden="true"
      ></div>

      {/* Drawer panel */}
      <div className="relative w-full max-w-md bg-surface-container-low text-on-surface h-full shadow-2xl border-l border-outline-variant/30 flex flex-col z-10">
        {/* Header */}
        <div className="p-container-padding flex items-center justify-between border-b border-surface-container">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>
              shopping_bag
            </span>
            <h2 className="font-headline-md text-xl text-on-surface font-semibold">
              Tu Carrito Artesanal
            </h2>
          </div>
          <button
            onClick={() => setIsCartOpen(false)}
            className="w-9 h-9 rounded-full bg-surface-container hover:bg-surface-variant flex items-center justify-center text-on-surface transition-colors focus:outline-none"
          >
            <span className="material-symbols-outlined text-xl">close</span>
          </button>
        </div>

        {/* Cart items list */}
        <div className="flex-grow overflow-y-auto p-container-padding space-y-4">
          {items.length === 0 ? (
            <div className="text-center py-16 flex flex-col items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-surface-container flex items-center justify-center text-outline mb-4">
                <span className="material-symbols-outlined text-3xl">shopping_basket</span>
              </div>
              <h3 className="font-headline-md text-lg text-on-surface mb-1">Tu carrito está vacío</h3>
              <p className="text-xs text-on-surface-variant max-w-xs mb-6">
                Aún no has agregado los deliciosos postres o volovanes de Romi.
              </p>
              <button
                onClick={() => {
                  setIsCartOpen(false);
                  setActiveTab('menu');
                }}
                className="px-6 py-2.5 bg-primary-container text-surface-container-lowest font-headline-md text-xs uppercase tracking-wider font-semibold rounded-full hover:bg-primary transition-all shadow-md"
              >
                Explorar Nuestra Repostería
              </button>
            </div>
          ) : (
            items.map((item) => (
              <div
                key={item.cartId}
                className="flex gap-3 bg-surface-container/70 p-3 rounded-xl border border-outline-variant/20 hover:border-outline-variant/40 transition-colors"
              >
                {/* Thumb */}
                <div className="w-20 h-20 rounded-lg overflow-hidden shrink-0 bg-surface-container-high relative">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                </div>

                {/* Details */}
                <div className="flex-grow flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start">
                      <h4 className="font-headline-md text-sm text-on-surface font-semibold line-clamp-1">
                        {item.name}
                      </h4>
                      <button
                        onClick={() => removeFromCart(item.cartId)}
                        className="text-on-surface-variant/60 hover:text-error transition-colors p-0.5"
                        title="Eliminar producto"
                      >
                        <span className="material-symbols-outlined text-sm">delete</span>
                      </button>
                    </div>

                    <div className="text-[11px] text-on-surface-variant space-y-0.5 mt-0.5">
                      {item.sizeName && <span className="block">{item.sizeName}</span>}
                      {item.fruitName && (
                        <span className="block text-primary/80 font-medium">Corona: {item.fruitName}</span>
                      )}
                      {item.instructions && (
                        <span className="block italic text-[10px] text-outline line-clamp-1">
                          "{item.instructions}"
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Quantity and Price */}
                  <div className="flex justify-between items-center pt-2 mt-1 border-t border-surface-container-highest/60">
                    <div className="flex items-center bg-surface-container-high rounded-full p-0.5 border border-outline-variant/30">
                      <button
                        onClick={() => updateQuantity(item.cartId, -1)}
                        className="w-6 h-6 rounded-full flex items-center justify-center text-primary hover:bg-surface-variant transition-colors text-xs"
                      >
                        -
                      </button>
                      <span className="w-6 text-center text-xs font-bold text-on-surface">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.cartId, 1)}
                        className="w-6 h-6 rounded-full flex items-center justify-center text-primary hover:bg-surface-variant transition-colors text-xs"
                      >
                        +
                      </button>
                    </div>

                    <span className="font-headline-md text-sm font-bold text-primary">
                      ${(item.price * item.quantity).toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer with summary and checkout */}
        {items.length > 0 && (
          <div className="p-container-padding border-t border-surface-container bg-surface-container/90 backdrop-blur-md space-y-4">
            {/* Coupon input */}
            <div>
              {discountPercent > 0 ? (
                <div className="flex items-center justify-between bg-primary/10 border border-primary/40 px-3 py-2 rounded-xl text-xs">
                  <span className="text-primary font-medium flex items-center gap-1">
                    <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>
                      check_circle
                    </span>
                    Cupón {couponCode} (-{discountPercent}%)
                  </span>
                  <button
                    onClick={removeCoupon}
                    className="text-on-surface-variant hover:text-error text-xs font-bold"
                  >
                    Quitar
                  </button>
                </div>
              ) : (
                <form onSubmit={handleApplyCoupon} className="flex gap-2">
                  <input
                    type="text"
                    value={inputCoupon}
                    onChange={(e) => setInputCoupon(e.target.value)}
                    placeholder="Código de cupón (ej: ROMI10)"
                    className="flex-1 bg-surface-container-low border border-outline-variant/30 rounded-xl px-3 py-2 text-xs text-on-surface placeholder:text-on-surface-variant/50 focus:border-primary focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 bg-surface-container-high border border-outline-variant/40 hover:border-primary text-primary rounded-xl text-xs font-semibold uppercase tracking-wider transition-colors"
                  >
                    Aplicar
                  </button>
                </form>
              )}
              {couponFeedback && (
                <p
                  className={`text-[11px] mt-1.5 ${
                    couponFeedback.success ? 'text-primary font-medium' : 'text-error'
                  }`}
                >
                  {couponFeedback.message}
                </p>
              )}
            </div>

            {/* Calculations Breakdown */}
            <div className="space-y-1.5 text-xs text-on-surface-variant border-t border-surface-container-highest/60 pt-3">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="text-on-surface font-medium">${subtotal.toFixed(2)}</span>
              </div>
              {discount > 0 && (
                <div className="flex justify-between text-primary font-medium">
                  <span>Descuento ({discountPercent}%)</span>
                  <span>-${discount.toFixed(2)}</span>
                </div>
              )}
              <div className="flex justify-between">
                <span>Envío (Playa del Carmen)</span>
                <span>
                  {deliveryFee === 0 ? (
                    <span className="text-primary font-semibold">¡GRATIS!</span>
                  ) : (
                    `$${deliveryFee.toFixed(2)}`
                  )}
                </span>
              </div>
              {subtotal < 450 && (
                <p className="text-[10px] text-outline text-right">
                  Envío gratis en compras mayores a $450
                </p>
              )}
              <div className="flex justify-between text-sm sm:text-base font-bold text-on-surface border-t border-outline-variant/30 pt-2 mt-2">
                <span>Total a Pagar</span>
                <span className="font-headline-md text-primary text-lg sm:text-xl">
                  ${total.toFixed(2)} <span className="text-xs font-normal text-on-surface-variant">MXN</span>
                </span>
              </div>
            </div>

            {/* Checkout Button */}
            <button
              onClick={handleProceedToCheckout}
              className="w-full bg-primary-container text-surface-container-lowest font-headline-md text-sm py-3.5 px-6 rounded-full flex justify-between items-center hover:bg-primary transition-all shadow-[0_4px_20px_rgba(217,119,7,0.3)] active:scale-[0.98] font-bold"
            >
              <span className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-lg">check_circle</span>
                Confirmar Pedido
              </span>
              <span>${total.toFixed(2)} MXN</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

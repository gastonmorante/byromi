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
    setActiveTab,
    sendWhatsAppOrder
  } = useCart();

  const [inputCoupon, setInputCoupon] = useState('');
  const [couponFeedback, setCouponFeedback] = useState(null);

  // Direct checkout customer inputs
  const [customerName, setCustomerName] = useState('');
  const [address, setAddress] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('Efectivo al recibir');
  const [notes, setNotes] = useState('');
  const [formError, setFormError] = useState('');

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

  const handleSubmitWhatsApp = (e) => {
    e.preventDefault();
    if (!customerName.trim()) {
      setFormError('Por favor ingresa tu nombre para que Romi sepa a quién atender.');
      return;
    }
    setFormError('');

    sendWhatsAppOrder({
      customerName: customerName.trim(),
      address: address.trim() || 'Playa del Carmen (A convenir por WhatsApp)',
      paymentMethod,
      notes: notes.trim()
    });

    setIsCartOpen(false);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/75 backdrop-blur-sm flex justify-end animate-fadeIn">
      {/* Backdrop click */}
      <div
        className="absolute inset-0"
        onClick={() => setIsCartOpen(false)}
        aria-hidden="true"
      ></div>

      {/* Drawer panel with luxury editorial styling */}
      <div className="relative w-full max-w-lg bg-[#FAF8F5] text-on-surface h-full shadow-[0_0_50px_rgba(0,0,0,0.3)] border-l border-outline-variant/30 flex flex-col z-10">
        {/* Header */}
        <div className="px-6 py-5 flex items-center justify-between border-b border-surface-container bg-surface/90 backdrop-blur-md">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
              <span className="material-symbols-outlined text-2xl">shopping_bag</span>
            </div>
            <div>
              <h2 className="font-headline-sm text-xl text-primary font-bold tracking-tight">
                Tu Carrito de Hogar
              </h2>
              <p className="font-label-sm text-xs text-secondary font-medium tracking-wide">
                Cocina con Amor By Romi
              </p>
            </div>
          </div>
          <button
            onClick={() => setIsCartOpen(false)}
            className="w-9 h-9 rounded-full bg-surface-container hover:bg-surface-container-high flex items-center justify-center text-on-surface-variant transition-colors focus:outline-none"
            aria-label="Cerrar carrito"
          >
            <span className="material-symbols-outlined text-xl">close</span>
          </button>
        </div>

        {/* Cart items list */}
        <div className="flex-grow overflow-y-auto px-6 py-5 space-y-4">
          {items.length === 0 ? (
            <div className="text-center py-20 flex flex-col items-center justify-center">
              <div className="w-20 h-20 rounded-full bg-surface-container-high/60 flex items-center justify-center text-secondary/70 mb-4 shadow-inner">
                <span className="material-symbols-outlined text-4xl">soup_kitchen</span>
              </div>
              <h3 className="font-headline-sm text-xl text-primary font-semibold mb-1">
                Tu mesa está esperando
              </h3>
              <p className="font-body-md text-sm text-on-surface-variant max-w-xs mb-6 leading-relaxed">
                Aún no has agregado tus guisados caseros, pastas o postres de antaño de Romi.
              </p>
              <button
                onClick={() => {
                  setIsCartOpen(false);
                  setActiveTab('menu');
                }}
                className="px-8 py-3 bg-secondary text-on-secondary font-label-lg text-sm rounded-full hover:bg-on-secondary-container transition-all shadow-md active:scale-95 font-bold"
              >
                Explorar Nuestro Menú
              </button>
            </div>
          ) : (
            <>
              {/* Product cards */}
              <div className="space-y-3">
                {items.map((item) => (
                  <div
                    key={item.cartId}
                    className="flex gap-3.5 bg-white p-3.5 rounded-2xl border border-outline-variant/30 shadow-[0_2px_8px_rgba(59,39,30,0.04)] hover:shadow-md transition-all"
                  >
                    {/* Thumbnail */}
                    <div className="w-20 h-20 rounded-xl overflow-hidden shrink-0 bg-surface-container relative">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                    </div>

                    {/* Details */}
                    <div className="flex-grow flex flex-col justify-between">
                      <div>
                        <div className="flex justify-between items-start gap-2">
                          <h4 className="font-headline-sm text-sm text-primary font-bold line-clamp-1 leading-snug">
                            {item.name}
                          </h4>
                          <button
                            onClick={() => removeFromCart(item.cartId)}
                            className="text-on-surface-variant/40 hover:text-error transition-colors p-1 rounded-full hover:bg-error/10"
                            title="Eliminar del pedido"
                          >
                            <span className="material-symbols-outlined text-base">delete</span>
                          </button>
                        </div>

                        <div className="text-[11px] text-on-surface-variant space-y-0.5 mt-1">
                          {item.sizeName && (
                            <span className="inline-block bg-surface-container px-2 py-0.5 rounded-md font-medium text-secondary mr-1">
                              {item.sizeName}
                            </span>
                          )}
                          {item.fruitName && (
                            <span className="block text-primary/80 font-medium mt-0.5">
                              Guarnición: {item.fruitName}
                            </span>
                          )}
                          {item.instructions && (
                            <span className="block italic text-[10px] text-on-surface-variant/70 line-clamp-1">
                              "{item.instructions}"
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Quantity and Price */}
                      <div className="flex justify-between items-center pt-2 mt-1 border-t border-surface-container/60">
                        <div className="flex items-center bg-surface-container rounded-full p-0.5 border border-outline-variant/30">
                          <button
                            onClick={() => updateQuantity(item.cartId, -1)}
                            className="w-6 h-6 rounded-full flex items-center justify-center text-primary hover:bg-white transition-colors text-xs font-bold"
                            aria-label="Disminuir cantidad"
                          >
                            -
                          </button>
                          <span className="w-6 text-center text-xs font-bold text-on-surface">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.cartId, 1)}
                            className="w-6 h-6 rounded-full flex items-center justify-center text-primary hover:bg-white transition-colors text-xs font-bold"
                            aria-label="Aumentar cantidad"
                          >
                            +
                          </button>
                        </div>

                        <span className="font-headline-sm text-sm font-bold text-secondary">
                          ${(item.price * item.quantity).toFixed(2)}{' '}
                          <span className="text-[10px] text-on-surface-variant font-normal">MXN</span>
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Seamless Delivery Information Form */}
              <div className="bg-white p-4 rounded-2xl border border-outline-variant/30 shadow-sm space-y-3 mt-4">
                <div className="flex items-center gap-2 border-b border-surface-container pb-2">
                  <span className="material-symbols-outlined text-secondary text-lg">local_shipping</span>
                  <span className="font-headline-sm text-sm font-bold text-primary">
                    Datos para la Entrega en Playa del Carmen
                  </span>
                </div>

                {formError && (
                  <div className="p-2.5 bg-red-50 border border-red-200 text-red-700 text-xs rounded-xl flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-sm">error</span>
                    <span>{formError}</span>
                  </div>
                )}

                <div className="space-y-2.5 text-xs">
                  <div>
                    <label className="block text-[11px] font-semibold text-on-surface-variant mb-1">
                      ¿A nombre de quién entregamos? *
                    </label>
                    <input
                      type="text"
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      placeholder="Tu nombre completo"
                      className="w-full bg-[#FAF8F5] border border-outline-variant/40 rounded-xl px-3 py-2 text-xs text-on-surface placeholder:text-on-surface-variant/50 focus:border-secondary focus:bg-white focus:outline-none transition-colors"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold text-on-surface-variant mb-1">
                      Dirección o Colonia en Playa del Carmen
                    </label>
                    <input
                      type="text"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      placeholder="Ej. Av. 10 con Calle 12 Centro / Playacar / Para recoger"
                      className="w-full bg-[#FAF8F5] border border-outline-variant/40 rounded-xl px-3 py-2 text-xs text-on-surface placeholder:text-on-surface-variant/50 focus:border-secondary focus:bg-white focus:outline-none transition-colors"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    <div>
                      <label className="block text-[11px] font-semibold text-on-surface-variant mb-1">
                        Forma de Pago
                      </label>
                      <select
                        value={paymentMethod}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                        className="w-full bg-[#FAF8F5] border border-outline-variant/40 rounded-xl px-2.5 py-2 text-xs text-on-surface focus:border-secondary focus:bg-white focus:outline-none transition-colors font-medium"
                      >
                        <option value="Efectivo al recibir">Efectivo al recibir</option>
                        <option value="Transferencia SPEI">Transferencia SPEI</option>
                        <option value="Tarjeta al recibir">Tarjeta al recibir</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[11px] font-semibold text-on-surface-variant mb-1">
                        Especificaciones (Opcional)
                      </label>
                      <input
                        type="text"
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                        placeholder="Ej. Salsa aparte, timbre 2B"
                        className="w-full bg-[#FAF8F5] border border-outline-variant/40 rounded-xl px-3 py-2 text-xs text-on-surface placeholder:text-on-surface-variant/50 focus:border-secondary focus:bg-white focus:outline-none transition-colors"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Coupon input */}
              <div className="bg-white p-3 rounded-2xl border border-outline-variant/30 text-xs">
                {discountPercent > 0 ? (
                  <div className="flex items-center justify-between bg-secondary/10 border border-secondary/30 px-3 py-2 rounded-xl">
                    <span className="text-secondary font-semibold flex items-center gap-1">
                      <span className="material-symbols-outlined text-sm">check_circle</span>
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
                      className="flex-1 bg-[#FAF8F5] border border-outline-variant/40 rounded-xl px-3 py-2 text-xs text-on-surface placeholder:text-on-surface-variant/50 focus:border-secondary focus:bg-white focus:outline-none uppercase"
                    />
                    <button
                      type="submit"
                      className="px-4 py-2 bg-surface-container hover:bg-surface-container-high text-secondary border border-outline-variant/40 rounded-xl text-xs font-bold tracking-wide transition-colors"
                    >
                      Aplicar
                    </button>
                  </form>
                )}
                {couponFeedback && (
                  <p
                    className={`text-[11px] mt-1.5 ${
                      couponFeedback.success ? 'text-green-700 font-medium' : 'text-red-600'
                    }`}
                  >
                    {couponFeedback.message}
                  </p>
                )}
              </div>
            </>
          )}
        </div>

        {/* Footer with summary and single primary WhatsApp CTA */}
        {items.length > 0 && (
          <div className="p-6 border-t border-surface-container bg-surface/95 backdrop-blur-md space-y-4">
            {/* Calculations Breakdown */}
            <div className="space-y-1.5 text-xs text-on-surface-variant">
              <div className="flex justify-between">
                <span>Subtotal ({items.reduce((s, i) => s + i.quantity, 0)} platillos)</span>
                <span className="text-on-surface font-medium">${subtotal.toFixed(2)} MXN</span>
              </div>
              {discount > 0 && (
                <div className="flex justify-between text-secondary font-medium">
                  <span>Descuento ({discountPercent}%)</span>
                  <span>-${discount.toFixed(2)} MXN</span>
                </div>
              )}
              <div className="flex justify-between">
                <span>Envío en Playa del Carmen</span>
                <span>
                  {deliveryFee === 0 ? (
                    <span className="text-green-700 font-bold">¡GRATIS! 🎉</span>
                  ) : (
                    `$${deliveryFee.toFixed(2)} MXN`
                  )}
                </span>
              </div>
              {subtotal < 450 && (
                <p className="text-[10px] text-secondary text-right font-medium">
                  💡 Agrega ${(450 - subtotal).toFixed(2)} más para envío gratis
                </p>
              )}
              <div className="flex justify-between text-base font-bold text-primary border-t border-surface-container pt-2 mt-2">
                <span className="font-headline-sm text-lg">Total del Pedido</span>
                <span className="font-headline-sm text-xl text-secondary">
                  ${total.toFixed(2)}{' '}
                  <span className="text-xs font-normal text-on-surface-variant">MXN</span>
                </span>
              </div>
            </div>

            {/* Direct WhatsApp CTA Button */}
            <button
              onClick={handleSubmitWhatsApp}
              className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-label-lg text-sm py-4 px-6 rounded-full flex justify-between items-center shadow-[0_6px_25px_rgba(37,211,102,0.4)] hover:shadow-[0_8px_30px_rgba(37,211,102,0.6)] transition-all active:scale-[0.98] font-bold group"
            >
              <span className="flex items-center gap-2">
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                </svg>
                <span>Enviar Pedido a Romi</span>
              </span>
              <span className="bg-white/20 px-3 py-1 rounded-full text-xs font-extrabold group-hover:bg-white/30 transition-colors">
                ${total.toFixed(2)} MXN
              </span>
            </button>
            <p className="text-[11px] text-center text-on-surface-variant flex items-center justify-center gap-1">
              <span className="material-symbols-outlined text-[14px] text-[#25D366]">verified</span>
              <span>Atención directa por WhatsApp con confirmación al instante</span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

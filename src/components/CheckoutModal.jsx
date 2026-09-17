import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import confetti from 'canvas-confetti';

export const CheckoutModal = () => {
  const { isCheckoutOpen, setIsCheckoutOpen, items, total, subtotal, discount, deliveryFee, placeOrder } =
    useCart();

  const [customerName, setCustomerName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('Av. 10 Norte con Calle 12, Centro');
  const [neighborhood, setNeighborhood] = useState('Centro');
  const [notes, setNotes] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('efectivo'); // 'efectivo' | 'transferencia' | 'tarjeta'
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isCheckoutOpen) return null;

  const triggerConfetti = () => {
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#ffb77d', '#d97707', '#ffb59e', '#d3bbff']
      });
    } catch (e) {
      // ignore
    }
  };

  const handleCompleteOrder = (sendToWhatsApp = false) => {
    if (!customerName.trim() || !phone.trim() || !address.trim()) {
      alert('Por favor completa tu nombre, teléfono y dirección de entrega.');
      return;
    }

    setIsSubmitting(true);

    const fullAddress = `${address}, Col. ${neighborhood}, Playa del Carmen`;
    const orderNumber = placeOrder({
      customerName,
      phone,
      address: fullAddress,
      notes,
      paymentMethod
    });

    triggerConfetti();

    if (sendToWhatsApp) {
      // Build WhatsApp message
      const itemsList = items
        .map(
          (i) =>
            `• ${i.quantity}x ${i.name} (${i.sizeName || 'Porción'}${
              i.fruitName ? ' - ' + i.fruitName : ''
            }) - $${(i.price * i.quantity).toFixed(2)}`
        )
        .join('\n');

      const paymentLabel =
        paymentMethod === 'efectivo'
          ? 'Efectivo contra entrega'
          : paymentMethod === 'transferencia'
          ? 'Transferencia SPEI'
          : 'Tarjeta (Terminal al recibir)';

      const message = `*NUEVO PEDIDO EN LÍNEA - RECUERDOS CON SABOR BY ROMI*\n` +
        `-----------------------------------------\n` +
        `*No. de Pedido:* ${orderNumber}\n` +
        `*Cliente:* ${customerName}\n` +
        `*Teléfono:* ${phone}\n` +
        `*Dirección:* ${fullAddress}\n` +
        `${notes ? `*Notas:* ${notes}\n` : ''}` +
        `*Método de Pago:* ${paymentLabel}\n` +
        `-----------------------------------------\n` +
        `*Detalle de Productos:*\n${itemsList}\n` +
        `-----------------------------------------\n` +
        `*Subtotal:* $${subtotal.toFixed(2)} MXN\n` +
        `${discount > 0 ? `*Descuento:* -$${discount.toFixed(2)} MXN\n` : ''}` +
        `*Envío:* $${deliveryFee.toFixed(2)} MXN\n` +
        `*TOTAL:* $${total.toFixed(2)} MXN\n\n` +
        `¡Muchas gracias por su preferencia!`;

      const waUrl = `https://wa.me/5212711049733?text=${encodeURIComponent(message)}`;
      window.open(waUrl, '_blank');
    }

    setIsSubmitting(false);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex justify-center items-center p-4 animate-fadeIn">
      <div className="relative w-full max-w-xl bg-surface-container-low text-on-surface rounded-3xl overflow-hidden border border-outline-variant/30 shadow-2xl flex flex-col my-auto max-h-[90vh]">
        {/* Header */}
        <div className="p-container-padding flex items-center justify-between border-b border-surface-container bg-surface-container/60">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>
              receipt_long
            </span>
            <div>
              <h2 className="font-headline-md text-xl text-on-surface font-semibold">
                Finalizar Pedido
              </h2>
              <p className="text-xs text-on-surface-variant">
                Entrega artesanal fresca en Playa del Carmen
              </p>
            </div>
          </div>

          <button
            onClick={() => setIsCheckoutOpen(false)}
            className="w-9 h-9 rounded-full bg-surface-container hover:bg-surface-variant flex items-center justify-center text-on-surface transition-colors focus:outline-none"
          >
            <span className="material-symbols-outlined text-xl">close</span>
          </button>
        </div>

        {/* Form Body */}
        <div className="p-container-padding overflow-y-auto space-y-4 flex-grow">
          {/* Customer Info */}
          <div className="space-y-3">
            <h3 className="font-headline-md text-sm text-primary uppercase tracking-wider font-semibold">
              1. Datos de Contacto
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs text-on-surface-variant mb-1 font-medium">
                  Nombre Completo *
                </label>
                <input
                  type="text"
                  required
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  placeholder="Ej. Mariana Gómez"
                  className="w-full bg-surface-container border border-outline-variant/30 rounded-xl px-3 py-2.5 text-xs text-on-surface focus:border-primary focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs text-on-surface-variant mb-1 font-medium">
                  WhatsApp / Celular *
                </label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Ej. 984 123 4567"
                  className="w-full bg-surface-container border border-outline-variant/30 rounded-xl px-3 py-2.5 text-xs text-on-surface focus:border-primary focus:outline-none"
                />
              </div>
            </div>
          </div>

          {/* Delivery Address */}
          <div className="space-y-3 pt-2 border-t border-surface-container">
            <h3 className="font-headline-md text-sm text-primary uppercase tracking-wider font-semibold">
              2. Dirección de Entrega (Playa del Carmen)
            </h3>
            <div className="space-y-2.5">
              <div>
                <label className="block text-xs text-on-surface-variant mb-1 font-medium">
                  Calle y Número *
                </label>
                <input
                  type="text"
                  required
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="Ej. Calle 10 Norte entre 5a y 10a Avenida, Edif. Coral Depto 302"
                  className="w-full bg-surface-container border border-outline-variant/30 rounded-xl px-3 py-2.5 text-xs text-on-surface focus:border-primary focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs text-on-surface-variant mb-1 font-medium">
                    Zona / Fraccionamiento
                  </label>
                  <select
                    value={neighborhood}
                    onChange={(e) => setNeighborhood(e.target.value)}
                    className="w-full bg-surface-container border border-outline-variant/30 rounded-xl px-3 py-2.5 text-xs text-on-surface focus:border-primary focus:outline-none"
                  >
                    <option value="Centro">Playa del Carmen Centro</option>
                    <option value="Playacar">Playacar Fase I y II</option>
                    <option value="Gonzalo Guerrero">Col. Gonzalo Guerrero</option>
                    <option value="Zazil-Ha">Col. Zazil-Ha</option>
                    <option value="Colosio">Col. Luis Donaldo Colosio</option>
                    <option value="Ejidal">Col. Ejidal</option>
                    <option value="Real Ibiza">Real Ibiza / Los Olivos</option>
                    <option value="Mayakoba">Mayakoba / Corasol</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs text-on-surface-variant mb-1 font-medium">
                    Referencias para el repartidor
                  </label>
                  <input
                    type="text"
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Ej. Casa portón negro, frente al parque"
                    className="w-full bg-surface-container border border-outline-variant/30 rounded-xl px-3 py-2.5 text-xs text-on-surface focus:border-primary focus:outline-none"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Payment Method */}
          <div className="space-y-3 pt-2 border-t border-surface-container">
            <h3 className="font-headline-md text-sm text-primary uppercase tracking-wider font-semibold">
              3. Forma de Pago
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              {[
                { id: 'efectivo', label: 'Efectivo', icon: 'payments', desc: 'Al recibir en mano' },
                { id: 'transferencia', label: 'SPEI', icon: 'account_balance', desc: 'Transferencia directa' },
                { id: 'tarjeta', label: 'Terminal Tarjeta', icon: 'credit_card', desc: 'Visa / Mastercard' }
              ].map((m) => (
                <button
                  key={m.id}
                  type="button"
                  onClick={() => setPaymentMethod(m.id)}
                  className={`p-3 rounded-xl border text-left flex flex-col justify-between transition-all ${
                    paymentMethod === m.id
                      ? 'border-primary bg-primary/10 shadow-sm'
                      : 'border-outline-variant/30 bg-surface-container hover:border-primary/40'
                  }`}
                >
                  <span className="material-symbols-outlined text-primary text-xl mb-1">
                    {m.icon}
                  </span>
                  <div>
                    <span className="font-headline-md text-xs font-semibold block text-on-surface">
                      {m.label}
                    </span>
                    <span className="text-[10px] text-on-surface-variant block mt-0.5">
                      {m.desc}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-container-padding border-t border-surface-container bg-surface-container/90 backdrop-blur-md flex flex-col sm:flex-row gap-3 items-center justify-between">
          <div>
            <span className="text-xs text-on-surface-variant block">Total a Pagar</span>
            <span className="font-headline-md text-xl sm:text-2xl font-bold text-primary">
              ${total.toFixed(2)} <span className="text-xs font-normal text-on-surface-variant">MXN</span>
            </span>
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            {/* Direct WhatsApp Order */}
            <button
              disabled={isSubmitting}
              onClick={() => handleCompleteOrder(true)}
              className="flex-1 sm:flex-none px-5 py-3 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-black font-headline-md text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all shadow-md active:scale-95"
            >
              <span className="material-symbols-outlined text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>
                chat
              </span>
              Pedir por WhatsApp
            </button>

            {/* In-app Order */}
            <button
              disabled={isSubmitting}
              onClick={() => handleCompleteOrder(false)}
              className="flex-1 sm:flex-none px-5 py-3 rounded-full bg-primary-container hover:bg-primary text-surface-container-lowest font-headline-md text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all shadow-md active:scale-95"
            >
              <span className="material-symbols-outlined text-lg">check</span>
              Confirmar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

import React, { useState, useEffect } from 'react';
import { useCart } from '../context/CartContext';

export const OrderTrackingView = () => {
  const { activeOrder, updateOrderStatus } = useCart();
  const [eta, setEta] = useState(activeOrder?.etaMinutes || 18);

  const order = activeOrder || {
    orderId: 'ROMI-8924',
    status: 'en_camino',
    etaMinutes: 18,
    driver: {
      name: 'Carlos Mendoza',
      vehicle: 'Moto Honda Cargo (Caja Térmica)',
      plate: 'QROO-784-B',
      rating: 4.95,
      photo: '/images/driver_carlos.jpg',
      phone: '+52 984 123 4567'
    },
    destination: 'Playa del Carmen Centro',
    items: [
      { name: '1x Volován de Jaiba', price: 85 },
      { name: '1x Mostachón Artesanal (Fresas Frescas)', price: 140 }
    ],
    total: 225
  };

  const steps = [
    { key: 'recibido', label: 'Recibido', desc: 'Pedido confirmado por el atelier', icon: 'check' },
    { key: 'cocina', label: 'En Cocina', desc: 'Horneando y montando tus postres', icon: 'skillet' },
    { key: 'empaquetando', label: 'Empaquetando', desc: 'Cajas selladas y listas para ruta', icon: 'inventory_2' },
    { key: 'en_camino', label: 'En Camino', desc: `${order.driver.name} está en ruta a tu ubicación.`, icon: 'two_wheeler' },
    { key: 'entregado', label: 'Entregado', desc: '¡Disfruta tus recuerdos con sabor!', icon: 'home' }
  ];

  const currentStepIndex = steps.findIndex((s) => s.key === order.status);
  const activeStepIdx = currentStepIndex >= 0 ? currentStepIndex : 3;

  // Simulate ETA decrementing
  useEffect(() => {
    if (order.status === 'en_camino' && eta > 2) {
      const timer = setInterval(() => {
        setEta((prev) => Math.max(1, prev - 1));
      }, 30000);
      return () => clearInterval(timer);
    }
  }, [order.status, eta]);

  const handleCallDriver = () => {
    window.open(`tel:${order.driver.phone || '+5212711049733'}`);
  };

  const handleDriverWhatsApp = () => {
    const text = encodeURIComponent(
      `¡Hola! Te contacto sobre mi pedido ${order.orderId} de Recuerdos con Sabor By Romi.`
    );
    window.open(`https://wa.me/5212711049733?text=${text}`, '_blank');
  };

  const handleSupportHelp = () => {
    const text = encodeURIComponent(
      `¡Hola Romi! Necesito asistencia con el seguimiento de mi pedido #${order.orderId}.`
    );
    window.open(`https://wa.me/5212711049733?text=${text}`, '_blank');
  };

  return (
    <div className="max-w-[1120px] mx-auto w-full pb-20 pt-2 animate-fadeIn">
      {/* Simulation Controls for testing steps */}
      <div className="mb-6 bg-surface-container-high/60 border border-outline-variant/30 rounded-2xl p-3.5 flex flex-wrap items-center justify-between gap-3 backdrop-blur-md">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-primary text-sm">tune</span>
          <span className="text-xs font-semibold text-on-surface">Simulador de Estado en Vivo:</span>
        </div>
        <div className="flex flex-wrap gap-1.5">
          {steps.map((s, idx) => (
            <button
              key={s.key}
              onClick={() => updateOrderStatus(s.key)}
              className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
                order.status === s.key
                  ? 'bg-primary text-surface-container-lowest font-bold shadow-sm'
                  : 'bg-surface-container text-on-surface-variant hover:bg-surface-variant'
              }`}
            >
              {idx + 1}. {s.label}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-stack-lg">
        {/* Left Column: Map & Driver Info */}
        <div className="md:col-span-7 flex flex-col gap-stack-md">
          {/* Map Container */}
          <div className="relative w-full h-64 md:h-[420px] rounded-2xl overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.5)] border border-outline-variant/30 group">
            <img
              src="/images/map_playa_tracking.jpg"
              alt="Ruta de entrega en Playa del Carmen"
              className="w-full h-full object-cover opacity-90 group-hover:scale-102 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface-container-high via-transparent to-transparent"></div>

            {/* Destination Pin Overlay */}
            <div className="absolute top-4 left-4 bg-surface-container/90 backdrop-blur-md px-3 py-1.5 rounded-full border border-outline-variant/40 flex items-center gap-1.5 text-xs text-on-surface">
              <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse"></span>
              <span className="font-semibold">{order.destination}</span>
            </div>

            {/* ETA Floating Card */}
            <div className="absolute bottom-4 left-4 right-4 bg-surface-container/95 backdrop-blur-md p-4 rounded-xl border border-outline-variant/30 flex justify-between items-center shadow-lg">
              <div>
                <p className="font-label-sm text-[11px] text-on-surface-variant uppercase tracking-widest">
                  {order.status === 'entregado' ? 'Estado Final' : 'Tiempo Estimado de Llegada'}
                </p>
                <p className="font-headline-md text-2xl md:text-3xl text-primary font-bold">
                  {order.status === 'entregado'
                    ? '¡Entregado con Éxito!'
                    : order.status === 'en_camino'
                    ? `${eta - 3} - ${eta} min`
                    : '20 - 25 min'}
                </p>
              </div>

              <div
                className={`h-12 w-12 rounded-full flex items-center justify-center shadow-md ${
                  order.status === 'entregado'
                    ? 'bg-[#25D366] text-black'
                    : 'bg-primary-container text-surface-container-lowest animate-pulse'
                }`}
              >
                <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                  {order.status === 'entregado' ? 'check_circle' : 'two_wheeler'}
                </span>
              </div>
            </div>
          </div>

          {/* Driver Info Card */}
          <div className="bg-surface-container-high rounded-2xl p-6 shadow-xl border border-outline-variant/30 flex flex-col sm:flex-row items-center gap-4">
            <div className="w-20 h-20 rounded-full overflow-hidden shrink-0 border-2 border-primary/40 shadow-md">
              <img
                src={order.driver.photo}
                alt={order.driver.name}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex-grow text-center sm:text-left">
              <div className="flex items-center justify-center sm:justify-start gap-2">
                <h3 className="font-headline-md text-xl text-on-surface font-semibold">
                  {order.driver.name}
                </h3>
                <div className="flex items-center gap-1 bg-surface-variant px-2.5 py-0.5 rounded-full">
                  <span className="material-symbols-outlined text-primary text-xs" style={{ fontVariationSettings: "'FILL' 1" }}>
                    star
                  </span>
                  <span className="font-label-sm text-xs text-on-surface font-semibold">
                    {order.driver.rating}
                  </span>
                </div>
              </div>

              <p className="text-on-surface-variant text-sm mt-0.5">
                {order.driver.vehicle}
              </p>
              <p className="font-label-sm text-xs text-primary font-mono mt-1">
                {order.driver.plate}
              </p>
            </div>

            {/* Quick contact buttons */}
            <div className="flex sm:flex-col gap-2 shrink-0 w-full sm:w-auto">
              <button
                onClick={handleDriverWhatsApp}
                className="flex-1 sm:flex-none px-4 py-2 rounded-full bg-surface-container hover:bg-[#25D366] hover:text-black text-on-surface border border-outline-variant/30 text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
                title="Mensaje al repartidor"
              >
                <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>
                  chat
                </span>
                WhatsApp
              </button>
              <button
                onClick={handleCallDriver}
                className="flex-1 sm:flex-none px-4 py-2 rounded-full bg-surface-container hover:bg-surface-variant text-on-surface border border-outline-variant/30 text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
                title="Llamar al repartidor"
              >
                <span className="material-symbols-outlined text-sm">call</span>
                Llamar
              </button>
            </div>
          </div>
        </div>

        {/* Right Column: Status Timeline & Order Details */}
        <div className="md:col-span-5 flex flex-col gap-stack-md">
          {/* Status Timeline */}
          <div className="bg-surface-container-high rounded-2xl p-6 shadow-xl border border-outline-variant/30">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h2 className="font-headline-md text-2xl text-on-surface font-semibold">
                  {order.status === 'entregado'
                    ? '¡Pedido Entregado!'
                    : order.status === 'en_camino'
                    ? 'Tu pedido está en camino'
                    : 'Preparando tu pedido'}
                </h2>
                <p className="font-label-sm text-xs text-on-surface-variant uppercase tracking-widest mt-0.5">
                  ID: {order.orderId}
                </p>
              </div>
            </div>

            <div className="flex flex-col relative mt-6">
              {/* Connector line */}
              <div className="absolute left-4 top-4 bottom-4 w-0.5 bg-surface-variant z-0"></div>

              {/* Steps */}
              {steps.map((step, idx) => {
                const isPassed = idx < activeStepIdx;
                const isCurrent = idx === activeStepIdx;
                const isFuture = idx > activeStepIdx;

                return (
                  <div key={step.key} className="relative z-10 flex items-start gap-4 mb-6 last:mb-0">
                    {/* Step Icon Bubble */}
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all ${
                        isCurrent
                          ? 'bg-primary-container text-surface-container-lowest border-2 border-primary ring-4 ring-primary/20 animate-pulse'
                          : isPassed
                          ? 'bg-primary text-surface-container-lowest'
                          : 'bg-surface-variant text-outline border border-outline-variant/40'
                      }`}
                    >
                      <span className="material-symbols-outlined text-sm font-bold">
                        {isPassed ? 'check' : step.icon}
                      </span>
                    </div>

                    {/* Step Text */}
                    <div className="pt-0.5">
                      <p
                        className={`text-sm font-semibold ${
                          isCurrent
                            ? 'text-primary'
                            : isPassed
                            ? 'text-on-surface'
                            : 'text-outline'
                        }`}
                      >
                        {step.label}
                      </p>
                      <p className="text-xs text-on-surface-variant mt-0.5">
                        {isCurrent ? step.desc : isPassed ? 'Completado con éxito' : 'Pendiente'}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Order Summary */}
          <div className="bg-surface-container rounded-2xl p-6 shadow-md border border-outline-variant/30">
            <h3 className="font-headline-md text-lg text-on-surface mb-3 font-semibold">
              Resumen del Pedido
            </h3>
            <ul className="space-y-2.5 mb-6 text-sm">
              {order.items?.map((item, idx) => (
                <li key={idx} className="flex justify-between text-on-surface-variant border-b border-surface-container-high pb-2">
                  <span>{item.name}</span>
                  <span className="text-on-surface font-semibold">${item.price}</span>
                </li>
              ))}
              <li className="flex justify-between text-on-surface font-bold pt-1 text-base">
                <span>Total</span>
                <span className="font-headline-md text-primary text-lg">${order.total || 225} MXN</span>
              </li>
            </ul>

            <button
              onClick={handleSupportHelp}
              className="w-full py-3 px-6 rounded-full border border-outline-variant/50 hover:border-primary text-on-surface hover:text-primary transition-colors flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wider focus:outline-none"
            >
              <span className="material-symbols-outlined text-base">help</span>
              ¿Necesitas Ayuda con tu Pedido?
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

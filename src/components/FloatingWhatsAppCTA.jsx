import React, { useState, useEffect } from 'react';

export const FloatingWhatsAppCTA = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasShownInitialGreeting, setHasShownInitialGreeting] = useState(false);

  const phoneNumber = '5212711049733';
  const defaultMessage = encodeURIComponent(
    '¡Hola Romi! 👋 Me gustaría hacer un pedido casero para apapachar el corazón. ¿Qué opciones tienen disponibles para hoy / esta semana?'
  );
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${defaultMessage}`;
  const instagramUrl = 'https://www.instagram.com/recuerdos_consabor/';

  useEffect(() => {
    // Show gentle bubble pop-up after 3.5 seconds
    const timer = setTimeout(() => {
      setIsOpen(true);
      setHasShownInitialGreeting(true);
    }, 3500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <aside aria-label='Atención al cliente por WhatsApp' className='fixed bottom-20 md:bottom-6 right-4 md:right-6 z-40 flex flex-col items-end pointer-events-auto'>
      {/* Expanded Friendly Caregiver Card */}
      {isOpen && (
        <div className='mb-3 w-80 max-w-[calc(100vw-2rem)] bg-surface-container-lowest rounded-2xl shadow-[0_12px_36px_-6px_rgba(59,39,30,0.25)] border border-tertiary-fixed-dim/40 overflow-hidden animate-in fade-in slide-in-from-bottom-3 duration-300'>
          {/* Header with Warm Avatar & Close */}
          <div className='bg-primary-container text-surface px-4 py-3 flex items-center justify-between'>
            <div className='flex items-center gap-2.5'>
              <div className='relative'>
                <img
                  src='/images/logo_by_romi.png'
                  alt='Romi'
                  className='w-9 h-9 rounded-full bg-surface p-1 object-contain shadow-sm'
                />
                <span className='absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-primary-container rounded-full'></span>
              </div>
              <div className='flex flex-col'>
                <span className='font-title-sm text-surface font-bold leading-tight'>
                  Romi • Cocina de Hogar
                </span>
                <span className='font-label-sm text-[11px] text-tertiary-fixed flex items-center gap-1'>
                  <span className='inline-block w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse'></span>
                  En línea para atenderte
                </span>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className='text-surface-container-high hover:text-surface p-1 rounded-full hover:bg-surface-container-high/20 transition-colors'
              aria-label='Cerrar mensaje'
            >
              <span className='material-symbols-outlined text-[18px]'>close</span>
            </button>
          </div>

          {/* Bubble Message in Caregiver / Amigo Fiel Tone */}
          <div className='p-4 bg-surface flex flex-col gap-3'>
            <div className='bg-surface-container-low p-3 rounded-2xl rounded-tl-none border border-outline-variant/30 text-on-surface'>
              <p className='font-body-md text-sm leading-relaxed'>
                ¡Hola! Con mucho cariño preparo tus comidas caseras y postres de antaño. ¿Se te antoja algo rico hoy o prefieres armar tu despensa de congelados para la semana?
              </p>
              <p className='font-body-sm text-xs text-secondary font-medium mt-2'>
                ⏱️ Tiempo de respuesta: menos de 5 min.
              </p>
            </div>

            {/* Direct WhatsApp CTA Button */}
            <a
              href={whatsappUrl}
              target='_blank'
              rel='noopener noreferrer'
              className='w-full py-2.5 px-4 bg-[#25D366] hover:bg-[#20bd5a] text-white font-label-md text-sm font-bold rounded-xl flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all active:scale-[0.98]'
            >
              <svg className='w-5 h-5 fill-current' viewBox='0 0 24 24'>
                <path d='M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z'/>
              </svg>
              <span>Escribir por WhatsApp</span>
            </a>

            {/* Social Instagram Link */}
            <div className='pt-2 border-t border-surface-container flex items-center justify-between text-xs text-on-surface-variant'>
              <span>Síguenos en Instagram:</span>
              <a
                href={instagramUrl}
                target='_blank'
                rel='noopener noreferrer'
                className='font-medium text-secondary hover:underline flex items-center gap-1'
              >
                <span>@recuerdos_consabor</span>
                <span className='material-symbols-outlined text-[14px]'>open_in_new</span>
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Main Floating WhatsApp Circular CTA Button */}
      <div className='relative group'>
        <span className='absolute -inset-1 rounded-full bg-[#25D366] opacity-40 group-hover:opacity-75 animate-ping duration-1000 pointer-events-none'></span>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className='relative flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white p-3.5 md:px-5 md:py-3.5 rounded-full shadow-[0_6px_24px_rgba(37,211,102,0.45)] hover:shadow-[0_8px_30px_rgba(37,211,102,0.6)] transition-all transform hover:scale-105 active:scale-95 focus:outline-none'
          aria-label='Abrir chat de WhatsApp con Romi'
        >
          <svg className='w-7 h-7 fill-current' viewBox='0 0 24 24'>
            <path d='M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z'/>
          </svg>
          <span className='hidden md:inline font-label-lg font-bold text-sm tracking-wide'>
            ¿Hablamos con Romi?
          </span>

          {!hasShownInitialGreeting && (
            <span className='absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-white animate-bounce'></span>
          )}
        </button>
      </div>
    </aside>
  );
};

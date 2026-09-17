import React from 'react';
import { CartProvider, useCart } from './context/CartContext';
import { TopAppBar } from './components/TopAppBar';
import { BottomNavBar } from './components/BottomNavBar';
import { HomeView } from './components/HomeView';
import { MenuView } from './components/MenuView';
import { OrderTrackingView } from './components/OrderTrackingView';
import { ProductDetailModal } from './components/ProductDetailModal';
import { CartDrawer } from './components/CartDrawer';
import { CheckoutModal } from './components/CheckoutModal';
import { FloatingWhatsAppCTA } from './components/FloatingWhatsAppCTA';

const MainLayout = () => {
  const { activeTab, setActiveTab } = useCart();

  return (
    <div className="min-h-screen flex flex-col bg-surface text-on-surface">
      {/* Fixed Top Two-Tier Bar */}
      <TopAppBar />

      {/* Main Content Area */}
      <main className={`flex-grow ${activeTab === 'home' ? 'pt-28 w-full' : 'pt-32 px-4 sm:px-6 md:px-8 max-w-[1360px] mx-auto w-full'}`}>
        {activeTab === 'home' && <HomeView />}
        {activeTab === 'menu' && <MenuView />}
        {activeTab === 'tracking' && <OrderTrackingView />}
      </main>

      {/* Rich Editorial Footer */}
      <footer className="w-full bg-primary-container text-inverse-on-surface pt-space-xl pb-space-lg pb-24 md:pb-space-lg">
        <div className="max-w-[1360px] mx-auto px-margin-mobile lg:px-margin">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter lg:gap-space-xl pb-space-xl border-b border-surface-container-high/15">
            {/* Col 1: Brand */}
            <div className="flex flex-col gap-space-sm">
              <div className="flex flex-col items-start gap-1">
                <img
                  alt="Recuerdos con Sabor By Romi"
                  className="h-14 w-auto object-contain brightness-0 invert opacity-95 mb-1"
                  src="/images/logo_by_romi.svg"
                />
                <span className="font-headline-md text-headline-md text-surface font-semibold">
                  Recuerdos con Sabor
                </span>
              </div>
              <p className="font-label-sm text-label-sm text-tertiary-fixed-dim uppercase tracking-widest">
                By Romi • Cocina Artesanal
              </p>
              <p className="font-body-md text-body-md text-surface-container-high mt-space-xs leading-relaxed">
                Rescatando la memoria culinaria de familia con ingredientes honestos, listos para calentar y disfrutar en la calidez de tu mesa en Playa del Carmen.
              </p>
              <div className="mt-space-sm inline-flex items-center gap-space-xs text-tertiary-fixed font-label-sm text-label-sm">
                <span className="material-symbols-outlined text-[18px]">verified</span>
                <span>Tradición casera congelada al vacío</span>
              </div>
            </div>

            {/* Col 2: Navigation */}
            <div className="flex flex-col gap-space-sm">
              <h4 className="font-title-md text-title-md text-surface font-medium border-b border-surface-container-high/20 pb-space-xs">
                Nuestra Carta
              </h4>
              <ul className="flex flex-col gap-space-xs font-body-md text-body-md text-surface-container-high">
                <li>
                  <button
                    onClick={() => setActiveTab('menu')}
                    className="hover:text-surface transition-colors text-left"
                  >
                    Guisados Congelados al Vacío
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActiveTab('menu')}
                    className="hover:text-surface transition-colors text-left"
                  >
                    Repostería y Panadería Casera
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      setActiveTab('home');
                      setTimeout(() => {
                        const el = document.getElementById('box-lunch');
                        if (el) el.scrollIntoView({ behavior: 'smooth' });
                      }, 100);
                    }}
                    className="hover:text-surface transition-colors text-left"
                  >
                    Box Lunches Corporativos &amp; Juntas
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActiveTab('menu')}
                    className="hover:text-surface transition-colors text-left"
                  >
                    Paquetes Semanales Familiares
                  </button>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/recuerdos_consabor/"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-surface transition-colors"
                  >
                    Instagram: @recuerdos_consabor
                  </a>
                </li>
              </ul>
            </div>

            {/* Col 3: Delivery Schedule */}
            <div className="flex flex-col gap-space-sm">
              <h4 className="font-title-md text-title-md text-surface font-medium border-b border-surface-container-high/20 pb-space-xs">
                Horarios de Entrega
              </h4>
              <p className="font-body-md text-body-md text-surface-container-high">
                Lunes a Viernes: 8:00 AM – 7:00 PM
              </p>
              <p className="font-body-md text-body-md text-surface-container-high">
                Sábados: 9:00 AM – 3:00 PM
              </p>
              <p className="font-body-sm text-body-sm text-tertiary-fixed-dim mt-space-xs">
                *Entregas en todo Playa del Carmen (Centro, Playacar, Corasol y residenciales).
              </p>
            </div>

            {/* Col 4: WhatsApp Direct */}
            <div className="flex flex-col gap-space-sm">
              <h4 className="font-title-md text-title-md text-surface font-medium border-b border-surface-container-high/20 pb-space-xs">
                Atención Personalizada
              </h4>
              <p className="font-body-md text-body-md text-surface-container-high">
                ¿Dudas con tu menú semanal o pedido para juntas?
              </p>
              <div className="bg-surface-container-lowest/10 p-space-md rounded-xl mt-space-xs flex flex-col gap-space-xs backdrop-blur-sm border border-surface-container-high/20">
                <span className="font-label-sm text-label-sm text-tertiary-fixed uppercase font-bold tracking-wider">
                  Línea Directa WhatsApp
                </span>
                <a
                  className="font-title-md text-title-md text-surface font-bold hover:text-tertiary-fixed transition-colors flex items-center gap-space-xs"
                  href="https://wa.me/5212711049733"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="material-symbols-outlined text-secondary-container">chat</span>
                  <span>+52 1 271 104 9733</span>
                </a>
                <span className="font-body-sm text-body-sm text-surface-container-high">
                  Respuesta inmediata en horario de cocina
                </span>
              </div>
            </div>
          </div>

          {/* Bottom Legal */}
          <div className="pt-space-lg flex flex-col sm:flex-row items-center justify-between gap-space-md font-body-sm text-body-sm text-surface-container-high">
            <p>© {new Date().getFullYear()} Recuerdos con Sabor By Romi. Todos los derechos reservados.</p>
            <div className="flex items-center gap-space-lg">
              <button onClick={() => setActiveTab('home')} className="hover:text-surface transition-colors">
                Inicio
              </button>
              <button onClick={() => setActiveTab('menu')} className="hover:text-surface transition-colors">
                Menú & Precios
              </button>
              <a
                href="https://wa.me/5212711049733"
                target="_blank"
                rel="noreferrer"
                className="hover:text-surface transition-colors"
              >
                Contacto Directo
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Mobile Floating Bottom Bar */}
      <BottomNavBar />

      {/* Persistent Floating WhatsApp CTA Button */}
      <FloatingWhatsAppCTA />

      {/* Global Modals & Drawers */}
      <ProductDetailModal />
      <CartDrawer />
      <CheckoutModal />
    </div>
  );
};

export default function App() {
  return (
    <CartProvider>
      <MainLayout />
    </CartProvider>
  );
}

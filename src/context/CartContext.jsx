import React, { createContext, useContext, useState, useEffect } from 'react';
import confetti from 'canvas-confetti';

const CartContext = createContext();

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export const CartProvider = ({ children }) => {
  // Load initial cart from localStorage
  const [items, setItems] = useState(() => {
    try {
      const saved = localStorage.getItem('romi_cart');
      return saved ? JSON.parse(saved) : [
        {
          cartId: 'item-demo-1',
          productId: 'pack-semana-ligera',
          name: "Pack 'Semana Ligera & Sin Prisas'",
          sizeName: 'Paquete Completo (5 comidas)',
          price: 650,
          quantity: 1,
          image: '/images/pack_congelados.jpg'
        },
        {
          cartId: 'item-demo-2',
          productId: 'mostachon-artesanal',
          name: 'Mostachón de Fresa Insignia',
          sizeName: 'Porción Individual',
          fruitName: 'Fresas Frescas Tradicionales',
          price: 140,
          quantity: 1,
          image: '/images/mostachon_artesanal.jpg'
        }
      ];
    } catch {
      return [];
    }
  });

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedProductForModal, setSelectedProductForModal] = useState(null);
  const [activeTab, setActiveTab] = useState('home'); // 'home' | 'menu'
  const [couponCode, setCouponCode] = useState('');
  const [discountPercent, setDiscountPercent] = useState(0);

  // Save cart changes
  useEffect(() => {
    try {
      localStorage.setItem('romi_cart', JSON.stringify(items));
    } catch (e) {
      console.error(e);
    }
  }, [items]);

  const addToCart = (productConfig) => {
    const cartId = `${productConfig.productId}-${productConfig.sizeId || 'default'}-${productConfig.fruitId || 'none'}-${Date.now()}`;
    
    setItems((prevItems) => {
      const existingIndex = prevItems.findIndex(
        (i) =>
          i.productId === productConfig.productId &&
          i.sizeId === productConfig.sizeId &&
          i.fruitId === productConfig.fruitId &&
          i.instructions === productConfig.instructions
      );

      if (existingIndex > -1) {
        const updated = [...prevItems];
        updated[existingIndex].quantity += productConfig.quantity;
        return updated;
      } else {
        return [...prevItems, { ...productConfig, cartId }];
      }
    });

    setIsCartOpen(true);
  };

  const removeFromCart = (cartId) => {
    setItems((prev) => prev.filter((item) => item.cartId !== cartId));
  };

  const updateQuantity = (cartId, delta) => {
    setItems((prev) =>
      prev
        .map((item) => {
          if (item.cartId === cartId) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean)
    );
  };

  const clearCart = () => {
    setItems([]);
  };

  const applyCoupon = (code) => {
    const clean = code.trim().toUpperCase();
    if (clean === 'ROMI10' || clean === 'SABOR10') {
      setDiscountPercent(10);
      setCouponCode(clean);
      return { success: true, message: '¡Cupón aplicado! 10% de descuento.' };
    } else if (clean === 'VERACRUZ15') {
      setDiscountPercent(15);
      setCouponCode(clean);
      return { success: true, message: '¡Cupón de bienvenida! 15% de descuento.' };
    } else {
      return { success: false, message: 'Cupón no válido o expirado.' };
    }
  };

  const removeCoupon = () => {
    setDiscountPercent(0);
    setCouponCode('');
  };

  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const discount = (subtotal * discountPercent) / 100;
  const deliveryFee = subtotal >= 450 || subtotal === 0 ? 0 : 35;
  const total = Math.max(0, subtotal - discount + deliveryFee);
  const cartCount = items.reduce((sum, item) => sum + item.quantity, 0);

  // Send complete order via WhatsApp directly to Romi
  const sendWhatsAppOrder = ({ customerName, address, paymentMethod, notes }) => {
    const phone = '5212711049733';
    const dateStr = new Date().toLocaleDateString('es-MX', {
      weekday: 'long',
      day: 'numeric',
      month: 'long'
    });

    let message = `¡Hola Romi! 👋 Me gustaría hacer el siguiente pedido de *Recuerdos con Sabor By Romi* (${dateStr}):\n\n`;
    message += `📋 *DETALLE DEL PEDIDO:*\n`;

    items.forEach((item, index) => {
      message += `${index + 1}. *${item.quantity}x ${item.name}*\n`;
      if (item.sizeName) {
        message += `   • Porción: ${item.sizeName}\n`;
      }
      if (item.fruitName) {
        message += `   • Guarnición/Detalle: ${item.fruitName}\n`;
      }
      if (item.instructions) {
        message += `   • Nota: "${item.instructions}"\n`;
      }
      message += `   • Importe: $${(item.price * item.quantity).toFixed(2)} MXN\n`;
    });

    message += `\n💰 *RESUMEN DE PAGO:*\n`;
    message += `• Subtotal: $${subtotal.toFixed(2)} MXN\n`;
    if (discount > 0) {
      message += `• Descuento (${couponCode} -${discountPercent}%): -$${discount.toFixed(2)} MXN\n`;
    }
    message += `• Envío (Playa del Carmen): ${deliveryFee === 0 ? '¡GRATIS!' : `$${deliveryFee.toFixed(2)} MXN`}\n`;
    message += `• *TOTAL A PAGAR:* *$${total.toFixed(2)} MXN*\n\n`;

    message += `📍 *DATOS PARA LA ENTREGA:*\n`;
    message += `• Cliente: *${customerName || 'Por confirmar'}*\n`;
    message += `• Dirección / Zona: *${address || 'Playa del Carmen (A convenir)'}*\n`;
    message += `• Método de Pago: *${paymentMethod || 'Efectivo al recibir'}*\n`;
    if (notes && notes.trim()) {
      message += `• Especificaciones: ${notes.trim()}\n`;
    }

    message += `\nQuedo a la espera de su confirmación para prepararlo con mucho amor. ¡Muchas gracias! ❤️`;

    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch {}

    const waUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(waUrl, '_blank');
  };

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        cartCount,
        subtotal,
        discount,
        discountPercent,
        deliveryFee,
        total,
        couponCode,
        applyCoupon,
        removeCoupon,
        isCartOpen,
        setIsCartOpen,
        selectedProductForModal,
        setSelectedProductForModal,
        activeTab,
        setActiveTab,
        sendWhatsAppOrder
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

import React, { createContext, useContext, useState, useEffect } from 'react';

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
          productId: 'volovan-jaiba',
          name: 'Volován de Jaiba a la Veracruzana',
          sizeName: '1 Pieza Artesanal',
          price: 85,
          quantity: 1,
          image: '/images/volovan_jaiba.jpg'
        },
        {
          cartId: 'item-demo-2',
          productId: 'mostachon-artesanal',
          name: 'Mostachón Artesanal',
          sizeName: 'Porción Individual',
          fruitName: 'Fresas Frescas',
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
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [selectedProductForModal, setSelectedProductForModal] = useState(null);
  const [activeTab, setActiveTab] = useState('home'); // 'home' | 'menu' | 'cart' | 'tracking'
  const [couponCode, setCouponCode] = useState('');
  const [discountPercent, setDiscountPercent] = useState(0);

  // Active Order for Tracking View
  const [activeOrder, setActiveOrder] = useState(() => {
    try {
      const savedOrder = localStorage.getItem('romi_active_order');
      if (savedOrder) return JSON.parse(savedOrder);
    } catch (e) {
      console.error(e);
    }
    return {
      orderId: 'ROMI-8924',
      status: 'en_camino', // 'recibido' | 'cocina' | 'empaquetando' | 'en_camino' | 'entregado'
      etaMinutes: 15,
      driver: {
        name: 'Carlos Mendoza',
        vehicle: 'Moto Honda Cargo (Caja Térmica)',
        plate: 'QROO-784-B',
        rating: 4.95,
        photo: '/images/driver_carlos.jpg',
        phone: '+52 984 123 4567'
      },
      destination: 'Av. 10 Norte con Calle 12, Playa del Carmen Centro',
      createdAt: new Date().toISOString(),
      items: [
        { name: '1x Volován de Jaiba', price: 85 },
        { name: '1x Mostachón Artesanal (Fresas Frescas)', price: 140 }
      ],
      total: 225
    };
  });

  // Save cart changes
  useEffect(() => {
    try {
      localStorage.setItem('romi_cart', JSON.stringify(items));
    } catch (e) {
      console.error(e);
    }
  }, [items]);

  // Save order changes
  useEffect(() => {
    try {
      localStorage.setItem('romi_active_order', JSON.stringify(activeOrder));
    } catch (e) {
      console.error(e);
    }
  }, [activeOrder]);

  const addToCart = (productConfig) => {
    const cartId = `${productConfig.productId}-${productConfig.sizeId || 'default'}-${productConfig.fruitId || 'none'}-${Date.now()}`;
    
    setItems((prevItems) => {
      // Check if identical item exists
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
      return { success: true, message: '¡Cupón de bienvenida de Veracruz! 15% de descuento.' };
    } else {
      return { success: false, message: 'Cupón inválido o expirado.' };
    }
  };

  const removeCoupon = () => {
    setDiscountPercent(0);
    setCouponCode('');
  };

  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const discount = (subtotal * discountPercent) / 100;
  const deliveryFee = subtotal > 450 || subtotal === 0 ? 0 : 35;
  const total = Math.max(0, subtotal - discount + deliveryFee);
  const cartCount = items.reduce((sum, item) => sum + item.quantity, 0);

  // Complete checkout & create live order
  const placeOrder = ({ customerName, phone, address, notes, paymentMethod }) => {
    const orderNumber = `ROMI-${Math.floor(1000 + Math.random() * 9000)}`;
    const newOrder = {
      orderId: orderNumber,
      status: 'recibido',
      etaMinutes: 25,
      driver: {
        name: 'Carlos Mendoza',
        vehicle: 'Moto Honda Cargo (Caja Térmica)',
        plate: 'QROO-784-B',
        rating: 4.95,
        photo: '/images/driver_carlos.jpg',
        phone: '+52 984 123 4567'
      },
      customer: { customerName, phone, address, notes, paymentMethod },
      destination: address || 'Playa del Carmen Centro',
      createdAt: new Date().toISOString(),
      items: items.map((i) => ({
        name: `${i.quantity}x ${i.name} (${i.sizeName || ''}${i.fruitName ? ' - ' + i.fruitName : ''})`,
        price: i.price * i.quantity
      })),
      subtotal,
      discount,
      deliveryFee,
      total
    };

    setActiveOrder(newOrder);
    clearCart();
    setIsCheckoutOpen(false);
    setIsCartOpen(false);
    setActiveTab('tracking');

    return orderNumber;
  };

  const updateOrderStatus = (newStatus) => {
    setActiveOrder((prev) => ({
      ...prev,
      status: newStatus
    }));
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
        isCheckoutOpen,
        setIsCheckoutOpen,
        selectedProductForModal,
        setSelectedProductForModal,
        activeTab,
        setActiveTab,
        activeOrder,
        placeOrder,
        updateOrderStatus
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

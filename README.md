# 🍰 Recuerdos con Sabor by Romi

Aplicación web y plataforma de venta en línea para la repostería artesanal **Recuerdos con Sabor by Romi** (Playa del Carmen, Quintana Roo, México).

Basada en la estética y código de Stitch (Dark Mode cálido con tonos ámbar, chocolate y terracota, tipografía *Playfair Display* y *Hanken Grotesk*) y fotografía gastronómica hiperrealista de calidad suprema.

---

## 🚀 Despliegue en Render.com

Este proyecto está listo para desplegarse en **Render.com** como un **Static Site**:

1. En el Dashboard de [Render.com](https://dashboard.render.com/), haz clic en **New +** y selecciona **Static Site**.
2. Conecta tu repositorio de GitHub: `gastonmorante/romiapp`.
3. Configura los siguientes campos:
   - **Name**: `romiapp` (o el nombre que prefieras)
   - **Branch**: `main`
   - **Build Command**: `npm install && npm run build`
   - **Publish Directory**: `dist`
4. En la sección **Redirects/Rewrites**, agrega una regla para SPA:
   - **Type**: `Rewrite`
   - **Source**: `/*`
   - **Destination**: `/index.html`
5. Haz clic en **Create Static Site**. ¡En un par de minutos estará disponible en vivo!

---

## 🛠️ Ejecución Local

```bash
# 1. Clonar el repositorio
git clone https://github.com/gastonmorante/romiapp.git
cd romiapp

# 2. Instalar dependencias
npm install

# 3. Iniciar servidor de desarrollo
npm run dev

# 4. Compilar para producción
npm run build
```

---

## ✨ Características Principales

- **Fotografía de Calidad Suprema**: Fotos de Mostachón, Nuit de Chocolate, Tiramisú, Tres Leches de Papantla, Volován de Jaiba, Carlota de Limón y Pay de Plátano.
- **Historia de Marca**: Retrato editorial de las chefs fundadoras veracruzanas con opción de ver la foto original del atelier.
- **Catálogo & Buscador**: Búsqueda en tiempo real por ingredientes o nombres y filtro por pestañas.
- **Personalizador**: Opciones de fruta fresca, tamaños (individual, mediano, grande fiesta) e instrucciones especiales.
- **Carrito & Checkout**: Soporte de cupones (`ROMI10`, `VERACRUZ15`), cálculo de envío para Playa del Carmen y **envío de orden formateada directo a WhatsApp**.
- **Rastreo de Pedido en Vivo**: Stepper interactivo de 5 fases, mapa nocturno de Playa del Carmen y datos del repartidor en moto.

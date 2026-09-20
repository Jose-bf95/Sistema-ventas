# 📖 MANUAL DE USUARIO COMPLETO
# POS Universal v3.0 — Sistema de Punto de Venta
## Desarrollado por: Jose Becerra · 📱 0424-600-6536

---

# ÍNDICE
1. ¿Qué es este sistema?
2. Primeros pasos — Acceso al sistema
3. Módulo: Dashboard (Panel Principal)
4. Módulo: Inventario
5. Módulo: Facturación (Punto de Venta)
6. Módulo: Cuentas por Cobrar (Fiado)
7. Módulo: Reportes de Ventas
8. Módulo: Configuración
   - 8.1 General (Nombre e identidad)
   - 8.2 Tasas de Cambio (BCV / Paralelo)
   - 8.3 Métodos de Pago (editables)
   - 8.4 Configuración de Fiado
   - 8.5 Descuentos
   - 8.6 Punto de Equilibrio y Gastos Operativos
   - 8.7 Gestión de Usuarios
   - 8.8 Exportar Datos
9. Tipos de Negocio Soportados
10. Unidades de Medida
11. Modo Offline
12. Cómo instalar como App (PWA)
13. Para el vendedor del sistema (White Label)

---

# 1. ¿QUÉ ES ESTE SISTEMA?

El POS Universal es una aplicación web progresiva (PWA) que funciona como sistema de punto de venta para cualquier tipo de negocio. Características principales:

✅ **Funciona en cualquier dispositivo** — teléfono, tablet, computadora
✅ **Sincronización en la nube** — todos los dispositivos ven los mismos datos en tiempo real
✅ **Funciona sin internet** — modo offline, se sincroniza al reconectar
✅ **Multi-usuario** — administradores y trabajadores con distintos permisos
✅ **Doble tasa** — BCV y Paralelo, cambias cuando quieras
✅ **Multi-negocio** — el sistema se puede vender a distintos negocios sin que los datos se mezclen
✅ **Exporta a Google Sheets y CSV** — con un botón

---

# 2. PRIMEROS PASOS — ACCESO AL SISTEMA

## 2.1 Cómo entrar

1. Abre la URL del sistema en tu navegador (ej: https://TU_USUARIO.github.io/pos)
2. Escribe tu correo electrónico y contraseña
3. Presiona **"Ingresar"** o la tecla Enter

## 2.2 Credenciales de demostración (primera vez)

Si Firebase no está configurado aún, usa estas credenciales de prueba:

| Rol | Correo | Contraseña |
|-----|--------|------------|
| 🔑 Administrador | admin@demo.com | admin123 |
| 👤 Trabajador | carlos@demo.com | 1234 |

> ⚠️ Cambia estas credenciales después de configurar Firebase.

## 2.3 Selección de Turno (trabajadores)

Cuando un trabajador entra al sistema, debe seleccionar su nombre de la lista de turno. Esto registra quién hizo cada venta. El administrador no necesita seleccionar turno.

---

# 3. MÓDULO: DASHBOARD (PANEL PRINCIPAL)

El Dashboard muestra un resumen en tiempo real del negocio.

## 3.1 Tarjetas de KPI (métricas clave)

| Tarjeta | Qué muestra |
|---------|-------------|
| 💰 Ventas Hoy | Total facturado en el día en $ y Bs |
| 📈 Ganancia Hoy | Ganancia neta estimada del día |
| 💱 Tasa Activa | Tasa de cambio activa (BCV o Paralelo) |
| 🚦 Stock Crítico | Cuántos productos están en nivel bajo o agotado |

## 3.2 Panel Maestro de Tasas

Desde el Dashboard puedes:
- Ingresar la **Tasa BCV** del día
- Ingresar la **Tasa Paralelo** del día
- Seleccionar cuál tasa aplica para todas las ventas
- Todos los precios en Bs se actualizan automáticamente

## 3.3 Semáforo de Inventario

Muestra los productos con stock bajo o crítico:
- 🟢 **OK** — Stock suficiente (más del doble del mínimo)
- 🟡 **Bajo** — Stock entre 1x y 1.5x el mínimo
- 🔴 **Crítico** — Stock igual o menor al mínimo
- 🔴 **Agotado** — Sin stock

## 3.4 Top Ventas del Día

Lista de los productos más vendidos en el día actual, ordenados por cantidad.

---

# 4. MÓDULO: INVENTARIO

## 4.1 Ver el inventario

La tabla muestra todos los productos con:
- Nombre, categoría, unidad de medida
- Stock disponible y stock mínimo
- Costo por unidad, precio de venta en $ y Bs
- Margen de ganancia y ganancia bruta proyectada
- Estado del stock (semáforo)

**Filtros disponibles:**
- 🔍 Buscar por nombre o categoría
- Filtrar por categoría

## 4.2 Cargar productos de ejemplo

Si es la primera vez que usas el sistema, haz clic en **"📥 Cargar Ejemplos"**. Esto carga 30 productos de ejemplo para distintos tipos de negocios:
- Bodega (arroz, aceite, harina, azúcar, pasta)
- Charcutería (jamón, queso, mortadela)
- Panadería (pan, cachitos, torta)
- Carnicería (carne molida, pollo, costillas, chuleta)
- Licorería (ron, cerveza, whisky, vino)
- Frutería (tomate, aguacate, cambur, lechuga)
- Bebidas (Coca-Cola, Malta, agua, jugo)
- Ferretería / Gas

## 4.3 Agregar un nuevo producto

1. Clic en **"+ Nuevo Producto"**
2. Completa los campos:
   - **Nombre** — nombre completo del producto
   - **Categoría** — tipo (Bodega, Carnicería, etc.)
   - **Unidad de Venta** — ver sección 10
   - **Costo Total de Compra ($)** — cuánto pagaste por toda la mercancía
   - **Cantidad Recibida** — cuántas unidades compraste
   - **Margen de Ganancia (%)** — porcentaje de ganancia deseado
   - **Stock Mínimo** — a partir de cuánto unidades aparece la alerta
3. El sistema calcula automáticamente:
   - Costo por unidad
   - Precio de venta en $ y Bs
   - Ganancia por unidad
   - Ganancia bruta total (si vendes todo)
4. Clic en **"💾 Agregar al Inventario"**

## 4.4 Editar un producto

Clic en el botón **✏️** de la fila del producto. Modifica los campos y guarda.

## 4.5 Eliminar un producto

Clic en el botón **🗑️** y confirma. Esta acción es permanente.

## 4.6 Exportar inventario

- **📊 → Google Sheets** — envía directamente a tu hoja de cálculo (requiere configuración del webhook)
- **📥 Descargar CSV** — descarga archivo que puedes abrir en Excel o Google Sheets

---

# 5. MÓDULO: FACTURACIÓN (PUNTO DE VENTA)

## 5.1 Antes de facturar

- Si eres trabajador, debes seleccionar tu turno al entrar
- El nombre del turno aparece en la pantalla de facturación

## 5.2 Cómo hacer una venta

**Paso 1 — Buscar y agregar productos:**
- Usa el buscador o filtra por categoría
- Haz clic en el producto para añadirlo al carrito
- Para productos fraccionables (kg, litros, etc.) aparece una ventana para ingresar la cantidad exacta (ej: 0.5 kg, 1.25 L)
- Usa los botones **+** y **−** para ajustar cantidades

**Paso 2 — Tipo de pago:**
- **💵 Contado** — precio normal
- **📋 Fiado** — precio con recargo (configurable) + registro de cliente

**Paso 3 — Si es Fiado:**
- Ingresa nombre del cliente (obligatorio)
- Ingresa teléfono (opcional)
- El sistema registra automáticamente la deuda en Cuentas por Cobrar

**Paso 4 — Método de pago:**
Selecciona entre los métodos disponibles (configurables):
- 💵 Efectivo $
- 💴 Efectivo Bs
- 📱 Pago Móvil
- 💳 Zelle
- 🏦 Transferencia
- 🔀 Pago Mixto
- (+ los que hayas agregado en Configuración)

**Paso 5 — Descuento manual (si está permitido):**
- Ingresa el porcentaje de descuento (respetando el límite configurado)
- El total se recalcula al instante

**Paso 6 — Completar la venta:**
- El total aparece en $ y Bs
- Clic en **"✅ Completar Venta"**
- El stock se descuenta automáticamente
- Si es fiado, se registra en cuentas por cobrar

## 5.3 Ventas con unidades fraccionables

Para productos como kg, litros, libras, etc.:
1. Haz clic en el producto
2. Aparece una ventana con botones rápidos (0.25, 0.5, 0.75, 1, 1.5, 2, 3, 5)
3. O escribe la cantidad exacta (ej: 0.750 para 750 gramos)
4. El sistema calcula el total automáticamente
5. Clic en **"✅ Agregar al Carrito"**

---

# 6. MÓDULO: CUENTAS POR COBRAR

## 6.1 Ver clientes con deuda

La pantalla muestra todos los clientes que tienen ventas a fiado pendientes:
- Nombre y teléfono
- Monto total adeudado en $ y Bs

## 6.2 Registrar un pago

1. Haz clic en el nombre del cliente
2. Aparece el detalle de sus facturas pendientes
3. Escribe el monto recibido en el campo correspondiente
4. Clic en **"Registrar"**
5. La factura se marca como ✅ PAGADO
6. El total adeudado del cliente se actualiza automáticamente

---

# 7. MÓDULO: REPORTES DE VENTAS

## 7.1 Filtros de período

- **Hoy** — ventas del día actual
- **Este Mes** — ventas del mes en curso
- **Todas** — historial completo
- **Rango personalizado** — selecciona fecha de inicio y fin

## 7.2 Métricas del período

- 💰 Ingresos totales en $ y Bs
- 📈 Ganancia neta y porcentaje de margen
- 📋 Total facturado a fiado
- 🧾 Número de transacciones

## 7.3 Desglose por método de pago

Muestra cuánto se recibió por cada método (efectivo $, Bs, Zelle, etc.)

## 7.4 Historial detallado

Tabla con todas las ventas del período mostrando: fecha, trabajador, tipo de pago, método, descuento, total, ganancia, y cliente si aplica.

## 7.5 Exportar reportes

- **📊 → Google Sheets** — envía a tu hoja de cálculo automáticamente
- **📥 Exportar CSV** — descarga para Excel/Google Sheets

---

# 8. MÓDULO: CONFIGURACIÓN

Solo el **Administrador** tiene acceso a Configuración.

## 8.1 General — Identidad del Negocio

- **Nombre del Negocio** — aparece en la barra superior y en la pantalla de login. Al cambiarlo se actualiza en todos los dispositivos automáticamente.
- **Tipo de Negocio** — categoría del negocio (bodega, charcutería, panadería, etc.)

## 8.2 Tasas de Cambio

- Ingresa la tasa BCV y la tasa Paralelo del día
- Selecciona cuál aplica para todas las ventas
- Clic en **"💾 Guardar Tasas"**
- Todos los precios en Bs se actualizan en todos los dispositivos

## 8.3 Métodos de Pago (editables)

Desde aquí puedes:
- ✅ Activar o desactivar cualquier método existente
- ✏️ Cambiar el nombre de cualquier método (ej: cambiar "Zelle" por "Venmo")
- 🗑️ Eliminar métodos que no usas
- ➕ Agregar métodos nuevos con cualquier nombre e ícono

**Ejemplo de métodos personalizados:**
- "💰 Efectivo COP" (si recibes pesos colombianos)
- "🏦 Banco Exterior"
- "₿ Bitcoin"
- "🟡 Binance Pay"

**Importante:** Clic en **"💾 Guardar Todo"** después de hacer cambios.

## 8.4 Configuración de Fiado (Crédito)

Define cómo se cobra el recargo en ventas a fiado:

**Opción A — Porcentaje:**
- Ej: 10% → un producto de $20 se vende a $22 en fiado

**Opción B — Monto fijo por unidad:**
- Ej: +$2 → un producto de $20 se vende a $22 en fiado

El cambio aplica automáticamente a todas las ventas futuras.

## 8.5 Descuentos

- **Activar/desactivar** la opción de que los trabajadores apliquen descuentos
- **Porcentaje máximo** que puede dar un trabajador (ej: máximo 15%)
- Los administradores siempre pueden dar hasta 100% de descuento

## 8.6 Punto de Equilibrio y Gastos Operativos

Aquí ingresas todos los gastos fijos del negocio en dólares mensuales:

| Gasto | Descripción |
|-------|-------------|
| 💼 Sueldo del Dueño | Lo que el dueño se paga a sí mismo |
| 👥 Colaboradores | Sueldos de empleados |
| 🏠 Renta/Alquiler | Alquiler del local |
| ⚡ Electricidad | Factura de luz |
| 🌐 Internet | Servicio de internet |
| ⛽ Combustible | Gasolina, delivery |
| 🧹 Suministros | Limpieza, papelería |
| 💳 Punto de Venta | Comisión del datáfono |
| 🚚 Transporte/Flete | Traslado de mercancía |
| 📱 Telefonía | Teléfonos, planes |
| 📋 Impuestos | Patentes, licencias |
| 🔧 Otros Gastos | Lo que no cabe en las categorías anteriores |

Puedes agregar gastos adicionales con el botón **"+ Agregar"**.

**El sistema calcula automáticamente:**
- Total de gastos operativos mensuales
- Cuánto debes vender **por día** para cubrir esos gastos
- Cuánto debes vender **por semana**
- Cuánto debes vender **al mes** (punto de equilibrio)
- Todo se muestra en $ y Bs
- Barra de progreso del mes actual vs la meta

## 8.7 Gestión de Usuarios

**Crear nuevo usuario:**
1. Clic en **"+ Nuevo Usuario"**
2. Ingresa nombre, correo, contraseña y rol
3. Rol **Trabajador**: acceso a facturación, inventario y cuentas por cobrar
4. Rol **Administrador**: acceso total incluyendo Configuración
5. Clic en **"💾 Crear Usuario"**

**Editar usuario:**
- Clic en **"✏️ Editar"** junto al usuario
- Modifica nombre, correo, contraseña o rol
- Clic en **"💾 Guardar"**

**Activar/Desactivar usuario:**
- Clic en el botón verde **"✓ Activo"** para desactivar
- El usuario no podrá iniciar sesión pero sus datos se conservan

**Eliminar usuario:**
- Clic en **"🗑️ Eliminar"**
- Esta acción es permanente

**Reglas de seguridad automáticas:**
- No puedes eliminar ni desactivar tu propia cuenta
- Siempre debe existir al menos 1 administrador activo

## 8.8 Exportar Datos

Desde aquí puedes exportar todo:

| Opción | Formato | Qué incluye |
|--------|---------|-------------|
| 📦 Inventario → Sheets | Google Sheets | Todos los productos |
| 📦 Inventario CSV | Descarga | Productos para Excel |
| 🧾 Ventas → Sheets | Google Sheets | Historial de ventas |
| 🧾 Ventas CSV | Descarga | Ventas para Excel |
| 💾 Backup Completo | JSON | TODO: config, productos, ventas, usuarios |

---

# 9. TIPOS DE NEGOCIO SOPORTADOS

El sistema viene con productos de ejemplo para:

| Tipo | Productos de ejemplo |
|------|---------------------|
| 🛒 Bodega / Abasto | Arroz, aceite, harina, azúcar, pasta |
| 🥩 Charcutería | Jamón, queso, mortadela |
| 🍞 Panadería | Pan canilla, cachitos, torta |
| 🥩 Carnicería | Carne molida, pollo, costillas, chuleta |
| 🍷 Licorería/Depósito | Ron, cerveza, whisky, vino |
| 🥬 Frutería | Tomate, aguacate, cambur, lechuga |
| 🥤 Bebidas | Coca-Cola, Malta, agua, jugo |
| 🔧 Ferretería | Bombillos, gas doméstico |

El sistema es adaptable a **cualquier negocio**: restaurantes, farmacias, tiendas de ropa, etc.

---

# 10. UNIDADES DE MEDIDA

El sistema maneja las siguientes unidades. Cuando una unidad es **fraccionable**, aparece una ventana para ingresar cantidades como 0.5, 0.75, 1.25, etc.

| Código | Nombre | Fraccionable |
|--------|--------|-------------|
| und | Unidad | No |
| doc | Docena (12) | No |
| ½und | Media Unidad | Sí |
| kg | Kilogramo | Sí |
| ½kg | Medio Kilogramo | Sí |
| 100g | 100 Gramos | Sí |
| L | Litro | Sí |
| 750ml | Botella 750ml | No |
| 500ml | Frasco 500ml | No |
| 2L | 2 Litros | No |
| paq | Paquete | No |
| caja | Caja | No |
| saco | Saco | No |
| lata | Lata | No |
| pcs | Porción | Sí |
| lb | Libra | Sí |

**Ejemplos de uso:**
- Queso: selecciona **kg**, vendes 0.350 kg → descuenta 0.350 del stock
- Pollo: selecciona **kg**, vendes 1.5 kg → descuenta 1.5 del stock
- Ron: selecciona **750ml** → cada botella descuenta 1 del stock
- Pan: selecciona **und** → cada pan descuenta 1 del stock

---

# 11. MODO OFFLINE

El sistema funciona **sin internet** gracias a Firebase Firestore y el Service Worker:

1. Si se cae el internet, aparece una barra roja: **"⚡ SIN INTERNET"**
2. El sistema sigue funcionando normalmente — puedes seguir facturando
3. Las ventas se guardan localmente en el dispositivo
4. Cuando el internet regresa, todo se sincroniza automáticamente a la nube
5. Los demás dispositivos ven las ventas offline al momento de la reconexión

---

# 12. CÓMO INSTALAR COMO APP (PWA)

### En Android (Chrome):
1. Abre la URL en Chrome
2. Toca el ícono de **menú (⋮)** en la esquina superior derecha
3. Selecciona **"Instalar aplicación"** o **"Agregar a pantalla de inicio"**
4. La app aparece en tu menú de aplicaciones como cualquier app nativa
5. Próximas veces, ábrela directamente desde el ícono — funciona sin barra del navegador

### En iPhone (Safari):
1. Abre la URL en Safari (no Chrome)
2. Toca el ícono de **compartir** (cuadrado con flecha ↑)
3. Desplázate y toca **"Agregar a pantalla de inicio"**
4. Cambia el nombre si quieres y toca **"Agregar"**
5. El ícono aparece en tu pantalla de inicio

### En PC / Windows (Chrome o Edge):
1. Abre la URL en Chrome o Edge
2. En la barra de URL aparece un ícono de instalación **⊕** o **💻**
3. Haz clic y selecciona **"Instalar"**
4. Se abre como aplicación de escritorio sin barra del navegador

---

# 13. PARA EL VENDEDOR DEL SISTEMA (WHITE LABEL)

Si vendes este sistema a diferentes negocios, cada cliente recibe su propia instancia:

## 13.1 Crear instancia para nuevo cliente

1. Descarga los 4 archivos: `index.html`, `sw.js`, `manifest.json`
2. Abre `index.html` en un editor de texto
3. Cambia **una sola línea**:
   ```
   const NEGOCIO_ID = "nombre_del_cliente_unico";
   ```
   Ej: `"supermercado_perez_2025"`, `"bodega_la_esquina"`, `"charcuteria_central"`
4. Crea un nuevo repositorio en GitHub para ese cliente
5. Sube los 3 archivos y activa GitHub Pages
6. El cliente recibe su URL propia con datos 100% separados

## 13.2 Cómo funciona la separación de datos

En Firebase, los datos se organizan así:
```
negocios/
  supermercado_perez_2025/
    productos/  ← solo los productos de Pérez
    ventas/     ← solo las ventas de Pérez
    clientes/   ← solo los clientes de Pérez
  bodega_la_esquina/
    productos/  ← datos completamente separados
    ventas/
    clientes/
```

Nunca se mezclan los datos entre negocios.

## 13.3 Un solo Firebase para todos los clientes

Puedes usar el mismo proyecto Firebase para todos tus clientes. El costo del plan gratuito de Firebase es:
- 50,000 lecturas/día
- 20,000 escrituras/día
- 1 GB de almacenamiento

Esto alcanza para múltiples negocios pequeños-medianos en el plan gratuito.

---

# ¿TIENES PREGUNTAS O NECESITAS SOPORTE?

📱 **Jose Becerra** · 0424-600-6536

*POS Universal v3.0 — White Label · Firebase ☁️ · PWA · Multi-negocio*
*Bodega · Charcutería · Panadería · Carnicería · Licorería · Frutería · y más*

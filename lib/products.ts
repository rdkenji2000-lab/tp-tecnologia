export type Era = "Reciente" | "Antiguo"

export type Product = {
  id: string
  nombre: string
  descripcion: string
  precio: number
  precioAnterior?: number
  marca: string
  era: Era
  categoria: string
  imagen: string
  destacado?: boolean
}

// Precios en pesos argentinos (ARS), referencias del mercado actual.
export const MARCAS = [
  "Toyota",
  "Ford",
  "Chevrolet",
  "Volkswagen",
  "Renault",
  "Universal",
] as const

export const products: Product[] = [
  {
    id: "aceite-motor",
    nombre: "Aceite Sintético 5W-30 (4L)",
    descripcion:
      "El infaltable de todo chofer. Aceite 100% sintético que protege el motor en altas temperaturas y prolonga los intervalos de cambio. Ideal para uso intensivo en ciudad y ruta.",
    precio: 21500,
    precioAnterior: 43000,
    marca: "Universal",
    era: "Reciente",
    categoria: "Lubricantes",
    imagen: "/products/aceite-motor.png",
    destacado: true,
  },
  {
    id: "pastillas-freno",
    nombre: "Pastillas de Freno Cerámicas",
    descripcion:
      "Juego de pastillas delanteras cerámicas de bajo desgaste y frenado silencioso. Mayor durabilidad y menos polvillo en las llantas.",
    precio: 68900,
    marca: "Toyota",
    era: "Reciente",
    categoria: "Frenos",
    imagen: "/products/pastillas-freno.png",
  },
  {
    id: "filtro-aceite",
    nombre: "Filtro de Aceite Premium",
    descripcion:
      "Filtro de alta filtración que retiene impurezas y protege el motor. Compatible con la mayoría de motores nafteros y diésel modernos.",
    precio: 14300,
    marca: "Ford",
    era: "Reciente",
    categoria: "Filtros",
    imagen: "/products/filtro-aceite.png",
  },
  {
    id: "bateria",
    nombre: "Batería 12V 65Ah",
    descripcion:
      "Batería libre de mantenimiento con gran capacidad de arranque en frío. Ideal para autos con múltiples accesorios eléctricos. 18 meses de garantía.",
    precio: 189000,
    marca: "Chevrolet",
    era: "Reciente",
    categoria: "Eléctrico",
    imagen: "/products/bateria.png",
  },
  {
    id: "bujias",
    nombre: "Juego de Bujías Iridium (x4)",
    descripcion:
      "Bujías de iridio para un encendido más eficiente, menor consumo de combustible y arranque suave. Vida útil prolongada.",
    precio: 42700,
    marca: "Volkswagen",
    era: "Reciente",
    categoria: "Encendido",
    imagen: "/products/bujias.png",
  },
  {
    id: "amortiguadores",
    nombre: "Amortiguadores Delanteros (par)",
    descripcion:
      "Par de amortiguadores a gas que mejoran la estabilidad y el confort de manejo. Recomendados para caminos irregulares.",
    precio: 234000,
    marca: "Renault",
    era: "Reciente",
    categoria: "Suspensión",
    imagen: "/products/amortiguadores.png",
  },
  {
    id: "alternador",
    nombre: "Alternador Reforzado 90A",
    descripcion:
      "Alternador remanufacturado con componentes nuevos. Repuesto confiable para modelos clásicos que ya no consiguen originales.",
    precio: 268500,
    marca: "Ford",
    era: "Antiguo",
    categoria: "Eléctrico",
    imagen: "/products/alternador.png",
  },
  {
    id: "kit-embrague",
    nombre: "Kit de Embrague Completo",
    descripcion:
      "Kit completo con plato, disco y rulemán. Repuesto robusto pensado para modelos antiguos de alto kilometraje.",
    precio: 312000,
    marca: "Volkswagen",
    era: "Antiguo",
    categoria: "Transmisión",
    imagen: "/products/kit-embrague.png",
  },
  {
    id: "limpiaparabrisas",
    nombre: "Escobillas Limpiaparabrisas (par)",
    descripcion:
      "Par de escobillas de goma flexible que garantizan una limpieza sin rayas. Instalación rápida y universal.",
    precio: 18900,
    marca: "Universal",
    era: "Reciente",
    categoria: "Accesorios",
    imagen: "/products/limpiaparabrisas.png",
  },
  {
    id: "neumatico",
    nombre: 'Neumático 185/65 R15',
    descripcion:
      "Neumático con excelente agarre en piso mojado y bajo nivel de ruido. Compuesto de larga duración para uso diario.",
    precio: 158000,
    marca: "Chevrolet",
    era: "Reciente",
    categoria: "Neumáticos",
    imagen: "/products/neumatico.png",
  },
  {
    id: "alternador-clasico",
    nombre: "Bomba de Agua Clásica",
    descripcion:
      "Bomba de agua para motores antiguos. Sellado reforzado que evita pérdidas y sobrecalentamiento. Difícil de conseguir.",
    precio: 96500,
    marca: "Renault",
    era: "Antiguo",
    categoria: "Refrigeración",
    imagen: "/products/kit-embrague.png",
  },
  {
    id: "filtro-aire-antiguo",
    nombre: "Filtro de Aire Modelos Antiguos",
    descripcion:
      "Filtro de aire de alto flujo para autos clásicos. Mejora la respiración del motor y protege los cilindros del polvo.",
    precio: 11800,
    marca: "Toyota",
    era: "Antiguo",
    categoria: "Filtros",
    imagen: "/products/filtro-aceite.png",
  },
]

export function formatARS(value: number) {
  return new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
    maximumFractionDigits: 0,
  }).format(value)
}

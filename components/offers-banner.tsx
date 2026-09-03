"use client"

import Image from "next/image"
import { PartyPopper, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { formatARS, type Product } from "@/lib/products"

const CONFETTI_COLORS = [
  "var(--primary)",
  "var(--chart-2)",
  "var(--chart-3)",
  "var(--destructive)",
  "var(--chart-5)",
]

function Confetti() {
  // Serpentinas / confeti para celebrar la apertura.
  const pieces = Array.from({ length: 40 })
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {pieces.map((_, i) => {
        const left = (i * 37) % 100
        const delay = (i % 10) * 0.4
        const duration = 3 + ((i * 7) % 5)
        const color = CONFETTI_COLORS[i % CONFETTI_COLORS.length]
        const width = i % 3 === 0 ? 6 : 4
        const height = i % 4 === 0 ? 16 : 10
        return (
          <span
            key={i}
            className="animate-confetti absolute top-0 rounded-sm"
            style={{
              left: `${left}%`,
              width,
              height,
              backgroundColor: color,
              animationDelay: `${delay}s`,
              animationDuration: `${duration}s`,
            }}
          />
        )
      })}
    </div>
  )
}

export function OffersBanner({
  product,
  onAdd,
}: {
  product: Product
  onAdd: (product: Product) => void
}) {
  const descuento =
    product.precioAnterior != null
      ? Math.round((1 - product.precio / product.precioAnterior) * 100)
      : 50

  return (
    <section
      id="ofertas"
      className="relative overflow-hidden rounded-2xl border border-primary/30 bg-gradient-to-br from-card to-secondary"
    >
      <Confetti />
      <div className="relative grid items-center gap-6 p-6 md:grid-cols-2 md:p-10">
        <div className="flex flex-col gap-4">
          <Badge className="w-fit gap-1.5 bg-primary text-primary-foreground">
            <PartyPopper className="size-4" /> ¡Ofertas de Apertura!
          </Badge>
          <h2 className="font-display text-3xl font-bold leading-tight text-balance md:text-4xl">
            Festejamos la inauguración con un{" "}
            <span className="text-primary">{descuento}% OFF</span>
          </h2>
          <p className="max-w-md leading-relaxed text-muted-foreground">
            Por tiempo limitado, aprovechá el repuesto más elegido por los choferes a mitad de
            precio. ¡Stock limitado por la apertura!
          </p>

          <div className="flex flex-col gap-4 rounded-xl border border-border bg-background/60 p-4 sm:flex-row sm:items-center">
            <div className="relative size-24 shrink-0 overflow-hidden rounded-lg bg-muted">
              <Image
                src={product.imagen || "/placeholder.svg"}
                alt={product.nombre}
                fill
                sizes="96px"
                className="object-cover"
              />
            </div>
            <div className="flex-1">
              <h3 className="font-display text-lg font-semibold">{product.nombre}</h3>
              <div className="mt-1 flex items-end gap-2">
                <span className="text-sm text-muted-foreground line-through">
                  {product.precioAnterior != null ? formatARS(product.precioAnterior) : ""}
                </span>
                <span className="font-display text-2xl font-bold text-primary">
                  {formatARS(product.precio)}
                </span>
              </div>
              <Button onClick={() => onAdd(product)} className="mt-3 w-full font-semibold sm:w-auto">
                <Plus className="size-4" /> Aprovechar oferta
              </Button>
            </div>
          </div>
        </div>

        <div className="relative mx-auto aspect-square w-full max-w-sm overflow-hidden rounded-2xl border border-border">
          <Image
            src="/ofertas-sorpresa.png"
            alt="Cliente sorprendido celebrando las ofertas de apertura con serpentinas"
            fill
            sizes="(max-width: 768px) 100vw, 40vw"
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  )
}

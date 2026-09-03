"use client"

import Image from "next/image"
import { Plus, Check } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { formatARS, type Product } from "@/lib/products"

export function ProductCard({
  product,
  onAdd,
}: {
  product: Product
  onAdd: (product: Product) => void
}) {
  const [added, setAdded] = useState(false)
  const descuento =
    product.precioAnterior != null
      ? Math.round((1 - product.precio / product.precioAnterior) * 100)
      : 0

  function handleAdd() {
    onAdd(product)
    setAdded(true)
    setTimeout(() => setAdded(false), 1200)
  }

  return (
    <article className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card transition-colors hover:border-primary/50">
      <div className="relative aspect-square overflow-hidden bg-muted">
        <Image
          src={product.imagen || "/placeholder.svg"}
          alt={product.nombre}
          fill
          sizes="(max-width: 768px) 50vw, 25vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute left-3 top-3 flex flex-col gap-1.5">
          {descuento > 0 && (
            <Badge className="bg-destructive text-white shadow-md">-{descuento}%</Badge>
          )}
          <Badge variant="secondary" className="backdrop-blur">
            {product.era}
          </Badge>
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-2 p-4">
        <div className="flex items-center justify-between gap-2">
          <span className="text-xs font-semibold uppercase tracking-wide text-primary">
            {product.marca}
          </span>
          <span className="text-xs text-muted-foreground">{product.categoria}</span>
        </div>

        <h3 className="font-display text-lg font-semibold leading-tight text-balance">
          {product.nombre}
        </h3>

        <p className="text-sm leading-relaxed text-muted-foreground line-clamp-3">
          {product.descripcion}
        </p>

        <div className="mt-auto pt-3">
          <div className="flex items-end gap-2">
            {product.precioAnterior != null && (
              <span className="text-sm text-muted-foreground line-through">
                {formatARS(product.precioAnterior)}
              </span>
            )}
            <span className="font-display text-2xl font-bold text-foreground">
              {formatARS(product.precio)}
            </span>
          </div>
          {product.precioAnterior != null && (
            <p className="text-xs font-medium text-primary">
              Ahorrás {formatARS(product.precioAnterior - product.precio)}
            </p>
          )}
        </div>

        <Button
          onClick={handleAdd}
          className="mt-3 w-full font-semibold"
          aria-label={`Añadir ${product.nombre} al carrito`}
        >
          {added ? (
            <>
              <Check className="size-4" /> Agregado
            </>
          ) : (
            <>
              <Plus className="size-4" /> Añadir al carrito
            </>
          )}
        </Button>
      </div>
    </article>
  )
}

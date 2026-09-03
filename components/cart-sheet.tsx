"use client"

import Image from "next/image"
import { Minus, Plus, ShoppingCart, Trash2 } from "lucide-react"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { formatARS, type Product } from "@/lib/products"

export type CartItem = { product: Product; cantidad: number }

export function CartSheet({
  open,
  onOpenChange,
  items,
  onInc,
  onDec,
  onRemove,
}: {
  open: boolean
  onOpenChange: (open: boolean) => void
  items: CartItem[]
  onInc: (id: string) => void
  onDec: (id: string) => void
  onRemove: (id: string) => void
}) {
  const total = items.reduce((acc, i) => acc + i.product.precio * i.cantidad, 0)
  const unidades = items.reduce((acc, i) => acc + i.cantidad, 0)

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="flex w-full flex-col sm:max-w-md">
        <SheetHeader>
          <SheetTitle className="flex items-center gap-2 font-display">
            <ShoppingCart className="size-5 text-primary" />
            Tu carrito
          </SheetTitle>
          <SheetDescription>
            {unidades > 0
              ? `${unidades} ${unidades === 1 ? "producto" : "productos"} en tu carrito`
              : "Todavía no agregaste productos."}
          </SheetDescription>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-3 px-6 text-center text-muted-foreground">
            <ShoppingCart className="size-10 opacity-40" />
            <p className="text-sm">
              El carrito está vacío. Agregá repuestos desde el catálogo.
            </p>
          </div>
        ) : (
          <div className="flex-1 overflow-y-auto px-4">
            <ul className="flex flex-col gap-4 py-2">
              {items.map(({ product, cantidad }) => (
                <li key={product.id} className="flex gap-3">
                  <div className="relative size-16 shrink-0 overflow-hidden rounded-md bg-muted">
                    <Image
                      src={product.imagen || "/placeholder.svg"}
                      alt={product.nombre}
                      fill
                      sizes="64px"
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-1 flex-col gap-1">
                    <div className="flex items-start justify-between gap-2">
                      <span className="text-sm font-medium leading-tight">
                        {product.nombre}
                      </span>
                      <button
                        onClick={() => onRemove(product.id)}
                        className="text-muted-foreground transition-colors hover:text-destructive"
                        aria-label={`Quitar ${product.nombre}`}
                      >
                        <Trash2 className="size-4" />
                      </button>
                    </div>
                    <span className="text-sm font-semibold text-primary">
                      {formatARS(product.precio)}
                    </span>
                    <div className="mt-1 flex items-center gap-2">
                      <Button
                        size="icon"
                        variant="outline"
                        className="size-7"
                        onClick={() => onDec(product.id)}
                        aria-label="Restar unidad"
                      >
                        <Minus className="size-3.5" />
                      </Button>
                      <span className="w-6 text-center text-sm font-medium">{cantidad}</span>
                      <Button
                        size="icon"
                        variant="outline"
                        className="size-7"
                        onClick={() => onInc(product.id)}
                        aria-label="Sumar unidad"
                      >
                        <Plus className="size-3.5" />
                      </Button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}

        {items.length > 0 && (
          <SheetFooter className="gap-3">
            <Separator />
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Total</span>
              <span className="font-display text-2xl font-bold">{formatARS(total)}</span>
            </div>
            <Button className="w-full font-semibold" size="lg">
              Finalizar compra
            </Button>
          </SheetFooter>
        )}
      </SheetContent>
    </Sheet>
  )
}

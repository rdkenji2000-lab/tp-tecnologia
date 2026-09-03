"use client"

import { ShoppingCart, Wrench } from "lucide-react"
import { Button } from "@/components/ui/button"

export function StoreHeader({
  cartCount,
  onOpenCart,
}: {
  cartCount: number
  onOpenCart: () => void
}) {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 md:px-6">
        <a href="#" className="flex items-center gap-2.5">
          <span className="flex size-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <Wrench className="size-5" />
          </span>
          <span className="font-display text-xl font-bold tracking-tight">
            Repuestos<span className="text-primary">MotorSur</span>
          </span>
        </a>

        <nav className="hidden items-center gap-6 text-sm font-medium text-muted-foreground md:flex">
          <a href="#ofertas" className="transition-colors hover:text-foreground">
            Ofertas
          </a>
          <a href="#catalogo" className="transition-colors hover:text-foreground">
            Catálogo
          </a>
          <a href="#contacto" className="transition-colors hover:text-foreground">
            Contacto
          </a>
        </nav>

        <Button
          onClick={onOpenCart}
          variant="secondary"
          className="relative gap-2 font-semibold"
        >
          <ShoppingCart className="size-4" />
          <span className="hidden sm:inline">Ver carrito</span>
          {cartCount > 0 && (
            <span className="absolute -right-2 -top-2 flex size-5 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
              {cartCount}
            </span>
          )}
        </Button>
      </div>
    </header>
  )
}

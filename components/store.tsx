"use client"

import { useMemo, useState } from "react"
import { products, type Product } from "@/lib/products"
import { StoreHeader } from "@/components/store-header"
import { OffersBanner } from "@/components/offers-banner"
import { FiltersBar, type Filters } from "@/components/filters-bar"
import { ProductCard } from "@/components/product-card"
import { CartSheet, type CartItem } from "@/components/cart-sheet"
import { SiteFooter } from "@/components/site-footer"

export function Store() {
  const [cart, setCart] = useState<CartItem[]>([])
  const [cartOpen, setCartOpen] = useState(false)
  const [filters, setFilters] = useState<Filters>({
    marca: "todas",
    era: "todos",
    orden: "relevancia",
  })

  const oferta = products.find((p) => p.destacado) ?? products[0]

  const visibles = useMemo(() => {
    let list = [...products]
    if (filters.marca !== "todas") list = list.filter((p) => p.marca === filters.marca)
    if (filters.era !== "todos") list = list.filter((p) => p.era === filters.era)
    if (filters.orden === "menor") list.sort((a, b) => a.precio - b.precio)
    if (filters.orden === "mayor") list.sort((a, b) => b.precio - a.precio)
    return list
  }, [filters])

  function addToCart(product: Product) {
    setCart((prev) => {
      const existing = prev.find((i) => i.product.id === product.id)
      if (existing) {
        return prev.map((i) =>
          i.product.id === product.id ? { ...i, cantidad: i.cantidad + 1 } : i,
        )
      }
      return [...prev, { product, cantidad: 1 }]
    })
  }

  function inc(id: string) {
    setCart((prev) =>
      prev.map((i) => (i.product.id === id ? { ...i, cantidad: i.cantidad + 1 } : i)),
    )
  }

  function dec(id: string) {
    setCart((prev) =>
      prev
        .map((i) => (i.product.id === id ? { ...i, cantidad: i.cantidad - 1 } : i))
        .filter((i) => i.cantidad > 0),
    )
  }

  function remove(id: string) {
    setCart((prev) => prev.filter((i) => i.product.id !== id))
  }

  const cartCount = cart.reduce((acc, i) => acc + i.cantidad, 0)

  return (
    <div className="min-h-screen">
      <StoreHeader cartCount={cartCount} onOpenCart={() => setCartOpen(true)} />

      <main className="mx-auto max-w-6xl px-4 py-8 md:px-6">
        <section className="mb-10">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">
            Repuestos para tu auto
          </p>
          <h1 className="max-w-2xl font-display text-4xl font-bold leading-tight text-balance md:text-5xl">
            Todo lo que tu vehículo necesita, al mejor precio del mercado
          </h1>
          <p className="mt-3 max-w-xl leading-relaxed text-muted-foreground">
            Repuestos para modelos recientes y antiguos de las principales marcas. Filtrá,
            compará y comprá en minutos.
          </p>
        </section>

        <div className="mb-10">
          <OffersBanner product={oferta} onAdd={addToCart} />
        </div>

        <section id="catalogo" className="scroll-mt-20">
          <div className="mb-6">
            <h2 className="font-display text-2xl font-bold">Catálogo de repuestos</h2>
          </div>

          <div className="mb-6">
            <FiltersBar
              filters={filters}
              onChange={setFilters}
              resultCount={visibles.length}
            />
          </div>

          {visibles.length === 0 ? (
            <p className="py-16 text-center text-muted-foreground">
              No encontramos repuestos con esos filtros. Probá con otra combinación.
            </p>
          ) : (
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {visibles.map((p) => (
                <ProductCard key={p.id} product={p} onAdd={addToCart} />
              ))}
            </div>
          )}
        </section>
      </main>

      <SiteFooter />

      <CartSheet
        open={cartOpen}
        onOpenChange={setCartOpen}
        items={cart}
        onInc={inc}
        onDec={dec}
        onRemove={remove}
      />
    </div>
  )
}

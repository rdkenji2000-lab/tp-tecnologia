"use client"

import { SlidersHorizontal } from "lucide-react"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { MARCAS } from "@/lib/products"

export type Filters = {
  marca: string
  era: string
  orden: string
}

export function FiltersBar({
  filters,
  onChange,
  resultCount,
}: {
  filters: Filters
  onChange: (filters: Filters) => void
  resultCount: number
}) {
  return (
    <div className="flex flex-col gap-4 rounded-xl border border-border bg-card p-4 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex items-center gap-2 text-sm font-semibold">
        <SlidersHorizontal className="size-4 text-primary" />
        Filtrar
        <span className="font-normal text-muted-foreground">
          ({resultCount} productos)
        </span>
      </div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-2">
        <Select
          value={filters.marca}
          onValueChange={(v) => onChange({ ...filters, marca: v })}
        >
          <SelectTrigger className="w-full sm:w-40" aria-label="Filtrar por marca">
            <SelectValue placeholder="Marca" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="todas">Todas las marcas</SelectItem>
            {MARCAS.map((m) => (
              <SelectItem key={m} value={m}>
                {m}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select value={filters.era} onValueChange={(v) => onChange({ ...filters, era: v })}>
          <SelectTrigger className="w-full sm:w-40" aria-label="Filtrar por modelo">
            <SelectValue placeholder="Modelo" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="todos">Recientes y antiguos</SelectItem>
            <SelectItem value="Reciente">Modelos recientes</SelectItem>
            <SelectItem value="Antiguo">Modelos antiguos</SelectItem>
          </SelectContent>
        </Select>

        <Select
          value={filters.orden}
          onValueChange={(v) => onChange({ ...filters, orden: v })}
        >
          <SelectTrigger className="w-full sm:w-40" aria-label="Ordenar por precio">
            <SelectValue placeholder="Ordenar" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="relevancia">Relevancia</SelectItem>
            <SelectItem value="menor">Precio: menor a mayor</SelectItem>
            <SelectItem value="mayor">Precio: mayor a menor</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  )
}

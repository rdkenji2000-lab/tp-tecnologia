import { MapPin, Mail, Clock, Wrench } from "lucide-react"

// Número ficticio de Buenos Aires (código de área 11).
const WHATSAPP_DISPLAY = "+54 9 11 5623-4890"
const WHATSAPP_LINK = "https://wa.me/5491156234890"

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M17.5 14.4c-.3-.15-1.7-.84-1.96-.94-.26-.1-.45-.15-.64.15-.19.29-.74.94-.9 1.13-.17.19-.33.21-.62.07-.29-.15-1.22-.45-2.33-1.44-.86-.77-1.44-1.72-1.6-2-.17-.3-.02-.45.13-.6.13-.13.29-.33.44-.5.14-.17.19-.29.29-.48.1-.19.05-.36-.02-.5-.08-.15-.64-1.55-.88-2.12-.23-.55-.47-.48-.64-.49h-.55c-.19 0-.5.07-.76.36-.26.29-1 .98-1 2.38s1.02 2.76 1.17 2.95c.14.19 2.02 3.08 4.9 4.32.68.29 1.22.47 1.63.6.69.22 1.31.19 1.8.11.55-.08 1.7-.69 1.94-1.36.24-.67.24-1.24.17-1.36-.07-.12-.26-.19-.55-.34zM12 2A10 10 0 0 0 3.5 17.2L2 22l4.95-1.3A10 10 0 1 0 12 2z" />
    </svg>
  )
}

// Logos de redes sociales ficticias (estilo reconocible).
const socials = [
  {
    name: "Chapix",
    handle: "@repuestosmotorsur",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="size-5" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="2" />
        <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
        <circle cx="17.5" cy="6.5" r="1.3" fill="currentColor" />
      </svg>
    ),
  },
  {
    name: "Motorbook",
    handle: "/repuestosmotorsur",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="size-5" aria-hidden="true">
        <path d="M13.5 21v-8h2.7l.4-3.1h-3.1V7.9c0-.9.25-1.5 1.53-1.5H17V3.6c-.3-.04-1.3-.13-2.47-.13-2.45 0-4.13 1.5-4.13 4.25v2.37H7.6V13h2.8v8h3.1z" />
      </svg>
    ),
  },
  {
    name: "Revfeed",
    handle: "@motorsur",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="size-5" aria-hidden="true">
        <path d="M17.7 3h3.1l-6.8 7.8L22 21h-6.3l-4.9-6.4L5.1 21H2l7.3-8.3L2 3h6.5l4.4 5.9L17.7 3zm-1.1 16h1.7L7.5 4.8H5.7L16.6 19z" />
      </svg>
    ),
  },
  {
    name: "TuboClip",
    handle: "RepuestosMotorSur",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="size-5" aria-hidden="true">
        <rect x="2" y="5" width="20" height="14" rx="4" stroke="currentColor" strokeWidth="2" />
        <path d="M10 9.5v5l4.5-2.5L10 9.5z" fill="currentColor" />
      </svg>
    ),
  },
]

export function SiteFooter() {
  return (
    <footer id="contacto" className="mt-16 border-t border-border bg-card">
      <div className="mx-auto max-w-6xl px-4 py-12 md:px-6">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Servicio al cliente */}
          <div className="flex flex-col gap-4">
            <h3 className="font-display text-lg font-bold">Servicio al Cliente</h3>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-lg border border-border bg-background p-3 transition-colors hover:border-primary/60"
            >
              <span className="flex size-10 items-center justify-center rounded-full bg-[#25D366] text-white">
                <WhatsAppIcon className="size-6" />
              </span>
              <span className="flex flex-col">
                <span className="text-xs text-muted-foreground">Escribinos por WhatsApp</span>
                <span className="font-semibold">{WHATSAPP_DISPLAY}</span>
              </span>
            </a>
            <ul className="flex flex-col gap-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Clock className="size-4 text-primary" />
                Lun a Sáb de 8:00 a 19:00 hs
              </li>
              <li className="flex items-center gap-2">
                <Mail className="size-4 text-primary" />
                ventas@repuestosmotorsur.com.ar
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="size-4 text-primary" />
                Av. Warnes 1250, CABA, Buenos Aires
              </li>
            </ul>
          </div>

          {/* Redes sociales */}
          <div className="flex flex-col gap-4">
            <h3 className="font-display text-lg font-bold">Seguinos</h3>
            <div className="grid grid-cols-2 gap-3">
              {socials.map((s) => (
                <a
                  key={s.name}
                  href="#"
                  className="flex items-center gap-2.5 rounded-lg border border-border bg-background p-3 transition-colors hover:border-primary/60 hover:text-primary"
                >
                  <span className="text-foreground transition-colors group-hover:text-primary">
                    {s.icon}
                  </span>
                  <span className="flex flex-col leading-tight">
                    <span className="text-sm font-semibold">{s.name}</span>
                    <span className="text-xs text-muted-foreground">{s.handle}</span>
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Marca */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2.5">
              <span className="flex size-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <Wrench className="size-5" />
              </span>
              <span className="font-display text-xl font-bold">
                Repuestos<span className="text-primary">MotorSur</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Repuestos originales y alternativos para modelos recientes y antiguos. Calidad
              garantizada y los mejores precios del mercado, con envíos a todo Buenos Aires.
            </p>
          </div>
        </div>

        <div className="mt-10 border-t border-border pt-6 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} RepuestosMotorSur. Todos los derechos reservados. Precios
          y datos de contacto de carácter demostrativo.
        </div>
      </div>
    </footer>
  )
}

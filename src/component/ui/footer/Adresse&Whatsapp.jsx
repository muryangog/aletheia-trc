// src/component/ui/footer/ContactInfo.jsx
import { MapPin, Phone, Mail } from "lucide-react";

// ── Couleurs Aletheia ──────────────────────────────────────────────────────
// Bleu marine : #0c2448  |  Vert : #48a848

const googleMapsUrl =
  "https://www.google.com/maps/search/?api=1&query=Aletheia+Truth+Revealed+Church";

export default function ContactInfo() {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center gap-2.5">
      <ContactRow
        href={googleMapsUrl}
        external
        icon={<MapPin size={14} />}
        label={
          <>
            <span className="text-white font-medium">Kinindo, Bujumbura</span> ·
            Salle ex-Saint-Jean-Paul II
          </>
        }
      />
      <ContactRow
        href="https://wa.me/25779006007"
        external
        icon={<Phone size={14} />}
        label="+257 79 00 60 07"
      />
      <ContactRow
        href="mailto:aletheiamediateam@gmail.com"
        icon={<Mail size={14} />}
        label="aletheiamediateam@gmail.com"
      />
    </div>
  );
}

function ContactRow({ href, icon, label, external = false }) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className="flex items-center gap-2.5 text-[13px] text-white/55
                 hover:text-[#5cbd5c] transition-all duration-200 group">
      <div
        className="w-7 h-7 rounded-lg bg-[#48a848]/12 border border-[#48a848]/20
                      flex items-center justify-center flex-shrink-0
                      text-[#48a848] group-hover:bg-[#48a848] group-hover:border-[#48a848]
                      group-hover:text-white transition-all duration-200">
        {icon}
      </div>
      <span>{label}</span>
    </a>
  );
}

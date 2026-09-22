import React from "react";
import { MapPin, Phone, Mail } from "lucide-react";
import { CHURCH_CONTACT } from "@/lib/constants/navigation";

export default function ContactInfo() {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center gap-2.5">
      <ContactRow
        href={CHURCH_CONTACT.googleMapsUrl}
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
        href={CHURCH_CONTACT.whatsappUrl}
        external
        icon={<Phone size={14} />}
        label={CHURCH_CONTACT.phone}
      />
      <ContactRow
        href={`mailto:${CHURCH_CONTACT.email}`}
        icon={<Mail size={14} />}
        label={CHURCH_CONTACT.email}
      />
    </div>
  );
}

function ContactRow({ href, icon, label, external = false }) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className="type-nav flex items-center gap-2.5 text-white/55
                 hover:text-[#5cbd5c] transition-all duration-200 group">
      <div
        className="w-7 h-7 rounded-lg bg-[#48a848]/12 border border-[#48a848]/20
                      flex items-center justify-center shrink-0
                      text-[#48a848] group-hover:bg-[#48a848] group-hover:border-[#48a848]
                      group-hover:text-white transition-all duration-200">
        {icon}
      </div>
      <span>{label}</span>
    </a>
  );
}

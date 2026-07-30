"use client";
import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle, Clock } from "lucide-react";

export default function NousContacter() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulation d'envoi de formulaire
    setTimeout(() => {
      setLoading(false);
      setSent(true);
      setFormData({ name: "", email: "", phone: "", message: "" });
    }, 1500);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 min-h-screen pb-20 transition-colors duration-300">
      {/* 1. HERO BANNER */}
      <section className="relative bg-[#0c2448] text-white py-20 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#48a848_1px,transparent_1px)] [background-size:20px_20px]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#48a848]/20 border border-[#48a848]/40 text-[#5cbd5c] text-xs font-semibold tracking-wider uppercase mb-4">
            Contactez-nous
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            Nous Contacter
          </h1>
          <p className="text-lg md:text-xl text-slate-350 max-w-2xl mx-auto leading-relaxed">
            Une question ? Une requête de prière ? N'hésitez pas à nous écrire, notre équipe vous répondra très rapidement.
          </p>
        </div>
      </section>

      {/* 2. CONTENU PRINCIPAL */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Infos de contact (5 Cols) */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <h2 className="text-2xl font-extrabold text-[#0c2448] dark:text-white mb-6">
                Coordonnées de l'église
              </h2>
              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-8">
                Retrouvez-nous à notre sanctuaire de Bujumbura ou joignez-nous directement par téléphone ou par email.
              </p>
            </div>

            <div className="space-y-6">
              {/* Adresse */}
              <div className="flex items-start gap-4">
                <div className="p-3.5 bg-[#48a848]/10 text-[#48a848] rounded-2xl flex-shrink-0 border border-[#48a848]/20">
                  <MapPin size={22} />
                </div>
                <div>
                  <h4 className="font-bold text-[#0c2448] dark:text-white text-sm">Adresse Physique</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-450 mt-1 leading-relaxed">
                    Kinindo, Bujumbura, Burundi <br />
                    Salle ex-Saint-Jean-Paul II
                  </p>
                </div>
              </div>

              {/* Téléphone & WhatsApp */}
              <div className="flex items-start gap-4">
                <div className="p-3.5 bg-[#48a848]/10 text-[#48a848] rounded-2xl flex-shrink-0 border border-[#48a848]/20">
                  <Phone size={22} />
                </div>
                <div>
                  <h4 className="font-bold text-[#0c2448] dark:text-white text-sm">Téléphone & WhatsApp</h4>
                  <a
                    href="https://wa.me/25779006007"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-slate-500 dark:text-slate-450 mt-1 block hover:underline">
                    +257 79 00 60 07
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="p-3.5 bg-[#48a848]/10 text-[#48a848] rounded-2xl flex-shrink-0 border border-[#48a848]/20">
                  <Mail size={22} />
                </div>
                <div>
                  <h4 className="font-bold text-[#0c2448] dark:text-white text-sm">Adresse Email</h4>
                  <a
                    href="mailto:aletheiamediateam@gmail.com"
                    className="text-xs text-slate-500 dark:text-slate-450 mt-1 block hover:underline">
                    aletheiamediateam@gmail.com
                  </a>
                </div>
              </div>

              {/* Horaires des cultes */}
              <div className="flex items-start gap-4">
                <div className="p-3.5 bg-[#48a848]/10 text-[#48a848] rounded-2xl flex-shrink-0 border border-[#48a848]/20">
                  <Clock size={22} />
                </div>
                <div>
                  <h4 className="font-bold text-[#0c2448] dark:text-white text-sm">Heures de Service</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-450 mt-1 leading-relaxed">
                    Chaque Dimanche <br />
                    1er Culte : 09h00 | 2e Culte : 11h00
                  </p>
                </div>
              </div>
            </div>

            {/* Google Map Iframe */}
            <div className="rounded-3xl overflow-hidden shadow-md border border-slate-200 dark:border-slate-800 h-64 bg-slate-200">
              <iframe
                className="w-full h-full border-none"
                src="https://maps.google.com/maps?q=Kinindo%2C%20Bujumbura%2C%20Burundi&t=&z=14&ie=UTF8&iwloc=&output=embed"
                allowFullScreen
                loading="lazy"
                title="Carte Kinindo Bujumbura"
              />
            </div>
          </div>

          {/* Formulaire de Contact (7 Cols) */}
          <div className="lg:col-span-7 bg-white dark:bg-slate-900 rounded-[2.5rem] p-8 md:p-10 border border-slate-200/80 dark:border-slate-800 shadow-xl">
            <h3 className="text-xl font-extrabold text-[#0c2448] dark:text-white mb-6">
              Envoyer un message
            </h3>

            {sent ? (
              <div className="bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-500/20 rounded-2xl p-6 text-center space-y-3">
                <CheckCircle className="w-12 h-12 text-emerald-500 mx-auto" />
                <h4 className="font-bold text-emerald-800 dark:text-emerald-400 text-lg">Message envoyé !</h4>
                <p className="text-slate-500 dark:text-slate-400 text-sm">
                  Merci de nous avoir écrit. Notre équipe vous recontactera dès que possible.
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="px-6 py-2 bg-emerald-500 text-white font-bold rounded-xl text-xs hover:bg-emerald-600 transition-all">
                  Renvoyer un autre message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Nom complet */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase">
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Votre nom"
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 focus:outline-none focus:ring-2 focus:ring-[#48a848]/20 focus:border-[#48a848] text-sm text-slate-800 dark:text-slate-100 transition-all"
                    />
                  </div>

                  {/* Numéro de téléphone */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase">
                      Téléphone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+257 79 ..."
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 focus:outline-none focus:ring-2 focus:ring-[#48a848]/20 focus:border-[#48a848] text-sm text-slate-800 dark:text-slate-100 transition-all"
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase">
                    Adresse Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="exemple@mail.com"
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 focus:outline-none focus:ring-2 focus:ring-[#48a848]/20 focus:border-[#48a848] text-sm text-slate-800 dark:text-slate-100 transition-all"
                  />
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase">
                    Votre message *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Écrivez votre message ici..."
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 focus:outline-none focus:ring-2 focus:ring-[#48a848]/20 focus:border-[#48a848] text-sm text-slate-800 dark:text-slate-100 transition-all resize-none"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-[#48a848] hover:bg-[#3d913d] text-white font-bold text-sm shadow-md hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed">
                  {loading ? (
                    <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      Envoyer le message
                      <Send size={15} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

        </div>
      </section>
    </div>
  );
}

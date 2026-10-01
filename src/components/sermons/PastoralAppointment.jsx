"use client";

import { useState } from "react";
import {
  CalendarCheck,
  CheckCircle,
  Send,
  Loader2,
  AlertCircle,
} from "lucide-react";
import { PASTORS_LIST } from "@/data/pastors.data";

const inputStyles =
  "w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-800 transition-colors focus:border-[#48a848] focus:outline-none focus:ring-2 focus:ring-[#48a848]/20 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-100";

export default function PastoralAppointment() {
  const [sent, setSent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrorMessage("");

    // Vérification de la connexion Internet
    if (typeof window !== "undefined" && !navigator.onLine) {
      setErrorMessage(
        "Message non envoyé : Aucune connexion Internet disponible. Vérifiez votre réseau puis réessayez.",
      );
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulation d'un appel API/réseau de 2 secondes
      await new Promise((resolve, reject) => {
        setTimeout(() => {
          // Double vérification si la connexion coupe pendant le chargement
          if (navigator.onLine) {
            resolve();
          } else {
            reject(new Error("Connexion perdue"));
          }
        }, 2000);
      });

      setSent(true);
    } catch (error) {
      setErrorMessage(
        "Message non envoyé : Problème de connexion réseau. Veuillez réessayer.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-slate-50 pb-20 text-slate-900 transition-colors duration-200 dark:bg-slate-950 dark:text-slate-100">
      <section className="relative overflow-hidden bg-[#0c2448] py-16 text-white lg:py-20">
        <div className="absolute inset-0 bg-[radial-gradient(#48a848_1px,transparent_1px)] bg-size-[20px_20px] opacity-10" />
        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <span className="mb-4 inline-flex items-center gap-2 rounded-xl border border-[#48a848]/40 bg-[#48a848]/20 px-4 py-1.5 text-xs font-semibold uppercase text-[#5cbd5c]">
            <CalendarCheck size={14} /> Rendez-vous
          </span>
          <h1 className="type-page-title mb-4 text-white">
            Demander un rendez-vous
          </h1>
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-slate-300 md:text-lg">
            Vous souhaitez échanger avec un pasteur ou un membre de notre staff
            ? Envoyez-nous votre demande.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900 sm:p-9">
          {sent ? (
            <div
              role="status"
              aria-live="polite"
              className="space-y-4 py-6 text-center">
              <CheckCircle className="mx-auto h-12 w-12 text-emerald-500" />
              <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">
                Demande reçue
              </h2>
              <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                Votre demande de rendez-vous a bien été reçue. Nous vous
                contacterons prochainement pour vous confirmer le rendez-vous.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {errorMessage && (
                <div className="flex items-center gap-3 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-700 dark:border-red-800/50 dark:bg-red-950/50 dark:text-red-300">
                  <AlertCircle className="h-5 w-5 shrink-0 text-red-600 dark:text-red-400" />
                  <span>{errorMessage}</span>
                </div>
              )}

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="fullName" className="text-sm font-semibold">
                    Nom complet <span aria-hidden="true">*</span>
                  </label>
                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    autoComplete="name"
                    required
                    disabled={isSubmitting}
                    className={inputStyles}
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-semibold">
                    Numéro de téléphone <span aria-hidden="true">*</span>
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    required
                    disabled={isSubmitting}
                    className={inputStyles}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-semibold">
                    Adresse e-mail <span aria-hidden="true">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    disabled={isSubmitting}
                    className={inputStyles}
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="person" className="text-sm font-semibold">
                    Personne souhaitée <span aria-hidden="true">*</span>
                  </label>
                  <select
                    id="person"
                    name="person"
                    required
                    defaultValue=""
                    disabled={isSubmitting}
                    className={inputStyles}>
                    <option value="" disabled>
                      Choisir
                    </option>
                    {PASTORS_LIST.map((pastor) => (
                      <option key={pastor.id} value={pastor.id}>
                        {pastor.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="reason" className="text-sm font-semibold">
                    Motif du rendez-vous <span aria-hidden="true">*</span>
                  </label>
                  <textarea
                    id="reason"
                    name="reason"
                    required
                    rows={3}
                    disabled={isSubmitting}
                    className={`${inputStyles} resize-y`}
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="date" className="text-sm font-semibold">
                    Date souhaitée <span aria-hidden="true">*</span>
                  </label>
                  <input
                    id="date"
                    name="date"
                    type="date"
                    required
                    disabled={isSubmitting}
                    className={inputStyles}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-semibold">
                  Message complémentaire
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  disabled={isSubmitting}
                  className={`${inputStyles} resize-y`}
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#48a848] px-6 py-3.5 text-sm font-bold text-white shadow-sm transition-colors hover:bg-[#3d913d] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#48a848] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-70 dark:focus-visible:ring-offset-slate-900">
                {isSubmitting ? (
                  <>
                    <Loader2 size={18} className="animate-spin" />
                    Envoi en cours...
                  </>
                ) : (
                  <>
                    Envoyer la demande
                    <Send size={15} />
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </section>
    </main>
  );
}

"use client";
import React, { useState } from "react";
import { BookOpen, Heart, Shield, MessageCircle, Send, CheckCircle, Check } from "lucide-react";

export default function NouveauxConvertis() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    whatsapp: true,
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulation d'envoi
    setIsSubmitted(true);
    setTimeout(() => {
      setFormData({ name: "", email: "", phone: "", whatsapp: true, message: "" });
    }, 3000);
  };

  const steps = [
    {
      id: 1,
      title: "La Prière",
      desc: "Parler à Dieu comme à un père. C'est le moyen d'établir une relation personnelle, de lui partager vos joies, vos peines et de recevoir sa direction au quotidien.",
      icon: <Heart className="w-5 h-5 text-white" />,
      color: "bg-emerald-500",
    },
    {
      id: 2,
      title: "La Lecture de la Bible",
      desc: "La Bible est la Parole inspirée de Dieu. Commencez par l'Évangile de Jean pour découvrir la vie de Jésus et comprendre l'immensité de son amour pour vous.",
      icon: <BookOpen className="w-5 h-5 text-white" />,
      color: "bg-blue-500",
    },
    {
      id: 3,
      title: "La Communion Fraternelle",
      desc: "Vous n'êtes pas seul. Rejoindre une église locale comme Aletheia TRC vous permet de grandir spirituellement entouré de frères et sœurs qui partagent la même foi.",
      icon: <Shield className="w-5 h-5 text-white" />,
      color: "bg-indigo-500",
    },
  ];

  return (
    <div className="bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 min-h-screen pb-20 transition-colors duration-300">
      {/* 1. HERO BANNER */}
      <section className="relative bg-[#0c2448] text-white py-20 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#48a848_1px,transparent_1px)] [background-size:20px_20px]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#48a848]/20 border border-[#48a848]/40 text-[#5cbd5c] text-xs font-semibold tracking-wider uppercase mb-4">
            Bienvenue dans la Famille de Dieu
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            Nouveaux Convertis
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Le ciel se réjouit pour votre décision de suivre Jésus-Christ. C'est le début de la plus belle des aventures : la vie éternelle.
          </p>
        </div>
      </section>

      {/* 2. CONTENU PRINCIPAL */}
      <section className="py-16 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          
          {/* Guide & Enseignements */}
          <div className="lg:col-span-2 space-y-12">
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0c2448] dark:text-white mb-4">
                Vos premiers pas dans la foi
              </h2>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                Donner sa vie à Jésus-Christ est l'acte le plus important de votre vie. Vous êtes maintenant une nouvelle création : les choses anciennes sont passées, toutes choses sont devenues nouvelles. Pour vous aider à affermir votre marche chrétienne, voici trois piliers essentiels :
              </p>
            </div>

            {/* Étapes clés */}
            <div className="space-y-6">
              {steps.map((step) => (
                <div
                  key={step.id}
                  className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-3xl p-6 flex flex-col sm:flex-row gap-5 shadow-sm hover:shadow-md transition-all">
                  <div className={`w-12 h-12 rounded-2xl ${step.color} flex items-center justify-center flex-shrink-0 shadow-md`}>
                    {step.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#0c2448] dark:text-white mb-2">{step.title}</h3>
                    <p className="text-sm text-slate-500 dark:text-slate-450 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Versets d'Affermissement */}
            <div className="bg-[#0c2448]/5 dark:bg-white/5 border border-[#0c2448]/10 dark:border-white/10 p-8 rounded-3xl">
              <h3 className="text-xl font-bold text-[#0c2448] dark:text-white mb-4">Promesses divines pour vous</h3>
              <div className="space-y-4 text-sm text-slate-600 dark:text-slate-450 italic">
                <p>
                  « Car Dieu a tant aimé le monde qu'il a donné son Fils unique, afin que quiconque croit en lui ne périsse point, mais qu'il ait la vie éternelle. » <br />
                  <span className="font-bold text-[#48a848] not-italic">— Jean 3:16</span>
                </p>
                <p>
                  « Si tu confesses de ta bouche le Seigneur Jésus, et si tu crois dans ton cœur que Dieu l'a ressuscité des morts, tu seras sauvé. » <br />
                  <span className="font-bold text-[#48a848] not-italic">— Romains 10:9</span>
                </p>
              </div>
            </div>
          </div>

          {/* Formulaire d'accompagnement */}
          <div className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 p-8 rounded-[2.5rem] shadow-xl sticky top-24">
            <h3 className="text-xl font-extrabold text-[#0c2448] dark:text-white mb-2 flex items-center gap-2">
              Nous voulons vous guider
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mb-6">
              Remplissez ce court formulaire pour qu'un pasteur ou un encadreur spirituel vous recontacte afin de prier pour vous et vous accompagner.
            </p>

            {isSubmitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 bg-[#48a848]/10 rounded-full flex items-center justify-center mx-auto text-[#48a848]">
                  <CheckCircle size={36} />
                </div>
                <h4 className="font-bold text-lg text-[#0c2448] dark:text-white">Formulaire Reçu !</h4>
                <p className="text-xs text-slate-550 dark:text-slate-450 leading-relaxed px-4">
                  Merci pour votre confiance. Un membre de l'équipe pastorale vous contactera très rapidement par téléphone ou WhatsApp. Que Dieu vous bénisse !
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-450 mb-1.5">Nom Complet</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-250 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-sm focus:outline-none focus:border-[#48a848] text-slate-850 dark:text-white transition-all"
                    placeholder="Votre nom et prénom"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-450 mb-1.5">Adresse Email</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-250 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-sm focus:outline-none focus:border-[#48a848] text-slate-850 dark:text-white transition-all"
                    placeholder="exemple@email.com"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-450 mb-1.5">Numéro de Téléphone</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-250 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-sm focus:outline-none focus:border-[#48a848] text-slate-850 dark:text-white transition-all"
                    placeholder="+257 ...."
                  />
                </div>

                <div className="flex items-center gap-2.5 py-1">
                  <input
                    type="checkbox"
                    id="whatsapp"
                    checked={formData.whatsapp}
                    onChange={(e) => setFormData({ ...formData, whatsapp: e.target.checked })}
                    className="w-4 h-4 text-[#48a848] border-slate-300 rounded focus:ring-[#48a848]"
                  />
                  <label htmlFor="whatsapp" className="text-xs text-slate-500 dark:text-slate-400 select-none">
                    Disponible sur WhatsApp ?
                  </label>
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-450 mb-1.5">Sujet de prière ou questions (Optionnel)</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows="3"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-250 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-sm focus:outline-none focus:border-[#48a848] text-slate-850 dark:text-white transition-all resize-none"
                    placeholder="Écrivez-nous..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-[#48a848] hover:bg-[#3d913d] text-white text-xs font-bold transition-all flex items-center justify-center gap-2 shadow-md hover:shadow-lg">
                  <Send size={13} />
                  Envoyer ma demande
                </button>
              </form>
            )}

            {/* Pleroma Class Info */}
            <div className="mt-6 pt-5 border-t border-slate-100 dark:border-slate-800 flex gap-3.5 items-start">
              <div className="p-2 bg-[#48a848]/10 rounded-xl text-[#48a848] flex-shrink-0 mt-0.5">
                <MessageCircle size={15} />
              </div>
              <div>
                <h4 className="font-bold text-[11.5px] text-[#0c2448] dark:text-white">PLEROMA Class</h4>
                <p className="text-[10px] text-slate-450 dark:text-slate-400 mt-0.5 leading-relaxed">
                  Notre programme d'affermissement doctrinal. Rejoignez les sessions en vous signalant ci-dessus.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>
    </div>
  );
}

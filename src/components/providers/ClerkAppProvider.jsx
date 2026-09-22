"use client";

import { ClerkProvider } from "@clerk/clerk-react";
import { frFR } from "@clerk/localizations";

const clerkPubKey = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;

// Surcharge personnalisée des textes de la modale Clerk
const customLocalization = {
  ...frFR,
  signIn: {
    ...frFR.signIn,
    start: {
      ...frFR.signIn?.start,
      title: "Connexion",
      subtitle: "pour continuer vers Aletheia TRC",
    },
  },
  signUp: {
    ...frFR.signUp,
    start: {
      ...frFR.signUp?.start,
      title: "Inscription",
      subtitle: "pour rejoindre Aletheia TRC",
    },
  },
};

export default function ClerkAppProvider({ children }) {
  if (!clerkPubKey) {
    return children;
  }

  return (
    <ClerkProvider
      publishableKey={clerkPubKey}
      localization={customLocalization}
      appearance={{
        layout: {
          socialButtonsPlacement: "bottom",
          socialButtonsVariant: "blockButton",
          logoImageUrl: "/Logo_aletheia.png",
        },
        variables: {
          colorPrimary: "#48a848",
          colorText: "#0c2448",
          colorTextSecondary: "#64748b",
          colorBackground: "#ffffff",
          colorInputBackground: "#f8fafc",
          colorInputText: "#0c2448",
          borderRadius: "0.75rem",
          fontFamily: "inherit",
        },
        elements: {
          modalBackdrop: "bg-[#071324]/85 dark:bg-black/80",
          card: "shadow-2xl border border-[#0c2448]/10 dark:border-white/10 rounded-2xl bg-white dark:bg-[#0a1a30] text-[#0c2448] dark:text-white overflow-hidden",

          headerTitle: "text-[#0c2448] dark:text-white font-bold text-xl",
          headerSubtitle: "text-slate-500 dark:text-slate-400 text-sm",

          // Champs de saisie
          formFieldLabel:
            "text-xs font-semibold text-[#0c2448] dark:text-slate-200 mb-1",
          formFieldInput:
            "rounded-xl border border-slate-200 dark:border-white/15 bg-slate-50/70 dark:bg-white/5 text-[#0c2448] dark:text-white focus:border-[#48a848] focus:ring-2 focus:ring-[#48a848]/20 transition-all text-sm py-2.5",

          // Bouton principal (Vert Aletheia)
          formButtonPrimary:
            "bg-[#48a848] hover:bg-[#3a8a3a] text-white font-semibold py-3 rounded-xl shadow-lg shadow-[#48a848]/25 hover:shadow-xl hover:shadow-[#48a848]/30 transition-all active:scale-[0.99] text-sm",

          // Boutons de connexion réseaux (Google, etc.)
          socialButtonsBlockButton:
            "rounded-xl border border-slate-200 dark:border-white/15 bg-white dark:bg-white/5 hover:bg-slate-50 dark:hover:bg-white/10 text-slate-700 dark:text-slate-200 transition-all text-sm font-medium h-11",
          socialButtonsBlockButtonText:
            "font-medium text-slate-700 dark:text-slate-200",

          // Séparateurs
          dividerLine: "bg-slate-200 dark:bg-white/10",
          dividerText: "text-xs text-slate-400 font-medium px-2",

          // Liens et bas de page
          footerAction: "!hidden",
          footerActionText: "!hidden",
          footerActionLink: "!hidden",
          identityPreviewText: "text-[#0c2448] dark:text-white font-medium",
          identityPreviewEditButton: "text-[#48a848] hover:text-[#3a8a3a]",

          // Popover du profil utilisateur connecté (UserButton)
          userButtonPopoverCard:
            "bg-white dark:bg-[#0a1a30] border border-[#0c2448]/10 dark:border-white/10 shadow-2xl rounded-2xl",
          userPreviewMainIdentifier:
            "font-semibold text-[#0c2448] dark:text-white",
          userPreviewSecondaryIdentifier:
            "text-slate-500 dark:text-slate-400 text-xs",
          userButtonPopoverActionButton:
            "hover:bg-slate-100 dark:hover:bg-white/5 rounded-lg transition-colors",
          userButtonPopoverActionButtonText:
            "text-slate-700 dark:text-slate-200 text-sm font-medium",
          userButtonPopoverActionButtonIcon: "text-[#48a848]",

          // Masquage du footer et du badge Development Mode
          footer: "!hidden",
          footerPages: "!hidden",
          developmentModeBadge: "!hidden",
        },
      }}>
      {children}
    </ClerkProvider>
  );
}

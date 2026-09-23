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
          modalBackdrop: "bg-slate-950/80 backdrop-blur-sm",
          card: "shadow-2xl border border-slate-200 dark:border-slate-800 rounded-2xl bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 overflow-hidden",

          headerTitle: "text-slate-900 dark:text-slate-100 font-bold text-xl",
          headerSubtitle: "text-slate-600 dark:text-slate-400 text-sm",

          // Champs de saisie
          formFieldLabel:
            "text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1",
          formFieldInput:
            "rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/70 text-slate-900 dark:text-slate-100 focus:border-[#48a848] focus:ring-2 focus:ring-[#48a848]/20 transition-colors duration-200 text-sm py-2.5",

          // Bouton principal (Vert Aletheia)
          formButtonPrimary:
            "bg-[#48a848] hover:bg-[#3a8a3a] text-white font-semibold py-3 rounded-xl shadow-sm hover:shadow-md transition-all active:scale-[0.99] text-sm",

          // Boutons de connexion réseaux (Google, etc.)
          socialButtonsBlockButton:
            "rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800/60 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 transition-colors duration-200 text-sm font-medium h-11",
          socialButtonsBlockButtonText:
            "font-medium text-slate-700 dark:text-slate-200",

          // Séparateurs
          dividerLine: "bg-slate-200 dark:bg-slate-800",
          dividerText: "text-xs text-slate-400 font-medium px-2",

          // Liens et bas de page
          footerAction: "!hidden",
          footerActionText: "!hidden",
          footerActionLink: "!hidden",
          identityPreviewText: "text-slate-900 dark:text-slate-100 font-medium",
          identityPreviewEditButton: "text-[#48a848] hover:text-[#3a8a3a]",

          // Popover du profil utilisateur connecté (UserButton)
          userButtonPopoverCard:
            "bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl rounded-2xl",
          userPreviewMainIdentifier:
            "font-semibold text-slate-900 dark:text-slate-100",
          userPreviewSecondaryIdentifier:
            "text-slate-500 dark:text-slate-400 text-xs",
          userButtonPopoverActionButton:
            "hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition-colors duration-200",
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

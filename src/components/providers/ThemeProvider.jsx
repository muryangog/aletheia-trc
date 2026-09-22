"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export function ThemeProvider({ children, ...props }) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      enableColorScheme
      storageKey="aletheia-theme"
      disableTransitionOnChange
      {...props}>
      {children}
    </NextThemesProvider>
  );
}

export default ThemeProvider;

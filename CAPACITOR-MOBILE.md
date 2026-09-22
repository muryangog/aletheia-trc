# Aletheia TRC — App mobile (Capacitor)

Ce projet Next.js est maintenant configuré pour être exporté en site
statique et empaqueté en application mobile native (Android + iOS) via
**Capacitor**. Tout a été testé et validé côté build web ; il reste
quelques étapes à faire sur **votre propre machine**, car ce sandbox
ne dispose ni d'Android SDK ni de Xcode.

## Ce qui a été corrigé

- `node_modules` réinstallé proprement (l'archive venait de Windows,
  les binaires natifs `lightningcss`/`@next/swc` ne fonctionnaient pas).
- **Clerk migré de `@clerk/nextjs` vers `@clerk/clerk-react`** — l'ancien
  SDK embarque des Server Actions incompatibles avec `output: "export"`
  (bug connu de Clerk, cf. issue GitHub clerk/javascript#4647). Le
  nouveau SDK est 100 % client, donc compatible avec un export statique
  packagé par Capacitor.
- **Dark mode réparé** : le bouton du navbar bricolait `localStorage` à
  la main en désynchro avec `next-themes` (déjà installé). Il utilise
  maintenant `useTheme()` proprement.
- **Versions Capacitor alignées** sur 8.5.0 (`core`, `cli`, `android`, `ios`).
- `capacitor.config.json` : `appId` remplacé par `bi.aletheiatrc.app`
  (au lieu du placeholder `com.example.app`), `webDir: "out"` confirmé.
- Icônes Android (toutes densités + icône adaptative) et iOS régénérées
  à partir de `public/Logo_aletheia.png`, fond bleu marine `#0c2448`.
- `npm run build` → `npx cap sync` validés sans erreur.

## Prérequis sur votre machine

- **Node.js** 20+ et npm
- Pour Android : **Android Studio** (inclut le SDK et Gradle)
- Pour iOS : un **Mac** avec **Xcode** + **CocoaPods** (`sudo gem install cocoapods`)

## 1. Installer les dépendances

```bash
npm install
```

## 2. Construire le site statique + synchroniser les plateformes natives

À refaire à chaque fois que vous modifiez le code web (`app/`, `src/`) :

```bash
npm run build
npx cap sync
```

`npm run build` régénère `out/` (le site statique). `npx cap sync`
recopie `out/` dans `android/app/src/main/assets/public` et
`ios/App/App/public`, et met à jour les dépendances natives.

## 3. Lancer sur Android

```bash
npx cap open android
```

Cela ouvre le projet dans **Android Studio**. Ensuite :
- Laissez Gradle synchroniser (première fois : peut prendre plusieurs minutes).
- Cliquez sur ▶️ **Run** pour lancer sur un émulateur ou un téléphone branché en USB (mode développeur + débogage USB activés).
- Pour générer un **APK/AAB signé** destiné au Play Store : `Build > Generate Signed Bundle / APK`.

## 4. Lancer sur iOS (Mac uniquement)

```bash
npx cap open ios
```

Puis, dans le dossier `ios/App` :

```bash
cd ios/App
pod install
cd ../..
npx cap open ios
```

Dans Xcode :
- Sélectionnez votre équipe de développement (`Signing & Capabilities`).
- Choisissez un simulateur ou votre iPhone, puis ▶️ **Run**.
- Pour l'App Store : `Product > Archive`.

## 5. Variables d'environnement (Clerk, YouTube)

Le fichier `.env.local` contient les clés publiques utilisées par
l'app (Clerk, YouTube Data API). Elles sont injectées **au moment du
build** (`npm run build`), pas à l'exécution — donc si vous changez une
clé, il faut relancer `npm run build && npx cap sync`.

⚠️ Pensez à activer les connexions **Google / Facebook / Instagram**
directement dans votre [dashboard Clerk](https://dashboard.clerk.com)
(`User & Authentication > Social Connections`) — c'est Clerk qui gère
tout le protocole OAuth, vous n'avez rien à coder de plus côté app.

## Limites connues de l'export statique

Certaines fonctionnalités Next.js ne fonctionnent pas en mode
`output: "export"` (donc pas dans l'app mobile) :
- Routes API (`app/api/...`) — utilisez un backend externe si besoin.
- Server Actions / middleware.
- `next/image` avec optimisation automatique (déjà géré : `unoptimized: true`).

## En cas de souci

- **"SDK location not found"** dans Android Studio → ouvrez
  `File > Project Structure > SDK Location` et pointez vers votre
  installation Android SDK.
- **Erreur CocoaPods** → vérifiez `pod --version`, puis relancez
  `pod install` dans `ios/App`.
- Après toute modification du `capacitor.config.json`, relancez
  `npx cap sync` pour propager le changement aux deux plateformes.

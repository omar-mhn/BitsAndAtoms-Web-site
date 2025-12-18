// Layout.tsx
import { ScrollFocusProvider } from "./components/ScrollFocusContext";
import { ScrollFocusLight } from "./components/ScrollFocusLight";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <ScrollFocusProvider>
      <div className="relative min-h-screen overflow-hidden bg-background text-foreground">

        {/* 🌈 LUZ GLOBAL */}
        <ScrollFocusLight />

        {/* 🧱 CONTENIDO */}
        <main className="relative z-10">
          {children}
        </main>

      </div>
    </ScrollFocusProvider>
  );
}

'use client';

import { useRef } from 'react';


export default function StorePage() {
  /** ref para controlar o scroll manualmente */
  const railRef = useRef<HTMLDivElement>(null);

  /** helper para rolar N pixels; sente-se livre para ajustar */
  const scrollBy = (px: number) => {
    railRef.current?.scrollBy({ left: px, behavior: 'smooth' });
  };

  return (
    <section className="mx-auto max-w-6xl px-6 py-12 text-[#F2F2F2]">
      <h1 className="mb-8 text-center text-4xl font-semibold text-[#FFCF00]">
        Store
      </h1>

      {/* ─── Quadro externo ─────────────────────────────── */}
      <div className="relative rounded-2xl bg-[#1A1A1A]/90 p-8 shadow-lg shadow-black/40 backdrop-blur-md">
        {/* setas */}
        <button
          aria-label="voltar"
          onClick={() => scrollBy(-320)} // ~ card + gap
          className="
            absolute left-0 top-1/2 z-10
            -translate-y-1/2
            rounded-full bg-[#0F0F0F]/80 p-3
            transition hover:bg-[#FFCF00]/20
          "
        >
          ‹
        </button>

        <button
          aria-label="avançar"
          onClick={() => scrollBy(320)}
          className="
            absolute right-0 top-1/2 z-10
            -translate-y-1/2
            rounded-full bg-[#0F0F0F]/80 p-3
            transition hover:bg-[#FFCF00]/20
          "
        >
          ›
        </button>

        {/* rail rolável */}
        <div
          ref={railRef}
          className="
            flex gap-6 overflow-x-auto scroll-smooth
            scrollbar-none           /* esconde barra (webkit) */
            py-4 pt-6               /* pt-6 garante que os cantos superiores dos cards não fiquem encobertos */
            px-6
            snap-x snap-mandatory
            scroll-pl-1
            scroll-pr-1
          "
          /* Firefox scrollbar */
          style={{ scrollbarWidth: 'none' }}
        >
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="
                flex-shrink-0
                w-72 h-96
                rounded-xl bg-[#0F0F0F]/40 backdrop-blur
                shadow
                snap-start
                hover:ring-2 hover:ring-[#FFCF00]/60
                transition
                border border-transparent
                hover:border-[#FFCF00]  
              "
            >
              <div className="m-auto text-center text-sm text-[#C0C0C0]">
                Produto #{i + 1}
                <br />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

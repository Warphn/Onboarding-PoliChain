'use client';

import { useRef } from 'react';
import { useProducts } from '@/app/hooks/useProducts';
import AddProductForm from './AddProductForm';
import { condiment } from '@/app/fonts';
import type { Product } from '@prisma/client';

export default function StorePage() {
  /* ---------- carrossel ---------- */
  const railRef = useRef<HTMLDivElement>(null);
  const scrollBy = (px: number) =>
    railRef.current?.scrollBy({ left: px, behavior: 'smooth' });

  /* ---------- dados ---------- */
  const { products, loading, error } = useProducts();

  return (
    <section className="font-[var(--font-inter)] mx-auto max-w-6xl px-6 py-12 text-[#F2F2F2]">
      <h1 className="mb-8 text-center text-4xl font-[var(--font-condiment)] text-[#FFCF00]">
        Store
      </h1>

      {/* ---------- formulário de adição ---------- */}
      <AddProductForm />

      {/* ---------- estados ---------- */}
      {loading && <p className="mt-4 text-center text-sm">Carregando…</p>}
      {error && (
        <p className="mt-4 text-center text-sm text-red-500">
          Erro ao carregar produtos
        </p>
      )}

      {/* ---------- carrossel externo ---------- */}
      {products && products.length > 0 && (
        <div className="relative mt-6 rounded-2xl bg-[#1A1A1A]/90 p-8 shadow-lg shadow-black/40 backdrop-blur-md">
          {/* setas */}
          <button
            aria-label="voltar"
            onClick={() => scrollBy(-320)}
            className="absolute left-0 top-1/2 z-10 -translate-y-1/2 rounded-full bg-[#0F0F0F]/80 p-3 transition hover:bg-[#FFCF00]/20"
          >
            ‹
          </button>
          <button
            aria-label="avançar"
            onClick={() => scrollBy(320)}
            className="absolute right-0 top-1/2 z-10 -translate-y-1/2 rounded-full bg-[#0F0F0F]/80 p-3 transition hover:bg-[#FFCF00]/20"
          >
            ›
          </button>

          {/* rail rolável */}
          <div
            ref={railRef}
            className="
              flex gap-6 overflow-x-auto scroll-smooth
              scrollbar-none px-6 py-4 pt-6 snap-x snap-mandatory
              scroll-pl-1 scroll-pr-1
            "
            style={{ scrollbarWidth: 'none' }} // Firefox
          >
            {products.map((p) => (
              <div
                key={p.id}
                className="
                  flex-shrink-0 w-72 h-96
                  rounded-xl bg-[#0F0F0F]/40 backdrop-blur shadow
                  snap-start transition
                  border border-transparent hover:border-[#FFCF00]
                "
              >
                <img
                  src={p.imageURL}
                  alt={p.name}
                  className="h-40 w-full rounded-t-xl object-cover"
                />
                <div className="p-4 text-center">
                  <h3
                    className={`${condiment.className} text-lg text-[#F2F2F2] mb-1`}
                  >
                    {p.name}
                  </h3>
                  <p className="text-sm text-[#C0C0C0] mb-4 line-clamp-2">
                    {p.description}
                  </p>
                  <p className="font-semibold text-[#FFCF00]">
                    {(p.priceCents / 100).toLocaleString('pt-BR', {
                      style: 'currency',
                      currency: 'BRL',
                    })}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* caso não haja produtos */}
      {products && products.length === 0 && (
        <p className="mt-6 text-center text-sm text-[#C0C0C0]">
          Nenhum produto ainda. Adicione o primeiro!
        </p>
      )}
    </section>
  );
}

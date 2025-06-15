// src/app/store/AddProductForm.tsx
'use client';
import { useState } from 'react';
import { useProducts } from '@/app/hooks/useProducts';

export default function AddProductForm() {
  const { mutate } = useProducts();
  const [form, setForm] = useState({ name: '', price: '', imageUrl: '' });
  const [msg, setMsg]   = useState('');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    /* validações simples */
    if (!form.name || !form.price || !form.imageUrl)
      return setMsg('Preencha todos os campos.');

    const priceFloat = Number(form.price.replace(',', '.'));
    if (isNaN(priceFloat)) return setMsg('Preço precisa ser número.');

    const res = await fetch('/api/products', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: form.name,
        priceCents: Math.round(priceFloat * 100),
        imageURL: form.imageUrl,
      }),
    });

    if (!res.ok) {
      setMsg('Falha ao salvar. Veja console.');
      console.error(await res.text());
      return;
    }

    mutate();                      // refaz GET
    setForm({ name: '', price: '', imageUrl: '' });
    setMsg('Produto criado ✔︎');
  }

  /* UI */
  return (
    <form onSubmit={handleSubmit} className="mb-8 flex flex-col gap-4">
      <input
        placeholder="Name"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
        className="rounded-md bg-[#1A1A1A] p-2"
      />
      <input
        placeholder="Price (ex. 49.90)"
        value={form.price}
        onChange={(e) => setForm({ ...form, price: e.target.value })}
        className="rounded-md bg-[#1A1A1A] p-2"
      />
      <input
        placeholder="Image URL"
        value={form.imageUrl}
        onChange={(e) => setForm({ ...form, imageUrl: e.target.value })}
        className="rounded-md bg-[#1A1A1A] p-2"
      />
      <button
        type="submit"
        className="self-start rounded-md border border-[#FFCF00] px-6 py-2 font-[var(--font-condiment)] hover:bg-[#FFCF00]/10"
      >
        Add
      </button>
      {msg && <p className="text-sm text-[#C0C0C0]">{msg}</p>}
    </form>
  );
}

// src/app/api/products/[id]/route.ts
import { prisma } from '@/app/lib/prisma';
import { NextResponse } from 'next/server';

/* ─────────── GET /api/products/:id ─────────── */
export async function GET(request: Request, ctx: unknown) {
  // tipamos aqui:
  const { id } = (ctx as { params: { id: string } }).params;

  const product = await prisma.product.findUnique({
    where: { id: Number(id) },
  });

  if (!product) {
    return NextResponse.json({ error: 'Product not found' }, { status: 404 });
  }
  return NextResponse.json(product);
}

/* ─────────── PUT /api/products/:id ─────────── */
export async function PUT(request: Request, ctx: unknown) {
  const { id } = (ctx as { params: { id: string } }).params;

  const body: {
    name?: string;
    priceCents?: number;
    imageURL?: string;
    description?: string | null;
  } = await request.json();

  const updated = await prisma.product.update({
    where: { id: Number(id) },
    data: body,
  });

  return NextResponse.json(updated);
}

/* ───────── DELETE /api/products/:id ────────── */
export async function DELETE(_req: Request, ctx: unknown) {
  const { id } = (ctx as { params: { id: string } }).params;

  await prisma.product.delete({ where: { id: Number(id) } });
  return NextResponse.json({ ok: true });
}

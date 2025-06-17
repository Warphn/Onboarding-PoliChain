import { NextResponse, type NextRequest } from 'next/server';
import { prisma } from '@/app/lib/prisma';

/* ─────────── GET /api/products/:id ─────────── */
export async function GET(
  _req: NextRequest,
  { params }: { params: { id: string } }
) {
  const product = await prisma.product.findUnique({
    where: { id: Number(params.id) },
  });

  if (!product) {
    return NextResponse.json({ error: 'Product not found' }, { status: 404 });
  }

  return NextResponse.json(product); // 200
}

/* ─────────── PUT /api/products/:id ─────────── */
export async function PUT(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const body: {
    name?: string;
    priceCents?: number;
    imageURL?: string;
    description?: string | null;
  } = await req.json();

  const updated = await prisma.product.update({
    where: { id: Number(params.id) },
    data: body,
  });

  return NextResponse.json(updated);
}

/* ───────── DELETE /api/products/:id ────────── */
export async function DELETE(
  _req: NextRequest,
  { params }: { params: { id: string } }
) {
  await prisma.product.delete({
    where: { id: Number(params.id) },
  });

  return NextResponse.json({ ok: true });
}

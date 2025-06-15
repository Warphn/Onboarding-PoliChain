import { prisma } from '@/app/lib/prisma';
import { NextResponse } from 'next/server';

export async function GET() {
  const products = await prisma.product.findMany({ orderBy: { createdAt: 'desc' } });
  return NextResponse.json(products);
}

export async function POST(req: Request) {
  const body = await req.json();
  // 👇 validação simplona; troque por zod depois
  if (!body.name || !body.priceCents || !body.imageURL)
    return NextResponse.json({ error: 'Missing fields' }, { status: 400 });

  const product = await prisma.product.create({ data: body });
  return NextResponse.json(product, { status: 201 });
}

// src/app/api/products/[id]/route.ts
import { prisma } from '@/app/lib/prisma';
import { NextResponse, type NextRequest } from 'next/server';


export async function PUT(
  req: NextRequest,
  { params }: { params: { id: string } }    
) {
  const body = await req.json();
  const id = Number(params.id);

  const product = await prisma.product.update({
    where: { id },
    data: body,
  });

  return NextResponse.json(product);
}


export async function DELETE(
  _req: NextRequest,
  { params }: { params: { id: string } }    
) {
  await prisma.product.delete({ where: { id: Number(params.id) } });
  return NextResponse.json({ ok: true });
}

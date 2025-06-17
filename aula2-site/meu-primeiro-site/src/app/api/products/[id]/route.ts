import { prisma } from '@/app/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';


export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const body = await request.json();

  const product = await prisma.product.update({
    where: { id: Number(params.id) },
    data: body,
  });

  return NextResponse.json(product);
}

export async function DELETE(
  _request: NextRequest,
  { params }: { params: { id: string } }
) {
  await prisma.product.delete({ where: { id: Number(params.id) } });
  return NextResponse.json({ ok: true });
}

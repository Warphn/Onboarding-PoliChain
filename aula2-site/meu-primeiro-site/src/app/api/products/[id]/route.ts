import { prisma } from '@/app/lib/prisma';
import { NextResponse } from 'next/server';


export async function PUT(
  request: Request,
  { params }: any           
) {
  const body = await request.json();
  const id = Number(params.id);

  const product = await prisma.product.update({
    where: { id },
    data: body,
  });

  return NextResponse.json(product);
}


export async function DELETE(
  _request: Request,
  { params }: any          
) {
  await prisma.product.delete({ where: { id: Number(params.id) } });
  return NextResponse.json({ ok: true });
}

import prisma from '@/lib/prisma'
import { NextResponse, NextRequest } from 'next/server'

interface Segments {
  params: {
    id: string
  }
}

export async function GET(request: Request, { params }: Segments) { 

  const todo = await prisma.todo.findUnique({
    where: {
      id: params.id
    }
  })

  return !!todo
    ? NextResponse.json( todo )
    : NextResponse.json({ message: `No existe registro con el id: ${params.id}`}, { status: 404 });
}
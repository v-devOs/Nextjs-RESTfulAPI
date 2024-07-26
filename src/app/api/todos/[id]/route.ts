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

export async function PUT(request: Request, { params }: Segments) { 

  const todo = await prisma.todo.findUnique({
    where: {
      id: params.id
    }
  })

  const body = await request.json()

  const updatedTodo = await prisma.todo.update({
    where: { id : params.id }, 
    data: { ...body }
  })

  return !!todo
    ? NextResponse.json( updatedTodo )
    : NextResponse.json({ message: `No existe registro con el id: ${params.id}`}, { status: 404 });
}
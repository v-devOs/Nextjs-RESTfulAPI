import prisma from "@/lib/prisma";


export const metadata = {
 title: 'Listados de Todos',
 description: 'Listados de Todos',
};

export default async function RestTodosPage() {

  const todos = await prisma.todo.findMany({ orderBy: { description: 'asc' } })

  return (
    <div>
      <h1>Rest Todos Page</h1>
     
    </div>
  );
}
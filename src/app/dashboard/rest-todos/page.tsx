import prisma from "@/lib/prisma";
import { TodosGrid } from "@/todos";


export const metadata = {
 title: 'Listados de Todos',
 description: 'Listados de Todos',
};

export default async function RestTodosPage() {

  const todos = await prisma.todo.findMany({ orderBy: { description: 'asc' } })

  return (
    <div>
      {/* TODO: Formulario para agregar todo */}
      <TodosGrid todos={todos}/>     
    </div>
  );
}
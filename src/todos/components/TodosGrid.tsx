'use client';
import { Todo } from "@prisma/client"
import { TodoItem } from "./TodoItem";
import { toggleTodo } from "../actions/";
// import * as todosApi from '@/todos/helper/todos'

interface Props{
  todos? : Todo[]
}

export const TodosGrid = ({ todos = [] }: Props) => {

  // const router = useRouter();

  // const toggleTodo =  async( id: string, complete: boolean ) => {
  //   const updatedTodo = await todosApi.updateTodo( id, complete );

  //   router.refresh()
  // }

 

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
      {
        todos.map( todo => (
          <TodoItem key={todo.id} todo={todo} toggleTodo={ toggleTodo }/>
        ))
      }
    </div>
  )
}

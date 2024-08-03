'use client';
import { Todo } from "@prisma/client"
import { TodoItem } from "./TodoItem";

import * as api from '@/todos/helper/todos'

interface Props{
  todos? : Todo[]
}

export const TodosGrid = ({ todos = [] }: Props) => {

  console.log(todos)
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
      {
        todos.map( todo => (
          <TodoItem key={todo.id} todo={todo} toggleTodo={ api.updateTodo}/>
        ))
      }
    </div>
  )
}

"use client";

import { Plus } from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";

interface Todo {
  id: string;
  content: string;
  completed: boolean;
}

export default function TodoWidget() {
  const [todos, setTodos] = useState<Todo[]>(() => {
    // If exists, get todos from localstorage on component mount
    const storedTodos = localStorage.getItem("todos");
    return storedTodos
      ? JSON.parse(storedTodos)
      : [
          {
            id: crypto.randomUUID(),
            content: "Generate reporting for 2024",
            completed: false,
          },
          {
            id: crypto.randomUUID(),
            content: "Send review email to customers",
            completed: true,
          },
          {
            id: crypto.randomUUID(),
            content: "Create case study for @company",
            completed: false,
          },
        ];
  });
  const [newTodo, setNewTodo] = useState("");

  const t = useTranslations();

  // Save todos to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTodo.trim()) return;

    const todo: Todo = {
      id: crypto.randomUUID(),
      content: newTodo.trim(),
      completed: false,
    };

    setTodos((prevState) => [todo, ...prevState]);
    setNewTodo("");
  };

  const toggleTodo = (id: string) => {
    setTodos((prevState) =>
      prevState.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: string) => {
    setTodos((prevState) => prevState.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex gap-2 my-4">
        <Input
          placeholder={t('generic.newTask')}
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          className="flex-1"
        />
        <Button type="submit" size="icon">
          <Plus className="h-4 w-4" />
          <span className="sr-only">Add todo</span>
        </Button>
      </form>
      <ScrollArea className="h-[200px] pr-4">
        <div className="space-y-3">
          {todos.map((todo) => (
            <div key={todo.id} className="flex items-center space-x-2">
              <Checkbox
                id={todo.id}
                checked={todo.completed}
                onCheckedChange={() => toggleTodo(todo.id)}
              />
              <label
                htmlFor={todo.id}
                className={cn(`text-sm flex items-center gap-2 flex-1`)}
              >
                <span
                  className={cn(
                    todo.completed && "line-through text-muted-foreground"
                  )}
                >
                  {todo.content}
                </span>
                {todo.completed && (
                  <span
                    className="text-red-500 underline text-xs cursor-pointer"
                    onClick={() => deleteTodo(todo.id)}
                  >
                    Delete
                  </span>
                )}
              </label>
            </div>
          ))}
          {todos.length === 0 && (
            <p className="text-sm text-muted-foreground text-center py-6">
              No tasks yet. Add one above.
            </p>
          )}
        </div>
      </ScrollArea>
    </div>
  );
}

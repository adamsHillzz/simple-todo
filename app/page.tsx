import AddTasks from "./components/AddTasks";
import TodoList from "./components/TodoList";

export default function Home() {
  return (
    <main className="max-w-4xl mx-auto">
      <div className="text-center my-5 flex flex-col gap-4">
        <h1 className="text-2xl font-bold">To Do App List</h1>
        <AddTasks />
      </div>
      <TodoList />
    </main>
  )
}

import { useRef, useState } from "react";
import { TrashIcon, CheckCircleIcon } from '@heroicons/react/24/outline'
import Header from "./components/Header"
import Footer from "./components/Footer";
import Input from "./components/Input";
import Tasks from "./components/Tasks";
import Button from "./components/Button";

function App() {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef(null)

  const completed = tasks.filter(task => task.done).length;
  const total = tasks.length;

  const handleAddTask = () => {
    if (inputValue.trim() !== "") {
      setTasks(prev => [...prev, { id: tasks.length + 1, text: inputValue, done: false }]);
      setInputValue("");
      inputRef.current?.focus()
    }
  };

  const handleToggleTask = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, done: !task.done } : task
    ));
  }

  const handleRemoveTask = (index) => {
    setTasks(tasks.filter(item => item.id !== index));
  }

  return (
    <main className="min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white flex flex-col justify-center items-center">
      <Header />
      <div className="max-w-2xl w-full p-6 bg-white bg-opacity-10 rounded-lg shadow-lg">
        <div className="flex flex-row gap-4">
          <Input inputValue={inputValue} setInputValue={setInputValue} handleAddTask={handleAddTask} inputRef={inputRef} />
          <Button handleAddTask={handleAddTask} />
        </div>
        {tasks.length > 0 && (
          <>
            <div className="mt-4 flex justify-between items-center">
              <p className="text-sm text-white">Total de tarefas: {total}</p>
              <p className="text-sm text-white">Tarefas completas: {completed}</p>
            </div>
            <Tasks tasks={tasks} handleToggleTask={handleToggleTask} handleRemoveTask={handleRemoveTask} />
          </>
        )}
      </div>
      <Footer />
    </main>
  )
}

export default App

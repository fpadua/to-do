import { CheckCircleIcon, TrashIcon } from "@heroicons/react/24/outline";

function Tasks({ tasks, handleToggleTask, handleRemoveTask }) {
  return (
    <ul className="mt-1 space-y-4">
      {tasks.map((task, index) => (
        <li
          key={index}
          className="p-3 rounded-lg flex justify-between items-center gap-3"
          style={{ backgroundColor: `rgba(255, 255, 255, 0.3)` }}>
          <div className="flex items-center gap-2">
            <CheckCircleIcon className={`w-6 h-6 min-w-[1.5rem] min-h-[1.5rem] flex-shrink-0 cursor-pointer ${task.done ? 'text-white/50' : 'text-white'}`}
              onClick={() => handleToggleTask(task.id)}
            />
            <p className={`break-words whitespace-pre-wrap flex items-center text-wrap leading-tight ${task.done ? 'line-through text-white/50' : 'text-white'}`}>
              {task.text}
            </p>
          </div>
          <TrashIcon className="w-6 h-6 min-w-[1.5rem] min-h-[1.5rem] flex-shrink-0 text-white/50 cursor-pointer hover:text-white" onClick={() => handleRemoveTask(task.id)} />
        </li>
      ))}
    </ul>
  );
}

export default Tasks;

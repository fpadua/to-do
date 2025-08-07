function Button({ handleAddTask}) {
  return (
    <button className="w-1/3 bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
      onClick={handleAddTask}>
      Adicionar
    </button>
  )
}

export default Button;
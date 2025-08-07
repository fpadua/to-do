function Input({ inputValue, setInputValue, handleAddTask, inputRef }) {
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleAddTask();
    }
  }

  return (
    <input
      ref={inputRef}
      type="text"
      placeholder="Digite sua tarefa..."
      className="w-full p-3 rounded-lg bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-500"
      value={inputValue}
      onChange={handleInputChange}
      onKeyDown={handleKeyDown}
    />
  );
}

export default Input

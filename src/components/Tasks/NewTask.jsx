const NewTask = () => {
  return (
    <div className="flex items-center gap-4">
      <input
        type="text>"
        placeholder="Task Title"
        className="w-64 px-2 py-1 rounded-sm big-stone-200"
      />
      <button className="text-stone-700 hover:text-stone-950">Add Task</button>
    </div>
  );
};

export default NewTask;

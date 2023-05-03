function DeleteTasks({ dragOver }: any) {
  return (
    <div
      onDragOver={dragOver}
      className="absolute flex justify-center border-8 border-red-100 bg-red-50 m-4 rounded-3xl left-0 bottom-0 w-1/3 h-1/5 -z-50"
    >
      <span className="flex items-center justify-center w-full h-full m-auto text-3xl text-red-300 font-bold">
        Delete Task
      </span>
    </div>
  );
}

export default DeleteTasks;

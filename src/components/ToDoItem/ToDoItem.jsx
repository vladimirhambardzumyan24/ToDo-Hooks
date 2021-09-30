export default function ToDoItem({
  item,
  handleChangeClickDone,
  handleChangeClickRemove,
  handleDoubleClickEdit,
  handleChangeClickCansle,
  handleChangeClickSave,
  handleChangeEdit,
}) {
  return (
    <>
      {item.isEdit ? (
        <div className="flex mb-4 items-center">
          {item.isDone ? (
            <p
              onDoubleClick={() => {
                handleDoubleClickEdit(item.id);
              }}
              className="w-full text-grey-darkest pl-2"
            >
              {item.text}
            </p>
          ) : (
            <p className="line-through w-full text-grey-darkest pl-2">{item.text}</p>
          )}
          <button
            onClick={() => handleChangeClickDone(item)}
            className="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-white text-green-700 border-green-700 hover:bg-green-700"
          >
            Done
          </button>
          <button
            onClick={() => handleChangeClickRemove(item.id)}
            className="flex-no-shrink p-2 ml-2 border-2 rounded text-red-700 border-red-700 hover:text-white hover:bg-red-700"
          >
            Remove
          </button>
        </div>
      ) : (
        <div className="flex mb-4 items-center">
          <input
            className="w-full mr-8 h-10 pl-2"
            defaultValue={item.text}
            onChange={(e) => handleChangeEdit(e.target.value)}
          />
          <button
            onClick={() => handleChangeClickSave(item.id)}
            className="flex-no-shrink p-2 border-2 rounded hover:text-white text-green-700 border-green-700 hover:bg-green-700"
          >
            Save
          </button>
          <button
            onClick={() => handleChangeClickCansle(item.id)}
            className="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded text-red-700 border-red-700 hover:text-white hover:bg-red-700 "
          >
            Cansle
          </button>
        </div>
      )}
    </>
  );
}

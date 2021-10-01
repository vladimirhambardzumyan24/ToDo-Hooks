export default function ({
  item,
  handleDoubleClickEdit,
  handleChangeClickDone,
  handleChangeClickRemove,
}) {
  return (
    <div className="flex mb-4 items-center">
      {item.isDone ? (
        <div
          onDoubleClick={() => {
            handleDoubleClickEdit(item.id);
          }}
          className="w-full text-grey-darkest pl-2"
        >
          {item.text}
          <div className="text-xs">
            {item.date}
          </div>
        </div>
      ) : (
        <div
          onDoubleClick={() => {
            handleDoubleClickEdit(item.id);
          }}
          className="line-through w-full text-grey-darkest pl-2"
        >
          {item.text}
          <div className="text-xs ">
            {item.date}
          </div>
        </div>
      )}
      <button
        onClick={() => handleChangeClickDone(item)}
        className="flex-no-shrink p-2 ml-4 mr-2 border rounded hover:text-white text-green-700 border-green-700 hover:bg-green-700"
      >
        Done
      </button>
      <button
        onClick={() => handleChangeClickRemove(item.id)}
        className="flex-no-shrink p-2 ml-2 border rounded text-red-700 border-red-700 hover:text-white hover:bg-red-700"
      >
        Remove
      </button>
    </div>
  );
}

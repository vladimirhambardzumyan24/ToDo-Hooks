import ItemDataUi from "../ItemDataUi/ItemDataUi";

export default function ({
  item,
  handleDoubleClickEdit,
  handleChangeClickDone,
  handleChangeClickRemove,
}) {
  return (
    <div className="flex mb-4 items-center">
      {item.isDone ? (
        <ItemDataUi
          item={item}
          handleDoubleClickEdit={handleDoubleClickEdit}
          line=""
        />
      ) : (
        <ItemDataUi
          item={item}
          handleDoubleClickEdit={handleDoubleClickEdit}
          line="line-through"
        />
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

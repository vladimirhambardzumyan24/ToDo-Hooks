import EditForm from "../EditForm/EditForm";
import ItemUi from "../ItemUi/ItemUi";

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
        <ItemUi
          item={item}
          handleDoubleClickEdit={handleDoubleClickEdit}
          handleChangeClickDone={handleChangeClickDone}
          handleChangeClickRemove={handleChangeClickRemove}
        />
      ) : (
        <EditForm
          item={item}
          handleChangeClickSave={handleChangeClickSave}
          handleChangeEdit={handleChangeEdit}
          handleChangeClickCansle={handleChangeClickCansle}
        />
      )}
    </>
  );
}

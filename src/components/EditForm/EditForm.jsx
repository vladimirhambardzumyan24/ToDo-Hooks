export default function EditForm({
  handleChangeClickSave,
  handleChangeEdit,
  handleChangeClickCansle,
  item,
}) {
  return (
    <form
      onSubmit={() => handleChangeClickSave(item.id)}
      className="flex mb-4 items-center border-dashed border-2 border-gray-300"
    >
      <input
        className="w-full mr-8 h-10 pl-2 "
        defaultValue={item.text}
        onChange={(e) => handleChangeEdit(e.target.value)}
      />
      <input
        type="submit"
        className="flex-no-shrink p-2 border-2 rounded hover:text-white text-green-700 border-green-700 hover:bg-green-700"
        value="Save"
      />
      <button
        onClick={() => handleChangeClickCansle(item.id)}
        className="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded text-red-700 border-red-700 hover:text-white hover:bg-red-700 "
      >
        Cansle
      </button>
    </form>
  );
}

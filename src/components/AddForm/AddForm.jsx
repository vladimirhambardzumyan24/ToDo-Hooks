export default function AddForm({handleClickAdd,value,handleChange}) {
  return (
    <form className="flex mt-4" onSubmit={handleClickAdd}>
      <input
        value={value}
        onChange={(e) => handleChange(e.target.value)}
        className="shadow appearance-none border rounded w-full border-green-700 py-2 px-3 mr-4 text-grey-darker"
        placeholder="Add Todo"
      ></input>
      <input
        type="submit"
        className="flex-no-shrink p-2 border rounded text-teal border-teal border-green-700 hover:text-white hover:bg-green-700"
        value="Add"
      />
    </form>
  );
}

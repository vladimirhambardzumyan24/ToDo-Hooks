export default function Buttons({countIsDone,countAll,handleClickSelectAll,handleClickRemoveAll}) {
  return (
    <div>
      <button className="inline-block left-0 flex-no-shrink p-2 ml-2 border-2 rounded text-green-700 border-green-700">
        {countIsDone}/{countAll}
      </button>
      <div className="flex justify-end inline-block -mt-11">
        <button
          onClick={handleClickSelectAll}
          className="flex-no-shrink p-2 ml-2 border-2 rounded text-green-700 border-green-700 hover:bg-green-700 hover:text-white"
        >
          Select All
        </button>
        <button
          onClick={handleClickRemoveAll}
          className="flex-no-shrink p-2 ml-2 border-2 rounded text-red-700 border-red-700 hover:text-white hover:bg-red-700"
        >
          Remove Selected
        </button>
      </div>
    </div>
  );
}

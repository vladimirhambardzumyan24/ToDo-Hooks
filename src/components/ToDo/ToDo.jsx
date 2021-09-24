import { useEffect, useState } from "react";

const idGenerator = () => {
  let id = 0;
  return () => {
    id += 1 + Math.random();
    return id;
  };
};

const getRandomId = idGenerator();

export default function ToDo() {
  const [value, setValue] = useState("");
  const [array, setArray] = useState([]);
  const [countIsDone, setCountIsDone] = useState(0);
  const [countAll, setCountAll] = useState(0);

  const handleChange = (e) => {
    setValue(e);
  };

  const handleClickAdd = () => {
    if (value) {
      setArray([...array, { id: getRandomId(), text: value, isDone: true }]);
    }
    setValue("");
  };

  const handleChangeClickRemove = (id) => {
    setArray(array.filter((item) => id !== item.id));
  };

  const handleChangeClickDone = (el) => {
    setArray(
      array.map((item) => {
        if (el.id === item.id) {
          item.isDone = !item.isDone;
        }
        return item;
      })
    );
  };

  const handleClickRemoveAll = () => {
    setArray(array.filter((item) => item.isDone));
  };

  const handleClickSelectAll = () => {
    if (array.every((item) => !item.isDone)) {
      setArray(
        array.map((item) => {
          item.isDone = true;
          return item;
        })
      );
    } else {
      setArray(
        array.map((item) => {
          item.isDone = false;
          return item;
        })
      );
    }
  };

  useEffect(() => {
    setCountIsDone(array.filter((item) => item.isDone === false).length);
    setCountAll(array.length);
  });

  return (
    <div className="h-100 w-full flex items-center justify-center bg-teal-lightest font-sans">
      <div className="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
        <div className="mb-4">
          <h1 className="text-grey-darkest">Todo List</h1>
          <div className="flex mt-4">
            <input
              value={value}
              onChange={(e) => handleChange(e.target.value)}
              className="shadow appearance-none border rounded w-full border-green-700 py-2 px-3 mr-4 text-grey-darker"
              placeholder="Add Todo"
            ></input>
            <button
              onClick={handleClickAdd}
              className="flex-no-shrink p-2 border-2 rounded text-teal border-teal border-green-700 hover:text-white hover:bg-green-700"
            >
              Add
            </button>
          </div>
        </div>
        <div>
          {array.map((item) => {
            return (
              <div key={item.id} className="flex mb-4 items-center">
                {item.isDone ? (
                  <p className="w-full text-grey-darkest">{item.text}</p>
                ) : (
                  <p className="line-through w-full text-grey-darkest">
                    {item.text}
                  </p>
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
            );
          })}
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
        </div>
      </div>
    </div>
  );
}

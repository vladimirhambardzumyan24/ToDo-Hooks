import { useEffect, useState } from "react";
import Buttons from "../Buttons/Buttons";
import ToDoItem from "../ToDoItem/ToDoItem";

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
  const [editValue, setEditValue] = useState("");

  const handleChange = (e) => {
    setValue(e);
  };

  const handleClickAdd = (event) => {
    event.preventDefault();
    if (value) {
      setArray([
        ...array,
        { id: getRandomId(), text: value, isDone: true, isEdit: true },
      ]);
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

  const handleDoubleClickEdit = (id) => {
    setArray(
      array.map((item) => {
        if (id === item.id) {
          item.isEdit = false;
        }
        return item;
      })
    );
  };

  const handleChangeClickSave = (id) => {
    setArray(
      array.map((item) => {
        if (id === item.id) {
          item.text = editValue;
          item.isEdit = true;
        }
        return item;
      })
    );
  };

  const handleChangeClickCansle = (id) => {
    setArray(
      array.map((item) => {
        if (id === item.id) {
          item.isEdit = true;
        }
        return item;
      })
    );
  };

  const handleChangeEdit = (value) => {
    setEditValue(value);
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
          <form className="flex mt-4" onSubmit={handleClickAdd}>
            <input
              value={value}
              onChange={(e) => handleChange(e.target.value)}
              className="shadow appearance-none border rounded w-full border-green-700 py-2 px-3 mr-4 text-grey-darker"
              placeholder="Add Todo"
            ></input>
            <input
              type="submit"
              className="flex-no-shrink p-2 border-2 rounded text-teal border-teal border-green-700 hover:text-white hover:bg-green-700"
              value="Add"
            />
          </form>
        </div>
        <div>
          {array.map((item) => {
            return (
              <ToDoItem
                key={item.id}
                item={item}
                handleChangeClickDone={handleChangeClickDone}
                handleChangeClickRemove={handleChangeClickRemove}
                handleDoubleClickEdit={handleDoubleClickEdit}
                handleChangeClickCansle={handleChangeClickCansle}
                handleChangeClickSave={handleChangeClickSave}
                handleChangeEdit={handleChangeEdit}
              />
            );
          })}
          <Buttons
            countIsDone={countIsDone}
            countAll={countAll}
            handleClickSelectAll={handleClickSelectAll}
            handleClickRemoveAll={handleClickRemoveAll}
          />
        </div>
      </div>
    </div>
  );
}

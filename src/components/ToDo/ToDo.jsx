import { useEffect, useState } from "react";
import ToDoSave, { getToDo } from "../../helper/LocalStorage";
import AddForm from "../AddForm/AddForm";
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
  const [array, setArray] = useState(getToDo() ? getToDo() : []);
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
        {
          id: getRandomId(),
          text: value,
          date: new Date().toLocaleString(),
          isDone: true,
          isEdit: true,
        },
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
          item.date = new Date().toLocaleString();
        }
        return item;
      })
    );
    if (!editValue) {
      setArray(array.filter((item) => id !== item.id));
    }
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
    ToDoSave(array);
  });

  return (
    <div className="h-100 w-full flex items-center justify-center bg-teal-lightest font-sans">
      <div className="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
        <div className="mb-4">
          <h1 className="text-grey-darkest">Todo List</h1>
          <AddForm
            handleClickAdd={handleClickAdd}
            value={value}
            handleChange={handleChange}
          />
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

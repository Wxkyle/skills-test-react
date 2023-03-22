import React from "react";

const FormValues = (props) => {
  const { todoItems, deleteItem } = props;
  console.log(todoItems);
  return (
    <div>
      <h1>TODO Items</h1>

      <div>
        <ul>
          {todoItems.map((item, index) => {
            return (
              <div
                style={{
                  marginTop: "8px",
                  backgroundColor: "#fffccd",
                  position: "relative",
                }}
              >
                <div
                  onClick={() => {
                    todoItems.splice(index, 1);
                    let newTodoItems = [...todoItems];
                    console.log("new", newTodoItems);
                    deleteItem(newTodoItems);
                  }}
                  style={{
                    display: "flex",
                    backgroundColor: "red",
                    position: "absolute",
                    top: "0px",
                    right: "0px",
                    padding: "3px",
                    borderRadius: "10px",
                  }}
                >
                  <div>X</div>
                </div>
                <div>
                  <li>{item.firstName}</li>
                  <li>{item.lastName}</li>
                  <li>{item.email}</li>
                </div>
              </div>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default FormValues;

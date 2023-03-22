import React, { useState } from "react";
import { Formik, Field, Form } from "formik";
import FormValues from "./FormValues";

const BasicForm = () => {
  const [todoItems, setTodoItems] = useState([]);

  return (
    <div>
      <h1>TODO</h1>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
        }}
        onSubmit={(values) => {
          let items = [values, ...todoItems];

          setTodoItems(items);
        }}
      >
        <Form
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <label htmlFor="todo">Add ToDo </label>
          <Field name="firstName" id="todo" placeholder="First Name" />
          <Field name="lastName" id="todo" placeholder="Last Name" />
          <Field name="email" id="todo" placeholder="Email" />
          <button type="submit">Submit</button>
        </Form>
      </Formik>
      <FormValues
        todoItems={todoItems}
        deleteItem={(value) => setTodoItems(value)}
      />
    </div>
  );
};

export default BasicForm;

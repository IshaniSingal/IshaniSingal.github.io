import React from "react";
import "./App.css";
import { useFormik } from "formik";

function App() {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values, { setSubmitting }) => {
      if (!formik.errors.email && !formik.errors.password) {
        alert("Login Successful");
      }
      setSubmitting(false);
    },
    validate: (values) => {
      let errors = {};
      if (!values.email) {
        errors.email = "Field required";
      } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = "Username should be an email";
      }
      if (!values.password) errors.password = "Field required";
      return errors;
    },
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div>Email:</div>
        <input type="text" id="emailField" name="email" onChange={formik.handleChange} value={formik.values.email}/>
        <div id="emailError" style={{ color: "red" }}>
          {formik.errors.email}
        </div>
        <div>Password:</div>
        <input type="password" id="pswField" name="password" onChange={formik.handleChange} value={formik.values.password}/>
        <div id="pswError" style={{ color: "red" }}>
          {formik.errors.password}
        </div>
        <button type="submit" id="submitBtn">
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;

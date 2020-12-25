import React, { useState } from "react";
import "./App.css";
import { Route, useHistory } from "react-router-dom";
import Home from "./components/Home.js";
import Form from "./components/Form.js";
import axios from "axios";
import * as Yup from "yup";
import formSchema from "./validation/formSchema";
import Navbar from "./components/Navbar";

//Context
import OrderContext from "./contexts/OrderContext";

//Initial Values
const initialFormValues = {
  name: "",
  size: "",
  toppings: {
    pepperoni: false,
    sausage: false,
    pineapple: false,
    extraCheese: false,
  },
  instructions: "",
};

//Errors
const initialFormErrors = {
  name: "",
};
const initialOrders = [];

const App = () => {
  const [smartOrder, setSmartOrder] = useState("");
  const [orders, setOrders] = useState(initialOrders);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  let history = useHistory();

  // Save delivery method
  const deliveryType = (delivery) => {
    setSmartOrder(delivery);
    history.push("/Form");
  };

  const postNewOrder = (newOrder) => {
    axios
      .post("https://reqres.in/api/users", newOrder)
      .then((res) => {
        setOrders([...orders, res.data]);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setFormValues(initialFormValues);
      });
  };

  const onInputChange = (evt) => {
    const { name, value } = evt.target;

    Yup.reach(formSchema, name)
      .validate(value)
      .then(() => {
        setFormErrors({
          ...formErrors,
          [name]: "",
        });
      })
      .catch((err) => {
        setFormErrors({
          ...formErrors,
          [name]: err.errors[0],
        });
      });

    setFormValues({
      ...formValues,
      [name]: value,
    });
  };
  const onCheckboxChange = (evt) => {
    const { name, checked } = evt.target;

    setFormValues({
      ...formValues,
      toppings: {
        ...formValues.toppings,
        [name]: checked,
      },
    });
  };
  const onSubmit = (evt) => {
    evt.preventDefault();

    const newOrder = {
      name: formValues.name,
      size: formValues.size,
      toppings: Object.keys(formValues.toppings).filter(
        (toppingName) => formValues.toppings[toppingName] === true
      ),
      instructions: formValues.instructions,
    };
    postNewOrder(newOrder);
  };

  return (
    <OrderContext.Provider value={{ smartOrder, setSmartOrder, deliveryType }}>
      <div className="App">
        <Navbar />
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/Form">
          <Form
            values={formValues}
            onInputChange={onInputChange}
            onCheckboxChange={onCheckboxChange}
            onSubmit={onSubmit}
            errors={formErrors}
          />
        </Route>
        <pre>{JSON.stringify(orders)}</pre>
      </div>
    </OrderContext.Provider>
  );
};
export default App;

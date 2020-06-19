import React from "react";

export default function Form(props) {
  const { values, onSubmit, onInputChange, onCheckboxChange, errors } = props;

  return (
    <div className="form-wrapper">
      <form className="form-container" onSubmit={onSubmit}>
        <div className="inputs">
          <h3>User Info</h3>
          <label htmlFor="name">
            Name&nbsp;
            <input
              name="name"
              type="text"
              value={values.name}
              onChange={onInputChange}
            />
          </label>
          <label htmlFor="size">
            <select onChange={onInputChange} value={values.size} name="size">
              <option value="">--Select Pizza Size--</option>
              <option value="8inch">8 inch</option>
              <option value="12inch">12 inch</option>
              <option value="16inch">16 inch</option>
            </select>
          </label>
          <label htmlFor="toppings">
            Pepperoni
            <input
              name="pepperoni"
              type="checkbox"
              onChange={onCheckboxChange}
              checked={values.toppings.pepperoni}
            />
          </label>
          <label htmlFor="toppings">
            Sausage
            <input
              name="sausage"
              type="checkbox"
              onChange={onCheckboxChange}
              checked={values.toppings.sausage}
            />
          </label>

          <label htmlFor="toppings">
            Pineapple
            <input
              name="pineapple"
              type="checkbox"
              onChange={onCheckboxChange}
              checked={values.toppings.pineapple}
            />
          </label>

          <label htmlFor="toppings">
            Extra Cheese
            <input
              name="extraCheese"
              type="checkbox"
              onChange={onCheckboxChange}
              checked={values.toppings.extraCheese}
            />
          </label>

          <label htmlFor="instructions">
            Any special requests?
            <textarea name="instructions" value={values.instructions} onChange={onInputChange} />
          </label>
        </div>

        <div className="submit">
          <button>Place Order</button>
        </div>

        <div className="errors">
            <div>{errors.name}</div>
        </div>
      </form>
    </div>
  );
}

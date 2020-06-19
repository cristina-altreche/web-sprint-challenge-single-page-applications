import React from "react";

export default function Form(props) {
  return (
    <div className="form-wrapper">
      <form className="form-container">
        <div className="inputs">
          <h3>User Info</h3>
          <label htmlFor="name">
            Name&nbsp;
            <input name="name" type="text" />
          </label>

          <label htmlFor="size">
            <select name="size">
              <option value="">--Select Pizza Size--</option>
              <option value="8inch">8 inch</option>
              <option value="12inch">12 inch</option>
              <option value="16inch">16 inch</option>
            </select>
          </label>

          <label htmlFor="toppings">
            Pepperoni
            <input name="pepperoni" type="checkbox" />
            Sausage
            <input name="sausage" type="checkbox" />
            Pineapple
            <input name="pineapple" type="checkbox" />
            Extra Cheese
            <input name="extra-cheese" type="checkbox" />
          </label>

          <label htmlFor="instructions">
              Any special requests?
              <textarea name="instructions"/>
          </label>
        </div>

        <div className='submit'>
            <button>Place Order</button>
        </div>
      </form>
    </div>
  );
}

import React, { useContext } from 'react'

//Context
import OrderContext from "../contexts/OrderContext";

const SmartOrderSelected = () => {

    const {smartOrder, deliveryType } = useContext(OrderContext)

    return (
        <div style={{height: "100px"}}>
            Hello from smart order selected {smartOrder}
        </div>
    )
}

export default SmartOrderSelected

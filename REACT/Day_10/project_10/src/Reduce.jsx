import React, { useReducer, useState } from 'react'


    const items = {buy:0, return:0};

    function toyStoreReducer (state, action){
        switch(action.type){
            case "buy":
                return {...state, buy: state.buy + 1}
            
            case "return":
                return {...state, return: state.return + 1, buy: state.buy - 1}

            default: state;
        }
    }

    function Reduce() {
        const [storeItems, dispatch] = useReducer(toyStoreReducer, items)

        const handleBuy = ()=>{
            dispatch({type:"buy"})
        }

        const handleReturn = ()=>{
            dispatch({type:"return"})
        }


  return (
    <div>
        <h4>Total toys : {storeItems.buy}</h4>
        <h4>Toys sold : {storeItems.return}</h4>
        <button onClick={handleBuy}>Buy Toy</button>
        <button onClick={handleReturn}>Return Toy</button>
        
    </div>
  )
}

export default Reduce
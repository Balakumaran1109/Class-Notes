import React, { useReducer } from 'react'
import './index.css'


const initialState = {
  board: Array(9).fill(null),
  currentPlayer: "X", 
  winner: null
}
const gameReducer = (state, action)=>{
  switch(action.type){
    case "MAKE_MOVE":
      if(state.board[action.index] || state.winner) 
      return state;
    const updateBoard = [...state.board];
    updateBoard[action.index] = state.currentPlayer;
    return{
      ...state,
      board : updateBoard,
      currentPlayer: state.currentPlayer === "X" ? "O" : "X"  
    }

    case "RESET_GAME":
      return initialState;

    default:
      return state;
  }
}
function TicTacToe() {
  const [state, dispatch] = useReducer(gameReducer, initialState)

  const winningCombinatios = [
    [0,1,2], [3,4,5], [6,7,8],
    [0,3,6], [1,4,7], [2,5,8],
    [0,4,8], [2,4,6]
  ];

  const checkWinner = () => {
    for(var combination of winningCombinatios){
      const [a,b,c] = combination;
      if(state.board[a] && state.board[a] === state.board[b] && state.board[a] === state.board[c])
      return state.board[a]
    }
    return null;
  }
  const winner = checkWinner()

  return (

      <div className='tic-tac-toe'>
        <div className='board'>
          {state.board.map((cell, index)=>(
            <button key={index} className='cell' onClick={()=>dispatch({type:"MAKE_MOVE", index})} disabled={winner}>{cell}</button>
          ))}
        </div>
        {winner && (<div className='"winner-message'>
          <p>Winner is {winner}</p>
          <button className='reset-button' onClick={()=>dispatch({type:"RESET_GAME"})}>Play Again !</button></div>)}
      </div> 
  )
}

export default TicTacToe
import React, { useReducer, useState } from 'react'
// import {withRouter} from 'react-router-dom';

function Home() {
  const [add, setAdd ] = useState(100)
  const [de, setDe ] = useState(0)
  const [re, setRe ] = useState(0)

  const countReducer = (state: any, action: any) => {
    switch(action.type) {
      case 'add': return state+1
      default: return state
    }
  }
  const [count, countDispatch] = useReducer(countReducer, 0)

  
  const handelAdd = () => {
    setAdd(add+1)
  }
  
  const handelDe = () => {
    setDe(de-1)
  }

  const handelResult = () => {
    setRe(re*1)
  }

  const handelCount = () => {
    countDispatch({type: 'add'})
  }

  return (
    <div className="P-home">
      <button onClick={() => handelAdd()}>{add}</button>
      <button onClick={() => handelDe()}>{de}</button>
      <button onClick={() => handelResult()}>{re}</button>
      <button onClick={() => handelCount()}>{re}</button>
    </div>
  )
}

// export default withRouter(Home);

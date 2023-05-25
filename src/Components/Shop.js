import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import {actionCreators} from '../State/index'

const Shop = () => {
  const dispatch = useDispatch();
  const balance = useSelector(state => state.amount)
  const {depositMoney, withdrawMoney} = bindActionCreators(actionCreators, dispatch)
  
  return (
    <>
        <h2>Deposit/Withdraw Money</h2>
        {/* <button className="btn btn-primary mx-2" onClick={() => {dispatch(actionCreators.withdrawMoney(100))}}>-</button>
        Update Balance
        <button className="btn btn-primary mx-2" onClick={() => {dispatch(actionCreators.depositMoney(100))}}>+</button> */}
        <button className="btn btn-primary mx-2" onClick={() => {withdrawMoney(100)}}>-</button>
        Update Balance ({balance})
        <button className="btn btn-primary mx-2" onClick={() => {depositMoney(100)}}>+</button>
    </>
  ) 
}

export default Shop
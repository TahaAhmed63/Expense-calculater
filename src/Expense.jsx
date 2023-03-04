import React,{useState} from 'react'
import "./style.css"




export default function Expense() {

const[expenses,setExpenses]=useState([]);
const[total,setTotal]=useState(0)


const handleAddExpense = (event) => {


    event.preventDefault();
  const name = event.target.elements.name.value;

  const amount = parseInt(event.target.elements.amount.value);

(isNaN(amount)) ?
amount = ""


:

setExpenses([...expenses,{name,amount}]);
  setTotal(total+amount);

  event.target.reset();


}
  const handleRemoveExpense = (index) => {
    const amount = expenses[index].amount;
    setExpenses(expenses.filter((_, i)=>i!==index));
    setTotal(total-amount);
  };

  return (
    <div>
<div className="text-center">
    <h1>Expense Calculater</h1>
    </div>
    <div className="container">
    <form onSubmit={handleAddExpense}>

    <div className="row">
        <div className="col-md-6">
 
      <label for="">Expense</label>
      <input type="text" name="name" id="" className="form-control" placeholder="" aria-describedby="helpId" required />
      </div>
    
        <div className="col-md-6">
 
      <label for="">Price</label>
      <input type="text" name="amount" id="" className="form-control" placeholder="" aria-describedby="helpId" required />
      </div>
     </div>

           <button  type="submit" name="Submit" id="" className="btn btn-primary btn-lg btn-block mt-2 text-center">submit</button>
           </form>

           <table className='table'>
    <thead>
      <tr>
        <th scope='col' >Expense Name</th>
        <th scope='col'>Expense Amount</th>
        <th scope='col'>Remove Expense</th>
      </tr>
    </thead>
    <tbody className='box'>
      {expenses.map((expense, index) => (
        <tr  key={index}>
          <td>{expense.name}</td>
          <td>{expense.amount}</td>
          <td>
         { <button className="btn btn-primary" onClick={() => handleRemoveExpense(index)}>
              Remove
            </button> }
          </td>
        </tr>
      ))}
    </tbody>
  </table>
  <p>Total Expenses: {total}</p>
  
</div>



    </div>

  )
}

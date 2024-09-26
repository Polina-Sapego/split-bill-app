import './Form.css';

function Form({friend, bill, setBill, handleBill}) {

    const handleSubmit = (event) => {
        const {name, value} = event.target
        setBill((tip) => ({
            ...tip,
            [name]: Number(value)

        }))
    }

return(
    <div className="Form">
        <h2 className='form'>SPLIT A BILL WITH ANTHONY</h2>
        <div>
            <h4 className='Bill'>💰 Bill value <input name='bill' value={bill.bill} onChange={handleSubmit} className='Bill1'/></h4>
            <h4 className='expense'>🧍 Your expense <input name='expense' value={bill.expense} onChange={handleSubmit} className='expense1'/></h4>
            <h4 className='friend2'>👫 Anthony's expense <input className='friend3' value={bill.bill - bill.expense}/></h4>
            <h4 className='paying'>🤑 Who is paying?
                <select className='Select'>
                <option value='You'>You</option>
                <option value='friend'>{friend.name}</option>
            </select>
            </h4>
            <button className="orange-button2" onClick={handleBill}>Split bill</button>
        </div>

    </div>
)
}

export default Form;
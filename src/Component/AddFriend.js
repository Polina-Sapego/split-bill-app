import './AddFriend.css';
import React, {useState} from "react";
import Friends from "./Friends";

function AddFriend({newName}) {

    const [open, setOpen] = useState(false);

    const [Name, setName] = useState("");

    function handleOpen() {
        setOpen(!open);
    }

    function handleClose(e) {
        setName(e.target.value);
    }


return(

    <div className='Form1'>
        <h3 className='text2'>🧍‍♂️Friend name<input value={Name} onChange={handleClose} className='addfriend'/></h3>
        <h3 className='text3'>🖼Image url<input className='url' value='https://i.pravatar.cc/47/'/></h3>
        <button className="orange-button3" onClick={() => newName(Name)}>Add</button>
        {open && (
            <Friends  />
        )}

    </div>
)

}


export default AddFriend;
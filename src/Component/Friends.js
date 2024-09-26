import Form from "./Form";
import {useState} from "react";
import './Friends.css';


function Friends({item, select}) {



return(

    <div className='friend1 magen'>
        <img src='https://i.pravatar.cc/47/2'/>
        <p className='text'><h3 className='Name' >{item.name}</h3>
            <p  className={`text1 ${item.bill > 0 ? 'green' : 'red'}`} >{item.bill > 0 ? `${item.name} owes you` : `You owe ${item.name}`} {Math.abs(item.bill)+ '$'}</p>
        </p>
        <button className="orange-button" onClick={() => select(item)}>Select</button>



    </div>

)
}


export default Friends;
import './Friendlist.css';
import React, {useState} from "react";
import Form from "./Form";
import Friends from "./Friends";
import AddFriend from "./AddFriend";

const friend = [{name: 'Clark', id: 1, bill: 120}, {name: 'Sarah', id: 2, bill: 20}, {
    name: 'Anthony',
    id: 3,
    bill: -100
}]

function Friendlist() {

    const [friends, setFriends] = useState(friend);

    const [selectedFriend, setSelectedFriend] = useState(null);

    const [bill, setBill] = useState({bill: 0, expense: 0});

    function handleBill() {
      const friendindex = friends.findIndex(friend => friend.id === selectedFriend?.id)

        if (friendindex !== -1){
            const updatedFriends = [...friends]
            updatedFriends[friendindex] = {
                ...updatedFriends[friendindex],
                bill: bill.expense

            }
            setFriends(updatedFriends)


            setSelectedFriend(updatedFriends[friendindex])
        }
    }

    const [addFriend, setAddFriend] = useState(false);

    function handleAddFriend(name){
        setFriends(friends => [
            ...friends,
           {name: name, id: Date.now(), bill: 0}
        ])

    }

    function handleSelected(friend) {
        if (  selectedFriend?.id === friend.id) {
            setSelectedFriend(null)
        }
        else {
            setSelectedFriend(friend)
        }
    }

    function handleAddForm() {
        setAddFriend(!addFriend);
    }

    return (
        <div className="friendlist">
            {friends.map((item, index) => {
                return <Friends key={item.id} item={item} index={index}  select={handleSelected} selectedFriend={selectedFriend}/>

            })}

            {selectedFriend &&
                (<Form friend={selectedFriend} bill={bill} setBill={setBill} handleBill={handleBill}/>)
            }
            {addFriend === false ? (
                <button className="orange-button1" onClick={handleAddForm}>Add friend</button>
            ) : <button className="orange-button1" onClick={handleAddForm}>Close</button>}

            {addFriend &&
                (<AddFriend newName={handleAddFriend} />)}
        </div>
    )
}


export default Friendlist;
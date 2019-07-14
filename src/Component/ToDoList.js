import React from 'react';

const Todolist = (props) =>{

    const {items, deleteItem} = props;
    let length = items.length;
    const listItem = length ? ( items.map(item =>{
            return(
            <div key={item.id}> 
                <span className="name">{item.name}</span>
                <span className="age">{item.age}</span>
                <span className="Action icon" onClick={ () =>deleteItem(item.id)}>&times;</span>
            </div>
            )
        })
    ) : (
        <p>There's no item to show</p>
    )
    return(
        <div className="listItem">
            <div> 
                <span className="name tittle">Name</span>
                <span className="age tittle">age</span>
                <span className="action tittle">Action</span>
            </div>
            {listItem}
        </div>
    )
}

export default Todolist;
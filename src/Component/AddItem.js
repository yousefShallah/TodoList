import React from 'react';

class AddItem extends React.Component{

    state = {
        name:'',
        age:''
    }

    handelChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
        //console.log(e.target.value);
    }

    handelSubmit = (e) =>{
        e.preventDefault();
        this.props.addItem(this.state);
        this.setState({
            name : '',
            age :''
        })
        
    }
    render(){
        return(
            <div> 
                <form onSubmit={this.handelSubmit}>
                    <input  type="text" placeholder="Enter Name" id="name" onChange={this.handelChange} value={this.state.name} />
                    <input  type="number" placeholder="Enter age" id="age" onChange={this.handelChange} value={this.state.age} />
                    <input  type="submit" value="Add" />
                </form>
            </div>
        )
    }
}

export default AddItem;
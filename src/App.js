import React from 'react';
import AddItem from './Component/AddItem';
import ToDoList from './Component/ToDoList';

class App extends React.Component {
  state = {
    items:[
      {id:1, name:'yousef', age:20},
      {id:2, name:'mohammed', age:22},
      {id:3, name:'hamza', age:21}
    ]
  }

  DeleteItem = (id) => {
    //another way to delete item from list 
    let items = this.state.items.filter(item =>{
      return item.id !== id
    })
    this.setState({items});
    
    /*
    //way to delete item from list(state)
    let item = this.state.item;
    let i = item.findIndex(item => item.id === id)
    item.splice(i ,1)
    this.setState(item = item);   */ 
  }

  addItem = (item) =>{
    item.id = Math.random() * 10;
    let items = this.state.items;
    items.push(item);
    this.setState({items});
  }

  render(){
  return (
    <div className="AppContiner">
      <h1 className="textCenter"> To Do </h1>
      <ToDoList items={this.state.items} deleteItem={this.DeleteItem} />
      <AddItem addItem={this.addItem} />
    </div>
  );
}
}
export default App;

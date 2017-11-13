import React, { Component } from 'react';
import TodoList from './TodoItems';
import './TodoForm.css';

class TodoForm extends Component {


    constructor(props, context) {
        super(props, context);

        this.state = {
            items: []
        };

        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        this.updateItem = this.updateItem.bind(this);
    }

    addItem(e) {

        var itemArray = this.state.items;

        if (this._inputElement.value !== "") {
            itemArray.unshift(
                {
                    text: this._inputElement.value,
                    key: Date.now(),
                    checked: false,
                    opacity: 1
                }
            );

            this.setState({
                items: itemArray
            });

            this._inputElement.value = "";
        }

        console.log(itemArray);

        e.preventDefault();

    }

    deleteItem(key) {
        var filteredItems = this.state.items.filter(function (item) {
            return (item.key !== key);
        });

        this.setState({
            items: filteredItems
        });
    }

    updateItem(key){
        var filteredItems = this.state.items.map(function (v,i,a) {
             if(v.key === key){
                 if(v.checked === false){
                     v.checked = true;
                     v.opacity = 0.3;
                 }else{
                     v.checked = false;
                     v.opacity = 1;
                 }
             }
             return v;
        });
        console.log(filteredItems);
        this.setState({
            items: filteredItems
        });
    }

    render() {
        return (
            <div className="todoListMain">
                <div className="header">
                    <form onSubmit={this.addItem}>
                        <input
                            ref={(a) => this._inputElement = a}
                            placeholder="enter task to do"
                            type="text"
                        />
                        <button type="submit">Add</button>
                    </form>
                <TodoList entries={this.state.items}
                          delete={this.deleteItem}
                          update={this.updateItem}
                />
                </div>
            </div>
        );
    }
}

export default TodoForm;

import { Component } from "react";
import checklist from './checklist.png';

export class List extends Component {
    state = {
        userInput: "",
        todoList: []
    }

    onChangeEvent (e) {
        this.setState ({userInput: e})
    }

    addItem(input) {
        if (input === '') {
            alert ("Please enter an item")
        }
        else {
        let listArray = this.state.todoList;
        listArray.push(input);
        this.setState({todoList: listArray,
        userInput: ''})}
    }

    crossedWord(e) {
        const li = e.target;
        li.classList.toggle('crossed')
    }

    deleteItem() {
        let listArray = this.state.todoList;
        listArray = [];
        this.setState({todoList: listArray})
    }

    onFormSubmit(e) {
        e.preventDefault();
    }

    render () {
        return (
            <div>
                <form onSubmit={this.onFormSubmit}>
            <div className="container">
                <input type="text" placeholder="What is your plan?"
                onChange = {(e) => {this.onChangeEvent(e.target.value)}}
                value = {this.state.userInput} />
                <button onClick = {() => this.addItem (this.state.userInput)}> + </button>
                <button onClick={() => this.deleteItem()}>Delete all</button>
            </div>
            <div>
                <ul>
                    {this.state.todoList.map((item, i) => (
                        <li onClick={this.crossedWord}
                        key={i}>
                            <img src={checklist} width="20px" alt="icon"/>
                        {item}</li>
                    ))}
                </ul>
            </div>
            </form>
            </div>
        )
    }
}
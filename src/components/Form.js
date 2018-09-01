import React, { Component } from 'react';

class Form extends Component {
    constructor() {
        super();
        this.state = {
            userInput: ''
        }
    }
    handleChange = (e) => {
        this.setState({
            userInput: e.target.value
        })
        // console.log(e.target.value);
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.heroName(this.state.userInput)
        this.setState({
            userInput: ''
        })
    }
    render() {
        return (
            <div className={'wrapper'}>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor=""></label>
                    <input type="search" onChange={this.handleChange} value={this.state.userInput}/>
                    <button>Search</button>
                </form>
            </div>
        )
    }
}

export default Form;
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
                    <label className="visuallyhidden" htmlFor="heroSearch">Enter Character's Name</label>
                    <input className='heroSearch' name="heroSearch" type="search" onChange={this.handleChange} value={this.state.userInput} placeholder="Character's Name..." required/>
                    <div>
                        <button className='button'>Search</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Form;
// NODE MODULES
import React, { Component } from 'react';

class Form extends Component {
// ORIGINAL UNMUTABLE STATE
    constructor() {
        super();
        this.state = {
            userInput: ''
        }
    }
// LISTENER FOR CHANGES IN INPUTS
    handleChange = (e) => {
        this.setState({
            userInput: e.target.value
        })
    }
// LISTENER FOR SUBMIT ON FORM PREVENTING REFRESH & SENDING PROPS TO APP
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.heroName(this.state.userInput)
        this.setState({
            userInput: ''
        })
    }
    render() {
        return (
// CONTENT FOR THE FORM
            <div className={'wrapper'}>
                <form onSubmit={this.handleSubmit}>
                    <label className="visuallyhidden" htmlFor="heroSearch">Enter Character's Name</label>
                    <input className='heroSearch' name="heroSearch" type="text" onChange={this.handleChange} value={this.state.userInput} placeholder="Character's Name..." required/>
                    <div>
                        <button className='button'>Search</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Form;
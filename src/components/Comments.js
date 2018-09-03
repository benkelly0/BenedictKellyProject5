import React, { Component } from 'react';
import firebase from '../firebase';

const dbRef = firebase.database().ref();

class Comments extends Component {
    constructor() {
        super();
        this.state = {
            comments: [],
        };
    }
    componentDidMount() {
        dbRef.on('value', (snapshot) => {
            console.log(snapshot.val());
            this.sortComments(snapshot.val())
        });
    }
    sortComments = (commentObject) => {
        const commentsArray = Object.entries(commentObject).map((item) => {
            return ({
                key: item[0],
                name: item[1].name,
                comment: item[1].comment,
            })
        })
        this.setState({
            comments: commentsArray
        })
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value,
        });
    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state.nameInput, this.state.commentInput);
        this.addCommentToDatabase(this.state.nameInput, this.state.commentInput);
        // this.setState({
        //     name: '',
        //     comment: '',
        // });
    }
    addCommentToDatabase = (name, comment) => {
        dbRef.push({
            name: name,
            comment: comment,
        });
    }
    render() {
        return (
            <div className={'wrapper'}>
                <div className="commentHeader">
                    <h2>Comments</h2>
                    <h3 className="commentDesc">Who's your favourite superhero?</h3>
                </div>
                <div className="commentContainer">
                    <ul className="comments">
                        {this.state.comments.map((item) => {
                            return (
                                <div className="comment" key={item.key}>
                                    <h4>{item.name}</h4>
                                    <h4>{item.comment}</h4>
                                </div>
                            )
                        })}
                    </ul>
                </div>
                <form className="commentForm" onSubmit={this.handleSubmit}>
                    <input onChange={this.handleChange} className='nameInput' type='text' id='nameInput' placeholder='Enter your name:' required value={this.state.name}/>
                    <input onChange={this.handleChange} className='commentInput' type='text' id='commentInput' placeholder='Enter your comment...' required value={this.state.comment}/>
                    <div>
                        <button>Post Comment</button>
                    </div>
		        </form>
            </div>
        )
    }
}

export default Comments;
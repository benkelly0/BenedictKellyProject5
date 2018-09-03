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
        this.addCommentToDatabase(this.state.nameInput, this.state.commentInput);
        
        // This is supposed to empty the form but it doesn't seem to be working. It works the first time but then for some reason it won't allow typing in the inputs after that unless you refresh the page. I ended up trying the reset() method which apparently exists in react too... and it worked!
        
        // this.setState({
            //     name: '',
            //     comment: '',
            // })
        
        document.getElementById('commentForm').reset();
        }
        addCommentToDatabase = (name, comment) => {
            dbRef.push({
                name: name,
                comment: comment,
            });
        }
    render() {
        return (
            <div className={'wrapper commentSection'}>
                <div className="commentHeader">
                    <h2>Comments</h2>
                </div>
                <div className="commentContainer">
                    <ul className="comments">
                        {this.state.comments.map((item) => {
                            return (
                                <div className="comment flex" key={item.key}>
                                    <h4>{item.name}:</h4>
                                    <p>{item.comment}</p>
                                </div>
                            )
                        })}
                    </ul>
                </div>
                <div className='leaveComment'>
                    <div>
                        <h2>Leave a comment...</h2>
                    </div>
                    <form className="commentForm" id="commentForm" onSubmit={this.handleSubmit}>
                        <div>
                            <label className="visuallyhidden" htmlFor="nameInput">Enter Your Name</label>
                            <input onChange={this.handleChange} className='nameInput' name='nameInput' type='text' id='nameInput' placeholder='Enter your name...' required value={this.state.name}/>
                        </div>
                        <div>
                            <label className="visuallyhidden" htmlFor="commentInput">Enter Your Comment</label>
                            <input onChange={this.handleChange} className='commentInput' name='commentInput' type='text' id='commentInput' placeholder='Enter your comment...' required value={this.state.comment}/>
                        </div>
                        <div>
                            <button className='button'>Post Comment</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default Comments;
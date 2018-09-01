import React, { Component } from 'react';
import firebase from '../firebase';

class Comments extends Component {
    constructor() {
        super();
        this.state = {
            comments: []
        };
    }
    addToComments = (comment) => {
        const comments = Array.from(this.state.comments);
        comments.push(comment);
        // console.log(comments);
        this.setState({
            comments: []
        })
    }
    componentDidMount() {
        const dbRef = firebase.database().ref();
        dbRef.on('value', function (snapshot) {
            // console.log(snapshot.val());
        })
    }
    render() {
        return (
            <div className={'wrapper'}>
                
            </div>
        )
    }
}

export default Comments;
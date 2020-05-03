import React from 'react';
import styles from './styles';
import { Button, withStyles } from '@material-ui/core';
import ChatListComponent from '../chatList/chatList.js';
import ChatViewComponent from '../chatView/chatView.js';

const firebase = require("firebase");

class DashboardComponent extends React.Component {

    constructor() {
        super()
        this.state = {
            selectedChat: null,
            newChatFormVisible: false,
            email: null,
            chats: []
        };
    }

    render() {

        const { classes } = this.props;
        //because we do not use router to access chatList, do not have access to history prop
        return(
            <div>
                <ChatListComponent history={this.props.history} newChtBtnFn={this.newChatButtonClicked} selectChatFn={this.selectChat} chats={this.state.chats} userEmail={this.state.email} selectedChatIndex={this.state.selectedChat}> </ChatListComponent>
                {
                    this.state.newChatFormVisible ? 
                    null:
                    <ChatViewComponent></ChatViewComponent>

                }
                <Button className={classes.signOutBtn} onClick={this.signOut}>Sign Out</Button>
            </div> 
        );
    }

    signOut = () => {
        firebase.auth().signOut();
    }

    selectChat = (chatIndex) => {
        console.log('selected a chat', chatIndex); 
    }

    //user should not be on dashboard if not signed in, redirect to log in
    newChatButtonClicked = () => {
        this.setState({ newChatFormVisible: true, selectedChat: null});
    }

    //get called whenever component put into dom
    componentDidMount = () => {
        firebase.auth().onAuthStateChanged(async _usr => {
            if(!_usr)
                this.props.history.push('/login');
            else{
                await firebase.firestore().collection('chats')
                .where('users', 'array-contains', _usr.email)
                //real time updates
                .onSnapshot(async res => {
                    //transform from snapshot to array of data
                    const chats = res.docs.map(_doc =>_doc.data())
                    await this.setState({
                        email : _usr.email,
                        chats: chats
                    });
                    console.log(this.state);
                })
            }
        })
    }
}

export default withStyles(styles)(DashboardComponent);
import React from 'react';
import ChatListComponent from '../chatList/chatList.js';

class DashboardComponent extends React.Component {

    render() {
        return(
            <div>
                <div>Hello world from Dashboard</div>
                <ChatListComponent></ChatListComponent>
            </div>
        );
    }
}

export default DashboardComponent;
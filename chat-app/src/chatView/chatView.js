import React from 'react';
import styles from './styles';
import { withStyle, withStyles } from '@material-ui/core/styles';

class ChatViewComponent extends React.Component {
    
    render() {

        const {classes} = this.props;

        return (
            <div className={classes.content}>
                Hello from chatView 
            </div>
        );
    }
}

export default withStyles(styles)(ChatViewComponent);
import React from 'react';
//import
import { Link } from 'react-router-dom';
import styles from './styles';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import Paper from '@material-ui/core/Paper';
import withStyles from '@material-ui/core/styles/withStyles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const firebase = require("firebase");

class LoginComponent extends React.Component {

    //this is what the setState function accesses
    constructor() {
        super();
        this.state = {
            email: null,
            password: null,
            loginError: ''
        };
    }

    render() {
	//ignore, save space
        const { classes } = this.props;
        return(
	    //note: autoFocus => form starts with user typing in this object, only 1!
            <main className={classes.main}>
                <CssBaseline></CssBaseline>
                <Paper className={ classes.paper}>
                    <Typography component='h1' variant='h5'>
                        Log in page!
                    </Typography>
                    <form className={classes.form} onSubmit={(e) => this.submitLogin(e)}>
                        <FormControl required fullWidth margin='normal'>
                            <InputLabel htmlFor='login-email-input'>Enter Your Email</InputLabel>
                            <Input autoComplete='email' autoFocus id='login-email-input' onChange={(e) => this.userTyping('email', e)}></Input>
                        </FormControl>
                        <FormControl required fullWidth margin='normal'>
                            <InputLabel htmlFor='login-password-input'>Enter Your Password</InputLabel>
                            <Input type='password' autoComplete='password' id='login-password-input' onChange={(e) => this.userTyping('password', e)}></Input>
                        </FormControl>
                        <Button type='submit' fullWidth variant='contained' color='primary' className={classes.submit}>Login</Button>
                    </form>
                    {
			//if error not null: display error
                        this.state.loginError ?
                        <Typography component='h5' variant='h6' className={classes.errorText}>
                            Incorrect Login Information
                        </Typography> :
                        null
                    }
                    <Typography component='h5' variant='h6' className={classes.noAccountHeader}>Don't Have An Account?</Typography>
                    <Link className={classes.signUpLink} to='/signup'>Sign Up!</Link>
                </Paper>
            </main>
        );
    }

    //on update: determine field, set field to user input
    userTyping = (type, e) => {
        switch (type) {
            case 'email':
                this.setState({ email: e.target.value });
                break;

            case 'password':
                this.setState({ password: e.target.value });
                break;

            default:
                break;
        }
    }

    //on submit: reference firebase
    //if user/pass match: goto dashboard. Else: set error and log
    submitLogin = (e) => {
        e.preventDefault();
        
        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then(() => {
            this.props.history.push('/dashboard');
        }, err => {
            this.setState({ loginError: 'Server error'});
            console.log(err);
        });
    }
}

export default withStyles(styles)(LoginComponent);

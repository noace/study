import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from 'axios';

export default class Login extends React.Component {

    componentDidMount(){

    }

    login=() => {
        this.props.history.push("/bookList");
    }

    // login = async () => {
    //     await axios.post(
            
    //     );
    // }


    render(){
        return(
            <>
            <TextField id="standard-basic" label="用户名" /><br/>
            <TextField id="standard-basic" label="密码" /><br/>
            <Button variant="contained" onClick={this.login}>登录</Button>
            </>
        );
    }
}
import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from 'axios';

export default class Login extends React.Component {

    componentDidMount(){
        this.add();
    }

     add = async () => {
        const a = await axios.get('/api/books')
        console.log(a);
        
    }
     
    render(){
        return (
            <div>You</div>
        );
    }
}
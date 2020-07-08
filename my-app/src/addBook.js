import React from 'react';
import TextField from '@material-ui/core/TextField';

export default class AddBook extends React.Component{




    render(){
        return (
            <>
            <TextField id="standard-basic" label="作者" />
            <TextField id="standard-basic" label="书名" />
            <TextField id="standard-basic" label="描述" />
            <TextField id="standard-basic" label="出版社"/>
            </>
        )
    }
}
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import axios from 'axios';

const useStyles = {
    table: {
        maxWidth: 350,
    }
}

class BookItems extends React.Component {

    constructor(){
        super();
        this.state={
            books:{}
        }
    }

    data = async () => {
        await axios.get('/api/books').then((res) =>{
            console.log(res);
            this.setState({books: res.data.data});
        });
    }

    create=() => {
        this.props.history.push("/bookList/create");
    }

    render() {
        return (
            <>
            <TableContainer component={Paper}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>作者</TableCell>
                            <TableCell align="left">书名</TableCell>
                            <TableCell align="left">描述</TableCell>
                            <TableCell align="left">出版社</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow >
                            <TableCell component="th" scope="row">
                                
                            </TableCell>
                            <TableCell align="left" ></TableCell>
                            <TableCell align="left"></TableCell>
                            <TableCell align="left"></TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
            <Button variant="contained" color="primary" >编辑</Button>
            <Button variant="contained" color="primary" >删除</Button>
            </>
        );
    }
}

export default withStyles(useStyles)(BookItems);
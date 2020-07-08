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
import {Link} from 'react-router-dom';

const useStyles = {
    table: {
        maxWidth: 350,
    }
}

class TrData extends React.Component {

    constructor(){
        super();
        this.state={
            books:{}
        }
    }

    componentDidMount(){
        this.getData();
    }

    getData = async () => {
        const res = await axios.get('/api/books');
        console.log(res);
        
        this.setState({books: res.data.data});
    }

    create=() => {
        this.props.history.push("/bookList/add");
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
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow >
                            <TableCell component="th" scope="row">
                                
                            </TableCell>
                            <TableCell align="left">
                                {/* {book.name} */}
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
            <Button variant="contained" color="primary" onClick={this.create}>新增</Button>
            </>
        );
    }
}

export default withStyles(useStyles)(TrData);
import React, { Component } from 'react';
import './App.css'
import Customer from './components/Customer';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import {withStyles} from '@material-ui/core/styles';

const styles =them =>({
  root:{
    width:'100%',
    marginTop:them.spacing.unit *3,
    overflowX:"auto"
    },
    table:{
      minWidth:1080
    }  
})


const customer=[{
  'id':1,
  'image':'https://placeimg.com/64/64/1',
  'name':'홍길동',
  'birthday':'960702',
  'gender':'남자',
  'job':'의적'

},
{
  'id':2,
  'image':'https://placeimg.com/64/64/2',
  'name':'박길동',
  'birthday':'950702',
  'gender':'남자',
  'job':'도적'

},
{
  'id':3,
  'image':'https://placeimg.com/64/64/3',
  'name':'서길동',
  'birthday':'940702',
  'gender':'남자',
  'job':'적'

}
]

class App extends Component {
  render() {
    const {classes}=this.props;
    return (
      <Paper className={classes.root}>
        <Table className={classes.talbe}>
          <TableHead>
            <TableRow>
              <TableCell>번호</TableCell>
              <TableCell>이미지</TableCell>
              <TableCell>이름</TableCell>
              <TableCell>생년월일</TableCell>
              <TableCell>성별</TableCell>
              <TableCell>직업</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          { customer.map(c =>{return(<Customer key={c.id} id={c.id}  image={c.image} name={c.name}  birthday={c.birthday} gender={c.gender} job={c.job} />)}) }
        </TableBody>
        </Table>
   </Paper>
    );
  }
}
export default withStyles(styles)(App);


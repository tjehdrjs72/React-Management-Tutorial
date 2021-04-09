import React, { Component } from 'react';
import './App.css'
import Customer from './components/Customer';

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
    return (
      <div>
        {
          customer.map(c =>{
            return(
              <Customer
              key={c.id}
              id={c.id}
              image={c.image}
              name={c.name} 
              birthday={c.birthday}
              gender={c.gender}
              job={c.job}
              
              />
            )
          })
        }
     
     
     </div>
    );
  }
}
export default App;


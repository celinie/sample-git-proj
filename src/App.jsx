import React, { Component } from 'react';
import './App.css';
//import Table from './components/table';
import Form from './components/form';

class App extends Component {
  constructor(props){
    super(props);

    // Set default state
    this.state = {
      userList: [
        {
          name: 'Celine',
          age: 20,
          occupation: 'Engr'
        },
        {
          name: 'Cherry',
          age: 20,
          occupation: 'Developer'
        }
      ],
      user: {
        name: '',
        age: '',
        occupation: ''
      }
    }

    // Add function bindings

  }

  // Add event handlers
  handleChangeInfo = e => {
    console.log('EVENT');
    console.log('NICE');

   // console.log(e.target);
    const {name, value} = e.target;
    this.setState((prevState) => ({
      user: {
        ...prevState.user,
        [name]: value
      }
    }));
  }

  handleAddUser = e => {
    console.log('PASSED HANDLE ADD USER');
    console.log(this.state.userList);

    let user = this.state.user;
     let userList = [...this.state.userList];
 

    userList.push(user);
    console.log(this.state.userList);
    this.setState({userList : userList});

    e.preventDefault();
  }

  deleteUser = index => {
    let userList = [...this.state.userList];
    userList.splice(index, 1);
    this.setState({userList : userList});
  }

  render() {

    let userList = this.state.userList;
    console.log('USERS');
    console.log(this.state.userList);
    

    return (
      <div className="App">
      <h1>FORMS APP</h1>

      
      <Form/>

      {/* <div className='forms-panel'>
        <form>
          Name: <br/> <input type='text' name='name' placeholder='Name' onChange={this.handleChangeInfo} /> <br/>
          Age: <br/> <input type='text' name='age' placeholder='Age' onChange={this.handleChangeInfo}/> <br/>
          Occupation: <br/> <input type='text' name='occupation' placeholder='Occupation' onChange={this.handleChangeInfo} /> <br/>
          <br/>
          <button type='button' onClick={this.handleAddUser}>Add User</button>
          
        </form>
        </div>
        <br/> */}

      <div className='table-panel'>     
      <table className='user-table'>
        <thead></thead>
        <tbody>
          <tr>
            <th className='user-table-cell'>NAME</th>
            <th className='user-table-cell'>AGE</th>
            <th className='user-table-cell'>OCCUPATION</th>
          </tr>
          {
            userList.map((user, index) => {
              return(
                <tr className='user-table-row'>
                <td className='user-table-cell'>{user.name}</td>
                <td className='user-table-cell'>{user.age}</td>
                <td className='user-table-cell'>{user.occupation}</td>
                <td className='user-table-cell'>
                <button type='button' onClick={() => this.deleteUser(index)}>DELETE USER</button>
                </td>

                </tr>
              )
            })
          }
        </tbody>
      </table>
      </div>
       
      </div>
    );
  }
}

export default App;

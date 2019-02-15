import React, { Component } from 'react';


class Form extends Component {

render() {

    //let userList = this.state.userList;
    // console.log('USERS');
    // console.log(this.state.userList);
    

    return (
      <div className="App">
      

      <div className='forms-panel'>
        <form>
          Name: <br/> <input type='text' name='name' placeholder='Name' onChange={this.handleChangeInfo} /> <br/>
          Age: <br/> <input type='text' name='age' placeholder='Age' onChange={this.handleChangeInfo}/> <br/>
          Occupation: <br/> <input type='text' name='occupation' placeholder='Occupation' onChange={this.handleChangeInfo} /> <br/>
          <br/>
          <button type='button' onClick={this.handleAddUser}>Add User</button>
          
        </form>
        </div>
        <br/>
        </div>
    )
}
}

export default Form;
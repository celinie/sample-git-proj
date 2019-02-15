import React, { Component } from 'react';


class Table extends Component {
    
    
    render() {

        let userList = this.state.userList;
        // console.log('USERS');
        // console.log(this.state.userList);
        
    return (
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
    )
}
    
}

export default Table;
import React from 'react'

const User = ({users}) => {
  return (
    <div>
        <h1>User Component</h1>
        <table border="1">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Username</th>
                    <th>Ctiy</th>
                    <th>Email</th>
                    <th>Website</th>
                </tr>
            </thead>
            {
                users.map((user)=>(
                    <tbody>
                        <tr>
                            <td>{user.name}</td>
                            <td>{user.username}</td>
                            <td>{user.address.city}</td>
                            <td>{user.email}</td>
                            <td>{user.website}</td>
                        </tr>
                    </tbody>
                ))
            }
        </table>
    </div>
  )
}

export default User
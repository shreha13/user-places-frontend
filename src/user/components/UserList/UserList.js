import React from 'react'
import Card from '../../../shared/components/UIElements/Card/Card'
import UserItem from '../UserItem/UserItem'

import './UserList.css'

const UserList = ({ users }) => {
  return (
    <>
    {
      users.length > 0 ? <ul className='users-list'>{users.map(user => <UserItem key={user.id} user={user} />)}</ul>  : <Card className='center'><h2>No user found</h2></Card>
    }
    </>
  )
}

export default UserList
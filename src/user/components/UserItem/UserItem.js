/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import { Link } from 'react-router-dom'
import Avatar from '../../../shared/components/UIElements/Avatar/Avatar'
import Card from '../../../shared/components/UIElements/Card/Card'

import './UserItem.css'

const UserItem = ({user}) => {
  const {places, image, id, name} = user
  return (
    <li className='user-item'>
      <Card className='user-item__content'>
        <Link to={`/${id}/places`}>
          <div className='user-item__image'>
            <Avatar image={image} alt={name} />
          </div>
          <div className='user-item__info'>
            <h2>{name}</h2>
            <h3>{user.places} {places === 1? 'Place': 'Places'}</h3>
          </div>
        </Link>
      </Card>
    </li>
  )
}

export default UserItem
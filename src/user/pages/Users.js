import React from 'react';
import UserList from '../components/UserList/UserList';

const users = [
  {
    id: 1,
    name: 'shreya',
    places: 2,
    image: 'https://media.istockphoto.com/id/1209793467/photo/crash-tesh-dummy-in-car.jpg?s=1024x1024&w=is&k=20&c=It6B05SKUjvd8EEdAUCoM6KHg2ZO3TseB7IJrD-P_uo='
  },
  {
    id: 2,
    name: 'amardeep',
    places: 1,
    image: 'https://media.istockphoto.com/id/1209793467/photo/crash-tesh-dummy-in-car.jpg?s=1024x1024&w=is&k=20&c=It6B05SKUjvd8EEdAUCoM6KHg2ZO3TseB7IJrD-P_uo='
  },
  {
    id: 3,
    name: 'prem',
    places: 3,
    image: 'https://media.istockphoto.com/id/1209793467/photo/crash-tesh-dummy-in-car.jpg?s=1024x1024&w=is&k=20&c=It6B05SKUjvd8EEdAUCoM6KHg2ZO3TseB7IJrD-P_uo='
  },
]

const Users = () => {
  return <UserList users={users}/>;
};

export default Users;

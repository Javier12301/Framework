import './App.css';
import Card from './components/Card';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {

  const generateUser = 5;
  const instance = axios.create({
    baseURL: `https://randomuser.me/api?results=${generateUser}`,
    headers: {
      'X-API-KEY': 'E7R4-V4IV-I4SS-YB2B'
    }
  });

  const [users, setUsers] = useState([]);
  const responses = [];

 //Función para obtener los usuarios de la API
 
 async function getUsers() {
  const totalUsers = generateUser;
  let fetchedUsers = 0;
  while (fetchedUsers < totalUsers) {
    const response = await instance.get('');
    responses.push(response);
    fetchedUsers += response.data.results.length;
  }
  const results = await Promise.all(responses);
  const newUsers = results.flatMap(response =>
    response.data.results.map((user, index) => ({
      id: users.length + index + 1,
      name: `${user.name.first} ${user.name.last}`,
      age: user.dob.age,
      avatar: user.picture.large,
    }))
  );
  return newUsers.slice(0, totalUsers);
}

useEffect(() => {
  getUsers().then(newUsers => setUsers(newUsers));
  console.log(users)
}, []);

  async function newUser() {
    const response = await axios.get('https://randomuser.me/api/');
    const newUsers = [
      ...users,
      {
        id: users.length + 1,
        name: `${response.data.results[0].name.first} ${response.data.results[0].name.last}`,
        age: response.data.results[0].dob.age,
        avatar: response.data.results[0].picture.large,
      }
    ];
    setUsers(newUsers);
    console.log(users)
  }

  async function updateUsers() {
    const response = await axios.get(`https://randomuser.me/api?results=${users.length}`);
    const newUsers = response.data.results.map((user, index) => ({
      ...users[index],
      name: `${user.name.first} ${user.name.last}`,
      age: user.dob.age,
      avatar: user.picture.large
    }));
    setUsers(newUsers);
  }

  const handleClearList = () => {
    setUsers([]);
  }

  return (
    <div className="wrapper">
      <Card users={users}  clearList={handleClearList} updateList={updateUsers} newUser={newUser} />
    </div>
  );
}

export default App;

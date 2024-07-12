import './App.css'
import Login from './components/Login'
import SignUp from './components/SignUp'
import {StreamChat} from 'stream-chat';
import Cookies from 'Universal-cookie';

function App() {
  const api_key = "79c4qcmeqepw";
  const cookies = new Cookies();
  const token = cookies.get('token');
  const client = StreamChat.getInstance(api_key);

  if(token){
    client.connectUser({
      id: cookies.get('userId'),
      name: cookies.get('username'),
      firstName: cookies.get('fullName'),
      lastName: cookies.get('lastName'),
      hashPassword : cookies.get('hashPassword'),
    },
  token).then((user) => {
    console.log('User:', user);
  });
  }
  return (
   <div>
    <SignUp />
    <Login />
   </div>
  )
}

export default App

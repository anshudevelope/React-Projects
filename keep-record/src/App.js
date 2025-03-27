import './App.css';
import Header from './Components/Header';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import AddIcon from '@mui/icons-material/Add';
import { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';



function App() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [data, setData] = useState([]);

  const addData = () => {
    setData([...data, { name, email }])

    setName("");
    setEmail("");
  }


  const removeItem = (index) => {
    let arr = data;
    arr.splice(index, 1);
    setData([...arr]);
  }


  return (
    <div className="App">
      <Header />
      <div className='form'>
        <Stack direction="row" spacing={2}>
          <TextField
            value={name}
            onChange={(e) => setName(e.target.value)}
            id="outlined-basic"
            label="Student Name"
            variant="outlined" />

          <TextField
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            id="outlined-basic"
            label="Email"
            variant="outlined" />
          <Button onClick={addData} variant="contained" color="error"><AddIcon /></Button>
        </Stack>
      </div>

      <div className='data'>
        <div className='data-value'>
          <h4>Name</h4>
          <h4>Email</h4>
          <h4>Remove</h4>
        </div>
        {
          data.map((e, index) => {
            return (
              <div key={index} className='data-value'>
                <h4>{e.name}</h4>
                <h4>{e.email}</h4>
                <IconButton onClick={() => removeItem(index)} color="primary" aria-label="delete" size="large">
                  <DeleteIcon />
                </IconButton>
              </div>
            )
          })
        }

      </div>
    </div>
  );
}

export default App;

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
  const [phone, setPhone] = useState("");
  const [batch, setBatch] = useState("");
  const [section, setSection] = useState("");
  const [data, setData] = useState([]);

  const addData = () => {
    // (name === "" || email === "" || email === email.includes('@')  ? alert("enter name & email") : setData([...data, { name, email }]))

    if (!name) return alert("Enter Name");
    if (!email) return alert("Enter Valid Email");
    if (!email.includes('@')) return alert("Email must contain (@)");
    if (email.indexOf('@') === 0) return alert("Email can't start with @");
    if (email.indexOf('.') === -1 || email.indexOf('.') < email.indexOf('@')) return alert("Email must contain a valid domain (e.g., example.com)");
    if (/\s/.test(email)) return alert("Email must not contain any spaces");

    if (!phone) return alert("Enter Phone Number");
    if (!/^\d{10}$/.test(phone)) return alert("Phone Number must be 10 digits number only");

    if (!batch) return alert("Enter Class");
    if (isNaN(batch) || parseInt(batch) > 12 || parseInt(batch) < 1) return alert("Class must be a number between 1 and 12");

    if (!section) return alert("Enter Section");
    if (!/^[A-Z]$/.test(section)) return alert("Section must be a single letter from A to Z");

    setData([...data, { name, email, phone, batch, section }]);


    setName("");
    setEmail("");
    setBatch("");
    setPhone("");
    setSection("");
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
            variant="outlined"
            required />

          <TextField
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            id="outlined-basic"
            label="Email"
            variant="outlined"
            required />

          <TextField
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            id="outlined-basic"
            label="Phone"
            variant="outlined"
            required />


          <TextField
            value={batch}
            onChange={(e) => setBatch(e.target.value)}
            id="outlined-basic"
            label="Batch"
            variant="outlined"
            required />


          <TextField
            value={section}
            onChange={(e) => setSection(e.target.value)}
            id="outlined-basic"
            label="Section"
            variant="outlined"
            required />

          <Button onClick={addData} variant="contained" color="error"><AddIcon /></Button>
        </Stack>
      </div>

      <div className='data'>
        <div className='data-value'>
          <h4>Name</h4>
          <h4>Email</h4>
          <h4>Phone</h4>
          <h4>Batch</h4>
          <h4>Section</h4>
          <h4>Remove</h4>
        </div>
        {
          data.map((e, index) => {
            return (
              <div key={index} className='data-value'>
                <h4>{e.name}</h4>
                <h4>{e.email}</h4>
                <h4>{e.phone}</h4>
                <h4>{e.batch}</h4>
                <h4>{e.section}</h4>
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

import React,{useState} from 'react'

export default function Login() {
  const [name, setName] = useState("");
  const [state, setState] = useState({
    email: "",
    password: ""
  });
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setState((prevProps) => ({
      ...prevProps,
      [name]: value
    }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`The name you entered was: ${name}`)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Enter your name:
        <input 
          type="text" 
          name ='password'
          value={state.email}
          onChange={handleInputChange}
        />
      </label>
      <input type="submit" />
    </form>
  )
}

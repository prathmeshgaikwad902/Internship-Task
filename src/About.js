import { useState } from "react";//javascript hook form library

function About() {
  const [formdata, setFormdata] = useState({
    name: '',
    email: '',
    password: '',
    address: '',
    country: '',
    subscribe: false
  });

  const onHandleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormdata({
      ...formdata,
      [name]: type === 'checkbox' ? checked : value
    });
  };
   
  const [error,setError]=useState({});
  const onFormHandle = (event) => {
    setError({});
    event.preventDefault();
    console.log(formdata);
    if(formdata.name === '' || formdata.name === null){
        // alert("Please enter something");
        setError({
            name: 'Name can not be blank'
        });
    }
      setError({})
       if((formdata.password).length<3 || (formdata.password).length>9){
        setError({
            name1: 'Password should be in range'
        });
    }
    
    return;
  };

  return (
    <>
      <h1>Form</h1>
      <form onSubmit={onFormHandle}>
        <input 
          type="text" 
          name="name" 
          placeholder="Enter Name"
          value={formdata.name}
          onChange={onHandleChange} 
        /><br /><br />
        <span style ={{color:'purple'}}>{error && error.name}</span>
        <br></br>
        <input 
          type="email" 
          name="email" 
          placeholder="Enter Email"
          value={formdata.email}
          onChange={onHandleChange} 
        /><br /><br />

        <input 
          type="password" 
          name="password" 
          placeholder="Enter Password"
          value={formdata.password}
          onChange={onHandleChange} 
        /><br /><br />
         <span style ={{color:'purple'}}>{error && error.name1}</span>
         <br></br>

        <textarea 
          rows={3}
          cols={30}
          name="address"
          placeholder="Enter Address"
          value={formdata.address}
          onChange={onHandleChange}
        /><br /><br />

        <select 
          name="country"
          value={formdata.country}
          onChange={onHandleChange}
        >
          <option value="">--Select Country--</option>
          <option value="INDIA">INDIA</option>
          <option value="UK">UK</option>
          <option value="USA">USA</option>
          <option value="JAPAN">JAPAN</option>
        </select><br /><br />

        <label>
          <input 
            type="checkbox" 
            name="subscribe"
            checked={formdata.subscribe}
            onChange={onHandleChange}
          /> Subscribe 
        </label><br /><br />

        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default About;
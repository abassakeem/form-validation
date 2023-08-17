
import {Form,Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import FormInput from './components/FormInput'
import {useState } from 'react';

function App() {
  const [values,setValues] = useState({
    username:"",
    email: "",
    birthday:"",
    password:"",
    confirmPassword:"",
  })
  const inputs =  [
    {
    id:1,
    name:"username",
    type: "text",
    placeholder:"Username",
    //label:"username",
    errorMessage:"Username should be greater than 2 characters and should not include any special character",
    required:true,
    pattern: "^[A-Za-z0-9]{3,16}$"
  },
  {

    id:2,
    name:"email",
    type: "email",
    placeholder:"Email  address",
    //label:"Email"
    required:true,
    errorMessage:"Enter a valid email address"
  },
    {
    id:3,
    name:"Birthday",
    type: "date",
    placeholder:"Date of Birth",
    //label:"Date of Birth",
    errorMessage:"",
    required:true
  },
    {
    id:4,
    name:"password",
    type: "text",
    placeholder:"Password",
    //label:"Password",
    errorMessage:"Password should be 8-24 characters and must include at least 1 letter, 1 number and 1 special character",
    pattern:`^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,24}$`,
    required:true
  },
    {
    id:5,
    name:"confirmPassword",
    type: "text",
    placeholder:"Confirm Password",
   // label:"Confirm Password",
   
    errorMessage:"Passwords do not match",
    pattern: values.password,
    required:true
  }
]
  
 
  

  const handleSubmit= (e) => {
    e.preventDefault();
   
  }

 
const onChange = (e)=>{
 setValues({...values,[e.target.name]: e.target.value});
}; 

  return (
    <div className="app">
    <Form onSubmit={handleSubmit}>
      {inputs.map(input=>(
      <FormInput key={inputs.id} {...input} value={values[inputs.name]} onChange={onChange}/>))}
      
      
      <div className="button">
      <Button variant="primary"  className="submitButton" > 
         Submit
      </Button> 
      </div>
    </Form>
    </div>
  );
}

export default App;
 
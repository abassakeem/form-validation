import "../App.css"

import "./forminput.css"
import { Form} from "react-bootstrap";
import { useState } from "react";
const FormInput = (props) => {
  const [focused, setFocused] = useState(false);
  const {label,errorMessage, onChange, id, ...inputProps } = props;
  const handleFocus = (e) => {
    setFocused(true);
  }





    return ( 
      <div className="form-box container ">
        <Form className="form-box" action="https://google.com">
      <Form.Group className="zmb-3" controlId="formBasicUsername">
        
      <label>{label}</label>
       
        <Form.Control className="input-box" {...inputProps} onChange={onChange} onBlur={handleFocus} focused={focused.toString() } onFocus={() => inputProps.name==="confirmPassword" && setFocused(true)}/>
        <span><small>{errorMessage}</small></span>
      </Form.Group>
      
      
     
     
    
    </Form>
    </div>
     );
}
 
export default FormInput;
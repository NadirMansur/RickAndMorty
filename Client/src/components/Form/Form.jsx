import {useState} from 'react';
import {useNavigate} from "react-router-dom"

const validate = (userData  , setErrors ,errors)=>{
    if(!userData.username) setErrors({
        ...errors, email: "email vacio"
    }); else {
        if (/^[\w.%+-]{1,20}@[\w.-]+\.[a-zA-Z]{2,}$/.test(userData.username)) 
        setErrors({...errors, email: ""});
        else {setErrors({...errors, email: "mail no valido"});}
    }
    if(!userData.password) setErrors({
        ...errors, password: "password vacio"
    }); else {
        if (/^(?=.*\d)[a-zA-Z0-9]{6,10}$/.test(userData.password)) 
        setErrors({...errors, password: ""});
        else{setErrors({...errors, password: "password no valida"});}
    }
};

const Form = ()=>{

    const [access,setAccess]=useState(false);
    const EMAIL ="nadirmansur89@gmail.com";
    const PASSWORD ="Contraseña00";

    const [userData, setUserData] = useState({
        username:"",
        password:"",
    })
    
    const [errors, setErrors] = useState({
        email:"",
        password:"",
    })
    
    const navigate = useNavigate();

    const login = (userData) =>{
        if (userData.password === PASSWORD && userData.username === EMAIL) {
           navigate('/home');
        }
     }

    const handleChange = (event)=>{
        console.log("e = ", event);
        console.log("e.target.name = ", event.target.name);
        console.log("e.target.value = ", event.target.value);
        const property = event.target.name;
        const value = event.target.value;
        setUserData({...userData, [property]: value}); //esperar par usar el estado o enviar la misma informarcion a actualizar a validar
        console.log(userData);
        validate({...userData, [property]: value},setErrors,errors);
    };

    const submitHandler = (event)=>{
        event.preventDefault();
        login(userData);
    };


    return(
        <form onSubmit={submitHandler}>
            <div>
                <label htmlFor="username">username: </label>
                <input type="text" name="username" value={userData.email} placeholder="coloca tu Email" onChange={handleChange}></input>
                <span>{errors.email}</span>
            </div>
            <div>
                <label htmlFor="password">password: </label>
                <input type="password" name="password" value={userData.password} placeholder="password" onChange={handleChange}></input>
                <span>{errors.password}</span>
            </div>
            <div>
                <button type="submit">Login</button>
            </div>
        </form>
    )
};

export default Form;
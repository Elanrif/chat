import React,{useState,useEffect,useContext} from 'react'
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { Navigate,useNavigate,Link } from 'react-router-dom';
import axios from "axios"
import { UsersContext } from '../../ListPersonContext';

function Login() {

   const {setAuth} = useContext(UsersContext)

   const [ user, setUser] = useState({
    email : '',
    password : '',
   })
   const navigate = useNavigate();


  const handleChange = (e) => {

    console.log(e.target.name , e.target.value)
  const { name, value } = e.target;

    setUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

 const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleSubmit = (e)=>{
     e.preventDefault();
      console.log("handle")
    axios
      .post("http://localhost:8080/persons/login", user)
      .then((res) => {
      
        setAuth(res.data)
        sessionStorage.setItem("auth", JSON.stringify(res.data));

        navigate("/chat");
      })
      .catch((err) => {
        console.log(err);
        setUser({
          email: "",
          password: "",
        });
      });
  }

     const submit =
    user.email === "" || user.password === "" ? (
      <button
        className="ring-2 bg-black opacity-75 text-white ring-white font-semibold
        hover:text-slate-50 hover:cursor-not-allowed hover:opacity-100 px-4 text-md focus:ring-offset-emerald-50 py-2  rounded-xl"
        disabled
      >
        Se connecter
      </button>
    ) : (
      <button
        className="ring-2 bg-blue-500 opacity-75 text-white ring-white font-semibold
        hover:text-slate-50 hover:opacity-100 px-4 text-md focus:ring-offset-emerald-50 py-2  rounded-xl"
      >
        Se connecter
      </button>
    )

  return (
    <div>
      <div className="bg-slate-100 h-[100vh] items-center flex justify-center">
        <form onSubmit={handleSubmit}>
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "45ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="outlined-basic-1"
              fullWidth
              type="email"
              label="email"
              variant="outlined"
              className="block"
              name="email"
              value={user.email}
              onChange={handleChange}
              required
            />

            <FormControl
              sx={{ m: 1, width: "25ch" }}
              variant="outlined"
              className="mt-12"
            >
              <InputLabel htmlFor="outlined-adornment-password">
                Mot de passe
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                name="password"
                value={user.password}
                type={showPassword ? "text" : "password"}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Mot de passe"
                className="mb-3"
                onChange={handleChange}
              />
            </FormControl>
          </Box>
          <div className='flex justify-center'>
             {submit}
          </div>
              <Link to="/register" className='hover:cursor-pointer text-blue-600 flex justify-center  mt-5'> voulez-vous créer un compte ?</Link>
        </form>
      </div>
    </div>
  )
}

export default Login
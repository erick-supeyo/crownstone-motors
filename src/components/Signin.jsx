import axios from "axios"


import React, {useState} from "react"
import{Link ,useNavigate}from "react-router-dom"

const Signin=()=>{
    let navigate = useNavigate();
    // declare the two states here 
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")

    // 3 states for posting data 
    const [loading,setLoading]=useState("")
    const [success,setSuccess]=useState("")
    const [error,setError]=useState("") 

    // function to handle submit 
    const handlesubmit = async (e) =>{
        e.preventDefault()
        setLoading("please wait...")
        // create empty enevelope to store user inputs
        const formdata =new FormData()
        // append/add
        formdata.append("email",email)
        formdata.append("password",password)
        try{
            const response = await axios.post("http://higgs.alwaysdata.net/api/signin",formdata)
            setSuccess(response.data.message)
            // if login/signin is successful we save user to local storage 
            // NB: redirect user to homepage(Getproducts)

            if(response.data.user){
                // login success
                localStorage.setItem("user",JSON.stringify(response.data.user)) 

                // redirect user to homepage
                navigate("/")
            }else {
                // login failed 
            }
            setLoading("")
        }catch(error){
            setError(error.message)
            setLoading("")

        }

    }
    return(
        <div className="row mt-4 justify-content-center">
            <div className="col-md-6 card shadow p-4">
            <h1>Signin👨‍💼</h1>
            {/* bind the states  */}
              <h2 className="text-secondary"> {loading} </h2>
                <h2 className="text-success"> {success} </h2>
                <h2 className="text-danger"> {error} </h2>
            <form action="" onSubmit={handlesubmit}>
                <input type="email" className="form-control" placeholder="Email" onChange={(e)=>setEmail(e.target.value)} /><br />
                <input type="Password" className="form-control" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/><br />
                <button type="submit" className="btn btn-dark col-md-12">Signin</button><br /><br />
                <p>Don't have an account?<Link to= "/signup">Signup</Link> </p>
            </form>

            </div>
        </div>


    )
}
export default Signin
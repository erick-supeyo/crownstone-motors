import axios from "axios"
import React from "react"
import { useState } from "react"
import { useLocation } from "react-router-dom"
const Mpesapayment=()=>{
    const {singleproduct} = useLocation().state || {}
        const imagepath = "http://erickhiggs.alwaysdata.net/static/images/"
         // declare states here
            const [loading, setLoading] = useState("")
            const [success, setSuccess] = useState("")
            const [error, setError] = useState("")
            const [phone,setPhone]= useState("")
            // function to make payment 
            const handlesubmit = async(e)=>{
                e.preventDefault()
                setLoading("Please waiting...")
                // create empty enveleope to store user inputs
                const formdata=new FormData()
                // append /add
                formdata.append("amount",singleproduct.product_cost)
                formdata.append("phone",phone)
                try{
                    const response = await axios.post("http://higgs.alwaysdata.net/api/mpesa_payment",formdata)
                    setSuccess(response.data.message)
                    setLoading("")
                }catch(error){
                    setError("Something went wrong")
                    setLoading("")

                }
                }
            
                
                return(
                    <div className="row justify-content-center">
            <h1 className="text-success text-center">Make payment-Lipa na Mpesa</h1>
            <div className="col-md-8 card shadow p-4">
                <img src= {imagepath + singleproduct.product_photo}alt="" style={{height:"400px",objectFit:"cover"}} />
                
                <div className="card-body">
                    <h1 className="text-primary">{singleproduct.product_name}</h1>
                    <p> {singleproduct.product_description} </p>
                    <b className="text-warning btn btn-danger"> {singleproduct.product_cost} </b>
                    {/* bind the states  */}
                   <h2 className="text-secondary"> {loading} </h2>
                <h2 className="text-success"> {success} </h2>
                <h2 className="text-danger"> {error} </h2>
                    <form action="" onClick={handlesubmit}>
                        <input type="number" className="form-control"placeholder="Enter phone 254xxxxxx" onChange={(e)=>setPhone(e.target.value)}/><br />
                        <button type="submit" className="btn btn-success w-100">make payment</button>
                    </form>
                </div>
            </div>
        </div>
        
    )
}

export default Mpesapayment
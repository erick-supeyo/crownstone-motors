import axios from "axios"

import React,{useState,useEffect} from "react"
import { useNavigate } from "react-router-dom"
import Carousel from "./Carousel";
const Getproduct=()=>{
    let navigate = useNavigate();
    // declare our states here
    const [loading,setLoading]=useState("")
    const [products,setProducts]=useState([])
    const [error,setError]=useState("")

    // function to get product 
    const Getproduct=async()=>{
        setLoading("please wait...")
        try{
            const response = await axios.get("http://erickhiggs.alwaysdata.net/api/getproducts")
            setProducts(response.data)
            setLoading("")
        }catch(error){

            
        }

        }
        // call the function
        useEffect(()=>{
            Getproduct()
        },[])
        console.log(products)
        const imagepath = "http://erickhiggs.alwaysdata.net/static/images/"
        return(
           <div className="row">

            {/* carousel goes here */}
            <Carousel />
            <h1 className="text-success text-center">💰Available products💰</h1>
            {/* bind the states  */}
            <h2 className="text-info"> {loading} </h2>
            <h2 className="text-danger">{error} </h2>
            {/* map here  */}
            {products.map(singleproduct=>(

                <div className="col-md-3  mb-4">
                    <div className="card shadow h-100">


                {/* image goes here  */}
                <img src= {imagepath + singleproduct.product_photo}alt="" style={{height:"200px",objectFit:"cover"}} />
                <div className="card-body">
                    <h2 className="text-dark btn btn-info">{singleproduct.product_name}</h2>
                    <p> {singleproduct.product_description} </p>
                    <b className="text-warning">Ksh {singleproduct.product_cost} </b><br />
                    <button className="btn btn-danger w-100" onClick={()=>navigate("/makepayment",{state:{singleproduct}})} >purchase now</button>
                </div>
                    </div>

            </div>
            ))}
           </div>
    )
}

export default Getproduct

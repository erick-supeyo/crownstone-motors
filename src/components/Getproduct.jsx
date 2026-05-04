
import axios from "axios"

import React, { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import Carousel from "./Carousel";
import Footer from "./Footer";
const Getproduct = () => {
    let navigate = useNavigate();
    // declare our states here
    const [loading, setLoading] = useState("")
    const [products, setProducts] = useState([])
    const [error, setError] = useState("")
    // define the state 
    const[search,setSearch]=useState("")
    const[visiblecount,setVisibleCount]=useState(8)
    // filter logics goes here 
    const filtered_products = products.filter((item)=>
         item.product_name.toLowerCase().includes(search.toLowerCase()) ||
    item.product_description.toLowerCase().includes(search.toLowerCase())
  );

    

    // function to get product 
    const getproduct = async () => {
        setLoading("please wait...")
        try {
            const response = await axios.get("https://erickhiggs.alwaysdata.net/api/getproducts")
            setProducts(response.data)
            setLoading("")
        } catch (error) {
            setError(error.message)
            setLoading("")


        }

    }
    // call the function
    useEffect(() => {
        getproduct()
    }, [])
    console.log(products)
    const imagepath = "https://erickhiggs.alwaysdata.net/static/images/"
    return (
        <div className="row">
            {/* carousel goes here */}
            <Carousel />

            {/* search bar goes here  */}
            <div className="row justify-content-center mt-3 mb-3">
                <input 
                className="form-control w-50"
                type="search"
                placeholder="search product..."
                value={search}
                onChange={(e)=>setSearch(e.target.value)} 
                
                />
            </div>
            
            {/* {Bind Error message} */}
            {loading && <p>{loading}</p> }
            {error && <p className="text-danger">{error}</p>}


            
            <h1 className="text-success text-center">💰Available products💰</h1>
            {/* bind the states  */}
            <h2 className="text-info"> {loading} </h2>
            <h2 className="text-danger">{error} </h2>
            {/* map here  */}

            {filtered_products.slice(0,visiblecount).map(singleproduct => (

                <div className="col-md-3  mb-4">
                    <div className="card shadow h-100">


                        {/* image goes here  */}
                        <img src={imagepath + singleproduct.product_photo} alt="" style={{ height: "200px", objectFit: "cover" }} />
                        <div className="card-body">
                            <h2 className="text-dark btn btn-info">{singleproduct.product_name}</h2>
                            <p> {singleproduct.product_description} </p>
                            <b className="text-warning">Ksh {singleproduct.product_cost} </b><br />
                            <button className="btn btn-danger w-100" onClick={() => navigate("/makepayment", { state: { singleproduct } })} >purchase now</button>
                        </div>
                    </div>

                </div>
            ))}
            <div className="text-center ,mt-5"></div>
            {visiblecount<filtered_products.length && (
            <button
            className="btn btn-primary"
            onClick={()=> setVisibleCount(visiblecount+8)}
            >
                Load More
            </button>

            )}
            <Footer />
        </div>
    )
}

export default Getproduct

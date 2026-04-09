import axios from "axios"
import React, { useState } from "react"
const Addproduct = () => {
    // declare states here 
    const [product_name, setProductName] = useState("")
    const [product_description, setProductDescription] = useState("")
    const [product_cost, setProductCost] = useState("")
    const [product_photo, setProductPhoto] = useState("")

    // define 3 states for posting data 
    const [loading, setLoading] = useState("")
    const [success, setSuccess] = useState("")
    const [error, setError] = useState("")

    // function to handle submit 
    const handlesubmit = async (e) => {
        e.preventDefault()
        setLoading("please wait...")
        // create empty envelope to store user inputs
        const formdata = new FormData()
        // append /add
        formdata.append("product_name", product_name)
        formdata.append("product_description", product_description)
        formdata.append("product_cost", product_cost)
        formdata.append("product_photo", product_photo)

        try {
            const response = await axios.post("https://erickhiggs.alwaysdata.net/api/addproduct", formdata)
            setSuccess(response.data.message)
            setLoading("")
        } catch (error) {
            setError(error.message)
            setLoading("")

        }
    }


    return (
        <div className="row mt-4 justify-content-center">
            <div className="col-md-8 card shadow p-4">
                <h1>Addproduct🚘</h1>
                {/* bind the states  */}
                <h2 className="text-secondary"> {loading} </h2>
                <h2 className="text-success"> {success} </h2>
                <h2 className="text-danger"> {error} </h2>

                <form action="" onSubmit={handlesubmit}>
                    <input type="text" className="form-control" placeholder="Enter product name" onChange={(e) => setProductName(e.target.value)} /><br />
                    <textarea type="text" className="form-control" placeholder="Enter product description" onChange={(e) => setProductDescription(e.target.value)} ></textarea><br />
                    <input type="number" className="form-control" placeholder="Enter product cost" onChange={(e) => setProductCost(e.target.value)} /><br />
                    <input type="file" accept="/image*" className="form-control" onChange={(e) => setProductPhoto(e.target.files[0])} /><br />
                    <button type="submit" className="btn btn-dark col-md-12">Add Product</button><br /><br />

                </form>

            </div>
        </div>


    )
}

export default Addproduct
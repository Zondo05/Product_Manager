import React, { useState, useEffect } from 'react'
import {  Link  } from '@reach/router';
import NewProduct from '../views/NewProduct';
import axios from 'axios';


const AllProducts = ()=> {
    const [allProducts, setAllProducts] = useState([]);

    // const [product, setProduct] = useState({
    //     title: '',
    //     price: '',
    //     description: '',
    // });

    //     useEffect(() => {
    //     axios.get(`http://localhost:8000/api/product/${props.id}`)
    //         .then(response => {
    //             setProduct(response.data);
    //         })
    //         .catch(err => console.log(err));
    // }, [props.id])


    useEffect(() => {
        axios.get('http://localhost:8000/api/products')
            .then(response => {
                console.log(response.data);
                setAllProducts(response.data);
            })
            .catch(err => console.log(err));
    }, [])

    return (
    <div className="col-sm-12"  style={{ overflow: 'auto ' }} >
        <div>
        <h2>Product Manager</h2>

        <NewProduct />
        </div>

        <h1>All Products</h1>
        {
            allProducts.map((product, i) => {

                return(
                    <div className="row" key={ i }>
                        <div className="offset-sm-4 col-sm-4">
                            <Link to = { "/product/" + product._id + "/details" }><h4>{product.title}</h4></Link >
                        </div>
                </div>

                )
            })
        }
    </div>
)
}

export default AllProducts

import React, { useState, useEffect } from 'react'
import ProductForm from '../components/ProductForm';
import axios from 'axios';
import { navigate, Link } from '@reach/router';

const EditProduct = props=> {
    const [product, setProduct] = useState({
        title: '',
        price: '',
        description: ''
    });

    const [errors, setErrors] = useState({});

    useEffect( () => {
        axios.get(`http://localhost:8000/api/product/${props.id}`)
            .then(response => {
                if(response.data == null) {
                    navigate('/');
                }
                setProduct(response.data);
            })
            .catch(err => console.log(err));
    }, [props.id])


    const submitHandler = e => {
        e.preventDefault();
        axios.patch(`http://localhost:8000/api/product/update/${props.id}`, product)
            .then(response => {
                if(response.data.errors) {
                    setErrors(response.data.errors);
                }
                else {
                    navigate('/');
                }
        })
        .catch(err => console.log(err))
    }

    const changeHandler = e => {
        setProduct({
            ...product,
            [e.target.name]: e.target.value
        });
    }

    return (
        <div>
            <Link to="/">Back to home</Link>
            <h2>Edit {product.title}</h2>

            <form onSubmit ={ submitHandler }>
            <ProductForm product={ product } changeHandler={ changeHandler } errors={ errors } action="edit" />
            </form>
        </div>
    )
}

export default EditProduct

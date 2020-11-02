import React, { useState } from 'react'
import ProductForm from '../components/ProductForm';
import axios from 'axios';
import { navigate } from '@reach/router';

const NewProduct = () => {
    const [ product, setProduct] = useState({
        title: '',
        price: '',
        description:''
    });

    const [errors, setErrors] = useState({});

    const submitHandler = e => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/product/new' , product)
            .then(response => {
                if(response.data.errors) {
                    console.log(response.data.errors);
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
            <form onSubmit ={ submitHandler }>
                <ProductForm product={ product } changeHandler={ changeHandler } errors={ errors } action="create" />
            </form>
        </div>
    )
}

export default NewProduct

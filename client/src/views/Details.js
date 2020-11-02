import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { navigate, Link} from '@reach/router';


const Details = props => {
    const [product, setProduct] = useState({
        title: '',
        price: '',
        description: '',
    });

        useEffect(() => {
        axios.get(`http://localhost:8000/api/product/${props.id}`)
            .then(response => {
                console.log(response.data);
                setProduct(response.data);
            })
            .catch(err => console.log(err));
    }, [props.id])

    const deleteHandler = () => {
        axios.delete(`http://localhost:8000/api/product/delete/${props.id}`)
            .then(response => navigate('/'))
            .catch(err => console.log(err));
    }

    return (
        <div>
            <Link to="/">Back to home</Link>

                <div>
                    <p>Title: {product.title}</p>
                    <p>Price: {product.price}</p>
                    <p>Description: {product.description}</p>
                </div>
                <button className="col-sm-6 btn btn-secondary" onClick={ () => navigate(`/product/${props.id}/edit`)} >Edit</button>
                <button type="submit" onClick={ deleteHandler } className="col-sm-6  btn btn-danger">Delete</button>

            </div>
    )
}

export default Details

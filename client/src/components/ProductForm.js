import React from 'react'

const ProductForm = props => {
    const { product,  action, errors, changeHandler} = props;

    return (
        < >
            <div className="form-group row">
                {
                    errors.title ?
                    <span className="offset-sm-4 col-sm-8  text-danger">{ errors.title.message }</span>
                    :
                    ' '
                }
                <label htmlFor="title">Title: </label>
                <input className="form-control"  type="text" name="title" onChange={ changeHandler } value= { product.title }/>
            </div>

            <div className="form-group row" >
                {
                    errors.price ?
                    <span className="offset-sm-4 col-sm-8  text-danger">{ errors.price.message }</span>
                    :
                    ' '
                }
                <label htmlFor="price">Price: </label>
                <input className="form-control"  type="text" name="price" onChange={ changeHandler } value={ product.price} />
            </div>

            <div className="form-group row">
                {
                    errors.description ?
                    <span className="offset-sm-4 col-sm-8  text-danger">{ errors.description.message }</span>
                    :
                    ' '
                }
                <label htmlFor="description">Description</label><br/>
                <input className="form-control"  type="text" name="description" onChange={ changeHandler } value={ product.description}/>
            </div>

            <div className="form-group row">
                {
                    action === "edit" ?
                    <>
                        <button type="submit" className="col-sm-5 btn btn-primary">Update</button>
                    </>
                    :
                    <>
                        <button type="submit" className="btn btn-secondary btn-lg" >Create</button>
                    </>
                }
            </div>
            <hr/>
    </>
    )
}

export default ProductForm
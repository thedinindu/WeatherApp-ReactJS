 import React from 'react'
 import "./form.style.css"

const Form = props => {
    return (
        <div className="container">
            <div>{props.error ? error(): null}</div>
            <h1 className="mt-5">Weather App</h1>
            <form onSubmit={props.loadweather}>
                <div className="row">
                    <div className="col-md-3 offset-md-2 py-2">
                        <input type="text" className="form-control" name="city" placeholder="City" autoComplete="off" style={{color: 'white'}} />
                    </div>

                    <div className="col-md-3 py-2">
                        <input type="text" className="form-control" name="country" placeholder="Country" autoComplete="off" style={{color: 'white'}} />
                    </div>

                    <div className="col-md-3 mt-md-0 text-md-left py-2">
                        <button className="btn btn-success" style={{borderRadius: 0}}>Get Weather</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

function error() {
    return(
        <div className="alert alert-danger mx-5" role="alert">
            Please Enter City and Country
        </div>
    )
}

 export default Form 
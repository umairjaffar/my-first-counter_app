import React, { useState } from "react";
import '../Components/counter.css'

const Counter = () => {
    const [count, setCount] = useState(0)

    return (
        <>
            <div className="container-fluid counter_container bg-light">
                <div className="row">
                    <div className="col-12 d-flex justify-content-center mt-5">
                        <div className="card col-6 col-sm-4 text-center mt-5 shadow-lg">
                            <div className="card-body">
                                <h5 className="card-title mt-5 display-6 text-success">My First Counter App</h5>
                                <h3 className="card-text mt-5 text-primary">{count}</h3>
                                <div className="counter_button d-flex justify-content-center mt-3">
                                    <button className="btn btn-primary me-3" onClick={() => setCount(pre => pre > 0? pre - 1 : pre)}>-</ button>
                                    <button className="btn btn-primary ms-4" onClick={() => setCount(count + 1)}>+</ button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Counter;
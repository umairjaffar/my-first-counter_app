import React, { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0)

    return (
        <>
            <div className="container-fluid bg-primary">
                <div className="row">
                    <div className="col-12">
                        <h1 className="text-success">Hello bootstrap!</h1>
                        {/* bootstrap card */}
                        <div className="card col-6 col-sm-4 text-center">
                            <div className="card-body">
                                <h5 className="card-title">My First Counter App</h5>
                                <h3 className="card-text">{count}</h3>
                                <div className="counter_button d-flex justify-content-center">
                                <button className="btn btn-primary me-1" onClick={() => setCount(count - 1)}>-</ button>
                                <button className="btn btn-primary ms-1" onClick={() => setCount(count + 1)}>+</ button>
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
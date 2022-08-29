import React from 'react'
import { useDispatch } from 'react-redux/es/exports';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../state/index'

function Shoes() {
    const dispatch = useDispatch();

    const { buy, sell } = bindActionCreators(actionCreators, dispatch)
    return (
        <>
            <div className="row d-flex justify-content-around my-3">
                <h2 className='text-center my-3'>Shoes</h2>
                <div className="card rounded shadow my-3" style={{ width: "18rem" }}>
                    <img src="https://www.patterns.dev/img/reactjs/react-logo@3x.svg" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Trade 'Adidas Authentic Shoes'</h5>
                        <p className="card-text">Buy brand new Adidas Shoes <b>@111$</b> only</p>
                        <p className="card-text">Sell your old Adidas Shoes <b>@49$</b> </p>
                        <div className="d-flex justify-content-between">
                            <button className="btn btn-danger rounded shadow" onClick={() => { buy(111) }}>Buy</button>
                            <button className="btn btn-info rounded shadow" onClick={() => { sell(49) }}>Sell</button>
                        </div>
                    </div>
                </div>

                <div className="card rounded shadow my-3" style={{ width: "18rem" }}>
                    <img src="https://www.patterns.dev/img/reactjs/react-logo@3x.svg" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Trade 'Adidas Classic Shoes'</h5>
                        <p className="card-text">Buy brand new Adidas Shoes <b>@99$</b> only</p>
                        <p className="card-text">Sell your old Adidas Shoes <b>@33$</b> </p>
                        <div className="d-flex justify-content-between">
                            <button className="btn btn-success rounded shadow" onClick={() => { buy(99) }}>Buy</button>
                            <button className="btn btn-dark rounded shadow" onClick={() => { sell(33) }}>Sell</button>
                        </div>
                    </div>
                </div>

                <div className="card rounded shadow my-3" style={{ width: "18rem" }}>
                    <img src="https://www.patterns.dev/img/reactjs/react-logo@3x.svg" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Trade 'Adidas Causal Shoes'</h5>
                        <p className="card-text">Buy brand new Adidas Shoes <b>@69$</b> only</p>
                        <p className="card-text">Sell your old Adidas Shoes <b>@25$</b> </p>
                        <div className="d-flex justify-content-between">
                            <button className="btn btn-warning rounded shadow" onClick={() => { buy(69) }}>Buy</button>
                            <button className="btn btn-primary rounded shadow" onClick={() => { sell(25) }}>Sell</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Shoes
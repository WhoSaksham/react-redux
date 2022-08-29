import React from 'react'
import { useDispatch } from 'react-redux/es/exports';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../state/index'

function Clothes() {
    const dispatch = useDispatch();
    const { buy, sell } = bindActionCreators(actionCreators, dispatch)

    return (
        <>
            <div className="row d-flex justify-content-around">
                <h2 className='text-center my-3'>Clothes</h2>
                <div className="card rounded shadow my-3" style={{ width: "18rem" }}>
                    <img src="https://www.patterns.dev/img/reactjs/react-logo@3x.svg" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Trade 'Zara's Authentic Shirt'</h5>
                        <p className="card-text">Buy brand new Zara Shirt <b>@999$</b> only</p>
                        <p className="card-text">Sell your old Zara Shirt <b>@333$</b> </p>
                        <div className="d-flex justify-content-between">
                            <button className="btn btn-primary rounded shadow" onClick={() => { buy(999) }}>Buy</button>
                            <button className="btn btn-warning rounded shadow" onClick={() => { sell(333) }}>Sell</button>
                        </div>
                    </div>
                </div>

                <div className="card rounded shadow my-3" style={{ width: "18rem" }}>
                    <img src="https://www.patterns.dev/img/reactjs/react-logo@3x.svg" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Trade 'Zara's Classic Shirt'</h5>
                        <p className="card-text">Buy brand new Zara Shirt <b>@899$</b> only</p>
                        <p className="card-text">Sell your old Zara Shirt <b>@300$</b> </p>
                        <div className="d-flex justify-content-between">
                            <button className="btn btn-dark rounded shadow" onClick={() => { buy(899) }}>Buy</button>
                            <button className="btn btn-success rounded shadow" onClick={() => { sell(300) }}>Sell</button>
                        </div>
                    </div>
                </div>

                <div className="card rounded shadow my-3" style={{ width: "18rem" }}>
                    <img src="https://www.patterns.dev/img/reactjs/react-logo@3x.svg" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Trade 'Zara's Casual Shirt'</h5>
                        <p className="card-text">Buy brand new Zara Shirt <b>@777$</b> only</p>
                        <p className="card-text">Sell your old Zara Shirt <b>@249$</b> </p>
                        <div className="d-flex justify-content-between">
                            <button className="btn btn-info rounded shadow" onClick={() => { buy(777) }}>Buy</button>
                            <button className="btn btn-danger rounded shadow" onClick={() => { sell(249) }}>Sell</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Clothes
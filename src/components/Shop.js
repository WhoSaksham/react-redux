import React from 'react'
import Clothes from './Clothes'
import Shoes from './Shoes'

function Shop() {
    return (
        <>
            <div className="container">
                <h1 className='text-center my-3'>Welcome to the React Shop 👋</h1>
                <h3 className='text-center my-3'>What would you like to trade today? 😄</h3>
                <Clothes />
                <Shoes />
            </div>
        </>
    )
}

export default Shop
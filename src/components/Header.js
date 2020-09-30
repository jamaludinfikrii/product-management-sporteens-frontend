import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Header extends Component {
    render() {
        return (
            <div className='text-center mb-4'>
                <Link to='/'>
                    <span className='mr-4 font-weight-bold'>Show Products</span>
                </Link>
                <Link to='/add-product'>
                    <span className='font-weight-bold'>Add Products</span>
                </Link>
            </div>
        )
    }
}

export default Header

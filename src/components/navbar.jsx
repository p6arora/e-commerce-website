import React from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'
import { ShoppingCart } from 'phosphor-react'

export const NavBar = () => {
    return (
        <div className='navbar'>
            <div className='links'>
                <Link to='/'>Shop</Link>
                <Link to='/cart'>
                    <ShoppingCart size={32}></ShoppingCart>
                </Link>
            </div>
        </div>
    )
}


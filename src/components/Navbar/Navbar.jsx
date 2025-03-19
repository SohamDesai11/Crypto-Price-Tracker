import React, { useContext } from 'react'
import './Navbar.css'
import { CoinContext } from '../../context/CoinContext'
import { Link } from 'react-router'
import logo from '../../assets/logo.png'

const Navbar = () => {

    const {setCurrency} = useContext(CoinContext)

    const currencyHandler = (event) => {
        switch (event.target.value){
            case "usd": {
                setCurrency({name: "usd", symbol: "$"})
                break;
            }
            case "cad": {
                setCurrency({name: "cad", symbol: "C$"})
                break;
            }
            case "gbp": {
                setCurrency({name: "gbp", symbol: "£"})
                break;
            }
            default: {
                setCurrency({name: "usd", symbol: "$"})
                break;
            }
        }
    }


    return(
        <div className='navbar'>
            <Link to={'/'}>
                <img src={logo} alt="Logo" className="logo" />
            </Link>
        <div className='nav-right'>
            <select onChange={currencyHandler}>
                <option value="usd">USD</option>
                <option value="cad">CAD</option>
                <option value="gbp">GBP</option>
            </select>
        </div>
        
        </div>
    )

}

export default Navbar
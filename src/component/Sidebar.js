import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css';
import logo from '../screen/sCaptiallogo.png'

const Sidebar = () => {
    return (
        <>
            <div className='side'>
                <img src={logo} />
                <ul>
                    <li style={{listStyleType:"none"}}><Link style={{color:"black", textDecoration:"none"}} to={'/'}><i class="fa-solid fa-house"></i>&nbsp;&nbsp;Home</Link></li>
                    <li style={{listStyleType:"none"}}><Link style={{color:"black", textDecoration:"none"}} to={'/portfolio'}><i class="fa-solid fa-briefcase"></i>&nbsp;&nbsp;Portfolios</Link></li>
                    <li style={{listStyleType:"none"}}><Link style={{color:"black", textDecoration:"none"}} to={'/'}><i class="fa-solid fa-flask"></i>&nbsp;&nbsp;Experimentals</Link></li>
                    <li style={{listStyleType:"none"}}><Link style={{color:"black", textDecoration:"none"}} to={'/'}><i class="fa-solid fa-folder"></i>&nbsp;&nbsp;Slack Archives</Link></li>
                    <li style={{listStyleType:"none"}}><Link style={{color:"black", textDecoration:"none"}} to={'/'}><i class="fa-solid fa-user-plus"></i>&nbsp;&nbsp;Refer a friend</Link></li>
                    <li style={{listStyleType:"none"}}><Link style={{color:"black", textDecoration:"none"}} to={'/'}><i class="fa-solid fa-gift"></i>&nbsp;&nbsp;Gift a subscription</Link></li>
                    <li style={{listStyleType:"none"}}><Link style={{color:"black", textDecoration:"none"}} to={'/'}><i class="fa-solid fa-user"></i>&nbsp;&nbsp;Account</Link></li>
                </ul>
            </div>
        </>
    )
}

export default Sidebar
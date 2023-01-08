import React from 'react';

const Navbar = ({filtering}) => {
    return (
        <div>
            <nav className='navbar' >
                <button className='button' onClick={()=>filtering("All")} >all</button>
                <button className='button' onClick={()=>filtering("html")} >HTML</button>
                <button className='button' onClick={()=>filtering("css")} >CSS</button>
                <button className='button' onClick={()=>filtering("javascript")} >javaScript</button>
            </nav> 
        </div>
    );
};

export default Navbar;
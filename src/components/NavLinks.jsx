import React from 'react'

const NavLinks = () => {
    const links = [
        {name: "Resource"},
        {name: "Services"},
        {name: "Library Branches"},
        {name: "About"},
    ];
  return <>

  {
    links.map(link =>(
        <div>
            <div>
                <h1>
                    {link.name}
                </h1>
            </div>
        </div>
    ))
  }
  
  </>
}

export default NavLinks
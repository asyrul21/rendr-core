import React from "react"
import { Link } from "gatsby"

// import style
import "./navItems.scss"

const navItems = ({ items }) => {
  return (
    <div className="navItemsContainer">
      {items.map((item, idx) => {
        return (
          <Link
            key={idx}
            to={item.link}
            className="navItem"
            activeClassName="activeNavItem"
          >
            {item.text}
          </Link>
        )
      })}
    </div>
  )
}

export default navItems

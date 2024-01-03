import React from 'react'
import Link from 'next/link';

import Style from './Sidebar.module.css'

const Sidebar = () => {
  const menu = [
    {
        name: "Home",
        link: "./"
    },
    {
        name: "Energiedelen",
        link: "energiedelen"
    },
    {
        name: "Quick scan",
        link: "quick-scan"
    },
    {
        name: "Over ons",
        link: "over-ons"
    },
    {
        name: "Start delen",
        link: "start-delen"
    }
  ]
  return (
    <div className={Style.sidebar}>
        {menu.map((el,i) => (
        <div key={i+1} className={Style.sidebar_box}>
          <Link href={{pathname: `${el.link}`}}>
            {el.name}
          </Link>
        </div>
      ))}
    </div>
  )
}

export default Sidebar
import React, {useState} from 'react'
import Image from 'next/image'
import Link from 'next/link';
import { useRouter } from 'next/router';
import {CgMenuRight} from 'react-icons/cg';



import Style from './NavBar.module.css'
import images from '../../img'
import { Button } from '../componentsindex'
import Sidebar from './Sidebar/Sidebar';

const NavBar = () => {
    const [openSideMenu, setOpenSideMenu] = useState(false);


    const router = useRouter();


    const openSideBar = () => {
        if(!openSideMenu){
          setOpenSideMenu(true)
        } else{
          setOpenSideMenu(false);
        }
      }
  return (
    <div className={Style.navbar}>
        <div className={Style.navbar_container}>
            <div className={Style.navbar_container_left}>
                <div className={Style.logo}>
                    <Image src={images.voltex} alt="logo voltex" width={200} height={140} onClick={() => router.push("/")}/>
                </div>
            </div>

            <div className={Style.navbar_container_right}>
                <div className={Style.navbar_container_right_about}>
                    <Link href={{pathname:`./`}}>
                        Home
                    </Link>
                </div>
                <div className={Style.navbar_container_right_about}>
                    <Link href={{pathname:`energiedelen`}}>
                        Energiedelen
                    </Link>
                </div>
                <div className={Style.navbar_container_right_about}>
                    <Link href={{pathname:`quick-scan`}}>
                        Quick Scan
                    </Link>
                </div>
                <div className={Style.navbar_container_right_about}>
                    <Link href={{pathname:`over-ons`}}>
                        Over ons
                    </Link>
                </div>
                <div className={Style.navbar_container_right_button}>
                    <Button btnName="Start met energiedelen" handleClick={() => router.push("/start-delen")}/>
                </div>

                <div className={Style.navbar_container_right_menuBtn}>
                    <CgMenuRight className={Style.menuIcon} onClick={() => openSideBar()}/>
                </div>
            </div>
        </div>

        {
        openSideMenu && (
          <div className={Style.sideBar}>
            <Sidebar/>
          </div>
        )
      }
    </div>
  )
}

export default NavBar
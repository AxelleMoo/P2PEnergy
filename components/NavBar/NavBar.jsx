import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
import { useRouter } from 'next/router';


import Style from './NavBar.module.css'
import images from '../../img'
import { Button } from '../componentsindex'

const NavBar = () => {
    const router = useRouter();
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
            </div>
        </div>
    </div>
  )
}

export default NavBar
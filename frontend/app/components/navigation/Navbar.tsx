import React from 'react'
import { FiShoppingCart } from 'react-icons/fi';
import { LuSearch } from 'react-icons/lu';
import Link from 'next/link'
import Image from 'next/image'
import Sidebar from './Sidebar';
import { navbarData } from '@/app/utils/constants';
import Button from '../elements/Button';
import Hamburger from '../elements/Hamburger';

const Navbar = () => {

    type navbarItem = {
        title: string,
        path: string,
    }

    return (
        <>
            <nav className='flex backdrop-blur-2xl bg-transparent items-center justify-center pl-4 pr-2 py-2 lg:px-12'>
                <ul className='left hidden lg:w-1/3 lg:flex items-center justify-start space-x-4'>
                    {navbarData.map((item: navbarItem, index: number) => {
                        return (
                            <li key={index}>
                                <Link href={item.path}>
                                    {item.title}
                                </Link>
                            </li>
                        )
                    }
                    )}
                </ul>

                <ul className='center w-1/4 lg:w-1/3 flex justify-center items-center'>
                    <li>
                        <Link href='/'>
                            <Image className='' src='/images/logo.png' height={200} width={200} alt='logo' />
                        </Link>
                    </li>
                </ul>

                <ul className='right w-3/4 lg:w-1/3 flex items-center justify-end md:space-x-2'>
                    <li className='mr-2'>
                        <Button text='Sign In' />
                    </li>
                    <li className='text-2xl mr-2'>
                        <LuSearch />
                    </li>
                    <li className='mr-1'>
                        <Link href='/cart' className='text-2xl'>
                            <FiShoppingCart />
                        </Link>
                    </li>
                    <li className=''>
                        <Hamburger />
                    </li>
                </ul>
            </nav>
            <Sidebar />
        </>
    )
}

export default Navbar

"use client";

import Link from 'next/link'
import Image from 'next/image'
import { NavLinks } from '@/constants';
import AuthProviders from './AuthProviders';

/**
 * 
 * @returns navbar component 
 * from svg format icon on the server.
 */


const Navbar = () => {
  
  const session = null;

  return (
    <nav className='flexStart navbar'>
        <div className='flex-1 flexStart gap-10'>
            <Link href='/'>
                <Image 
                    src='/logo.svg'
                    width={115}
                    height={43}
                    alt='dribble image'
                />
            </Link>
            <ul className='xl:flex hidden text-small gap-7'>
              {NavLinks.map((link) => (
                <Link href={link.href} key={link.key}>
                  {link.text}
                </Link>
              ) )}
            </ul>
        </div>


        <div className='flexCenter gap-4'>
          {
            session ? (
              <>
                User Photo 
                <Link href='create-project'>
                  Create Project
                </Link>
              </>
            ): (
              <Link href='/login'>
                <AuthProviders />
              </Link>
            )
          }
        </div>
    </nav>
  )
}

export default Navbar
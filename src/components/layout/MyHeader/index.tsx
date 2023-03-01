import LoginButton from '@myComponents/auth/LoginButton';
import LogoutButton from '@myComponents/auth/LogoutButton';
import { customTheme } from '@myStyles/GlobalStyles';
import Link from 'next/link';
import React, { useEffect } from 'react';
import { TUserInfo } from 'src/lib/auth0/auth0';

// a navbar that navigates between nextjs pages
const hrefs = [
    { href: '/categories', label: 'Categories' },
    { href: '#/hot', label: 'Hot!' },
    { href: '#/new', label: 'New ☼' },
    { href: '#/daily', label: 'Daily Offer!' },
]
const MyHeader: React.FC = () => {
    const [isLogged, setIsLogged] = React.useState<boolean>(false)
    const [user, setUser] = React.useState<TUserInfo>(null)

    useEffect(() => {
        fetch('/api/auth0/get-user').then((res) => {
            if (res.ok) {
                setIsLogged(true)
            }
            res.json().then((data) => {
                setUser(data)
            })
            return
        }).catch((err) => { return })
    }, [])
    return (
        <div className='navbar
        flex flex-col items-center justify-space-between
        sm:flex-row
        text-white
        mb-3
        p-[0.2rem]
        '>
            <Link href="/">
                <div>
                    <div className='home-link' style={{
                    padding: '.2rem',
                    color: 'black',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '100%',
                    height: '100%',
                    textDecoration: 'none',
                    }}
                    >

                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="36"
                        height="36"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-home"
                        >
                        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                        <polyline points="9 22 9 12 15 12 15 22"></polyline>
                    </svg>
                    <span style={{marginLeft: '.6rem'}}>E-commerce Simplified</span>
                </div></div>
            </Link>

            <div className='nav-links
            flex justify-space-around
            w-full gap[.5rem] p-[0.2rem]
            h-[3rem]
            '>
                {hrefs.map(({ href, label }) => (
                    <Link key={href} href={href}>
                        <div style={{
                            boxShadow: 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            background: customTheme.colors[10],
                            fontSize: '.8rem',
                            width: '100%',
                            padding: '.2rem',
                            height: '100%',
                            textAlign: 'center',
                            borderRadius: '0.5rem',
                        }}
                        >{label}</div>
                    </Link>
                ))}
            </div>

            {isLogged ? (
            <LogoutButton className='bg-gray-500 cursor-pointer'>
                logout {user?.name}
            </LogoutButton>
            ) : (
            <LoginButton className='bg-gray-500'>
                login
            </LoginButton>
            )}
        </div>
    )
}

export default MyHeader

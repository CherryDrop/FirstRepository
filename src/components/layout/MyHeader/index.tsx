import { Flex } from '@chakra-ui/react';
import { customTheme } from '@myStyles/GlobalStyles';
import Link from 'next/link';
import React from 'react';

// a navbar that navigates between nextjs pages
const hrefs = [
    { href: '/all', label: 'All Categories' },
    { href: '/hot', label: 'Hot!' },
    { href: '/new', label: 'New ☼' },
    { href: '/daily', label: 'Daily Offer!' },
]
const MyHeader: React.FC = () => {
    return (
        <Flex as="nav" align="center" justify="space-between" wrap="wrap" padding="1.5rem" bg={customTheme.colors[10]} color="white">
            <Flex align="center" mr={5}>
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
                <span className="">E-commerce Simplified</span>
            </Flex>

            <Flex align="center" mr={5}>
                {hrefs.map(({ href, label }) => (
                    <Link key={href} href={href}>
                        <a className="">{label}</a>
                    </Link>
                ))}
            </Flex>
        </Flex>
    )
}

export default MyHeader;
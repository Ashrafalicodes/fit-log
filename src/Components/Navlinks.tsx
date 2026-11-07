
'use client'

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { ReactNode } from 'react';

const Navlinks = ({ href, children }: { href: string, children: ReactNode }) => {
    const pathname = usePathname();

    const isActive = href === '/'
        ? pathname === '/'
        : pathname.startsWith(href);

    return (
        <Link
            href={href}
            className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 ${
                isActive
                    ? 'bg-lime-400/10 text-lime-400'
                    : 'text-gray-400 hover:text-white'
            }`}
        >
            {children}
        </Link>
    );
};

export default Navlinks;

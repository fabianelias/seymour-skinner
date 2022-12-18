/**
 * @author [Fabian Bravo]
 * @email [fabian_bravo@live.cl]
 * @create date 2022-10-01 20:26:22
 * @modify date 2022-10-01 20:26:22
 */

import { useRouter } from 'next/router';
import NextLink from 'next/link';
import cn from 'classnames';

const NavItem = ({ href, text}: any) => {

    const router = useRouter();
    const isActive = `${router.asPath}` === href;
    return (
        <NextLink href={href}>
            <p className={cn(isActive
                    ? 'font-bold text-blue-800 dark:text-gray-200'
                    : 'font-normal text-gray-600 dark:text-gray-400',)}>
                <span className='capsize'>{text}</span>
            </p>
        </NextLink>
    )
}

export default NavItem
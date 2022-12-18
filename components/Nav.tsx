import React, { useEffect, useState } from "react";
import { useTheme } from 'next-themes';
import { SunIcon, MoonIcon } from "@heroicons/react/outline";
import { useTranslation } from 'next-i18next';
import NavItem from './NavItem';

interface INav {
  locale: string;
}

const Nav = (props: INav) => {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, [])

  const renderThemeChanger = () => {
    if (!mounted) return null;

    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme === "dark") {
      return (
        <SunIcon className="w-5 h-5 text-yellow-500 " role="button" onClick={() => setTheme('light')} />
      )
    }
    else {
      return (
        <MoonIcon className="w-5 h-5 text-gray-900 " role="button" onClick={() => setTheme('dark')} />
      )
    }
  }

  return (
    <nav className="border-gray-200 px-2 sm:px-4 py-4 rounded dark:bg-gray-900">
      <div className="container flex flex-wrap justify-between items-center content-center pl-4">
        <a href="/" className="flex items-center">
          <span className="self-center text-2xl font-bold whitespace-nowrap dark:text-white">
            Talk Fluency
          </span>
        </a>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="flex flex-col p-4 mt-4 border  border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
            <NavItem href={'/'} text="Home" />
            </li>
            <li>
            <NavItem href={`/shots`} text="Shots" />
            </li>
            <li className="hidden">
              {renderThemeChanger()}
            </li>
          </ul>
        </div>

        <div className="md:hidden lg:hidden content-center text-center" id="navbar-default">
          <ul className="flex flex-row p-4 mt-1 space-x-10 md:bg-white dark:bg-gray-800 dark:border-gray-700">
            <li>
            <NavItem href={'/'} text="Home" />
            </li>
            <li>
            <NavItem href={`/shots`} text="Shots" />
            </li>
            <li className="hidden">
              {renderThemeChanger()}
            </li>
          </ul>
        </div>
      </div>
    </nav>

  )
}

export default Nav
import React, { useEffect, useState } from "react";
import { useTheme } from 'next-themes';
import { SunIcon, MoonIcon } from "@heroicons/react/outline";
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
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

  const { t } = useTranslation(['common', 'landing'])

  return (
    <nav className="border-gray-200 px-2 sm:px-4 py-4 rounded dark:bg-gray-900">
      <div className="container flex flex-wrap justify-between items-center content-center">
        <a href="/" className="flex items-center">
          <span className="self-center text-2xl font-bold whitespace-nowrap dark:text-white">
            Talk Fluency
          </span>
        </a>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="flex flex-col p-4 mt-4 border  border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
            <NavItem href={'/'} text="Home" locale={props.locale} />
            </li>
            <li>
            <NavItem href={`/shots`} text="Shots" locale={props.locale} />
            </li>
            <li>
              <NavItem href={'#us-section'} text={t("nav.about")} locale={props.locale} />
            </li>
            <li>
              <a href="#how-section" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">{t("nav.service")}</a>
            </li>
            <li className="hidden">
              <a href="#price-section" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">{t("nav.price")}</a>
            </li>
            <li>
              {renderThemeChanger()}
            </li>
          </ul>
        </div>
      </div>
    </nav>

  )
}

export default Nav
import { useRouter } from "next/router";
import Nav from "./Nav";


export default function Container(props: any) {

  const { children, ...customMeta } = props;
  const router = useRouter();

  const metaData = {
    title: 'Aprende y Práctica un idioma en un ambiente de relajo total',
    description: '',
    image: '',
    type: 'website',
    ...customMeta
  }

  return (
    <div>
      <Nav locale={'es'} />
      <main id="skip" className="flex-wrap">
        <div className="bg-orange-200  bg-h dark:bg-gray-900"></div>
        {children}
        <br />
        <footer className="container p-4  bg-white rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022 <a href="/" className="hover:underline">Learn</a>. All Rights Reserved.
          </span>
          <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
          </ul>
        </footer>
        <br />
      </main>
    </div>
  )
}

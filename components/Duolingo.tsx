import Link from 'next/link';

const Duolingo = (props) => {
  return (
    <>
      {props.type === 'banner' ? (
        <div className="p-4 mb-4 text-sm text-yellow-800 bg-green-600 rounded-md dark:bg-yellow-200 dark:text-yellow-800 text-center" role="alert">
          <Link href={`https://invite.duolingo.com/BDHTZTB5CWWKTWC7EZYM3S56RQ`} ><span className="font-medium text-white">Download Duolingo Free</span></Link>
        </div>
      )
        :
        <div className="max-w-sm bg-white border border-gray-100 rounded-xl dark:bg-gray-900 dark:border-gray-900 mx-10">
          <a href="https://invite.duolingo.com/BDHTZTB5CWWKTWC7EZYM3S56RQ" target={'_blank'}>
            <img className="rounded-t-lg" src="/resources/app-duolingo.jpg" alt="" />
          </a>
          <div className="p-5">
            <p className="hidden mb-3 font-normal text-gray-700 dark:text-gray-400">En definitiva, si bien Duolingo es excelente opción para aprender nuevo vocabulario y como un juego de complemento</p>
            <a href="https://invite.duolingo.com/BDHTZTB5CWWKTWC7EZYM3S56RQ" target={'_blank'} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Download the app
            </a>
          </div>
        </div>
      }
    </>


  )
}
export default Duolingo
import React from "react"

interface IPricePlan {
  namePlan: string;
  price: string;
  icon: string;
  type: string;
  list: Array<string>;
}

const PricePlan = (props: {
  priceDetail: IPricePlan
}) => {

  const { priceDetail } = props
  return (

    <div className="w-full max-w-sm p-4 bg-white border rounded-lg shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
        <h5 className="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">{priceDetail.namePlan}</h5>
        <div className="flex items-baseline text-gray-900 dark:text-white">
            <span className="text-3xl font-semibold">{priceDetail.icon}</span>
            <span className="text-5xl font-extrabold tracking-tight">{priceDetail.price}</span>
            <span className="ml-1 text-xl font-normal text-gray-500 dark:text-gray-400">/{priceDetail.type}</span>
        </div>
        <ul role="list" className="space-y-5 my-7">
            
            {priceDetail.list.map((detail) => {
              return (
              <li key={detail} className="flex space-x-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
                <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">{detail}</span>
              </li>)
            })}
        </ul>
        <button type="button" className="text-white bg-gray-800 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center">Choose plan</button>
    </div>

  )
}

export default PricePlan
import { CheckCircleIcon } from "@heroicons/react/outline";
import { Row, Col } from "antd";
import { useTranslation } from "next-i18next";
import { useState, Suspense } from 'react';


const Newsletter = () => {

  const { t } = useTranslation('landing')

  const subscribe = async (e) => {
    e.preventDefault();
    setIsWaiting(true);
    const res = await fetch("/api/mailchimp/newsletter", {
      method: "POST",
      body: e.target[0].value,
    });

    const data = await res.json();

    if (data.error !== null) {
      setIsWaiting(true);
      throw data.error;
    }
    setIsSending(true)
  };


  const [isWaiting, setIsWaiting] = useState(false);
  const [isSending, setIsSending] = useState(false);
  // 0 - initial , 1 - loading, 2 - success, 2 - error
  return (
    <Row className="flex flex-col w-full align-middle items-center content-center">
      <Col className={'p-8  bg-slate-100 dark:bg-transparent rounded-lg my-[40px]'}>
        <Suspense fallback={isWaiting ? 'esperad' : ''}>
          <h4 className="mb-4 text-3xl font-extrabold tracking-tight leading-none text-gray-900 md:text-xl lg:text-2xl dark:text-white">
            {t("newsletter.title")}
          </h4>
          <p className="mb-6 text-lg font-normal text-gray-500 lg:text-md dark:text-gray-400">
            {t("newsletter.description")}
          </p>
          {!isSending ? (
          <form onSubmit={subscribe} >
            <div className="relative z-0 mb-6 w-full group">
              <input disabled={isWaiting} type="email" name="floating_email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
              <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">{t("newsletter.label_input_email")}</label>
            </div>
            <button type="submit" disabled={isWaiting}
              className={`w-full text-white bg-gray-800  hover:bg-gray-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg px-4 py-4 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800`}
            >
              {t("newsletter.title_btn")}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </button>
          </form>
          )
          :
          <CheckCircleIcon className="w-[50px] h-[50px] text-green-500 align-middle content-center" />
        }
        </Suspense>
      </Col>
    </Row>

  )
}

export default Newsletter
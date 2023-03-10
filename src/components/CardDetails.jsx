import bgMobile from "../assets/images/bg-main-mobile.png"
import bgDesktop from "../assets/images/bg-main-desktop.png"
import Thanks from "./Thanks"
import CardBack from "../components/CardBack"
import CardFront from "../components/CardFront"

import { useState, useEffect, useRef } from "react"

export const CardDetails = ({ children }) => {
  const [holder, setHolder] = useState("")
  const [number, setNumber] = useState("")
  const [month, setMonth] = useState("")
  const [year, setYear] = useState("")
  const [code, setCode] = useState("")
  const [submit, setSubmit] = useState(false)

  const inputRef = useRef(null)

  useEffect(() => {
    inputRef.current.focus()
  }, [])

  const format = (value, limit, name) => {
    if (name === "holder") {
      return value.replace(/[^a-zA-Z\s]/g, "").slice(0, limit)
    } else if ((name = "number")) {
      return value
        .replace(/[^\d]/g, "")
        .replace(/(.{4})/g, "$1 ")
        .trim()
        .slice(0, limit)
    } else {
      return value.replace(/[^\d]/g, "").slice(0, limit)
    }
  }

  const handleClick = (e) => {
    e.preventDefault()
    if (!submit) {
      if (holder.length > 2 && number.length === 19 && month.length === 2 && year.length === 2 && code.length === 3) {
        setSubmit(!submit)
        console.log("submit:", submit)
      }
    } else {
      setSubmit(!submit)
    }
  }

  return (
    <div className='align-center lg:flex lg: h-screen'>
      <div className='relative flex flex-col gap-5'>
        <picture className=' lg:flex'>
          <source
            srcSet={bgDesktop}
            media='(min-width: 640px)'
          />
          <img
            src={bgMobile}
            alt='Background'
            className='w-full h-64 lg:h-screen  xl:h-screen'
          />
        </picture>
        <div className='cards w-full absolute p-8 lg:mt-16 lg:ml-28'>
          <CardBack code={code} />
          <CardFront
            holder={holder}
            number={number}
            month={month}
            year={year}
          />
        </div>
      </div>
      <div className='flex justify-center items-center lg:flex-grow'>
        <form
          className='flex flex-col m-8 mt-16 gap-5 lg:justify-center lg:m-48'
          onSubmit={handleClick}
        >
          {submit ? (
            <Thanks />
          ) : (
            <>
              <label className='flex flex-col gap-2 uppercase text-sm'>
                cardholder name
                <input
                  className='p-3 border-solid border-2 border-light-grey rounded-lg text-base max-w-sm'
                  type='text'
                  placeholder='e.g. Jane Appleseed'
                  onChange={(e) => setHolder(format(e.target.value, 25, "holder"))}
                  value={holder}
                  ref={inputRef}
                  name='holder'
                />
              </label>

              <label className='flex flex-col gap-2 uppercase text-sm'>
                card number
                <input
                  className='p-3 border-solid border-2 border-light-grey rounded-lg text-base max-w-sm'
                  type='text'
                  placeholder='e.g. 1234 5678 9123 0000'
                  onChange={(e) => setNumber(format(e.target.value, 19, "number"))}
                  value={number}
                  name='number'
                />
              </label>

              <div className='flex max-w-sm gap-4'>
                <div className='flex'>
                  <label className='flex flex-col gap-2 uppercase text-sm'>
                    exp.date (mm/yy)
                    <div className='flex gap-2'>
                      <input
                        className='w-1/2 flex-1 p-3 border-solid border-2 border-light-grey rounded-lg text-base max-w-sm'
                        type='text'
                        placeholder='MM'
                        onChange={(e) => setMonth(format(e.target.value, 2, "month"))}
                        value={month}
                        name='month'
                      />
                      <input
                        className='w-1/2 p-3 border-solid border-2 border-light-grey rounded-lg text-base max-w-sm'
                        type='text'
                        placeholder='YY'
                        onChange={(e) => setYear(format(e.target.value, 2, "year"))}
                        value={year}
                        name='year'
                      />
                    </div>
                  </label>
                </div>
                <div className='flex'>
                  <label className='flex flex-col gap-2 uppercase text-sm lg:w-full'>
                    cvc
                    <input
                      className='w-full p-3 border-solid border-2 border-light-grey rounded-lg text-base'
                      type='text'
                      placeholder='e.g. 123'
                      onChange={(e) => setCode(format(e.target.value, 3, "code"))}
                      value={code}
                      name='code'
                    />
                  </label>
                </div>
              </div>
            </>
          )}
          <input
            className='p-4 bg-dark-violet text-white rounded-lg lg:text-lg max-w-sm hover:cursor-pointer'
            type='submit'
            value={submit ? "Continue" : "Confirm"}
          />
        </form>
      </div>
    </div>
  )
}

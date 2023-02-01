import bgMobile from "../assets/images/bg-main-mobile.png"
import bgDesktop from "../assets/images/bg-main-desktop.png"
import Thanks from "./Thanks"

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
    // if (!submit) {
    //   if (holder.length > 2 && number.length === 19 && month.length === 2 && year.length === 2 && code.length === 3) {
    //     setSubmit(!submit)
    //     console.log("submit:", submit)
    //   }
    // } else {
    //   setSubmit(!submit)
    // }
    setSubmit(!submit)
  }

  return (
    <>
      <div className='flex flex-col gap-5'>
        <picture className='sm:block'>
          <source
            srcSet={bgDesktop}
            media='(min-width: 640px)'
          />
          <img
            src={bgMobile}
            alt='Background'
            className='w-full'
          />
        </picture>
        <div className='cards w-full absolute p-8 pt-8'>
          <ul>
            {children.map((card) => (
              <li key={card.id}>{card}</li>
            ))}
          </ul>
        </div>
      </div>

      <form
        className='flex flex-col m-8 mt-24 gap-5'
        onSubmit={handleClick}
      >
        {submit ? (
          <Thanks />
        ) : (
          <>
            <label className='flex flex-col gap-2 uppercase'>
              cardholder name
              <input
                className='p-3 border-solid border-2 border-light-grey rounded-lg'
                type='text'
                placeholder='e.g. Jane Appleseed'
                onChange={(e) => setHolder(format(e.target.value, 25, "holder"))}
                value={holder}
                ref={inputRef}
                name='holder'
              />
            </label>

            <label className='flex flex-col gap-2 uppercase'>
              card number
              <input
                className='p-3 border-solid border-2 border-light-grey rounded-lg'
                type='text'
                placeholder='e.g. 1234 5678 9123 0000'
                onChange={(e) => setNumber(format(e.target.value, 19, "number"))}
                value={number}
                name='number'
              />
            </label>

            <div className='flex gap-4'>
              <label className='flex flex-col gap-2 uppercase'>
                exp.date (mm/yy)
                <div className='flex gap-2'>
                  <input
                    className='w-1/2 p-3 border-solid border-2 border-light-grey rounded-lg'
                    type='text'
                    placeholder='MM'
                    onChange={(e) => setMonth(format(e.target.value, 2, "month"))}
                    value={month}
                    name='month'
                  />
                  <input
                    className='w-1/2 p-3 border-solid border-2 border-light-grey rounded-lg'
                    type='text'
                    placeholder='YY'
                    onChange={(e) => setYear(format(e.target.value, 2, "year"))}
                    value={year}
                    name='year'
                  />
                </div>
              </label>

              <label className='flex flex-col gap-2 uppercase w-1/2'>
                cvc
                <input
                  className='p-3 border-solid border-2 border-light-grey rounded-lg'
                  type='number'
                  placeholder='e.g. 123'
                  onChange={(e) => setCode(format(e.target.value, 3, "code"))}
                  value={code}
                  name='code'
                />
              </label>
            </div>
          </>
        )}
        <input
          className='p-4 bg-dark-violet text-white rounded-lg'
          type='submit'
          value={submit ? "Continue" : "Confirm"}
        />
      </form>
    </>
  )
}
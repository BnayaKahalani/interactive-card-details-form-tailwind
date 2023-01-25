import React from 'react'

export const Form = () => {
  return (
    <div className="flex flex-col gap-5">
      <label className="flex flex-col gap-2">
        cardholder name
        <input className="w-48 border-solid border-2 border-sky-500" type="text" placeholder="e.g. Jane Appleseed" />
      </label>

      <label className="flex flex-col gap-2">
        cardholder number
        <input
          className="w-48 border-solid border-2 border-sky-500"
          type="text"
          placeholder="e.g. 1234 5678 9123 0000"
        />
      </label>

      <label className="flex flex-col gap-2">
        cardholder number
        <input
          className="w-48 border-solid border-2 border-sky-500"
          type="text"
          placeholder="e.g. 1234 5678 9123 0000"
        />
      </label>
      <input type="submit" value="Submit" />
    </div>
  )
}

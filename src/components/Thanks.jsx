import complete from "../assets/images/icon-complete.svg"

const Thanks = () => {
  return (
    <div className='flex flex-col justify-between items-center pt-4 gap-6'>
      <img
        src={complete}
        alt='complete'
      />
      <h2 className='uppercase text-4xl  text-dark-violet'>thank you!</h2>
      <p className='text-lg text-dark-grey'>We've added your card details</p>
    </div>
  )
}

export default Thanks

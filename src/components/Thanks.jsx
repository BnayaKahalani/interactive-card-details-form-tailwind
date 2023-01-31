import complete from "../assets/images/icon-complete.svg"

const Thanks = () => {
  return (
    <div className='flex flex-col justify-between items-center gap-6'>
      <img
        src={complete}
        alt='complete'
      />
      <h2 className='text-4xl uppercase text-dark-violet'>thank you!</h2>
      <p className='text-lg text-dark-grey'>We've added your card details</p>
    </div>
  )
}

export default Thanks

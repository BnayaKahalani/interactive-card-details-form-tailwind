import bgCardBack from "../assets/images/bg-card-back.png"

const CardBack = ({ code }) => {
  return (
    <div className='w-72 lg:w-96 absolute top-10 right-10 sm:right-36 md:right-56 lg:top-80 lg:left-12 text-center'>
      <p className='absolute right-8 top-16 pt-0.5 lg:top-20 lg:pt-3 lg:pr-2.5 text-white'>{code}</p>
      <img
        src={bgCardBack}
        alt='card back'
      />
    </div>
  )
}

export default CardBack

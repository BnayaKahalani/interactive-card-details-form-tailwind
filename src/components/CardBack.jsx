import bgCardBack from "../assets/images/bg-card-back.png"

const CardBack = ({ code }) => {
  return (
    <div className='w-72 lg:w-96 absolute top-10 right-6 sm:right-28 md:right-48 lg:top-80 lg:left-12 text-center'>
      <p className='absolute right-8 top-16 lg:pt-2 text-white text-lg'>{code}</p>
      <img
        src={bgCardBack}
        alt='card back'
      />
    </div>
  )
}

export default CardBack

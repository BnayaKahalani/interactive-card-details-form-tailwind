import bgCardBack from "../assets/images/bg-card-back.png"

const CardBack = ({ code }) => {
  return (
    <div className='w-72 absolute right-2.5'>
      <p className='absolute right-8 top-16 p-1 text-white text-sm'>{code}</p>
      <img
        src={bgCardBack}
        alt='card back'
      />
    </div>
  )
}

export default CardBack

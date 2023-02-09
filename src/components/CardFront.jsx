import bgCardFront from "../assets/images/bg-card-front.png"
import cardLogo from "../assets/images/card-logo.svg"

const CardFront = ({ holder, number, month, year }) => {
  return (
    <div className='w-72 lg:w-96 tracking-widest absolute top-32 left-12 sm:left-36 md:left-56 lg:top-20 lg:left-0 text-center text-white'>
      <p className='absolute bottom-4 left-4'>{holder}</p>
      <p className='absolute top-16 pt-2 left-4 lg:top-24 text-lg'>{number}</p>
      <p className='absolute bottom-4 right-16'>{month}</p>
      {month.length === 2 ? <span className='absolute bottom-4 right-12'>/</span> : ""}
      <p className='absolute bottom-4 right-4'>{year}</p>
      <img
        className='absolute w-12 top-4 left-4'
        src={cardLogo}
        alt='logo'
      />
      <img
        src={bgCardFront}
        alt='card back'
      />
    </div>
  )
}

export default CardFront

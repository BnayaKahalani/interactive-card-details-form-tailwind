import bgCardFront from "../assets/images/bg-card-front.png"
import cardLogo from "../assets/images/card-logo.svg"

const CardFront = ({ holder, number, month, year }) => {
  return (
    <div className='w-72 tracking-widest absolute top-32 text-white'>
      <p className='absolute bottom-4 left-4 text-sm'>{holder}</p>
      <p className='absolute top-20 left-4'>{number}</p>
      <p className='absolute bottom-4 right-16 text-sm'>{month}</p>
      {month.length === 2 ? <span className='absolute bottom-4 right-12 text-sm'>/</span> : ""}
      <p className='absolute bottom-4 right-4 text-sm'>{year}</p>
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

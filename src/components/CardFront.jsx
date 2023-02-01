import bgCardFront from "../assets/images/bg-card-front.png"

const CardFront = (props) => {
  return (
    <div className='w-72 absolute top-32'>
      <img
        src={bgCardFront}
        alt='card back'
      />
    </div>
  )
}

export default CardFront

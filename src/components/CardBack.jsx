import bgCardBack from "../assets/images/bg-card-back.png"

const CardBack = (props) => {
  return (
    <div className='w-72 absolute right-2.5'>
      <img
        src={bgCardBack}
        alt='card back'
      />
    </div>
  )
}

export default CardBack

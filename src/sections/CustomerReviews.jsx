import ReviewCard from "../components/ReviewCard"
import { reviews } from "../constants"

const CustomerReviews = () => {
  return (
    <section className="max-container ">
      <h3 className=" capitalize text-center font-palanquin text-4xl font-bold">
        what our <span className="text-coral-red">Customer</span> say?
      </h3>
      <p className="text-center info-text m-auto mt-4 max-w-lg">
      Hear genuine stories from our satisfied customers about their
      exceptional experiences with us.
      </p>
      <div className="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14 ">
        {reviews.map((review)=>(
            <ReviewCard
              key={review.customerName}
              imgURL={review.imgURL}
              customerName={review.customerName}
              rating={review.rating}
              feedback={review.feedback}
            />
        ))}
      </div>
    </section>
  )
}

export default CustomerReviews
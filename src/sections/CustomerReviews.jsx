import { reviews } from '../constants'
import { ReviewCard } from '../components'

const CustomerReviews = () => {
    return (
        <section className="max-container">
            <h3 className="font-palanquin text-center text-4xl font-bold ">
                What Our <span className="text-coral-red">Customers </span>Say
            </h3>
            <p className="text-center info-text mt-4 m-auto max-w-lg">
                Hear genuine stories from our satisfied customers about their
                exceptional experiences with us.
            </p>

            <div className="mt-24 flex flex-1 justify-evenly items-center gap-14 flex-col lg:flex-row">
                {reviews.map((review) => (
                    <ReviewCard key={review.imgURL} {...review} />
                ))}
            </div>
        </section>
    )
}

export default CustomerReviews
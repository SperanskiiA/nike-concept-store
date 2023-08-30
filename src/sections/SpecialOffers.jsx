import { arrowRight } from '../assets/icons'
import { offer } from '../assets/images'
import { Button } from '../components'
const SpecialOffers = () => {
    return (
        <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
            <div className="flex flex-1">
                <img
                    src={offer}
                    width={773}
                    height={687}
                    alt="offer"
                    className="object-contain w-full"
                />
            </div>
            <div className="flex flex-1 flex-col">
                <h2 className=" font-palanquin text-4xl capitalize  font-bold lg:max-w-lg">
                    <span className="text-coral-red ">Special </span>
                    Offer
                </h2>
                <p className="mt-4 lg:max-w-lg info-text">
                    <span className="text-coral-red">
                        Ensuring premium comfort and style!
                    </span>{' '}
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quas nulla doloribus architecto ipsa iste laborum id
                    distinctio soluta, facilis sapiente cupiditate amet neque
                </p>
                <p className="mt-6 lg:max-w-lg info-text">
                    {' '}
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Officiis, iure. autem aliquam tenetur similique explicabo
                    voluptates expedita quo saepe nam dolorem maxime.
                </p>
                <div className="mt-11 flex flex-wrap gap-4">
                    <Button label="Shop Now" iconUrl={arrowRight} />
                    <Button label="Learn More" outlined={true} />
                </div>
            </div>
        </section>
    )
}

export default SpecialOffers

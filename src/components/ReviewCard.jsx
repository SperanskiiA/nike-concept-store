import React from 'react'
import { star } from '../assets/icons'

const ReviewCard = ({ imgURL, customerName, feedback, rating }) => {
    return (
        <div className="flex justify-center items-center flex-col">
            <img
                src={imgURL}
                alt={`customer ${customerName}`}
                width={120}
                height={120}
                className="rounded-full object-cover"
            />
            <p className="mt-6 max-w-sm text-center info-text">{feedback}</p>
            <div className="mt-3 flex justify-center items-center gap-2.5">
                <img
                    src={star}
                    width={24}
                    height={24}
                    alt="rating"
                    className="object-contain m-0"
                />
                <p className="text-xl font-montserrat text-slate-gray">
                    ({rating})
                </p>
            </div>
            <h3 className="mt-1 font-palanquin text-3xl font-bold text-center">
                {customerName}
            </h3>
        </div>
    )
}

export default ReviewCard

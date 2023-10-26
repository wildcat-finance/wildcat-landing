import React from 'react'

const fadeInCard = ({scrolledPastHowItWorks, animationDelay, position, title, text}) => {
    return (
        <div className={`col-span-1 pb-8 opacity-0 animation-delay-${animationDelay} ${scrolledPastHowItWorks ? "fade-in" : ""}`}>
            <h3 className='text-2xl border-y border-border-primary mb-4 font-extrabold'>{position}</h3>
            <h4 className='font-extrabold'>{title}</h4>
            <p>{text}</p>
        </div>
    )
}
export default fadeInCard

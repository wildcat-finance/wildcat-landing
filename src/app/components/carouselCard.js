import React from 'react'

const carouselCard = ({scrolledPastWildcatBanking, title, text, imageURL}) => {
    return (
        <div className={`min-w-[260px] sm:min-w-[340px] px-4 opacity-0 ${scrolledPastWildcatBanking ? "fade-in" : ""}`}>
            <img className='mb-6' src={imageURL} alt='logo' width={200} height={150}/>
            <h4>{title}</h4>
            <p>{text}</p>
        </div>
    )
}
export default carouselCard

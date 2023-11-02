import React from 'react'

const carouselCard = ({scrolledPastWildcatBanking, title, text}) => {
    return (
        <div className={`min-w-[260px] sm:min-w-[340px] px-4 opacity-0 ${scrolledPastWildcatBanking ? "fade-in" : ""}`}>
            <img className='mb-6' src='/wildcat-symbol.png' alt='logo' width={50} height={80}/>
            <h4>{title}</h4>
            <p>{text}</p>
        </div>
    )
}
export default carouselCard

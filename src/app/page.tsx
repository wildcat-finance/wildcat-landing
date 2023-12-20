/* eslint-disable @next/next/no-img-element */
"use client";

import ResponsiveVideo from "./components/responsiveVideo";
import {useEffect, useState} from "react";
import {useInView} from "react-intersection-observer";
import Carousel from './components/carousel';
import FadeInCard from "@/app/components/fadeInCard";
import CarouselCard from "@/app/components/carouselCard";

export default function Home() {
    const {ref: refHowItWorks, inView: inViewHowItWorks} = useInView({
        /* Optional options */
        threshold: 0.8,
    });
    const {ref: refWildcatBanking, inView: inViewWildcatBanking} = useInView({
        /* Optional options */
        threshold: 0.8,
    });
    const [scrolledPastHowItWorks, setScrolledPastHowItWorks] = useState(false);
    const [scrolledPastWildcatBanking, setScrolledPastWildcatBanking] =
        useState(false);
    useEffect(() => {
        if (inViewHowItWorks) {
            setScrolledPastHowItWorks(true);
        }
    }, [inViewHowItWorks]);
    useEffect(() => {
        if (inViewWildcatBanking) {
            setScrolledPastWildcatBanking(true);
        }
    }, [inViewWildcatBanking]);

    return (
        <main className='flex min-h-screen flex-col'>
            <nav className='h-20 flex flex-row justify-between items-center bg-[#232323] px-4 sm:px-8'>
                <div>
                    <img
                        src='/wildcat-logo-white.svg'
                        alt='logo'
                        width={150}
                        height={51}
                    />
                </div>
                <div className='flex flex-row items-center gap-4 sm:gap-6'>
                    <div className={"sm:hidden"}><a href='https://wildcat-protocol.gitbook.io' target="_blank"
                                                    className='text-white'>
                        Docs
                    </a></div>
                    <div className={"hidden sm:block"}><a href='https://wildcat-protocol.gitbook.io' target="_blank"
                                                          className='text-white'>
                        Documentation
                    </a></div>
                    <a href='https://app.wildcat.finance' target="_blank">
                        <button className='rounded-xl bg-white px-2 sm:px-4 py-1 sm:py-2 text-black min-h-6 text-sm'>
                            App
                        </button>
                    </a>
                </div>
            </nav>

            <section className='h-[calc(100vh-80px)] flex flex-col items-center justify-center gap-8 px-8 sm:px-16 relative'>
                <ResponsiveVideo
                    preload='auto'
                    className='absolute inset-x-0 bottom-0 object-cover h-full min-w-full'
                    autoPlay
                    loop
                    muted
                    playsInline
                    desktopVid='/WILDCAT_TOP_BANNER_1080.mp4'
                    tabletVid='/WILDCAT_TOP_BANNER_720.mp4'
                    mobileVid='/WILDCAT_TOP_BANNER_480.mp4'
                    type='video/mp4'
                />
                <div className='z-10 flex flex-col gap-8 max-w-[50rem]'>
                    <h1 className='text-3xl md:text-4xl/[50px] text-center'>
                        Fixed rates. Flexible everything else.
                    </h1>
                    <p className='text-center text-white max-w-[40rem] mx-auto'>
                        Wildcat is an Ethereum protocol enabling undercollateralised on-chain credit facilities
                        which a borrower can parameterise however they wish. Lenders benefit from novel interest
                        rate and withdrawal mechanisms.
                    </p>
                    <p className='text-center text-white max-w-[40rem] mx-auto'>
                        Designed by - and for - sophisticated actors in the financial markets space.
                    </p>

                    <div className='flex flex-col md:flex-row gap-4 items-center justify-center'>
                        <a href='https://rvficirw76q.typeform.com/to/FKBzhnmo' target="_blank">
                            <button className='rounded-xl bg-white px-4 py-2 text-black min-h-6 text-sm'>
                                Become a Borrower
                            </button>
                        </a>
                        <a href='https://app.wildcat.finance' target="_blank">
                            <button className='rounded-xl bg-white px-4 py-2 text-black min-h-6 text-sm'>
                                App
                            </button>
                        </a>
                    </div>
                </div>
            </section>

            <section className='bg-bg-card text-black'>
                <h2 className='text-center'>How Wildcat Works</h2>
                <div ref={refHowItWorks}></div>
                <div className='grid grid-cols-1 sm:grid-cols-3 gap-3 px-4 sm:px-8 pb-8 max-w-7xl mx-auto'>

                  <FadeInCard scrolledPastHowItWorks={scrolledPastHowItWorks} animationDelay={"0ms"} position={"1"}
                              title={"Borrower Onboarding"}
                              text={"Borrower sends Wildcat an onboarding request, and goes through a protocol KYC process to get an address authorised to deploy markets."}/>

                    <FadeInCard scrolledPastHowItWorks={scrolledPastHowItWorks} animationDelay={"250ms"} position={"2"}
                                title={"New Market Deployment"}
                                text={"Borrowers specify terms of their markets at deployment: APR, maximum to borrow, reserve ratio, withdrawal cycle length, and more."}/>

                  <FadeInCard scrolledPastHowItWorks={scrolledPastHowItWorks} animationDelay={"500ms"} position={"3"}
                              title={"Lender Authorisation"}
                              text={"Borrowers determine which addresses can lend to their markets. Wildcat does not constrain the lender selection process, deferring this to the borrower."}/>

                    <FadeInCard scrolledPastHowItWorks={scrolledPastHowItWorks} animationDelay={"750ms"} position={"4"}
                                title={"Lenders Deposit Assets"}
                                text={"Lenders deposit their assets as credit, receiving interest-bearing debt tokens. These tokens are transferable: store/use them however you wish."}/>

                    <FadeInCard scrolledPastHowItWorks={scrolledPastHowItWorks} animationDelay={"1000ms"} position={"5"}
                                title={"Borrowers Utilise Credit"}
                                text={"Borrowers can now utilise a proportion of the credit extended to them, returning assets when called upon by lenders making withdrawal requests."}/>

                    <FadeInCard scrolledPastHowItWorks={scrolledPastHowItWorks} animationDelay={"1250ms"} position={"6"}
                                title={"The Rest Is Up To You"}
                                text={"Borrowers can adjust the APR and capacity of their markets according to their needs, subject to existing debt and liquid asset amounts in market reserves."}/>

                </div>
            </section>

            <section className='flex flex-col items-center relative'>
                <ResponsiveVideo
                    preload='auto'
                    className='absolute inset-x-0 top-0 object-cover object-center h-full min-w-full'
                    autoPlay
                    loop
                    muted
                    playsInline
                    desktopVid='/WILDCAT_BANNER_1080.mp4'
                    tabletVid='/WILDCAT_BANNER_720.mp4'
                    mobileVid='/WILDCAT_BANNER_480.mp4'
                    type='video/mp4'
                />
                <div className='z-10 flex flex-col'>
                    <h2 className='text-4xl sm:text-5xl text-black text-center py-6 pt-20'>
                        Interested?
                    </h2>
                    <span className='text-black text-center py-6'>Find out more as a:</span>
                    <div className='flex flex-row gap-2 sm:gap-6 items-center justify-center pb-20'>
                        <a href='https://rvficirw76q.typeform.com/to/FKBzhnmo' target="_blank">
                            <button className='bg-black text-white rounded-full w-[158px] py-2'>
                                Borrower
                            </button>
                        </a>
                        <a href='https://rvficirw76q.typeform.com/to/FKBzhnmo' target="_blank">
                            <button className='bg-black text-white rounded-full w-[158px] py-2'>
                                Lender
                            </button>
                        </a>
                    </div>
                </div>
            </section>

            <section className='bg-bg-card text-black px-4 sm:px-8 pb-12'>
                <div className='max-w-7xl mx-auto'>
                    <h2 className='text-black text-center'>
                        A Simple Premise With Several Benefits
                    </h2>
                    <article ref={refWildcatBanking} className='flex flex-col'>
                        <Carousel>
                            <CarouselCard imageURL='/flexibility.png' title={"Flexible Borrowing, Arbitrary Purposes"} text={"Whether you are a market maker raising inventory, a fund seeking exposure or a DAO diversifying their assets, Wildcat markets can fit your purpose."} scrolledPastWildcatBanking={scrolledPastWildcatBanking} />
                            <CarouselCard imageURL='/piggybank.png' title={"Eliminate Back-Office Costs on Loans"} text={"The flexibility of Wildcat market parameters combined with full visibility into actions taken and interest accrued can reduce administrative costs."} scrolledPastWildcatBanking={scrolledPastWildcatBanking} />
                            <CarouselCard imageURL='/monitoring.png' title={"Simple Recording of On-Chain Debt"} text={"The rebasing nature of Wildcat market tokens allows lenders to know exactly how much they are owed at any given time by simply checking their balance."} scrolledPastWildcatBanking={scrolledPastWildcatBanking} />
                            <CarouselCard imageURL='/visibility.png' title={"Greater Visibility, Fewer Surprises"} text={"The digital asset industry is underpinned by loans affecting large groups of people with terms known only to a few. Wildcat markets bring these into the light."} scrolledPastWildcatBanking={scrolledPastWildcatBanking} />
                            <CarouselCard imageURL='/reputation.png' title={"A Reputational System Bootstrap"} text={"Good-faith engagement with Wildcat markets - without the oversight of a protocol dictating your terms - acts as a signal to identify responsible actors."} scrolledPastWildcatBanking={scrolledPastWildcatBanking} />
                        </Carousel>
                    </article>
                </div>
            </section>

            <section className='bg-bg-card text-black px-4 sm:px-8 pb-12'>
                <div className='max-w-7xl mx-auto'>
                    <h2 className='text-black text-center'>
                        Borrowers Making Use Of Wildcat
                    </h2>
                    <article ref={refWildcatBanking} className='flex flex-col'>
                        <Carousel>
                            <CarouselCard imageURL='/wintermute_logo.png' title={""} text={""} scrolledPastWildcatBanking={scrolledPastWildcatBanking} />
                        </Carousel>
                    </article>
                </div>
            </section>

            <section className='bg-[#E9E8DD] text-black px-4 sm:px-8'>
                <h2 className='text-center'>Transparency And Security By Design</h2>
                <div className='flex flex-col md:grid grid-cols-12 gap-4 max-w-3xl mx-auto pb-10'>
                    <div className='col-span-12 md:col-span-6 rounded-xl bg-bg-card p-6 md:h-[calc(315px+40px)]'>
                        <p>
                            Bringing credit agreements on-chain in a transparent manner is the entire point.
                            Wildcat grants users access to a detailed view of all of their market parameters
                            and logs for real-time monitoring.
                        </p>
                        <div className='items-center'>
                            <img
                                src='/transparency_mascot.png'
                                alt='logo'
                                width={211}
                                height={80}
                            />
                        </div>
                    </div>

                    <div
                        className='col-span-12 md:col-span-6 rounded-xl bg-bg-card p-6 md:h-[calc(315px+40px)] flex flex-col items-center justify-between'>
                        <h3>Code Reviews and Ongoing Protection By:</h3>
                        <img
                            src='/code4rena.png'
                            alt='logo'
                            width={150}
                            height={20}
                            className='py-6'
                        />
                        <img
                            src='/immunefi.png'
                            alt='logo'
                            width={150}
                            height={20}
                            className='py-6'
                        />
                        <img
                            src='/spherex.png'
                            alt='logo'
                            width={150}
                            height={20}
                            className='py-6'
                        />
                        <a href='https://wildcat-protocol.gitbook.io/wildcat/security-measures/code-security-reviews'
                           target="_blank">
                            <button className='bg-black text-white'>Read More</button>
                        </a>
                    </div>
                </div>
            </section>
            <section
                className='flex flex-col items-center justify-center bg-cover bg-no-repeat'
                style={{backgroundImage: "url(/flowers-bg.jpeg)"}}
            >
                <div className='max-w-7xl mx-auto px-8 pb-8 md:pb-12'>
                    <h2 className='text-white text-xl sm:text-2xl'>The Purpose</h2>
                    <h3 className='text-white text-3xl sm:text-5xl max-w-3xl pb-8 md:pb-12'>
                        Wildcat provides an unprecedented level of freedom for on-chain facilitation of credit.
                    </h3>

                    <div className='flex flex-col md:grid grid-cols-12 gap-8'>
                        <div className='col-span-6'>
                            <p className='mb-8 text-white'>
                                We have some utilitarian beliefs about how on-chain credit should work.
                            </p>
                            <a href='https://medium.com/@wildcatprotocol/the-wildcat-manifesto-db23d4b9484d'
                               target="_blank">
                                <button className='bg-white text-black'>
                                    Read our Manifesto
                                </button>
                            </a>
                        </div>
                        <div className='col-span-6 text-white'>
                            <p>We believe that people should be able to decide who to lend to or borrow from.</p>
                            <p>We believe that people should be able to decide credit terms that suit them.</p>
                            <p>We believe that people should be trusted with the freedom to contract.</p>
                            <p className={"pt-4"}>The Wildcat Protocol - banking, but worse.</p>
                        </div>
                    </div>
                </div>
            </section>

            <footer className='bg-black text-white'>
                <div className='max-w-7xl mx-auto px-8 py-12'>

                    <div className='flex flex-col md:grid grid-cols-12 gap-6'>

                        <div className='col-span-6'>
                            <img
                                src='/wildcat-logo-white-square.svg'
                                alt='logo'
                                height={83}
                                width={119}
                            />
                        </div>

                        <div className='col-span-6 grid grid-cols-12'>
                            <div className='col-span-6'>
                                <ul>
                                    <li className='py-3 font-bold'>Documentation</li>
                                    <li>
                                        <a
                                            href={
                                                "https://github.com/wildcat-finance/wildcat-whitepaper/blob/main/whitepaper_v1.0.pdf"
                                            }
                                            target={"_blank"}
                                            rel='noopener noreferrer'
                                        >
                                            Whitepaper
                                        </a>
                                    </li>
                                    <li>
                                        <a href={"https://wildcat-protocol.gitbook.io"} target={"_blank"}
                                           rel='noopener noreferrer'>
                                            Gitbook
                                        </a>
                                    </li>
                                    {/*<li>Media Kit</li>*/}
                                    <li>
                                        <a href={"https://wildcat-protocol.gitbook.io/wildcat/security-measures"}
                                           target={"_blank"} rel='noopener noreferrer'>
                                            Security
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className='col-span-6'>
                                <ul>
                                    <li className='py-3 font-bold'>Legal</li>
                                    <li>
                                        <a href={"https://wildcat-protocol.gitbook.io/wildcat/legal/protocol-ui-privacy-policy"}
                                           target={"_blank"} rel='noopener noreferrer'>
                                            Privacy Policy
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='max-w-7xl mx-auto px-8 pb-20'>
                    <div className='flex flex-row gap-6'>
                        <a href='https://t.me/+DcgjEiWaDpVkNTE8' target='_blank' rel='noreferrer noopener'>
                            <img src='/telegram.png' alt='logo' height={28} width={33}/>
                        </a>
                        <a href='https://www.linkedin.com/company/98564013' target='_blank' rel='noreferrer noopener'>
                            <img src='/linkedin.png' alt='logo' height={28} width={28}/>
                        </a>
                        <a href='https://medium.com/@wildcatprotocol' target='_blank' rel='noreferrer noopener'>
                            <img src='/medium.png' alt='logo' height={28} width={49}/>
                        </a>
                        <a href='https://x.com/wildcatfi' target='_blank' rel='noreferrer noopener'>
                            <img src='/x.png' alt='logo' height={28} width={28}/>
                        </a>
                    </div>
                </div>
            </footer>
        </main>
    );
}

/* eslint-disable @next/next/no-img-element */
"use client";

import ResponsiveVideo from "./components/responsiveVideo";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

export default function Home() {
  const { ref: refHowItWorks, inView: inViewHowItWorks } = useInView({
    /* Optional options */
    threshold: 0.8,
  });
  const { ref: refWildcatBanking, inView: inViewWildcatBanking } = useInView({
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
      <nav className='h-20 flex flex-row justify-between items-center bg-[#232323] px-8'>
        <div>
          <img
            src='/wildcat-logo-white.svg'
            alt='logo'
            width={150}
            height={51}
          />
        </div>
        <div className='flex flex-row items-center gap-6'>
          <a href='https://wildcat-protocol.gitbook.io' target="_blank" className='text-white'>
            Documentation
          </a>
          <button className='rounded-xl bg-white px-4 py-2 text-black min-h-6 text-sm'>
            App Soon™
          </button>
        </div>
      </nav>
      <section className='h-[calc(100vh-80px)] flex flex-col items-center justify-center gap-8 px-16 relative'>
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
            <button className='rounded-xl bg-white px-4 py-2 text-black min-h-6 text-sm'>
              App Soon™
            </button>
          </div>
        </div>
      </section>
      <section className='bg-bg-card text-black'>
        <h2 className='text-center'>How Wildcat Works</h2>
        <div
          ref={refHowItWorks}
          className='grid grid-cols-12 gap-3 px-8 pb-16 max-w-7xl mx-auto'
        >
          <div
            className={`col-span-6 md:col-span-3 opacity-0 ${
              scrolledPastHowItWorks ? "fade-in" : ""
            }`}
          >
            <h3 className='text-2xl border-y border-border-primary mb-4 font-extrabold'>
              1
            </h3>
            <h4>Borrower Onboards</h4>
            <p>
              Borrowers onboard with Wildcat and are granted permission to deploy 
              market controllers supporting their desired use-case.
            </p>
          </div>
          
          <div
            className={`col-span-6 md:col-span-3 opacity-0 animation-delay-300ms ${
              scrolledPastHowItWorks ? "fade-in" : ""
            }`}
          >
            <h3 className='text-2xl border-y border-border-primary mb-4 font-extrabold'>
              2
            </h3>
            <h4 className='font-extrabold'>Market Deployed</h4>
            <p>
              Borrowers specify the terms of their market at deployment, including APR, vault
              capacity, reserve ratio, withdrawal cycle length, and more.
            </p>
          </div>
          <div
            className={`col-span-6 md:col-span-3 opacity-0 animation-delay-600ms ${
              scrolledPastHowItWorks ? "fade-in" : ""
            }`}
          >
            <h3 className='text-2xl border-y border-border-primary mb-4 font-extrabold'>
              3
            </h3>
            <h4 className='font-extrabold'>Lenders Approved</h4>
            <p>
              Borrowers determine which lender addresses can interact with their markets,
              allowing them to deposit assets in exchange for market tokens.
            </p>
          </div>
          <div
            className={`col-span-6 md:col-span-3 opacity-0 animation-delay-900ms ${
              scrolledPastHowItWorks ? "fade-in" : ""
            }`}
          >
            <h3 className='text-2xl border-y border-border-primary mb-4 font-extrabold'>
              4
            </h3>
            <h4>The Rest Is Up To You</h4>
            <p>
              Market tokens are rebasing 1:1 against the underlying, freely transferable
              and interest-bearing (and we can tell where the yield comes from for a change). 
            </p>
          </div>
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
          <h2 className='text-5xl text-black text-center py-6 pt-20'>
            Interested?
          </h2>
          <span className='text-black text-center py-6'>Find out more as a:</span>
          <div className='flex flex-row gap-6 items-center justify-center pb-20'>
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
      <section className='bg-bg-card text-black px-8 pb-12'>
        <div className='max-w-7xl mx-auto'>
          <h2 className='text-black text-center'>
            A Simple Premise With Countless Benefits
          </h2>
          <div
            ref={refWildcatBanking}
            className='flex flex-col md:grid grid-cols-12 gap-8'
          >
            <div
              className={`col-span-4 opacity-0 ${
                scrolledPastWildcatBanking ? "fade-in" : ""
              }`}
            >
              <img
                className='mb-6'
                src='/wildcat-symbol.png'
                alt='logo'
                width={50}
                height={80}
              />
              <h4>Flexible Borrowing for Arbitrary Purposes</h4>
              <p>
                Whether you are a market maker raising inventory, a fund seeking exposure or
                a DAO diversifying their assets, Wildcat markets can fit your purpose.
              </p>
            </div>
            <div
              className={`col-span-4 opacity-0 animation-delay-300ms ${
                scrolledPastWildcatBanking ? "fade-in" : ""
              }`}
            >
              <img
                className='mb-6'
                src='/wildcat-symbol.png'
                alt='logo'
                width={50}
                height={80}
              />
              <h4>Increase Back Office Efficiency</h4>
              <p>
              By bringing flexible-term loans on-chain, you reduce time dealing with third parties,
              reducing back office costs and increasing capacity to manage more loans.
              </p>
            </div>
            <div
              className={`col-span-4 opacity-0 animation-delay-600ms ${
                scrolledPastWildcatBanking ? "fade-in" : ""
              }`}
            >
              <img
                className='mb-6'
                src='/wildcat-symbol.png'
                alt='logo'
                width={50}
                height={80}
              />
              <h4>Simple Recording of On-Chain Debt</h4>
              <p>
                The rebasing nature of Wildcat market tokens allows lenders to know exactly how much
                they are owed without worrying about redemption exchange rates.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className='bg-[#E9E8DD] text-black px-8'>
        <h2 className='text-center'>Transparency And Security As Core Values</h2>
        <div className='flex flex-col md:grid grid-cols-12 gap-4 max-w-3xl mx-auto pb-10'>
          <div className='col-span-12 md:col-span-6 rounded-xl bg-bg-card p-6 md:h-[calc(315px+40px)]'>
            <p>
              Bringing credit agreements on-chain in a transparent manner is the entire point.
              Wildcat grants users access to a detailed view of each of their market parameters
              and transaction logs to monitor their status in real time.
            </p>
          </div>
          <div className='col-span-12 md:col-span-6 rounded-xl bg-bg-card p-6 md:h-[calc(315px+40px)] flex flex-col items-center justify-between'>
            <h3>Security Support Provided By:</h3>
            <img
              src='/code4rena.png'
              alt='logo'
              width={200}
              height={39}
              className='py-6'
            />
            <a href='https://wildcat-protocol.gitbook.io/wildcat/security-measures/code-security-reviews' target="_blank">
              <button className='bg-black text-white'>Read Reports</button>
            </a>
          </div>
        </div>
      </section>
      <section
        className='flex flex-col items-center justify-center bg-cover bg-no-repeat'
        style={{ backgroundImage: "url(/flowers-bg.jpeg)" }}
      >
        <div className='max-w-7xl mx-auto px-8 pb-8 md:pb-12'>
          <h2 className='text-white text-2xl'>The Purpose</h2>
          <h3 className='text-white text-5xl max-w-2xl pb-8 md:pb-12'>
            Wildcat provides an unprecedented level of freedom for on-chain facilitation of credit.
          </h3>

          <div className='flex flex-col md:grid grid-cols-12 gap-8'>
            <div className='col-span-6'>
              <p className='mb-8 text-white'>
                We have some utilitarian beliefs about how on-chain credit should work.
              </p>
              <a href='https://medium.com/@wildcatprotocol/the-wildcat-manifesto-db23d4b9484d' target="_blank">
                <button className='bg-white text-black'>
                  Read our Manifesto
                </button>
              </a>
            </div>
            <div className='col-span-6'>
              <p className={"text-white"}>
               We believe that people should be able to decide who to lend to or borrow from.
              </p>
              <p className={"text-white"}>
               We believe that people should be able to decide credit terms that suit them.
              </p>
              <p className={"text-white"}>
                We believe that people should be trusted with the freedom to transact.
              </p>
              <br>
              </br>
              <p className={"text-white"}>
                The Wildcat Protocol - banking, but worse.
              </p>
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
              <div className='col-span-4'>
                <ul>
                  <li className='py-3 font-bold'>Documentation</li>
                  <li>
                    <a
                      href={
                        "https://github.com/wildcat-finance/wildcat-whitepaper"
                      }
                      target={"_blank"}
                      rel='noopener noreferrer'
                    >
                      Whitepaper
                    </a>
                  </li>
                  <li>
                    <a href={"https://wildcat-protocol.gitbook.io"} target={"_blank"} rel='noopener noreferrer'>
                      Gitbook
                    </a>
                  </li>
                  {/*<li>Media Kit</li>*/}
                  <li>
                    <a href={"https://wildcat-protocol.gitbook.io/wildcat/security-measures"} target={"_blank"} rel='noopener noreferrer'>
                      Security
                    </a>
                  </li>
                </ul>
              </div>
              <div className='col-span-4'>
                <ul>
                  <li className='py-3 font-bold'>Legal</li>
                  <li>
                    <a href={"https://wildcat-protocol.gitbook.io/wildcat/legal/protocol-ui-privacy-policy"} target={"_blank"} rel='noopener noreferrer'>
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href={"Coming Soon"} target={"_blank"} rel='noopener noreferrer'>
                      Service Agreement
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
              <img src='/telegram.png' alt='logo' height={28} width={33} />
            </a>
            <a href='https://www.linkedin.com/company/98564013' target='_blank' rel='noreferrer noopener'>
              <img src='/linkedin.png' alt='logo' height={28} width={28} />
            </a>
            <a href='https://medium.com/@wildcatprotocol' target='_blank' rel='noreferrer noopener'>
              <img src='/medium.png' alt='logo' height={28} width={49} />
            </a>
            <a
              href='https://x.com/wildcatfi'
              target='_blank'
              rel='noreferrer noopener'
            >
              <img src='/x.png' alt='logo' height={28} width={28} />
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}

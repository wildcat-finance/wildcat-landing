"use client";

import Image from "next/image";
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
          <Image src='/logo.png' alt='logo' width={150} height={51} />
        </div>
        <div className='flex flex-row items-center gap-6'>
          <a href='#' className='text-white'>
            Docs
          </a>
          <button className='rounded-xl bg-white px-4 py-2 text-black min-h-6 text-sm'>
            Launch app
          </button>
        </div>
      </nav>
      <section className='h-[calc(100vh-80px)] flex flex-col items-center justify-center gap-8 px-16'>
        <video
          className='absolute inset-x-0 top-20 bottom-0 object-cover h-[calc(100%-80px)] min-w-full'
          autoPlay
          muted
          loop
        >
          <source src='/WILDCAT_TOP_BANNER_1080.mp4' type='video/mp4' />
          <source src='/WILDCAT_TOP_BANNER_1080.webm' type='video/webm' />
        </video>
        <div className='z-10 flex flex-col gap-8'>
          <h1 className='text-3xl md:text-5xl/[50px] text-center'>
            Unlocking flexible fixed-rate credit, on-chain.
          </h1>
          <p className='text-center'>
            Wildcat is a new DeFi lending protocol that empowers borrowsers to
            set their own terms while offering the flexibility to borrow any
            ERC20 token they require.
          </p>

          <div className='flex flex-col md:flex-row gap-4 items-center justify-center'>
            <button className='rounded-xl bg-white px-4 py-2 text-black min-h-6 text-sm'>
              Become a Borrower
            </button>
            <button className='rounded-xl bg-white px-4 py-2 text-black min-h-6 text-sm'>
              Launch app
            </button>
          </div>
        </div>
      </section>
      <section className='bg-white text-black'>
        <h2 className='text-2xl py-10 md:py-20 text-center font-black'>
          How it works
        </h2>
        <div
          ref={refHowItWorks}
          className='grid grid-cols-12 gap-3 px-8 pb-16 max-w-7xl mx-auto'
        >
          <div
            className={`col-span-6 md:col-span-3 opacity-0 ${
              scrolledPastHowItWorks ? "fade-in" : ""
            }`}
          >
            <h3 className='text-2xl border-y border-[#c8c7bf] mb-4 font-black'>
              1
            </h3>
            <h4 className='font-extrabold'>Create your vault</h4>
            <p>
              Whitelisted borrowers can create custom vaults for any ERC20 token
              they desire.
            </p>
          </div>
          <div
            className={`col-span-6 md:col-span-3 opacity-0 animation-delay-1s ${
              scrolledPastHowItWorks ? "fade-in" : ""
            }`}
          >
            <h3 className='text-2xl border-y border-[#c8c7bf] mb-4 font-black'>
              2
            </h3>
            <h4 className='font-extrabold'>Choose your terms</h4>
            <p>
              Specify your vault’s terms at deployment, including APR, vault
              capacity, reserve ratio, withdrawal cycles, and more.
            </p>
          </div>
          <div
            className={`col-span-6 md:col-span-3 opacity-0 animation-delay-2s ${
              scrolledPastHowItWorks ? "fade-in" : ""
            }`}
          >
            <h3 className='text-2xl border-y border-[#c8c7bf] mb-4 font-black'>
              3
            </h3>
            <h4 className='font-extrabold'>Lend and earn securely</h4>
            <p>
              Borrowers can whitelist lenders to interact with their vaults,
              allowing them to lend on-chain.
            </p>
          </div>
          <div
            className={`col-span-6 md:col-span-3 opacity-0 animation-delay-3s ${
              scrolledPastHowItWorks ? "fade-in" : ""
            }`}
          >
            <h3 className='text-2xl border-y border-[#c8c7bf] mb-4 font-black'>
              4
            </h3>
            <h4 className='font-extrabold'>Adjust your Vault’s conditions </h4>
            <p>
              Borrowers can change open vault’s APRs based on their needs,
              automatically impacting the reserve ratio.
            </p>
          </div>
        </div>
      </section>
      <section
        className='flex flex-col items-center justify-center bg-cover bg-no-repeat'
        style={{ backgroundImage: "url(/pink-bg.jpeg)" }}
      >
        <h2 className='text-5xl text-black text-center py-6 pt-20'>
          Interested in Wildcat?
        </h2>
        <span className='text-black text-center py-6'>Apply as</span>
        <div className='flex flex-row gap-6 items-center justify-center pb-20'>
          <button className='bg-black rounded-full w-[158px] py-2'>
            Borrower
          </button>
          <button className='bg-black rounded-full w-[158px] py-2'>
            Lender
          </button>
        </div>
      </section>
      <section className='bg-white text-black py-12 px-8'>
        <div className='max-w-7xl mx-auto'>
          <h2 className='text-5xl text-black text-center pb-12'>
            Wildcat banking: a historical tool for a modern age
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
              <Image
                className='mb-6'
                src='/wildcat-symbol.png'
                alt='logo'
                width={50}
                height={80}
              />
              <h3>Flexible Borrowing for Liquidity Providers</h3>
              <p>
                Empower liquidity provider to access inventory on-chain, with
                minimal back-office coordination needs.
              </p>
            </div>
            <div
              className={`col-span-4 opacity-0 animation-delay-1s ${
                scrolledPastWildcatBanking ? "fade-in" : ""
              }`}
            >
              <Image
                className='mb-6'
                src='/wildcat-symbol.png'
                alt='logo'
                width={50}
                height={80}
              />
              <h3>Flexible Borrowing for Liquidity Providers</h3>
              <p>
                Empower liquidity provider to access inventory on-chain, with
                minimal back-office coordination needs.
              </p>
            </div>
            <div
              className={`col-span-4 opacity-0 animation-delay-2s ${
                scrolledPastWildcatBanking ? "fade-in" : ""
              }`}
            >
              <Image
                className='mb-6'
                src='/wildcat-symbol.png'
                alt='logo'
                width={50}
                height={80}
              />
              <h3>Flexible Borrowing for Liquidity Providers</h3>
              <p>
                Empower liquidity provider to access inventory on-chain, with
                minimal back-office coordination needs.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className='bg-[#E9E8DD] text-black px-8'>
        <h2 className='text-center text-2xl py-10 md:py-20'>
          Transparency as a core value
        </h2>
        <div className='flex flex-col md:grid grid-cols-12 gap-4 max-w-3xl mx-auto pb-10'>
          <div className='col-span-12 md:col-span-6 rounded-xl bg-white p-6 md:h-[calc(315px+40px)]'>
            <p>
              Borrowers and Lenders can visualize each Vault’s transaction log,
              providing a transparent and comprehensive record of all activities
              and interactions.
            </p>
          </div>
          <div className='col-span-12 md:col-span-6 rounded-xl bg-white p-6 md:h-[calc(315px+40px)] flex flex-col items-center justify-between'>
            <span>Audited by</span>
            <Image
              src='/code4rena.png'
              alt='logo'
              width={200}
              height={39}
              className='py-6'
            />
            <button className='bg-black rounded-full w-[158px] py-2 text-white'>
              Read Reports
            </button>
          </div>
        </div>
      </section>
      <section
        className='flex flex-col items-center justify-center bg-cover bg-no-repeat'
        style={{ backgroundImage: "url(/flowers-bg.jpeg)" }}
      >
        <div className='max-w-7xl mx-auto pt-12 pb-20 px-8'>
          <h3 className='font-black text-2xl'>Manifesto</h3>
          <h2 className='font-extrabold text-5xl py-12'>
            Wildcat addresses the gaps of existing lending protocols
          </h2>

          <div className='flex flex-col md:grid grid-cols-12 gap-8'>
            <div className='col-span-6'>
              <p className='mb-8'>
                Freeing borrowers to choose their desired underlying asset,
                interest rate methodology, and without the use of middlemen.
              </p>
              <button className='bg-white rounded-full w-[158px] py-2 text-black text-sm'>
                Read our Manifesto
              </button>
            </div>
            <div className='col-span-6'>
              <p>
                Wildcat is primarily aimed at organizations wishing to borrow
                funds in the medium-term, but can reasonably be extended to
                parties such as DeFi protocols wishing to raise funds without
                the consequences of selling a native-token filled treasury into
                the ground to do so. As a protocol that is - in its current form
                - reliant upon counterparty selection by borrowers, Wildcat is
                fundamentally permissioned in nature.
              </p>
            </div>
          </div>
        </div>
      </section>
      <footer className='bg-[#232323] text-white'>
        <div className='max-w-7xl mx-auto px-8 py-12'>
          <div className='flex flex-col md:grid grid-cols-12 gap-6'>
            <div className='col-span-6'>
              <Image
                src='/wildcat-logo-white.png'
                alt='logo'
                height={83}
                width={119}
              />
            </div>
            <div className='col-span-6 grid grid-cols-12'>
              <div className='col-span-4'>
                <ul>
                  <li className='py-3 font-black'>Site Map</li>
                  <li className='py-3'>Lend</li>
                  <li className='py-3'>Borrow</li>
                  <li className='py-3'>Use Cases</li>
                  <li className='py-3'>Docs</li>
                  <li className='py-3'>Blog</li>
                  <li className='py-3'>About</li>
                </ul>
              </div>
              <div className='col-span-4'>
                <ul>
                  <li className='py-3 font-black'>Docs</li>
                  <li className='py-3'>Whitepaper</li>
                  <li className='py-3'>GitBook</li>
                  <li className='py-3'>Media Kit</li>
                  <li className='py-3'>Audits</li>
                </ul>
              </div>
              <div className='col-span-4'>
                <ul>
                  <li className='py-3 font-black'>Legal</li>
                  <li className='py-3'>Privacy Policy</li>
                  <li className='py-3'>Legal Notice</li>
                  <li className='py-3'>Terms of Use</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className='max-w-7xl mx-auto px-8 pb-20'>
          <div className='flex flex-row gap-6'>
            <a href='#' target='_blank' rel='noreferrer noopener'>
              <Image src='/telegram.png' alt='logo' height={28} width={33} />
            </a>
            <a href='#' target='_blank' rel='noreferrer noopener'>
              <Image src='/linkedin.png' alt='logo' height={28} width={28} />
            </a>
            <a href='#' target='_blank' rel='noreferrer noopener'>
              <Image src='/medium.png' alt='logo' height={28} width={49} />
            </a>
            <a href='#' target='_blank' rel='noreferrer noopener'>
              <Image src='/x.png' alt='logo' height={28} width={28} />
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}

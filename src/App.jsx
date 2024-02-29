import React, { useRef, useEffect } from 'react'
import { motion, animate, stagger } from 'framer-motion'
import SmoothScroll from './components/SmoothScroll'
import Project from './components/Project'
import Footer from './components/Footer'
import { useInView } from 'framer-motion'

export default function App() {

	const helloSectRef = useRef()
	const heroSectRef = useRef()
	const contactStarContainerRef = useRef()


	// Hero
	useEffect(() => {
		animate('.hero-star-container', { opacity: 1 }, { delay: stagger(0.13), duration: 1, stiffness: 100 })
		animate('.hero-letter', { opacity: 1 }, { delay: stagger(0.1), duration: 1, stiffness: 100 })
		animate('.hero-subtitle', { opacity: 1, y: 0 }, { delay: 1, duration: 1, stiffness: 100 })
	}, [])

	let stars = [
		{ 'top': '26', 'left': '43' },
		{ 'top': '22', 'left': '70' },
		{ 'top': '15', 'left': '50' },
		{ 'top': '32', 'left': '30' },

		{ 'top': '78', 'left': '70' },
		{ 'top': '85', 'left': '55' },
		{ 'top': '72', 'left': '45' },
		{ 'top': '75', 'left': '25' },
	]

	let wojtekoLetters = 'wojteko.dev'.split('')



	return (
		<>
			{/* TODO fix smooth scrolling <SmoothScroll> */}
			<section ref={heroSectRef} className='hero-sect'>
				{stars.map((star, index) => {
					return <motion.div
						key={index}
						initial={{ opacity: 0 }}
						drag dragConstraints={heroSectRef} dragTransition={{ bounceStiffness: 200, bounceDamping: 15 }}
						whileTap={{ cursor: "grabbing" }}
						style={{ top: `${star.top}%`, left: `${star.left}%` }}
						className='hero-star-container'>
						<svg className='hero-star' viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/motion.svg">
							<path d="M89.9318 6.12863C94.1569 -2.04288 105.843 -2.04288 110.068 6.12863L136.973 58.1644C138.051 60.2496 139.75 61.9486 141.836 63.0268L193.871 89.9318C202.043 94.1569 202.043 105.843 193.871 110.068L141.836 136.973C139.75 138.051 138.051 139.75 136.973 141.836L110.068 193.871C105.843 202.043 94.1569 202.043 89.9318 193.871L63.0268 141.836C61.9486 139.75 60.2496 138.051 58.1644 136.973L6.12863 110.068C-2.04288 105.843 -2.04288 94.1569 6.12863 89.9318L58.1644 63.0268C60.2496 61.9486 61.9486 60.2496 63.0268 58.1644L89.9318 6.12863Z" fill="#0C4EF6" />
						</svg>
					</motion.div>
				})}
				<h1 className='hero-title'>{wojtekoLetters.map(letter => {
					return <motion.span initial={{ opacity: 0 }} className='hero-letter'>{letter}</motion.span>
				})}</h1>
				<motion.p initial={{ y: 50, opacity: 0 }} className='hero-subtitle'>Front-end developer</motion.p>
			</section>
			<section ref={helloSectRef} className='hello-sect'>
				<h1 style={{ translate: `0% 0%` }} className='hello-text'>
					<p>Cześć! 👋</p>
					<p>Nazywam się Wojciech Michalski.</p>
					<p>Od 4 lat pasjonuje się stronami internetowymi.</p>
				</h1>
			</section>

			<Project title="Gruba Meble" desc="Mój pierwszy poważniejszy projekt. Strona dla lokalnego biznesu mebli na wymiar." pictureLeft={true} link="http://grubameble.pl/" img="/images/projects/grubaMeble.webp" />
			<Project title="Kariuwuga" desc="Strona internetowa dla bota na Discorda. Jeden z moich prywatnych projektów." pictureLeft={false} link="https://kariuwuga.xyz/" img="/images/projects/kariuwuga.webp" />

			<section className='contact-sect'>
				<div className='contact-text'>
					<h1 className='contact-heading'>Kontakt</h1>
					<a className='contact-link' href="mailto:me@wojteko.dev">
						<img className='contact-icon' src="/icons/mail.svg" alt="M" /> me@wojteko.dev
					</a>
				</div>
				<div ref={contactStarContainerRef} className='contact-star-container'>
					{stars.map((star, index) => {
						return <motion.div
							key={index}
							drag dragConstraints={contactStarContainerRef} dragTransition={{ bounceStiffness: 200, bounceDamping: 15 }}
							whileTap={{ cursor: "grabbing" }}
							style={{ top: `${star.top}%`, left: `${star.left}%` }}
							className='hero-star-container'>
							<svg className='hero-star' viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/motion.svg">
								<path d="M89.9318 6.12863C94.1569 -2.04288 105.843 -2.04288 110.068 6.12863L136.973 58.1644C138.051 60.2496 139.75 61.9486 141.836 63.0268L193.871 89.9318C202.043 94.1569 202.043 105.843 193.871 110.068L141.836 136.973C139.75 138.051 138.051 139.75 136.973 141.836L110.068 193.871C105.843 202.043 94.1569 202.043 89.9318 193.871L63.0268 141.836C61.9486 139.75 60.2496 138.051 58.1644 136.973L6.12863 110.068C-2.04288 105.843 -2.04288 94.1569 6.12863 89.9318L58.1644 63.0268C60.2496 61.9486 61.9486 60.2496 63.0268 58.1644L89.9318 6.12863Z" fill="#0C4EF6" />
							</svg>
						</motion.div>
					})}
				</div>

			</section>
			<Footer />
		{/* </SmoothScroll> */}
		</>
	)
}

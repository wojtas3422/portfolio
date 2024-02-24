import React, { useRef, useEffect } from 'react'
import { motion, animate, stagger, useMotionValueEvent, useScroll } from 'framer-motion'
import SmoothScroll from './components/SmoothScroll'

export default function App() {

	// Hero
	const heroSectRef = useRef(null)
	const helloSectRef = useRef(null)

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


	// Hello

	return (
		<>
			<SmoothScroll>
				<section ref={heroSectRef} className='hero-sect'>
					{stars.map((star, index) => {
						return <motion.div
							key={index}
							initial={{ opacity: 0 }}
							drag dragConstraints={heroSectRef} dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
							style={{ top: `${star.top}%`, left: `${star.left}%` }}
							className='hero-star-container'>
							<img className='hero-star' src='/icons/star.svg' drag dragConstraints={heroSectRef} />
						</motion.div>
					})}
					<h1 className='hero-title'>{wojtekoLetters.map(letter => {
						return <motion.span initial={{ opacity: 0 }} className='hero-letter'>{letter}</motion.span>
					})}</h1>
					<motion.p initial={{ y: 50, opacity: 0 }} className='hero-subtitle'>Front-end developer</motion.p>
					<motion.img className='hero-arrow' src='/icons/arrow.svg' />
				</section>
				<section ref={helloSectRef} className='hello-sect'>
					<h1 style={{ translate: `0% 0%` }} className='hello-text'>
						<p>Cześć! 👋</p>
						<p>Nazywam się Wojciech Michalski.</p>
						<p>Od 4 lat pasjonuje się stronami internetowymi.</p>
					</h1>
				</section>
			</SmoothScroll>
		</>
	)
}

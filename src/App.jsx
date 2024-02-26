import React, { useRef, useEffect } from 'react'
import { motion, animate, stagger } from 'framer-motion'
import SmoothScroll from './components/SmoothScroll'
import Project from './components/Project'
import Footer from './components/Footer'

export default function App() {

	// Hero
	const heroSectRef = useRef()
	const helloSectRef = useRef()

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

	// contact


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
					<motion.img onClick={() => helloSectRef.current.scroll} className='hero-arrow' src='/icons/arrow.svg' />
				</section>
				<section ref={helloSectRef} className='hello-sect'>
					<h1 style={{ translate: `0% 0%` }} className='hello-text'>
						<p>Cześć! 👋</p>
						<p>Nazywam się Wojciech Michalski.</p>
						<p>Od 4 lat pasjonuje się stronami internetowymi.</p>
					</h1>
				</section>

				<Project title="Gruba Meble" desc="Mój pierwszy poważniejszy projekt. Strona dla lokalnego biznesu mebli na wymiar." pictureLeft={true} link="http://grubameble.pl/" img="/images/projects/grubaMeble.webp" />
				<Project title="Kariuwuga" desc="Strona internetowa dla bota na Discorda. Jeden z moich prywatnych projektów z którego jestem bardziej zadowolony :)" pictureLeft={false} link="https://kariuwuga.xyz/" img="/images/projects/kariuwuga.webp" />

				<section className='contact-sect'>
					<div>
						
					</div>
					<div className='contact-text'>
						<h1 className='contact-heading'>Kontakt</h1>
						<a className='contact-link' href="mailto:me@wojteko.dev">
							<img className='contact-icon' src="/icons/mail.svg" alt="Mail: " /> me@wojteko.dev
						</a>
					</div>
				</section>

				<Footer />
			</SmoothScroll>
		</>
	)
}

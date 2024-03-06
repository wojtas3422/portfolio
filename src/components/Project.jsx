import '../sass/_project.scss'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function Project(props) {

    const imgRef = useRef(null)

    const imageInView = useInView(imgRef, { once: true })

    return (
        <section className='project-sect'>
            <div ref={imgRef} className={`project-container ${props.pictureLeft ? '' : 'project-image-right'}`}>
                <motion.div
                    style={{
                        transform: imageInView ? "none" : props.pictureLeft ? 'translateX(-200px)' : 'translateX(200px)',
                        opacity: imageInView ? 1 : 0,
                        transition: "all 0.9s ease 0.5s",
                        backgroundImage: `url(${props.img})`
                    }}
                    className={`project-img  ${props.pictureLeft ? '' : 'project-img-right'}`}
                />
            </div>
            <div className={`project-container ${props.pictureLeft ? 'project-text-left' : 'project-text-right'}`}>
                <h1 className='project-heading'>{props.title}</h1>
                <p className='project-desc'>{props.desc}</p>
                <a className='project-button' href={props.link} rel='noopener' target='_blank'>Odwiedź stronę</a>
            </div>
        </section>
    )
}

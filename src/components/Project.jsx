import '../sass/_project.scss'

export default function Project(props) {
    return (
        <section className='project-sect'>
            <div className={`project-container ${props.pictureLeft ? '' : 'project-image-right'}`}>
                <div className={`project-img  ${props.pictureLeft ? '' : 'project-img-right'}`} style={{ backgroundImage: `url(${props.img})` }} />
            </div>
            <div className={`project-container ${props.pictureLeft ? 'project-text-left' : 'project-text-right'}`}>
                <h1 className='project-heading'>{props.title}</h1>
                <p className='project-desc'>{props.desc}</p>
                <a className='project-button' href={props.link} rel='noopener' target='_blank'>Odwiedź stronę</a>
            </div>
        </section>
    )
}

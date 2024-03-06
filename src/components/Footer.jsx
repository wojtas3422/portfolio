import '../sass/_footer.scss'

export default function Footer() {
    return (
        <footer>
            <h1 className='footer-heading'>wojteko.dev</h1>
            <div className='footer-left'>
                <p className='footer-link' onClick={() => window.scrollTo({top: 0, left: 0, behavior: 'smooth'})}>Powrót na górę</p>
        </div>
        </footer >
    )
}

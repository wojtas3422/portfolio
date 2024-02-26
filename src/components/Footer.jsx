import '../sass/_footer.scss'

export default function Footer() {
    return (
        <footer>
            <h1 className='footer-heading'>wojteko.dev</h1>
            <div className='footer-left'>
                <p className='footer-link' onClick={() => window.scrollTo(0,0)}>Wróć na górę</p>
            </div>
        </footer>
    )
}

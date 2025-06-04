import logoImg from '../assets/quiz-logo.png'

export default function Header() {
    return <header>
        <img src={logoImg} alt='quiz logo'/>
        <h1>Quiz o fizyce jądrowej</h1>
    </header>
}
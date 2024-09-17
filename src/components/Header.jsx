import Logoimg from '../assets/quiz-logo.png';

export default function Header() {
  return (
    <header>
      <img src={Logoimg} alt="quiz logo" />
      <h1>React Quiz</h1>
    </header>
  );
}

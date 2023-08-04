import img from '../images/pngwing.com.png';
import cart from '../images/cart.png';
import '../../dist/output.css';

export default function Header() {
  return (
    <header className="flex flex-row justify-around pb-3">
      <img className="w-12 h-12" src={img} alt="golden goat img" />
      <h1 className="text-3xl text-amber-400">The Golden Goat</h1>
      <img className="w-12 h-12" src={cart} alt="cart icon" />
    </header>
  );
}

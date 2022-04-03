import logo from '../../logo.svg';
//import './style.css';
import { Link } from 'react-router-dom';
import Navbar from "../../components/Navbar";

export function HomePage() {
  return (
<div class="hero min-h-screen bg-base-200">
  <div class="hero-content flex-col lg:flex-row">
    <img src="https://api.lorem.space/image/movie?w=260&h=400" class="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 class="text-5xl font-bold">Box Office News!</h1>
      <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <label for="my-drawer-4" class="drawer-button btn btn-primary">Open drawer</label>
    </div>
  </div>
</div>
  );
}

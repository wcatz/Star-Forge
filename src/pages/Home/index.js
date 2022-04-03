import logo from '../../logo.svg';
//import './style.css';
import { Link } from 'react-router-dom';

export function HomePage() {
  return (
<div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    <img src="https://api.lorem.space/image/movie?w=260&h=400" className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">Box Office News!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <label htmlFor="my-drawer-4" className="drawer-button btn btn-primary">Open drawer</label>
    </div>
  </div>
</div>
  );
}

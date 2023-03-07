import { Hero } from '../../components/molecules/Hero/Hero';
import style from './Home.module.scss';

const Home = () => {
  return (
    <div className={style.Home}>
      <Hero />
    </div>
  );
};

export default Home;

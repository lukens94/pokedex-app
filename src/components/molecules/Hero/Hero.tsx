import heroImageMobile from '@/images/Hero_mobile.svg';
import Image from 'next/image';
import { useRouter } from 'next/router';

import { Button } from '../../atoms/Button/Button';
import style from './Hero.module.scss';

export const Hero = () => {
  const router = useRouter();
  return (
    <div className={style.Hero}>
      <div className={style['Hero__Image-desktop']}>
        <Image src={heroImageMobile} alt={'hero'} quality={100} object-fit={'cover'} />
      </div>
      <div className={style['Hero__Image-mobile']}>
        <Image src={heroImageMobile} alt={'hero'} quality={100} fill />
      </div>
      <div className={style.Hero__Text}>
        <h1>
          <b>Find</b> all your favorite <b>Pokemon</b>
        </h1>
        <h3>You can know the type of Pokemon, its strengths, disadvantages and abilities</h3>
        <Button text="See pokemons" handleClick={() => router.push('/pokedex')} />
      </div>
    </div>
  );
};

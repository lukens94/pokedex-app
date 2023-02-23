import Error404 from '@/images/404.svg';
import TeamRocket from '@/images/teamRocket.svg';
import Image from 'next/image';

import style from './Logo404.module.scss';

export const Logo404 = () => {
  return (
    <div className={style.Logo404}>
      <Image src={Error404} alt={'error-404'} quality={100} fill />
      <Image src={TeamRocket} alt={'team-rocket'} quality={100} fill />
    </div>
  );
};

import { useRouter } from 'next/router';

import { Button } from '../../components/atoms/Button/Button';
import { Logo404 } from '../../components/atoms/Logo404/Logo404';
import style from './404.module.scss';

const Custom404 = () => {
  const router = useRouter();

  const handleClick = () => {
    router.back();
  };
  return (
    <div className={style.ErrorPage}>
      <Logo404 />
      <h4 className={style.ErrorPage__text}>
        <span className={style['ErrorPage__text--white']}>The rocket team</span> has won this time.
      </h4>
      <Button text={'Return'} handleClick={handleClick} />
    </div>
  );
};

export default Custom404;

export const getStaticProps = async () => {
  return {
    props: {
      notFound: true,
    },
  };
};

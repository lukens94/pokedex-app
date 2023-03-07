import BurgerBtn from '@/images/BurgenBtn.svg';
import Logo from '@/images/Logo.svg';
import CloseBtn from '@/images/closeIcon.svg';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

import { NavbarItems } from '../../../utils/constants';
import style from './Header.module.scss';

export const Header = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(false);
  }, [router]);

  return (
    <header>
      <div className={style.Header}>
        <div className={style.Header__Logo}>
          <Image src={Logo} alt={'pokemon-logo'} quality={100} fill />
        </div>
        <ul className={style.Header__Navbar}>
          {NavbarItems.map((item) => (
            <li key={item.id}>
              <Link
                href={item.link}
                className={`${style['Header__NavbarLinkItem']} ${
                  router.pathname === item.link ? style['Header__NavbarLinkItem--active'] : ''
                }`}
              >
                <p>{item.text}</p>
              </Link>
            </li>
          ))}
        </ul>
        <Image
          src={BurgerBtn}
          onClick={() => setIsOpen(!isOpen)}
          className={style.Header__BurgerBtn}
          alt={'burger-button'}
          quality={100}
          width={20}
          height={20}
        />
      </div>
      <div
        className={`${style['Header__MenuMobile']} ${
          !isOpen ? style['Header__MenuMobile--closed'] : ''
        }`}
      >
        <Image
          src={CloseBtn}
          onClick={() => setIsOpen(!isOpen)}
          className={style.Header__MenuMobile__CloseBtn}
          alt={'burger-button'}
          quality={100}
          width={20}
          height={20}
        />
        <div className={style.Header__MenuMobile__Logo}>
          <Image src={Logo} alt={'pokemon-logo'} quality={100} fill />
        </div>
        <ul className={style.Header__MenuMobile__Navbar}>
          {NavbarItems.map((item) => (
            <li key={item.id}>
              <Link href={item.link} className={style.Header__MenuMobile__NavbarLinkItem}>
                <p>{item.text}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

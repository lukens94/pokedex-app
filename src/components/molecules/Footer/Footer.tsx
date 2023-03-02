import style from './Footer.module.scss';

export const Footer = () => {
  return (
    <div className={style.Footer}>
      <h5 className={style.Footer__Text}>Make with ❤️ from Lukens</h5>
      <a href="https://www.thewavestudio.it/" className={style.Footer__OurTeam}>
        Ours Team
      </a>
    </div>
  );
};

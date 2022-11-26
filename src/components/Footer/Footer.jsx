import { BsGithub } from 'react-icons/bs';
import { TbNoCopyright } from 'react-icons/tb';

import styles from './Footer.module.scss';

function Footer() {
  return (
    <footer className={styles.bar}>
      <a href='https://github.com/SeniorToster'>
        <BsGithub />
        GitHub
      </a>
      <a href='!#'>
        <TbNoCopyright />
        no Copyright {new Date().getFullYear()}
      </a>
    </footer>
  );
}

export default Footer;

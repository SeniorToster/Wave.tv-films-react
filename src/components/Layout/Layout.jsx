import Authorization from '../Authorization/Authorization';
import Container from './Container/Container';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import styles from './Layout.module.scss';

function Layout({ children }) {
  return (
    <>
      <Authorization />
      <Container>
        <Header />
        <div className={styles.wrapper}>{children}</div>
        <Footer />
      </Container>
    </>
  );
}

export default Layout;

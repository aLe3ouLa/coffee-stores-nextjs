import styles from './Hero.module.css';
import Image from 'next/image'

const Hero = (props) => {
  return (
    <section className={styles.container}>
      <div className={styles.metadata}>
        <h1 className={styles.title}>Coffee <span>connoisseur</span></h1>
        <p className={styles.subtitle}>Discover your local coffee shops!</p>
        <button className={styles.button} onClick={props.handleOnClick}>
          {props.buttonText}
        </button>
      </div>

      <Image src="/static/hero.jpg" alt="Hero image" width="500" height="300" />

    </section>
  );
};

export default Hero;

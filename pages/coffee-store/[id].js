import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import styles from '../../styles/CoffeeStore.module.css';

import COFFEE_STORES from "../../data/coffee-stores.json";

export function getStaticProps(context) {

  const coffeeStore = COFFEE_STORES.find(coffee => coffee.id.toString() === context.params.id) ?? COFFEE_STORES[0]

  return {
    props: {
      coffeeStore
    }
  }
}

export function getStaticPaths() {

  const paths = COFFEE_STORES.map(cafe => {
    return {
      params: { id: cafe.id.toString() }
    }
  })

  return {
    paths,
    fallback: true
  }
}

const CoffeeStore = (props) => {
  const router = useRouter();
  const { id } = router.query;

  if (router.isFallback) {
    return <p>Loading...</p>
  }

  const { name, address, neighbourhood, imgUrl } = props.coffeeStore;

  const handleLikeButton = () => {

  }

  return <div>
    <Head>
      <title>{name}</title>
    </Head>

    <div className={styles.details}>

      <div>
        <Link href="/">
          <a className={styles.link}>Back to home</a>
        </Link>
        <h1 className={styles.title}>{name}</h1>
        <Image className={styles.image} src={imgUrl} width={380} height={260} alt="Store" />
      </div>

      <div className={styles.metadata}>

        <div className={styles.iconWrapper}>
          <Image src="/static/icons/nearMe.svg" width="24" height="24" alt="Address of the coffee store" />
          <p className={styles.text}> {address}</p>
        </div>

        <div className={styles.iconWrapper}>
          <Image src="/static/icons/pin.svg" width="24" height="24" alt="neighbourhood of the coffee store" />
          <p className={styles.text}> {neighbourhood}</p>
        </div>

        <div className={styles.iconWrapper}>
          <Image src="/static/icons/heart.svg" width="24" height="24" alt="Likes of the coffee store" />
          <p className={styles.text}>1</p>
        </div>

        <button className={styles.button} onClick={handleLikeButton}>Like</button>
      </div>
    </div>

  </div>
}

export default CoffeeStore;

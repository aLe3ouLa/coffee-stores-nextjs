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

  return <div>
    <Head>
      <title>{name}</title>
    </Head>
    <Link href="/">
      <a>Back to home</a>
    </Link>
    <div className={styles.details}>

      <div>
        <h1>{name}</h1>
        <Image className={styles.image} src={imgUrl} width={280} height={160} alt="Store" />
      </div>

      <div className={styles.metadata}>

        <p>Address : {address}</p>
        <p>Neighboorhood : {neighbourhood}</p>

        <button>Like</button>
      </div>
    </div>

  </div>
}

export default CoffeeStore;

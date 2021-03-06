import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import styles from '../../styles/CoffeeStore.module.css';

import COFFEE_STORES from "../../data/coffee-stores.json";
import { fetchCoffeeStores, fetchImage } from "../../lib/coffee-stores";

const fetchData = async () => {
  try {
    const data = await fetchCoffeeStores();

    return data || COFFEE_STORES;
  }
  catch (error) {
    console.error(error)
  }
}

export async function getStaticProps(context) {

  const data = await fetchData() || COFFEE_STORES;

  const endData = await Promise.all(data.map(async (venue, key) => {
    const photos = await fetchImage();
    const imgUrl = photos[key]
    return {
      ...venue,
      imgUrl
    }
  }));

  const coffeeStore = endData.find(coffee => coffee.id.toString() === context.params.id) ?? COFFEE_STORES[0]

  return {
    props: {
      coffeeStore
    }
  }
}

export async function getStaticPaths() {

  const data = await fetchData() || COFFEE_STORES;

  const endData = await Promise.all(data.map(async (venue, key) => {
    const photos = await fetchImage();
    const imgUrl = photos[key]
    return {
      ...venue,
      imgUrl
    }
  }));

  const paths = endData.map(cafe => {
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

  const { name, location, imgUrl } = props.coffeeStore;

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
        <Image className={styles.image ?? 'https://images.unsplash.com/photo-1504753793650-d4a2b783c15e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80'} src={imgUrl} width={380} height={260} alt="Store" />
      </div>

      <div className={styles.metadata}>

        <div className={styles.iconWrapper}>
          <Image src="/static/icons/nearMe.svg" width="24" height="24" alt="Address of the coffee store" />
          <p className={styles.text}> {location.address}</p>
        </div>

        {location.neighborhood && <div className={styles.iconWrapper}>
          <Image src="/static/icons/pin.svg" width="24" height="24" alt="neighbourhood of the coffee store" />
          <p className={styles.text}> {location.neighborhood}</p>
        </div>}

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

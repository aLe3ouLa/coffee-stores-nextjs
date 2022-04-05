import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

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

  const { name, address } = props.coffeeStore;

  return <div>
    <Head>
      <title>{name}</title>
    </Head>
    <Link href="/">
      <a>Back to home</a>
    </Link>
    <p>Coffee store : {name}</p>
    <p>Coffee store : {address}</p>
    Coffee store page {id}</div>
}

export default CoffeeStore;

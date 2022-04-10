import Image from 'next/image';
import Link from 'next/link';

import styles from './Card.module.css'

const Card = ({ storeName, imgUrl, href }) => {
  return <Link href={href}>
    <a className={styles.wrapper}>
      <div className={styles.container}>
        <h2 className={styles.title}>{storeName}</h2>
        <Image className={styles.image} src={imgUrl || 'https://images.unsplash.com/photo-1504753793650-d4a2b783c15e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80'} width={280} height={160} alt="Store" />
      </div>
    </a>
  </Link>
}

export default Card;

import Image from 'next/image';
import Link from 'next/link';

import styles from './Card.module.css'

const Card = ({ storeName, imgUrl, href }) => {
  return <Link href={href}>
    <a className={styles.wrapper}>
      <div className={styles.container}>
        <h2 className={styles.title}>{storeName}</h2>
        <Image className={styles.image} src={imgUrl} width={280} height={160} alt="Store" />
      </div>
    </a>
  </Link>
}

export default Card;

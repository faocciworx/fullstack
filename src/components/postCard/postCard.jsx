import React from 'react'
import Image from 'next/image';
import styles from "./postCard.module.css";
import Link from 'next/link'

const PostCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.imgContainer}>
            <Image src="https://upload.wikimedia.org/wikipedia/en/9/9d/Link_%28Hyrule_Historia%29.png" alt="" fill className={styles.img}/>
        </div>
        <span className={styles.date}>01.01.2024</span>
      </div>
      <div className={styles.bottom}>
        <h1 className={styles.title}>Title</h1>
        <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis nesciunt velit reprehenderit fugiat quaerat, quas est iure magnam asperiores quos.</p>
        <Link className={styles.link} href="/blog/post">Read More</Link>
      </div>
    </div>
  )
}

export default PostCard

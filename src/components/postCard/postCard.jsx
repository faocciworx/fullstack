import React from 'react'
import Image from 'next/image';
import styles from "./postCard.module.css";
import Link from 'next/link'

const PostCard = ({post}) => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.imgContainer}>
            <Image src="https://upload.wikimedia.org/wikipedia/en/9/9d/Link_%28Hyrule_Historia%29.png" alt="" fill className={styles.img}/>
        </div>
        <span className={styles.date}>01.01.2024</span>
      </div>
      <div className={styles.bottom}>
        <h1 className={styles.title}>{post.title}</h1>
        <p className={styles.desc}>{post.body}</p>
        <Link className={styles.link} href={`/blog/${post.userId}`}>Read More</Link>
      </div>
    </div>
  )
}

export default PostCard

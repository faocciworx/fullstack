import React from 'react';
import styles from "./singlePost.module.css";
import Image from 'next/image';


const SinglePostPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.imgContainer}>
            <Image 
            className={styles.img}
            src="https://upload.wikimedia.org/wikipedia/en/9/9d/Link_%28Hyrule_Historia%29.png" alt="" fill />
            </div>
            <div className={styles.textContainer}>
                <h1 className={styles.title}>Title</h1>
                <div className={styles.detail}>
                <Image 
                className={styles.avatar}
                src="https://upload.wikimedia.org/wikipedia/en/9/9d/Link_%28Hyrule_Historia%29.png" alt="" width={50} height={50}/>
                <div className={styles.detailText}>
                    <span className={styles.detailTitle}>Author</span>
                    <span className={styles.detailValue}>Terry Jefferson</span>
                </div>

                <div className={styles.detailText}>
                    <span className={styles.detailTitle}>Publshed</span>
                    <span className={styles.detailValue}>01-24-19</span>
                </div>

                </div>
                <div className={styles.content}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere accusantium voluptas quia minus quod eveniet enim possimus hic. </div>
            </div>
        </div>
        
    )
}

export default SinglePostPage

import React, { Suspense } from 'react';
import styles from "./singlePost.module.css";
import Image from 'next/image';
import PostUser from '@/components/postUser/postUser';
import { getPost } from '@/lib/data';

// FETCH DATA WITH AN API
// const getData = async (slug) => {
//     const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`) // If you dont want to refresh your data every 3600 second you can cancel the next revalite
//     if(!res.ok){
//         throw new Error('Something went wrong')
//     }
//     return res.json()
// }


const SinglePostPage = async ({params}) => {
    const {slug} = params;

    // FETCH DATA WITH AN API
    // const post = await getData(slug);

    // FETCH DATA WITHOUT AN API
    const post = await getPost(slug);

    return (
        <div className={styles.container}>
            <div className={styles.imgContainer}>
            <Image 
            className={styles.img}
            src="https://upload.wikimedia.org/wikipedia/en/9/9d/Link_%28Hyrule_Historia%29.png" alt="" fill />
            </div>
            <div className={styles.textContainer}>
                <h1 className={styles.title}>{post.title}</h1>
                <div className={styles.detail}>
                <Image 
                className={styles.avatar}
                src="https://upload.wikimedia.org/wikipedia/en/9/9d/Link_%28Hyrule_Historia%29.png" alt="" width={50} height={50}/>
                    {post && (
                        <Suspense fallback={<div>Loading...</div>}>
                        <PostUser userId={post.userId} />
                        </Suspense>
                    )}    
                <div className={styles.detailText}>
                    <span className={styles.detailTitle}>Publshed</span>
                    <span className={styles.detailValue}>01-24-19</span>
                </div>

                </div>
                <div className={styles.content}>{post.body}</div>
            </div>
        </div>
        
    )
}

export default SinglePostPage

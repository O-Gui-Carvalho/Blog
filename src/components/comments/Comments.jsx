import Link from 'next/link';
import styles from './comments.module.css'
import Image from 'next/image';

const Comments = () => {
    const status = "authenticated";
  return (
    <div className={styles.container}>
        <h1 className={styles.title}>Comments</h1>
        {status === "authenticated" ? (
            <div className={styles.write}>
                <textarea placeholder='write a comment...' className={styles.input} />
                <button className={styles.button}>Send</button>
            </div>
        ) : (
            <Link href="/login">Login to write a comment</Link>
        )}
        <div className={styles.comments}>
            <div className={styles.comment}>
                <div className={styles.user}>
                    <Image src="/p1.jpeg" alt='Profile Picture' width={50} height={50} className={styles.image}/>
                    <div className={styles.userInfo}>
                        <span className={styles.username}>John Doe</span>
                        <span className={styles.date}>01.01.2025</span>
                    </div>
                </div>
                <p className={styles.desc}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, laudantium qui dolorum harum animi ut quis rerum totam. Velit, quasi eum quidem commodi voluptas quibusdam nulla iure quis officiis. Omnis.
                </p>
            </div>
        </div>
    </div>
  )
}

export default Comments
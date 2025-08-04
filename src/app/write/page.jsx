'use client'

import { useState } from 'react';
import styles from './writePage.module.css';
import Image from 'next/image';
import ReactQuill from 'react-quill';
import "react-quill/dist/quill.bubble.css";

const WritePage = () => {
    const [open, setOpen] = useState(false);

  return (
    <div className={styles.container}>
        <input type="text" placeholder='Title'/>
        <div className={styles.editor}>
            <button className={styles.button}>
                <Image src="/plus.png" alt="" width={16} height={16}/>
            </button>
            {open && (
                <div className={styles.add}>
                    <button className={styles.addButton}>
                        <Image src="/image.png" alt='Add image' width={16} height={16}/>
                    </button>
                    <button className={styles.addButton}>
                        <Image src="/external.png" alt='Add external' width={16} height={16}/>
                    </button>
                    <button className={styles.addButton}>
                        <Image src="/video.png" alt='Add video' width={16} height={16}/>
                    </button>
                </div>
            )};
            <ReactQuill theme='bubble'/>
        </div>
    </div>
  )
}

export default WritePage
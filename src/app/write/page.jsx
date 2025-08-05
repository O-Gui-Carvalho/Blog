'use client'

import { useState } from 'react';
import styles from './writePage.module.css';
import Image from 'next/image';
import ReactQuill from 'react-quill-new';
import 'react-quill-new/dist/quill.snow.css';

const WritePage = () => {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState("");

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
            <ReactQuill theme="bubble" value={value} onChange={setValue} placeholder='Tell your story...'/>
        </div>
    </div>
  )
}

export default WritePage
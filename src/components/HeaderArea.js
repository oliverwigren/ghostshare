import React from "react";
import styles from '../style/HeaderArea.module.css'
import Links from './Links';

function HeaderArea () {
    return (
        <div className={styles.div}>
            <h1 className={styles.h1}>GHOSTSHARE</h1>
            <Links />
        </div>
    )
}

export default HeaderArea;
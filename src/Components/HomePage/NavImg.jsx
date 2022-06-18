import React from "react";
import { Link } from "react-router-dom";
import data from "./data";
import styles from './navimg.module.css'
 

export const NavImg = () => {
    return (
        <div> 
        <div className={styles.cardContainer}>
            { data.map(item => (
                    // <Link to={ item.url }>
                <div className={styles.card}>
                        <img src={ item.img } alt="" />
                        <div>
                    <p className={styles.title}>{ item.title }</p>
                </div>
                </div>
                 
                    // </Link>
                     
                    
            )) }
          
        </div>
           <img src="https://raw.githubusercontent.com/durgeshrai633/stylecraze.com/main/img/faceinsta.jpg" alt="" />
           </div>
    );
};


import React from 'react'
import styles from './Body.module.css'
import calculator from '../svg/calculator.svg'
import cloud from '../svg/cloud.svg'
import clock from '../svg/clock.svg'
import heart from '../svg/heart.svg'

const Body = () => {
  return (
    <div className={styles.body}>
      <div className={styles.mobileTitle}>
        <h1>LOREM IPSUM DOLOR SIT</h1>
      </div>
      <div className={styles.top}>
        <h2 className={styles.title}>WHO WE ARE</h2>
        <div className={styles.block}>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSchYgjRc3HD192u4JZI1v0S-bGDGsl8dGkgg&usqp=CAU"
            alt="typewriter"
            className={styles.topImage}
          />
          <div className={styles.blockText}>
            <h3 className={styles.blockTitle}>Lorem ipsum</h3>
            <p className={styles.text}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
              ipsum dolor sit amet consectetur, adipisicing elit. Magni, aut!{' '}
            </p>
            <button className={styles.button}>SHOW MORE</button>
          </div>
        </div>
        <div className={styles.block}>
          <img
            src="https://c.wallhere.com/photos/ba/68/1920x1272_px_lake_landscape_path_Trees-663458.jpg!d"
            alt="path"
            className={styles.topImage}
          />
          <div className={styles.blockText}>
            <h3 className={styles.blockTitle}>Lorem ipsum</h3>
            <p className={styles.text}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Obcaecati,
              vitae.
            </p>
            <button className={styles.button}>SHOW MORE</button>
          </div>
        </div>
      </div>
      <div className={styles.bottom}>
        <h2 className={styles.bottomTitle}>WHAT WE DO</h2>
        <div className={styles.bottomImages}>
          <div className={styles.bottomDiv}>
            <img src={calculator} alt="" className={styles.bottomImage} />
          </div>
          <div className={styles.bottomDiv}>
            <img src={clock} alt="" className={styles.bottomImage} />
          </div>
          <div className={styles.bottomDiv}>
            <img src={cloud} alt="" className={styles.bottomImage} />
          </div>
          <div className={styles.bottomDiv}>
            <img src={heart} alt="" className={styles.bottomImage} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Body

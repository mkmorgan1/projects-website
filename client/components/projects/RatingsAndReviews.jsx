import React from 'react';
import style from '../../design/styles.module.css';
import { clicked } from '../../functions.js';

const RatingsAndReviews = () => {
  return (
    <div className={style.videoAndDescription}>
      <div className={style.description}>
        <p align='center'>
          {/* Github */}
          <a className={style.link} onClick={() => clicked('frontEndGithub')} href='https://github.com/Mormont-team-6/Customer-Reviews-Service' target='blank'>
            <i className='fab fa-github-square'></i>
          </a>
          {'  '}
          {/* Deployed Link */}
          <a className={style.link} onClick={() => clicked('frontEndDeployed')} href='http://ec2-3-129-207-8.us-east-2.compute.amazonaws.com:3006/20' target='blank'>
            <i className="fas fa-external-link-square-alt"></i>
          </a>
        </p>
        <div className={style.descriptionDivider}></div>
        <h2 className={style.descriptionHeader}>Ratings And Reviews</h2>
        <p>Application for a booking site</p>
        <ul>
          <li>
            Rendered each component using ​<b>React​</b> for its ​reusability of each component and the use of ​state​ to store information
          </li>
          <li>
            Toggled the view of a ​<b>popup modal</b> ​using ​<b>React hooks</b>
          </li>
          <li>
            Designed app using ​<b>CSS grid​</b> and ​<b>CSS flex-box​</b> for responsive arrangement of components upon page sizing
          </li>
          <li>
            Used a <b>Mysql</b>​ ​database because its relational structure allowed a connection between a ratings and a reviews table
          </li>
        </ul>
        <div className={style.videoBox}>
          <video autoPlay muted loop id='myVideo'>
            <source
            src='https://matthew-resume-website.s3.us-east-2.amazonaws.com/ratings-%26-Reviews.mov'
            // 'https://matthew-resume-website.s3.us-east-2.amazonaws.com/r%26r.webm'
            type='video/mp4'/>
            Your browser does not support HTML5 video.
          </video>
        </div>
      </div>

    </div>
  );
}

export default RatingsAndReviews;
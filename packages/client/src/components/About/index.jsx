/* eslint-disable max-len */
import styles from './index.module.css';

/**
 * About
 *
 * @return {object} JSX
 */
function About() {
  return (
    <div className={styles.wrapper}>
      <article className={styles.group}>
        <h2>Project</h2>
        <p>Spotmaps, based on Brendan Dawes&apos;&nbsp;<a href="http://brendandawes.com/projects/cinemaredux">Cinema Redux</a>, is an on-going project to map the colour narratives of different films.</p>
        <p>Films are processed through a Python/OpenCV pipeline: each frame&apos;s colour is sampled, and a spot of average colour is produced from the combination of one second&apos;s frames.</p>
        <p>Spots are laid out 60 per line to represent one minute of film time. The length of the image represents the number of minutes in the film.</p>
        <p>This is the second version of <a href="https://github.com/andywillis/spotmaps">Spotmaps</a> rewritten entirely with React.</p>
        <p>A 24-colour Adobe swatch file in ASE format and a hex RGB colour file are available to download for each spotmap.</p>
      </article>
      <article className={styles.group}>
        <h2>Coverage from the original version</h2>
        <ul>
          <li>
            <a href="https://www.theverge.com/2013/1/15/3878234/andy-willis-spotmaps-turns-movies-into-color-maps">The Verge</a>
          </li>
          <li>
            <a href="https://www.fastcompany.com/90185487/infographic-the-colors-from-your-favorite-movies-mapped-to-7200-pixels">Fast Company</a>
          </li>
          <li>
            <a href="http://gizmodo.com/5972740/the-color-of-movies-visualized">Gizmodo</a>
          </li>
        </ul>
      </article>
    </div>
  );
}

export default About;

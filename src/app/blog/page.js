import Header from "../components/Header";
import styles from "../components/styles.module.css";

export default async function Blog() {
  const highFive = await fetch("https://api.waifu.pics/sfw/highfive").then(
    (res) => res.json()
  );

  const yeet = await fetch("https://api.waifu.pics/sfw/yeet").then((res) =>
    res.json()
  );

  const poke = await fetch("https://api.waifu.pics/sfw/poke").then((res) =>
    res.json()
  );

  const dance = await fetch("https://api.waifu.pics/sfw/dance").then((res) =>
    res.json()
  );
  return (
    <>
      <Header title="Bloggy Blog" />
      <main className={styles.grid}>
        <section className={styles.intro}>
          <h2 className={styles.center}>About this API</h2>
          <p>
            With this API I am retrieving hyperlinks of images in the form of
            JSON which I use to display images from different endpoints.
          </p>
          <img
            src={poke.url}
            width={200}
            height={200}
            alt="Random Anime Picture"
            className={styles.centerImg}
          />
        </section>
        <section className={styles.left}>
          <h2 className={styles.center}>Subtitle</h2>
          <img
            src={highFive.url}
            width={200}
            height={200}
            alt="Random Anime Picture"
          />
          <p>
            Sit culpa do irure occaecat laborum ut voluptate ea cupidatat
            voluptate. Cupidatat ullamco sint eiusmod tempor culpa laboris
            aliquip.Aute magna et deserunt voluptate aliqua sit ex. Dolore
            aliquip ea eiusmod minim anim qui excepteur nulla reprehenderit ea
            elit irure aute.
          </p>
        </section>
        <section className={styles.right}>
          <h2 className={styles.center}>Subtitle</h2>
          <img
            src={dance.url}
            width={200}
            height={200}
            alt="Random Anime Picture"
          />
          <p>
            Sit culpa do irure occaecat laborum ut voluptate ea cupidatat
            voluptate. Cupidatat ullamco sint eiusmod tempor culpa laboris
            aliquip.Aute magna et deserunt voluptate aliqua sit ex. Dolore
            aliquip ea eiusmod minim anim qui excepteur nulla reprehenderit ea
            elit irure aute.
          </p>
        </section>
        <section className={styles.outro}>
          <h2 className={styles.center}>You May Leave Now</h2>
          <img
            src={yeet.url}
            width={200}
            height={200}
            alt="Random Anime Picture"
            className={styles.centerImg}
          />
          <p>
            Irure deserunt incididunt voluptate anim ut ut magna sint.{" "} 
            <a href="https://github.com/public-apis/public-apis">
              List of Free APIs
            </a>
          </p>
        </section>
      </main>
    </>
  );
}

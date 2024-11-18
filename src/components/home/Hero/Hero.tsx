import styles from "./Hero.module.scss";
export const Hero = () => {
  console.log(styles);

  return (
    <section className={styles.Hero}>
      <h1>Hero</h1>
      <h2>Empowering Your Tomorrow, Today!</h2>
    </section>
  );
};

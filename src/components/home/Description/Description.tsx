import styles from "./Description.module.scss";
import Image from "next/image";

export const Description = () => {
  return (
    <section className={styles.Description}>
      <Image
        src="/images/description.jpeg"
        alt="product marketplace"
        width={500}
        height={300}
      />
      <div className={styles.Description__text}>
        <h1>Bring the future today</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam vero
          voluptatem pariatur. Enim in, illum, aliquam esse, nobis ullam autem
          quaerat quisquam praesentium consectetur minus? Deserunt cum doloribus
          velit eligendi?
        </p>
      </div>
    </section>
  );
};

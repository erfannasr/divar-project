import Link from "next/link";
import  styles  from "./CategoryCard.module.css";
import Image from "next/image";

function CategoryCard({ name, title }) {
  return (
    <div className={styles.card}>
      <Link href={"/"}>
        <Image
          src={`/images/${name}.png`}
          priority={true}
          alt={title}
          width={240}
          height={144}
        />
        <p>{title}</p>
      </Link>
    </div>
  );
}

export default CategoryCard;

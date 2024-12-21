import Link from "next/link";
import  styles  from "./CategoryCard.module.css";
import Image from "next/image";

function CategoryCard({ name, title }) {
  console.log(name , " name")
  console.log(title , " title")
  
  return (
    <div className={styles.card}>
      <Link href={`/buy-residential?category=${name}`} >
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

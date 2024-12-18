import style from "./HomePage.module.css";
import { cities, services } from "@/constants/String";
import CategoryCard from "@/module/CategoryCard";
import { FiCircle } from "react-icons/fi";
import { FaCity } from "react-icons/fa";

function HomePage() {
  return (
    <div>
      <div className={style.banner}>
        <div className={style.desc}>
          <h1>سامانه خرید و اجاره ملک</h1>
          <ul>
            {services.map((i) => (
              <li key={i}>
                <FiCircle />
                <span>{i}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className={style.categories}>
        <CategoryCard title="خانه ویلایی" name={"villa"} />
        <CategoryCard title=" آپارتمان " name={"apartment"} />
        <CategoryCard title="مغازه" name={"store"} />
        <CategoryCard title="دفتر" name={"office"} />
      </div>
      <div className={style.city}>
        <h3> شهر های پر بازدید </h3>
        <ul>
          {cities.map((i) => (
            <li key={i}>
              <FaCity />
              <span>{i}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default HomePage;

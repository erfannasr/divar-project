import style from "./RadioList.module.css";

function RadioList({ profileData, setProfileData }) {
  const { category } = profileData;

  const changeHandler = (e) => {

    const { name, value } = e.target;
    setProfileData({ ...profileData, [name]: value });

  };

  return (
    <div className={style.container}>
      <p>دسته بندی</p>
      <div className={style.main}>
        <div>
          <label htmlFor="villa">ویلا</label>
          <input
            checked={category === "villa"}
            onChange={changeHandler}
            type="radio"
            name="category"
            value={"villa"}
            id="villa"
          />
        </div>

        <div>
          <label htmlFor="apartment">آپارتمان</label>
          <input
            checked={category === "apartment"}
            onChange={changeHandler}
            type="radio"
            name="category"
            value={"apartment"}
            id="apartment"
          />
        </div>

        <div>
          <label htmlFor="store">مغازه</label>
          <input
            checked={category === "store"}
            onChange={changeHandler}
            type="radio"
            name="category"
            value={"store"}
            id="store"
          />
        </div>
        <div>
          <label htmlFor="office">دفتر</label>
          <input
            checked={category === "office"}
            onChange={changeHandler}
            type="radio"
            name="category"
            value={"office"}
            id="office"
          />
        </div>
      </div>
    </div>
  );
}

export default RadioList;

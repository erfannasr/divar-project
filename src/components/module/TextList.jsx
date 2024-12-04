import style from "./TextList.module.css";
import { MdLibraryAdd } from "react-icons/md";
import { AiOutlineDelete } from "react-icons/ai";

function TextList({ title, profileData, setProfileData, type }) {
  const changeHandler = (e, index) => {
    const { value } = e.target;
    const list = [...profileData[type]];

    list[index] = value;
    setProfileData({ ...profileData, [type]: list });
  };

  const addHandler = () => {
    setProfileData({ ...profileData, [type]: [...profileData[type], ""] });

  };
  const deleteHandler = (index) => {
    const list = [...profileData[type]];
    list.splice(index, 1);
    setProfileData({ ...profileData, [type]: list });
  };
  return (
    <div className={style.container}>
      <p>{title}</p>
      {profileData[type]?.map((i, index) => (
         
        <div key={index} className={style.card}>
            
          <input
            type="text"
            value={i}
            onChange={(e) => changeHandler(e, index)}
          />
          <button onClick={(e) => deleteHandler(index)}>
            حذف
            <AiOutlineDelete />
          </button>
        </div>
      ))}
      <button onClick={addHandler}>
        <MdLibraryAdd />
        افزودن
      </button>
    </div>
  );
}

export default TextList;

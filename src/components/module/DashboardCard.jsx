'use client'
import { FiEdit } from "react-icons/fi";
import Card from "./Card";
import style from "./DashboardCard.module.css";
import { AiOutlineDelete } from "react-icons/ai";
import { useRouter } from "next/navigation";
function DashboardCard({ data }) {
  const router = useRouter()
  const editHandler = () => {
    
  };

  const deleteHandler = () => {};
  return (
    <div className={style.container}>
      <Card data={data} />
      <div className={style.main}>
        <button onClick={editHandler}>
          ویرایش
          <FiEdit />
        </button>
        <button onClick={deleteHandler}>
          حذف آگهی
          <AiOutlineDelete />
        </button>
      </div>
    </div>
  );
}

export default DashboardCard;

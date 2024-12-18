import Card from "@/module/Card";
import style from "./BuyResidentialsPage.module.css";

function BuyResidentialsPage({data}) {
  return (
    <div className={style.container}>
      <div className={style.sidebar}></div>
      <div className={style.main}>

        {data.length ? null : (
          <p className={style.text}> هیچ آگهی ثبت نشده است </p>
        )}

        {data.map((profile) => (
          <Card key={profile._id} data={profile} />
        ))}
      </div>
    </div>
  );
}

export default BuyResidentialsPage;

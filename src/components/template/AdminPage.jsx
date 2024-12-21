import AdminCard from "@/module/AdminCard";
import style from "./AdminPage.module.css";
function AdminPage({ profiles }) {
  return (
    <div>
      {profiles.length ? null : <p>هیچ آگهی در حال انتظار تاییدی وجود ندارد</p>}
      {
        profiles.map((i)=>(
               <AdminCard key={i._id} data={JSON.parse(JSON.stringify(i))}/>
            ))
      }
    </div>
  );
}

export default AdminPage;

"use client";
import { useState } from "react";
import style from "./AddProfilePage.module.css";
import TextInput from "@/module/TextInput";

function AddProfilePage() {
  const [profileData, setProfileData] = useState({
    title: "",
    discription: "",
    location: "",
    phone: "",
    price: "",
    realState: "",
    constructionDate: new Date(),
    category: "",
    rules: [],
    amenities: [],
  });
  return (
    <div className={style.container}>
      <h3>ثبت آگهی</h3>
      <TextInput
        title={"عنوان آگهی"}
        name={"title"}
        profileData={profileData}
        setProfileData={setProfileData}
      />
    </div>
  );
}

export default AddProfilePage;

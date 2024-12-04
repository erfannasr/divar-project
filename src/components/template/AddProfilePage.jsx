"use client";
import { useState } from "react";
import style from "./AddProfilePage.module.css";
import TextInput from "@/module/TextInput";
import RadioList from "@/module/RadioList";
import TextList from "@/module/TextList";
import CoustomDatePicker from "@/module/CoustomDatePicker";

function AddProfilePage() {
  const [profileData, setProfileData] = useState({
    title: "",
    description: "",
    location: "",
    phone: "",
    price: "",
    realState: "",
    constructionDate: new Date(),
    category: "",
    rules: [],
    amenities: [],
  });
  const submitHandler = () => {
    console.log(profileData);
  };
  return (
    <div className={style.container}>
      <h3>ثبت آگهی</h3>
      <TextInput
        title={"عنوان آگهی"}
        name={"title"}
        profileData={profileData}
        setProfileData={setProfileData}
      />

      <TextInput
        title={"توضیحات"}
        name={"description"}
        profileData={profileData}
        setProfileData={setProfileData}
      />
      <TextInput
        title={"آدرس"}
        name={"location"}
        profileData={profileData}
        setProfileData={setProfileData}
      />
      <TextInput
        title={"شماره تماس"}
        name={"phone"}
        profileData={profileData}
        setProfileData={setProfileData}
      />
      <TextInput
        title={"قیمت (تومان)"}
        name={"price"}
        profileData={profileData}
        setProfileData={setProfileData}
      />
      <TextInput
        title={"بنگاه"}
        name={"realState"}
        profileData={profileData}
        setProfileData={setProfileData}
      />
      <RadioList setProfileData={setProfileData} profileData={profileData} />

      <TextList
        title={"امکانات رفاهی"}
        type={"amenities"}
        profileData={profileData}
        setProfileData={setProfileData}
      />
      <TextList
        title={"قوانین"}
        type={"rules"}
        profileData={profileData}
        setProfileData={setProfileData}
      />
    <CoustomDatePicker profileData={profileData} setProfileData={setProfileData}/>
      <button className={style.submit} onClick={submitHandler}>
        ثبت آگهی
      </button>
    </div>
  );
}

export default AddProfilePage;

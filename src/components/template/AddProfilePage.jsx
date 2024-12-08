"use client";
import { useState } from "react";
import style from "./AddProfilePage.module.css";
import TextInput from "@/module/TextInput";
import RadioList from "@/module/RadioList";
import TextList from "@/module/TextList";
import CoustomDatePicker from "@/module/CoustomDatePicker";
import toast from "react-hot-toast";
import { ThreeDots } from "react-loader-spinner";

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
  const [loaging, setLoading] = useState(false);
  const submitHandler = async () => {
    setLoading(true);
    const res = await fetch("/api/profile", {
      method: "POST",
      body: JSON.stringify(profileData),
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.json();
    setLoading(false);
    if (data.error) {
      toast.error(data.error);
    } else {
      toast.success(data.message);
    }
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
      <CoustomDatePicker
        profileData={profileData}
        setProfileData={setProfileData}
      />
      {loaging ? (
        <ThreeDots color="#304ffe" ariaLabel="three-dots-loading" visible={true} wrapperStyle={{margin:"auto"}} height={45}/>
      ) : (
        <button className={style.submit} onClick={submitHandler}>
          ثبت آگهی
        </button>
      )}
    </div>
  );
}

export default AddProfilePage;

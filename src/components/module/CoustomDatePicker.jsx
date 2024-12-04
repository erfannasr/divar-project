import style from './CustomDatePicker.module.css'
import DatePicker from 'react-multi-date-picker'
import persian from 'react-date-object/calendars/persian'
import persian_fa from 'react-date-object/locales/persian_fa'
function CoustomDatePicker({profileData , setProfileData}) {
  const changeHandler =(e)=>{
   const date = new Date()
   setProfileData({...profileData , constructionDate : date})
  }
  return (
    <div className={style.contaienr}>
        <p>تاریخ ساخت</p>
        <DatePicker calendar={persian} locale={persian_fa} calendarPosition='buttom-right' value={profileData.constructionDate} onChange={changeHandler}/>
    </div>
  )
}
0
export default CoustomDatePicker
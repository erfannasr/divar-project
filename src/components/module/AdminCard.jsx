"use client"

import { sp } from '@/utils/replaceNumber'
import style from './AdminCard.module.css'
import toast, { Toaster } from 'react-hot-toast'
import { useRouter } from 'next/navigation'

function AdminCard({data}) {
      const router = useRouter()
    const publishHandler = async () =>{
        const res = await fetch(`/api/profile/publish/${data._id}`,{
            method:"PATCH"
        })
        const resule = await res.json()
        if (resule.message) {
            toast.success(resule.message)
            router.refresh()
        }
    }
  return (
    <div className={style.container}>
        <h3>{data.title}</h3>
        <p>{data.description}</p>
        <div className={style.properties}>
            <span>{data.location}</span>
            <span>{sp(data.price)}</span>
        </div>
        <button onClick={publishHandler}>انتشار</button>
        <Toaster />
    </div>
  )
}

export default AdminCard
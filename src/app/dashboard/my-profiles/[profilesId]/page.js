import Profile from '@/models/Profile'
import AddProfilePage from '@/template/AddProfilePage'
import connectDB from '@/utils/connectDB'
import React from 'react'

async function Edit({ params: { profilesId } }) {
    await connectDB()
    console.log(profilesId , "sa")
    const profile = await Profile.findOne({ _id: profilesId })

    if (!profile) {
        return <h3>  مشکلی پیش آمده لطفا دوباره امتحان کنید </h3>
    }
    return (
        <AddProfilePage data={JSON.parse(JSON.stringify(profile))} />
    )
}

export default Edit
import Profile from "@/models/Profile"
import User from "@/models/User"
import connectDB from "@/utils/connectDB"
import { Types } from "mongoose"
import { getServerSession } from "next-auth"
import { NextResponse } from "next/server"

export async function POST(req) {

    try {
        await connectDB()
        const body = await req.json()
        const {
            title,
            description,
            location,
            phone,
            realState,
            price,
            constructionDate,
            category,
            amenities,
            rules
        } = body
        const session = await getServerSession(req)
        if (!session) {
            return NextResponse.json({
                error: "لطفا وارد حساب کاربری خود شوید"
            }, { status: 401 })
        }

        const user = await User.findOne({ email: session.user.email })
        if (!user) {
            NextResponse.json({ error: "مشکلی در سرور رخ داده است" }, { status: 404 })
        }
        if (!title || !location || !description || !phone || !realState || !price || !constructionDate || !category || !amenities || !rules) {
            return NextResponse.json({ error: "لطفا اطلاعات معتبر وارد کنید" }, { status: 404 })
        }
        const newProfile = await Profile.create({
            title,
            description,
            location,
            phone,
            realState,
            price: +price,
            constructionDate,
            category,
            amenities,
            rules,
            userId: new Types.ObjectId(user._id),
        })
        return NextResponse.json({ message: "آگهی جدید اضافه شد" }, { status: 201 })
    } catch (error) {
        console.log(error)
        return NextResponse.json({ error: "مشکلی در سرور رخ داده است" }, { status: 500 })
    }
}

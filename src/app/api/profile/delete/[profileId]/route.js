import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import Profile from "@/models/Profile";
import User from "@/models/User";
import connectDB from "@/utils/connectDB";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function DELETE(req, context) {


    try {

        console.log(context, "گرفتم")
        await connectDB()
        const id = context.params.profileId

        const session = await getServerSession(authOptions)
        if (!session) {

            return NextResponse.json(

                {

                    error: "لطفا وارد حساب کاربری خود شوید",
                },
                { status: 401 }
            );
        }

        const user = await User.findOne({ email: session.user.email });
        if (!user) {
            return NextResponse.json(
                { error: "حساب کاربری یافت نشد" },
                { status: 404 }
            );
        }

        const profile = await Profile.findOne({ _id: id })
        if (user._id.equals(profile.userId)) {
            return NextResponse.json({ error: "دستری شما به این آگهی محدود شدده است" }, { status: 403 })
        }

        await Profile.deleteOne({ _id: id })
        return NextResponse.json({ message: "آگهی مورد نظر حذف شد" }, { status: 403 })
    } catch (error) {

        console.log(err);

        return NextResponse.json(

            { error: "مشکلی در سرور رخ داده است" },

            { status: 500 }
        );
    }

}
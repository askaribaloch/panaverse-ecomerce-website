import { NextRequest, NextResponse } from "next/server"
import { cartTable, db } from "../../../../sanity/lib/drizzle"
import {v4 as uuid} from "uuid";
import { cookies } from "next/headers";

export const GET = async (reuest:NextRequest) => {
    try {
        const res = await db.select().from(cartTable)
        return NextResponse.json({res})
    } catch (error) {
        console.log(error)
        return NextResponse.json({message:"something went wrong"})
        
    }    
}

export const POST = async (request:NextRequest) => {
    const uid = uuid()
    const req = await request.json()
    const setCookies = cookies()
    const user_id = cookies().get("user_id")
    if(!user_id){
        setCookies.set("user_id", uid)
    }
    try {
        const res = await db.insert(cartTable).values({
            product_id: req.product_id,
            quantity:1,
            user_id: cookies().get("user_id")?.value as string
        }).returning();
        console.log(res)
        return NextResponse.json({res})
    } catch (error) {
        console.log(error)
        return NextResponse.json({message:"something went wrong"})        
    }    
}
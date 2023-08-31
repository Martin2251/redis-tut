import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import {nanoid} from "nanoid"

export function middleware(req:NextRequest){
    // check the cookies to see if there a user 

    const userId = req.cookies.get('userId')

    const res = NextResponse.next()

    if(!userId){
        res.cookies.set('userId', nanoid())
    }
    return res
}

// to get it to run we export a config

export const config={
    mathcher:[
        // runs on every api request

    ]
}
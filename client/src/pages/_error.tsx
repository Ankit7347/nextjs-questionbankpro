"use client"

import Button from "@mui/material/Button"


interface ErrorPageProps{
    error:Error,
    reset:()=>void,
}


export default function Error({error,reset}:ErrorPageProps){
    return(
        <div>
        <div>Something Went Wrong!!</div>
        <Button onClick={reset}>Try Again</Button>
        </div>
        )
        

}
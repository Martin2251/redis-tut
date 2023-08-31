import Link from "next/link"
import axios from "axios"

export default function Home(){
  return(
    <div className="flex flex-col gap-8 items-start">
      <Link href="/comments" prefetch={false}>
        see comments
      </Link>
      <button>make comment</button>
    </div>
  )
}

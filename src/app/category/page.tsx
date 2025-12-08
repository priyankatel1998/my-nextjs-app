
import Breadcrumbs from "@/components/Breadcrumbs"
import Link from "next/link"
export default function category (){
    return(
        <div>
            <Breadcrumbs />
            <div className="space-x-4 space-y-6">
      <h1>hello i am categori</h1>
                <Link href="/cosmetics" className="hover:text-blue-600">Cosmetics</Link>
               <Link href="/clothes" className="hover:text-blue-600">Clothes</Link>
               <Link href="/makeup" className="hover:text-blue-600">Makeup</Link> 
       </div> 
        </div>
    )
}
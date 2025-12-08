import Breadcrumbs from "@/components/Breadcrumbs";
import Link from "next/link"
export default function nykaa (){
    return(
        <div className="p-4">
            <Breadcrumbs />

        <div className="space-y-6">
     <h1 className="text-3xl font-bold">hello nykaa </h1>
                <Link href="/category" className="hover:text-blue-600">Category</Link>
    </div>
        
        </div>
    );
}
//import Nykaa from "@/components/Nykaa";
import Breadcrumbs from "@/components/Breadcrumbs";
import PersistCounter from "@/components/PersistCounter";
import Link from "next/link";
import Counter from "@/components/Counter";

export default function Home (){
  return(
    <nav>
    <div className="space-y-6">
      <Breadcrumbs />
     <h1 className="text-3xl font-bold">shopping platform </h1>
      {/* </div><Nykaa id={1} name="Nykaa" /> <Nykaa id={2} name="Meesho" /> */}
       <div className="space-x-4">
               <Link href="/nykaa" className="hover:text-blue-600">Nykaa</Link>
               <Link href="/meesho" className="hover:text-blue-600">Meesho</Link>
       </div>

       <main style={{ padding: 40 }}>
      <h1>Zustand Persist Store Example</h1>
      <PersistCounter />
      <Counter />
      </main>
  </div>
</nav>


  );
}
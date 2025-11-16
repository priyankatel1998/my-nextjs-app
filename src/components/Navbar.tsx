import Link from "next/link";
export default function Navbar (){
    return(
        <div>
<nav className="bg-white shadow mb-6">
      <div className="max-w-4xl mx-auto p-4 flex justify-between items-center">
        <h2 className="font-semibold text-xl">My Excercise</h2>
            <div className="space-x-4">
                <Link href="/" className="hover:text-blue-600">Home</Link>
               <Link href="/about" className="hover:text-blue-600">About</Link>
            </div>
    </div>
</nav>
        </div>
    );
}

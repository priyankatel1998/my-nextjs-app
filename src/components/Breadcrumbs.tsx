
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Breadcrumbs() {
  const pathname = usePathname(); // example: /products/shoes
  const pathParts = pathname.split("/").filter(Boolean);

  return (
    <nav className="text-sm text-gray-600">
      <ol className="flex items-center gap-2">
        <li>
          <Link href="/" className="hover:underline">Enter</Link>
        </li>
               {/* <li>
          <Link href="/nykaa" className="hover:underline">/Nykaa</Link>
        </li>  
         <li>
          <Link href="/category" className="hover:underline">/Category</Link>
        </li>  
 <li>
          <Link href="/cosmetics" className="hover:underline">/Cosmetics</Link>
        </li>   */}
    
        {pathParts.map((part, index) => {
          const href = "/" + pathParts.slice(0, index + 1).join("/");
          const label = part.charAt(0).toUpperCase() + part.slice(1);

          return (
            <li key={index} className="flex items-center gap-2">
              <span>/</span>
              <Link href={href} className="hover:underline">
                {label}
              </Link>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

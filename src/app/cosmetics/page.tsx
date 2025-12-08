"use client"

import Breadcrumbs from "@/components/Breadcrumbs";
import Image from "next/image";
import { useState } from "react";

export default function cosmetics (){
    const [qty, setQty] =useState(1)
  const [value, setValue] =useState(1)
  const price = 299 
  const percent =10;
  const setPrice =499;
    return(
        <div className="p-4">
            <Breadcrumbs />
        <div className="bg-white p-5 w-[700px] rounded-xl shadow-md border border-gray-400">

             
            <div  className="flex mt-2 items-center border-b border-b-gray-300">
              {/* <Image src ={"data:image/jpeg;base64,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"}  */}
           <Image src={"data:image/jpeg;base64,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"}
            alt= "HD"
            width ={100}
            height ={100}
            />
            
            <div  className="ml-6">
                 <p className="font-semibold text-xl">Product Name</p>
                <p>Brand Name<br/>100ml</p>
    
      <h1>R-499</h1>

                <table>
                    <tbody>
                        <tr>
                            <td> <p>Red :{qty}</p>
      {/* Dropdown */}
      <select
        value={qty}
        onChange={(e) => setQty(Number(e.target.value))}
        className="px-6 py-1  border border-gray-200 rounded"
      >
        {[1, 2, 3, 4, 5,6,7,8].map((num) => (
          <option key={num} value={num}>
            {num}
          </option>
        ))}
      </select></td>
      <td>Total:{qty*setPrice}</td>
      <td>discount:{(qty*setPrice*percent)/100}</td>
                        </tr>
                        <tr>
                    <td>MRP.599-20% OFF     ! </td>
                    <td className="text-md px-5 text-pink-500">Move to Wishlist</td>
                    </tr>
                </tbody>
                </table>

                </div>
            </div><div className="flex mt-1 items-center border-b border-b-gray-300">
            <Image src={"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQAvQMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAAAQUCBAYDB//EADoQAAIBAwEEBwUECwEAAAAAAAABAgMEEQUSITFRIjIzQWFxgQYTkaHBNFKS4RUjQmJydIOxssLxFP/EABcBAQEBAQAAAAAAAAAAAAAAAAACAQP/xAAYEQEBAQEBAAAAAAAAAAAAAAAAATECEf/aAAwDAQACEQMRAD8A+sgAAAAAAAAELfwAkDBKQEAYfcgAAGAADW4AAAAAAAAAAAAAAAAAAAAPK4oSuaTpxlstdLzwepnRlsVYy5MChdlVS7TdwyQrSol2mfXyLnUraVNupS6r4or4z5mDXja1U87fzM1a1t3S4eLNqM1zM/epd4GmrGtL9r5mTsKqi26iXr5HtO62UVt9qM8NJ93Ay1vjf0uLhXrx95trC7+BZFZoVNxtZTk+lOW/0/6WZsYAA0AAAAAAAAAAAAAAAAAABZYU6azwaKO/tPczbhnZb48i6t3mkk+RFamqtNxkBzOWiJSaXE97ml7qbizQrzwTWvK4rbnvK+H624WeC3syuancRaLozl6ENdXpsdixpLmtr4myYUY7FGEVwUUvkZnWJoAAAAAAAAAAAAAAAAAAAQAG7aPoLzPaRrWj6L8GbUzWKTV44qZ5lBcvezodY668jnLt72RVRW1XmRuWUcqjH78vqaM30mWumwzdW0eTT+pCnT+AAOqAAAAAAAAAAAAAAAAAAABuBg3ltAbdpxa9TclwRXWranLD7jcc3sLeGKrWeujnbtb2X+rN7eOPic9dPeyaqK2a6bLvSknf0/3c/wCJTYzVS8S70ZN30n3JPcTNVcX64IHnlkuXA6IZgiLTJAAAAAAAAAAAAAAAAAEeiJAHrbYVTd3o3cLYW5Gjb9qjej2aDFLq+No5254s6LWN0jnLriyelRo099ePmX2gpO4qvkvqUVH7RHzL/wBnl0q0vBEzVXFzhDC5AHRAkk9wAAAAAAAAAAAAAAAAAAAAD0o9rE3o9maFDtIrxN+DXuvUMUus9Y5y54s6LWJLb49xzV1LeyOlRq0ftC8zofZ1fq6z8V9TnaLXvk8nR+zvYVv4l/YznW3FsADokAAAAAAAAAAAAAAAAAAAAATB4nHzNx0JSi8VMehpw68fMslNKO/cGKDVLZrLdX5HKX9R028NPzR1eq1XOrJLqrcvE5PVEnlYMsarXqFSPCMPgdj7KzdTS3UfGVR59D5571Kcoy4p4O+9jKsKmjuMZZcKrUly4DwXwIyMmgBlDKAEmLkhtR5gSCNqPMbUeYEkmO1HmNqPMDIAAAAAAAAgkATCezJS44Ped/DY2VSrPd901wBXX1StJydK2qyz3YOY1G11Stn3em1X6nb4J9QPlUtC1pNv9GXDbbbfRX1LbR6ntNpdOVvQ0GVSE5bTnUuYww+WMM78AczTvfaOXaaTSg/5nP8Aqe8a2svr2UI/1fyL/dyAFIp6m+NtH8f5Geb99alH8X5FwRjwQFUv/Z3wXxJxdfdXxLTAwBW7NzyJ2bjkWOEMZArsXHIbNx4FjhDAEgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//Z"}
            alt ="gogle image"
            width={100}
            height ={100}
            />
            <div className="ml-6">
                <h1 className="font-semibold text-xl">Face Cream</h1>
                <p>Brand Name<br/>50 ml</p>
      
                <h1>R-499</h1>
                <table>
                    <tbody>
                        <tr>
                            <td><p>Red :{value}</p>
                             <select
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
        className="px-6 py-1  border border-gray-200 rounded">
            {[1, 2, 3, 4, 5,6,7,8].map((num) => (
             <option key={num} value={num}>
              {num}
             </option>
              ))}
               </select> </td>
               <td>Total:{value*price}</td>
        
               <td>Discount:{(value*price*percent)/100}</td>
                  </tr>
                   <tr>
                    <td>MRP.599-20% OFF  ! </td>
                    <td className="text-md px-5 text-pink-500">Move to Wishlist</td>
                    </tr>
                </tbody>
                </table>
                </div>
            </div>


            <table className="mt-1 border-b border-b-gray-300">
                <thead>
                    <tr>
                        <th>PRICE DETAILS</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td className=" text-md ">total(2 item)</td>
                        <td className="text-md px-65 ml-200">{(qty*setPrice+value*price)} </td>
                    </tr>
                    <tr>
                         <td> Total Discount</td>
                        <td className="text-md px-65">350</td> 
              </tr>
              <tr>
                 <td>percentValue:</td>
                    <td  className="text-md px-65">{(((qty*setPrice)+(value*price))*percent)/100}</td>

              </tr>
                    <tr>
                        <td>Shipping Fee</td>
                        <td className="text-md px-65">FREE</td>
                    </tr>
                    <tr>
                        <td>Total Amount</td>
                        <td className="text-md px-65">{qty*setPrice-250+value*price-100}</td>
                    </tr>
                    <tr>
                        <td>Saved</td>
                        <td className="text-md px-65 text-pink-500">R 350</td>
                    </tr>
                </tbody>
            </table>
        <p className="font-semibold text-xl">Available Offers:</p>
          <ul className="list-disc pl-5">
            <li>Get 5% off above r999</li>
            <li>Free samplle on orders above r799</li>
            </ul>
        </div>
        </div>
    )
}
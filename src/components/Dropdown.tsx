"use client"
import { useState } from "react"


export default function Dropdown() {
const [count,setCount]=useState(1)
const price = 499;
  return (
    <div>
      <p>Red :{count}</p>
      {/* Dropdown */}
      <select
        value={count}
        onChange={(e) => setCount(Number(e.target.value))}
        className="px-6 py-1  border border-gray-200 rounded"
      >
        {[1, 2, 3, 4, 5].map((num) => (
          <option key={num} value={num}>
            {num}
          </option>
        ))}
      </select>  <p className="text-md px-45 ">
      Total ={count*price}
      </p>
    </div>
      )
    }


            "use client";
import { useState } from "react";

export default function Makeup() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);

  const [qty, setQty] = useState(1);
  const price = 10; // fixed price

  return (
    <div className="p-4">
      <table className="table-auto border-collapse border border-gray-500 w-full">
        <thead>
          <tr>
            <th className="border p-2">Title</th>
            <th className="border p-2">Input 1</th>
            <th className="border p-2">Input 2</th>
            <th className="border p-2">Result</th>
          </tr>
        </thead>

        <tbody>
          {/* Row 1 - Subtraction */}
          <tr>
            <td className="border p-2 font-semibold">Subtraction</td>

            <td className="border p-2">
              <input
                type="number"
                onChange={(e) => setNum1(Number(e.target.value))}
                className="border p-1 rounded w-full"
              />
            </td>

            <td className="border p-2">
              <input
                type="number"
                onChange={(e) => setNum2(Number(e.target.value))}
                className="border p-1 rounded w-full"
              />
            </td>

            <td className="border p-2">
              {num1 - num2}
            </td>
          </tr>

          {/* Row 2 - Total */}
          <tr>
            <td className="border p-2 font-semibold">Total (Qty × Price)</td>

            <td className="border p-2">
              <select
                value={qty}
                onChange={(e) => setQty(Number(e.target.value))}
                className="border p-1 rounded w-full"
              >
                {[1,2,3,4,5].map(n => (
                  <option key={n} value={n}>{n}</option>
                ))}
              </select>
            </td>

            <td className="border p-2">{price}</td>

            <td className="border p-2">{qty * price}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

    


"use client";
import { useState } from "react";

export default function clothes() {
  const [items, setItems] = useState([
    { name: "Item 1", qty: 1, price: 10 },
  ]);

  const addItem = () => {
    setItems([...items, { name: "Item X", qty: 1, price: 10 }]);
  };

  const updateQty = (index: number, value: number) => {
    const newItems = [...items];
    newItems[index].qty = value;
    setItems(newItems);
  };

  return (
    <div className="p-4 space-y-4">
      <button
        onClick={addItem}
        className="bg-green-600 text-white px-4 py-2 rounded"
      >
        Add New Row
      </button>

      <table className="table-auto border-collapse border border-gray-400 w-full">
        <thead>
          <tr>
            <th className="border p-2">Name</th>
            <th className="border p-2">Qty</th>
            <th className="border p-2">Price</th>
            <th className="border p-2">Total</th>
          </tr>
        </thead>

        <tbody>
          {items.map((item, i) => (
            <tr key={i}>
              <td className="border p-2">{item.name}</td>

              <td className="border p-2">
                <select
                  value={item.qty}
                  onChange={(e) => updateQty(i, Number(e.target.value))}
                  className="border p-1 rounded"
                >
                  {[1, 2, 3, 4, 5].map((n) => (
                    <option key={n} value={n}>
                      {n}
                    </option>
                  ))}
                </select>
              </td>

              <td className="border p-2">{item.price}</td>

              <td className="border p-2">{item.qty * item.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    );
}
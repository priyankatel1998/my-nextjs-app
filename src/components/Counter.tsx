
"use client";
import {useCount} from "@/stores/useCount";

export default function Counter() {
  const { count, increase, decrease } = useCount();

  return (
    <div>
      <p>Count: {count}</p>
      <button className="px-4" onClick={increase}>Badao</button>
      <button onClick={decrease}>Ghatao</button>
    </div>
  );
}

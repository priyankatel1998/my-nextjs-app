"use client";


import { usePersistStore } from "@/stores/usePersistStore";


export default function PersistCounter() {
const { count, increment, decrement, reset } = usePersistStore();


return (
<div style={{ padding: 20, border: "1px solid #ddd", borderRadius: 10 }}>
<h2>Persistent Counter</h2>
<p>Value: {count}</p>


<button onClick={increment} style={{ marginRight: 10 }}>Increment</button>
<button onClick={decrement} style={{ marginRight: 10 }}>Decrement</button>
<button onClick={reset}>Reset</button>
</div>
);
}
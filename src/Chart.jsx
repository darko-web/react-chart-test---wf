import { useState } from "react";

export default function Chart({ title = "📊 Simple React Chart", data = [5, 10, 7, 3, 9, 4, 8] }) {
  const [values, setValues] = useState(data);

  const randomize = () => {
    setValues(values.map(() => Math.floor(Math.random() * 12) + 1));
  };

  return (
    <div style={{ height: "100vh", width: "100vw", background: "#f9fafb", display: "flex", flexDirection: "column" }}>
      <div style={{ padding: "20px", textAlign: "center", background: "#1f2937", color: "white", fontSize: "24px" }}>
        {title}
      </div>
      <div style={{ flex: 1, display: "flex", alignItems: "flex-end", gap: "10px", padding: "20px" }}>
        {values.map((value, index) => (
          <div
            key={index}
            style={{
              flex: 1,
              height: `${value * 20}px`,
              background: "linear-gradient(180deg, #3b82f6 0%, #2563eb 100%)",
              borderRadius: "6px 6px 0 0",
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "center",
              color: "white",
              fontSize: "14px",
              transition: "height 0.4s ease",
            }}
          >
            {value}
          </div>
        ))}
      </div>
      <div style={{ padding: "20px", textAlign: "center", background: "#f3f4f6" }}>
        <button
          onClick={randomize}
          style={{
            padding: "12px 28px",
            fontSize: "16px",
            background: "#2563eb",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          🔄 Randomize Data
        </button>
      </div>
    </div>
  );
}

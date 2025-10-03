import { useState } from "react";

function App() {
  // Initial chart data
  const [data, setData] = useState([5, 10, 7, 3, 9, 4, 8]);

  // Function to randomize chart values
  const randomize = () => {
    setData(data.map(() => Math.floor(Math.random() * 12) + 1));
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100vw",
        background: "#f9fafb",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "system-ui, sans-serif",
        padding: "40px",
        boxSizing: "border-box",
      }}
    >
      <h1 style={{ marginBottom: "20px", color: "#1f2937" }}>
        📊 interactive chart test
      </h1>

      <div
        style={{
          display: "flex",
          alignItems: "flex-end",
          gap: "20px",
          width: "100%",
          height: "300px",
          padding: "20px",
          background: "white",
          border: "1px solid #e5e7eb",
          borderRadius: "12px",
          boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
          boxSizing: "border-box",
        }}
      >
        {data.map((value, index) => (
          <div
            key={index}
            style={{
              flex: 1, // bars stretch evenly across full width
              height: `${value * 20}px`,
              background:
                "linear-gradient(180deg, #3b82f6 0%, #2563eb 100%)",
              borderRadius: "6px 6px 0 0",
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "center",
              color: "white",
              fontSize: "14px",
              transition: "height 0.3s ease, transform 0.2s",
              cursor: "pointer",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "scale(1.05)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.transform = "scale(1)")
            }
          >
            {value}
          </div>
        ))}
      </div>

      <button
        onClick={randomize}
        style={{
          marginTop: "30px",
          padding: "12px 28px",
          fontSize: "16px",
          background: "#2563eb",
          color: "white",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
          transition: "background 0.2s ease",
        }}
        onMouseEnter={(e) =>
          (e.currentTarget.style.background = "#1e40af")
        }
        onMouseLeave={(e) =>
          (e.currentTarget.style.background = "#2563eb")
        }
      >
        🔄 Randomize Data
      </button>
    </div>
  );
}

export default App;

export default function ErrorMessage({ errorMsg, children }) {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        zIndex: 9999,
      }}
    >
      <div
        style={{
          backgroundColor: "var(--bg-color)",
          padding: "30px",
          borderRadius: "12px",
          border: "1px solid var(--border-color)",
          textAlign: "center",
          minWidth: "300px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: "20px",
          boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.2)"
        }}
      >
        <span
          style={{ fontSize: "40px", display: "block", marginBottom: "15px" }}
        >
          ⚠️
        </span>
        <p
          style={{
            color: "#EF4444",
            fontSize: "18px",
            fontWeight: "bold",
            margin: 0,
          }}
        >
          {errorMsg}
        </p>
        {children}
      </div>
    </div>
  );
}

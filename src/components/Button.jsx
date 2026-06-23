export default function Button({ children, ...props }) {
  return (
    <button
      className="glass px-6 py-3 rounded-global hover:scale-105 transition"
      {...props}
    >
      {children}
    </button>
  );
}
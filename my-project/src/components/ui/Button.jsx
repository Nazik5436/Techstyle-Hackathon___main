export default function Button({ children, variant = 'primary', onClick }) {
  // variant може бути 'primary', 'secondary', 'danger' тощо
  return (
    <button className={`btn btn-${variant}`} onClick={onClick}>
      {children}
    </button>
  );
}
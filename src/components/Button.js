function Button({ children, onClick }) {
  return (
    // Todo: Button fonksiyonunu onclick olarak al ve tanımla
    <button onClick={onClick} className="button">
      {/* Todo: Buton text'i children olarak al */}
      {children}
    </button>
  );
}

export default Button;

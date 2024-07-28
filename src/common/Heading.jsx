function Heading({ text, color }) {
  return (
    <p
      className="heading font-bold text-3xl sm:text-4xl text-center tracking-wide relative dark:text-slate-100"
      style={{ color }}
    >
      {text}
    </p>
  );
}

export default Heading;

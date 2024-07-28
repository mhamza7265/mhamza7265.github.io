function HeadingProject2({ text, color }) {
  return (
    <p
      className="font-bold text-2xl sm:text-2xl text-left tracking-wide relative dark:text-slate-100 mb-10"
      style={{ color }}
    >
      {text}
    </p>
  );
}

export default HeadingProject2;

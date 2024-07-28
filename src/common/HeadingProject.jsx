function HeadingProject({ text, color }) {
  return (
    <p
      className="heading font-extrabold text-3xl sm:text-4xl text-center tracking-widest relative dark:text-slate-100"
      style={{ color }}
    >
      {text}
    </p>
  );
}

export default HeadingProject;

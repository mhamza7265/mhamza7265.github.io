function Card({ icon, title, description }) {
  return (
    <div className="mt-10 sm:mt-0 w-3/4 mx-auto sm:mx-8 max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div className="flex justify-left items-center border-b pb-5">
        <i className={`${icon} text-3xl text-slate-500 mr-2`}></i>
        <h5 className="text-xl font-semibold tracking-tight text-slate-500 dark:text-white">
          {title}
        </h5>
      </div>
      <p className="font-normal text-gray-500 dark:text-gray-400 pt-5 text-center">
        {description}
      </p>
    </div>
  );
}

export default Card;

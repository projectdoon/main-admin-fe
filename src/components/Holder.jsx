import { Link } from "react-router-dom";
function Holder({ title, number, url, colour }) {
  return (
    <div className="min-w-56 h-[50%]">
      <Link
        to={url}
        className={`pt-3 pb-6 px-3 w-[100%] h-[100%] bg-white mx-10 my-3 rounded-2xl border-2 shadow-md flex flex-col items-start justify-start`}
        style={{ borderColor: colour }}
      >
        <p className="text-left text-xs font-semibold text-gray-700 whitespace-nowrap pb-1 border-b-2 border-gray-200 w-full">
          {title}
        </p>
        <div className="text-3xl text-center w-full pt-4">{number}</div>
      </Link>
    </div>
  );
}

export default Holder;

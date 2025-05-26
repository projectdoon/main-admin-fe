import { Link } from "react-router-dom";

function ComplaintHolder({ title, img, url }) {
  return (
    <div className="flex justify-center min-w-[27%] h-[92%] bg-white rounded-2xl shadow-md">
      <Link
        to={url}
        className="py-8 px-3 flex flex-col items-center justify-center"
      >
        <img
          src={img}
          alt=""
          className="w-10 h-10 object-contain rounded-t-md mb-1"
        />
        <p className="text-center text-sm font-semibold text-gray-700 whitespace-nowrap">
          {title}
        </p>
      </Link>
    </div>
  );
}

export default ComplaintHolder;
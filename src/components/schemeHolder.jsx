import { Link } from "react-router-dom";

function SchemeHolder({ title, url }) {
  return (
    //min width set and increased width by 2vw and decreased my-1 to 0.5
    <div className='flex justify-center h-[22vh] my-0.5 min-w-[18vw] -mx-4'> 
      <Link
        to={url}
        //padding decreased in x direction
        className='p-8 px-4 bg-white mx-7 rounded-2xl shadow-md flex flex-col items-center justify-center'
        style={{ height: '75%', width: '90%', textDecoration: 'none' }}
      >
        <div className='text-center text-sm font-semibold text-gray-700 overflow-hidden text-ellipsis whitespace-nowrap w-full max-w-[150px]'>
          {title}
        </div>
      </Link>
    </div>
  );
}

export default SchemeHolder;

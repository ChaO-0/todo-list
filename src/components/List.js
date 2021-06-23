import { useState } from 'react';

const List = () => {
  const [check, setCheck] = useState(false);

  return (
    <>
      <ul className="mt-5 rounded-t-md bg-white text-light cursor-pointer">
        <li className="border-b-2 py-4 relative">
          <span className="absolute border-2 rounded-full w-6 h-6 bottom-5 left-5 cursor-pointer"></span>
          <div className="pl-14">Complete online Javascript course</div>
        </li>
        <li className="border-b-2 py-4 relative">
          <span className="absolute border-2 rounded-full w-6 h-6 bottom-5 left-5 cursor-pointer"></span>
          <div className="pl-14">Jog around the park 3x</div>
        </li>
        <li className="border-b-2 py-4 relative">
          <span className="absolute border-2 rounded-full w-6 h-6 bottom-5 left-5 cursor-pointer"></span>
          <div className="pl-14">10 minutes meditation</div>
        </li>
        <li className="border-b-2 py-4 relative">
          <span className="absolute border-2 rounded-full w-6 h-6 bottom-5 left-5 cursor-pointer"></span>
          <div className="pl-14">Read for 1 hour</div>
        </li>
      </ul>

      <div className="flex justify-between text-light text-xs px-6 py-4 bg-white rounded-b-md">
        <div>5 items left</div>
        <div className="flex justify-between gap-7">
          <div>All</div>
          <div>Active</div>
          <div>Completed</div>
        </div>
        <div>Clear completed</div>
      </div>
    </>
  );
};

export default List;

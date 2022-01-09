const TopNavbar = ({ title }) => {
  return (
    <nav className="bg-gray-500 sticky w-full h-8 flex justify-between p-2 shadow-md items-center">
      <div className="flex space-x-2 items-center">
        <h1 className="text-black text-md">{title}</h1>
      </div>
    </nav>
  );
};

export default TopNavbar;

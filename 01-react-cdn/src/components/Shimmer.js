const Shimmer = () => {
  return (
    <div className="flex flex-wrap">
      {Array(7)
        .fill(0)
        .map((n, i) => {
          return (
            <div className="m-2 p-4 w-[250px] h-[400px]  bg-gray-200 rounded-lg" key={i}>
              <div className="w-full h-40 bg-gray-300"></div>
              <div className="my-5 h-4 w-full bg-gray-300"></div>
              <div className="my-5 h-4 w-full bg-gray-300"></div>
            </div>
          );
        })}
    </div>
  );
};

export default Shimmer;

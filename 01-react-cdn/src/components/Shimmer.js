const Shimmer = () => {
  return (
    <div className="res-container">
      {Array(7)
        .fill(0)
        .map((n, i) => {
          return (
            <div className="shimmer-card" key={i}>
              <div className="shimmer-img"></div>
              <div className="shimmer-text"></div>
              <div className="shimmer-text"></div>
            </div>
          );
        })}
    </div>
  );
};

export default Shimmer;

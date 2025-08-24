const Display = ({ score }: { score: number}) => {
  switch (true) {
    case score > 90:
      return (
        <div className="bg-yellow-300 p-4 rounded  text-center font-bold text-zinc-950  w-full border-rounded-md hover:bg-yellow-400 transition-colors duration-200">
          {score}
          <div className="flex justify-center mt-2">
            {[...Array(3)].map((_, i) => (
              <svg
                key={i}
                className="w-8 h-8 text-yellow-500 mx-1"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 15l-5.878 3.09 1.122-6.545L.488 6.91l6.561-.955L10 0l2.951 5.955 6.561.955-4.756 4.635 1.122 6.545z" />
              </svg>
            ))}
          </div>
        </div>
      );
    case score >= 70:
      return (
        <div className="bg-green-300 p-4 rounded text-center font-bold text-zinc-950  w-full border-rounded-md hover:bg-green-400 transition-colors duration-200">
          {score}
          <div className="flex justify-center mt-2">
            {[...Array(3)].map((_, i) => (
              <svg
                key={i}
                className={`w-8 h-8 mx-1 ${
                  i === 2 ? "text-gray-400" : "text-yellow-500"
                }`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 15l-5.878 3.09 1.122-6.545L.488 6.91l6.561-.955L10 0l2.951 5.955 6.561.955-4.756 4.635 1.122 6.545z" />
              </svg>
            ))}
          </div>
        </div>
      );
    default:
      return (
        <div className="bg-red-300 p-4 rounded text-center font-bold text-zinc-950  w-full border-rounded-md hover:bg-red-400 transition-colors duration-200">
          {score}
          <div className="flex justify-center mt-2">
            {[...Array(3)].map((_, i) => (
              <svg
                key={i}
                className={`w-8 h-8 mx-1 ${
                  i > 0 ? "text-gray-400" : "text-yellow-500"
                }`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 15l-5.878 3.09 1.122-6.545L.488 6.91l6.561-.955L10 0l2.951 5.955 6.561.955-4.756 4.635 1.122 6.545z" />
              </svg>
            ))}
          </div>
        </div>
      );
  }
};
export default Display;

const Congratulation = ({ score }: { score: number }) => {    
  switch (true) {
    case score > 90:
      return (
        <div className="bg-yellow-300 p-4 rounded w-xs text-center font-bold text-zinc-950 animate-bounce text-3xl mx-auto">
          <p>Tuyệt vời!</p>
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
        <div className="bg-green-300 p-4 rounded text-center font-bold text-zinc-950 w-2xs animate-bounce text-2xl mx-auto">
          <p>Chúc mừng!</p>
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
        <div className="bg-red-300 p-4 rounded text-center font-bold text-zinc-950 w-3xs animate-bounce text-xl mx-auto">
          <p>Cần cố gắng hơn!</p>
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
export default Congratulation;

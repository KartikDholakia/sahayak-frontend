import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-skyblue-50 to-cream-100">
      <div className="text-center">
        <div className="bg-primary/10 rounded-full w-24 h-24 mx-auto mb-6 flex items-center justify-center">
          <span className="text-4xl">🤔</span>
        </div>
        <h1 className="text-4xl font-bold mb-4 text-primary">404</h1>
        <p className="text-xl text-charcoal-400 mb-6">Oops! Page not found</p>
        <a
          href="/"
          className="text-primary hover:text-primary/80 underline text-lg font-semibold"
        >
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;

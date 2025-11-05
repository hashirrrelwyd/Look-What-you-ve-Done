import { useNavigate } from "react-router-dom";
import { useCursor } from "../context/CursorContext";

export default function Error404() {
  const navigate = useNavigate();
  const { setHoverType } = useCursor();
  return (
    <>
      <main
        onMouseEnter={() => setHoverType("black")}
        onMouseLeave={() => setHoverType("default")}
        className="grid h-screen place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8"
      >
        <div className="text-center">
          <p className="text-6xl font-semibold text-lwyd-yellow">404</p>
          <h1 className="mt-4 text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl">
            Page not found
          </h1>
          <p className="mt-6 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
            Sorry, we couldn’t find the page you’re looking for.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <div>
              <a
                onMouseEnter={() => setHoverType("button")}
                onMouseLeave={() => setHoverType("black")}
                onClick={() => navigate("/")}
                className="text-sm font-semibold text-gray-900 flex items-center gap-4"
              >
                Go back home{" "}
                <span aria-hidden="true" className="text-lwyd-yellow text-2xl">
                  {" "}
                  &rarr;
                </span>
              </a>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

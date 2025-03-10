import { useEffect, useState } from "react";
import { useDispatch} from "react-redux";
import { setTheme } from "../../features/themeSlice";

export default function ThemeBtn() {
  const [isDark, setIsDark] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setTheme(isDark ? "dark" : "light"));
  }, [isDark]);

  return (
    <label className="relative inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        className="sr-only peer"
        onChange={() => setIsDark(!isDark)}
      />
      <div
        className={`w-11 h-6 rounded-full transition-all duration-300 
          ${isDark ? "bg-orange-500" : "bg-white border border-gray-300"} 
          peer-focus:ring-0 peer-focus:outline-none`}
      >
        <div
          className={`absolute top-1 left-1 w-4.5 h-4.5 rounded-full transition-all duration-300
            ${isDark ? "translate-x-full bg-white" : "bg-orange-500"}`}
        ></div>
      </div>
    </label>
  );
}

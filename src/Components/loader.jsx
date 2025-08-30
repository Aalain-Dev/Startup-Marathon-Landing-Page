import { useEffect, useState } from "react";

export default function Loader() {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Wait 2 seconds before starting fade out
    const timer1 = setTimeout(() => setFadeOut(true), 2000);
    // Wait another 0.7s to fully hide loader
    const timer2 = setTimeout(() => setLoading(false), 2700);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  if (!loading) return null;

  return (
    <div
      className={`fixed inset-0 z-10000 flex items-center justify-center bg-white transition-opacity duration-700 ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="animate-pulse">
        <img src="https://www.bizdateup.com/assets/images/logo.svg" alt="Logo" className="w-50" />
      </div>
    </div>
  );
}

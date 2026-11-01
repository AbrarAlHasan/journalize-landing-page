import { Link } from "react-router-dom";

type LogoProps = {
  className?: string;
};

export function Logo({ className = "" }: LogoProps) {
  return (
    <Link to="/" className={`inline-flex items-center ${className}`}>
      <img
        src="/icon.png"
        alt="Journalize"
        className="h-11 w-11 rounded-xl bg-white object-contain shadow-[0_0_0_1px_rgba(255,255,255,0.08)]"
      />
    </Link>
  );
}

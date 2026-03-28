import Link from "next/link";

type NavLinkProps = {
  href: string;
  children: React.ReactNode;
  color: "black" | "white";
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
};

const navLinkText = (color: "black" | "white") =>
  `text-[16px] font-regular font-Poppins leading-[130%] tracking-[1.5px] ${color === "black" ? "text-black" : "text-white"}`;

export const NavLink = ({ href, children, color, onClick }: NavLinkProps) => (
  <Link
    href={href}
    className="group relative inline-block"
    onClick={onClick}
  >
    <span className={navLinkText(color)}>{children}</span>
    <span
      className={`pointer-events-none absolute left-0 -bottom-[2px] h-px w-0 transition-all duration-300 ease-out group-hover:w-full 
        ${color === "black" ? "bg-black" : "bg-white"}`}
    />
  </Link>
);

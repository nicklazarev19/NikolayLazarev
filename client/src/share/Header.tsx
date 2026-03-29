"use client";

import { useState, useEffect, useCallback, type MouseEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";
import { InstagramLink } from "./InstagramLink";
import { NavLink } from "./NavLink";
import Link from "next/link";

export const Header = () => {
  return (
    <header>
      <HeaderDesktop />
      <HeaderMobile />
    </header>
  );
};

const HeaderDesktop = () => {
  const pathname = usePathname();

  const getAlternateHeaderColor = () => {
    if (pathname === "/contact-us") return "bg-[#1E1E1E]";
  };

  return (
    <header
      className={`absolute top-0 left-0 hidden w-full h-[80px] px-[40px] z-10000 items-center 
        justify-between lg:flex ${getAlternateHeaderColor()}`}
    >
      <div className="flex flex-row gap-[25px]">
        <NavLink href="/" color="white">
          Home
        </NavLink>
        <NavLink href="/about" color="white">
          About
        </NavLink>
      </div>
      <Link
        href="/"
        className="absolute left-[50%] translate-x-[-50%] cursor-pointer"
      >
        <h1 className="text-[30px] font-extralight font-ClashDisplay leading-[23.4px] tracking-[1.63px] text-white">
          NIKOLAY LAZAREV
        </h1>
      </Link>
      <div className="flex flex-row gap-[25px]">
        <NavLink href="/portfolio" color="white">
          Portfolio
        </NavLink>
        <NavLink href="/contact-us" color="white">
          Contact
        </NavLink>
        <InstagramLink />
      </div>
    </header>
  );
};

const HeaderMobile = () => {
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = useCallback(() => setIsOpen(false), []);

  useEffect(() => {
    if (!isOpen) return;
    const html = document.documentElement;
    const body = document.body;
    const prevHtmlOverflow = html.style.overflow;
    const prevBodyOverflow = body.style.overflow;
    html.style.overflow = "hidden";
    body.style.overflow = "hidden";
    return () => {
      html.style.overflow = prevHtmlOverflow;
      body.style.overflow = prevBodyOverflow;
    };
  }, [isOpen]);

  const burgerLineBase = `block h-[2px] w-full rounded-full bg-black transition-transform duration-300 ease-out`;

  return (
    <header
      className={`relative top-0 left-0 flex w-[calc(100%+32px)] h-[64px] mx-[-16px] 
    z-10000 px-[16px] items-center justify-between lg:hidden`}
    >
      <Link
        href="/"
        className={`relative z-60 text-[20px] font-extralight font-ClashDisplay leading-[23.4px] tracking-[1.63px] text-black`}
      >
        NIKOLAY LAZAREV
      </Link>

      <button
        type="button"
        aria-label={isOpen ? "Close navigation" : "Open navigation"}
        className="relative z-60 flex h-[24px] w-[16px] flex-col items-center justify-center gap-[3px]"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span
          className={`${burgerLineBase} ${
            isOpen ? "translate-y-[5px] rotate-45" : ""
          }`}
        />
        <span
          className={`block h-[2px] w-full rounded-full bg-black transition-all duration-300 ease-out ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        />
        <span
          className={`${burgerLineBase} ${
            isOpen ? "-translate-y-[5px] -rotate-45" : ""
          }`}
        />
      </button>
      <AnimatePresence initial={false} mode="wait">
        {isOpen && (
          <MobileNavMenu key="mobile-menu" onClose={closeMenu} />
        )}
      </AnimatePresence>
    </header>
  );
};

const parentVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
};

interface MobileNavMenuProps {
  onClose: () => void;
}

const MobileNavMenu = ({ onClose }: MobileNavMenuProps) => {
  const router = useRouter();

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [onClose]);

  const handleNavigate = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    onClose();

    setTimeout(() => {
      router.push(href);
    }, 350);
  };

  return (
    <motion.div
      role="dialog"
      aria-modal="true"
      aria-label="Navigation menu"
      className="fixed inset-0 z-50 flex min-h-0 flex-col overflow-y-auto bg-white"
      initial={{ opacity: 0, y: -20 }}
      animate={{
        opacity: 1,
        y: 0,
        transition: { ease: "easeOut", duration: 0.35 },
      }}
      exit={{
        opacity: 0,
        y: -20,
        transition: { ease: "easeIn", duration: 0.25 },
      }}
    >
      <nav className="flex min-h-dvh w-full flex-col items-center pt-[116px] pb-10">
        <motion.ul
          className="m-0 flex w-full list-none flex-col items-center gap-[25px] p-0"
          variants={parentVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.li variants={itemVariants} className="flex w-full justify-center">
            <NavLink
              href="/"
              color="black"
              onClick={(e) => handleNavigate(e, "/")}
            >
              Home
            </NavLink>
          </motion.li>

          <motion.li variants={itemVariants} className="flex w-full justify-center">
            <NavLink
              href="/about"
              color="black"
              onClick={(e) => handleNavigate(e, "/about")}
            >
              About
            </NavLink>
          </motion.li>

          <motion.li variants={itemVariants} className="flex w-full justify-center">
            <NavLink
              href="/portfolio"
              color="black"
              onClick={(e) => handleNavigate(e, "/portfolio")}
            >
              Portfolio
            </NavLink>
          </motion.li>

          <motion.li variants={itemVariants} className="flex w-full justify-center">
            <NavLink
              href="/contact-us"
              color="black"
              onClick={(e) => handleNavigate(e, "/contact-us")}
            >
              Contact
            </NavLink>
          </motion.li>

          <motion.li
            variants={itemVariants}
            className="flex w-full justify-center"
            onClick={onClose}
          >
            <InstagramLink variant="onLight" />
          </motion.li>
        </motion.ul>
      </nav>
    </motion.div>
  );
};

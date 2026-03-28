"use client";

import { useState, type MouseEvent } from "react";
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

  const dynamicColor = isOpen ? "text-white" : "text-black";
  const dynamicBg = isOpen ? "bg-white" : "bg-black";

  const burgerLineBase = `block h-[2px] w-full rounded-full ${dynamicBg} transition-transform duration-300 ease-out`;

  return (
    <header
      className={`relative top-0 left-0 flex w-[calc(100%+32px)] h-[64px] mx-[-16px] 
    z-10000 px-[16px] items-center justify-between lg:hidden`}
    >
      <Link
        href="/"
        className={`relative z-20 text-[20px] font-extralight font-ClashDisplay leading-[23.4px] tracking-[1.63px] ${dynamicColor}`}
      >
        NIKOLAY LAZAREV
      </Link>

      <button
        type="button"
        aria-label={isOpen ? "Close navigation" : "Open navigation"}
        className="relative z-20 flex h-[24px] w-[16px] flex-col items-center justify-center gap-[3px]"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span
          className={`${burgerLineBase} ${
            isOpen ? "translate-y-[5px] rotate-45" : ""
          }`}
        />
        <span
          className={`block h-[2px] w-full rounded-full ${dynamicBg} transition-all duration-300 ease-out ${
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
          <MobileNavMenu key="mobile-menu" onClose={() => setIsOpen(false)} />
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
  exit: {
    opacity: 0,
    transition: {
      staggerChildren: 0.03,
      staggerDirection: -1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
  exit: {
    opacity: 0,
    y: -14,
    transition: { duration: 0.18 },
  },
};

interface MobileNavMenuProps {
  onClose: () => void;
}

const MobileNavMenu = ({ onClose }: MobileNavMenuProps) => {
  const router = useRouter();

  const handleNavigate = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    onClose();

    setTimeout(() => {
      router.push(href);
    }, 350);
  };

  return (
    <motion.div
      className="absolute top-0 left-0 flex w-full h-dvh bg-[#1E1E1E] z-10"
      initial={{ opacity: 0, y: -20 }}
      animate={{
        opacity: 1,
        y: 0,
        transition: { ease: "easeOut", duration: 0.35 },
      }}
      exit={{
        opacity: 0,
        y: -8,
        transition: { duration: 0.18, delay: 0.18 },
      }}
    >
      <motion.nav
        className="flex mt-[116px] w-full items-center flex-col gap-[25px]"
        variants={parentVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="w-full flex justify-center"
        >
          <NavLink
            href="/"
            color="white"
            onClick={(e) => handleNavigate(e, "/")}
          >
            Home
          </NavLink>
        </motion.div>

        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="w-full flex justify-center"
        >
          <NavLink
            href="/about"
            color="white"
            onClick={(e) => handleNavigate(e, "/about")}
          >
            About
          </NavLink>
        </motion.div>

        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="w-full flex justify-center"
        >
          <NavLink
            href="/portfolio"
            color="white"
            onClick={(e) => handleNavigate(e, "/portfolio")}
          >
            Portfolio
          </NavLink>
        </motion.div>

        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="w-full flex justify-center"
        >
          <NavLink
            href="/contact-us"
            color="white"
            onClick={(e) => handleNavigate(e, "/contact-us")}
          >
            Contact
          </NavLink>
        </motion.div>

        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="w-full flex justify-center"
          onClick={onClose}
        >
          <InstagramLink />
        </motion.div>
      </motion.nav>
    </motion.div>
  );
};

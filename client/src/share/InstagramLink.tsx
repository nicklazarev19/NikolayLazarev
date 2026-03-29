import InstagramIcon from "@/assets/icons/instagram.svg";
import Image from "next/image";
import Link from "next/link";

type InstagramLinkProps = {
  /** White icon on dark UI (default). Use "light" for dark icon on white background. */
  variant?: "onDark" | "onLight";
};

export const InstagramLink = ({ variant = "onDark" }: InstagramLinkProps) => {
  return (
    <Link
      href="https://www.instagram.com/nikolaylazarevv"
      target="_blank"
      className="flex items-center justify-center"
    >
      <Image
        src={InstagramIcon}
        alt="Instagram"
        width={20}
        height={20}
        className={variant === "onLight" ? "brightness-0" : undefined}
      />
    </Link>
  );
};

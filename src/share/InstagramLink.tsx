import InstagramIcon from "@/assets/icons/instagram.svg";
import Image from "next/image";
import Link from "next/link";

export const InstagramLink = () => {
  return (
    <Link
      href="https://www.instagram.com/lazarev.design/"
      target="_blank"
      className="flex items-center justify-center"
    >
      <Image src={InstagramIcon} alt="Instagram" width={20} height={20} />
    </Link>
  );
};

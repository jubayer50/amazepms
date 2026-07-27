import Link from "next/link";
import { usePathname } from "next/navigation";

const MyNavLink = ({ href, children }) => {
  const pathName = usePathname();

  return (
    <li>
      <Link
        href={href}
        className={`${pathName == href ? "text-[#0055FF]" : ""} font-medium `}
      >
        {children}
      </Link>
    </li>
  );
};

export default MyNavLink;

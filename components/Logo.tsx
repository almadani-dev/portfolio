import { cn } from "@/lib/utils";
import Link from "next/link";

interface Props {
  className?: string;
  title: string;
  title2: string;
  subtitle: string;
}
const Logo = ({ className, title, title2, subtitle }: Props) => {
  return (
    <div className="text-2xl group">
      <Link href={"/"}>
        <h2
          className={cn(
            "font-semibold  text-2xl hover:text-hovercolor hoverEffect",
            className
          )}
        >
          {title}
          <span className="font-semibold  text-2xl text-hovercolor">
            {subtitle}
          </span>
          {title2}
        </h2>
      </Link>
    </div>
  );
};

export default Logo;

import { Link } from "react-router-dom";
import { Separator } from "devign";
import { cn } from "@/lib/utils";
import { LOGO } from "@/lib/assets";

const COLS = [
  {
    title: "Product",
    links: ["Features", "Pricing", "Integrations", "Changelog"],
  },
  { title: "Company", links: ["About", "Blog", "Careers", "Contact"] },
  { title: "Legal", links: ["Privacy", "Terms", "Security", "GDPR"] },
];

const SOCIALS = ["Twitter", "GitHub", "LinkedIn"];

export function AdminFooter({
  variant = "landing",
  className,
}: {
  variant?: "landing" | "dashboard";
  className?: string;
}) {
  if (variant === "dashboard")
    return (
      <footer
        className={cn(
          "flex items-center justify-between px-4 py-3 relative",
          className,
        )}
      >
        <Separator className="absolute top-0 inset-x-0" />
        <span className="text-[10px] text-muted-foreground">Flock 1.0.1</span>
        <span className="text-[10px] text-muted-foreground">
          by <span className="text-primary font-semibold">Gr8QM</span>
        </span>
      </footer>
    );

  return (
    <footer className={cn("py-14 px-6", className)}>
      <Separator className="mb-14" />
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
          <div>
            <img src={LOGO.svg} alt="Flock" className="h-7 w-auto mb-3" />
            <p className="text-sm text-muted-custom leading-relaxed">
              The most sophisticated church management experience ever built.
            </p>
          </div>
          {COLS.map((col) => (
            <div key={col.title}>
              <h4 className="text-[10px] font-black uppercase tracking-widest text-faint mb-3">
                {col.title}
              </h4>
              <ul className="space-y-2.5">
                {col.links.map((l) => (
                  <li key={l}>
                    <Link
                      to="#"
                      className="text-sm text-muted-custom hover:text-primary transition-colors"
                    >
                      {l}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <Separator className="mb-6" />
        <div className="flex flex-col md:flex-row justify-between items-center gap-3">
          <span className="text-[11px] text-faint">
            © 2026 Flock. Crafted with care.
          </span>
          <div className="flex gap-5">
            {SOCIALS.map((s) => (
              <Link
                key={s}
                to="#"
                className="text-[11px] font-bold uppercase tracking-widest text-faint hover:text-primary transition-colors"
              >
                {s}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default AdminFooter;

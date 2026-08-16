import { FC } from "react"

const links = [
  { href: "https://github.com/ZakDaMack/", label: "GitHub" },
  { href: "https://linkedin.com/in/zak-dowsett-4a7455131/", label: "LinkedIn" },
  { href: "https://hub.docker.com/u/zakdamack/", label: "Docker" }
];

const Footer: FC = () => (
  <footer className="py-6 border-t border-nord-4">
    <div className="container mx-auto px-4 flex flex-col md:flex-row gap-4 justify-between">
      <p>&#169; {new Date().getFullYear()} Zak Dowsett</p>
      <a href="mailto:z.dowsett@outlook.com" className="text-nord-10 dark:text-nord-8">z.dowsett@outlook.com</a>
      <div className="grow" />
      <div>
        {links.map((link, i) => (
          <>
            <a href={link.href} className="text-nord-10 dark:text-nord-8">{link.label}</a>
            {i != links.length - 1 && (<span className='px-2 text-sm text-nord-10 dark:text-nord-8'>&#x2022;</span>)}
          </>
        ))}
      </div>
    </div>
  </footer>
);

export default Footer;

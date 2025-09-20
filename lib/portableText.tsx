import type { PortableTextComponents } from "@portabletext/react";
import Link from "next/link";
export const components: PortableTextComponents = {
  block: {
    h2: ({ children }) => <h2 className="text-xl font-semibold my-3">{children}</h2>,
    normal: ({ children }) => <p className="leading-7 my-3">{children}</p>,
  },
  marks: {
    link: ({ children, value }) => {
      const href = (value as any)?.href || "#";
      const external = /^https?:\/\//.test(href);
      return <Link href={href} target={external ? "_blank" : undefined} className="underline hover:text-white">{children}</Link>;
    },
  },
};
export default components;
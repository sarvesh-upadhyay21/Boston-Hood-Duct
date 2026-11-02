import type { ReactNode } from "react";

interface BrandTextProps {
  children: string;
}

export function BrandText({ children }: BrandTextProps): ReactNode {
  return children.split(/(Boston Hood (?:&|and) Duct)/gi).map((text, index) =>
    /Boston Hood (?:&|and) Duct/i.test(text) ? (
      <strong className="brand-name" key={index}>
        BOSTON HOOD &amp; DUCT
      </strong>
    ) : (
      text
    )
  );
}

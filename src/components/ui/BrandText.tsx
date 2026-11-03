import type { ReactNode } from "react";

interface BrandTextProps {
  children?: ReactNode;
}

export function BrandText({ children }: BrandTextProps): ReactNode {
  if (typeof children !== "string") {
    return children;
  }

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

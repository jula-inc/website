import { site } from "@/lib/site";

/** 登記上の所在地を 1 行ずつブロック表示。 */
export function AddressLines() {
  return (
    <>
      {site.company.addressLines.map((line) => (
        <span key={line} className="block">
          {line}
        </span>
      ))}
    </>
  );
}

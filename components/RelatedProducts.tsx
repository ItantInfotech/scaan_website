import ProductCard from "./ProductCard";
import { PRODUCTS, type Product } from "@/content/products";

/*
 * Cross-sell row at the bottom of product pages. Filters the global PRODUCTS
 * list to exclude the current product, then surfaces up to `limit` peers.
 */
type Props = {
  currentCode: Product["code"];
  limit?: number;
};

export default function RelatedProducts({ currentCode, limit = 3 }: Props) {
  const peers = PRODUCTS.filter((p) => p.code !== currentCode).slice(0, limit);

  return (
    <div className="grid grid-cols-1 gap-px bg-line-hi sm:grid-cols-2 lg:grid-cols-3">
      {peers.map((p) => (
        <ProductCard key={p.code} {...p} />
      ))}
    </div>
  );
}

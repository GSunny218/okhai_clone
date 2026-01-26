import FiltersSidebar from "../filters/FiltersSideBar";
import ProductsHeader from "../ProductsHeader";
import ProductGrid from "../ProductGrid";
import { allWomenProducts } from "../data/products";

const AllClothing = () => {
  return (
    <section className="flex px-10 py-6">
  {/* FIXED FILTER */}
  <aside className="w-64 fixed top-40 left-10 h-[calc(100vh-160px)] overflow-y-auto">
    <FiltersSidebar />
  </aside>

  {/* MAIN CONTENT */}
  <div className="ml-70 flex-1">
    <ProductsHeader total={allWomenProducts.totalCount} />
        <ProductGrid products={allWomenProducts.products} />
  </div>
</section>

  );
};

export default AllClothing;

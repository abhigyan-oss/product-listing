import { useMemo, useState } from "react";
import ProductCard from "../components/ProductCard";
import SearchBar from "../components/SearchBar";

export default function Home({ products }) {
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const productsPerPage = 8;

  const filteredProducts = useMemo(() => {
    return products.filter((product) =>
      product.title.toLowerCase().includes(search.toLowerCase())
    );
  }, [products, search]);

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  const currentProducts = filteredProducts.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  );

  return (
    <>
      <nav className="navbar navbar-dark bg-primary shadow">
        <div className="container">
          <span className="navbar-brand fw-bold fs-3">🛍️ Fake Store</span>
        </div>
      </nav>

      <div className="container py-5">
        <div className="text-center mb-5">
          <h2 className="fw-bold">Discover Amazing Products</h2>
          <p className="text-muted">Browse products from Fake Store API</p>
        </div>

        <SearchBar
          search={search}
          setSearch={(value) => {
            setSearch(value);
            setCurrentPage(1);
          }}
        />

        <div className="row">
          {currentProducts.length > 0 ? (
            currentProducts.map((product) => (
              <div
                className="col-lg-3 col-md-4 col-sm-6 mb-4"
                key={product.id}
              >
                <ProductCard product={product} />
              </div>
            ))
          ) : (
            <h3 className="text-center">No Products Found</h3>
          )}
        </div>

        {filteredProducts.length > 0 && (
          <div className="d-flex justify-content-center align-items-center gap-3 mt-4">
            <button
              className="btn btn-outline-primary"
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((prev) => prev - 1)}
            >
              Previous
            </button>

            <span className="fw-bold">
              Page {currentPage} of {totalPages}
            </span>

            <button
              className="btn btn-outline-primary"
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage((prev) => prev + 1)}
            >
              Next
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export async function getServerSideProps() {
  try {
    const res = await fetch("https://fakestoreapi.com/products", {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
        "Accept": "application/json",
        "Referer": "https://fakestoreapi.com/",
      },
      cache: "no-store",
    });

    console.log("Status:", res.status);

    if (!res.ok) {
      const text = await res.text();
      console.log("Response:", text);
      throw new Error(`HTTP ${res.status}`);
    }

    const products = await res.json();

    return {
      props: {
        products,
      },
    };
  } catch (error) {
    console.error("SSR Fetch Error:", error);

    return {
      props: {
        products: [],
      },
    };
  }
}
import Link from "next/link";

export default function ProductDetails({ product }) {
  return (
    <div className="container py-5">

      <Link href="/">
        <button className="btn btn-secondary mb-4">
          ← Back
        </button>
      </Link>

      <div className="card shadow-lg border-0 rounded-4">

        <div className="row g-0">

          <div className="col-md-5 text-center p-5">

            <img
              src={product.image}
              alt={product.title}
              className="img-fluid p-4"
              style={{
                maxHeight: "350px",
                objectFit: "contain",
              }}
            />

          </div>

          <div className="col-md-7 p-5">

            <h2>{product.title}</h2>

            <span className="badge rounded-pill bg-primary mb-3">
              {product.category}
            </span>

            <h2 className="text-success">
              ${product.price}
            </h2>

            <div className="text-warning fw-bold mb-3">
              ⭐ {product.rating.rate}
              <span className="text-muted">
                {" "}
                ({product.rating.count} Reviews)
              </span>
            </div>

            <hr />

            <p className="lead">
              {product.description}
            </p>

          </div>

        </div>

      </div>
    </div>
  );
}

export async function getServerSideProps({ params }) {
    try {
      const res = await fetch(
        `https://fakestoreapi.com/products/${params.id}`,
        {
          headers: {
            "Accept": "application/json",
            "User-Agent": "Mozilla/5.0",
          },
          cache: "no-store",
        }
      );
  
      if (!res.ok) {
        throw new Error(`HTTP ${res.status}`);
      }
  
      const product = await res.json();
  
      return {
        props: {
          product,
        },
      };
    } catch (err) {
      console.error("SSR Product Error:", err);
  
      return {
        notFound: true,
      };
    }
  }
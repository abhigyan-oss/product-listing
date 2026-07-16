import Link from "next/link";

export default function ProductCard({ product }) {
  return (
    <div className="card product-card h-100 border-0 shadow-sm">

      <div className="image-box">
        <img
          src={product.image}
          alt={product.title}
        />
      </div>

      <div className="card-body d-flex flex-column">

        <h6 className="title fw-semibold">
          {product.title}
        </h6>

        <span className="badge rounded-pill bg-primary mb-2">
          {product.category}
        </span>

        <div className="text-warning fw-semibold">
          ⭐ {product.rating.rate}

          <span className="text-muted">
            {" "}
            ({product.rating.count})
          </span>
        </div>

        <h4 className="text-success mt-2">
          ${product.price}
        </h4>

        <Link href={`/product/${product.id}`}>
          <button className="btn btn-primary w-100 mt-auto">
            View Details
          </button>
        </Link>

      </div>

    </div>
  );
}
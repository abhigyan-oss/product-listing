export default function SearchBar({
    search,
    setSearch,
  }) {
    return (
      <div className="mb-5">
        <input
          type="text"
          className="form-control form-control-lg shadow-sm"
          placeholder="🔍 Search by product title..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
        />
      </div>
    );
  }
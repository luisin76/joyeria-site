function ProductCard({ nombre, tono, descripcion, precio }) {
  return (
    <article className="rounded-[28px] border border-rose-100 bg-white p-5 shadow-lg shadow-rose-50">
      <div className="aspect-[4/5] rounded-[22px] bg-gradient-to-br from-pink-200 to-rose-300 flex items-center justify-center">
        <p className="text-sm text-white font-medium">Foto del producto</p>
      </div>

      <div className="mt-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-xl font-semibold text-[#3d302d]">{nombre}</h3>
            <p className="text-sm text-rose-500 mt-1">{tono}</p>
          </div>

          <span className="rounded-full bg-rose-50 px-3 py-1 text-sm font-medium text-rose-500">
            {precio}
          </span>
        </div>

        <p className="mt-3 text-[#6e5b56] leading-7">{descripcion}</p>
      </div>
    </article>
  );
}

export default ProductCard;
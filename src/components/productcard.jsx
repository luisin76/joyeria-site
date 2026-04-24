function productcard({ nombre, tono, descripcion, precio }) {
  return (
    <article className="rounded-3xl border border-rose-100 bg-white p-6 shadow-sm hover:shadow-md transition">
      <div className="aspect-square rounded-2xl bg-gradient-to-br from-rose-100 to-orange-50 flex items-center justify-center">
        <span className="text-5xl">🌸</span>
      </div>

      <div className="mt-5">
        <p className="text-sm text-rose-400">{tono}</p>

        <h3 className="mt-2 text-xl font-semibold text-[#3d302d]">
          {nombre}
        </h3>

        <p className="mt-3 text-sm leading-6 text-[#6e5b56]">
          {descripcion}
        </p>

        <div className="mt-5 flex items-center justify-between">
          <p className="font-semibold text-[#3d302d]">{precio}</p>

          <a
            href="#pedido"
            className="rounded-xl bg-rose-400 px-4 py-2 text-sm font-medium text-white"
          >
            Pedir
          </a>
        </div>
      </div>
    </article>
  );
}

export default productcard;
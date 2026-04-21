import ProductCard from "./components/ProductCard";

function App() {
  const productos = [
    {
      id: 1,
      nombre: "Aretes Rosa Roja",
      tono: "Rojo pasión",
      descripcion:
        "Un diseño con presencia, ideal para regalar o elevar un outfit sencillo.",
      precio: "$250 MXN",
    },
    {
      id: 2,
      nombre: "Aretes Rosa Blanca",
      tono: "Blanco perla",
      descripcion:
        "Delicados, femeninos y fáciles de combinar para un look elegante.",
      precio: "$250 MXN",
    },
    {
      id: 3,
      nombre: "Aretes Rosa Lila",
      tono: "Lila pastel",
      descripcion:
        "Una pieza suave y femenina para quienes aman los tonos delicados.",
      precio: "$250 MXN",
    },
  ];

  return (
    <div className="min-h-screen bg-[#fffaf8] text-[#4a3b37]">
      <header className="border-b border-rose-100 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
          <div>
            <p className="text-xl font-semibold">Nombre de la Marca</p>
            <p className="text-sm text-[#8a6f67]">
              Joyería artesanal hecha con amor
            </p>
          </div>

          <nav className="hidden md:flex gap-6 text-sm">
            <a href="#coleccion">Colección</a>
            <a href="#nosotros">Nosotros</a>
            <a href="#pedido">Pedidos</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="mx-auto max-w-6xl px-6 py-20">
          <div className="max-w-2xl">
            <span className="inline-block rounded-full border border-rose-200 bg-white px-4 py-2 text-sm text-rose-500">
              Hecho a mano en México
            </span>

            <h1 className="mt-6 text-4xl md:text-6xl font-semibold leading-tight text-[#3d302d]">
              Accesorios delicados para mujeres que aman los detalles bonitos
            </h1>

            <p className="mt-6 text-lg leading-8 text-[#6e5b56]">
              Descubre una colección de aretes artesanales con flores, colores
              suaves y un estilo femenino que se siente especial desde el primer
              vistazo.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a
                href="#coleccion"
                className="inline-flex items-center justify-center rounded-2xl bg-rose-400 px-6 py-3 text-white font-medium"
              >
                Ver colección
              </a>

              <a
                href="#pedido"
                className="inline-flex items-center justify-center rounded-2xl border border-rose-200 bg-white px-6 py-3 font-medium text-[#4a3b37]"
              >
                Hacer pedido
              </a>
            </div>
          </div>
        </section>
        <section id="coleccion" className="mx-auto max-w-6xl px-6 py-20">
          <div className="max-w-2xl">
            <p className="text-sm uppercase tracking-[0.2em] text-rose-400">
              Colección actual
            </p>
            <h2 className="mt-3 text-3xl md:text-4xl font-semibold text-[#3d302d]">
              Aretes artesanales con personalidad propia
            </h2>
          </div>

          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <ProductCard
              nombre="Aretes Rosa Roja"
              tono="Rojo pasión"
              descripcion="Un diseño con presencia, ideal para regalar o elevar un outfit sencillo."
              precio="$250 MXN"
            />

            <ProductCard
              nombre="Aretes Rosa Blanca"
              tono="Blanco perla"
              descripcion="Delicados, femeninos y fáciles de combinar para un look elegante."
              precio="$250 MXN"
            />

            <ProductCard
              nombre="Aretes Rosa Lila"
              tono="Lila pastel"
              descripcion="Una pieza suave y femenina para quienes aman los tonos delicados."
              precio="$250 MXN"
            />
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;

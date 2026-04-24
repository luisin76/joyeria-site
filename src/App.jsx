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
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div>
            <p className="text-xl font-semibold">Smoked Peach</p>
            <p className="text-sm text-[#8a6f67]">
              Joyería artesanal hecha con amor
            </p>
          </div>

          <nav className="hidden gap-6 text-sm md:flex">
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

            <h1 className="mt-6 text-4xl font-semibold leading-tight text-[#3d302d] md:text-6xl">
              Accesorios delicados para mujeres que aman los detalles bonitos
            </h1>

            <p className="mt-6 text-lg leading-8 text-[#6e5b56]">
              Descubre una colección de aretes artesanales con flores, colores
              suaves y un estilo femenino que se siente especial desde el primer
              vistazo.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="#coleccion"
                className="inline-flex items-center justify-center rounded-2xl bg-rose-400 px-6 py-3 font-medium text-white"
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
            <h2 className="mt-3 text-3xl font-semibold text-[#3d302d] md:text-4xl">
              Aretes artesanales con personalidad propia
            </h2>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {productos.map((producto) => (
              <ProductCard key={producto.id} {...producto} />
            ))}
          </div>
        </section>

        <section id="nosotros" className="bg-white">
          <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-2 md:items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-rose-400">
                Sobre la marca
              </p>

              <h2 className="mt-3 text-3xl font-semibold text-[#3d302d] md:text-4xl">
                Piezas pequeñas, intención enorme
              </h2>

              <p className="mt-5 leading-8 text-[#6e5b56]">
                Smoked Peach nace de la idea de crear accesorios femeninos,
                dulces y únicos para mujeres que disfrutan verse arregladas sin
                perder su esencia.
              </p>

              <p className="mt-4 leading-8 text-[#6e5b56]">
                Cada pieza se prepara con cuidado, pensando en colores suaves,
                detalles florales y combinaciones fáciles de usar todos los días.
              </p>
            </div>

            <div className="rounded-[2rem] bg-[#fff4f4] p-8">
              <p className="text-5xl">✨</p>
              <h3 className="mt-6 text-2xl font-semibold text-[#3d302d]">
                Hecho para regalar o consentirte
              </h3>
              <p className="mt-4 leading-7 text-[#6e5b56]">
                Ideales para cumpleaños, detalles románticos, eventos especiales
                o simplemente para darle un toque bonito a tu día.
              </p>
            </div>
          </div>
        </section>

        <section id="pedido" className="mx-auto max-w-6xl px-6 py-20">
          <div className="rounded-[2rem] bg-[#3d302d] px-6 py-12 text-center text-white md:px-12">
            <p className="text-sm uppercase tracking-[0.2em] text-rose-200">
              Pedidos personalizados
            </p>

            <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
              ¿Lista para pedir tus aretes?
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-8 text-rose-50">
              Escríbenos por WhatsApp para consultar disponibilidad, colores y
              opciones personalizadas. También podemos ayudarte a elegir el par
              ideal para regalo.
            </p>

            <a
              href="https://wa.me/528672128639"
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center justify-center rounded-2xl bg-rose-400 px-7 py-3 font-medium text-white"
            >
              Pedir por WhatsApp
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
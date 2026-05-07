const productos = [
  {
    id: 1,
    nombre: "Aretes Rosa Roja",
    slug: "aretes-rosa-roja",
    tono: "Rojo pasión",
    descripcion:
      "Un diseño con presencia, ideal para regalar o elevar un outfit sencillo.",
    precio: "$250 MXN",
    imagen: "/img/arete-rojo.jpg",
  },
  {
    id: 2,
    nombre: "Aretes Rosa Blanca",
    slug: "aretes-rosa-blanca",
    tono: "Blanco perla",
    descripcion:
      "Delicados, femeninos y fáciles de combinar para un look elegante.",
    precio: "$250 MXN",
    imagen: "/img/arete-blanco.jpg",
  },
  {
    id: 3,
    nombre: "Aretes Rosa Lila",
    slug: "aretes-rosa-lila",
    tono: "Lila pastel",
    descripcion:
      "Una pieza suave y femenina para quienes aman los tonos delicados.",
    precio: "$250 MXN",
    imagen: "/img/arete-lila.jpg",
  },
  {
    id: 4,
    nombre: "🐾 Aretes Huellita Celeste",
    slug: "aretes-huellita-celeste",
    tono: "Celeste suave",
    descripcion: `“Un pequeño detalle que dice mucho.”
    Inspirados en el amor incondicional, estos aretes en forma de huellita en tono celeste son perfectos para quienes llevan a sus mascotas siempre en el corazón.
    Ligeros, delicados y con un toque tierno que complementa cualquier look.
    Un accesorio con significado… ideal para ti o para alguien especial.`,
    precio: "$250 MXN",
    imagen: "/img/aretes-charm-paws-celeste.jpg",
  },
  {
    id: 5,
    nombre: "🐾 Aretes Huellita Blanca",
    slug: "aretes-huellita-blanca",
    tono: "Blanco perla",
    descripcion: `"Sutiles, dulces y llenos de cariño."
        Con un diseño limpio y elegante, estas huellitas en tono blanco transmiten calma y ternura.
        Perfectos para el día a día, combinan con todo y añaden un toque especial sin esfuerzo.
        Un recordatorio discreto de lo que más amas.`,
    precio: "$250 MXN",
    imagen: "/img/aretes-charm-paws.jpg",
  },
  {
    id: 6,
    nombre: "Aretes Rosa Turquesa",
    slug: "aretes-rosa-turquesa",
    tono: "Turquesa suave",
    descripcion:
      "Una pieza suave y femenina para quienes aman los tonos delicados.",
    precio: "$250 MXN",
    imagen: "/img/arete-turquesa.jpg",
  },
  {
    id: 7,
    nombre: "💀 Aretes Calavera Tradicional",
    slug: "aretes-calavera-tradicional",
    tono: "Negro brillante",
    descripcion: `“Color, cultura y personalidad en una sola pieza.”
    Inspirados en el arte tradicional del Día de Muertos, estos aretes destacan por sus colores vibrantes y detalles únicos.
    Ideales para quienes aman expresar su estilo con un toque cultural y auténtico.
    Un accesorio que no pasa desapercibido.`,
    precio: "$250 MXN",
    imagen: "/img/aretes-calavera-02.jpg",
  },
  {
    id: 8,
    nombre: "💀 Aretes Calavara Floral",
    slug: "aretes-calavera-floral",
    tono: "Negro brillante",
    descripcion: `“Un equilibrio perfecto entre lo clásico y lo artístico.”
    Estas calaveritas decoradas con detalles florales combinan tradición y estilo moderno.
    Perfectas para elevar cualquier outfit con un toque creativo y lleno de identidad.`,
    precio: "$250 MXN",
    imagen: "/img/aretes-calavera-03.jpg",
  },
  {
    id: 9,
    nombre: "💙 Aretes Corazón Arcoíris",
    slug: "aretes-corazon-arcoiris",
    tono: "Celeste suave",
    descripcion: `“Un toque de alegría que ilumina tu día.”
    Con un diseño en forma de corazón y un arcoíris vibrante, estos aretes transmiten energía, color y positivismo.
    Ideales para looks frescos y llenos de vida.
    Para quienes aman destacar con estilo propio.`,
    precio: "$250 MXN",
    imagen: "/img/aretes-charm-corazones-arcoiris.jpg",
  },
  {
    id: 10,
    nombre: "🌸 Aretes Flor Vintage (Marco Dorado)",
    slug: "aretes-flor-vintage-marco-dorado",
    tono: "",
    descripcion:
      ``,
    precio: "$250 MXN",
    imagen: "/img/arete-lila.jpg",
  },
  {
    id: 11,
    nombre: "Aretes Rosa Lila",
    slug: "aretes-rosa-lila",
    tono: "Lila pastel",
    descripcion:
      ``,
    precio: "$250 MXN",
    imagen: "/img/arete-lila.jpg",
  },
  {
    id: 12,
    nombre: "Aretes Rosa Lila",
    slug: "aretes-rosa-lila",
    tono: "Lila pastel",
    descripcion:
      ``,
    precio: "$250 MXN",
    imagen: "/img/arete-lila.jpg",
  },
  {
    id: 13,
    nombre: "Aretes Rosa Lila",
    slug: "aretes-rosa-lila",
    tono: "Lila pastel",
    descripcion:
      ``,
    precio: "$250 MXN",
    imagen: "/img/arete-lila.jpg",
  },
  {
    id: 14,
    nombre: "Aretes Rosa Lila",
    slug: "aretes-rosa-lila",
    tono: "Lila pastel",
    descripcion:
      ``,
    precio: "$250 MXN",
    imagen: "/img/arete-lila.jpg",
  },
  {
    id: 15,
    nombre: "Aretes Rosa Lila",
    slug: "aretes-rosa-lila",
    tono: "Lila pastel",
    descripcion:
      ``,
    precio: "$250 MXN",
    imagen: "/img/arete-lila.jpg",
  },
  {
    id: 16,
    nombre: "Aretes Rosa Lila",
    slug: "aretes-rosa-lila",
    tono: "Lila pastel",
    descripcion:
      ``,
    precio: "$250 MXN",
    imagen: "/img/arete-lila.jpg",
  },
  {
    id: 17,
    nombre: "Aretes Rosa Lila",
    slug: "aretes-rosa-lila",
    tono: "Lila pastel",
    descripcion:
      ``,
    precio: "$250 MXN",
    imagen: "/img/arete-lila.jpg",
  },
  {
    id: 18,
    nombre: "Aretes Rosa Lila",
    slug: "aretes-rosa-lila",
    tono: "Lila pastel",
    descripcion:
      ``,
    precio: "$250 MXN",
    imagen: "/img/arete-lila.jpg",
  },
  {
    id: 19,
    nombre: "Aretes Rosa Lila",
    slug: "aretes-rosa-lila",
    tono: "Lila pastel",
    descripcion:
      ``,
    precio: "$250 MXN",
    imagen: "/img/arete-lila.jpg",
  },
  {
    id: 20,
    nombre: "Aretes Rosa Lila",
    slug: "aretes-rosa-lila",
    tono: "Lila pastel",
    descripcion:
      ``,
    precio: "$250 MXN",
    imagen: "/img/arete-lila.jpg",
  },
  {
    id: 21,
    nombre: "Aretes Rosa Lila",
    slug: "aretes-rosa-lila",
    tono: "Lila pastel",
    descripcion:
      ``,
    precio: "$250 MXN",
    imagen: "/img/arete-lila.jpg",
  },
  {
    id: 22,
    nombre: "Aretes Rosa Lila",
    slug: "aretes-rosa-lila",
    tono: "Lila pastel",
    descripcion:
      ``,
    precio: "$250 MXN",
    imagen: "/img/arete-lila.jpg",
  },
  {
    id: 23,
    nombre: "Aretes Rosa Lila",
    slug: "aretes-rosa-lila",
    tono: "Lila pastel",
    descripcion:
      ``,
    precio: "$250 MXN",
    imagen: "/img/arete-lila.jpg",
  },
  {
    id: 24,
    nombre: "Aretes Rosa Lila",
    slug: "aretes-rosa-lila",
    tono: "Lila pastel",
    descripcion:
      ``,
    precio: "$250 MXN",
    imagen: "/img/arete-lila.jpg",
  },
  {
    id: 25,
    nombre: "Aretes Rosa Lila",
    slug: "aretes-rosa-lila",
    tono: "Lila pastel",
    descripcion:
      ``,
    precio: "$250 MXN",
    imagen: "/img/arete-lila.jpg",
  },
  {
    id: 26,
    nombre: "Aretes Rosa Lila",
    slug: "aretes-rosa-lila",
    tono: "Lila pastel",
    descripcion:
      ``,
    precio: "$250 MXN",
    imagen: "/img/arete-lila.jpg",
  },
  {
    id: 27,
    nombre: "Aretes Rosa Lila",
    slug: "aretes-rosa-lila",
    tono: "Lila pastel",
    descripcion:
      ``,
    precio: "$250 MXN",
    imagen: "/img/arete-lila.jpg",
  },
  {
    id: 28,
    nombre: "Aretes Rosa Lila",
    slug: "aretes-rosa-lila",
    tono: "Lila pastel",
    descripcion:
      ``,
    precio: "$250 MXN",
    imagen: "/img/arete-lila.jpg",
  },
  {
    id: 29,
    nombre: "Aretes Rosa Lila",
    slug: "aretes-rosa-lila",
    tono: "Lila pastel",
    descripcion:
      ``,
    precio: "$250 MXN",
    imagen: "/img/arete-lila.jpg",
  },
  {
    id: 30,
    nombre: "Aretes Rosa Lila",
    slug: "aretes-rosa-lila",
    tono: "Lila pastel",
    descripcion:
      ``,
    precio: "$250 MXN",
    imagen: "/img/arete-lila.jpg",
  },
  {
    id: 31,
    nombre: "Aretes Rosa Lila",
    slug: "aretes-rosa-lila",
    tono: "Lila pastel",
    descripcion:
      ``,
    precio: "$250 MXN",
    imagen: "/img/arete-lila.jpg",
  },
  {
    id: 32,
    nombre: "Aretes Rosa Lila",
    slug: "aretes-rosa-lila",
    tono: "Lila pastel",
    descripcion:
      ``,
    precio: "$250 MXN",
    imagen: "/img/arete-lila.jpg",
  },
  {
    id: 33,
    nombre: "Aretes Rosa Lila",
    slug: "aretes-rosa-lila",
    tono: "Lila pastel",
    descripcion:
      ``,
    precio: "$250 MXN",
    imagen: "/img/arete-lila.jpg",
  },
  {
    id: 34,
    nombre: "Aretes Rosa Lila",
    slug: "aretes-rosa-lila",
    tono: "Lila pastel",
    descripcion:
      ``,
    precio: "$250 MXN",
    imagen: "/img/arete-lila.jpg",
  },
];

export default productos;

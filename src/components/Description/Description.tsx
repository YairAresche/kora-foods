import Image from "next/image";

const Description = () => {
  return (
    <section className="bg-description bg-cover bg-center pt-8 pb-12 px-2 md:px-48">
      <div className="text-center mb-4 md:mb-8 text-kimchuski-gray-50">
        <h2 className="text-xl md:text-3xl mb-2 font-bold">KIMCHI</h2>
        <h4 className="italic font-pacifico text-xl md:text-2xl tracking-widest">
          Producto auténtico, saludable y vegano.
        </h4>
      </div>

      {/* Table */}
      <div className="text-center bg-kimchuski-gray-50 p-8 text-kimchuski-green-base rounded-md">
        <table className="min-w-full border-collapse">
          <thead>
            <tr>
              <td className="text-4xl font-bold hidden md:block md:my-8">
                KIMCHUSKI
              </td>
              <td className="flex md:table-cell items-center mb-4 md:mb-2">
                <Image
                  src="/images/description/jar.png"
                  alt="Kimchi"
                  width={75}
                  height={75}
                  className="mx-auto"
                />
                <p className="font-bold font-pacifico tracking-wider ">
                  Kimchi
                </p>
                <h3 className="md:hidden font-bold ms-2 text-xl">KIMCHI</h3>
              </td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th className="border border-green-600 p-2 md:p-6 font-bold text-xs md:text-base">
                SABOR
              </th>
              <td className="border border-green-600 p-2 md:p-6 text-xs md:text-base">
                SABORES RICOS, PROFUNDOS Y UMAMI
              </td>
            </tr>
            <tr>
              <th className="border border-green-600 p-2 md:p-6 font-bold text-xs md:text-base">
                FERMENTACIÓN
              </th>
              <td className="border border-green-600 p-2 md:p-6 text-xs md:text-base">
                SALMUERA Y FERMENTADO EN CASA PARA UN SABOR DELICIOSAMENTE
                COMPLEJO
              </td>
            </tr>
            <tr>
              <th className="border border-green-600 p-2 md:p-6 font-bold text-xs md:text-base">
                INGREDIENTES
              </th>
              <td className="border border-green-600 p-2 md:p-6 text-xs md:text-base">
                HECHO A MANO CON HOJAS ENTERAS DE COL NAPA
              </td>
            </tr>
            <tr>
              <th className="border border-green-600 p-2 md:p-6 font-bold text-xs md:text-base">
                EMPAQUE
              </th>
              <td className="border border-green-600 p-2 md:p-6 text-xs md:text-base">
                FRASCOS DE VIDRIO REUTILIZABLES PARA PONER EN LA MESA
              </td>
            </tr>
            <tr>
              <th className="border border-green-600 p-2 md:p-6 font-bold text-xs md:text-base">
                PERFECTO PARA
              </th>
              <td className="border border-green-600 p-2 md:p-6 text-xs md:text-base">
                SERVIR CON COMIDAS O USAR EN RECETAS
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Description;

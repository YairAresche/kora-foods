import Navbar from "@/components/NavBar/NavBar";
import { RECEIPTITEMS } from "@/constants/receips";
import Image from "next/image";
import { useRouter } from "next/router";

const RecipeDetail = () => {
  const router = useRouter();
  const { slug } = router.query;

  const recipe = RECEIPTITEMS.find((item) => item.slug === slug);

  if (!recipe) {
    return (
      <p className="p-8 text-center text-lg">
        Receta no encontrada o cargando...
      </p>
    );
  }

  return (
    <div>
      <Navbar />
      <div className="p-8 pt-36 justify-items-center">
        <h1 className="text-2xl font-bold mb-4 font-quicksand">
          {recipe.title.toUpperCase()}
        </h1>
        <Image
          src={recipe.src}
          alt={recipe.alt}
          width={500}
          height={500}
          className="mb-4 rounded-lg w-full max-w-md mx-auto"
        />
        <p className="mb-6 text-gray-700">{recipe.description}</p>
        <h2 className="text-xl font-semibold mb-4">Ingredientes</h2>
        {recipe.ingredients.map((group, index) => (
          <div key={index} className="mb-6">
            <h3 className="text-lg font-bold mb-2">{group.category}</h3>
            <ul className="list-disc pl-5 text-gray-600">
              {group.items.map((ingredient, idx) => (
                <li key={idx}>{ingredient}</li>
              ))}
            </ul>
          </div>
        ))}
        <h2 className="text-xl font-semibold mb-4">Pasos</h2>
        <ol className="pl-5 text-gray-600">
          {recipe.steps.map((step, index) => (
            <li key={index} className="mb-4">
              {typeof step === "object" ? (
                <>
                  <h3 className="font-semibold text-gray-800 mb-2">
                    {step.category}
                  </h3>
                  <ol className="list-decimal pl-5">
                    {step.steps.map((subStep, subIndex) => (
                      <li key={subIndex} className="mb-2">
                        {subStep}
                      </li>
                    ))}
                  </ol>
                </>
              ) : (
                <p>{step}</p>
              )}
            </li>
          ))}
        </ol>
        <div className="mt-8 text-center">
          <button
            onClick={() => router.back()}
            className="px-6 py-2 bg-primaryRed text-kimchuski-orange-base font-bold rounded-full hover:bg-deepRed transition-colors"
          >
            Regresar
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;

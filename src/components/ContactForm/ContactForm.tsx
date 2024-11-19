import { useState } from "react";
import emailjs from "emailjs-com";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const [isError, setIsError] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ll7jvr5",
        "template_etmpzji",
        e.currentTarget,
        "IglaE8jp6WJhgtnpV"
      )
      .then(
        () => {
          setStatus("Mensaje enviado con éxito.");
          setIsError(false);
        },
        () => {
          setStatus("Hubo un error al enviar el mensaje.");
          setIsError(true);
        }
      );
  };

  return (
    <div className="pb-10 pt-36 px-4 md:px-0">
      <h1 className="text-3xl text-center text-kimchuski-green-500 mb-4">
        CONTACTANOS
      </h1>
      <p className="text-center mb-8 justify-self-center">
        Haremos todo lo posible por responder de manera oportuna,
        <br />
        pero ten en cuenta que puede tardar entre 24 y 48 horas en obtener una
        respuesta.
      </p>
      <form
        onSubmit={handleSubmit}
        className="max-w-lg mx-auto space-y-6 p-6 border rounded shadow-md"
      >
        <div>
          <label htmlFor="firstName" className="block font-medium mb-1">
            Nombre
          </label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            value={formData.firstName}
            onChange={handleChange}
            required
            className="w-full border p-2 rounded"
          />
        </div>
        <div>
          <label htmlFor="lastName" className="block font-medium mb-1">
            Apellido
          </label>
          <input
            id="lastName"
            name="lastName"
            type="text"
            value={formData.lastName}
            onChange={handleChange}
            required
            className="w-full border p-2 rounded"
          />
        </div>
        <div>
          <label htmlFor="email" className="block font-medium mb-1">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full border p-2 rounded"
          />
        </div>
        <div>
          <label htmlFor="company" className="block font-medium mb-1">
            Empresa
          </label>
          <input
            id="company"
            name="company"
            type="text"
            value={formData.company}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />
        </div>
        <div>
          <label htmlFor="message" className="block font-medium mb-1">
            Mensaje
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            className="w-full border p-2 rounded"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-kimchuski-green-500 text-white py-2 rounded hover:bg-kimchuski-green-600 transition"
        >
          Enviar
        </button>
        {status && (
          <p
            className={`mt-4 ${
              isError ? "text-kimchuski-red-500" : "text-kimchuski-green-500"
            }`}
          >
            {status}
          </p>
        )}
      </form>
    </div>
  );
};

export default ContactForm;

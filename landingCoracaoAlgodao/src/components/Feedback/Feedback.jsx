import { useForm } from "react-hook-form";
import axios from "axios";
import { useState } from "react";

export default function Feedback() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [rating, setRating] = useState(0);

  const onSubmit = async (data) => {
    try {
      const response = await axios.post("http://localhost:8080/criarSugestao", {
        email: data.email,
        rating: rating,
        suggestion: data.suggestion,
      });
      console.log("Sugestão enviada com sucesso:", response.data);
    } catch (error) {
      console.error("Erro ao enviar sugestão:", error);
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-6 text-center">Deixe seu Feedback</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Campo de Email */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
              errors.email ? "border-red-500" : ""
            }`}
            placeholder="Digite seu email"
            {...register("email", { required: "O email é obrigatório", pattern: /^\S+@\S+$/i })}
          />
          {errors.email && <p className="text-red-500 text-xs mt-2">{errors.email.message}</p>}
        </div>

        {/* Avaliação (1 a 5 estrelas) */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Avaliação</label>
          <div className="flex">
            {[...Array(5)].map((_, index) => (
              <span
                key={index}
                onClick={() => setRating(index + 1)}
                className={`cursor-pointer text-2xl ${
                  index < rating ? "text-yellow-500" : "text-gray-300"
                }`}
              >
                ★
              </span>
            ))}
          </div>
        </div>

        {/* Campo de Sugestão */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="suggestion">
            Sugestão
          </label>
          <textarea
            id="suggestion"
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
              errors.suggestion ? "border-red-500" : ""
            }`}
            rows="4"
            placeholder="Escreva sua sugestão aqui"
            {...register("suggestion", { required: "A sugestão é obrigatória" })}
          />
          {errors.suggestion && (
            <p className="text-red-500 text-xs mt-2">{errors.suggestion.message}</p>
          )}
        </div>

        {/* Botão de Enviar */}
        <div className="flex items-center justify-center">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
}

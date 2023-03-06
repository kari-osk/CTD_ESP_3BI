import { useRouter } from "next/router";

export default function NotFound() {
  const { back } = useRouter();

  return (
    <div className="bg-zinc-900">
      <button className="text-zinc-500 pb-8" onClick={back}>
        &#x25C0; voltar para a página anterior
      </button>
      <div className="bg-zinc-900 flex items-center justify-center pt-[250px] text-center">
        <h1 className="text-xl text-center text-zinc-200">
          Puuuutz... Houve um erro ao processar a página.
          <br />
          Tente novamente mais tarde.
        </h1>
      </div>
    </div>
  );
}

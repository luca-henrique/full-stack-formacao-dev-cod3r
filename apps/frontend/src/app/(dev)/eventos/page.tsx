import { Evento, eventos } from "core";


import Image from "next/image";
import Link from "next/link";
import QRCode from "react-qr-code";

export default function Eventos() {
  return (
    <div className="grid grid-cols-3 gap-5">
      {eventos.map((evento: Evento) => {
        return (
          <div
            key={evento.id}
            className="bg-zinc-800 rounded-lg flex flex-col w-full overflow-hidden items-center justify-center"
          >
            <div className="relative w-full h-52">
              <Image
                src={evento.image}
                fill
                alt={evento.nome}
                className="object-cover"
              />
            </div>
            <div className="flex flex-col flex-1 p-7 gap-5 items-center justify-center text-center">
              <span className="text-lg font-black">{evento.nome}</span>
              <p className="flex-1 text-sm text-zinc-400">{evento.descricao}</p>
              <QRCode
                value={JSON.stringify({ id: evento.id, senha: evento.senha })}
                className="w-44 h-44"
              />
              <div className="flex gap-5">
                <Link
                  href={`/evento/admin/${evento.id}/${evento.senha}`}
                  className="flex-1 button red"
                >
                  Admin
                </Link>
                <Link
                  className="button green flex-1"
                  href={`/convite/${evento.alias}`}
                >
                  Convite
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

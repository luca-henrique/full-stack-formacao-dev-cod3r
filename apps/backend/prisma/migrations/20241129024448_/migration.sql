-- CreateTable
CREATE TABLE "eventos" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "alias" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "data" DATETIME NOT NULL,
    "senha" TEXT NOT NULL,
    "local" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "imageBackground" TEXT NOT NULL,
    "publicoEsperado" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "convidados" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "confirmado" BOOLEAN NOT NULL,
    "possuiAcompanhantes" BOOLEAN NOT NULL,
    "qtdAcompanhate" INTEGER NOT NULL,
    "eventoId" TEXT,
    CONSTRAINT "convidados_eventoId_fkey" FOREIGN KEY ("eventoId") REFERENCES "eventos" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "eventos_alias_key" ON "eventos"("alias");

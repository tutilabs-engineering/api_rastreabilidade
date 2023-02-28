-- CreateTable
CREATE TABLE "cpc" (
    "id" TEXT NOT NULL,
    "FK_customer" TEXT NOT NULL,
    "FK_model" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "cpc_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "customers" (
    "id" TEXT NOT NULL,
    "cnpj" TEXT NOT NULL,
    "razao_social" TEXT NOT NULL,
    "img_path" TEXT NOT NULL,
    "ativo" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "customers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "models" (
    "id" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "img_path" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "models_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "packages" (
    "id" TEXT NOT NULL,
    "serial_number" TEXT NOT NULL,
    "origem" TEXT NOT NULL,
    "FK_destino" TEXT NOT NULL,
    "FK_modelo" TEXT NOT NULL,
    "status" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "packages_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "providers" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "externo" BOOLEAN NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "providers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "sme" (
    "id" TEXT NOT NULL,
    "razao_social" TEXT NOT NULL,
    "cnpj" TEXT NOT NULL,
    "ativo" BOOLEAN NOT NULL,
    "serial_number" TEXT NOT NULL,
    "origem" TEXT NOT NULL,
    "destino" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "modelo" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "matricula" TEXT NOT NULL,
    "data" TEXT NOT NULL,

    CONSTRAINT "sme_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "smm" (
    "id" TEXT NOT NULL,
    "username" VARCHAR NOT NULL,
    "matricula" VARCHAR NOT NULL,
    "fornecedor" VARCHAR NOT NULL,
    "statusDoFornecedor" VARCHAR NOT NULL,
    "descricao" TEXT NOT NULL,
    "serial_number" VARCHAR NOT NULL,
    "statusDaEmbalagem" VARCHAR NOT NULL,
    "modeloDaEmbalagem" VARCHAR NOT NULL,
    "statusDeMovimentacao" BOOLEAN NOT NULL DEFAULT false,
    "criadoEm" VARCHAR NOT NULL,
    "concluidoEm" VARCHAR,

    CONSTRAINT "smm_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "nome" VARCHAR NOT NULL,
    "matricula" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "admin" BOOLEAN NOT NULL DEFAULT false,
    "mnt" BOOLEAN NOT NULL DEFAULT false,
    "ativo" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "customers_cnpj_key" ON "customers"("cnpj");

-- CreateIndex
CREATE UNIQUE INDEX "customers_razao_social_key" ON "customers"("razao_social");

-- CreateIndex
CREATE UNIQUE INDEX "packages_serial_number_key" ON "packages"("serial_number");

-- CreateIndex
CREATE UNIQUE INDEX "users_matricula_key" ON "users"("matricula");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- AddForeignKey
ALTER TABLE "cpc" ADD CONSTRAINT "FK_customer_customers" FOREIGN KEY ("FK_customer") REFERENCES "customers"("id") ON DELETE SET NULL ON UPDATE SET NULL;

-- AddForeignKey
ALTER TABLE "cpc" ADD CONSTRAINT "FK_model_models" FOREIGN KEY ("FK_model") REFERENCES "models"("id") ON DELETE SET NULL ON UPDATE SET NULL;

-- AddForeignKey
ALTER TABLE "packages" ADD CONSTRAINT "FK_destino_customers" FOREIGN KEY ("FK_destino") REFERENCES "customers"("id") ON DELETE SET NULL ON UPDATE SET NULL;

-- AddForeignKey
ALTER TABLE "packages" ADD CONSTRAINT "FK_modelo_models" FOREIGN KEY ("FK_modelo") REFERENCES "models"("id") ON DELETE SET NULL ON UPDATE SET NULL;

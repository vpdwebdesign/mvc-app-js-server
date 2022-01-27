-- CreateTable
CREATE TABLE "Student" (
    "id" SERIAL NOT NULL,
    "firstname" TEXT NOT NULL,
    "lastname" TEXT NOT NULL,
    "gender" TEXT NOT NULL,
    "subjects" JSONB NOT NULL,

    CONSTRAINT "Student_pkey" PRIMARY KEY ("id")
);

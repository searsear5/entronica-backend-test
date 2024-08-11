-- CreateTable
CREATE TABLE "User" (
    "userID" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "firstname" TEXT NOT NULL,
    "lastname" TEXT NOT NULL,
    "nickname" TEXT NOT NULL,
    "position" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "nationality" TEXT NOT NULL,
    "startdate" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("userID")
);

-- CreateTable
CREATE TABLE "Information" (
    "informationID" SERIAL NOT NULL,
    "address" TEXT NOT NULL,
    "subdistrict" TEXT NOT NULL,
    "district" TEXT NOT NULL,
    "province" TEXT NOT NULL,
    "postalcode" TEXT NOT NULL,
    "facebook" TEXT NOT NULL,
    "lineID" TEXT NOT NULL,
    "instagram" TEXT NOT NULL,

    CONSTRAINT "Information_pkey" PRIMARY KEY ("informationID")
);

-- CreateTable
CREATE TABLE "Education" (
    "educationID" SERIAL NOT NULL,
    "year" TEXT NOT NULL,
    "university" TEXT NOT NULL,

    CONSTRAINT "Education_pkey" PRIMARY KEY ("educationID")
);

-- CreateTable
CREATE TABLE "Experience" (
    "expID" SERIAL NOT NULL,
    "experience" TEXT NOT NULL,

    CONSTRAINT "Experience_pkey" PRIMARY KEY ("expID")
);

-- CreateTable
CREATE TABLE "Skill" (
    "skillID" SERIAL NOT NULL,
    "skill" TEXT NOT NULL,

    CONSTRAINT "Skill_pkey" PRIMARY KEY ("skillID")
);

-- CreateTable
CREATE TABLE "Interest" (
    "interestID" SERIAL NOT NULL,
    "interest" TEXT NOT NULL,

    CONSTRAINT "Interest_pkey" PRIMARY KEY ("interestID")
);

-- CreateTable
CREATE TABLE "Guild" (
    "guildID" SERIAL NOT NULL,
    "guild" TEXT NOT NULL,

    CONSTRAINT "Guild_pkey" PRIMARY KEY ("guildID")
);

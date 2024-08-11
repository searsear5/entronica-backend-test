"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const client_1 = require("@prisma/client");
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
const port = 8080;
const prisma = new client_1.PrismaClient();
// GET method
app.get("/user", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield prisma.user.findMany();
        return res.json({
            status: "success",
            data: data,
        });
    }
    catch (error) {
        console.error("Error fetching users:", error);
        return res.status(500).json({
            status: "error",
            message: "Internal server error",
        });
    }
}));
app.get("/information", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield prisma.information.findMany();
        return res.json({
            status: "success",
            data: data
        });
    }
    catch (error) {
        console.error("Error fetching users:", error);
        return res.status(500).json({
            status: "error",
            message: "Internal server error",
        });
    }
}));
app.get("/education", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield prisma.education.findMany();
        return res.json({
            status: "success",
            data: data
        });
    }
    catch (error) {
        console.error("Error fetching users:", error);
        return res.status(500).json({
            status: "error",
            message: "Internal server error",
        });
    }
}));
app.get("/experience", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield prisma.experience.findMany();
        return res.json({
            status: "success",
            data: data
        });
    }
    catch (error) {
        console.error("Error fetching users:", error);
        return res.status(500).json({
            status: "error",
            message: "Internal server error",
        });
    }
}));
app.get("/skill", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield prisma.skill.findMany();
        return res.json({
            status: "success",
            data: data
        });
    }
    catch (error) {
        console.error("Error fetching users:", error);
        return res.status(500).json({
            status: "error",
            message: "Internal server error",
        });
    }
}));
app.get("/interest", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield prisma.interest.findMany();
        return res.json({
            status: "success",
            data: data
        });
    }
    catch (error) {
        console.error("Error fetching users:", error);
        return res.status(500).json({
            status: "error",
            message: "Internal server error",
        });
    }
}));
app.get("/guild", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield prisma.guild.findMany();
        return res.json({
            status: "success",
            data: data
        });
    }
    catch (error) {
        console.error("Error fetching users:", error);
        return res.status(500).json({
            status: "error",
            message: "Internal server error",
        });
    }
}));
//PUT method
app.put("/editUser", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { username, firstname, lastname, nickname, position, phone, nationality, startdate, coverimage, image, } = req.body;
        const userID = 1;
        const updatedUser = yield prisma.user.update({
            where: { userID: userID },
            data: {
                username,
                firstname,
                lastname,
                nickname,
                position,
                phone,
                nationality,
                startdate,
                coverimage,
                image,
            },
        });
        return res.json({
            status: "success",
            data: updatedUser,
        });
    }
    catch (error) {
        console.error("Error updating user:", error);
        return res.status(500).json({
            status: "error",
            message: "Internal Server Error",
        });
    }
}));
app.put("/editinfo", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { address, subdistrict, district, province, postalcode, facebook, lineID, instagram } = req.body;
        const infoID = 1;
        const updatedInfo = yield prisma.information.update({
            where: { informationID: infoID },
            data: {
                address,
                subdistrict,
                district,
                province,
                postalcode,
                facebook,
                lineID,
                instagram
            },
        });
        return res.json({
            status: "success",
            data: updatedInfo,
        });
    }
    catch (error) {
        console.error("Error updating information:", error);
        return res.status(500).json({
            status: "error",
            message: "Internal Server Error",
        });
    }
}));
//POST method
app.post("/addEducation", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { year, university } = req.body;
        const createEDU = yield prisma.education.create({
            data: {
                year,
                university
            },
        });
        return res.json({
            status: "success",
            data: createEDU,
        });
    }
    catch (error) {
        console.error("Error updating user:", error);
        return res.status(500).json({
            status: "error",
            message: "Internal Server Error",
        });
    }
}));
app.post("/addExperience", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { experience } = req.body;
        const createExp = yield prisma.experience.create({
            data: {
                experience
            },
        });
        return res.json({
            status: "success",
            data: createExp,
        });
    }
    catch (error) {
        console.error("Error updating user:", error);
        return res.status(500).json({
            status: "error",
            message: "Internal Server Error",
        });
    }
}));
app.post("/addSkill", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { skill, skilllevel } = req.body;
        const createSkill = yield prisma.skill.create({
            data: {
                skill,
                skilllevel
            },
        });
        return res.json({
            status: "success",
            data: createSkill,
        });
    }
    catch (error) {
        console.error("Error updating user:", error);
        return res.status(500).json({
            status: "error",
            message: "Internal Server Error",
        });
    }
}));
app.post("/addinterests", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { interest } = req.body;
        const createInterest = yield prisma.interest.create({
            data: {
                interest
            },
        });
        return res.json({
            status: "success",
            data: createInterest,
        });
    }
    catch (error) {
        console.error("Error updating user:", error);
        return res.status(500).json({
            status: "error",
            message: "Internal Server Error",
        });
    }
}));
app.post("/addguild", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { guild } = req.body;
        const createGuild = yield prisma.guild.create({
            data: {
                guild
            },
        });
        return res.json({
            status: "success",
            data: createGuild,
        });
    }
    catch (error) {
        console.error("Error updating user:", error);
        return res.status(500).json({
            status: "error",
            message: "Internal Server Error",
        });
    }
}));
//DELETE method
app.delete("/exp/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        yield prisma.experience.delete({
            where: { expID: Number(id) },
        });
        return res.json({ status: "success", message: "User deleted successfully" });
    }
    catch (error) {
        return res.status(500).json({ status: "error", message: "Internal Server Error" });
    }
}));
app.delete("/interest/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        yield prisma.interest.delete({
            where: { interestID: Number(id) },
        });
        return res.json({ status: "success", message: "User deleted successfully" });
    }
    catch (error) {
        return res.status(500).json({ status: "error", message: "Internal Server Error" });
    }
}));
app.delete("/guild/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        yield prisma.guild.delete({
            where: { guildID: Number(id) },
        });
        return res.json({ status: "success", message: "User deleted successfully" });
    }
    catch (error) {
        return res.status(500).json({ status: "error", message: "Internal Server Error" });
    }
}));
app.listen(port, () => {
    console.log(`HTTP server running at http://localhost:${port}`);
});

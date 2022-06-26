import supertest from "supertest";
import app from "../app.js";

describe("Endpoints test", () => {
    it("/ should return 200 status code", async () => {
        const response = await supertest(app).get("/");
        expect(response.status).toBe(200);
    });
    it("/download should return 200 status code", async () => {
        const response = await supertest(app).get("/download");
        expect(response.status).toBe(200);
    });
    it("/generate should return 200 status code", async () => {
        const response = await supertest(app).post("/generate").send({text: "مرحبا بالعالم"});
        expect(response.status).toBe(200);
    });
});
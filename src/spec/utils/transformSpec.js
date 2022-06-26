import transform from "../../utils/transform.js";

describe("transform", () => {
    it("Should accept a string and return an array of strings", () => {
        const text = "الأول الثاني";
        const output = transform(text);
        expect(Array.isArray(output)).toBe(true);
        expect(typeof(output[0])).toBe("string");
    });
    it("Should return an array with correct length", () => {
        const text = "الأول الثاني";
        const output = transform(text);
        expect(output.length).toBe(1);
    });
});
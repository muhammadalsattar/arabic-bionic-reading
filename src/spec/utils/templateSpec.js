import template from "../../utils/template.js";

describe("template", () => {
    it("should return an HTML template", () => {
        const pages = ["الأول", "الثاني"];
        const HTMLTemplate = template(pages);
        expect(typeof(HTMLTemplate)).toBe("string");
    });
    it("Should contain the correct number of pages", () => {
        const pages = ["الأول", "الثاني"];
        const HTMLTemplate = template(pages);
        expect(HTMLTemplate.match(/الأول/g).length).toBe(1);
        expect(HTMLTemplate.match(/الثاني/g).length).toBe(1);
    });
})
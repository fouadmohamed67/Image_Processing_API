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
const index_1 = __importDefault(require("../index"));
const supertest_1 = __importDefault(require("supertest"));
const resize_1 = __importDefault(require("../utils/resize"));
const validate_1 = __importDefault(require("../utils/validate"));
const request = (0, supertest_1.default)(index_1.default);
describe("test api", () => {
    it("check api images working in the right way", () => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield request.get('/api/images?filename=downloa&height=200&width=200');
        expect(res.status).toBe(200);
    }));
});
describe("test resize function", () => {
    it("check if resizing image working in the right way", () => __awaiter(void 0, void 0, void 0, function* () {
        expect(yield (0, resize_1.default)("download", "500", "500")).toBeTrue();
    }));
});
describe("test validation function", () => {
    it("check if validate image is exist in full folder", () => __awaiter(void 0, void 0, void 0, function* () {
        expect(yield validate_1.default.checImageExist("download", "full")).toBeTrue();
    }));
    it("check if validate image is exist in thumb folder", () => __awaiter(void 0, void 0, void 0, function* () {
        expect(yield validate_1.default.checImageExist("download_500_500", "thumb")).toBeTrue();
    }));
});
describe("test width and height are valid", () => {
    it("check if width or height is number and positive", () => {
        expect(validate_1.default.checkISPositiveNumber("500")).toBeTrue();
    });
});

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
const validate_1 = __importDefault(require("../utils/validate"));
describe("test validation function", () => {
    it("check if validate image is exist in full folder", () => __awaiter(void 0, void 0, void 0, function* () {
        expect(yield validate_1.default.checImageExist("download", "full")).toBeTrue();
    }));
    it("check if validate image is exist in thumb folder", () => __awaiter(void 0, void 0, void 0, function* () {
        expect(yield validate_1.default.checImageExist("download_500_500", "thumb")).toBeTrue();
    }));
});

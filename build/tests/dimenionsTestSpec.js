"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const validate_1 = __importDefault(require("../utils/validate"));
describe('test width and height are valid', () => {
    it('check if width or height is number and positive', () => {
        expect(validate_1.default.checkISPositiveNumber('500')).toBeTrue();
    });
});

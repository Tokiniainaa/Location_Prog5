"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const reservableItem_1 = __importDefault(require("./reservableItem"));
class house extends reservableItem_1.default {
    constructor(name) {
        super(name);
    }
}
exports.default = house;

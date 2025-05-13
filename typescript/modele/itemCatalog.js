"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const car_1 = __importDefault(require("./car"));
const house_1 = __importDefault(require("./house"));
const plate_1 = __importDefault(require("./plate"));
class ItemCatalog {
    constructor() {
        this.items = [];
        this.items.push(new car_1.default("Car"));
        this.items.push(new house_1.default("House"));
        this.items.push(new plate_1.default("Plate"));
    }
    getItems() {
        return this.items;
    }
    getItem(index) {
        if (index >= 0 && index < this.items.length) {
            return this.items[index];
        }
        throw new Error("Objet invalide.");
    }
}
exports.default = ItemCatalog;

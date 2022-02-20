/**
 * @author Berk Koca <berk1937@gmail.com>
 * @class GeneratePassword
 * @description Password generator class made by Berk Koca
 */
export class GeneratePassword {
    private password: string = "";
    private categories: string[][] = [];

    private length: number;
    private useNumbers: boolean;
    private useSymbols: boolean;
    private useLowercaseLetters: boolean;
    private useUppercaseLetters: boolean;

    private numbers: string[] = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    private symbols: string[] = ["!", "'", "+", "%", "&", "/", "(", ")", "=", "?", "_", ">", "<", "£", "#", "$", "§", "{", "[", "]", "}", ".", ",", ";", ":"];
    private lowercaseLetters: string[] = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    private uppercaseLetters: string[] = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

    constructor(properties: { length: number, useNumbers: boolean, useSymbols: boolean, useLowercaseLetters: boolean, useUppercaseLetters: boolean }) {
        this.length = properties.length;
        this.useNumbers = properties.useNumbers;
        this.useSymbols = properties.useSymbols;
        this.useLowercaseLetters = properties.useLowercaseLetters;
        this.useUppercaseLetters = properties.useUppercaseLetters;

        this.selectCategories();
    }

    public new(): string {
        this.password = "";

        for (let i = 0; i < this.length; i++) {
            this.password += this.random();
        }

        this.mixLetters();

        return this.password;
    }

    private random() {
        if (this.categories.length > 0) {
            const lastLetter = this.password.split("").pop() || "";
            const selectedCategory = this.selectCategory(lastLetter);
            const selectedLetter = this.selectLetter(selectedCategory, lastLetter);

            return selectedLetter;
        }

        return "";
    }

    private selectCategories() {
        if (this.useNumbers) this.categories.push(this.numbers);
        if (this.useSymbols) this.categories.push(this.symbols);
        if (this.useLowercaseLetters) this.categories.push(this.lowercaseLetters);
        if (this.useUppercaseLetters) this.categories.push(this.uppercaseLetters);
    }

    private selectCategory(lastLetter?: string) {
        if (this.categories.length > 1) {
            while (true) {
                const randomCategory = Math.floor(Math.random() * this.categories.length);

                if (!lastLetter || !this.categories[randomCategory].includes(lastLetter)) {
                    return this.categories[randomCategory];
                }
            }
        }

        return this.categories[0];
    }

    private selectLetter(category: string[], lastLetter?: string) {
        while (true) {
            const randomLetter = Math.floor(Math.random() * category.length);

            if (!lastLetter || category[randomLetter] != lastLetter) {
                return category[randomLetter];
            }
        }
    }

    private mixLetters() {
        const letters = this.password.split("");
        const password: string[] = [];

        while (letters.length) {
            const randomIndex = Math.floor(Math.random() * letters.length);
            const randomLetter = letters[randomIndex];

            password.push(randomLetter);

            letters.splice(randomIndex, 1);
        }

        this.password = password.join("");
    }
}
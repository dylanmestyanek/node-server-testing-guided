const db = require("../data/dbConfig");

const { insert } = require("./hobbitsModel");

// NOT a unit test
// This will be slower than unit tests because it has to call

describe("Testing the hobbits model", () => {
    describe("insert()", () => {
        beforeEach(async () => {
            await db('hobbits').truncate();
        })

        it("Should insert a hobbit", async () => {
            await insert({ name: "Tom" });

            const hobbits = await db('hobbits');
            expect(hobbits).toHaveLength(1);
        });

        it("Should insert the provided hobbit", async () => {
            // insert a hobbit
            await insert({ name: "George" })
            await insert({ name: "Dudeman" })
            
            // check if it was inserted into the db
            const hobbits = await db('hobbits');
            expect(hobbits).toHaveLength(2);
            expect(hobbits[0].name).toBe('George');
            expect(hobbits[1].name).toBe('Dudeman');
        });

        it("Should return the hobbit from the db", async () => {
            let hobbit = await insert({ name: "George" });
            expect(hobbit.name).toBe("George");

            hobbit = await insert({ name: "Tom" });
            expect(hobbit.name).toBe("Tom");
        });
    });
});
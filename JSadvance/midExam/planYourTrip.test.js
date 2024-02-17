
import { expect } from 'chai';
import { planYourTrip } from './planYourTrip.js';

describe("Tests for planYourTrip", function () {
    describe("choosingDestination functionality", function () {
        it("valid destination and season", function () {
            expect(() => planYourTrip.choosingDestination("Ski Resort", "Winter", 2024)).to.not.throw();
            expect(planYourTrip.choosingDestination("Ski Resort", "Winter", 2024)).to.equal("Great choice! The Winter is the perfect time to visit the Ski Resort.");
        });

        it("should throw an error for an invalid year", function () {
            expect(() => planYourTrip.choosingDestination("Ski Resort", "Winter", 2023)).to.throw("Invalid Year!");
        });

        it("should throw an error for an invalid destination", function () {
            expect(() => planYourTrip.choosingDestination("Beach", "Summer", 2024)).to.throw("This destination is not what you are looking for.");
        });
    });
    describe("exploreOptions functionality", function () {
        it("remove an element", function () {
            expect(planYourTrip.exploreOptions(["Skiing", "Snowboarding", "Winter Hiking"], 1)).to.equal("Skiing, Winter Hiking");
        });

        it("invalid input", function () {
            expect(() => planYourTrip.exploreOptions("Skiing", 1)).to.throw("Invalid Information!");
            expect(() => planYourTrip.exploreOptions(["Skiing", "Snowboarding"], "1")).to.throw("Invalid Information!");
            expect(() => planYourTrip.exploreOptions(["Skiing", "Snowboarding"], 5)).to.throw("Invalid Information!");
        });
    });

    describe("estimateExpenses functionality", function () {
        it("budget-friendly message", function () {
            expect(planYourTrip.estimateExpenses(100, 4)).to.equal("The trip is budget-friendly, estimated cost is $400.00.");
        });

        it("should return plan accordingly message", function () {
            expect(planYourTrip.estimateExpenses(200, 4)).to.equal("The estimated cost for the trip is $800.00, plan accordingly.");
        });

        it("should throw an error for not numbers", function () {
            expect(() => planYourTrip.estimateExpenses("100", 4)).to.throw("Invalid Information!");
            
        });
        it("should throw an error for negative numbers", function () {
            
            expect(() => planYourTrip.estimateExpenses(100, -4)).to.throw("Invalid Information!");
           
        });
        it("should throw an error for zero", function () {
            
            expect(() => planYourTrip.estimateExpenses(0, 0)).to.throw("Invalid Information!");
        });
        it("should throw an error for array", function () {
            
            expect(() => planYourTrip.estimateExpenses([1], 5)).to.throw("Invalid Information!");
        });
        it("should throw an error for array2", function () {
            
            expect(() => planYourTrip.estimateExpenses(1, [5])).to.throw("Invalid Information!");
        });
    });
});

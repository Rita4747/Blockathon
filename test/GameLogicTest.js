const { expect } = require("chai");

describe("GameLogic Contract", function () {
    let GameLogic, gameLogic, owner, addr1;

    beforeEach(async function () {
        GameLogic = await ethers.getContractFactory("GameLogic");
        gameLogic = await GameLogic.deploy();
        [owner, addr1] = await ethers.getSigners();
    });

    it("Should add currency to player balance", async function () {
        await gameLogic.addCurrency(addr1.address, 100);
        expect(await gameLogic.balances(addr1.address)).to.equal(100);
    });

    it("Should deduct currency from player balance", async function () {
        await gameLogic.addCurrency(addr1.address, 100);
        await gameLogic.deductCurrency(addr1.address, 50);
        expect(await gameLogic.balances(addr1.address)).to.equal(50);
    });

    it("Should verify Zero-Knowledge proof", async function () {
        const proofHash = ethers.utils.keccak256("0x1234");
        expect(await gameLogic.verifyZKProof(proofHash, proofHash)).to.equal(true);
    });

    it("Should grant access to player", async function () {
        await gameLogic.grantAccess(addr1.address);
        expect(await gameLogic.hasAccess(addr1.address)).to.equal(true);
    });
});
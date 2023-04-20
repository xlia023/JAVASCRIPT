const TKNS = []

function mintNFT (name, nameOfDog, breed, birthday) {
    const NFT = { 
        "name":  name,
        "nameOfDog": nameOfDog,
        "breed": breed,
        "birthday": birthday,
    }
    TKNS.push (NFT);
    console.log ("Minted: " + name);
}


function listTKNS() {
    for (let i = 0; i < TKNS.length; i++) {
        console.log("\nID \t\t\t\t" + (i + i));
        console.log("\nName: \t\t\t" + TKNS[i].name);
        console.log("Dog's Name: \t" + TKNS[i].nameOfDog);
        console.log("Breed: \t\t\t" + TKNS[i].breed);
        console.log("Birthday: \t\t" + TKNS[i].birthday);
    }

}


function getTotalSupply () {
    console.log("\nTotal Number Of NFTs Minted: " + TKNS.length)

}

mintNFT ("Trisha", "Amber", "Shih Tzu", "10/14/2018");
mintNFT ("Trisha", "Cooper", "Shih Tzu", "02/14/2020");
mintNFT ("Keith", "Maui", "Shih Tzu", "05/22/2021");
mintNFT ("Andrei", "Kupa", "Husky", "10/28/2017");
mintNFT ("Julia", "Polka", "Shih Tzu", "01/01/2023");
listTKNS ();
getTotalSupply
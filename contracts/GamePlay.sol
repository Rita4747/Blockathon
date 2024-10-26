contract Escape is ERC721 {

    struct CharacterAtt {
        string name;
        string imageURI;
        uint256 hp;
        uint256 maxHp;
        uint256 keysCollected;
    }

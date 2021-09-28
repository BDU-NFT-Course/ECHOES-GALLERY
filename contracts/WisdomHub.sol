// File: contracts/WisdomHub.sol
// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract WisdomHub is ERC721 {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds; 
    uint public totalSupply;
    
    constructor () ERC721("WisdomHub V2","WISDOMHUBV2"){}
    
    mapping(uint => string) tokenURIs;

    function tokenURI(uint256 tokenId) 
      public 
      view 
      virtual 
      override 
      returns (string memory) 
      {
        return tokenURIs[tokenId];
      }

    function create(address itemOwner, string memory itemTokenURI)
      public 
      returns (uint256) 
      {
        uint256 newItemId = _tokenIds.current();
        _mint(itemOwner, newItemId);
        tokenURIs[newItemId] = itemTokenURI;
        _tokenIds.increment();
        totalSupply = _tokenIds.current();
        return newItemId;
     }

    function contractURI()
       public 
       pure 
       returns (string memory) 
       {
         return "https://raw.githubusercontent.com/BDU-NFT-Course/ECHOES-GALLERY/main/metadata/contract-metadata.json";
       }

}
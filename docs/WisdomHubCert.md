# WisdomHubCert

## Mission
Create a contract that learners can use to cutomize their NFT learning path and create micro certificates for each skill achieved.

## Vision
Become the most trusted micro certification authority for NFT skills by empowering individual learning paths.

## Implementation (simple)

1. Start with ERC 1155 on testnet and set up naming:
- Each item will be a certificate for a specific skill level.
- Create sample metadata for the first 3 levels
  - Level 1: NFT owner
  - Level 2: NFT metadata creator
  - Level 3: NFT smart cotract developer
1. Only contract admin can create the first item for each Level
- After the first item is created the skill level is unlocked for learners to take it
1. Each learner can take the next level only if previous level is completed
- level prerequisites
1. Each lerner can take the level only once
- limit the creation of the certificate to one per level per learner 
1. Certificates are not transferable
1. Learner Identity verification

## Resources

[How to create certificates on the Ethereum blockchain — Part 1](https://medium.com/coinmonks/how-to-create-certificates-on-the-ethereum-blockchain-part-1-45564fd29595)

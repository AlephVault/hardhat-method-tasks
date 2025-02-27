// function getApproved(uint256 tokenId) external view returns (address operator);
// function isApprovedForAll(address owner, address operator) external view returns (bool);
const {extendEnvironment} = require("hardhat/config");

extendEnvironment((hre) => {
    new hre.methodPrompts.ContractMethodPrompt(
        "call", "name", {
            onError: (e) => {
                console.error("There was an error while running this method (perhaps not an implementor of ERC721Metadata)");
                console.error(e);
            },
            onSuccess: (value) => {
                console.log("Name:", value);
            }
        }, [], {}
    ).asTask("erc721:name", "Invokes name() on an ERC-721 (implementing optional metadata) contract");
    new hre.methodPrompts.ContractMethodPrompt(
        "call", "symbol", {
            onError: (e) => {
                console.error("There was an error while running this method (perhaps not an implementor of ERC721Metadata)");
                console.error(e);
            },
            onSuccess: (value) => {
                console.log("Symbol:", value);
            }
        }, [], {}
    ).asTask("erc721:symbol", "Invokes symbol() on an ERC-721 (implementing optional metadata) contract");
    new hre.methodPrompts.ContractMethodPrompt(
        "call", "tokenURI", {
            onError: (e) => {
                console.error("There was an error while running this method (perhaps not an implementor of ERC721Metadata)");
                console.error(e);
            },
            onSuccess: (value) => {
                console.log("Token URI:", value);
            }
        }, [{
            name: "tokenId",
            description: "The ID of the token to query the URL for",
            message: "What's the token ID you want to know the URL for?",
            argumentType: "uint256"
        }], {}
    ).asTask("erc721:token-uri", "Invokes tokenURI(uint256) on an ERC-721 (implementing optional metadata) contract");
    new hre.methodPrompts.ContractMethodPrompt(
        "call", "balanceOf", {
            onError: (e) => {
                console.error("There was an error while running this method");
                console.error(e);
            },
            onSuccess: (value) => {
                console.log("Balance:", value);
            }
        }, [{
            name: "address",
            description: "The address to query the balance for",
            message: "Who do you want to query the balance for?",
            argumentType: "smart-address"
        }], {}
    ).asTask("erc721:balance-of", "Invokes balanceOf(address) on an ERC-721 contract");
    new hre.methodPrompts.ContractMethodPrompt(
        "call", "ownerOf", {
            onError: (e) => {
                console.error("There was an error while running this method");
                console.error(e);
            },
            onSuccess: async (value) => {
                console.log("Owner:", value);
                const signers = await hre.common.getSigners();
                for(let index = 0; index < signers.length; index++) {
                    let address = hre.common.getAddress(signers[index]);
                    if (address.toLowerCase() === value.toLowerCase()) {
                        console.log("This address belongs to the account with index:", index);
                    }
                }
            }
        }, [{
            name: "tokenId",
            description: "The ID of the token to query the owner for",
            message: "What's the token ID you want to know the owner for?",
            argumentType: "uint256"
        }], {}
    ).asTask("erc721:owner-of", "Invokes ownerOf(uint256) on an ERC-721 contract");
    new hre.methodPrompts.ContractMethodPrompt(
        "send", "approve(address,uint256)", {
            onError: (e) => {
                console.error("There was an error while running this method");
                console.error(e);
            },
            onSuccess: (tx) => {
                console.log("Token approved successfully. Transaction is:", tx);
            }
        }, [{
            name: "to",
            description: "The address to approve the token to",
            message: "Who do you want to approve the token to?",
            argumentType: "smart-address"
        }, {
            name: "tokenId",
            description: "The ID of the token to approve",
            message: "What's the ID of the token to approve?",
            argumentType: "uint256"
        }], {}
    ).asTask("erc721:approve", "Invokes approve(address,uint256) on an ERC-721 contract");
    new hre.methodPrompts.ContractMethodPrompt(
        "send", "transferFrom(address,address,uint256)", {
            onError: (e) => {
                console.error("There was an error while running this method");
                console.error(e);
            },
            onSuccess: (tx) => {
                console.log("Token transferred successfully. Transaction is:", tx);
            }
        }, [{
            name: "from",
            description: "The address to send the token from",
            message: "Who do you want to send the token from? (must be you or must approve you)",
            argumentType: "smart-address"
        }, {
            name: "to",
            description: "The address to send the token to",
            message: "Who do you want to send the token to?",
            argumentType: "smart-address"
        }, {
            name: "tokenId",
            description: "The ID of the token to send",
            message: "What's the ID of the token to send?",
            argumentType: "uint256"
        }], {}
    ).asTask("erc721:transfer-from", "Invokes transferFrom(address,address,uint256) on an ERC-721 contract");
    new hre.methodPrompts.ContractMethodPrompt(
        "send", "safeTransferFrom(address,address,uint256)", {
            onError: (e) => {
                console.error("There was an error while running this method");
                console.error(e);
            },
            onSuccess: (tx) => {
                console.log("Token transferred successfully. Transaction is:", tx);
            }
        }, [{
            name: "from",
            description: "The address to send the token from",
            message: "Who do you want to send the token from? (must be you or must approve you)",
            argumentType: "smart-address"
        }, {
            name: "to",
            description: "The address to send the token to",
            message: "Who do you want to send the token to?",
            argumentType: "smart-address"
        }, {
            name: "tokenId",
            description: "The ID of the token to send",
            message: "What's the ID of the token to send?",
            argumentType: "uint256"
        }], {}
    ).asTask("erc721:safe-transfer-from", "Invokes safeTransferFrom(address,address,uint256) on an ERC-721 contract");
    new hre.methodPrompts.ContractMethodPrompt(
        "send", "safeTransferFrom(address,address,uint256,bytes)", {
            onError: (e) => {
                console.error("There was an error while running this method");
                console.error(e);
            },
            onSuccess: (tx) => {
                console.log("Token transferred successfully. Transaction is:", tx);
            }
        }, [{
            name: "from",
            description: "The address to send the token from",
            message: "Who do you want to send the token from? (must be you or must approve you)",
            argumentType: "smart-address"
        }, {
            name: "to",
            description: "The address to send the token to",
            message: "Who do you want to send the token to?",
            argumentType: "smart-address"
        }, {
            name: "tokenId",
            description: "The ID of the token to send",
            message: "What's the ID of the token to send?",
            argumentType: "uint256"
        }, {
            name: "data",
            description: "The data for this operation",
            message: "Data for this transfer (use 0x for no data)",
            argumentType: "bytes"
        }], {}
    ).asTask("erc721:safe-transfer-from-with-data", "Invokes safeTransferFrom(address,address,uint256,bytes) on an ERC-721 contract");
    new hre.methodPrompts.ContractMethodPrompt(
        "send", "setApprovalForAll", {
            onError: (e) => {
                console.error("There was an error while running this method");
                console.error(e);
            },
            onSuccess: (tx) => {
                console.log("Approval properly updated. Transaction is:", tx);
            }
        }, [{
            name: "address",
            description: "The address to set/clear the approval status",
            message: "Who do you want to set/clear the approval status to?",
            argumentType: "smart-address"
        }, {
            name: "set",
            description: "The new status",
            message: "Do you want to approve this address (y) or un-approve it (n) as an operator?",
            argumentType: "boolean"
        }], {}
    ).asTask("erc721:set-approval-for-all", "Invokes setApprovalForAll(address,bool) on an ERC-721 contract");
    new hre.methodPrompts.ContractMethodPrompt(
        "call", "getApproved", {
            onError: (e) => {
                console.error("There was an error while running this method");
                console.error(e);
            },
            onSuccess: async (value) => {
                console.log("Operator:", value);
                const signers = await hre.common.getSigners();
                for(let index = 0; index < signers.length; index++) {
                    let address = hre.common.getAddress(signers[index]);
                    if (address.toLowerCase() === value.toLowerCase()) {
                        console.log("This address belongs to the account with index:", index);
                    }
                }
            }
        }, [{
            name: "tokenId",
            description: "The ID of the token to query the operator for",
            message: "What's the ID of the token you want to query the operator for?",
            argumentType: "uint256"
        }], {}
    ).asTask("erc721:get-approved", "Invokes getApproved(uint256) on an ERC-721 contract");
});
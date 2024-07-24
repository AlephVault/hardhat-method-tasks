// function balanceOfBatch(
//     address[] calldata accounts,
//     uint256[] calldata ids
// ) external view returns (uint256[] memory);
// function safeBatchTransferFrom(
//     address from,
//     address to,
//     uint256[] calldata ids,
//     uint256[] calldata values,
//     bytes calldata data
// ) external;
const {extendEnvironment} = require("hardhat/config");

extendEnvironment((hre) => {
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
        }, {
            name: "tokenId",
            description: "The ID of the token to query the balance for",
            message: "What's the ID of the token you want to query the balance for?",
            argumentType: "uint256"
        }], {}
    ).asTask("erc1155:balance-of", "Invokes balanceOf(address,uint256) on an ERC-1155 contract");
    new hre.methodPrompts.ContractMethodPrompt(
        "send", "setApprovalForAll", {
            onError: (e) => {
                console.error("There was an error while running this method");
                console.error(e);
            },
            onSuccess: (value) => {
                console.log("Operator changed successfully. Transaction is:", value);
            }
        }, [{
            name: "address",
            description: "The address to make an operator for all your tokens",
            message: "Who do you want to make/undo an operator for all your tokens?",
            argumentType: "smart-address"
        }, {
            name: "approve",
            description: "Whether to approve or not as an operator",
            message: "Do you want to approve this address (y) or un-approve it (n) as an operator?",
            argumentType: "boolean"
        }], {}
    ).asTask("erc1155:set-approval-for-all", "Invokes setApprovalForAll(address,bool) on an ERC-1155 contract");
    new hre.methodPrompts.ContractMethodPrompt(
        "call", "isApprovedForAll", {
            onError: (e) => {
                console.error("There was an error while running this method");
                console.error(e);
            },
            onSuccess: (value) => {
                console.log("Approved:", value);
            }
        }, [{
            name: "owner",
            description: "The owner address",
            message: "Which address will be the owner?",
            argumentType: "smart-address"
        }, {
            name: "operator",
            description: "The operator address",
            message: "Which address will be the operator?",
            argumentType: "smart-address"
        }], {}
    ).asTask("erc1155:is-approved-for-all", "Invokes isApprovedForAll(address,address) on an ERC-1155 contract");
    new hre.methodPrompts.ContractMethodPrompt(
        "send", "safeTransferFrom", {
            onError: (e) => {
                console.error("There was an error while running this method");
                console.error(e);
            },
            onSuccess: (value) => {
                console.log("Operator changed successfully. Transaction is:", value);
            }
        }, [{
            name: "from",
            description: "The address to send the tokens from",
            message: "Who will send the tokens? (it must be you or an address that approves you)",
            argumentType: "smart-address"
        }, {
            name: "to",
            description: "The address to send the tokens to",
            message: "Who will receive the tokens?",
            argumentType: "smart-address"
        }, {
            name: "id",
            description: "The ID of the token to send",
            message: "What's the ID of the token you want to send?",
            argumentType: "uint256"
        }, {
            name: "amount",
            description: "The amount of the token to send",
            message: "What's the amount of the token you want to send?",
            argumentType: "uint256"
        }, {
            name: "data",
            description: "The data for this operation",
            message: "Data for this transfer (use 0x for no data)",
            argumentType: "bytes"
        }], {}
    ).asTask("erc1155:set-approval-for-all", "Invokes safeTransferFrom(address,address,uint256,uint256,bytes) on an ERC-1155 contract");
});
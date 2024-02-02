<img src="https://github.com/Signor1/registry-Dapp/blob/1dfa2539cd5dda6321c2b08a2d1eeb5ac65b9747/Screenshot%202024-02-01%20at%207.22.10%20PM.png"/>
# Registry DApp

This is a simple decentralized application (DApp) built using Hardhat, Solidity, ethers.js, and React. The DApp allows users to register entities with a name and age.

contract Address = 0x1b1460B64D96AcFbD46f6BCBF3f491cd6AB2E0f5

## Prerequisites

- Node.js: Make sure you have Node.js installed. You can download it [here](https://nodejs.org/).

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/registry-dapp.git
   cd registry-dapp
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Compile the smart contracts:

   ```bash
   npx hardhat compile
   ```

4. Deploy the smart contracts:

   ```bash
   npx hardhat run scripts/deploy.js --network localhost
   ```

   Note: Modify the deploy script and network configuration based on your deployment setup.

5. Start the React app:

   ```bash
   npm start
   ```

   The app will be accessible at [http://localhost:3000](http://localhost:3000).

## Usage

1. Connect your wallet by clicking the "Connect Wallet" button.

2. Register a new entity by providing a name and age in the input fields and clicking the "Register Entity" button.

3. View the registered entity details displayed on the page.

## Project Structure

- `contracts/`: Solidity smart contracts.
- `frontend/`: React frontend code.
- `scripts/`: Deployment scripts.
- `hardhat.config.js`: Hardhat configuration.

## Technologies Used

- Hardhat: Ethereum development environment.
- Solidity: Smart contract language.
- ethers.js: Ethereum library.
- React: JavaScript library for building user interfaces.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

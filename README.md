# Registry DApp

This is a simple decentralized application (DApp) built using Hardhat, Solidity, ethers.js, and React. The DApp allows users to register entities with a name and age.

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

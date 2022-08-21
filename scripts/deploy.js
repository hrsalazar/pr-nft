// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {

  console.log(await hre.ethers.getSigners());

  console.log(process.env.ALCHEMY_MUMBAI_URL);
  const provider = await hre.ethers.getDefaultProvider(process.env.ALCHEMY_MUMBAI_URL);
  console.log(await provider.getNetwork())

  const balance = await provider.getBalance('0x4991a7c134D41739eB68ACACEc5BF1f9a3aD52C8');
  console.log('Balance; ' + balance);
  //process.exit(1);

  const facturaFactory = await hre.ethers.getContractFactory("Factura");
  const factura = await facturaFactory.deploy();

  await factura.deployed();
  process.exit(1);
  
  console.log('Contrato Creado');
  console.log('Contract deployed: ' + factura.address);

  await factura.crear('123456');
  await factura.addDocumento('123456', 'Mexico','Tucson', '2017', 'SUV');

  const ownerAddress = await factura.getAddress('123456');
  // const documentos = await factura.getCampos();

  console.log('Direccion Factura: ' + ownerAddress);
  // console.log('Documento: ' + documentos[0]);

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

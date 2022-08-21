// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {

  const facturaFactory = await hre.ethers.getContractFactory("Factura");
  const factura = await facturaFactory.deploy();

  await factura.deployed();

  console.log('Contrato Creado');
  console.log('Contract deployed: ' + factura.address);

  await factura.crear('123456');
  await factura.addDocumento('123456', 'Mexico','Tucson', '2017', 'SUV');

  const ownerAddress = await factura.getAddress('123456');
  const modelo = await factura.getDocumento('123456')
  const paisOrigen = await factura.getPaisOrigen('123456');

  console.log('Direccion Factura: ' + ownerAddress);
  console.log('paisOrigen: ' + paisOrigen);

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

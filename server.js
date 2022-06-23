
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  while(true) {
    console.log("Microservices rock!");
    await sleep(5000);
  }
}


const DOCKER_USERNAME = process.env.DOCKER_USERNAME;
console.log(`USERNAME is ${DOCKER_USERNAME}`);


const DOCKER_PASSWORD = process.env.DOCKER_PASSWORD;
console.log(`My password is ${DOCKER_PASSWORD}`);

main();

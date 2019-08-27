const args = process.argv.slice(2);
let sortedArray = args.sort((a,b) => a > b ? 1 : -1);
for (let seconds of sortedArray) {
  if (Number(seconds) && Number(seconds) >= 0) {
    setTimeout(() => {
      process.stdout.write('\x07');
    }, Number(seconds) * 1000);
  }
}

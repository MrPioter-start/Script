let group = {
  userName: new String("Anufrieu P.V."),
  dateBirth: "12.01.2005",
  performance: [6, 7, 5, 6, 7],
};

let groupCopyLink = group;

let groupCopyMeaning = {};
for (let key in group) {
  groupCopyMeaning[key] = Array.isArray(group[key])
    ? [...group[key]]
    : group[key];
}

//groupCopyMeaning.performance.push(5);
//forEach(groupCopyMeaning);

//groupCopyLink.userName = "Zhurou B.V.";

//forEach(groupCopyLink);

/*function forEach(group) {
  for (let key in group) {
    console.log(group[key]);
  }
}*/

let arrayGroups = [group, groupCopyLink, groupCopyMeaning];

let usedMemory = process.memoryUsage().heapUsed / 1024 / 1024;
console.log(`The script uses ${usedMemory.toFixed(2)} MB`);

setTimeout(() => {
  group = null;
  groupCopyLink = null;
  groupCopyMeaning = null;
  arrayGroups = null;
  let isedMemory = process.memoryUsage().heapUsed / 1024 / 1024;
  console.log(`The script uses ${isedMemory.toFixed(2)} MB`);
}, 5000);

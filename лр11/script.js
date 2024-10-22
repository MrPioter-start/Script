let group = {
  userName: new String("Anufrieu P.V."),
  dateBirth: "12.01.2005",
  performance: [6, 7, 5, 6, 7],
};

let groupCopyLink = group;
let groupCopyMeaning = {};
for (let key in group) {
  groupCopyMeaning[key] = group[key];
}

groupCopyMeaning.performance.push(5);
forEach(groupCopyMeaning);

groupCopyLink.userName = "Zhurou B.V.";

forEach(groupCopyLink);

function forEach(group) {
  for (let key in group) {
    console.log(group[key]);
  }
}

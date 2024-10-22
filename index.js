const discord = require("discord.js-selfbot-v13");

const client = new discord.Client({
  checkUpdate: false,
});

/* -------------------- Config --------------------*/

const upChannelId = "channel id";
const token = "account token";

/* -------------------- Event --------------------*/

client.on("ready", async () => {
  const upChannel = await client.channels.fetch(upChannelId);
  await disboardUp();
  await dissokuUp();
  await dicoallUp();
  setTimeout(async function () {
    await disboardUp();
    await dissokuUp();
    await dicoallUp();
  }, 3610000);
});

/* -------------------- Functions --------------------*/

async function disboardBump(upChannel) {
  await upChannel.sendSlash('302050872383242240', 'bump');
  console.log('disboard bump!');
}

async function dissokuUp(upChannel) {
  await upChannel.sendSlash('761562078095867916', 'dissoku up');
  console.log('dissoku up!');
}

async function dicoallUp(upChannel) {
  await upChannel.sendSlash('903541413298450462', 'up')/
  console.log('dicoall up!');
}

/* -------------------- Login --------------------*/

client.login(token);

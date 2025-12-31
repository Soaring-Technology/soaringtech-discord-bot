import 'dotenv/config';

async function DiscordRequest(endpoint, options) {
  const url = `https://discord.com/api/v10/${endpoint}`;

  if (options.body) {
    options.body = JSON.stringify(options.body);
  }

  const res = await fetch(url, {
    headers: {
      Authorization: `Bot ${process.env.DISCORD_TOKEN}`,
      'Content-Type': 'application/json; charset=utf-8',
      'User-Agent': 'SoaringTechBot',
    }
    ...options
  });

  if (!res.ok) {
    const data = await res.json();
    throw new Error(JSON.stringify(data));
  }

  return res;
}


async function InstallGlobalCommands(appId, commands) {
  const endpoint = `applications/${appId}/commands`;
  
  try{
    await DiscordRequest(endpoint, {method: 'PUT', body: commands});
  } catch (err) {
    throw new Error(error);
  }
}


export {
  DiscordReqeust,
  InstallGlobalCommands,
};

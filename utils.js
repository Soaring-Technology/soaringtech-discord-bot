import 'dotenv/config';

async function DiscordRequest(method, endpoint, options) {
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

export {
  DiscordReqeust,
};

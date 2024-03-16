const server = Bun.serve({
  port: 3000,
  fetch(req) {
    return new Response("HELLO WORLD YEAHHH!");
  }
});

console.log(`Listening to PORT ${server.port}`);

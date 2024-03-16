const server = Bun.serve({
  port: 3000,
  fetch(req) {
    const url = new URL(req.url);

    switch (url.pathname) {
      case "/":
        return new Response("HOME");

      case "/about":
        return new Response("About me!");

      case "/contact":
        return new Response("Contact us!");

      default:
        throw new Error("Could not find " + url.pathname);
    }
  },

  error(error) {
    return new Response(`<pre> ${error} \n ${error.stack}</pre>`, {
      headers: {
        'Content-Type': 'text/html',
      }
    }
    )
  }
});

console.log(`Listening to PORT ${server.port}`);

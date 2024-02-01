# netlinq-api

This project features a fully-typed api wrapper around the [Netlinq IP Management](https://netlinq.de), mapping 100% of available calls. It is written in TypeScript and can be used in both Node.js and the browser.

## Installation

You can install the package via your preferred package manager:

```bash
npm install netlinq-api
yarn add netlinq-api
pnpm add netlinq-api
```

## Usage

To use this package you need to have an API key. You can get one by contacting the [Synlinq](https://synlinq.de) support.

```typescript
import { NetlinqApi } from "netlinq-api";

// Create a new instance of the Netlinq API wrapper with your API key
const netlinq = new NetlinqApi({
  apiKey: "my-secret-api-key",
  // You can also set a custom host if you want to use a different Netlinq instance
  // host: "https://netlinq.de/api/v1",
});

async function test() {
  // For example: Get data for a given IPv4 address
  const address = await netlinq.ipv4.address.getByIp({
    ip: "192.168.0.1",
    // You can also include the traffic data if you want to
    // traffic_from: "30d",
    // traffic_to: "now",
  });

  // Another example: Set rDNS for a given IPv4 address
  await netlinq.rDNS.ipv4.setByIp({
    ip: "192.168.0.1",
    rdns: "my-rdns.example.com",
  });
}

test().catch(console.error)
```

## Notes

Some API calls are implemented in this package, but not working on the Netlinq API. These are marked with a `TODO` comment in the source code.

## License

This project is licensed under the Apache 2.0 License - see the [LICENSE](LICENSE) file for details.
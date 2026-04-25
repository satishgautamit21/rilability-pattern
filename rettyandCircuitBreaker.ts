type Data = {
  items: any[];
  source: string;
};

// ------------------
// Circuit Breaker State
// ------------------
class CircuitBreaker {
  private failureCount = 0;
  private successCount = 0;
  private state: "CLOSED" | "OPEN" | "HALF_OPEN" = "CLOSED";
  private nextAttempt = 0;

  constructor(
    private failureThreshold = 3,
    private cooldownTime = 5000
  ) {}

  async call<T>(fn: () => Promise<T>): Promise<T> {
    if (this.state === "OPEN") {
      if (Date.now() > this.nextAttempt) {
        this.state = "HALF_OPEN";
      } else {
        throw new Error("Circuit is OPEN");
      }
    }

    try {
      const result = await fn();

      this.successCount++;
      this.failureCount = 0;

      if (this.state === "HALF_OPEN") {
        this.state = "CLOSED";
      }

      return result;
    } catch (err) {
      this.failureCount++;

      if (this.failureCount >= this.failureThreshold) {
        this.state = "OPEN";
        this.nextAttempt = Date.now() + this.cooldownTime;
        console.log("⚡ Circuit OPEN");
      }

      throw err;
    }
  }
}

// ------------------
// Retry Logic
// ------------------
async function retry<T>(
  fn: () => Promise<T>,
  retries = 3,
  delay = 500
): Promise<T> {
  let lastError;

  for (let i = 0; i < retries; i++) {
    try {
      return await fn();
    } catch (err) {
      lastError = err;
      console.log(`Retry attempt ${i + 1} failed`);
      await new Promise(res => setTimeout(res, delay));
    }
  }

  throw lastError;
}

// ------------------
// Fallback
// ------------------
let cache: Data | null = null;

function fallback(): Data {
  console.log("🛟 Using fallback");

  if (cache) {
    return { ...cache, source: "cache-fallback" };
  }

  return { items: [], source: "default-fallback" };
}

// ------------------
// Primary API
// ------------------
async function fetchPrimary(): Promise<Data> {
  const res = await fetch("https://api.example.com/data");

  if (!res.ok) throw new Error("API failed");

  const data = await res.json();

  cache = { items: data, source: "primary" };

  return cache;
}

// ------------------
// Combined Flow
// ------------------
const circuitBreaker = new CircuitBreaker();

async function getData(): Promise<Data> {
  try {
    return await circuitBreaker.call(() =>
      retry(fetchPrimary, 2, 300)
    );
  } catch (err) {
    return fallback();
  }
}

// ------------------
// Usage
// ------------------
(async () => {
  const data = await getData();
  console.log(data);
})();
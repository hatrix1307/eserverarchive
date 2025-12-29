export default async function handler(req, res) {
  const { server } = req.query; // gets the server from the URL
  try {
    const response = await fetch(`https://topeaglerservers.com/api/status/${encodeURIComponent(server)}`);
    const data = await response.json();
    res.setHeader('Access-Control-Allow-Origin', '*'); // optional if frontend is same domain
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch server status' });
  }
}

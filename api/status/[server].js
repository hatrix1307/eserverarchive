export default async function handler(req, res) {
  const { server } = req.query;

  try {
    const r = await fetch(`https://topeaglerservers.com/api/status/${server}`);
    const data = await r.json();
    res.status(200).json(data);
  } catch (e) {
    res.status(500).json({ success: false, error: e.message });
  }
}

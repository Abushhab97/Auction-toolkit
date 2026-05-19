exports.handler = async (event) => {
  const params = event.queryStringParameters || {};
  const apiKey = 'sk_ad_Ody3_Ni_jfYvHXJ1XIsgaQ8n';

  if (!params.make || !params.model) {
    return {
      statusCode: 400,
      headers: { 'Access-Control-Allow-Origin': '*' },
      body: JSON.stringify({ error: 'Make and model are required' })
    };
  }

  let url = `https://api.auto.dev/listings?vehicle.make=${encodeURIComponent(params.make)}&vehicle.model=${encodeURIComponent(params.model)}&limit=50`;
  if (params.year)    url += `&vehicle.year=${params.year}`;
  if (params.trim)    url += `&vehicle.trim=${encodeURIComponent(params.trim)}`;
  if (params.mileage) url += `&retailListing.mileage=${params.mileage}`;

  try {
    const res = await fetch(url, {
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
      }
    });

    const data = await res.json();

    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    };
  } catch(e) {
    return {
      statusCode: 500,
      headers: { 'Access-Control-Allow-Origin': '*' },
      body: JSON.stringify({ error: e.message })
    };
  }
};

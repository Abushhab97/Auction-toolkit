exports.handler = async (event) => {
  const params = event.queryStringParameters;
  const apiKey = 'sk_ad_Ody3_Ni_jfYvHXJ1XIsgaQ8n';
  
  let url = `https://api.auto.dev/listings?vehicle.make=${params.make}&vehicle.model=${params.model}&limit=50`;
  if (params.year)     url += `&vehicle.year=${params.year}`;
  if (params.trim)     url += `&vehicle.trim=${params.trim}`;
  if (params.mileage)  url += `&retailListing.mileage=${params.mileage}`;

  const res = await fetch(url, {
    headers: { 'Authorization': `Bearer ${apiKey}` }
  });
  const data = await res.json();

  return {
    statusCode: 200,
    headers: { 'Access-Control-Allow-Origin': '*' },
    body: JSON.stringify(data)
  };
};

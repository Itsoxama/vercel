export async function getFilters() {
  const apiUrl = "https://cfsapi.infibrain.com/api/Company/GetFilters";
  const res = await fetch(apiUrl, { cache: 'no-store' });
  const data = await res.json();
  return data;
}



export async function getPaymentPlans() {
  const apiUrl = "https://cfsapi.infibrain.com/api/Company/GetPaymentPlans";
  const res = await fetch(apiUrl, { cache: 'no-store' });
  if (!res.ok) throw new Error('Failed to fetch payment plans');
  return res.json();
}


// lib/api.js
export async function getJobsByFilters({token="", experienceLevel = "", locationsearch = "", sector = [""], industry = [""], jobType = [""], search = "", page = 1, limit = 10 }) {
  const apiUrl = "https://cfsapi.infibrain.com/api/Company/GetJobsbyFilters";

  const payload = {workMode:[""], sector, industry,locationsearch, experienceLevel,jobType, search, page, limit };
  const headers = {
    "Content-Type": "application/json",
    "accept": "*/*",
  };

  // Add Authorization header if token is provided
  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }
  const res = await fetch(apiUrl, {
    method: 'POST',
    headers,
    body: JSON.stringify(payload),
    cache: 'no-store'
  });

  if (!res.ok) throw new Error('Failed to fetch jobs');

  return res.json();
}


export async function getSearchQueries() {
  const apiUrl = "https://cfsapi.infibrain.com/api/Company/search-queries";
  const res = await fetch(apiUrl, { cache: 'no-store' });
  if (!res.ok) {
    throw new Error('Failed to fetch search queries');
  }
  return res.json();
}

export async function getJobById(token="",id) {
  const apiUrl = `/api/cfs/api/Company/JobbyID?id=${id}`;
    const headers = {
    "Content-Type": "application/json",
    "accept": "*/*",
  };
    // Add Authorization header if token is provided
  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }
  const res = await fetch(apiUrl, {
    method: 'GET',
       headers,

    cache: 'no-store'
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch job with id ${id}`);
  }

  return res.json();
}

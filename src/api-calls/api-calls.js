
const baseURL = 'http://localhost:3001/api/v1/';

function checkErrors(response) {
  if (response.status !== 200) {
    throw new Error("Something went wrong!");
  } else {
    return response.json();
  }
}

export async function fetchReservationData(endpoint) {
  const response = await fetch(`${baseURL}${endpoint}`);
  return checkErrors(response);
}

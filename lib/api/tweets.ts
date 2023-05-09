import {API_URL, authToken} from "./config";

export const listTweets = async () => {
  // fetch the tweets
  const res = await fetch(`${API_URL}/tweet`, {
    headers: {
      Authorization: `Bearer ${authToken}`
    }
  });
  if(res.status !== 200) {
    throw new Error('Failed to fetch tweets');
  }
  return await res.json();
}

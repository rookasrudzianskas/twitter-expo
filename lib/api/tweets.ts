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

export const getTweet = async (id: string) => {
  // fetch the tweets
  const res = await fetch(`${API_URL}/tweet/${id}`, {
    headers: {
      Authorization: `Bearer ${authToken}`
    }
  });
  if(res.status !== 200) {
    throw new Error('Failed to fetch tweets');
  }
  return await res.json();
}

export const createTweet = async (data: { content: string }) => {
  // fetch the tweets
  const res = await fetch(`${API_URL}/tweet`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${authToken}`,
      'Content-type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  if(res.status !== 200) {
    throw new Error('Failed to fetch tweets');
  }
  return await res.json();
}

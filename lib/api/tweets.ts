import {Alert} from "react-native";

const API_URL = 'http://localhost:3000';
export const listTweets = async () => {
  // fetch the tweets
  const url = API_URL + '/tweet';
  const authToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbklkIjo2fQ.FOgqCYFyq9B-OREo6n5Ttu-m9WO8LYuezDLybm0W2FY';
  const res = await fetch(url, {
    headers: {
      Authorization: `Bearer ${authToken}`
    }
  });
  if(res.status !== 200) {
    throw new Error('Failed to fetch tweets');
  }
  return await res.json();
}

//@ts-nocheck
import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import tweets from '../assets/data/tweets'
import Tweet from "../components/Tweet";

export default function TweetScreen() {
  return <Tweet tweet={tweets[0]} />;
}

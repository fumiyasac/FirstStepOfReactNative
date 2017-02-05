/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

/**
 * (次のToDo)アプリの雛形っぽいところまで作ってみる
 * http://qiita.com/y_matsuwitter/items/a7fc88e566b80b4c1eea
 */

/**
 * Reactのインポート文
 *
 * (参考)以前の書き方だとこのような形になっていた
 * 'use strict';
 * var React = require('react-native');
 */
import React, { Component } from 'react';

/**
 * 使うコンポーネント(配置したい部品)の定義
 *
 * → ReactNativeの公式ドキュメント内「COMPONENTS」から配置したいものを適宜引っ張ってくる形
 * https://facebook.github.io/react-native/docs/getting-started.html
 */
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

/**
 * コンポーネントに関する設定やスタイル適用をこの中で行う
 *
 * (ポイント) style=styles.[設定したプロパティ]の形でスタイルの適用を行う
 * ※ 個人的な所感としてはAndroidのレイアウトに近い作成方法
 */
export default class FirstStepOfReactNative extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>
    );
  }
}

/**
 * スタイルの適用
 *
 * (参考) ReactNativeのFlexboxレイアウト
 * http://minotaur.badwitch.io/reactnative-flexbox/
 * (参考) A Complete Guide to Flexbox
 * https://css-tricks.com/snippets/css/a-guide-to-flexbox/
 *
 * createメソッドの中にプロパティを設定しスタイルを定義する
 */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

//コンポーネントの適用を行って画面に表示する
AppRegistry.registerComponent('FirstStepOfReactNative', () => FirstStepOfReactNative);

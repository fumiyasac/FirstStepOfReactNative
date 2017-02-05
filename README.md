# [ING] - ReactNativeことはじめ＆実装サンプル

### 1.実装部分に関して

※今回の部分はiOS部分にコメントを書いて基本部分のおさらいをした形になります。
出力したコードの部分に基本的事項のコメントを残しています。

### 2.インストール時のトラブルシューティング

Node.jsのバージョンが古い or モジュール：invariantが見つからないと警告が出てしまう場合には下記の手順で再度インストール手順を実行する。

+ brewでnode.jsを再度インストールする
+ react-native-cliをアンインストール→インストールを行う

#### 手順

```
//Node.jsのインストール（事前にHomeBrewをインストールする必要がある）
$ brew install node
$ brew install watchman

//react-native-cliの再インストール（以前に他のバージョンをしていたため下記のコマンドを実行した）
$ npm uninstall react-native-cli -g
$ npm install npm@latest -g
$ npm install react-native-cli -g
```
### 3. 迷った時はここを読むと良いドキュメントや参考資料

+ [React Native さわってみたメモ](http://blog.koogawa.com/entry/2017/02/05/084611)
+ [React Native 公式ドキュメント](https://facebook.github.io/react-native/docs/getting-started.html)
+ [NQT Online Education](https://www.youtube.com/playlist?list=PLPEXdvrIYLsyFc1EVVr_YVtxU9icYfaWs)
+ [A Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

# [ING] - ReactNativeことはじめ＆実装サンプル

### 1.実装部分に関して

Work In Progress.

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

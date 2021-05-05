# Redux Tool Kitを使ってアプリ作成

## アプリ作成時
nxp create-react-app . template redux
コマンドを実行で
reduxのテンプレートとreactのアプリケーションを同時に作成できる
ローカル環境を実行するとreduxAppのカウンター画面が表示できればOK

## 必要なツールをインストールする
imp install axios
Chromeの拡張機能「Redux DevTools」

## counterSlice
Storeの中のあるsliceの部分
stateやreducerがある

## dispatch
ユーザーのアクションによってstoreへアクションを伝達する
useDispatchをインポートしてdispatch(関数)でアクションを渡す

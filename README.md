## 第7講目の演習課題
### 課題内容
授業資料を参照して、下記作業を実施せよ。また、実行画面のスクリーンショットをWebClassに提出せよ。
* Docker, FastAPIのインストール・設定
* TODOアプリで使うAPIのベース作成

### 期限
* 2025年6月9日（月）12時25分

## 第8講目の演習課題
### 課題内容
授業資料を参照して、下記作業を実施せよ。
また、Swagger UIでタスクの登録処理（POST /tasks）の実行画面のスクリーンショット（VS Codeまたはコマンドプロンプト等でのサーバ起動画面含む）をWebClassに提出せよ。
* スキーマ（api/schemas/task.py）の定義
* ルーター（api/routers/task.py, done.py）の修正
* Swagger UIでの動作確認

### 期限
* 2025年6月16日（月）12時25分

## ディレクトリ構成（第8講目 課題時点）
<pre>
kadai07/
├── api/
│   ├── cruds
│   ├── models
│   ├── routers/
│   │   ├── done.py
│   │   └── task.py
│   └── schemas/
│       └── task.py
├── docker-compose.yaml
└── Dockerfile
</pre>

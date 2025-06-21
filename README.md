## 第10講目の演習課題
### 課題内容
授業資料を参照して、下記作業を実施せよ。
また、CRUD処理を実装し、タスク登録用APIのSwagger UI実行画面のスクリーンショット（VS Codeまたはコマンドプロンプトでサーバ起動を含む）を提出せよ。
* CRUDのDB操作処理（api/cruds/task.py, api/cruds/done.py）
* 上記に対応するルーター処理（api/routers/task.py, api/routers/done.py）
* 上記に対応するスキーマ処理（api/schemas/done.py）

### 期限
* 2025年6月30日（月）12時25分

## 第9講目の演習課題
### 課題内容
授業資料を参照して、下記作業を実施せよ。
また、FastAPIにおけるモデル設計を行い、dones, tasks のテーブル定義の実行画面のスクリーンショット（VS Codeまたはコマンドプロンプトで実行）を提出せよ。
* DockerでDBのコンテナ作成
* SQLAlchemyおよび関連ライブラリのインストール
* DB接続クラス（api/db.py）、モデルのクラス定義（api/models/task.py）
* DBマイグレーション（api/migrate_db.py）の作成と実行
* MySQLコマンドでの実行確認

### 期限
* 2025年6月23日（月）12時25分

## 第8講目の演習課題
### 課題内容
授業資料を参照して、下記作業を実施せよ。
また、Swagger UIでタスクの登録処理（POST /tasks）の実行画面のスクリーンショット（VS Codeまたはコマンドプロンプト等でのサーバ起動画面含む）をWebClassに提出せよ。
* スキーマ（api/schemas/task.py）の定義
* ルーター（api/routers/task.py, done.py）の修正
* Swagger UIでの動作確認

### 期限
* 2025年6月16日（月）12時25分

## 第7講目の演習課題
### 課題内容
授業資料を参照して、下記作業を実施せよ。また、実行画面のスクリーンショットをWebClassに提出せよ。
* Docker, FastAPIのインストール・設定
* TODOアプリで使うAPIのベース作成

### 期限
* 2025年6月9日（月）12時25分

## ディレクトリ構成（第10講目 課題時点）
<pre>
kadai07/
├── api/
│   ├── _init__.py
│   ├── db.py
│   ├── main.py
│   ├── migrate_db.py
│   ├── cruds/
│   │   ├── __init__.py
│   │   ├── done.py
│   │   └── task.py
│   ├── models/
│   │   ├── __init__.py
│   │   └── task.py
│   ├── routers/
│   │   ├── __init__.py
│   │   ├── done.py
│   │   └── task.py
│   └── schemas/
│       ├── __init__.py
│       ├── done.py
│       └── task.py
├── docker-compose.yaml
└── Dockerfile
</pre>

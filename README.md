# ELECTRY LAB

https://electrylab-lab.github.io/

- `/` 総合ページ（基本ヒアリング → 各フォーム、制作メニュー）
- `/sheet/?n=お客様名` お客様専用ヒアリングシート（アイコン一覧。記入済みは色付き。この端末のみ記録）
- `/c/<お客様-ランダム>/` お客様専用の確認ページ（白ベース。済／確認／これからの一覧＋Tallyへ修正・追加リンク。noindex・個人の携帯は下4桁のみ）。例：`/c/lien-7k3m/`
- `/personal/`（個人の基本） `/form/`（店舗・会社の基本） `/meishi/` `/logo/` `/shopcard/` `/flyer/` `/menu/` `/lighter/` 単品URL（サムネ付きでTallyへ転送）
- Tallyへは `name`（宛名）と `type`（new / more / change）を渡す。受け取るには各フォームに同名の隠しフィールドを追加

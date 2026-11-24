# マイクロビット ひらがなエディタ

micro:bit（マイクロビット）のための、すべてひらがな表記のブロックエディタです。
低学年の子どもが、漢字やカタカナに妨げられずにブロックプログラミングを楽しめるように作りました。

## 非公式プロジェクトです

このサイトは**非公式のプロジェクト**です。Microsoft および Micro:bit Educational Foundation とは関係がなく、承認を受けたものではありません。

## クレジットとライセンス

- このサイトは Microsoft MakeCode (PXT) と pxt-microbit をもとに作成しています。
  - Microsoft MakeCode (PXT): https://github.com/microsoft/pxt
  - pxt-microbit: https://github.com/microsoft/pxt-microbit
- MakeCode (PXT) および pxt-microbit は MIT ライセンスで公開されています。本サイトもそのライセンス条件に従います。
- 日本語の翻訳文は MakeCode 公式の日本語版をもとに、ひらがな表記へ変換したものです。
- MakeCode の本家サイトはこちら: https://makecode.microbit.org/

## このフォルダについて

このフォルダは、GitHub Pages へそのまま push して公開するための**生成物（静的ビルド）**です。手作業で編集するものではありません。

- 生成方法: pxt-microbit のフォークで `pxt staticpkg --route makecode-hiragana` を実行し、出力された `built/packaged/makecode-hiragana/` の中身をコピーしたものです。
  - `--route makecode-hiragana` により、サイト内リンクの接頭辞（relprefix）が `/makecode-hiragana/` になり、`https://hakatamax.github.io/makecode-hiragana/` のサブパス配信で動作します。
  - リポジトリ名を変える場合は、その名前で `--route` を指定して再ビルドしてください。
- `.nojekyll` は GitHub Pages の Jekyll 処理を無効化するためのファイルです（アンダースコアで始まるファイルやフォルダが正しく配信されるために必須）。消さないでください。
- 公開先: `https://hakatamax.github.io/makecode-hiragana/`
  - `pxtarget.json` の `homeUrl` / `embedUrl` / `shareUrl`（共有リンク生成用URL）は、公開URL `https://hakatamax.github.io/makecode-hiragana/` に差し替えて再ビルド済みです（本生成物に反映済み）。

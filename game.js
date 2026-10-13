/* global Phaser */
(function () {
  "use strict";

  const levels = [
    {
      title: "晨間的準備", subtitle: "日常生活・單字與習慣", area: "東京 · MORNING ROUTE", accent: 0x9af0d0,
      questions: [
        { kind: "單字 VOCABULARY", prompt: "選出「洗衣服」的日文單字。", explanation: "洗濯（せんたく）就是洗衣服；掃除是打掃，料理是做菜。", options: [
          { jp: "洗濯", sub: "せんたく", correct: true }, { jp: "掃除", sub: "そうじ" }, { jp: "料理", sub: "りょうり" },
        ] },
        { kind: "文法 GRAMMAR", prompt: "「睡覺前，我會刷牙。」請選出正確句子。", explanation: "動詞辭書形＋前に表示「做……之前」：寝る前に。", options: [
          { jp: "寝る前に、歯を磨きます。", sub: "辭書形 ＋ 前に", correct: true }, { jp: "寝た前に、歯を磨きます。", sub: "た形 ＋ 前に" }, { jp: "寝るながら、歯を磨きます。", sub: "辭書形 ＋ ながら" },
        ] },
        { kind: "單字 VOCABULARY", prompt: "「急ぐ（いそぐ）」是什麼意思？", explanation: "急ぐ（いそぐ）是「趕快、著急」；待つ是等待，休む是休息。", options: [
          { jp: "趕快", sub: "急ぐ・いそぐ", correct: true }, { jp: "等待", sub: "待つ・まつ" }, { jp: "休息", sub: "休む・やすむ" },
        ] },
      ],
    },
    {
      title: "學校的日常", subtitle: "學習生活・能力與提問", area: "東京 · CAMPUS WALK", accent: 0xb7aaff,
      questions: [
        { kind: "單字 VOCABULARY", prompt: "選出「複習」的日文單字。", explanation: "復習（ふくしゅう）是複習；予習是預習，説明是說明。", options: [
          { jp: "復習", sub: "ふくしゅう", correct: true }, { jp: "予習", sub: "よしゅう" }, { jp: "説明", sub: "せつめい" },
        ] },
        { kind: "文法 GRAMMAR", prompt: "「我會用日文寫漢字。」請選出正確句子。", explanation: "動詞辭書形＋ことができます，表示「會做、能做」。", options: [
          { jp: "日本語で漢字を書くことができます。", sub: "辭書形 ＋ ことができます", correct: true }, { jp: "日本語で漢字を書いたことです。", sub: "た形 ＋ ことです" }, { jp: "日本語で漢字を書きながらです。", sub: "ます形去ます ＋ ながら" },
        ] },
        { kind: "單字 VOCABULARY", prompt: "「質問する（しつもんする）」是什麼意思？", explanation: "質問する（しつもんする）是提問、發問；答える是回答。", options: [
          { jp: "提問", sub: "質問する・しつもんする", correct: true }, { jp: "回答", sub: "答える・こたえる" }, { jp: "練習", sub: "練習する・れんしゅうする" },
        ] },
      ],
    },
    {
      title: "出發去旅行", subtitle: "交通與旅行・經驗表現", area: "東京 · RAILWAY GATE", accent: 0xffd179,
      questions: [
        { kind: "單字 VOCABULARY", prompt: "「乗り換え（のりかえ）」是什麼意思？", explanation: "乗り換え是轉車、換乘；到着是抵達，出発是出發。", options: [
          { jp: "轉車", sub: "乗り換え・のりかえ", correct: true }, { jp: "抵達", sub: "到着・とうちゃく" }, { jp: "出發", sub: "出発・しゅっぱつ" },
        ] },
        { kind: "文法 GRAMMAR", prompt: "「我曾經去過京都。」請選出正確句子。", explanation: "動詞た形＋ことがあります，表示曾有過某種經驗。", options: [
          { jp: "京都へ行ったことがあります。", sub: "た形 ＋ ことがあります", correct: true }, { jp: "京都へ行くことがあります。", sub: "辭書形 ＋ ことがあります" }, { jp: "京都へ行ってことがあります。", sub: "て形 ＋ ことがあります" },
        ] },
        { kind: "單字 VOCABULARY", prompt: "「傘を電車に忘れました。」忘れ物是什麼？", explanation: "忘れ物（わすれもの）是遺忘、忘在某處的東西；落とし物是掉落的物品。", options: [
          { jp: "遺忘物品", sub: "忘れ物・わすれもの", correct: true }, { jp: "掉落物品", sub: "落とし物・おとしもの" }, { jp: "行李", sub: "荷物・にもつ" },
        ] },
      ],
    },
    {
      title: "商店街尋寶", subtitle: "購物與消費・原因說明", area: "東京 · SHOPPING ARCADE", accent: 0xffa888,
      questions: [
        { kind: "單字 VOCABULARY", prompt: "選出「折扣」的日文單字。", explanation: "割引（わりびき）是折扣；値段是價格，品物是物品。", options: [
          { jp: "割引", sub: "わりびき", correct: true }, { jp: "値段", sub: "ねだん" }, { jp: "品物", sub: "しなもの" },
        ] },
        { kind: "文法 GRAMMAR", prompt: "「因為便宜，我買了很多。」請選出正確句子。", explanation: "い形容詞＋ので表示原因理由：安いので（因為便宜）。", options: [
          { jp: "安いので、たくさん買いました。", sub: "い形容詞 ＋ ので", correct: true }, { jp: "安くので、たくさん買いました。", sub: "い形容詞去い ＋ ので" }, { jp: "安いのに、たくさん買いました。", sub: "い形容詞 ＋ のに" },
        ] },
        { kind: "單字 VOCABULARY", prompt: "「おつりをもらいました。」おつり是什麼？", explanation: "おつり是找回來的零錢；値段（ねだん）是價格。", options: [
          { jp: "找零", sub: "おつり", correct: true }, { jp: "價格", sub: "値段・ねだん" }, { jp: "錢包", sub: "財布・さいふ" },
        ] },
      ],
    },
    {
      title: "健康小任務", subtitle: "身體與健康・義務表達", area: "東京 · WELLNESS CLINIC", accent: 0x9cd7ff,
      questions: [
        { kind: "單字 VOCABULARY", prompt: "「今日、体の具合がよくないです。」具合是什麼意思？", explanation: "具合（ぐあい）是身體狀況、情況；気分偏向心情或感覺。", options: [
          { jp: "身體狀況", sub: "具合・ぐあい", correct: true }, { jp: "心情", sub: "気分・きぶん" }, { jp: "病院", sub: "びょういん" },
        ] },
        { kind: "文法 GRAMMAR", prompt: "「我必須每天喝水。」請選出正確句子。", explanation: "動詞ない形去い＋ければなりません，表示「必須……」。", options: [
          { jp: "毎日、水を飲まなければなりません。", sub: "ない形去い ＋ ければなりません", correct: true }, { jp: "毎日、水を飲まなくてもいいです。", sub: "ない形去い ＋ なくてもいい" }, { jp: "毎日、水を飲んではいけません。", sub: "て形 ＋ はいけません" },
        ] },
        { kind: "單字 VOCABULARY", prompt: "選出「逞強、硬撐」的日文表現。", explanation: "無理をする（むりをする）是勉強硬撐、逞強；無理をしない就是不要勉強。", options: [
          { jp: "無理をする", sub: "むりをする", correct: true }, { jp: "気をつける", sub: "きをつける" }, { jp: "治る", sub: "なおる" },
        ] },
      ],
    },
    {
      title: "朋友的約定", subtitle: "交友與相處・同時進行", area: "東京 · MEETING SPOT", accent: 0xf3a7c0,
      questions: [
        { kind: "單字 VOCABULARY", prompt: "選出「約定、約會」的日文單字。", explanation: "約束（やくそく）是約定；予定表示計畫、預定。", options: [
          { jp: "約束", sub: "やくそく", correct: true }, { jp: "予定", sub: "よてい" }, { jp: "連絡", sub: "れんらく" },
        ] },
        { kind: "文法 GRAMMAR", prompt: "「我一邊聽音樂，一邊讀書。」請選出正確句子。", explanation: "動詞ます形去ます＋ながら，表示同一人同時做兩件事。", options: [
          { jp: "音楽を聞きながら、勉強します。", sub: "ます形去ます ＋ ながら", correct: true }, { jp: "音楽を聞いたながら、勉強します。", sub: "た形 ＋ ながら" }, { jp: "音楽を聞くながら、勉強します。", sub: "辭書形 ＋ ながら" },
        ] },
        { kind: "單字 VOCABULARY", prompt: "「親切な人が道を教えてくれました。」親切是什麼意思？", explanation: "親切（しんせつ）是親切、熱心；便利（べんり）是方便。", options: [
          { jp: "親切", sub: "しんせつ", correct: true }, { jp: "便利", sub: "べんり" }, { jp: "大切", sub: "たいせつ" },
        ] },
      ],
    },
    {
      title: "下一站，未來", subtitle: "夢想與計畫・未來打算", area: "東京 · TOMORROW STATION", accent: 0xc0a9ff,
      questions: [
        { kind: "單字 VOCABULARY", prompt: "「将来の目標を考えています。」將来是什麼意思？", explanation: "将来（しょうらい）是將來、未來；最近是近來，今度是下次。", options: [
          { jp: "將來", sub: "将来・しょうらい", correct: true }, { jp: "最近", sub: "さいきん" }, { jp: "下次", sub: "今度・こんど" },
        ] },
        { kind: "文法 GRAMMAR", prompt: "「我打算明年去日本留學。」請選出正確句子。", explanation: "動詞辭書形＋つもりです，表示已經有的打算或計畫。", options: [
          { jp: "来年、日本へ留学するつもりです。", sub: "辭書形 ＋ つもりです", correct: true }, { jp: "来年、日本へ留学したつもりです。", sub: "た形 ＋ つもりです" }, { jp: "来年、日本へ留学しながらです。", sub: "ます形去ます ＋ ながら" },
        ] },
        { kind: "單字 VOCABULARY", prompt: "選出「留學」的日文單字。", explanation: "留学（りゅうがく）是留學；旅行是旅遊，入学是入學。", options: [
          { jp: "留学", sub: "りゅうがく", correct: true }, { jp: "旅行", sub: "りょこう" }, { jp: "入学", sub: "にゅうがく" },
        ] },
      ],
    },
  ];

  const state = { levelIndex: 0, questionIndex: 0, score: 0, correctCount: 0, started: false, finished: false, move: { x: 0, y: 0 } };
  const $ = (id) => document.getElementById(id);
  const levelTrack = $("level-track");
  levelTrack.innerHTML = levels.map((_, index) => `<span class="level-marker${index === 0 ? " is-active" : ""}" data-level="${index}" aria-hidden="true"></span>`).join("");

  function currentLevel() { return levels[state.levelIndex]; }
  function currentQuestion() { return currentLevel().questions[state.questionIndex]; }
  function padNumber(value) { return String(value).padStart(2, "0"); }

  function refreshPanel() {
    const level = currentLevel();
    const question = currentQuestion();
    $("score-value").textContent = state.score;
    $("level-value").textContent = padNumber(Math.min(state.levelIndex + 1, levels.length));
    $("lesson-number").textContent = `${padNumber(state.levelIndex + 1)} — 07`;
    $("stage-tag").textContent = `STAGE ${padNumber(state.levelIndex + 1)}`;
    $("stage-title").textContent = level.title;
    $("stage-subtitle").textContent = level.subtitle;
    $("window-location").textContent = level.area;
    $("round-count").innerHTML = `${padNumber(state.questionIndex + 1)} <small>/ 03</small>`;
    $("question-kind").textContent = question.kind;
    $("question-kind").classList.toggle("is-grammar", question.kind.startsWith("文法"));
    $("question-count").textContent = `QUESTION ${padNumber(state.questionIndex + 1)}`;
    $("question-prompt").textContent = question.prompt;
    $("question-card").hidden = false;
    $("feedback-card").hidden = true;
    $("feedback-card").classList.remove("is-wrong");
    $("panel-bottom").hidden = false;
    $("completion-card").hidden = true;
    const markers = [...levelTrack.querySelectorAll(".level-marker")];
    markers.forEach((marker, index) => {
      marker.classList.toggle("is-active", index === state.levelIndex);
      marker.classList.toggle("is-complete", index < state.levelIndex);
    });
    const roundBars = [...$("round-bars").children];
    roundBars.forEach((bar, index) => {
      bar.classList.toggle("is-done", index < state.questionIndex);
      bar.classList.toggle("is-current", index === state.questionIndex);
    });
  }

  function showAnswerResult(isCorrect) {
    const question = currentQuestion();
    const card = $("feedback-card");
    const correctChoice = question.options.find((option) => option.correct);
    card.hidden = false;
    card.classList.toggle("is-wrong", !isCorrect);
    $("feedback-symbol").textContent = isCorrect ? "✓" : "!";
    $("feedback-title").textContent = isCorrect ? "正解！" : "もう一度！";
    $("feedback-points").textContent = isCorrect ? "+5" : "−3";
    $("feedback-copy").textContent = isCorrect
      ? question.explanation
      : `正解は「${correctChoice.jp}」${correctChoice.sub ? `（${correctChoice.sub}）` : ""}。${question.explanation}`;
    $("score-value").textContent = state.score;
  }

  function completeGame() {
    state.finished = true;
    $("question-card").hidden = true;
    $("feedback-card").hidden = true;
    $("panel-bottom").hidden = true;
    $("completion-card").hidden = false;
    $("completion-copy").textContent = `你答對 ${state.correctCount} / 21 題，和摩爾加納一起完成了 N4 特訓！`;
    $("final-score").innerHTML = `${state.score} <small>pt</small>`;
    $("level-value").textContent = "07";
    $("lesson-number").textContent = "07 — 07";
    $("round-count").innerHTML = "03 <small>/ 03</small>";
    $("round-bars").querySelectorAll("i").forEach((bar) => { bar.classList.add("is-done"); bar.classList.remove("is-current"); });
    levelTrack.querySelectorAll(".level-marker").forEach((marker) => { marker.classList.add("is-complete"); marker.classList.remove("is-active"); });
  }

  class FieldScene extends Phaser.Scene {
    constructor() {
      super("FieldScene");
      this.choices = [];
      this.choiceLocked = true;
      this.avatarSpeed = 225;
      this.courseTitle = null;
      this.courseMeta = null;
      this.mobileInput = { up: false, down: false, left: false, right: false };
      this.celebrationStars = [];
    }

    create() {
      this.drawEnvironment();
      this.createMona();
      this.cursors = this.input.keyboard.createCursorKeys();
      this.wasd = this.input.keyboard.addKeys("W,A,S,D");
      this.courseMeta = this.add.text(25, 15, "N4 FIELD NOTES  /  01", { fontFamily: '"DM Mono", monospace', fontSize: "9px", color: "#9af0d0", letterSpacing: 1.2 }).setDepth(4);
      this.courseTitle = this.add.text(25, 34, "MORGANA'S TRAINING", { fontFamily: '"Manrope", sans-serif', fontSize: "16px", fontStyle: "800", color: "#f2f1f7" }).setDepth(4);
      this.add.text(735, 38, "MOVE TO ANSWER", { fontFamily: '"DM Mono", monospace', fontSize: "8px", color: "#8f9bb4", letterSpacing: 1, align: "right" }).setOrigin(1, .5).setDepth(4);
      this.add.rectangle(380, 72, 760, 1, 0x8999ba, .17).setDepth(4);
      this.setupInputButtons();
      this.events.on("shutdown", () => this.clearInputButtons());
      this.events.on("destroy", () => this.clearInputButtons());
      window.fieldScene = this;
      if (state.started) this.setStage();
    }

    drawEnvironment() {
      const bg = this.add.graphics();
      bg.fillGradientStyle(0x121b35, 0x121b35, 0x172b43, 0x142740, 1);
      bg.fillRect(0, 0, 760, 500);
      bg.fillStyle(0x10182f, 1);
      bg.fillRect(0, 0, 760, 74);
      bg.fillStyle(0x21364a, .45);
      bg.fillEllipse(380, 143, 490, 106);
      bg.fillStyle(0x1d3b48, .42);
      bg.fillEllipse(380, 170, 680, 108);
      bg.fillStyle(0x183542, .6);
      bg.fillEllipse(380, 207, 880, 128);
      bg.fillStyle(0x142b41, 1);
      bg.fillRect(0, 207, 760, 293);
      bg.lineStyle(1, 0x7fa99f, .08);
      for (let i = 0; i < 10; i += 1) bg.lineBetween(i * 100 - 30, 208, i * 100 + 165, 500);
      for (let y = 244; y < 500; y += 44) bg.lineBetween(0, y, 760, y);

      // A quiet torii silhouette anchors the Tokyo path without obscuring answer cards.
      bg.fillStyle(0x4e384f, .64);
      bg.fillRoundedRect(352, 114, 13, 92, 4);
      bg.fillRoundedRect(395, 114, 13, 92, 4);
      bg.fillRoundedRect(338, 109, 84, 9, 4);
      bg.fillRoundedRect(344, 122, 72, 5, 2);
      bg.fillStyle(0x6b4755, .32);
      bg.fillEllipse(380, 207, 140, 11);

      const treePositions = [[52, 167, 30], [104, 184, 24], [706, 169, 32], [653, 187, 23]];
      treePositions.forEach(([x, y, radius], i) => {
        bg.fillStyle(i % 2 ? 0x28524d : 0x254b49, .82);
        bg.fillCircle(x, y, radius);
        bg.fillCircle(x - 14, y + 13, radius * .63);
        bg.fillCircle(x + 16, y + 16, radius * .6);
        bg.fillStyle(0x45695d, .5);
        bg.fillCircle(x - 7, y - 7, Math.max(4, radius * .18));
      });

      bg.fillStyle(0x34445d, .58);
      bg.fillRoundedRect(53, 296, 95, 28, 14);
      bg.fillRoundedRect(594, 356, 112, 30, 15);
      bg.fillRoundedRect(206, 437, 86, 24, 12);
      bg.fillStyle(0x8fa8af, .28);
      [[78, 309], [125, 307], [626, 370], [680, 371], [235, 447], [272, 447]].forEach(([x, y]) => bg.fillCircle(x, y, 2));

      // Lanterns and stepping stones provide depth while leaving the play space clear.
      bg.fillStyle(0x31465b, 1);
      bg.fillRoundedRect(39, 218, 12, 27, 3);
      bg.fillRoundedRect(31, 212, 28, 6, 3);
      bg.fillRoundedRect(34, 244, 22, 5, 2);
      bg.fillStyle(0xffd486, .73);
      bg.fillCircle(45, 230, 5);
      bg.fillStyle(0x31465b, 1);
      bg.fillRoundedRect(708, 245, 12, 27, 3);
      bg.fillRoundedRect(700, 239, 28, 6, 3);
      bg.fillRoundedRect(703, 271, 22, 5, 2);
      bg.fillStyle(0xffd486, .65);
      bg.fillCircle(714, 257, 5);

      const sparkles = [[185, 151], [568, 145], [256, 183], [513, 181], [163, 253], [607, 245], [107, 389], [685, 420], [315, 466], [478, 436]];
      sparkles.forEach(([x, y], i) => {
        bg.fillStyle(i % 2 ? 0xa8c3dc : 0xf1d99b, .27);
        bg.fillCircle(x, y, i % 3 === 0 ? 2 : 1.3);
      });
      bg.setDepth(0);
      const ambient = this.add.graphics().setDepth(1);
      ambient.lineStyle(2, 0x9af0d0, .16);
      ambient.strokeRoundedRect(13, 87, 734, 398, 14);
      ambient.lineStyle(1, 0xc5d4e8, .12);
      ambient.lineBetween(27, 105, 40, 105); ambient.lineBetween(27, 105, 27, 118);
      ambient.lineBetween(733, 105, 720, 105); ambient.lineBetween(733, 105, 733, 118);
    }

    createMona() {
      this.shadow = this.add.ellipse(380, 420, 48, 13, 0x081325, .48).setDepth(7);
      const mona = this.add.container(380, 400).setDepth(10);
      const shape = this.add.graphics();
      // Custom vector portrait of Morgana: black cat, white muzzle and paws, blue eyes, yellow scarf.
      shape.fillStyle(0x101522, 1);
      shape.fillTriangle(-15, -24, -19, -51, -2, -37);
      shape.fillTriangle(15, -24, 19, -51, 2, -37);
      shape.fillStyle(0xf2f0e8, 1);
      shape.fillTriangle(-13, -29, -15, -43, -6, -36);
      shape.fillTriangle(13, -29, 15, -43, 6, -36);
      shape.fillStyle(0x171c29, 1);
      shape.fillEllipse(0, -19, 40, 36);
      shape.fillStyle(0xf0eee7, 1);
      shape.fillEllipse(0, -9, 23, 16);
      shape.fillStyle(0x27b8e7, 1);
      shape.fillEllipse(-8, -21, 8, 11);
      shape.fillEllipse(8, -21, 8, 11);
      shape.fillStyle(0x111625, 1);
      shape.fillEllipse(-7, -21, 2.4, 7);
      shape.fillEllipse(7, -21, 2.4, 7);
      shape.fillStyle(0xffffff, .9);
      shape.fillCircle(-9, -24, 1.8);
      shape.fillCircle(7, -24, 1.8);
      shape.fillStyle(0xf19aa1, 1);
      shape.fillTriangle(-2.5, -12, 2.5, -12, 0, -9);
      shape.lineStyle(1.2, 0x323746, 1);
      shape.lineBetween(0, -9, 0, -6);
      shape.lineBetween(0, -6, -3, -5);
      shape.lineBetween(0, -6, 3, -5);
      shape.lineStyle(1, 0xe7e6df, .8);
      shape.lineBetween(-10, -12, -20, -14);
      shape.lineBetween(-10, -9, -20, -8);
      shape.lineBetween(10, -12, 20, -14);
      shape.lineBetween(10, -9, 20, -8);
      shape.fillStyle(0x202536, 1);
      shape.fillRoundedRect(-13, -3, 26, 33, 11);
      shape.fillStyle(0xf0eee7, 1);
      shape.fillEllipse(-13, 25, 12, 13);
      shape.fillEllipse(13, 25, 12, 13);
      shape.fillStyle(0xf4c94e, 1);
      shape.fillRoundedRect(-15, 1, 30, 8, 3);
      shape.fillTriangle(9, 6, 15, 7, 13, 17);
      shape.fillStyle(0xd99427, 1);
      shape.fillCircle(0, 5, 2.1);
      shape.lineStyle(5, 0x171c29, 1);
      shape.beginPath(); shape.moveTo(11, 11); shape.lineTo(23, 9); shape.lineTo(29, 2); shape.lineTo(28, -7); shape.strokePath();
      shape.lineStyle(2, 0x7d8ca3, .75);
      shape.lineBetween(-6, 31, -6, 34);
      shape.lineBetween(6, 31, 6, 34);
      mona.add(shape);
      const nameTag = this.add.container(0, 0);
      const nameBg = this.add.rectangle(0, 0, 39, 16, 0x10192c, .92).setStrokeStyle(1, 0xffd76c, .45);
      const nameText = this.add.text(0, -1, "モナ", { fontFamily: '"Noto Sans JP", sans-serif', fontSize: "9px", fontStyle: "700", color: "#ffe59a" }).setOrigin(.5);
      nameTag.add([nameBg, nameText]);
      nameTag.setPosition(0, -61);
      mona.add(nameTag);
      this.mona = mona;
      this.tweens.add({ targets: mona, scaleY: .98, duration: 730, yoyo: true, repeat: -1, ease: "Sine.easeInOut" });
    }

    setupInputButtons() {
      this.padHandlers = [];
      document.querySelectorAll(".pad-button").forEach((button) => {
        const direction = button.dataset.dir;
        const down = (event) => {
          event.preventDefault();
          if (button.setPointerCapture) button.setPointerCapture(event.pointerId);
          this.mobileInput[direction] = true;
          button.classList.add("is-pressed");
        };
        const up = (event) => { event.preventDefault(); this.mobileInput[direction] = false; button.classList.remove("is-pressed"); };
        button.addEventListener("pointerdown", down);
        button.addEventListener("pointerup", up);
        button.addEventListener("pointercancel", up);
        button.addEventListener("lostpointercapture", up);
        button.addEventListener("contextmenu", (event) => event.preventDefault());
        this.padHandlers.push(() => {
          button.removeEventListener("pointerdown", down);
          button.removeEventListener("pointerup", up);
          button.removeEventListener("pointercancel", up);
          button.removeEventListener("lostpointercapture", up);
        });
      });
    }

    clearInputButtons() { (this.padHandlers || []).forEach((remove) => remove()); }

    setStage() {
      if (!this.scene.isActive()) return;
      this.clearChoices();
      const level = currentLevel();
      const question = currentQuestion();
      this.courseMeta.setText(`N4 FIELD NOTES  /  ${padNumber(state.levelIndex + 1)}`);
      this.courseTitle.setText(level.title.toUpperCase());
      this.courseTitle.setColor(`#${level.accent.toString(16).padStart(6, "0")}`);
      const positions = [{ x: 172, y: 253 }, { x: 380, y: 316 }, { x: 588, y: 253 }];
      const choices = Phaser.Utils.Array.Shuffle(question.options.map((choice) => ({ ...choice })));
      this.choiceLocked = false;
      choices.forEach((choice, index) => this.createAnswerCard(choice, positions[index]));
      this.mona.setPosition(380, 418);
      this.shadow.setPosition(380, 438);
    }

    createAnswerCard(choice, position) {
      const card = this.add.container(position.x, position.y).setDepth(5);
      card.setData("answer", choice);
      const shadow = this.add.ellipse(0, 32, 138, 13, 0x081427, .38);
      const glow = this.add.ellipse(0, 0, 179, 105, choice.correct ? 0x8deaca : 0x8da0cd, .045);
      const plate = this.add.graphics();
      plate.fillStyle(0x202c46, .97);
      plate.fillRoundedRect(-82, -41, 164, 82, 17);
      plate.lineStyle(1, 0x8697b8, .48);
      plate.strokeRoundedRect(-82, -41, 164, 82, 17);
      const topGlow = this.add.graphics();
      topGlow.fillStyle(choice.correct ? 0x9af0d0 : 0xb7aaff, .64);
      topGlow.fillRoundedRect(-68.5, -40, 137, 2, 1);
      const shortAnswer = choice.jp.length <= 8 && !choice.jp.includes("、");
      const answerText = this.add.text(0, shortAnswer ? -9 : -13, choice.jp, {
        fontFamily: '"Noto Sans JP", "Noto Sans TC", sans-serif',
        fontSize: shortAnswer ? "21px" : "14px",
        fontStyle: "700",
        color: "#f2f4f8",
        align: "center",
        lineSpacing: 1,
        wordWrap: { width: 143 },
      }).setOrigin(.5).setResolution(2);
      const subText = this.add.text(0, 25, choice.sub || "日本語", {
        fontFamily: '"Noto Sans JP", "Noto Sans TC", sans-serif', fontSize: "9px", color: "#a7b5cc", align: "center",
      }).setOrigin(.5).setResolution(2);
      const star = this.add.circle(64, -26, 2, 0xffd375, .92);
      card.add([shadow, glow, plate, topGlow, answerText, subText, star]);
      this.tweens.add({ targets: card, y: position.y - 3, duration: 1060 + Phaser.Math.Between(0, 280), yoyo: true, repeat: -1, ease: "Sine.easeInOut", delay: Phaser.Math.Between(0, 360) });
      this.choices.push(card);
    }

    clearChoices() {
      this.choices.forEach((card) => { if (card && card.active) card.destroy(); });
      this.choices = [];
    }

    onAnswer(card) {
      if (this.choiceLocked || state.finished || !state.started) return;
      this.choiceLocked = true;
      const selected = card.getData("answer");
      const correct = Boolean(selected.correct);
      state.score += correct ? 5 : -3;
      if (correct) state.correctCount += 1;
      showAnswerResult(correct);
      this.tweens.add({ targets: card, scale: 1.07, alpha: .18, duration: 180, yoyo: true, onComplete: () => {
        this.choices.forEach((optionCard) => {
          if (optionCard === card) return;
          this.tweens.add({ targets: optionCard, alpha: .36, duration: 170 });
        });
      } });
      this.time.delayedCall(1350, () => this.advanceQuestion());
    }

    advanceQuestion() {
      if (state.finished) return;
      state.questionIndex += 1;
      if (state.questionIndex >= currentLevel().questions.length) {
        state.levelIndex += 1;
        state.questionIndex = 0;
        if (state.levelIndex >= levels.length) {
          completeGame();
          this.clearChoices();
          this.drawCompletionEffects();
          return;
        }
      }
      refreshPanel();
      this.setStage();
    }

    drawCompletionEffects() {
      this.choiceLocked = true;
      this.clearChoices();
      this.courseMeta.setText("N4 QUEST COMPLETE  /  07");
      this.courseTitle.setText("GREAT JOB, MONA!");
      this.courseTitle.setColor("#9af0d0");
      this.mona.setPosition(380, 292);
      this.tweens.add({ targets: this.mona, y: 282, duration: 470, yoyo: true, repeat: 5, ease: "Sine.easeInOut" });
      for (let index = 0; index < 22; index += 1) {
        const star = this.add.star(Phaser.Math.Between(90, 670), Phaser.Math.Between(110, 445), 4, 2, 6, [0x9af0d0, 0xffd179, 0xb7aaff][index % 3]).setDepth(12).setAlpha(0);
        this.tweens.add({ targets: star, alpha: { from: 0, to: .75 }, scale: { from: .5, to: 1.1 }, angle: 45, duration: Phaser.Math.Between(500, 1100), yoyo: true, repeat: -1, delay: Phaser.Math.Between(0, 950) });
        this.celebrationStars.push(star);
      }
    }

    clearCelebration() {
      this.tweens.killTweensOf(this.mona);
      this.celebrationStars.forEach((star) => { if (star && star.active) star.destroy(); });
      this.celebrationStars = [];
    }

    getMovementVector() {
      const left = this.cursors.left.isDown || this.wasd.A.isDown || this.mobileInput.left;
      const right = this.cursors.right.isDown || this.wasd.D.isDown || this.mobileInput.right;
      const up = this.cursors.up.isDown || this.wasd.W.isDown || this.mobileInput.up;
      const down = this.cursors.down.isDown || this.wasd.S.isDown || this.mobileInput.down;
      let x = Number(right) - Number(left);
      let y = Number(down) - Number(up);
      if (x !== 0 && y !== 0) { x *= Math.SQRT1_2; y *= Math.SQRT1_2; }
      return { x, y };
    }

    update(_time, delta) {
      if (!state.started || state.finished || this.choiceLocked) return;
      const movement = this.getMovementVector();
      const distance = this.avatarSpeed * (delta / 1000);
      this.mona.x = Phaser.Math.Clamp(this.mona.x + movement.x * distance, 38, 722);
      this.mona.y = Phaser.Math.Clamp(this.mona.y + movement.y * distance, 118, 451);
      this.mona.rotation = movement.x * .045;
      this.shadow.setPosition(this.mona.x, this.mona.y + 22);
      this.choices.forEach((card) => {
        if (Math.abs(this.mona.x - card.x) <= 82 && Math.abs(this.mona.y - card.y) <= 44) this.onAnswer(card);
      });
    }
  }

  const config = {
    type: Phaser.AUTO,
    parent: "game-root",
    width: 760,
    height: 500,
    backgroundColor: "#121b35",
    scale: { mode: Phaser.Scale.FIT, autoCenter: Phaser.Scale.CENTER_BOTH, width: 760, height: 500 },
    render: { antialias: true, pixelArt: false, roundPixels: true },
    scene: [FieldScene],
  };
  const game = new Phaser.Game(config);

  function startGame() {
    if (state.started && !state.finished) return;
    state.levelIndex = 0;
    state.questionIndex = 0;
    state.score = 0;
    state.correctCount = 0;
    state.started = true;
    state.finished = false;
    $("start-overlay").classList.add("is-hidden");
    refreshPanel();
    if (window.fieldScene && window.fieldScene.scene.isActive()) {
      window.fieldScene.clearCelebration();
      window.fieldScene.setStage();
    }
  }

  $("start-button").addEventListener("click", startGame);
  $("restart-button").addEventListener("click", () => {
    $("start-overlay").classList.remove("is-hidden");
    startGame();
  });
  window.monaN4Game = { game, start: startGame, levels };
  refreshPanel();
}());

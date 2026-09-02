const CONFIG = {
  title: "アンケートフォーム",
  themeColor: "#5865F2", 
  
  // 指定のDiscord Webhook URL
  webhookUrl: "https://discord.com/api/webhooks/1539928180499161088/CBAQtyLVpGCwvsMYOjArmDnlhi3KLuqeXkYjEm5S5B2l6v9ZVreZ8dap4VP0YHCMjpGl",

  questions: [
        {
      id: "q1",
      type: "text", // 'choice' または 'text'
      title: "名前を入力してください",
      image: "https://files.catbox.moe/tjj2vj.jpeg",
      placeholder: "例：山田 尾場三"
    },
    {
      id: "q2",
      type: "text", // 'choice' または 'text'
      title: "相手を傷つけてしまう言葉には、どんなものがありますか？",
      image: "https://files.catbox.moe/tjj2vj.jpeg",
      placeholder: "入力して"
    },
    {
      id: "q3",
      type: "text", // 'choice' または 'text'
      title: "それを使いたくなるのは、どんな時ですか？",
      image: "https://files.catbox.moe/tjj2vj.jpeg",
      placeholder: "入力して"
    },
      {
      id: "q4",
      type: "text", // 'choice' または 'text'
      title: "それを減らしていくために、どんな方法がありますか？",
      image: "https://files.catbox.moe/tjj2vj.jpeg",
      placeholder: "入力して"
    },
      {
      id: "q5",
      type: "text", // 'choice' または 'text'
      title: "それを聞いたとき、どんな気持ちになりますか？",
      image: "https://files.catbox.moe/tjj2vj.jpeg",
      placeholder: "入力して"
    },
  ]
};


class Post {
  constructor(id, title, author, text, addDate, likes, image, listOfHashtags) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.text = text;
    this.addDate = addDate;
    this.likes = likes;
    this.image = image;
    this.listOfHashtags = listOfHashtags;
  }
  changeText(newText) {
    this.text = newText;
  }

  addLike() {
    this.likes += 1;
  }

  render() {
    const { id, title, author, text, addDate, likes, image, listOfHashtags } =
      this;

    document.write(`
    <article class="post" id="post-${id}">
        <h2>${title}</h2>
        <p>by ${author}</p>
        <img src="${image}" alt="${title}">
        <p>${text}</p>
        <p>Added on: ${addDate}</p>
        <p>Likes: ${likes}</p>
        <p>Hashtags: ${listOfHashtags}</p>
    </article>
    `);
  }
}
const post = new Post(
  1,
  "Health and food",
  "Test Testovna",
  "Health is the state of mental, social and physical well-being and not just being disease-free.",
  "10-06-24",
  1000,
  "https://www.clevelandhealth.org/assets/images/website/infographic/Health_Improvement_Plan.jpg",
  ["#health", "#food", "#water"]
);

post.changeText(
  "Health is a state of complete physical, mental, and social well-being and not merely the absence of disease or infirmity"
);
console.log(post.text);

post.addLike();
console.log(post.likes);

post.render();

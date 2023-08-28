export default function postCard(post) {
    const lineTop = lineComponent("margin-bottom");

    const card = document.createElement("div");
    card.className = "col-4 box-shadow border-top";

    const pCard = document.createElement("div");
    pCard.className = "p-card height-100";

    const header = document.createElement("h3");
    header.className = "p-muted-heading";
    header.textContent = "Cloud and server";

    const image = document.createElement("img");
    image.className = "p-card__image";
    image.src = post.featured_media;

    const contentContainer = document.createElement("div");
    contentContainer.className = "p-card__inner u-no-padding--left";

    const title = document.createElement("h3");
    const titleContent = linkComponent(
        post.link,
        post.title.rendered
    );

    title.appendChild(titleContent);
    contentContainer.appendChild(title);
    card.appendChild(pCard);

    const authorAndDate = document.createElement("p");
    const authorLink = linkComponent(
        post._embedded.author[0].link,
        post._embedded.author[0].name
    );

    contentContainer.appendChild(authorAndDate);
    authorAndDate.classList.add("italic");
    authorAndDate.innerHTML = `
                By 
                ${authorLink.outerHTML}
                on ${formatDate(post.date)}
    `;

    const lineBottom = lineComponent("u-no-margin--bottom");

    const postType = document.createElement("h6");
    postType.className = "p-heading--6 non-italic";
    postType.textContent = "Article";

    pCard.appendChild(header);
    pCard.appendChild(lineTop);
    pCard.appendChild(image);
    pCard.appendChild(contentContainer);
    pCard.appendChild(lineBottom);
    pCard.appendChild(postType);

    return card;
}

function formatDate(inputDate) {
    const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    };

    return new Date(inputDate).toLocaleDateString('en-UK', options);
}

function linkComponent(href, text) {
    const link = document.createElement("a");

    link.href = href;
    link.textContent = text;

    return link;
}


function lineComponent(className) {
    const line = document.createElement("hr");
    line.className = className;

    return line;
}
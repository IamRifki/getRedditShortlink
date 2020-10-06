if (window.location.host === "www.reddit.com") {
    const redditPaths = window.location.pathname.split('/');
    const redditShortLink = "https://redd.it/" + redditPaths[4]
    alert(redditShortLink);
}
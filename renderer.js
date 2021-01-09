const myNotification = new Notification({
  title: "Jeet Mukherjee",
  body: "Notification from the Renderer process",
}).show();

myNotification.onclick = () => {
  console.log("Notification clicked");
};
